import { createServer } from "node:http";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";
import { runInNewContext } from "node:vm";
import { createCanvas, CanvasError, joinSession } from "@github/copilot-sdk/extension";

const SITE_ROOT = "https://nattlorden.com/";
const SOURCES = [
    { path: "MajLisa", artist: "Maj-Lisa & Skramlet", sections: null, artistBySection: { solo: "Mailysa" } },
    { path: "Freyja", artist: "Freyja", sections: new Set(["music"]) },
    { path: "Galdra", artist: "Galdrakällan", sections: new Set(["nattlorden", "album"]) },
    { path: "WvB", artist: "Wilhelm von Braun", sections: new Set(["general"]) },
    { path: "PHC", artist: "Posthuman Cabaret", sections: null },
    { path: "Echaeon", artist: "Echæon", sections: new Set(["echaeon"]) },
    { path: "THC", artist: "Threshold Canticle", sections: null },
    {
        path: "Fragments",
        artist: "Side Projects",
        sections: null,
        artistSectionsFromMenu: true,
        artistBySection: {
            nattlorden: "Nattlorden",
            croonlius: "Croonlius",
            khellendros: "Khellendros",
            disir: "Dísir",
            other: "Side Projects",
        },
    },
];

const NON_SONG_KEYS = new Set([
    "about", "overview", "concept", "notes", "manifesto", "aesthetic", "albums",
    "log", "project", "texts", "bibliography", "timeline", "portrait", "invocation",
    "cycles", "offerings", "practice", "forest", "stone", "water", "night",
    "archetypes", "symbols", "fragments", "stubbe", "dummy", "track", "tracks",
]);
const NON_SONG_TITLE = /^(?:titel|songs?)$|\b(about|overview|album|albums|discography|bibliography|timeline|manifesto|concept|project log|missing)\b/i;
const MUSIC_URL = /https?:\/\/(?:open\.spotify\.com|(?:www\.)?youtube\.com|youtu\.be)\/[^\s"'<>`]+/gi;
const servers = new Map();
let session;
let catalog = null;
let refreshPromise = null;

function cleanTitle(value) {
    return String(value || "")
        .replace(/<[^>]+>/g, "")
        .replace(/^[\s\u2000-\u200f\u2022\u2023\u25cf\u25e6\u30fb・]*(?:\d+[.)]\s*)?/, "")
        .replace(/\s+/g, " ")
        .trim();
}

function normalize(value) {
    return cleanTitle(value).normalize("NFKD").replace(/\p{Diacritic}/gu, "").toLowerCase();
}

function stringsIn(value, result = []) {
    if (typeof value === "string") {
        result.push(value);
    } else if (Array.isArray(value)) {
        for (const item of value) stringsIn(item, result);
    } else if (value && typeof value === "object") {
        for (const item of Object.values(value)) stringsIn(item, result);
    }
    return result;
}

function linksIn(value) {
    const links = { spotify: null, youtube: null };
    for (const text of stringsIn(value)) {
        for (const match of text.matchAll(MUSIC_URL)) {
            const url = match[0].replace(/[),.;]+$/, "");
            if (url.includes("spotify.com") && !links.spotify) links.spotify = url;
            if ((url.includes("youtube.com") || url.includes("youtu.be")) && !links.youtube) links.youtube = url;
        }
    }
    return links;
}

function releaseIn(page) {
    const caption = page?.blocks?.find((block) => block?.type === "image" && block.caption)?.caption;
    return caption ? cleanTitle(caption) : null;
}

function coverIn(page, sourceUrl) {
    const src = page?.blocks?.find((block) => block?.type === "image" && block.src)?.src;
    return src ? new URL(src, sourceUrl).href : null;
}

function sectionTitle(sectionKey, section) {
    const lead = section?.overview || section?.about;
    const title = cleanTitle(lead?.title || lead?.menuTitle);
    if (title && !/^(about|overview)$/i.test(title)) return title;
    return cleanTitle(sectionKey.replace(/([a-z])([A-Z])/g, "$1 $2"));
}

