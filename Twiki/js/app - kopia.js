let lang = "sv";
let currentSection = "hifi";
let currentPage = "about";

function readRouteFromUrl() {
  const hash = window.location.hash.slice(1);
  if (!hash) return;

  const [section, page] = hash.split("/");

  if (section) currentSection = decodeURIComponent(section);
  if (page) currentPage = decodeURIComponent(page);
}

function updateRouteInUrl() {
  const route = `${encodeURIComponent(currentSection)}/${encodeURIComponent(currentPage)}`;

  if (window.location.hash.slice(1) !== route) {
    history.pushState(null, "", `#${route}`);
  }
}

function navigateTo(section, page, scrollToTop = true) {
  currentSection = section;
  currentPage = page;

  renderAll();
  updateRouteInUrl();

  if (scrollToTop) {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
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

function updateHeaderIcon() {
  const icon = document.getElementById("headerSideIcon");

  if (!icon) return;

  const meta = siteMeta?.[lang]?.sections?.[currentSection];

  if (meta?.icon) {
    icon.src = meta.icon;
    icon.style.display = "block";
  } else {
    icon.style.display = "none";
  }
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
  const pages = getPages(sectionKey);
  navigateTo(sectionKey, pages.length ? pages[0] : "");
};

    topMenu.appendChild(item);
  });
}

function renderPagePicker() {
  const picker = document.getElementById("pagePicker");
  if (!picker) return;

  picker.innerHTML = "";

  getSections().forEach(sectionKey => {
    const option = document.createElement("option");
    option.value = sectionKey;
    option.textContent = sectionLabels?.[lang]?.[sectionKey] || sectionKey;

    if (sectionKey === currentSection) {
      option.selected = true;
    }

    picker.appendChild(option);
  });

  picker.onchange = function () {
    const pages = getPages(picker.value);
    navigateTo(picker.value, pages.length ? pages[0] : "");
  };
}

function renderSideMenu() {
  const sideMenu = document.getElementById("sideMenu");
  if (!sideMenu) return;

  sideMenu.innerHTML = "";

  const content = getContent();
  const page = content?.[currentSection]?.[currentPage];

  if (!page?.blocks) return;

  page.blocks.forEach(block => {
    if (!block.id || !block.title) return;

    const item = document.createElement("div");
    item.className = "side-menu-item";
    item.textContent = block.title;

    item.onclick = function () {
      document.getElementById(block.id)?.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    };

    sideMenu.appendChild(item);
  });
}
/*
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
  navigateTo(currentSection, pageKey);
};

    sideMenu.appendChild(item);
  });
}
*/
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
  const level = block.headingLevel || 2;
  const headingTag = level === 3 ? "h4" : "h3";

  html += `
    <section class="content-section" id="${block.id || ""}">

      ${block.title ? `
        <div class="section-heading section-heading-${level}">
          <${headingTag}>${block.title}</${headingTag}>
          <div class="section-line"></div>
        </div>
      ` : ""}

      <div class="text-block">
        ${block.content || ""}
      </div>

    </section>
  `;
}

/*
      if (block.type === "text") {
  html += `
    <section class="content-section" id="${block.id || ""}">

      ${block.title ? `
        <div class="section-heading">
          <h3>${block.title}</h3>
          <div class="section-line"></div>
        </div>
      ` : ""}

      <div class="text-block">
        ${block.content || ""}
      </div>

    </section>
  `;
}*/

if (block.type === "sideImage") {
  const align = block.align === "left" ? "side-left" : "side-right";
  const size = block.size ? `side-${block.size}` : "side-medium";

  html += `
    <figure class="side-image ${align} ${size}">
      <img src="${block.src}" alt="${block.alt || ""}">
      ${block.caption ? `<figcaption>${block.caption}</figcaption>` : ""}
    </figure>
  `;
}

if (block.type === "infobox") {
  html += `
    <figure class="wiki-infobox">
      ${block.title ? `<h4>${block.title}</h4>` : ""}
      ${block.image ? `
        <img src="${block.image}" alt="${block.alt || ""}">
      ` : ""}
      ${block.caption ? `<div class="wiki-infobox-caption">${block.caption}</div>` : ""}

      ${block.rows?.length ? `
        <table>
          ${block.rows.map(row => `
            <tr>
              <th>${row[0]}</th>
              <td>${row[1]}</td>
            </tr>
          `).join("")}
        </table>
      ` : ""}
    </figure>
  `;
}
/*if (block.type === "text") {
        html += `
          <div class="text-block">
            ${block.content || ""}
          </div>
        `;
      }*/

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
  updateHeaderIcon();
  updateTheme();
  updateHeaderStyle();
  renderPagePicker();
  // renderTopMenu();
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

  navigateTo(link.dataset.section, link.dataset.page);
});

readRouteFromUrl();
renderAll();
updateRouteInUrl();

window.addEventListener("popstate", () => {
  readRouteFromUrl();
  renderAll();
});