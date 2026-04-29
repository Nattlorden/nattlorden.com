let lang = "sv";
let currentSection = "world";
let currentPage = "overview";
let lastAlbumPage = null;

const hasFriendAccess = () => localStorage.getItem("friendAccess") === "yes";

function getContent() {
  return lang === "sv" ? contentSV : contentEN;
}

function getSections() {
  return Object.keys(getContent());
}

function getPages(sectionKey) {
  const content = getContent();
  if (!content[sectionKey]) {
    return [];
  }
  return Object.keys(content[sectionKey]);
}

function ensureValidState() {
  const sections = getSections();

  if (!sections.includes(currentSection)) {
    currentSection = sections[0];
  }

  const pages = getPages(currentSection);

  if (!pages.includes(currentPage)) {
    currentPage = pages[0];
  }
}

function updateLanguageButtons() {
  const btnSV = document.getElementById("btn-sv");
  const btnEN = document.getElementById("btn-en");

  btnSV.classList.toggle("active", lang === "sv");
  btnEN.classList.toggle("active", lang === "en");
}

function updateTagline() {
  const tagline = document.getElementById("tagline");
  tagline.textContent = siteMeta[lang].tagline;
  document.documentElement.lang = lang;
}

function renderTopMenu() {
  const topMenu = document.getElementById("topMenu");
  topMenu.innerHTML = "";

  const sections = getSections();

  sections.forEach(sectionKey => {
    const item = document.createElement("div");
    item.className = "top-menu-item";
    item.textContent = sectionLabels[lang][sectionKey] || sectionKey;

    if (sectionKey === currentSection) {
      item.classList.add("active");
    }

    item.onclick = function () {
      currentSection = sectionKey;
      currentPage = getPages(sectionKey)[0];
      renderAll();
    };

    topMenu.appendChild(item);
  });
}

function renderSideMenu() {
  const sideMenu = document.getElementById("sideMenu");
  sideMenu.innerHTML = "";

  const content = getContent();
  const pages = getPages(currentSection);

  pages.forEach(pageKey => {
    // fÃ¶r att kunna gÃ¶mma sidor i vÃ¤nstermenyn
    const page = content[currentSection][pageKey];

    if (page.hidden === true) {
      return;
    }

    const item = document.createElement("div");
    item.className = "side-menu-item";
    item.textContent = content[currentSection][pageKey].menuTitle || pageKey;

        if (pageKey === currentPage) {
      item.classList.add("active");
    }

    item.onclick = function () {
      currentPage = pageKey;
      renderContent();
      renderSideMenu();
    };

    sideMenu.appendChild(item);
  });
}

function renderTrackList(albumKey) {
  const album = musicData.albums[albumKey];
  if (!album || !album.tracks) return "";

  return `
    <div class="track-list">
      ${album.tracks.map((track, index) => `
        <div class="track-row">
          <span class="track-title">
            ${String(index + 1).padStart(2, "0")}. ${track.title}
          </span>
          <div class="track-actions">
            <a href="#" onclick="openSongLyrics('${track.key}'); return false;">Text</a>
            <a href="${track.spotify}" target="_blank" rel="noopener noreferrer">Spotify</a>
            <a href="${track.youtube}" target="_blank" rel="noopener noreferrer">YouTube</a>
          </div>
        </div>
      `).join("")}
    </div>
  `;
}

