import { readFileSync } from "node:fs";

const MAX_AGE_DAYS = 90;
const DAY_MS = 86_400_000;

const source = readFileSync(new URL("../content/updates.ts", import.meta.url), "utf8");
const dates = [...source.matchAll(/publishedAt:\s*"(\d{4}-\d{2}-\d{2})"/g)]
  .map((match) => match[1])
  .sort();
const newest = dates.at(-1);

if (!newest) {
  console.error("No publishedAt dates found in content/updates.ts.");
  process.exit(1);
}

const ageDays = Math.floor((Date.now() - Date.parse(`${newest}T00:00:00Z`)) / DAY_MS);

if (ageDays > MAX_AGE_DAYS) {
  console.error(
    `The newest update is from ${newest} (${ageDays} days ago). ` +
      "Add a short dated note to content/updates.ts and check the availability status in content/profile.ts.",
  );
  process.exit(1);
}

console.log(`Newest update: ${newest} (${ageDays} days ago) — within the ${MAX_AGE_DAYS}-day limit.`);
