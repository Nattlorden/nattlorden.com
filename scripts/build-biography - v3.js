const fs = require("fs");
const path = require("path");
const YAML = require("yaml");

const ROOT = path.resolve(__dirname, "..");
const SOURCE_DIR = path.join(ROOT, "Nattis");
const OUTPUT_DIR = path.join(ROOT, "data");
const OUTPUT_FILE = path.join(OUTPUT_DIR, "biography.json");

function splitFrontmatter(text) {
    const normalized = text.replace(/^\uFEFF/, "");

    if (!normalized.startsWith("---")) {
        return {
            properties: {},
            markdown: normalized
        };
    }

    const match = normalized.match(
        /^---\s*\r?\n([\s\S]*?)\r?\n---\s*(?:\r?\n)?([\s\S]*)$/
    );

    if (!match) {
        return {
            properties: {},
            markdown: normalized
        };
    }

    let properties = {};

    try {
        properties = YAML.parse(match[1]) || {};
    }
    catch (error) {
        console.warn(`Could not parse properties: ${error.message}`);
    }

    return {
        properties,
        markdown: match[2]
    };
}

const files = fs
    .readdirSync(SOURCE_DIR)
    .filter(file => file.toLowerCase().endsWith(".md"))
    .sort((a, b) => a.localeCompare(b, "sv"));

// Första passet: läs alla notes
const notes = files.map(file => {
    const fullPath = path.join(SOURCE_DIR, file);
    const raw = fs.readFileSync(fullPath, "utf8");

    const title = path.basename(file, path.extname(file));

    const {
        properties,
        markdown
    } = splitFrontmatter(raw);

    const links = [];

    const wikiLinkRegex =
        /!\[\[[^\]]+\]\]|\[\[([^\]|#]+)(?:#[^\]|]+)?(?:\|([^\]]+))?\]\]/g;

    let match;

    while ((match = wikiLinkRegex.exec(markdown)) !== null) {
        if (!match[1]) continue;

        const target = match[1].trim();
        const alias = match[2]?.trim() || null;

        links.push({
            target,
            alias
        });
    }

    return {
        title,
        file,
        properties,
        markdown,
        links,
        backlinks: []
    };
});

// Index över alla existerande notes
const noteByTitle = new Map(
    notes.map(note => [note.title, note])
);

// Samla olösta länkar
const unresolvedLinks = [];

// Andra passet: bygg backlinks
for (const sourceNote of notes) {
    for (const link of sourceNote.links) {
        const targetNote = noteByTitle.get(link.target);

        if (targetNote) {
            if (!targetNote.backlinks.includes(sourceNote.title)) {
                targetNote.backlinks.push(sourceNote.title);
            }
        }
        else {
            unresolvedLinks.push({
                from: sourceNote.title,
                target: link.target
            });
        }
    }
}

// Sortera backlinks
for (const note of notes) {
    note.backlinks.sort((a, b) =>
        a.localeCompare(b, "sv")
    );
}

// Deduplicera olösta länkar.
// Samma brutna länk i samma note behöver bara rapporteras en gång.
const unresolvedUnique = [];

const unresolvedSeen = new Set();

for (const item of unresolvedLinks) {
    const key = `${item.from}\u0000${item.target}`;

    if (!unresolvedSeen.has(key)) {
        unresolvedSeen.add(key);
        unresolvedUnique.push(item);
    }
}

unresolvedUnique.sort((a, b) => {
    const fromCompare = a.from.localeCompare(b.from, "sv");

    if (fromCompare !== 0) {
        return fromCompare;
    }

    return a.target.localeCompare(b.target, "sv");
});

fs.mkdirSync(OUTPUT_DIR, { recursive: true });

fs.writeFileSync(
    OUTPUT_FILE,
    JSON.stringify(
        {
            generated: new Date().toISOString(),
            notes
        },
        null,
        2
    ),
    "utf8"
);

console.log(
    `Generated ${path.relative(ROOT, OUTPUT_FILE)} from ${notes.length} Obsidian notes.`
);

if (unresolvedUnique.length === 0) {
    console.log("All internal links resolve.");
}
else {
    console.log(
        `Unresolved internal links: ${unresolvedUnique.length}`
    );

    for (const item of unresolvedUnique) {
        console.log(
            `  ${item.from} -> ${item.target}`
        );
    }
}