function openSongLyrics(songKey) {
  lastAlbumPage = currentPage; // spara var vi kom ifrån

  currentSection = "music";
  currentPage = songKey;

  renderAll();

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

function goBackToAlbum() {
  if (!lastAlbumPage) return;

  currentSection = "music";
  currentPage = lastAlbumPage;

  renderAll();

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}


function renderSongPage(songKey) {
  const song = musicSongs[songKey];
  if (!song) return "<p>Sången kunde inte hittas.</p>";

  return `
    <section class="song-page">
      <h2>${song.title}</h2>
      <div class="lyrics-block">${song.lyrics.trim().replace(/\n/g, "<br>")}</div>
    </section>
  `;
}

function renderTimeline(timeline) {
  let html = `<div class="timeline">`;

  timeline.forEach(event => {
    html += `
      <section class="timeline-event">
        <div class="timeline-event-header">
          <h3>${event.title}</h3>
          ${event.meta ? `<div class="timeline-event-meta">${event.meta}</div>` : ""}
        </div>
        <div class="timeline-tracks">
    `;

    event.tracks.forEach(track => {
      html += `
        <article class="timeline-track-card">
          ${track.image ? `<img src="${track.image}" alt="${track.title}">` : ""}
          <h4>${track.title}</h4>
          
          ${
              track.date
                ? `<div class="track-date">${lang === "sv" ? "Publicerad" : "Published"}: ${track.date}</div>`
                : track.status
                  ? `<div class="track-date">${track.status}</div>`
                  : ""
          }

          <div class="track-links">
            ${track.textPage ? `<a class="internal-link" data-section="music" data-page="${track.textPage}">${lang === "sv" ? "Text" : "Lyrics"}</a>` : ""}
            ${track.spotify ? `<a href="${track.spotify}" target="_blank" rel="noopener noreferrer">Spotify</a>` : ""}
            ${track.youtube ? `<a href="${track.youtube}" target="_blank" rel="noopener noreferrer">YouTube</a>` : ""}
          </div>

          ${track.note ? `
            <details class="track-notes">
              <summary>${lang === "sv" ? "Kommentar" : "Notes"}</summary>
              <div class="track-note-text">${track.note}</div>
            </details>
          ` : ""}
        </article>
      `;
    });

    html += `
        </div>
      </section>
    `;
  });

  html += `</div>`;
  return html;
}

function renderContent() {
  const main = document.getElementById("content");
  const content = getContent();
  const page = content[currentSection] && content[currentSection][currentPage]
    ? content[currentSection][currentPage]
    : null;

  if (!page) {
    main.innerHTML = `
      <h2>${siteMeta[lang].missingTitle}</h2>
      <p>${siteMeta[lang].missingText}</p>
    `;
    return;
  }

  // 1. Albumsidor
  if (currentSection === "music" && musicData.albums[currentPage]) {
    const album = musicData.albums[currentPage];
    let html = `<h2>${page.title}</h2>`;

    if (page.intro) {
      html += `
        <div class="text-block">
          ${page.intro}
        </div>
      `;
    }

    if (album.image) {
      html += `
        <figure class="image-block image-small">
          <img src="${album.image}" alt="${album.imageAlt || album.title || ""}">
          ${page.caption ? `<figcaption>${page.caption}</figcaption>` : ""}
        </figure>
      `;
    }

    html += renderTrackList(currentPage);

    if (page.showPlaceholder !== false) {
      html += `
        <div class="placeholder-box">
          ${siteMeta[lang].placeholder}
        </div>
      `;
    }

    main.innerHTML = html;
    return;
  }

  // 2. Låtsidor med lyrics
  if (currentSection === "music" && page.lyrics) {
    let html = `<h2>${page.title}</h2>`;
    let backButton = "";

    if (lastAlbumPage) {
      backButton = `
        <div class="back-link">
          <a href="#" onclick="goBackToAlbum(); return false;">
            &#8592; ${uiText[lang].backToAlbum}
          </a>
        </div>
      `;
    }

    html += backButton;

    if (page.image) {
      const imageSize = page.image.size ? `image-${page.image.size}` : "image-small";

      html += `
        <figure class="image-block ${imageSize}">
          <img src="${page.image.src}" alt="${page.image.alt || ""}">
          ${page.image.caption ? `<figcaption>${page.image.caption}</figcaption>` : ""}
        </figure>
      `;
    }

    html += `
      <div class="text-block lyrics-block">
        ${page.lyrics.trim().replace(/\n/g, "<br>")}
      </div>
    `;

    html += backButton;

    if (page.showPlaceholder !== false) {
      html += `
        <div class="placeholder-box">
          ${siteMeta[lang].placeholder}
        </div>
      `;
    }

    main.innerHTML = html;
    return;
  }

  // 3. Timelinesidor
  if (page.timeline && page.timeline.length > 0) {
    let html = `<h2>${page.title}</h2>`;

    if (page.text) {
      html += `<div class="text-block">${page.text}</div>`;
    }

    html += renderTimeline(page.timeline);

    if (page.showPlaceholder !== false) {
      html += `
        <div class="placeholder-box">
          ${siteMeta[lang].placeholder}
        </div>
      `;
    }

    main.innerHTML = html;
    return;
  }

  // 4. Vanliga sidor
  let html = `<h2>${page.title}</h2>`;

  if (page.blocks && page.blocks.length > 0) {
    page.blocks.forEach(block => {
      if (block.type === "text") {
        html += `
          <div class="text-block">
            ${block.content}
          </div>
        `;
      }

      if (block.type === "image") {
        const imageSize = block.size ? `image-${block.size}` : "image-full";

        html += `
          <figure class="image-block ${imageSize}">
            <img src="${block.src}" alt="${block.alt || ""}">
            ${block.caption ? `<figcaption>${block.caption}</figcaption>` : ""}
          </figure>
        `;
      }

      if (block.type === "divider") {
        html += `<hr>`;
      }
    });
  } else {
    if (page.text) {
      html += `<div class="text-block">${page.text}</div>`;
    }

    if (page.images && page.images.length > 0) {
      html += `<div class="image-gallery">`;

      page.images.forEach(src => {
        html += `<img src="${src}" alt="">`;
      });

      html += `</div>`;
    }
  }

  if (page.showPlaceholder !== false) {
    html += `
      <div class="placeholder-box">
        ${siteMeta[lang].placeholder}
      </div>
    `;
  }

  main.innerHTML = html;
}

function renderContent_old() {
  const main = document.getElementById("content");
  const content = getContent();
  const page = content[currentSection] && content[currentSection][currentPage]
    ? content[currentSection][currentPage]
    : null;

  if (!page) {
    main.innerHTML = `
      <h2>${siteMeta[lang].missingTitle}</h2>
      <p>${siteMeta[lang].missingText}</p>
    `;
    return;
  }

  let html = `<h2>${page.title}</h2>`;

  // Timelinesidor
   if (page.timeline && page.timeline.length > 0) {
    if (page.text) {
      html += `<div class="text-block">${page.text}</div>`;
    }

    html += renderTimeline(page.timeline);
  } else if (page.blocks && page.blocks.length > 0) {
    page.blocks.forEach(block => {
      if (block.type === "text") {
        html += `
          <div class="text-block">
            ${block.content}
          </div>
        `;
      }

      if (block.type === "image") {
        const imageSize = block.size ? `image-${block.size}` : "image-full";

        html += `
          <figure class="image-block ${imageSize}">
            <img src="${block.src}" alt="${block.alt || ""}">
            ${block.caption ? `<figcaption>${block.caption}</figcaption>` : ""}
          </figure>
        `;
      }

      if (block.type === "divider") {
        html += `<hr>`;
      }
    });
  } else {
    if (page.text) {
      html += `<div class="text-block">${page.text}</div>`;
    }

    if (page.images && page.images.length > 0) {
      html += `<div class="image-gallery">`;

      page.images.forEach(src => {
        html += `<img src="${src}" alt="">`;
      });

      html += `</div>`;
    }

    
  }

  if (page.showPlaceholder !== false) {
    html += `
      <div class="placeholder-box">
        ${siteMeta[lang].placeholder}
      </div>
    `;

    main.innerHTML = html;
    return;
  
  }

  // Albumsidor: hämtar bild + tracklist från musicData
  if (
    currentSection === "music" &&
    musicData.albums[currentPage]
  ) {
    const album = musicData.albums[currentPage];

    if (page.intro) {
      html += `
        <div class="text-block">
          ${page.intro}
        </div>
      `;
    }

    if (album.image) {
      html += `
        <figure class="image-block image-small">
          <img src="${album.image}" alt="${album.imageAlt || album.title || ""}">
          ${page.caption ? `<figcaption>${page.caption}</figcaption>` : ""}
        </figure>
      `;
    }

    html += renderTrackList(currentPage);

    if (page.showPlaceholder !== false) {
      html += `
        <div class="placeholder-box">
          ${siteMeta[lang].placeholder}
        </div>
      `;
    }

    main.innerHTML = html;
    return;
  }

  // Låtsidor med lyrics
  if (currentSection === "music" && page.lyrics) {

  let backButton = "";

  if (lastAlbumPage) {
    backButton = `
      <div class="back-link">
        <a href="#" onclick="goBackToAlbum(); return false;">
          &#8592; ${uiText[lang].backToAlbum}
        </a>
      </div>
    `;
  }

  html += backButton;

  // ?? NYTT: bild om den finns
  if (page.image) {
    const imageSize = page.image.size ? `image-${page.image.size}` : "image-small";

    html += `
      <figure class="image-block ${imageSize}">
        <img src="${page.image.src}" alt="${page.image.alt || ""}">
        ${page.image.caption ? `<figcaption>${page.image.caption}</figcaption>` : ""}
      </figure>
    `;
  }

  html += `
    <div class="text-block lyrics-block">
      ${page.lyrics.trim().replace(/\n/g, "<br>")}
    </div>
  `;

  html += backButton;

  if (page.showPlaceholder !== false) {
    html += `
      <div class="placeholder-box">
        ${siteMeta[lang].placeholder}
      </div>
    `;
  }

  main.innerHTML = html;
  return;
}

//
 

  // Vanliga blocksidor
  
  if (page.blocks && page.blocks.length > 0) {
    page.blocks.forEach(block => {
      if (block.type === "text") {
        html += `
          <div class="text-block">
            ${block.content}
          </div>
        `;
      }

      if (block.type === "image") {
        const imageSize = block.size ? `image-${block.size}` : "image-full";

        html += `
          <figure class="image-block ${imageSize}">
            <img src="${block.src}" alt="${block.alt || ""}">
            ${block.caption ? `<figcaption>${block.caption}</figcaption>` : ""}
          </figure>
        `;
      }

      if (block.type === "divider") {
        html += `<hr>`;
      }
    });
  } else {
    if (page.text) {
      html += `
        <div class="text-block">
          ${page.text}
        </div>
      `;
    }

    if (page.images && page.images.length > 0) {
      html += `<div class="image-gallery">`;

      page.images.forEach(src => {
        html += `<img src="${src}" alt="">`;
      });

      html += `</div>`;
    }
  }

  if (page.showPlaceholder !== false) {
    html += `
      <div class="placeholder-box">
        ${siteMeta[lang].placeholder}
      </div>
    `;
  }

  main.innerHTML = html;
}




function renderAll() {
  ensureValidState();
  updateLanguageButtons();
  updateTagline();
  renderTopMenu();
  renderSideMenu();
  renderContent();
}

function setLang(newLang) {
  lang = newLang;
  renderAll();
}

document.addEventListener("click", function (e) {
  const link = e.target.closest("a[data-section][data-page]");

  if (!link) {
    return;
  }

  e.preventDefault();

  // Spara var vi kom ifrån innan vi går till textsidan
  if (currentSection === "music") {
    lastAlbumPage = currentPage;
  }

  currentSection = link.dataset.section;
  currentPage = link.dataset.page;

  renderAll();
  window.scrollTo({
  top: 0,
  behavior: "smooth"
});
});

renderAll();