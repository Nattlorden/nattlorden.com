const { execFileSync } = require("child_process");
const fs = require("fs");
const path = require("path");

const PROJECT_ID = "6CrgFGXGvrjmrGgC";

const SECTION_MAP = {
  "63g94hgrJXMRFM3C": {
    region: "Skåne",
    visited: false
  },
  "63g9cg6MrVgQV8GC": {
    region: "Skåne",
    visited: true
  },
  "63g9F8358F43W2wj": {
    region: "Danmark",
    visited: false
  }
};


// ------------------------------------------------------------
// Todoist
// ------------------------------------------------------------

/*function runTodoist(args) {
  const output = execFileSync(
    "td",
    args,
    {
      encoding: "utf8",
      windowsHide: true
    }
  );

  return JSON.parse(output);
}*/
function runTodoist(args) {
  let output;

  if (process.platform === "win32") {
    const tdPath = path.join(process.env.APPDATA, "npm", "td.cmd");

    const command = [
      tdPath,
      ...args
    ].join(" ");

    output = execFileSync(
      process.env.ComSpec || "C:\\Windows\\System32\\cmd.exe",
      ["/d", "/c", command],
      {
        encoding: "utf8",
        windowsHide: true
      }
    );
  } else {
    output = execFileSync(
      "td",
      args,
      {
        encoding: "utf8"
      }
    );
  }

  return JSON.parse(output);
}


// ------------------------------------------------------------
// Description parsing
// ------------------------------------------------------------

function parseDescription(description) {
  if (!description || !description.trim()) {
    return {
      notes: "",
      links: []
    };
  }

  let remaining = description.trim();
  const links = [];

  // Markdown links: [Title](https://example.com)
  remaining = remaining.replace(
    /\[([^\]]+)\]\((https?:\/\/[^)]+)\)/g,
    (match, title, url) => {
      links.push({
        title: title.trim(),
        url: url.trim()
      });

      return "";
    }
  );

  // Bare URLs
  remaining = remaining.replace(
    /https?:\/\/[^\s]+/g,
    (url) => {
      links.push({
        title: null,
        url: url.trim()
      });

      return "";
    }
  );

  // Clean up whitespace left after removing links.
  const notes = remaining
    .split("\n")
    .map(line => line.trim())
    .filter(Boolean)
    .join("\n");

  return {
    notes,
    links
  };
}


// ------------------------------------------------------------
// Build
// ------------------------------------------------------------

function buildPlaces() {
  console.log("Reading Todoist sections...");

  const sectionData = runTodoist([
    "section",
    "list",
    "--project",
    `id:${PROJECT_ID}`,
    "--json",
    "--full",
    "--all"
  ]);

  console.log("Reading Todoist tasks...");

  const taskData = runTodoist([
    "task",
    "list",
    "--project",
    `id:${PROJECT_ID}`,
    "--json",
    "--full",
    "--all"
  ]);

  const sections = sectionData.results || [];
  const tasks = taskData.results || [];

  // Warn if Todoist contains a section we haven't mapped.
  for (const section of sections) {
    if (!SECTION_MAP[section.id]) {
      console.warn(
        `WARNING: Unmapped section: "${section.name}" (${section.id})`
      );
    }
  }

  const groups = [];

  for (const section of sections) {
    const mapping = SECTION_MAP[section.id];

    if (!mapping) {
      continue;
    }

    const places = tasks
      .filter(task => task.sectionId === section.id)
      .map(task => {
        const parsed = parseDescription(task.description);

        return {
          id: task.id,
          name: task.content,
          order: task.childOrder,
          parentId: task.parentId,
          notes: parsed.notes,
          links: parsed.links
        };
      })
      .sort((a, b) => a.order - b.order);

    groups.push({
      sectionId: section.id,
      region: mapping.region,
      visited: mapping.visited,
      order: section.sectionOrder,
      places
    });
  }

  groups.sort((a, b) => a.order - b.order);

  const output = {
    /*generated: new Date().toISOString(),*/
    projectId: PROJECT_ID,
    groups
  };

const outputPath = path.join(
  __dirname,
  "..",
  "data",
  "places.json"
);

  fs.mkdirSync(path.dirname(outputPath), {
    recursive: true
  });

  fs.writeFileSync(
    outputPath,
    JSON.stringify(output, null, 2),
    "utf8"
  );

  console.log(`Generated ${outputPath}`);

  const count = groups.reduce(
    (sum, group) => sum + group.places.length,
    0
  );

  console.log(
    `${count} places in ${groups.length} groups.`
  );
}


try {
  buildPlaces();
}
catch (error) {
  console.error("Failed to build places.");

  if (error.stdout) {
    console.error(error.stdout.toString());
  }

  if (error.stderr) {
    console.error(error.stderr.toString());
  }

  console.error(error.message);

  process.exit(1);
}