const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const SOURCE_DIR = path.join(ROOT, "Nattis");
const OUTPUT_DIR = path.join(ROOT, "data");
const OUTPUT_FILE = path.join(OUTPUT_DIR, "biography.json");

// Hämta alla .md-filer direkt i /Nattis
const files = fs
    .readdirSync(SOURCE_DIR)
    .filter(file => file.toLowerCase().endsWith(".md"))
    .sort((a, b) => a.localeCompare(b, "sv"));

const notes = files.map(file => {
    const fullPath = path.join(SOURCE_DIR, file);
    const markdown = fs.readFileSync(fullPath, "utf8");

    // Filnamnet utan .md blir anteckningens titel
    const title = path.basename(file, path.extname(file));

    // Hitta Obsidian-länkar:
    // [[Mål]]
    // [[Mål|Visningstext]]
    const links = [];

    const wikiLinkRegex = /!\[\[[^\]]+\]\]|\[\[([^\]|#]+)(?:#[^\]|]+)?(?:\|([^\]]+))?\]\]/g;

    let match;

    while ((match = wikiLinkRegex.exec(markdown)) !== null) {
        // Ignorera embeds som ![[bild]]
        if (!match[1]) continue;

        const target = match[1].trim();
        const alias = match[2]?.trim() || null;

        links.push({
            target,
            alias
        });
    }

    return {
        title,
        file,
        markdown,
        links
    };
});

// Skapa /data om katalogen inte redan finns
fs.mkdirSync(OUTPUT_DIR, { recursive: true });

// Skriv JSON
fs.writeFileSync(
    OUTPUT_FILE,
    JSON.stringify(
        {
            generated: new Date().toISOString(),
            notes
        },
        null,
        2
    ),
    "utf8"
);

console.log(
    `Generated ${path.relative(ROOT, OUTPUT_FILE)} from ${notes.length} Obsidian notes.`
);