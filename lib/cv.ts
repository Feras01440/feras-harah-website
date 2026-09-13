import { existsSync } from "node:fs";
import { join } from "node:path";

import { profile } from "@/content/profile";

function existsInPublic(publicPath: string) {
  return existsSync(join(process.cwd(), "public", ...publicPath.split("/")));
}

export function isPublicCvAvailable() {
  return (
    profile.cv.available &&
    existsSync(join(process.cwd(), "public", "cv", profile.cv.fileName))
  );
}

export function isCvPreviewAvailable() {
  return isPublicCvAvailable() && existsInPublic(profile.cv.preview.src);
}