function addEmbeddedTracks(page, context, add) {
    for (const block of page?.blocks || []) {
        for (const card of block?.cards || []) {
            add({
                title: card.title,
                pageKey: card.page,
                spotify: card.spotify,
                youtube: card.youtube,
                cover: card.image ? new URL(card.image, context.sourceUrl).href : null,
            });
        }
        for (const record of block?.records || []) {
            for (const side of record?.sides || []) {
                for (const track of side?.tracks || []) {
                    add({
                        title: track.title,
                        pageKey: track.page,
                        spotify: track.spotify,
                        youtube: track.youtube,
                        cover: record.front ? new URL(record.front, context.sourceUrl).href : null,
                        collection: record.title,
                        artist: record.artist,
                    });
                }
            }
        }
    }
    for (const card of page?.cards || []) {
        add({
            title: card.title,
            pageKey: card.page,
            spotify: card.spotify,
            youtube: card.youtube,
            cover: card.image ? new URL(card.image, context.sourceUrl).href : null,
        });
    }
}

function parseContentScript(script, source, { requireMusicLinks = false } = {}) {
    let content;
    try {
        content = runInNewContext(`${script}\n;contentEN;`, Object.create(null), {
            timeout: 750,
            displayErrors: false,
        });
    } catch (error) {
        throw new Error(`Could not parse ${source.path}/js/content-en.js: ${error.message}`);
    }

    const songs = [];
    const seen = new Set();
    const sourceUrl = new URL(`${source.path}/index.html`, SITE_ROOT).href;

    for (const [sectionKey, section] of Object.entries(content || {})) {
        if (!section || typeof section !== "object") continue;
        if (source.sections && !source.sections.has(sectionKey)) continue;

        const artist = source.artistBySection?.[sectionKey] || source.artist;
        const collection = sectionTitle(sectionKey, section);
        const context = { artist, collection, sectionKey, sourceUrl };

        const add = (candidate) => {
            const title = cleanTitle(candidate.title);
            if (!title || !/[\p{L}\p{N}]/u.test(title) || NON_SONG_TITLE.test(title)) return;
            if (requireMusicLinks && !candidate.spotify && !candidate.youtube) return;
            const resolvedArtist = cleanTitle(candidate.artist) || artist;
            const key = `${normalize(resolvedArtist)}|${normalize(title)}`;
            if (seen.has(key)) return;
            seen.add(key);
            const pageKey = candidate.pageKey || "";
            songs.push({
                artist: resolvedArtist,
                title,
                collection: cleanTitle(candidate.collection) || collection || null,
                release: candidate.release || null,
                spotify: candidate.spotify || null,
                youtube: candidate.youtube || null,
                cover: candidate.cover || null,
                source: `${sourceUrl}#${encodeURIComponent(sectionKey)}/${encodeURIComponent(pageKey)}`,
                sourceArea: source.path,
            });
        };

        for (const [pageKey, page] of Object.entries(section)) {
            if (!page || typeof page !== "object") continue;
            addEmbeddedTracks(page, context, add);

            const title = cleanTitle(page.title || page.menuTitle);
            const hasStructuredListing = page.layout === "cards" ||
                page.cards?.length ||
                page.blocks?.some((block) => block?.type === "cardGrid" || block?.type === "recordGrid");
            if (NON_SONG_KEYS.has(pageKey) || hasStructuredListing || !title || NON_SONG_TITLE.test(title)) continue;

            const links = linksIn(page);
            add({
                title,
                pageKey,
                ...links,
                cover: coverIn(page, sourceUrl),
                release: releaseIn(page),
            });
        }
    }
    return songs;
}

async function fetchSiteText(path, { fresh = false } = {}) {
    const url = new URL(path, SITE_ROOT);
    if (fresh) url.searchParams.set("_catalog_refresh", Date.now().toString());
    const response = await fetch(url, {
        cache: "no-store",
        headers: {
            "Cache-Control": "no-cache",
            "Pragma": "no-cache",
            "User-Agent": "Copilot-Nattlorden-Catalog/1.0",
        },
    });
    if (!response.ok) throw new Error(`${url.href} returned HTTP ${response.status}`);
    return response.text();
}

function parseEnglishSectionLabels(script, sourcePath) {
    try {
        const labels = runInNewContext(`${script}\n;sectionLabels?.en || {};`, Object.create(null), {
            timeout: 750,
            displayErrors: false,
        });
        return Object.fromEntries(Object.entries(labels).map(([key, value]) => [key, cleanTitle(value)]));
    } catch (error) {
        throw new Error(`Could not parse ${sourcePath}/js/menu.js: ${error.message}`);
    }
}

