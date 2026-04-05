let lang = "sv";
let currentSection = "world";
let currentPage = "overview";

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
    // för att kunna gömma sidor i vänstermenyn
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
  currentSection = "music";
  currentPage = songKey;
  renderAll();

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

function renderSongPage(songKey) {
  const song = musicSongs[songKey];
  if (!song) return "<p>S�ngen kunde inte hittas.</p>";

  return `
    <section class="song-page">
      <h2>${song.title}</h2>
      <div class="lyrics-block">${song.lyrics.trim().replace(/\n/g, "<br>")}</div>
    </section>
  `;
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

     /* if (block.type === "image") {
        html += `
          <figure class="image-block">
            <img src="${block.src}" alt="${block.alt || ""}">
            ${block.caption ? `<figcaption>${block.caption}</figcaption>` : ""}
          </figure>
        `;
      }*/

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

function renderContentOld() {
  const main = document.getElementById("content");
  const content = getContent();
  const page = content[currentSection]?.[currentPage];

  if (!page) {
    main.innerHTML = `
      <h2>${siteMeta[lang].missingTitle}</h2>
      <p>${siteMeta[lang].missingText}</p>
    `;
    return;
  }

  let html = `
    <h2>${page.title}</h2>
    <p>${page.text}</p>
  `;

  // 🔥 Här händer det nya
  if (page.images && page.images.length > 0) {
    html += `<div class="image-gallery">`;

    page.images.forEach(src => {
      html += `<img src="${src}" alt="">`;
    });

    html += `</div>`;
  }


  if (page.showPlaceholder !== false) {
    html += `
      <div class="placeholder-box">
        ${siteMeta[lang].placeholder}
      </div>
    `;
  }
  /*html += `
    <div class="placeholder-box">
      ${siteMeta[lang].placeholder}
    </div>
  `;*/

  main.innerHTML = html;
}


/*  old
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

  main.innerHTML = `
    <h2>${page.title}</h2>
    <p>${page.text}</p>
    <div class="placeholder-box">
      Stubbinnehåll. Här kan ni senare lägga in fler textblock, bilder, ljudspelare, citat eller länkar.
    </div>
  `;
} */



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

  currentSection = link.dataset.section;
  currentPage = link.dataset.page;

  renderAll();
  window.scrollTo({
  top: 0,
  behavior: "smooth"
});
});

renderAll();