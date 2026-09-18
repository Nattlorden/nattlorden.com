const { execFileSync } = require("child_process");
const fs = require("fs");
const path = require("path");

const PROJECT_ID = "6CrgFGXGm2QmxpVM";

const outputPath = path.join(
  __dirname,
  "..",
  "data",
  "events.json"
);


// ------------------------------------------------------------
// Todoist CLI
// ------------------------------------------------------------

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
  }
  else {
    output = execFileSync(
      "td",
      args,
      {
        encoding: "utf8"
      }
    );
  }

  const data = JSON.parse(output);

  if (data && Array.isArray(data.results)) {
    return data.results;
  }

  if (Array.isArray(data)) {
    return data;
  }

  throw new Error(
    `Unexpected Todoist JSON response: ${JSON.stringify(data).slice(0, 300)}`
  );
}


// ------------------------------------------------------------
// Description
// ------------------------------------------------------------

function parseDescription(description) {
  const result = {
    private: false,
    needsTickets: false,
    notes: ""
  };

  if (!description || !description.trim()) {
    return result;
  }

  const notes = [];

  const lines = description
    .split(/\r?\n/)
    .map(line => line.trim())
    .filter(Boolean);

  for (const line of lines) {
    const normalized = line
      .normalize("NFC")
      .toLocaleLowerCase("sv-SE");

    if (normalized === "private") {
      result.private = true;
      continue;
    }
    
    if (
      normalized === "köpa biljetter" ||
      normalized === "kopa biljetter"
    ) {
      result.needsTickets = true;
      continue;
    }

    notes.push(line);
  }

  result.notes = notes.join("\n");

  return result;
}


// ------------------------------------------------------------
// Build
// ------------------------------------------------------------

function buildEvents() {
  console.log("Reading Todoist events...");

  const tasks = runTodoist([
    "task",
    "list",
    "--project",
    `id:${PROJECT_ID}`,
    "--json",
    "--full",
    "--all"
  ]);

  const events = [];

  for (const task of tasks) {

    // Ett event utan datum �r inte anv�ndbart
    // i den kronologiska eventlistan.
    if (!task.due?.date) {
      console.warn(
        `Ignoring event without date: "${task.content}"`
      );
      continue;
    }

    const parsed = parseDescription(
      task.description
    );

    events.push({
      id: task.id,

      name: task.content,

      date: task.due.date,

      recurring:
        task.due.isRecurring === true,

      private:
        parsed.private,

      needsTickets:
        parsed.needsTickets,

      notes:
        parsed.notes
    });
  }


  // ----------------------------------------------------------
  // Sortera kronologiskt
  // ISO-datumen g�r att vanlig str�ngj�mf�relse fungerar.
  // ----------------------------------------------------------

  events.sort((a, b) =>
    a.date.localeCompare(b.date)
  );


  // ----------------------------------------------------------
  // Output
  // ----------------------------------------------------------

  const output = {
    projectId: PROJECT_ID,
    events
  };

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

  console.log(
    `Generated ${outputPath}`
  );

  console.log(
    `${events.length} events.`
  );
}


// ------------------------------------------------------------
// Main
// ------------------------------------------------------------

try {
  buildEvents();
}
catch (error) {
  console.error(
    "Failed to build events."
  );

  console.error(
    error.message
  );

  process.exit(1);
}