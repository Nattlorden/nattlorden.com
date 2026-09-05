let lang = "sv";
let currentSection = "food";
let currentPage = "recipes_home";

function getContent() {
  return lang === "sv" ? contentSV : contentEN;
}

function getSections() {
  return Object.keys(getContent());
}

function isGroupedSection(sectionKey) {
  const content = getContent();
  const section = content[sectionKey];

  if (!section) {
    return false;
  }

  const firstValue = Object.values(section)[0];
  return !!(firstValue && firstValue.pages);
}

function getPages(sectionKey) {
  const content = getContent();
  const section = content[sectionKey];

  if (!section) {
    return [];
  }

  if (!isGroupedSection(sectionKey)) {
    return Object.keys(section);
  }

  const pages = [];

  Object.values(section).forEach(group => {
    if (!group.pages) {
      return;
    }

    Object.keys(group.pages).forEach(pageKey => {
      pages.push(pageKey);
    });
  });

  return pages;
}

function getPage(sectionKey, pageKey) {
  const content = getContent();
  const section = content[sectionKey];

  if (!section) {
    return null;
  }

  if (!isGroupedSection(sectionKey)) {
    return section[pageKey] || null;
  }

  for (const group of Object.values(section)) {
    if (group.pages && group.pages[pageKey]) {
      return group.pages[pageKey];
    }
  }

  return null;
}

function ensureValidState() {
  const sections = getSections();

  if (!sections.includes(currentSection)) {
    currentSection = sections[0];
  }

  const pages = getPages(currentSection);

  if (pages.length === 0) {
    currentPage = null;
    return;
  }

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
      const pages = getPages(sectionKey);
      currentPage = pages.length > 0 ? pages[0] : null;

      renderAll();
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    };

    topMenu.appendChild(item);
  });
}

function renderSideMenu() {
  const sideMenu = document.getElementById("sideMenu");
  sideMenu.innerHTML = "";

  const content = getContent();
  const section = content[currentSection];

  if (!section) {
    return;
  }

  if (!isGroupedSection(currentSection)) {
    const pages = getPages(currentSection);

    pages.forEach(pageKey => {
      const page = section[pageKey];

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
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      };

      sideMenu.appendChild(item);
    });

    return;
  }

  Object.keys(section).forEach(groupKey => {
    const group = section[groupKey];

    if (!group || !group.pages) {
      return;
    }

    const visiblePages = Object.keys(group.pages).filter(pageKey => {
      const page = group.pages[pageKey];
      return page.hidden !== true;
    });

    if (visiblePages.length === 0) {
      return;
    }

    if (group.label) {
      const heading = document.createElement("div");
      heading.className = "side-menu-group";
      heading.textContent = group.label;
      sideMenu.appendChild(heading);
    }

    visiblePages.forEach(pageKey => {
      const page = group.pages[pageKey];

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
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      };

      sideMenu.appendChild(item);
    });
  });
}

function renderContent() {
  const main = document.getElementById("content");
  const page = currentPage ? getPage(currentSection, currentPage) : null;

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

      if (block.type === "pre") {
        html += `
          <pre class="recipe-pre">${block.content}</pre>
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

  currentSection = link.dataset.section;
  currentPage = link.dataset.page;

  renderAll();
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

renderAll();