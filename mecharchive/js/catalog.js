(() => {
  "use strict";

  const data = window.NATTLORDEN_CATALOG;
  const search = document.querySelector("#search");
  const artist = document.querySelector("#artist");
  const stats = document.querySelector("#stats");
  const grid = document.querySelector("#grid");
  const state = { query: "", artist: "" };
  let currentLang = localStorage.getItem("lang") || "sv";

const translations = {
  en: {
    subtitle: "Artists and songs found across nattlorden.com",
    searchPlaceholder: "Search songs, artists, albums…",
    allArtists: "All artists",
    loading: "Loading catalog…",
    filterAria: "Filter by artist",
    songsShown: "songs shown",
    artistsIndexed: "artists indexed",
    snapshot: "Snapshot",
    source: "Source",
    noMatches: "No matching songs.",
    loadError: "The catalog snapshot could not be loaded."
  },

  sv: {
    subtitle: "Artister och låtar från hela nattlorden.com",
    searchPlaceholder: "Sök låtar, artister, album…",
    allArtists: "Alla artister",
    loading: "Laddar katalog…",
    filterAria: "Filtrera efter artist",
    songsShown: "låtar visas",
    artistsIndexed: "artister indexerade",
    snapshot: "Ögonblicksbild",
    source: "Källa",
    noMatches: "Inga matchande låtar.",
    loadError: "Katalogen kunde inte laddas."
  }
};




window.setLang =function setLang(lang) {
  currentLang = lang;
  const t = translations[currentLang];

  document.documentElement.lang = currentLang;

  document.getElementById("subtitle").textContent = t.subtitle;

  const search = document.getElementById("search");
  search.placeholder = t.searchPlaceholder;

  const artist = document.getElementById("artist");
  artist.setAttribute("aria-label", t.filterAria);

  const allArtists = artist.querySelector('option[value=""]');
  if (allArtists) {
    allArtists.textContent = t.allArtists;
  }

  document.getElementById("btn-sv").classList.toggle("active", lang === "sv");
  document.getElementById("btn-en").classList.toggle("active", lang === "en");

  localStorage.setItem("lang", currentLang);

  render();

  };

  

  function escapeHtml(value) {
    return String(value ?? "").replace(
      /[&<>"']/g,
      (character) => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
      })[character],
    );
  }

  function link(url, label) {
    if (!url) return "";
    return `<a href="${escapeHtml(url)}" target="_blank" rel="noopener noreferrer">${label}</a>`;
  }

  function render() {
    const t = translations[currentLang];

    const query = state.query.trim().toLocaleLowerCase();
    const songs = data.songs.filter((song) => {
      const searchable = [song.title, song.artist, song.collection, song.release]
        .filter(Boolean)
        .join(" ")
        .toLocaleLowerCase();

      return (!state.artist || song.artist === state.artist) &&
        (!query || searchable.includes(query));
    });

   stats.innerHTML =
  `<span><strong>${songs.length}</strong> ${t.songsShown}</span>` +
  `<span><strong>${data.counts.artists}</strong> ${t.artistsIndexed}</span>` +
  `<span class="meta">${t.snapshot} ${new Date(data.updatedAt).toLocaleString(currentLang)}</span>`;

    grid.innerHTML = songs.length
      ? songs.map((song) => {
          const artwork = song.cover
            ? `<img class="cover" src="${escapeHtml(song.cover)}" alt="" loading="lazy">`
            : '<div class="cover placeholder">♪</div>';

          return `<article>
            ${artwork}
            <div>
              <h2>${escapeHtml(song.title)}</h2>
              <div class="artist">${escapeHtml(song.artist)}</div>
              ${song.collection ? `<div class="collection meta">${escapeHtml(song.collection)}</div>` : ""}
              ${song.release ? `<div class="meta">${escapeHtml(song.release)}</div>` : ""}
              <div class="links">
                ${link(song.spotify, "Spotify")}
                ${link(song.youtube, "YouTube")}
                ${link(song.source, t.source)}
              </div>
            </div>
          </article>`;
        }).join("")
      : '<div class="empty">>${t.noMatches}</div>';
  }


  if (!data?.songs || !Array.isArray(data.artists)) {
    stats.innerHTML = '<div class="error">The catalog snapshot could not be loaded.</div>';
    return;
  }

  artist.insertAdjacentHTML(
    "beforeend",
    data.artists
      .map((name) => `<option value="${escapeHtml(name)}">${escapeHtml(name)}</option>`)
      .join(""),
  );

  search.addEventListener("input", (event) => {
    state.query = event.target.value;
    render();
  });

  artist.addEventListener("change", (event) => {
    state.artist = event.target.value;
    render();
  });

  window.setLang(currentLang);
})();
