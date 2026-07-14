let lang = "sv";
let currentSection = "nattlorden";
let currentPage = "about";

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

/*
function updateTagline() {
  const tagline = document.getElementById("tagline");
  const meta = siteMeta[lang].sections[currentSection];

  tagline.textContent = meta?.tagline || "";
  document.documentElement.lang = lang;
}*/
function updateTagline() {
  const tagline = document.getElementById("tagline");
  const title = document.getElementById("siteTitle");

  const meta = siteMeta[lang].sections[currentSection];

  tagline.textContent = meta?.tagline || "";
  title.textContent = meta?.title || "Side Projects";

  document.documentElement.lang = lang;
}



function updateTheme() {
  document.body.dataset.theme = currentSection;
}

function updateHeaderStyle() {
  const header = document.getElementById("siteHeader");
  if (!header) return;

  header.className = "site-header";

  const meta = siteMeta[lang].sections[currentSection];
  if (meta?.headerClass) {
    header.classList.add(meta.headerClass);
  }
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
      window.scrollTo({ top: 0, behavior: "smooth" });
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
    const page = content[currentSection][pageKey];

    if (page.hidden === true) {
      return;
    }

    const item = document.createElement("div");
    item.className = "side-menu-item";
    item.textContent = page.menuTitle || pageKey;

    if (pageKey === currentPage) {
      item.classList.add("active");
    }

    item.onclick = function () {
      currentPage = pageKey;
      renderContent();
      renderSideMenu();
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    sideMenu.appendChild(item);
  });
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
  updateTheme();
  updateHeaderStyle();
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