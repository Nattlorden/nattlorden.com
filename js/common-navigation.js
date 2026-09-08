/* =========================================================
   common-navigation.js
   Gemensam navigation f�r sidor med section/page-struktur
   ========================================================= */

const mobileMedia = window.matchMedia("(max-width: 768px)");
let mobileView = "menu";


/* ---------- Access / visibility ---------- */

function hasAccess(key) {
  if (!key) {
    return true;
  }

  return localStorage.getItem(key) === "yes";
}

function isSectionVisible(sectionKey) {
  if (
    typeof sectionAccess === "undefined" ||
    !sectionAccess
  ) {
    return true;
  }

  const requiredKey = sectionAccess[sectionKey];

  return !requiredKey || hasAccess(requiredKey);
}

function isPageVisible(page) {
  if (!page) {
    return false;
  }

  // Dold ur menyer
  if (page.hidden === true) {
    return false;
  }

  // �ldre modell:
  // hidden: "hexAccess"
  if (typeof page.hidden === "string") {
    return hasAccess(page.hidden);
  }

  // Nyare, tydligare modell:
  // access: "hexAccess"
  if (page.access) {
    return hasAccess(page.access);
  }

  return true;
}


function getVisiblePages(sectionKey) {
  return getPages(sectionKey).filter(pageKey => {
    const page = getPage(sectionKey, pageKey);
    return isPageVisible(page);
  });
}

/* ---------- Common renderTopMenu --- */

function renderTopMenu() {
  if (typeof renderLocalTopMenu === "function") {
    renderLocalTopMenu();  /* If local specialization exists, run that instead */
    return;
  }
  const topMenu = document.getElementById("topMenu");

  if (!topMenu) {
    return;
  }

  topMenu.innerHTML = "";

  const sections = getSections()
    .filter(isSectionVisible);

  sections.forEach(sectionKey => {
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
      }
      else {
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

/* ---------- URL / history ---------- */

function readRouteFromUrl() {
  const hash = window.location.hash.slice(1);

  if (!hash) {
    return;
  }

  const [section, page] = hash.split("/");

  if (section) {
    currentSection = decodeURIComponent(section);
  }

  if (page) {
    currentPage = decodeURIComponent(page);
  }
}


function updateRouteInUrl() {
  if (!currentSection || !currentPage) {
    return;
  }

  const route =
    `${encodeURIComponent(currentSection)}/` +
    `${encodeURIComponent(currentPage)}`;

  if (window.location.hash.slice(1) !== route) {
    history.pushState(null, "", `#${route}`);
  }
}


/* ---------- Navigation ---------- */

function navigateTo(
  section,
  page,
  scrollToTop = true,
  mobileTarget = "content"
) {
  currentSection = section;
  currentPage = page;

  if (mobileMedia.matches) {
    mobileView = mobileTarget;
  }

  renderAll();
  updateRouteInUrl();

  if (scrollToTop) {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
}


/* ---------- Mobile view ---------- */

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

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}


function getMobileMenuButtonHtml() {
  const hasSideMenu =
    getVisiblePages(currentSection).length > 1;

  if (!hasSideMenu) {
    return "";
  }

  const menuLabel =
    lang === "sv"
      ? "&larr; Meny"
      : "&larr; Menu";

  return `
    <button
      type="button"
      class="mobile-menu-button"
      onclick="showMobileMenu()">
      ${menuLabel}
    </button>
  `;
}


/* ---------- Initialization ---------- */

function initCommonNavigation() {
  readRouteFromUrl();
  ensureValidState();

  if (mobileMedia.matches) {
    const pages = getVisiblePages(currentSection);

    if (window.location.hash || pages.length === 1) {
      mobileView = "content";
    }
    else {
      mobileView = "menu";
    }
  }

  renderAll();
  updateRouteInUrl();
}


window.addEventListener("popstate", () => {
  readRouteFromUrl();
  ensureValidState();

  if (mobileMedia.matches) {
    mobileView = "content";
  }

  renderAll();
});


mobileMedia.addEventListener(
  "change",
  updateMobileView
);