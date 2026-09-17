const { execFileSync } = require("child_process");
const fs = require("fs");
const path = require("path");


// ============================================================
// Configuration
// ============================================================

const PROJECT_ID = "6CrgFGXGvrjmrGgC";

const SECTION_MAP = {
  "63g94hgrJXMRFM3C": {
    region: "Sk�ne",
    visited: false
  },

  "63g9cg6MrVgQV8GC": {
    region: "Sk�ne",
    visited: true
  },

  "63g9F8358F43W2wj": {
    region: "Danmark",
    visited: false
  }
};


// ============================================================
// Run Todoist CLI
// ============================================================

function runTodoist(args) {
  let output;

  if (process.platform === "win32") {
    const tdPath = path.join(
      process.env.APPDATA,
      "npm",
      "td.cmd"
    );

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

  const data = JSON.parse(output);

// Todoist CLI returns paginated JSON as:
// { results: [...], nextCursor: ... }
//
// Normalize it here so the rest of the builder
// always works with a plain array.
if (data && Array.isArray(data.results)) {
  return data.results;
}

// Defensive fallback if a future CLI version
// returns the array directly.
if (Array.isArray(data)) {
  return data;
}

throw new Error(
  `Unexpected Todoist JSON response: ${JSON.stringify(data).slice(0, 300)}`
);
}


// ============================================================
// Parse Todoist description
//
// Supported:
//   plain notes
//   https://example.com
//   [Title](https://example.com)
//
// Links are extracted and remaining text becomes notes.
// ============================================================

function parseDescription(description) {
  if (!description || !description.trim()) {
    return {
      notes: "",
      links: []
    };
  }

  let remaining = description.trim();
  const links = [];

  // Markdown links
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


// ============================================================
// Main build
// ============================================================

function buildPlaces() {

  // ----------------------------------------------------------
  // Read Todoist
  // ----------------------------------------------------------

  console.log("Reading Todoist sections...");

  const sections = runTodoist([
    "section",
    "list",
    "--project",
    `id:${PROJECT_ID}`,
    "--json",
    "--full",
    "--all"
  ]);


  console.log("Reading Todoist tasks...");

  const tasks = runTodoist([
    "task",
    "list",
    "--project",
    `id:${PROJECT_ID}`,
    "--json",
    "--full",
    "--all"
  ]);

  console.log(sections.map(section => section.name));

  // ----------------------------------------------------------
  // Build section lookup
  // ----------------------------------------------------------

  const sectionInfo = new Map();

  for (const section of sections) {
    const mapping = SECTION_MAP[section.id];

    if (!mapping) {
      console.warn(
        `Warning: unmapped Todoist section "${section.name}" (${section.id})`
      );

      continue;
    }

    sectionInfo.set(section.id, {
      region: mapping.region,
      visited: mapping.visited,
      order: section.sectionOrder
    });
  }


  // ----------------------------------------------------------
  // Build task lookup
  // ----------------------------------------------------------

  const taskById = new Map(
    tasks.map(task => [task.id, task])
  );


  // Tasks which act as parents/grouping nodes
  const parentIds = new Set(
    tasks
      .filter(task => task.parentId)
      .map(task => task.parentId)
  );


  // ----------------------------------------------------------
  // Website model
  //
  // Region
  //   Place/group
  //     Items
  //
  // Example:
  //
  // Sk�ne
  //   Kivik
  //     Ulriksdal          remaining
  //     Kivik Art Center  visited
  //     Kungagraven       visited
  //
  // Parent Todoist tasks are grouping nodes and are therefore
  // not themselves rendered as destinations when they have
  // children.
  // ----------------------------------------------------------

  const regionMap = new Map();


  function getRegion(name, order) {
    if (!regionMap.has(name)) {
      regionMap.set(name, {
        name,
        order,
        places: new Map()
      });
    } else {
      const region = regionMap.get(name);

      // A region may occur in several Todoist sections.
      // Keep the earliest section ordering.
      if (order < region.order) {
        region.order = order;
      }
    }

    return regionMap.get(name);
  }


  function getPlace(region, name, order) {
    if (!region.places.has(name)) {
      region.places.set(name, {
        name,
        order,
        items: []
      });
    } else {
      const place = region.places.get(name);

      // The same geographical group may occur in both
      // visited and remaining sections.
      if (order < place.order) {
        place.order = order;
      }
    }

    return region.places.get(name);
  }


  // ----------------------------------------------------------
  // Transform Todoist tasks
  // ----------------------------------------------------------

  for (const task of tasks) {
    const section = sectionInfo.get(task.sectionId);

    if (!section) {
      continue;
    }


    // Determine geographical/grouping name.
    //
    // Child:
    //   use parent's name as the website place/group.
    //
    // Root:
    //   use its own name.
    //
    // This allows e.g. separate Todoist parents named "Kivik"
    // in visited and remaining sections to merge into one
    // website group named "Kivik".

    let placeName;
    let placeOrder;

    if (task.parentId) {
      const parent = taskById.get(task.parentId);

      if (parent) {
        placeName = parent.content;
        placeOrder = parent.childOrder;
      } else {
        // Defensive fallback in case Todoist ever returns
        // a child without its parent.
        placeName = task.content;
        placeOrder = task.childOrder;

        console.warn(
          `Warning: parent ${task.parentId} not found for "${task.content}"`
        );
      }
    } else {
      placeName = task.content;
      placeOrder = task.childOrder;
    }


    const region = getRegion(
      section.region,
      section.order
    );

    const place = getPlace(
      region,
      placeName,
      placeOrder
    );


    // A root task which has children acts only as a grouping
    // node. It should not also become a destination item.
    //
    // Example:
    //
    // Kivik
    //   Ulriksdal
    //
    // becomes:
    //
    // Kivik
    //   ? Ulriksdal
    //
    // rather than:
    //
    // Kivik
    //   ? Kivik
    //   ? Ulriksdal

    const hasChildren = parentIds.has(task.id);

    if (!task.parentId && hasChildren) {
      continue;
    }


    const parsed = parseDescription(task.description);


    place.items.push({
      id: task.id,
      name: task.content,
      order: task.childOrder,
      visited: section.visited,
      notes: parsed.notes,
      links: parsed.links
    });
  }


  // ----------------------------------------------------------
  // Convert Maps to arrays and sort
  // ----------------------------------------------------------

  const regions = Array.from(regionMap.values())
    .sort((a, b) => a.order - b.order)
    .map(region => ({
      name: region.name,

      places: Array.from(region.places.values())

  // Defensive: don't output empty grouping nodes.
  .filter(place => place.items.length > 0)

  // Stable alphabetical ordering for the website.
  .sort((a, b) =>
    a.name.localeCompare(b.name, "sv")
  )

  .map(place => ({
    name: place.name,

    items: place.items.sort((a, b) => {

      // Remaining destinations first.
      if (a.visited !== b.visited) {
        return a.visited ? 1 : -1;
      }

      // Then preserve Todoist sibling ordering.
      return a.order - b.order;
    })
  }))
    }));


  // ----------------------------------------------------------
  // Output
  // ----------------------------------------------------------

  const output = {
    projectId: PROJECT_ID,
    regions
  };


  const outputPath = path.join(
    __dirname,
    "..",
    "data",
    "places.json"
  );


  fs.mkdirSync(
    path.dirname(outputPath),
    {
      recursive: true
    }
  );


  fs.writeFileSync(
    outputPath,
    JSON.stringify(output, null, 2) + "\n",
    "utf8"
  );


  // Count actual destinations, excluding grouping parents.
  const placeCount = regions.reduce(
    (total, region) =>
      total +
      region.places.reduce(
        (regionTotal, place) =>
          regionTotal + place.items.length,
        0
      ),
    0
  );


  const groupCount = regions.reduce(
    (total, region) =>
      total + region.places.length,
    0
  );


  console.log(`Generated ${outputPath}`);
  console.log(
    `${placeCount} destinations in ${groupCount} places across ${regions.length} regions.`
  );
}


// ============================================================
// Run
// ============================================================

try {
  buildPlaces();
} catch (error) {
  console.error("Failed to build places.");

  if (error.stderr) {
    console.error(error.stderr.toString());
  }

  console.error(error.message);

  process.exit(1);
}