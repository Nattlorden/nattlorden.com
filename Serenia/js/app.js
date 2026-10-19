let lang = "sv";
let currentSection = "project";
let currentPage = "about";

let lastAlbumPage = null;


if (hasAccess("friendAccess")) {
  document.documentElement.classList.add(
    "friend-access"
  );
}


function getContent() {
  return lang === "sv"
    ? contentSV
    : contentEN;
}


function getSections() {
  return Object.keys(getContent());
}


function getPages(sectionKey) {
  const content = getContent();

  if (!content[sectionKey]) {
    return [];
  }

  return Object.keys(
    content[sectionKey]
  );
}


function getPage(sectionKey, pageKey) {
  const content = getContent();

  return (
    content?.[sectionKey]?.[pageKey] ||
    null
  );
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
  const btnSV =
    document.getElementById("btn-sv");

  const btnEN =
    document.getElementById("btn-en");

  if (!btnSV || !btnEN) {
    return;
  }

  btnSV.classList.toggle(
    "active",
    lang === "sv"
  );

  btnEN.classList.toggle(
    "active",
    lang === "en"
  );
}


function updateTagline() {
  const tagline =
    document.getElementById("tagline");

  if (tagline) {
    tagline.textContent =
      siteMeta?.[lang]?.tagline || "";
  }

  document.documentElement.lang = lang;
}

