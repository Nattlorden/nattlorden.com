let lang = "sv";
let currentSection = "world";
let currentPage = "overview";

const content = {
  sv: {
    menu: {
      world: "Världen",
      story: "Berättelsen",
      characters: "Karaktärer",
      music: "Musiken",
      gallery: "Galleri",
      project: "Projektet"
    },
    sections: {
      world: {
        overview: {
          title: "Världen",
          text: "En värld av sten, dimma och viskningar."
        },
        geography: {
          title: "Geografi",
          text: "Här kommer kartor och platser."
        }
      },
      story: {
        overview: {
          title: "Berättelsen",
          text: "Keris resa börjar här."
        }
      },
      characters: {
        keri: {
          title: "Keri",
          text: "Skräddare. Överlevare. Något mer."
        }
      }
    }
  },

  en: {
    menu: {
      world: "World",
      story: "Story",
      characters: "Characters",
      music: "Music",
      gallery: "Gallery",
      project: "Project"
    },
    sections: {
      world: {
        overview: {
          title: "The World",
          text: "A world of stone, mist and whispers."
        },
        geography: {
          title: "Geography",
          text: "Maps and places will appear here."
        }
      },
      story: {
        overview: {
          title: "The Story",
          text: "Keri’s journey begins here."
        }
      },
      characters: {
        keri: {
          title: "Keri",
          text: "Tailor. Survivor. Something more."
        }
      }
    }
  }
};

function renderTopMenu() {
  const menu = document.getElementById("topMenu");
  menu.innerHTML = "";

  for (let key in content[lang].menu) {
    const div = document.createElement("div");
    div.textContent = content[lang].menu[key];
    if (key === currentSection) div.classList.add("active");

    div.onclick = () => {
      currentSection = key;
      currentPage = Object.keys(content[lang].sections[key])[0];
      renderAll();
    };

    menu.appendChild(div);
  }
}

function renderSideMenu() {
  const side = document.getElementById("sideMenu");
  side.innerHTML = "";

  const pages = content[lang].sections[currentSection];

  for (let key in pages) {
    const div = document.createElement("div");
    div.textContent = pages[key].title;

    if (key === currentPage) div.classList.add("active");

    div.onclick = () => {
      currentPage = key;
      renderContent();
      renderSideMenu();
    };

    side.appendChild(div);
  }
}

function renderContent() {
  const main = document.getElementById("content");
  const page = content[lang].sections[currentSection][currentPage];

  main.innerHTML = `
    <h2>${page.title}</h2>
    <p>${page.text}</p>
  `;
}

function renderAll() {
  renderTopMenu();
  renderSideMenu();
  renderContent();
}

function setLang(newLang) {
  lang = newLang;
  renderAll();
}

renderAll();