let biographyData = null;

let allNotesByTitle = new Map();
let notesByTitle = new Map();


/* =========================================================
   Access
   ========================================================= */

if (hasAccess("friendAccess")) {
  document.documentElement.classList.add(
    "friend-access"
  );
}


function isPrivateNote(note) {
  return Object.prototype.hasOwnProperty.call(
    note.properties || {},
    "privat"
  );
}


function isVisibleNote(note) {
  return (
    !isPrivateNote(note) ||
    hasAccess("friendAccess")
  );
}


/* =========================================================
   Mobile
   ========================================================= */

function showMobileNoteList() {
  mobileView = "menu";

  updateMobileView();

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}


/* =========================================================
   Load data
   ========================================================= */

async function loadBiography() {
  const response =
    await fetch("../data/biography.json");

  if (!response.ok) {
    throw new Error(
      `Kunde inte läsa biography.json: ${response.status}`
    );
  }

  biographyData =
    await response.json();


  allNotesByTitle = new Map(
    biographyData.notes.map(
      note => [note.title, note]
    )
  );


  notesByTitle = new Map(
    biographyData.notes
      .filter(isVisibleNote)
      .map(
        note => [note.title, note]
      )
  );


  renderNoteList();


  const requestedTitle =
    decodeURIComponent(
      location.hash.substring(1)
    );


  if (mobileMedia.matches) {
    if (
      requestedTitle &&
      notesByTitle.has(requestedTitle)
    ) {
      mobileView = "content";
    }
    else {
      mobileView = "menu";
    }
  }


  if (
    requestedTitle &&
    notesByTitle.has(requestedTitle)
  ) {
    showNote(requestedTitle);
  }


  updateMobileView();
}


/* =========================================================
   Note list
   ========================================================= */

function renderNoteList() {
  const list =
    document.getElementById("noteList");

  if (!list) {
    return;
  }

  list.innerHTML = "";


  biographyData.notes
    .filter(isVisibleNote)
    .forEach(note => {

      const li =
        document.createElement("li");

      const button =
        document.createElement("button");

      button.textContent =
        note.title;

      button.dataset.title =
        note.title;


      button.addEventListener(
        "click",
        () => {
          showNote(note.title);
        }
      );


      li.appendChild(button);
      list.appendChild(li);
    });
}


/* =========================================================
   Show note
   ========================================================= */

function showNote(title) {
  const note =
    notesByTitle.get(title);

  if (!note) {
    return;
  }


  if (mobileMedia.matches) {
    mobileView = "content";
  }


  const encodedTitle =
    encodeURIComponent(title);

  if (
    location.hash.substring(1) !==
    encodedTitle
  ) {
    location.hash = encodedTitle;
  }


  document
    .querySelectorAll(".note-list button")
    .forEach(button => {

      button.classList.toggle(
        "active",
        button.dataset.title === title
      );
    });


  const content =
    document.getElementById("content");

  if (!content) {
    return;
  }

  content.innerHTML = "";


  /*
    Biography har egen mobilknapp eftersom
    "menyn" här betyder anteckningslistan.
  */

  const menuButton =
    document.createElement("button");

  menuButton.type = "button";
  menuButton.className =
    "mobile-menu-button";

  menuButton.innerHTML =
    "&larr; Anteckningar";

  menuButton.addEventListener(
    "click",
    showMobileNoteList
  );

  content.appendChild(menuButton);


  const heading =
    document.createElement("h1");

  heading.textContent =
    note.title;

  content.appendChild(heading);


  const body =
    document.createElement("div");

  body.className =
    "note-body";


  renderMarkdown(
    note.markdown || "",
    body
  );


  if (!(note.markdown || "").trim()) {
    const empty =
      document.createElement("p");

    empty.className = "empty";
    empty.textContent =
      "Ingen text ännu.";

    body.appendChild(empty);
  }


  content.appendChild(body);


  if (
    Object.keys(
      note.properties || {}
    ).length > 0
  ) {
    content.appendChild(
      renderProperties(
        note.properties
      )
    );
  }


  content.appendChild(
    renderRelations(note)
  );


  updateMobileView();
}


/* =========================================================
   Properties
   ========================================================= */