async function crawlConfiguredSource(source, fresh = false) {
    const [contentScript, menuScript] = await Promise.all([
        fetchSiteText(`${source.path}/js/content-en.js`, { fresh }),
        source.artistSectionsFromMenu
            ? fetchSiteText(`${source.path}/js/menu.js`, { fresh })
            : Promise.resolve(null),
    ]);
    const menuArtists = menuScript ? parseEnglishSectionLabels(menuScript, source.path) : {};
    return parseContentScript(contentScript, {
        ...source,
        artistBySection: {
            ...menuArtists,
            ...source.artistBySection,
        },
    });
}

async function crawlSerenia(fresh = false) {
    const [musicScript, contentScript, swedishContentScript] = await Promise.all([
        fetchSiteText("Serenia/js/music-data.js", { fresh }),
        fetchSiteText("Serenia/js/content-en.js", { fresh }),
        fetchSiteText("Serenia/js/content-sv.js", { fresh }),
    ]);
    let musicData;
    let content;
    let swedishContent;
    try {
        musicData = runInNewContext(`${musicScript}\n;musicData;`, Object.create(null), {
            timeout: 750,
            displayErrors: false,
        });
        content = runInNewContext(`${contentScript}\n;contentEN;`, { chaptersEN_01_05: {} }, {
            timeout: 750,
            displayErrors: false,
        });
        swedishContent = runInNewContext(`${swedishContentScript}\n;contentSV;`, {
            chaptersSV_01_05: {},
            chaptersSV_06_10: {},
        }, {
            timeout: 750,
            displayErrors: false,
        });
    } catch (error) {
        throw new Error(`Could not parse Serenia music data: ${error.message}`);
    }

    const sourceUrl = new URL("Serenia/index.html", SITE_ROOT).href;
    const songs = [];
    const seen = new Set();
    const add = (candidate) => {
        const title = cleanTitle(candidate.title);
        const key = candidate.pageKey ? `page:${candidate.pageKey}` : `title:${normalize(title)}`;
        if (!title || !/[\p{L}\p{N}]/u.test(title) || seen.has(key)) return;
        seen.add(key);
        songs.push({
            artist: "Serenia",
            title,
            collection: cleanTitle(candidate.collection) || null,
            release: candidate.release || null,
            spotify: candidate.spotify || null,
            youtube: candidate.youtube || null,
            cover: candidate.cover || null,
            source: `${sourceUrl}#music/${encodeURIComponent(candidate.pageKey || "overview")}`,
            sourceArea: "Serenia",
        });
    };

    for (const [albumKey, album] of Object.entries(musicData?.albums || {})) {
        for (const track of album?.tracks || []) {
            add({
                title: track.title,
                collection: album.title,
                spotify: track.spotify,
                youtube: track.youtube,
                cover: album.image ? new URL(album.image, sourceUrl).href : null,
                pageKey: track.key || albumKey,
            });
        }
    }

    const addStandaloneReleases = (languageContent) => {
        const music = languageContent?.music || {};
        const standaloneBlocks = music.songs?.blocks || [];
        for (let index = 0; index < standaloneBlocks.length; index += 1) {
            const block = standaloneBlocks[index];
            if (block?.type !== "text") continue;
            const previousImage = standaloneBlocks[index - 1]?.type === "image" ? standaloneBlocks[index - 1] : null;
            const internalLinks = [...String(block.content || "").matchAll(
                /<a\b[^>]*data-page=["']([^"']+)["'][^>]*>[\s\S]*?<\/a>/gi,
            )];
            for (let linkIndex = 0; linkIndex < internalLinks.length; linkIndex += 1) {
                const match = internalLinks[linkIndex];
                const pageKey = match[1];
                const segmentEnd = internalLinks[linkIndex + 1]?.index ?? block.content.length;
                const links = linksIn(block.content.slice(match.index, segmentEnd));
                if (!links.spotify && !links.youtube) continue;
                const rawCaption = String(previousImage?.caption || "");
                const captionTitle = cleanTitle(rawCaption.match(/<i>([\s\S]*?)<\/i>/i)?.[1]);
                const caption = cleanTitle(rawCaption);
                add({
                    title: music[pageKey]?.title || captionTitle || pageKey,
                    collection: "Canticles & Fragments",
                    pageKey,
                    ...links,
                    cover: previousImage?.src ? new URL(previousImage.src, sourceUrl).href : null,
                    release: caption.match(/(?:Published|Publicerad):\s*(.+)$/i)?.[1] || null,
                });
            }
        }
    };

    addStandaloneReleases(content);
    addStandaloneReleases(swedishContent);

    const music = content?.music || {};
    const symphony = music.symph1;
    if (symphony) {
        const links = linksIn(symphony);
        add({
            title: symphony.title,
            collection: "Instrumental Themes",
            pageKey: "symph1",
            ...links,
            cover: coverIn(symphony, sourceUrl),
            release: releaseIn(symphony),
        });
    }
    return songs;
}

