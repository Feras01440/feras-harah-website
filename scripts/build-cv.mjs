import { execFileSync } from "node:child_process";
import { existsSync, mkdtempSync, readFileSync, rmSync, statSync } from "node:fs";
import { tmpdir } from "node:os";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const EXPECTED_PAGES = 2;
const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const source = join(root, "cv-source", "Feras-Harah-CV.html");
const pdfPath = join(root, "public", "cv", "Feras-Harah-CV.pdf");
const previewPath = join(root, "public", "cv", "Feras-Harah-CV-preview.png");

const browser = [
  process.env.CHROME_PATH,
  "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe",
  "C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe",
  "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  "/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge",
  "/usr/bin/google-chrome",
  "/usr/bin/chromium",
  "/usr/bin/chromium-browser",
].find((candidate) => candidate && existsSync(candidate));

if (!browser) {
  console.error("No Chrome or Edge installation found. Set CHROME_PATH and try again.");
  process.exit(1);
}

// A throwaway profile stops the browser handing the job to an already-open window and exiting early.
const profileDir = mkdtempSync(join(tmpdir(), "cv-build-"));
const run = (args) =>
  execFileSync(
    browser,
    [
      "--headless=new",
      "--disable-gpu",
      "--no-first-run",
      "--hide-scrollbars",
      `--user-data-dir=${profileDir}`,
      ...args,
      pathToFileURL(source).href,
    ],
    { stdio: "ignore", timeout: 60_000 },
  );

try {
  rmSync(pdfPath, { force: true });
  rmSync(previewPath, { force: true });
  run(["--no-pdf-header-footer", `--print-to-pdf=${pdfPath}`]);
  run(["--window-size=794,1123", `--screenshot=${previewPath}`]);
} finally {
  rmSync(profileDir, { recursive: true, force: true });
}

if (!existsSync(pdfPath) || !existsSync(previewPath)) {
  console.error("The browser did not produce the PDF and preview image.");
  process.exit(1);
}

const pdf = readFileSync(pdfPath).toString("latin1");
const pages = pdf.match(/\/Type\s*\/Page(?![s\w])/g)?.length ?? 0;
const links = pdf.match(/\/URI\s*\(/g)?.length ?? 0;

console.log(`PDF: ${pdfPath} (${statSync(pdfPath).size} bytes, ${pages} pages, ${links} links)`);
console.log(`Preview: ${previewPath} (${statSync(previewPath).size} bytes)`);

if (pages !== EXPECTED_PAGES) {
  console.error(`Expected ${EXPECTED_PAGES} pages but got ${pages}. Tighten the content in cv-source and rebuild.`);
  process.exit(1);
}

if (links === 0) {
  console.error("The PDF has no clickable links; check the <a> elements in cv-source.");
  process.exit(1);
}
