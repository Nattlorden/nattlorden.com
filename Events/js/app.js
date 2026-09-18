let lang = "sv";
let currentSection = "events";
let currentPage = "events";

window.pageNavigation = {
  topMenu: false,
  sideMenu: false
};

let eventsData = null;

async function loadEventsData() {
  try {
    const response = await fetch("data/events.json");

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    eventsData = await response.json();
  }
  catch (error) {
    console.error("Kunde inte läsa events.json:", error);
    eventsData = null;
  }
}

function renderEventsBlock() {
  if (!eventsData?.events) {
    return `
      <div class="events-error">
        Kunde inte läsa event-data.
      </div>
    `;
  }

  const visibleEvents = eventsData.events.filter(event =>
    !event.private || hasAccess("privateAccess")
  );

  if (!visibleEvents.length) {
    return `
      <div class="events-empty">
        ${lang === "sv"
          ? "Inga kommande händelser."
          : "No upcoming events."}
      </div>
    `;
  }

  // Säkerhets skull sorterar även renderaren.
  const events = [...visibleEvents].sort((a, b) =>
    a.date.localeCompare(b.date)
  );

  let html = `<div class="events-list">`;

  let currentMonthKey = null;
let monthOpen = false;

for (const event of events) {
  const date = parseDateTime(event.date);

  if (!date) {
    continue;
  }

  const monthKey = `${date.year}-${date.month}`;

  if (monthKey !== currentMonthKey) {
    if (monthOpen) {
      html += `</section>`;
    }

    currentMonthKey = monthKey;
    monthOpen = true;

    html += `
      <section class="events-month">
        <h3 class="events-month-title">
          ${getMonthName(date.month, lang)} ${date.year}
        </h3>
    `;
  }

 
if (monthOpen) {
  html += `</section>`;
}

    const recurringTitle =
      lang === "sv"
        ? "Återkommande"
        : "Recurring";

    const ticketText =
      lang === "sv"
        ? "Biljetter ej köpta"
        : "Tickets not purchased";

    const recurringHtml = event.recurring
      ? `
        <span
          class="event-recurring"
          title="${recurringTitle}"
        >↻</span>
      `
      : "";

    const notesHtml = event.notes
      ? `
        <div class="event-notes">
          ${event.notes}
        </div>
      `
      : "";

    const ticketsHtml = event.needsTickets
      ? `
        <div class="event-tickets">
          ${ticketText}
        </div>
      `
      : "";

    html += `
      <div class="event-item">
        <div class="event-date">
          ${date.day}
        </div>

        <div class="event-time">
          ${date.time || ""}
        </div>

        <div class="event-content">
          <div class="event-name">
            ${event.name}
            ${recurringHtml}
          </div>

          ${notesHtml}
          ${ticketsHtml}
        </div>
      </div>
    `;

    const nextEvent = events[
      events.indexOf(event) + 1
    ];

    if (
      !nextEvent ||
      (() => {
        const nextDate = parseDateTime(nextEvent.date);

        return (
          !nextDate ||
          nextDate.year !== date.year ||
          nextDate.month !== date.month
        );
      })()
    ) {
      html += `</section>`;
    }
  }

  html += `</div>`;

  return html;
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

  if (window.pageNavigation?.sideMenu === false) {
    sideMenu.hidden = true;
    return;
  }

  sideMenu.hidden = false;
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

      if (block.type === "events") {
        html += renderEventsBlock();
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
  await loadEventsData();
  initCommonNavigation();
}

init();