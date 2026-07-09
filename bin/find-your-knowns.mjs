#!/usr/bin/env node

import { cpSync, mkdirSync } from "node:fs";
import { homedir } from "node:os";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const packageRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const skillSource = join(packageRoot, "skills", "find-your-knowns");
const cursorRuleSource = join(packageRoot, ".cursor", "rules", "find-your-knowns.mdc");

function usage() {
  console.log(`find-your-knowns

Usage:
  find-your-knowns install [target-dir]
  find-your-knowns cursor [project-dir]
  find-your-knowns path

Commands:
  install  Copy the skill folder into an agent skills directory.
           Defaults to ~/.codex/skills when target-dir is omitted.
  cursor   Copy the Cursor rule and skill folder into a project.
           Defaults to the current directory when project-dir is omitted.
  path     Print the packaged SKILL.md path.
`);
}

function installSkill(targetDir = join(homedir(), ".codex", "skills")) {
  const resolvedTarget = resolve(targetDir);
  mkdirSync(resolvedTarget, { recursive: true });
  cpSync(skillSource, join(resolvedTarget, "find-your-knowns"), {
    recursive: true,
    force: true
  });
  console.log(`Installed find-your-knowns to ${join(resolvedTarget, "find-your-knowns")}`);
}

function installCursor(projectDir = process.cwd()) {
  const root = resolve(projectDir);
  const rulesDir = join(root, ".cursor", "rules");
  const skillsDir = join(root, "skills");
  mkdirSync(rulesDir, { recursive: true });
  mkdirSync(skillsDir, { recursive: true });
  cpSync(cursorRuleSource, join(rulesDir, "find-your-knowns.mdc"), {
    force: true
  });
  cpSync(skillSource, join(skillsDir, "find-your-knowns"), {
    recursive: true,
    force: true
  });
  console.log(`Installed Cursor rule to ${join(rulesDir, "find-your-knowns.mdc")}`);
  console.log(`Installed skill folder to ${join(skillsDir, "find-your-knowns")}`);
}

const [command, target] = process.argv.slice(2);

if (!command || command === "--help" || command === "-h") {
  usage();
} else if (command === "install") {
  installSkill(target);
} else if (command === "cursor") {
  installCursor(target);
} else if (command === "path") {
  console.log(join(skillSource, "SKILL.md"));
} else {
  console.error(`Unknown command: ${command}`);
  usage();
  process.exit(1);
}
