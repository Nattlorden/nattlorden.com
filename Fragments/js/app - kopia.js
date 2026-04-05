let currentLang = "sv";
let currentSection = "nattlorden";
let currentPage = "about";

// ===== INIT =====
document.addEventListener("DOMContentLoaded", () => {
  renderTopMenu();
  renderSideMenu();
  renderContent();
  updateHeader();
});

// ===== LANGUAGE =====
function setLang(lang) {
  currentLang = lang;
  renderTopMenu();
  renderSideMenu();
  renderContent();
  updateHeader();
}

// ===== DATA HELPERS =====
function getContent() {
  return currentLang === "sv" ? contentSV : contentEN;
}

function getMeta() {
  return siteMeta[currentLang];
}

function getSections() {
  return Object.keys(sectionLabels[currentLang]);
}

// ===== TOP MENU =====
function renderTopMenu() {
  const topMenu = document.getElementById("topMenu");
  topMenu.innerHTML = "";

  const labels = sectionLabels[currentLang];

  getSections().forEach(sectionKey => {
    const item = document.createElement("div");
    item.className = "top-menu-item";
    item.textContent = labels[sectionKey];

    if (sectionKey === currentSection) {
      item.classList.add("active");
    }

    item.onclick = () => {
      currentSection = sectionKey;
      currentPage = "about";
      renderTopMenu();
      renderSideMenu();
      renderContent();
      updateHeader();
      window.scrollTo({ top: 0, behavior: "instant" });
    };

    topMenu.appendChild(item);
  });
}

// ===== SIDE MENU =====
function renderSideMenu() {
  const sideMenu = document.getElementById("sideMenu");
  sideMenu.innerHTML = "";

  const content = getContent()[currentSection];

  Object.keys(content).forEach(pageKey => {
    const item = document.createElement("div");
    item.className = "side-menu-item";
    item.textContent = content[pageKey].menuTitle;

    if (pageKey === currentPage) {
      item.classList.add("active");
    }

    item.onclick = () => {
      currentPage = pageKey;
      renderSideMenu();
      renderContent();
      window.scrollTo({ top: 0, behavior: "instant" });
    };

    sideMenu.appendChild(item);
  });
}

// ===== CONTENT =====
function renderContent() {
  const contentArea = document.getElementById("content");
  const meta = getMeta();
  const content = getContent()[currentSection][currentPage];

  if (!content) {
    contentArea.innerHTML = `
      <h2>${meta.missingTitle}</h2>
      <p>${meta.missingText}</p>
    `;
    return;
  }

  contentArea.innerHTML = `
    <h2>${content.title}</h2>
    <p>${content.text.replace(/\n/g, "<br><br>")}</p>
    ${content.showPlaceholder !== false ? `<p>${meta.placeholder}</p>` : ""}
  `;
}

// ===== HEADER STYLE SWITCH =====
function updateHeader() {
  const header = document.getElementById("siteHeader");
  const taglineEl = document.getElementById("tagline");
  const meta = getMeta();

  // reset classes
  header.className = "site-header";

  const sectionMeta = meta.sections[currentSection];

  if (sectionMeta) {
    header.classList.add(sectionMeta.headerClass);
    taglineEl.textContent = sectionMeta.tagline;
  }
}