function renderProperties(properties) {
  const section =
    document.createElement("section");

  section.className =
    "properties";


  const heading =
    document.createElement("h2");

  heading.textContent =
    "Egenskaper";

  section.appendChild(heading);


  const dl =
    document.createElement("dl");


  for (
    const [key, value]
    of Object.entries(properties)
  ) {
    const dt =
      document.createElement("dt");

    dt.textContent =
      key;


    const dd =
      document.createElement("dd");


    if (value === null) {
      dd.textContent = "";
    }
    else if (Array.isArray(value)) {
      dd.textContent =
        value.join(", ");
    }
    else {
      dd.textContent =
        value;
    }


    dl.appendChild(dt);
    dl.appendChild(dd);
  }


  section.appendChild(dl);

  return section;
}


/* =========================================================
   Backlinks
   ========================================================= */

function renderRelations(note) {
  const section =
    document.createElement("section");

  section.className =
    "relations";


  const heading =
    document.createElement("h2");

  heading.textContent =
    "Refereras från";

  section.appendChild(heading);


  const visibleBacklinks =
    (note.backlinks || []).filter(
      backlink => {

        if (
          backlink.private &&
          !hasAccess("friendAccess")
        ) {
          return false;
        }


        const sourceNote =
          allNotesByTitle.get(
            backlink.title
          );


        return (
          sourceNote &&
          isVisibleNote(sourceNote)
        );
      }
    );


  if (!visibleBacklinks.length) {
    const empty =
      document.createElement("p");

    empty.className = "empty";
    empty.textContent =
      "Inga backlinks.";

    section.appendChild(empty);

    return section;
  }


  const list =
    document.createElement("div");

  list.className =
    "relation-list";


  for (
    const backlink
    of visibleBacklinks
  ) {
    const title =
      backlink.title;


    const button =
      document.createElement("button");

    button.textContent =
      title;


    button.addEventListener(
      "click",
      () => {
        showNote(title);
      }
    );


    list.appendChild(button);
  }


  section.appendChild(list);

  return section;
}


/* =========================================================
   Markdown
   ========================================================= */

function renderMarkdown(
  markdown,
  container
) {
  let visibleMarkdown =
    markdown.replace(
      /\r\n/g,
      "\n"
    );


  /*
    Privata block
  */

  if (!hasAccess("friendAccess")) {
    visibleMarkdown =
      visibleMarkdown.replace(
        /<!--\s*private\s*-->[\s\S]*?<!--\s*\/private\s*-->/gi,
        ""
      );
  }
  else {
    visibleMarkdown =
      visibleMarkdown
        .replace(
          /<!--\s*private\s*-->/gi,
          ""
        )
        .replace(
          /<!--\s*\/private\s*-->/gi,
          ""
        );
  }


  /*
    Horisontella linjer skall bli
    separata block.
  */

  visibleMarkdown =
    visibleMarkdown.replace(
      /^[ \t]*-{3,}[ \t]*$/gm,
      "\n\n---\n\n"
    );


  const paragraphs =
    visibleMarkdown.split(
      /\n\s*\n/
    );


  for (
    const paragraphText
    of paragraphs
  ) {
    const trimmed =
      paragraphText.trim();


    if (!trimmed) {
      continue;
    }


    if (/^-{3,}$/.test(trimmed)) {
      container.appendChild(
        document.createElement("hr")
      );

      continue;
    }


    const p =
      document.createElement("p");


    renderInlineMarkdown(
      paragraphText.replace(
        /\n/g,
        " "
      ),
      p
    );


    container.appendChild(p);
  }
}


/* =========================================================
   Inline markdown
   ========================================================= */

function renderInlineMarkdown(
  text,
  container
) {
  const regex =
    /(!\[\[[^\]]+\]\]|\*\*\*[^*]+\*\*\*|\*\*[^*]+\*\*|\*[^*]+\*|\[\[[^\]]+\]\]|\[[^\]]+\]\([^)]+\))/g;


  let lastIndex = 0;
  let match;


  while (
    (match = regex.exec(text)) !== null
  ) {
    appendText(
      container,
      text.slice(
        lastIndex,
        match.index
      )
    );


    const token =
      match[0];


    if (token.startsWith("![[")) {
      renderImageEmbed(
        token,
        container
      );
    }

    else if (
      token.startsWith("***")
    ) {
      const strong =
        document.createElement("strong");

      const em =
        document.createElement("em");


      em.textContent =
        token.slice(3, -3);

      strong.appendChild(em);
      container.appendChild(strong);
    }

    else if (
      token.startsWith("**")
    ) {
      const strong =
        document.createElement("strong");

      strong.textContent =
        token.slice(2, -2);

      container.appendChild(strong);
    }

    else if (
      token.startsWith("*")
    ) {
      const em =
        document.createElement("em");

      em.textContent =
        token.slice(1, -1);

      container.appendChild(em);
    }

    else if (
      token.startsWith("[[")
    ) {
      renderWikiLink(
        token,
        container
      );
    }

    else {
      renderExternalLink(
        token,
        container
      );
    }


    lastIndex =
      regex.lastIndex;
  }


  appendText(
    container,
    text.slice(lastIndex)
  );
}


