let biographyData = null;
let notesByTitle = new Map();

const hasFriendAccess = () => localStorage.getItem("friendAccess") === "yes";

if (hasFriendAccess()) {
  document.documentElement.classList.add("friend-access");
}

async function loadBiography() {
  const response = await fetch("../data/biography.json");

  if (!response.ok) {
    throw new Error(
      `Kunde inte läsa biography.json: ${response.status}`
    );
  }

  biographyData = await response.json();

  notesByTitle = new Map(
    biographyData.notes.map(note => [note.title, note])
  );

  renderNoteList();

  const requestedTitle = decodeURIComponent(
    location.hash.substring(1)
  );

  if (requestedTitle && notesByTitle.has(requestedTitle)) {
    showNote(requestedTitle);
  }
}

function renderNoteList() {
  const list = document.getElementById("noteList");

  list.innerHTML = "";

  for (const note of biographyData.notes) {
    const li = document.createElement("li");
    const button = document.createElement("button");

    button.textContent = note.title;
    button.dataset.title = note.title;

    button.addEventListener("click", () => {
      showNote(note.title);
    });

    li.appendChild(button);
    list.appendChild(li);
  }
}

function showNote(title) {
  const note = notesByTitle.get(title);

  if (!note) {
    return;
  }

  location.hash = encodeURIComponent(title);

  document.querySelectorAll(".note-list button").forEach(button => {
    button.classList.toggle(
      "active",
      button.dataset.title === title
    );
  });

  const content = document.getElementById("content");

  content.innerHTML = "";

  const heading = document.createElement("h1");
  heading.textContent = note.title;
  content.appendChild(heading);

  
  const body = document.createElement("div");
  body.className = "note-body";

  renderMarkdown(note.markdown, body);

  if (!note.markdown.trim()) {
    const empty = document.createElement("p");
    empty.className = "empty";
    empty.textContent = "Ingen text ännu.";
    body.appendChild(empty);
  }

  content.appendChild(body);

  if (Object.keys(note.properties || {}).length > 0) {
    content.appendChild(
      renderProperties(note.properties)
    );
  }


  content.appendChild(
    renderRelations(note)
  );
}

function renderProperties(properties) {
  const section = document.createElement("section");
  section.className = "properties";

  const heading = document.createElement("h2");
  heading.textContent = "Egenskaper";
  section.appendChild(heading);

  const dl = document.createElement("dl");

  for (const [key, value] of Object.entries(properties)) {
    const dt = document.createElement("dt");
    dt.textContent = key;

    const dd = document.createElement("dd");

    if (value === null) {
      dd.textContent = "";
    }
    else if (Array.isArray(value)) {
      dd.textContent = value.join(", ");
    }
    else {
      dd.textContent = value;
    }

    dl.appendChild(dt);
    dl.appendChild(dd);
  }

  section.appendChild(dl);

  return section;
}

function renderRelations(note) {
  const section = document.createElement("section");
  section.className = "relations";

  const heading = document.createElement("h2");
  heading.textContent = "Refereras från";
  section.appendChild(heading);

  if (!note.backlinks || note.backlinks.length === 0) {
    const empty = document.createElement("p");
    empty.className = "empty";
    empty.textContent = "Inga backlinks.";
    section.appendChild(empty);

    return section;
  }

  const list = document.createElement("div");
  list.className = "relation-list";

  for (const title of note.backlinks) {
    const button = document.createElement("button");
    button.textContent = title;

    button.addEventListener("click", () => {
      showNote(title);
    });

    list.appendChild(button);
  }

  section.appendChild(list);

  return section;
}

function renderMarkdown(markdown, container) {
  const paragraphs = markdown
    .replace(/\r\n/g, "\n")
    .split(/\n\s*\n/);

  for (const paragraphText of paragraphs) {
    if (!paragraphText.trim()) {
      continue;
    }

    const p = document.createElement("p");

    renderInlineMarkdown(
      paragraphText.replace(/\n/g, " "),
      p
    );

    container.appendChild(p);
  }
}

function renderInlineMarkdown(text, container) {
  const regex =
    /(\[\[[^\]]+\]\]|\[[^\]]+\]\([^)]+\))/g;

  let lastIndex = 0;
  let match;

  while ((match = regex.exec(text)) !== null) {
    appendText(
      container,
      text.slice(lastIndex, match.index)
    );

    const token = match[0];

    if (token.startsWith("[[")) {
      renderWikiLink(token, container);
    }
    else {
      renderExternalLink(token, container);
    }

    lastIndex = regex.lastIndex;
  }

  appendText(
    container,
    text.slice(lastIndex)
  );
}

function renderWikiLink(token, container) {
  const inner = token.slice(2, -2);

  const pipeIndex = inner.indexOf("|");

  let target;
  let label;

  if (pipeIndex >= 0) {
    target = inner.slice(0, pipeIndex).trim();
    label = inner.slice(pipeIndex + 1).trim();
  }
  else {
    target = inner.trim();
    label = target;
  }

  const hashIndex = target.indexOf("#");

  if (hashIndex >= 0) {
    target = target.slice(0, hashIndex);
  }

  const span = document.createElement("span");

  span.textContent = label;
  span.className = "internal-link";

  if (notesByTitle.has(target)) {
    span.addEventListener("click", () => {
      showNote(target);
    });
  }
  else {
    span.classList.add("unresolved");
    span.title = `Ingen note finns ännu: ${target}`;
  }

  container.appendChild(span);
}

function renderExternalLink(token, container) {
  const match = token.match(
    /^\[([^\]]+)\]\(([^)]+)\)$/
  );

  if (!match) {
    appendText(container, token);
    return;
  }

  const [, label, url] = match;

  if (!url) {
    appendText(container, label);
    return;
  }

  const link = document.createElement("a");

  link.textContent = label;
  link.href = url;
  link.className = "external-link";
  link.target = "_blank";
  link.rel = "noopener noreferrer";

  container.appendChild(link);
}

function appendText(container, text) {
  container.appendChild(
    document.createTextNode(text)
  );
}

window.addEventListener("hashchange", () => {
  const title = decodeURIComponent(
    location.hash.substring(1)
  );

  if (notesByTitle.has(title)) {
    showNote(title);
  }
});

loadBiography().catch(error => {
  console.error(error);

  document.getElementById("content").innerHTML =
    `<p>Kunde inte läsa biografidata.</p>`;
});