function renderSideMenu() {
  const sideMenu =
    document.getElementById("sideMenu");

  if (!sideMenu) {
    return;
  }

  sideMenu.innerHTML = "";

  const pages =
    getVisiblePages(currentSection);

  pages.forEach(pageKey => {
    const page =
      getPage(
        currentSection,
        pageKey
      );

    if (!page) {
      return;
    }

    const item =
      document.createElement("div");

    item.className =
      "side-menu-item";

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


/* =========================================================
   Music
   ========================================================= */

function openSongLyrics(songKey) {
  lastAlbumPage = currentPage;

  navigateTo(
    "music",
    songKey
  );
}


function goBackToAlbum() {
  if (!lastAlbumPage) {
    return;
  }

  navigateTo(
    "music",
    lastAlbumPage
  );
}


/* =========================================================
   Timeline
   ========================================================= */

function renderTimeline(timeline) {
  let html = `
    <div class="timeline">
  `;

  timeline.forEach(event => {
    html += `
      <section class="timeline-event">

        <div class="timeline-event-header">
          <h3>${event.title}</h3>

          ${event.meta
            ? `
              <div class="timeline-event-meta">
                ${event.meta}
              </div>
            `
            : ""}
        </div>

        <div class="timeline-tracks">
    `;


    event.tracks.forEach(track => {
      html += `
        <article class="timeline-track-card">

          ${track.image
            ? `
              <img
                src="${track.image}"
                alt="${track.title}">
            `
            : ""}

          <h4>${track.title}</h4>

          ${
            track.date
              ? `
                <div class="track-date">
                  ${
                    lang === "sv"
                      ? "Publicerad"
                      : "Published"
                  }:
                  ${track.date}
                </div>
              `
              : track.status
                ? `
                  <div class="track-date">
                    ${track.status}
                  </div>
                `
                : ""
          }

          <div class="track-links">

            ${track.textPage
              ? `
                <a
                  class="internal-link"
                  data-section="music"
                  data-page="${track.textPage}">
                  ${
                    lang === "sv"
                      ? "Text"
                      : "Lyrics"
                  }
                </a>
              `
              : ""}

            ${track.spotify
              ? `
                <a
                  href="${track.spotify}"
                  target="_blank"
                  rel="noopener noreferrer">
                  Spotify
                </a>
              `
              : ""}

            ${track.youtube
              ? `
                <a
                  href="${track.youtube}"
                  target="_blank"
                  rel="noopener noreferrer">
                  YouTube
                </a>
              `
              : ""}

          </div>


          ${track.note
            ? `
              <details class="track-notes">

                <summary>
                  ${
                    lang === "sv"
                      ? "Kommentar"
                      : "Notes"
                  }
                </summary>

                <div class="track-note-text">
                  ${track.note}
                </div>

              </details>
            `
            : ""}

        </article>
      `;
    });


    html += `
        </div>
      </section>
    `;
  });


  html += `</div>`;

  return html;  
}


/* =========================================================
   Chapters
   ========================================================= */

function renderChapter(page, pageKey) {
  const chapter = page.chapter;
  const chapterNumber = Number(pageKey.match(/^chapter(\d+)$/)?.[1]);

  let html = `
    <article class="chapter-page">
      <h2 class="chapter-title">
        ${page.title}
      </h2>
  `;


  if (chapter.subtitle) {
    html += `
      <div class="chapter-subtitle">
        ${chapter.subtitle}
      </div>
    `;
  }


  if (
    chapter.dropcap &&
    chapter.opening
  ) {
    html += `
      <p class="chapter-opening">

        <img
          class="dropcap-image"
          src="assets/story/${chapter.dropcap}.png"
          alt=""
          style="${
            chapter.dropcapAdjust
              ? `
                position: relative;
                top: ${chapter.dropcapAdjust}px;
              `
              : ""
          }">

        ${chapter.opening}

      </p>
    `;
  }


  if (
    chapter.sections &&
    chapter.sections.length > 0
  ) {
    chapter.sections.forEach(part => {

      if (part.type === "text") {
        html += `
          <div class="chapter-text">
            ${part.content}
          </div>
        `;
      }


      if (part.type === "marker") {
        html += `
          <div
            class="chapter-marker marker-${part.style || "default"}">
          </div>
        `;
      }


      if (part.type === "letter") {
        html += `
          <div class="letter">
            ${part.content}
          </div>
        `;
      }


      if (part.type === "song") {
        html += `
          <div class="song">
            ${part.content}
          </div>
        `;
      }


      if (part.type === "image") {
        const imageSize =
          part.size
            ? `chapter-image-${part.size}`
            : "chapter-image-medium";

        html += `
          <figure
            class="chapter-illustration ${imageSize}">

            <img
              src="${part.src}"
              alt="${part.alt || ""}">

            ${part.caption
              ? `
                <figcaption>
                  ${part.caption}
                </figcaption>
              `
              : ""}

          </figure>
        `;
      }
    });
  }

  if (chapterNumber > 0) {
  const readThrough = Number(
    localStorage.getItem("sereniaChapter") || 0
  );

  html += `
    <div class="chapter-completion">
      <div class="chapter-completion-ornament">✦ ✦ ✦</div>

      ${chapterNumber > readThrough ? `
        <button
          type="button"
          class="chapter-read-button"
          data-chapter-read="${chapterNumber}">
          ${lang === "en"
      ? "Mark chapter as read"
      : "Markera kapitel som läst"}
        </button>
      ` : ""}
    </div>
  `;
  }


  html += `</article>`;

  return html;
}



/* =========================================================
   Cards
   ========================================================= */

function renderCardPage(main, page) {
  let html = `
    ${getMobileMenuButtonHtml()}
    <h2>${page.title || ""}</h2>
  `;

  if (page.intro) {
    html += `
      <div class="text-block">
        ${page.intro}
      </div>
    `;
  }

  html += renderCardGrid(page.cards, page.columns || 4, {
  spoilers: true,
  readThrough: Number(
    localStorage.getItem("sereniaChapter") || 0
  ),
  showAll:
    localStorage.getItem("sereniaShowAll") === "yes",
  lang
})

  if (page.showPlaceholder !== false) {
    html += `
      <div class="placeholder-box">
        ${siteMeta?.[lang]?.placeholder || ""}
      </div>
    `;
  }

  main.innerHTML = html;
}

function markNextSereniaChapter() {
  const readThrough = Number(
    localStorage.getItem("sereniaChapter") || 0
  );

  const nextChapter = readThrough + 1;

  const links = document.querySelectorAll(
  '#content a[data-section="story"][data-page^="chapter"]'
  );


  links.forEach(link => {
    const match = link.dataset.page.match(/^chapter(\d+)$/);
    if (!match) return;

    if (Number(match[1]) === nextChapter) {
      link.classList.add("next-chapter");
    }
  });
}

/* =========================================================
   Serenia reading controls
   ========================================================= */
   
function renderSereniaReadingControls() {
  const main = document.querySelector("main");
  const chapterLinks = [
    ...main.querySelectorAll(
      'a[data-section="story"][data-page^="chapter"]'
    )
  ];

  const chapters = chapterLinks
    .map(link => Number(
      link.dataset.page.match(/^chapter(\d+)$/)?.[1]
    ))
    .filter(n => Number.isInteger(n) && n > 0);

  const maxChapter = Math.max(0, ...chapters);

  const readThrough = Number(
    localStorage.getItem("sereniaChapter") || 0
  );

  const showAll =
    localStorage.getItem("sereniaShowAll") === "yes";

  const sv = lang === "sv";

  const panel = document.createElement("div");
  panel.className = "serenia-reading-controls";

  panel.innerHTML = `
    <div class="serenia-reader-row">
      <div class="serenia-reader-info">
        <div class="serenia-reader-title">
          ${sv ? "Visa alla spoilers" : "Show all spoilers"}
        </div>
        <div class="serenia-reader-description">
          ${sv
            ? "Visa innehåll även från kapitel du inte läst."
            : "Show content from chapters you haven't read yet."}
        </div>
      </div>

      <label class="serenia-switch">
        <input
          type="checkbox"
          id="serenia-show-all"
          ${showAll ? "checked" : ""}>
        <span class="serenia-switch-track"></span>
      </label>
    </div>

    <div class="serenia-reading-status">
      ${readThrough === 0
        ? (sv ? "Inget kapitel markerat som läst."
              : "No chapters marked as read.")
        : (sv
            ? `Läst till och med kapitel ${readThrough}.`
            : `Read through chapter ${readThrough}.`)}
      ${maxChapter > readThrough
        ? (sv
            ? ` Nästa: kapitel ${readThrough + 1}.`
            : ` Next: chapter ${readThrough + 1}.`)
        : ""}
    </div>

    <details class="serenia-test-tools">
      <summary>
        ${sv ? "Testverktyg" : "Testing tools"}
      </summary>

      <div class="serenia-test-content">
        <label for="serenia-read-through">
          ${sv ? "Läst till och med kapitel" : "Read through chapter"}
        </label>

        <select id="serenia-read-through">
          ${Array.from(
            { length: Math.max(maxChapter, readThrough) + 1 },
            (_, n) => `
              <option value="${n}" ${n === readThrough ? "selected" : ""}>
                ${n === 0
                  ? (sv ? "Inget kapitel" : "No chapters")
                  : n}
              </option>
            `
          ).join("")}
        </select>

        <button type="button" id="serenia-reset">
          ${sv ? "Nollställ" : "Reset"}
        </button>
      </div>
    </details>
  `;

  const firstChapterLink = chapterLinks[0];
  const introduction = firstChapterLink?.closest("p");

  if (introduction) {
    introduction.before(panel);
  } else if (firstChapterLink) {
    firstChapterLink.before(panel);
  } else {
    main.append(panel);
  }

  panel.querySelector("#serenia-show-all")
    .addEventListener("change", e => {
      localStorage.setItem(
        "sereniaShowAll",
        e.target.checked ? "yes" : "no"
      );
      renderAll();
    });

  panel.querySelector("#serenia-read-through")
    .addEventListener("change", e => {
      localStorage.setItem("sereniaChapter", e.target.value);
      renderAll();
    });

  panel.querySelector("#serenia-reset")
    .addEventListener("click", () => {
      const message = sv
        ? "Nollställa läsprogression och dölja spoilers?"
        : "Reset reading progress and hide spoilers?";

      if (!confirm(message)) return;

      localStorage.setItem("sereniaChapter", "0");
      localStorage.setItem("sereniaShowAll", "no");
      renderAll();
    });
}

/* =========================================================
   Content
   ========================================================= */

function renderContent() {
  const main =
    document.getElementById("content");

  if (!main) {
    return;
  }

  const page =
    getPage(
      currentSection,
      currentPage
    );


  if (!page) {
    main.innerHTML = `
      <h2>
        ${siteMeta?.[lang]?.missingTitle || "Saknas"}
      </h2>

      <p>
        ${
          siteMeta?.[lang]?.missingText ||
          "Innehåll kommer senare."
        }
      </p>
    `;

    return;
  }


  /*
    1. Albumsidor
  */

  if (
    currentSection === "music" &&
    musicData?.albums?.[currentPage]
  ) {
    const album =
      musicData.albums[currentPage];

    let html = `
      ${getMobileMenuButtonHtml()}
      <h2>${page.title || ""}</h2>
    `;


    if (page.intro) {
      html += `
        <div class="text-block">
          ${page.intro}
        </div>
      `;
    }


    if (album.image) {
      html += `
        <figure class="image-block image-small">

          <img
            src="${album.image}"
            alt="${
              album.imageAlt ||
              album.title ||
              ""
            }">

          ${page.caption
            ? `
              <figcaption>
                ${page.caption}
              </figcaption>
            `
            : ""}

        </figure>
      `;
    }


    html += renderAlbumTrackList(
      album,
      {
        lyricsLabel:
          lang === "sv"
            ? "Text"
            : "Lyrics"
      }
    );


    if (page.showPlaceholder !== false) {
      html += `
        <div class="placeholder-box">
          ${siteMeta?.[lang]?.placeholder || ""}
        </div>
      `;
    }


    main.innerHTML = html;
    return;
  }


  /*
    2. Låtsidor
  */

  if (
    currentSection === "music" &&
    page.lyrics
  ) {
    let html = `
      ${getMobileMenuButtonHtml()}
      <h2>${page.title || ""}</h2>
    `;


    let backButton = "";

    if (lastAlbumPage) {
      backButton = `
        <div class="back-link">

          <a
            href="#"
            data-back-to-album>

            &#8592;
            ${uiText?.[lang]?.backToAlbum || ""}

          </a>

        </div>
      `;
    }


    html += backButton;


    if (page.image) {
      const imageSize =
        page.image.size
          ? `image-${page.image.size}`
          : "image-small";

      html += `
        <figure class="image-block ${imageSize}">

          <img
            src="${page.image.src}"
            alt="${page.image.alt || ""}">

          ${page.image.caption
            ? `
              <figcaption>
                ${page.image.caption}
              </figcaption>
            `
            : ""}

        </figure>
      `;
    }


    html += `
      <div class="text-block lyrics-block">
        ${
          page.lyrics
            .trim()
            .replace(/\n/g, "<br>")
        }
      </div>
    `;


    html += backButton;


    if (page.showPlaceholder !== false) {
      html += `
        <div class="placeholder-box">
          ${siteMeta?.[lang]?.placeholder || ""}
        </div>
      `;
    }


    main.innerHTML = html;
    return;
  }


  /*
    3. Timeline
  */

  if (
    page.timeline &&
    page.timeline.length > 0
  ) {
    let html = `
      ${getMobileMenuButtonHtml()}
      <h2>${page.title || ""}</h2>
    `;


    if (page.text) {
      html += `
        <div class="text-block">
          ${page.text}
        </div>
      `;
    }


    html += renderTimeline(
      page.timeline
    );


    if (page.showPlaceholder !== false) {
      html += `
        <div class="placeholder-box">
          ${siteMeta?.[lang]?.placeholder || ""}
        </div>
      `;
    }


    main.innerHTML = html;
    return;
  }


  /*
    4. Kapitelsidor
  */

  if (
    page.pageType === "chapter" &&
    page.chapter
  ) {
    let html = `
      ${getMobileMenuButtonHtml()}
      ${renderChapter(page,currentPage)}
    `;


    if (page.showPlaceholder !== false) {
      html += `
        <div class="placeholder-box">
          ${siteMeta?.[lang]?.placeholder || ""}
        </div>
      `;
    }


    main.innerHTML = html;
    return;
  }

    /*
    5. Cards
  */

  if (
    page.layout === "cards" &&
    page.cards
  ) {
    renderCardPage(
      main,
      page
    );

    return;
  }


  /*
    6. Vanliga sidor
  */

  let html = `
    ${getMobileMenuButtonHtml()}
    <h2>${page.title || ""}</h2>
  `;


  if (
    page.blocks &&
    page.blocks.length > 0
  ) {
    page.blocks.forEach(block => {

      if (block.type === "text") {
        html += `
          <div class="text-block">
            ${block.content || ""}
          </div>
        `;
      }


      if (block.type === "letter") {
        html += `
          <div class="letter">
            ${block.content || ""}
          </div>
        `;
      }


      if (block.type === "song") {
        html += `
          <div class="song">
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
              alt="${block.alt || ""}">

            ${block.caption
              ? `
                <figcaption>
                  ${block.caption}
                </figcaption>
              `
              : ""}

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


    if (
      page.images &&
      page.images.length > 0
    ) {
      html += `
        <div class="image-gallery">
      `;

      page.images.forEach(src => {
        html += `
          <img
            src="${src}"
            alt="">
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

  if (currentSection === "story" && currentPage === "chapters") {
    renderSereniaReadingControls();
    markNextSereniaChapter();
  }

  
}


/* =========================================================
   Main
   ========================================================= */

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


/* =========================================================
   Internal links
   ========================================================= */

document.addEventListener(
  "click",
  function (e) {
       /*
      Markera kapitel som läst
    */
    const readButton = e.target.closest("[data-chapter-read]");

if (readButton) {
  const chapterNumber = Number(readButton.dataset.chapterRead);
  const previous = Number(
    localStorage.getItem("sereniaChapter") || 0
  );

  localStorage.setItem(
    "sereniaChapter",
    String(Math.max(previous, chapterNumber))
  );

  readButton.remove();
  return;
}

    /*
      Låt i albumlistan
    */

    const albumTrack =
      e.target.closest(
        "a[data-album-track]"
      );

    if (albumTrack) {
      e.preventDefault();

      openSongLyrics(
        albumTrack.dataset.albumTrack
      );

      return;
    }


    /*
      Tillbaka till album
    */

    const backToAlbum =
      e.target.closest(
        "a[data-back-to-album]"
      );

    if (backToAlbum) {
      e.preventDefault();

      goBackToAlbum();

      return;
    }


    /*
      Vanlig intern sidlänk
    */

    const link =
      e.target.closest(
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

 
  }
);


initCommonNavigation();