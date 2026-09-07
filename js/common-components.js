/* =========================================================
   common-components.js
   Återanvändbara innehållskomponenter
   ========================================================= */


/* ---------- Album / track list ---------- */

function renderAlbumTrackList(
  album,
  options = {}
) {
  if (!album || !Array.isArray(album.tracks)) {
    return "";
  }

  const lyricsLabel =
    options.lyricsLabel || "Text";

  return `
    <div class="track-list">
      ${album.tracks.map((track, index) => `
        <div class="track-row">

          <span class="track-title">
            ${String(index + 1).padStart(2, "0")}.
            ${track.title || ""}
          </span>

          <div class="track-actions">

            ${track.key ? `
              <a
                href="#"
                data-album-track="${track.key}">
                ${lyricsLabel}
              </a>
            ` : ""}

            ${track.spotify ? `
              <a
                href="${track.spotify}"
                target="_blank"
                rel="noopener noreferrer">
                Spotify
              </a>
            ` : ""}

            ${track.youtube ? `
              <a
                href="${track.youtube}"
                target="_blank"
                rel="noopener noreferrer">
                YouTube
              </a>
            ` : ""}

          </div>

        </div>
      `).join("")}
    </div>
  `;
}