async function crawlOpera(fresh = false) {
    const script = await fetchSiteText("Opera/js/content-en.js", { fresh });
    let content;
    try {
        content = runInNewContext(`${script}\n;contentEN;`, Object.create(null), {
            timeout: 750,
            displayErrors: false,
        });
    } catch (error) {
        throw new Error(`Could not parse Opera music data: ${error.message}`);
    }
    const sourceUrl = new URL("Opera/index.html", SITE_ROOT).href;
    const page = content?.avalon?.about;
    if (!page) throw new Error("Opera Avalon page was not found");
    const links = linksIn(page);
    return [{
        artist: "Björn Andersson",
        title: "Camelot e Avalon",
        collection: "Opera",
        release: null,
        spotify: links.spotify,
        youtube: links.youtube,
        cover: coverIn(page, sourceUrl),
        source: `${sourceUrl}#avalon/about`,
        sourceArea: "Opera",
    }];
}

function homepageMusicCandidates(html) {
    const candidates = new Map();
    for (const match of html.matchAll(/<a\b[^>]*href=["']([^"'#?]+\/index\.html)["'][^>]*>[\s\S]*?<h2>([\s\S]*?)<\/h2>[\s\S]*?<\/a>/gi)) {
        const url = new URL(match[1], SITE_ROOT);
        if (url.origin !== new URL(SITE_ROOT).origin) continue;
        const path = url.pathname.split("/").filter(Boolean)[0];
        const artist = cleanTitle(match[2].replace(/<br\s*\/?>/gi, " "));
        if (path && artist) candidates.set(path.toLowerCase(), { path, artist });
    }
    return [...candidates.values()];
}

async function crawlDiscoveredSources(fresh = false) {
    const homepage = await fetchSiteText("", { fresh });
    const knownPaths = new Set([...SOURCES.map((source) => source.path), "Serenia", "Opera"]
        .map((path) => path.toLowerCase()));
    const candidates = homepageMusicCandidates(homepage)
        .filter((candidate) => !knownPaths.has(candidate.path.toLowerCase()));
    const results = await Promise.all(candidates.map(async (candidate) => {
        try {
            const index = await fetchSiteText(`${candidate.path}/index.html`, { fresh });
            if (!/\bjs\/content-en\.js\b/i.test(index)) return { songs: [], warning: null };
            const script = await fetchSiteText(`${candidate.path}/js/content-en.js`, { fresh });
            const songs = parseContentScript(script, {
                path: candidate.path,
                artist: candidate.artist,
                sections: null,
            }, { requireMusicLinks: true });
            return { songs, warning: null };
        } catch (error) {
            return {
                songs: [],
                warning: `${candidate.artist} (${candidate.path}): ${error.message}`,
            };
        }
    }));
    return {
        songs: results.flatMap((result) => result.songs),
        warnings: results.map((result) => result.warning).filter(Boolean),
        discoveredPaths: candidates.map((candidate) => candidate.path),
    };
}

function cachePath() {
    return session?.workspacePath ? join(session.workspacePath, "nattlorden-music-catalog.json") : null;
}

function staticDataPath() {
    return session?.workspacePath
        ? join(session.workspacePath, "files", "nattlorden-music-catalog", "data.js")
        : null;
}

async function saveCatalog(value) {
    const json = JSON.stringify(value, null, 2);
    const cache = cachePath();
    const staticData = staticDataPath();
    const writes = [];
    if (cache) writes.push(writeFile(cache, json, "utf8"));
    if (staticData) {
        await mkdir(join(session.workspacePath, "files", "nattlorden-music-catalog"), { recursive: true });
        writes.push(writeFile(staticData, `window.NATTLORDEN_CATALOG = ${json};\n`, "utf8"));
    }
    await Promise.all(writes);
}