/* =========================================================
   Obsidian image embeds
   ========================================================= */

function renderImageEmbed(
  token,
  container
) {
  const inner =
    token.slice(3, -2);


  const pipeIndex =
    inner.lastIndexOf("|");


  let filename;
  let width = null;


  if (pipeIndex >= 0) {
    filename =
      inner
        .slice(0, pipeIndex)
        .trim();


    const widthText =
      inner
        .slice(pipeIndex + 1)
        .trim();


    if (/^\d+$/.test(widthText)) {
      width =
        Number(widthText);
    }
  }

  else {
    filename =
      inner.trim();
  }


  if (!filename) {
    return;
  }


  const img =
    document.createElement("img");


  img.src =
    "../Nattis/Bilder/" +
    encodeURIComponent(filename)
      .replace(/%2F/gi, "/");


  img.alt = "";
  img.loading = "lazy";

  img.style.maxWidth =
    "100%";

  img.style.height =
    "auto";


  if (width) {
    img.style.width =
      `${width}px`;
  }


  container.appendChild(img);
}


/* =========================================================
   Wiki links
   ========================================================= */

function renderWikiLink(
  token,
  container
) {
  const inner =
    token.slice(2, -2);


  const pipeIndex =
    inner.indexOf("|");


  let target;
  let label;


  if (pipeIndex >= 0) {
    target =
      inner
        .slice(0, pipeIndex)
        .trim();

    label =
      inner
        .slice(pipeIndex + 1)
        .trim();
  }

  else {
    target =
      inner.trim();

    label =
      target;
  }


  const hashIndex =
    target.indexOf("#");


  if (hashIndex >= 0) {
    target =
      target.slice(
        0,
        hashIndex
      );
  }


  const targetNote =
    allNotesByTitle.get(target);


  /*
    Privat note skall inte ens
    avslöjas som länk.
  */

  if (
    targetNote &&
    isPrivateNote(targetNote) &&
    !hasAccess("friendAccess")
  ) {
    appendText(
      container,
      label
    );

    return;
  }


  const span =
    document.createElement("span");


  span.textContent =
    label;

  span.className =
    "internal-link";


  if (notesByTitle.has(target)) {
    span.addEventListener(
      "click",
      () => {
        showNote(target);
      }
    );
  }

  else {
    span.classList.add(
      "unresolved"
    );

    span.title =
      `Ingen note finns ännu: ${target}`;
  }


  container.appendChild(span);
}


/* =========================================================
   External links
   ========================================================= */

function renderExternalLink(
  token,
  container
) {
  const match =
    token.match(
      /^\[([^\]]+)\]\(([^)]+)\)$/
    );


  if (!match) {
    appendText(
      container,
      token
    );

    return;
  }


  const [, label, url] =
    match;


  if (!url) {
    appendText(
      container,
      label
    );

    return;
  }


  const link =
    document.createElement("a");


  link.textContent =
    label;

  link.href =
    url;

  link.className =
    "external-link";

  link.target =
    "_blank";

  link.rel =
    "noopener noreferrer";


  container.appendChild(link);
}


/* =========================================================
   Text helper
   ========================================================= */

function appendText(
  container,
  text
) {
  container.appendChild(
    document.createTextNode(text)
  );
}


/* =========================================================
   Hash navigation
   ========================================================= */

window.addEventListener(
  "hashchange",
  () => {

    const title =
      decodeURIComponent(
        location.hash.substring(1)
      );


    if (notesByTitle.has(title)) {
      showNote(title);
    }

    else if (
      mobileMedia.matches &&
      !title
    ) {
      mobileView = "menu";
      updateMobileView();
    }
  }
);


/* =========================================================
   Start
   ========================================================= */

loadBiography().catch(error => {
  console.error(error);

  const content =
    document.getElementById("content");

  if (content) {
    content.innerHTML =
      `<p>Kunde inte läsa biografidata.</p>`;
  }
});
