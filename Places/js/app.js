let lang = "sv";
let currentSection = "all";
let currentPage = "places";

let placesData = null;

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

async function loadPlacesData() {
  try {
    const response = await fetch("../data/places.json");

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    placesData = await response.json();
  }
  catch (error) {
    console.error("Kunde inte läsa places.json:", error);
    placesData = null;
  }
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

  if (!header) {
    return;
  }

  header.className = "site-header";

  const meta = siteMeta?.[lang]?.sections?.[currentSection];

  if (meta?.headerClass) {
    header.classList.add(meta.headerClass);
  }
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

function renderPlacesBlock(filter = "all") {
  if (!placesData?.regions) {
    return `
      <div class="places-error">
        Kunde inte läsa platsdata.
      </div>
    `;
  }

  let html = `<div class="places-list">`;

  placesData.regions.forEach(region => {
    let placesHtml = "";

    region.places.forEach(place => {

      const visibleItems = place.items.filter(item => {
        if (filter === "remaining") {
          return !item.visited;
        }

        if (filter === "visited") {
          return item.visited;
        }

        return true;
      });

      if (!visibleItems.length) {
        return;
      }

      let itemsHtml = "";

      visibleItems.forEach(item => {
        const status = item.visited ? "✓" : "○";
        const statusClass = item.visited
          ? "place-item-visited"
          : "place-item-remaining";

        let linksHtml = "";

        if (item.links?.length) {
          linksHtml = `
            <div class="place-links">
              ${item.links.map(link => `
                <a
                  href="${link.url}"
                  target="_blank"
                  rel="noopener noreferrer"
                >${link.title || link.url}</a>
              `).join("")}
            </div>
          `;
        }

        const notesHtml = item.notes
          ? `<div class="place-notes">${item.notes}</div>`
          : "";

        itemsHtml += `
          <div class="place-item ${statusClass}">
            <span class="place-status">${status}</span>

            <div class="place-item-content">
              <div class="place-item-name">
                ${item.name}
              </div>

              ${notesHtml}
              ${linksHtml}
            </div>
          </div>
        `;
      });

      placesHtml += `
        <section class="place-group">
          <h4>${place.name}</h4>
          ${itemsHtml}
        </section>
      `;
    });

    // Hela regionen försvinner om filtret inte lämnat
    // några synliga mål i den.
    if (placesHtml) {
      html += `
        <section class="places-region">
          <h3>${region.name}</h3>
          ${placesHtml}
        </section>
      `;
    }
  });

  html += `</div>`;

  return html;
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
              alt="${block.alt || ""}"
            >
            ${
              block.caption
                ? `<figcaption>${block.caption}</figcaption>`
                : ""
            }
          </figure>
        `;
      }

      if (block.type === "places") {
        html += renderPlacesBlock(currentSection);
      }

      if (block.type === "divider") {
        html += `<hr>`;
      }
    });
  }
  else {

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
          <img
            src="${src}"
            alt=""
          >
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
  updateTheme();
  updateHeaderStyle();
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


async function init() {
  await loadPlacesData();
  initCommonNavigation();
}

init();