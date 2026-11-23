// office-jokes-01 — Make the AI Judge Laugh: Office Jokes
// Writes one original one-line joke about office life to /output/entry.txt.
// Node 22, no dependencies, no network, deterministic.

import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "I set my status to 'in a meeting' so I can finally do the work the meeting was about.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
