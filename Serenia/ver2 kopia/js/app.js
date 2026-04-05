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

renderAll();