async function loadCatalog() {
    const path = cachePath();
    if (!path) return null;
    try {
        return JSON.parse(await readFile(path, "utf8"));
    } catch (error) {
        if (error?.code === "ENOENT") return null;
        throw error;
    }
}

function catalogDiff(previous, next) {
    const previousSongs = new Set((previous?.songs || [])
        .map((song) => `${normalize(song.artist)}|${normalize(song.title)}`));
    const previousArtists = new Set((previous?.artists || []).map(normalize));
    return {
        addedSongs: next.songs
            .filter((song) => !previousSongs.has(`${normalize(song.artist)}|${normalize(song.title)}`))
            .map((song) => ({ artist: song.artist, title: song.title })),
        addedArtists: next.artists.filter((artist) => !previousArtists.has(normalize(artist))),
    };
}

async function crawlCatalog({ fresh = false, previous = catalog } = {}) {
    const jobs = [
        ...SOURCES.map((source) => crawlConfiguredSource(source, fresh)),
        crawlSerenia(fresh),
        crawlOpera(fresh),
    ];
    const settled = await Promise.allSettled(jobs);
    const warnings = settled
        .filter((result) => result.status === "rejected")
        .map((result) => result.reason?.message || String(result.reason));
    const results = settled
        .filter((result) => result.status === "fulfilled")
        .map((result) => result.value);
    const discovered = await crawlDiscoveredSources(fresh);
    results.push(discovered.songs);
    warnings.push(...discovered.warnings);
    if (!results.some((songs) => songs.length)) {
        throw new Error(`No catalog sources could be read. ${warnings.join(" | ")}`);
    }

    const deduplicated = new Map();
    for (const song of results.flat()) {
        const key = `${normalize(song.artist)}|${normalize(song.title)}`;
        const existing = deduplicated.get(key);
        if (!existing || [song.cover, song.spotify, song.youtube].filter(Boolean).length >
            [existing.cover, existing.spotify, existing.youtube].filter(Boolean).length) {
            deduplicated.set(key, song);
        }
    }
    const songs = [...deduplicated.values()].sort((a, b) =>
        a.artist.localeCompare(b.artist, "en") || a.title.localeCompare(b.title, "en"));
    const artists = [...new Set(songs.map((song) => song.artist))].sort((a, b) => a.localeCompare(b, "en"));
    const value = {
        site: SITE_ROOT,
        updatedAt: new Date().toISOString(),
        artists,
        songs,
        counts: { artists: artists.length, songs: songs.length },
        warnings,
        discoveredPaths: discovered.discoveredPaths,
    };
    value.refresh = catalogDiff(previous, value);
    await saveCatalog(value);
    catalog = value;
    return value;
}

async function getCatalog(force = false) {
    if (!force && catalog) return catalog;
    if (!force) {
        catalog = await loadCatalog();
        if (catalog) return catalog;
    }
    if (!refreshPromise) {
        const previous = catalog || await loadCatalog();
        refreshPromise = crawlCatalog({ fresh: force, previous }).finally(() => { refreshPromise = null; });
    }
    return refreshPromise;
}

function sendJson(res, status, value) {
    res.writeHead(status, {
        "Content-Type": "application/json; charset=utf-8",
        "Cache-Control": "no-store",
    });
    res.end(JSON.stringify(value));
}

