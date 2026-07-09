#!/usr/bin/env node

import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative } from "node:path";

const root = process.cwd();
const forbidden = [/finding-your-unknowns/i];
const ignoredDirs = new Set([".git", "node_modules"]);
const checkedExtensions = new Set([".md", ".mdc", ".json"]);

function walk(dir) {
  const entries = readdirSync(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    if (ignoredDirs.has(entry.name)) continue;
    const path = join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...walk(path));
      continue;
    }
    if (!entry.isFile()) continue;
    const extension = entry.name.includes(".")
      ? entry.name.slice(entry.name.lastIndexOf("."))
      : "";
    if (checkedExtensions.has(extension)) files.push(path);
  }
  return files;
}

const failures = [];
for (const path of walk(root)) {
  if (!statSync(path).isFile()) continue;
  const relativePath = relative(root, path);
  const content = readFileSync(path, "utf8");
  for (const pattern of forbidden) {
    if (pattern.test(relativePath)) {
      failures.push(`${relativePath} has stale slug in path ${pattern}`);
    }
    if (pattern.test(content)) {
      failures.push(`${relativePath} contains stale slug ${pattern}`);
    }
  }
}

if (failures.length) {
  console.error("Stale slug check failed:");
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log("No stale package slugs found.");
