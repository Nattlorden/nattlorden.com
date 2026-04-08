let lang = "sv";
let currentSection = "hifi";
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

  if (!sections.length) {
    currentSection = "";
    currentPage = "";
    return;
  }

  if (!sections.includes(currentSection)) {
    currentSection = sections[0];
  }

  const pages = getPages(currentSection);

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
  const title = document.getElementById("siteTitle");
  const meta = siteMeta?.[lang]?.sections?.[currentSection];

  if (tagline) {
    tagline.textContent = meta?.tagline || "";
  }

  if (title) {
    title.textContent = meta?.title || "";
  }

  document.documentElement.lang = lang;
}

function updateTheme() {
  if (!currentSection) {
    document.body.removeAttribute("data-theme");
    return;
  }

  document.body.dataset.theme = currentSection;
}

function updateHeaderStyle() {
  const header = document.getElementById("siteHeader");
  if (!header) return;

  header.className = "site-header";

  const meta = siteMeta?.[lang]?.sections?.[currentSection];
  if (meta?.headerClass) {
    header.classList.add(meta.headerClass);
  }
}

function renderTopMenu() {
  const topMenu = document.getElementById("topMenu");
  if (!topMenu) return;

  topMenu.innerHTML = "";

  const sections = getSections();

  sections.forEach(sectionKey => {
    const item = document.createElement("div");
    item.className = "top-menu-item";
    item.textContent = sectionLabels?.[lang]?.[sectionKey] || sectionKey;

    if (sectionKey === currentSection) {
      item.classList.add("active");
    }

    item.onclick = function () {
      currentSection = sectionKey;

      const pages = getPages(sectionKey);
      currentPage = pages.length ? pages[0] : "";

      renderAll();
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    topMenu.appendChild(item);
  });
}

function renderSideMenu() {
  const sideMenu = document.getElementById("sideMenu");
  if (!sideMenu) return;

  sideMenu.innerHTML = "";

  const content = getContent();
  const pages = getPages(currentSection);

  pages.forEach(pageKey => {
    const page = content?.[currentSection]?.[pageKey];

    if (!page || page.hidden === true) {
      return;
    }

    const item = document.createElement("div");
    item.className = "side-menu-item";
    item.textContent = page.menuTitle || page.title || pageKey;

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
  if (!main) return;

  const content = getContent();
  const page = content?.[currentSection]?.[currentPage] || null;

  if (!page) {
    main.innerHTML = `
      <h2>${siteMeta?.[lang]?.missingTitle || "Saknas"}</h2>
      <p>${siteMeta?.[lang]?.missingText || "Innehåll kommer senare."}</p>
    `;
    return;
  }

  let html = `<h2>${page.title || ""}</h2>`;

  if (page.blocks && page.blocks.length > 0) {
    page.blocks.forEach(block => {
      if (block.type === "text") {
        html += `
          <div class="text-block">
            ${block.content || ""}
          </div>
        `;
      }

      if (block.type === "note") {
       html += `
        <div class="note-block">
            ${block.content || ""}
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