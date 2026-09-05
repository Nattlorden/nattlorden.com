let lang = "sv";
let currentSection = "singles";
let currentPage = "overview";
const mobileMedia = window.matchMedia("(max-width: 768px)");

/*let mobileView =
  mobileMedia.matches && window.location.hash
    ? "content"
    : "menu";*/
let mobileView = "menu";

function updateMobileView() {
  document.body.classList.toggle(
    "mobile-menu-view",
    mobileMedia.matches && mobileView === "menu"
  );

  document.body.classList.toggle(
    "mobile-content-view",
    mobileMedia.matches && mobileView === "content"
  );
}

function showMobileMenu() {
  mobileView = "menu";
  updateMobileView();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

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

/* function navigateTo(section, page, scrollToTop = true) {
  currentSection = section;
  currentPage = page;

  renderAll();
  updateRouteInUrl();

  if (scrollToTop) {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
} */

  function navigateTo(section, page, scrollToTop = true, mobileTarget = "content") {
  currentSection = section;
  currentPage = page;

  if (mobileMedia.matches) {
    mobileView = mobileTarget;
  }

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

function getVisiblePages(sectionKey) {
  const content = getContent();

  return getPages(sectionKey).filter(pageKey => {
    return content[sectionKey][pageKey].hidden !== true;
  });
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

  if (btnSV) {
    btnSV.classList.toggle("active", lang === "sv");
  }

  if (btnEN) {
    btnEN.classList.toggle("active", lang === "en");
  }
}

function updateTagline() {
  const tagline = document.getElementById("tagline");

  if (tagline) {
    tagline.textContent = siteMeta[lang].tagline;
  }

  document.documentElement.lang = lang;
}

function renderTopMenu() {
  const topMenu = document.getElementById("topMenu");

  if (!topMenu) {
    return;
  }

  topMenu.innerHTML = "";

  topPanels.forEach(panel => {
    const item = document.createElement("div");
    item.className = "top-menu-item";

    if (panel.key === currentSection) {
      item.classList.add("active");
    }

  /*  item.onclick = function () {
  navigateTo(sectionKey, getPages(sectionKey)[0]);
};*/
  /*  item.onclick = function () {
      navigateTo(
        sectionKey,
        getPages(sectionKey)[0],
        true,
        "menu"
      );
    };*/
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
        pages[0],
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
  navigateTo(currentSection, pageKey);
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

  if (!main) {
    return;
  }

  if (!page) {
    main.innerHTML = `
      <h2>${siteMeta[lang].missingTitle}</h2>
      <p>${siteMeta[lang].missingText}</p>
    `;
    return;
  }

  /*let html = `<h2>${page.title}</h2>`;*/
  /*const menuLabel = lang === "sv" ? "&larr; Meny" : "&larr; Menu";

  let html = `
    <button
      type="button"
      class="mobile-menu-button"
      onclick="showMobileMenu()">
      ${menuLabel}
    </button>

    <h2>${page.title}</h2>
  `;*/
  const menuLabel = lang === "sv" ? "&larr; Meny" : "&larr; Menu";
  const hasSideMenu = getVisiblePages(currentSection).length > 1;

  let html = `
   ${hasSideMenu ? `
     <button
       type="button"
       class="mobile-menu-button"
       onclick="showMobileMenu()">
       ${menuLabel}
     </button>
   ` : ""}

   <h2>${page.title}</h2>
  `;


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
  updateMobileView();
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

  item.onclick = function () {
  navigateTo(currentSection, pageKey);
};
});

readRouteFromUrl();
ensureValidState();

if (mobileMedia.matches) {
  const pages = getVisiblePages(currentSection);

  if (window.location.hash || pages.length === 1) {
    mobileView = "content";
  } else {
    mobileView = "menu";
  }
}

renderAll();
updateRouteInUrl();

window.addEventListener("popstate", () => {
  readRouteFromUrl();

  if (mobileMedia.matches) {
    mobileView = "content";
  }

  renderAll();
});

mobileMedia.addEventListener("change", updateMobileView);