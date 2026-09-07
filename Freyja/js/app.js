let lang = "sv";
let currentSection = "freyja";
let currentPage = "overview";


const sectionAccess = {
  freyja: null,
  ritual: "hexAccess",
  nature: null,
  music: null,
  lore: null,
  about: null
};


if (hasAccess("friendAccess")) {
  document.documentElement.classList.add("friend-access");
}

if (hasAccess("hexAccess")) {
  document.documentElement.classList.add("hex-access");
}


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


function getPage(sectionKey, pageKey) {
  const content = getContent();

  return content?.[sectionKey]?.[pageKey] || null;
}


function canAccessSection(sectionKey) {
  const requiredKey = sectionAccess[sectionKey];

  return !requiredKey || hasAccess(requiredKey);
}


function canAccessPage(page) {
  if (!page) {
    return false;
  }

  /*
    hidden: true betyder här:
    dölj ur menyn, men sidan får fortfarande öppnas
    via kort eller intern länk.
  */
  if (page.hidden === true) {
    return true;
  }

  /*
    Äldre Freyja-modell:
    hidden: "hexAccess"
  */
  if (typeof page.hidden === "string") {
    return hasAccess(page.hidden);
  }

  /*
    Ny gemensam modell:
    access: "hexAccess"
  */
  if (page.access) {
    return hasAccess(page.access);
  }

  return true;
}


function ensureValidState() {
  const sections = getSections()
    .filter(sectionKey => canAccessSection(sectionKey));

  if (!sections.length) {
    currentSection = "";
    currentPage = "";
    return;
  }

  if (!sections.includes(currentSection)) {
    currentSection = sections[0];
  }

  const pages = getPages(currentSection)
    .filter(pageKey => canAccessPage(
      getPage(currentSection, pageKey)
    ));

  if (!pages.length) {
    currentPage = "";
    return;
  }

  if (!pages.includes(currentPage)) {
    currentPage = pages[0];
  }
}


function updateLanguageButtons() {
  const btnSV = document.getElementById("btn-sv");
  const btnEN = document.getElementById("btn-en");

  if (!btnSV || !btnEN) {
    return;
  }

  btnSV.classList.toggle("active", lang === "sv");
  btnEN.classList.toggle("active", lang === "en");
}


function updateTagline() {
  const tagline = document.getElementById("tagline");

  if (tagline) {
    tagline.textContent =
      siteMeta?.[lang]?.tagline || "";
  }

  document.documentElement.lang = lang;
}


function renderTopMenu() {
  const topMenu = document.getElementById("topMenu");

  if (!topMenu) {
    return;
  }

  topMenu.innerHTML = "";

  const sections = getSections();

  sections.forEach(sectionKey => {
    if (!canAccessSection(sectionKey)) {
      return;
    }

    const item = document.createElement("div");
    item.className = "top-menu-item";
    item.textContent =
      sectionLabels?.[lang]?.[sectionKey] || sectionKey;

    if (sectionKey === currentSection) {
      item.classList.add("active");
    }

    item.onclick = function () {
      const pages = getVisiblePages(sectionKey);

      if (pages.length === 1) {
        navigateTo(
          sectionKey,
          pages[0],
          true,
          "content"
        );
      } else {
        navigateTo(
          sectionKey,
          pages.length ? pages[0] : "",
          true,
          "menu"
        );
      }
    };

    topMenu.appendChild(item);
  });
}


function renderSideMenu() {
  const sideMenu = document.getElementById("sideMenu");

  if (!sideMenu) {
    return;
  }

  sideMenu.innerHTML = "";

  const pages = getVisiblePages(currentSection);

  pages.forEach(pageKey => {
    const page = getPage(currentSection, pageKey);

    if (!page) {
      return;
    }

    const item = document.createElement("div");
    item.className = "side-menu-item";
    item.textContent =
      page.menuTitle ||
      page.title ||
      pageKey;

    if (pageKey === currentPage) {
      item.classList.add("active");
    }

    item.onclick = function () {
      navigateTo(
        currentSection,
        pageKey
      );
    };

    sideMenu.appendChild(item);
  });
}


function renderCardPage(main, page) {
  const columnsClass =
    page.columns === 3
      ? "cols-3"
      : "cols-4";

  let html = `
    ${getMobileMenuButtonHtml()}
    <h2>${page.title || ""}</h2>
  `;

  if (page.intro) {
    html += `
      <div class="text-block">
        ${page.intro}
      </div>
    `;
  }

  html += `
    <div class="card-grid ${columnsClass}">
  `;

  page.cards.forEach(card => {
    html += `
      <div class="music-card">

        <a
          href="#${card.section}/${card.page}"
          class="music-card-image"
          data-section="${card.section}"
          data-page="${card.page}"
          aria-label="${card.title}"
        >
          <img
            src="${card.image}"
            alt="${card.title}">
        </a>

        <div class="music-card-title">
          <a
            href="#${card.section}/${card.page}"
            data-section="${card.section}"
            data-page="${card.page}"
          >
            ${card.title}
          </a>
        </div>

        ${(card.spotify || card.youtube) ? `
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
        ` : ""}

      </div>
    `;
  });

  html += `</div>`;

  if (page.showPlaceholder !== false) {
    html += `
      <div class="placeholder-box">
        ${siteMeta?.[lang]?.placeholder || ""}
      </div>
    `;
  }

  main.innerHTML = html;
}


function renderContent() {
  const main = document.getElementById("content");

  if (!main) {
    return;
  }

  const page = getPage(
    currentSection,
    currentPage
  );

  if (!page) {
    main.innerHTML = `
      <h2>${siteMeta?.[lang]?.missingTitle || "Saknas"}</h2>
      <p>${siteMeta?.[lang]?.missingText || "Innehåll kommer senare."}</p>
    `;
    return;
  }

  if (page.layout === "cards") {
    renderCardPage(main, page);
    return;
  }

  let html = `
    ${getMobileMenuButtonHtml()}
    <h2>${page.title || ""}</h2>
  `;

  if (page.blocks && page.blocks.length > 0) {
    page.blocks.forEach(block => {

      if (block.type === "text") {
        html += `
          <div class="text-block">
            ${block.content || ""}
          </div>
        `;
      }

      if (block.type === "image") {
        const imageSize =
          block.size
            ? `image-${block.size}`
            : "image-full";

        html += `
          <figure class="image-block ${imageSize}">
            <img
              src="${block.src}"
              alt="${block.alt || ""}">

            ${block.caption
              ? `<figcaption>${block.caption}</figcaption>`
              : ""}
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
        html += `
          <img src="${src}" alt="">
        `;
      });

      html += `</div>`;
    }
  }

  if (page.showPlaceholder !== false) {
    html += `
      <div class="placeholder-box">
        ${siteMeta?.[lang]?.placeholder || ""}
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
  updateMobileView();
}


function setLang(newLang) {
  lang = newLang;
  renderAll();
}


document.addEventListener("click", function (e) {
  const link = e.target.closest(
    "a[data-section][data-page]"
  );

  if (!link) {
    return;
  }

  e.preventDefault();

  navigateTo(
    link.dataset.section,
    link.dataset.page
  );
});


initCommonNavigation();