function renderHtml() {
    return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Nattlorden music catalog</title>
  <style>
    :root {
      color-scheme: dark;
      --ink: #0b0d0f;
      --panel: #121518;
      --panel-raised: #171a1d;
      --ivory: #e6e0d4;
      --muted: #9c9588;
      --brass: #c8a75a;
      --brass-bright: #e0c878;
      --verdigris: #63847e;
      --line: rgba(200, 167, 90, 0.32);
    }
    * { box-sizing: border-box; }
    body {
      margin: 0;
      background:
        radial-gradient(circle at 14% 4%, rgba(99, 132, 126, 0.13), transparent 28rem),
        radial-gradient(circle at 88% 18%, rgba(123, 71, 46, 0.11), transparent 30rem),
        repeating-linear-gradient(135deg, transparent 0 28px, rgba(200, 167, 90, 0.018) 29px 30px),
        var(--ink);
      color: var(--ivory);
      font-family: Georgia, "Times New Roman", serif;
      font-size: var(--text-body-medium, 14px); line-height: var(--leading-body-medium, 20px);
    }
    header {
      position: sticky; top: 0; z-index: 2; padding: 20px 24px 18px;
      background:
        linear-gradient(90deg, rgba(99, 132, 126, 0.08), transparent 28%, transparent 72%, rgba(123, 71, 46, 0.08)),
        rgba(11, 13, 15, 0.96);
      backdrop-filter: blur(16px);
      border-bottom: 1px solid var(--line);
      box-shadow: 0 12px 35px rgba(0, 0, 0, 0.32);
    }
    header::after {
      content: ""; position: absolute; left: 24px; right: 24px; bottom: 5px; height: 5px;
      background:
        linear-gradient(90deg, transparent, var(--brass) 12%, var(--brass) 42%, transparent 42%) left / 50% 1px no-repeat,
        linear-gradient(270deg, transparent, var(--brass) 12%, var(--brass) 42%, transparent 42%) right / 50% 1px no-repeat;
      opacity: 0.5;
    }
    .heading { display: flex; align-items: flex-start; justify-content: space-between; gap: 16px; }
    .eyebrow {
      margin-bottom: 4px; color: var(--brass); font-size: 10px; line-height: 1;
      letter-spacing: 0.34em; text-transform: uppercase;
    }
    h1 {
      margin: 0 0 4px; color: var(--ivory); font-size: clamp(25px, 4vw, 36px); line-height: 1.08;
      font-weight: 400; letter-spacing: 0.12em; text-transform: uppercase;
      text-shadow: 0 2px 20px rgba(200, 167, 90, 0.15);
    }
    .subtle, .meta { color: var(--muted); }
    .toolbar { display: grid; grid-template-columns: minmax(220px, 1fr) minmax(150px, 240px); gap: 10px; margin-top: 16px; }
    input, select, button {
      min-height: 38px; border: 1px solid var(--line); border-radius: 2px;
      background: linear-gradient(180deg, rgba(255,255,255,0.025), transparent), var(--panel);
      color: var(--ivory); font: inherit; padding: 8px 11px;
    }
    input::placeholder { color: #716b61; }
    input:focus, select:focus, button:focus { outline: 1px solid var(--brass-bright); outline-offset: 2px; }
    button {
      cursor: pointer; color: var(--brass); font-weight: 600; letter-spacing: 0.1em;
      text-transform: uppercase; transition: color 160ms ease, border-color 160ms ease, background 160ms ease;
    }
    button:hover { color: var(--brass-bright); border-color: var(--brass); background: #1b1914; }
    main { max-width: 1480px; margin: 0 auto; padding: 22px 24px 42px; }
    .stats {
      display: flex; flex-wrap: wrap; gap: 8px 22px; margin-bottom: 18px; color: var(--muted);
      font-size: 12px; letter-spacing: 0.06em; text-transform: uppercase;
    }
    .stats strong { color: var(--brass-bright); font-size: 15px; }
    .grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 14px; }
    article {
      position: relative; display: grid; grid-template-columns: 64px minmax(0, 1fr); gap: 13px;
      min-height: 104px; padding: 14px;
      border: 1px solid var(--line);
      border-radius: 2px 12px 2px 12px;
      background:
        linear-gradient(135deg, rgba(99,132,126,0.08), transparent 40%),
        linear-gradient(315deg, rgba(200,167,90,0.055), transparent 45%),
        var(--panel);
      box-shadow: inset 0 0 0 3px var(--ink), inset 0 0 0 4px rgba(200,167,90,0.09), 0 8px 20px rgba(0,0,0,0.16);
      transition: transform 180ms ease, border-color 180ms ease, background 180ms ease;
    }
    article::after {
      content: ""; position: absolute; right: 7px; top: 7px; width: 12px; height: 12px;
      border-top: 1px solid var(--brass); border-right: 1px solid var(--brass); opacity: 0.5;
    }
    article:hover { transform: translateY(-2px); border-color: rgba(224, 200, 120, 0.58); background-color: var(--panel-raised); }
    .cover {
      position: relative; z-index: 1;
      width: 64px; height: 64px; border: 1px solid rgba(200,167,90,0.38); border-radius: 50%;
      object-fit: cover; background: #202326; filter: sepia(0.08) contrast(1.03);
      box-shadow: 0 0 0 3px var(--ink), 0 0 0 4px rgba(200,167,90,0.24);
    }
    img.cover {
      cursor: zoom-in; transform-origin: left center; will-change: transform;
      transition: transform 220ms ease 0ms, box-shadow 220ms ease 0ms;
    }
    img.cover:hover {
      z-index: 5; transform: scale(2.25);
      box-shadow: 0 0 0 3px var(--ink), 0 0 0 5px var(--brass), 0 14px 34px rgba(0,0,0,0.68);
      transition-delay: 750ms;
    }
    .placeholder {
      display: grid; place-items: center; color: var(--brass); font-size: 22px; font-weight: 400;
      background: radial-gradient(circle, #262219, #111416 68%);
    }
    h2 { margin: 0; padding-right: 10px; color: var(--ivory); font-size: 15px; line-height: 20px; font-weight: 500; letter-spacing: 0.025em; }
    .artist { margin-top: 2px; color: var(--brass); font-size: 12px; font-weight: 600; letter-spacing: 0.09em; text-transform: uppercase; }
    .collection { white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
    .links { display: flex; flex-wrap: wrap; gap: 6px 12px; margin-top: 8px; }
    a {
      color: var(--verdigris); font-size: 12px; letter-spacing: 0.045em; text-decoration: none;
      border-bottom: 1px solid rgba(99,132,126,0.35);
    }
    a:hover { color: #8eb0a9; border-bottom-color: currentColor; }
    .empty, .error { padding: 36px; text-align: center; color: var(--muted); }
    @media (max-width: 600px) { header, main { padding-left: 14px; padding-right: 14px; } .toolbar { grid-template-columns: 1fr; } }
  </style>
</head>
<body>
  <header>
    <div class="heading">
      <div><div class="eyebrow">The mechanical archive</div><h1>Nattlorden Music</h1><div class="subtle">Artists and songs found across nattlorden.com</div></div>
      <button id="refresh" type="button">Refresh</button>
    </div>
    <div class="toolbar">
      <input id="search" type="search" placeholder="Search songs, artists, albums…" autocomplete="off">
      <select id="artist"><option value="">All artists</option></select>
    </div>
  </header>
  <main>
    <div id="stats" class="stats">Loading catalog…</div>
    <div id="grid" class="grid"></div>
  </main>
  <script>
    const state = { data: null, query: "", artist: "" };
    const escapeHtml = value => String(value ?? "").replace(/[&<>"']/g, char => ({ "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;", "'":"&#39;" })[char]);
    function link(url, label) { return url ? '<a href="' + escapeHtml(url) + '" target="_blank" rel="noopener noreferrer">' + label + '</a>' : ""; }
    function render() {
      if (!state.data) return;
      const q = state.query.trim().toLocaleLowerCase();
      const songs = state.data.songs.filter(song => {
        const text = [song.title, song.artist, song.collection, song.release].filter(Boolean).join(" ").toLocaleLowerCase();
        return (!state.artist || song.artist === state.artist) && (!q || text.includes(q));
      });
      document.querySelector("#stats").innerHTML =
        '<span><strong>' + songs.length + '</strong> songs shown</span><span><strong>' +
        state.data.counts.artists + '</strong> artists indexed</span><span class="meta">Updated ' +
        new Date(state.data.updatedAt).toLocaleString() + '</span>' +
        (state.data.refresh?.addedSongs?.length || state.data.refresh?.addedArtists?.length
          ? '<span><strong>+' + state.data.refresh.addedSongs.length + '</strong> songs, <strong>+' +
            state.data.refresh.addedArtists.length + '</strong> artists</span>'
          : '') +
        (state.data.warnings?.length
          ? '<span title="' + escapeHtml(state.data.warnings.join('\\n')) + '">⚠ ' +
            state.data.warnings.length + ' source warning' + (state.data.warnings.length === 1 ? '' : 's') + '</span>'
          : '');
      document.querySelector("#grid").innerHTML = songs.length ? songs.map(song => {
        const art = song.cover
          ? '<img class="cover" src="' + escapeHtml(song.cover) + '" alt="" loading="lazy">'
          : '<div class="cover placeholder">♪</div>';
        return '<article>' + art + '<div><h2>' + escapeHtml(song.title) + '</h2>' +
          '<div class="artist">' + escapeHtml(song.artist) + '</div>' +
          (song.collection ? '<div class="collection meta">' + escapeHtml(song.collection) + '</div>' : '') +
          (song.release ? '<div class="meta">' + escapeHtml(song.release) + '</div>' : '') +
          '<div class="links">' + link(song.spotify, "Spotify") + link(song.youtube, "YouTube") +
          link(song.source, "Source") + '</div></div></article>';
      }).join("") : '<div class="empty">No matching songs.</div>';
    }
    async function load(force = false) {
      const button = document.querySelector("#refresh");
      button.disabled = true; button.textContent = force ? "Refreshing…" : "Loading…";
      try {
        const response = force
          ? await fetch("/api/refresh", { method: "POST" })
          : await fetch("/api/catalog");
        if (!response.ok) throw new Error((await response.json()).error || "Catalog request failed");
        state.data = await response.json();
        const select = document.querySelector("#artist");
        const selected = select.value;
        select.innerHTML = '<option value="">All artists</option>' + state.data.artists.map(artist =>
          '<option value="' + escapeHtml(artist) + '">' + escapeHtml(artist) + '</option>').join("");
        select.value = state.data.artists.includes(selected) ? selected : "";
        state.artist = select.value;
        render();
      } catch (error) {
        document.querySelector("#stats").innerHTML = '<div class="error">' + escapeHtml(error.message) + '</div>';
      } finally {
        button.disabled = false; button.textContent = "Refresh";
      }
    }
    document.querySelector("#search").addEventListener("input", event => { state.query = event.target.value; render(); });
    document.querySelector("#artist").addEventListener("change", event => { state.artist = event.target.value; render(); });
    document.querySelector("#refresh").addEventListener("click", () => load(true));
    load();
  </script>
</body>
</html>`;
}

async function startServer(instanceId) {
    const server = createServer(async (req, res) => {
        try {
            const url = new URL(req.url || "/", "http://127.0.0.1");
            if (req.method === "GET" && url.pathname === "/") {
                res.writeHead(200, { "Content-Type": "text/html; charset=utf-8", "Cache-Control": "no-store" });
                res.end(renderHtml());
                return;
            }
            if (req.method === "GET" && url.pathname === "/api/catalog") {
                sendJson(res, 200, await getCatalog());
                return;
            }
            if (req.method === "POST" && url.pathname === "/api/refresh") {
                sendJson(res, 200, await getCatalog(true));
                return;
            }
            sendJson(res, 404, { error: "Not found" });
        } catch (error) {
            sendJson(res, 500, { error: error.message || "Unexpected catalog error" });
        }
    });
    await new Promise((resolve, reject) => {
        server.once("error", reject);
        server.listen(0, "127.0.0.1", resolve);
    });
    const address = server.address();
    return { server, url: `http://127.0.0.1:${address.port}/`, instanceId };
}

session = await joinSession({
    canvases: [
        createCanvas({
            id: "nattlorden-music-catalog",
            displayName: "Nattlorden music catalog",
            description: "Search and browse artists and songs indexed from nattlorden.com and its music pages.",
            actions: [
                {
                    name: "refresh_catalog",
                    description: "Re-crawl nattlorden.com and return the updated artist and song counts.",
                    handler: async () => {
                        try {
                            const value = await getCatalog(true);
                            return {
                                ...value.counts,
                                addedArtists: value.refresh.addedArtists,
                                addedSongs: value.refresh.addedSongs,
                                warnings: value.warnings,
                                updatedAt: value.updatedAt,
                            };
                        } catch (error) {
                            throw new CanvasError("catalog_refresh_failed", error.message);
                        }
                    },
                },
                {
                    name: "catalog_summary",
                    description: "Return current artist and song counts plus the indexed artist names.",
                    handler: async () => {
                        try {
                            const value = await getCatalog();
                            return {
                                artistCount: value.counts.artists,
                                songCount: value.counts.songs,
                                artists: value.artists,
                                updatedAt: value.updatedAt,
                            };
                        } catch (error) {
                            throw new CanvasError("catalog_load_failed", error.message);
                        }
                    },
                },
            ],
            open: async (ctx) => {
                let entry = servers.get(ctx.instanceId);
                if (!entry) {
                    entry = await startServer(ctx.instanceId);
                    servers.set(ctx.instanceId, entry);
                }
                await getCatalog();
                return { title: "Nattlorden music catalog", status: "Live catalog", url: entry.url };
            },
            onClose: async (ctx) => {
                const entry = servers.get(ctx.instanceId);
                if (!entry) return;
                servers.delete(ctx.instanceId);
                await new Promise((resolve) => entry.server.close(resolve));
            },
        }),
    ],
});
