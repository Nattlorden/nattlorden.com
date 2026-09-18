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

/* ---------- Card grid (skivor och galleri) ---------- */
/*
function renderCardGrid(cards, columns = 4) {
  if (!Array.isArray(cards) || !cards.length) {
    return "";
  }

  const columnsClass =
    columns === 3
      ? "cols-3"
      : "cols-4";

  let html = `
    <div class="card-grid ${columnsClass}">
  `;

  cards.forEach(card => {
    const hasInternalLink =
      card.section &&
      card.page;

    html += `
      <div class="music-card">
    `;

    if (hasInternalLink) {
      html += `
        <a
          href="#${card.section}/${card.page}"
          class="music-card-image"
          data-section="${card.section}"
          data-page="${card.page}"
          aria-label="${card.title || ""}"
        >
          <img
            src="${card.image}"
            alt="${card.title || ""}">
        </a>
      `;
    }
    else {
      html += `
        <div class="music-card-image">
          <img
            src="${card.image}"
            alt="${card.title || ""}">
        </div>
      `;
    }

    if (card.title) {
      html += `
        <div class="music-card-title">
      `;

      if (hasInternalLink) {
        html += `
          <a
            href="#${card.section}/${card.page}"
            data-section="${card.section}"
            data-page="${card.page}"
          >
            ${card.title}
          </a>
        `;
      }
      else {
        html += card.title;
      }

      html += `
        </div>
      `;
    }

    if (card.spotify || card.youtube) {
      html += `
        <div class="music-card-links">

          ${card.spotify ? `
            <a
              href="${card.spotify}"
              target="_blank"
              rel="noopener noreferrer">
              Spotify
            </a>
          ` : ""}

          ${card.youtube ? `
            <a
              href="${card.youtube}"
              target="_blank"
              rel="noopener noreferrer">
              YouTube
            </a>
          ` : ""}

        </div>
      `;
    }

    html += `
      </div>
    `;
  });

  html += `</div>`;

  return html;
} */
function renderCardGrid(cards, columns = 4) {
  if (!Array.isArray(cards) || !cards.length) {
    return "";
  }

  const columnsClass =
    columns === 3
      ? "cols-3"
      : "cols-4";

  let html = `
    <div class="card-grid ${columnsClass}">
  `;

  cards.forEach(card => {
    const hasInternalLink =
      card.section &&
      card.page;

    html += `
      <div class="card">
    `;

    if (hasInternalLink) {
      html += `
        <a
          href="#${card.section}/${card.page}"
          class="card-image"
          data-section="${card.section}"
          data-page="${card.page}"
          aria-label="${card.title || ""}"
        >
          <img
            src="${card.image}"
            alt="${card.title || ""}">
        </a>
      `;
    }
    else {
      html += `
        <div class="card-image">
          <img
            src="${card.image}"
            alt="${card.title || ""}">
        </div>
      `;
    }

    if (card.title) {
      html += `
        <div class="card-title">
      `;

      if (hasInternalLink) {
        html += `
          <a
            href="#${card.section}/${card.page}"
            data-section="${card.section}"
            data-page="${card.page}"
          >
            ${card.title}
          </a>
        `;
      }
      else {
        html += card.title;
      }

      html += `
        </div>
      `;
    }

    if (card.spotify || card.youtube) {
      html += `
        <div class="card-links">

          ${card.spotify ? `
            <a
              href="${card.spotify}"
              target="_blank"
              rel="noopener noreferrer">
              Spotify
            </a>
          ` : ""}

          ${card.youtube ? `
            <a
              href="${card.youtube}"
              target="_blank"
              rel="noopener noreferrer">
              YouTube
            </a>
          ` : ""}

        </div>
      `;
    }

    html += `
      </div>
    `;
  });

  html += `</div>`;

  return html;
}

/* ---------- Date helpers ---------- */

const monthNames = {
  sv: [
    "januari", "februari", "mars", "april",
    "maj", "juni", "juli", "augusti",
    "september", "oktober", "november", "december"
  ],

  en: [
    "January", "February", "March", "April",
    "May", "June", "July", "August",
    "September", "October", "November", "December"
  ]
};


function parseDateTime(value) {
  if (!value) {
    return null;
  }

  const [datePart, timePart = ""] = value.split("T");
  const [year, month, day] = datePart
    .split("-")
    .map(Number);

  return {
    year,
    month,
    day,
    time: timePart
      ? timePart.slice(0, 5)
      : ""
  };
}


function getMonthName(month, lang = "sv") {
  const names =
    monthNames[lang] ||
    monthNames.sv;

  return names[month - 1] || "";
}