import { existsSync } from "node:fs";
import { join } from "node:path";

import { profile } from "@/content/profile";

export function isPublicCvAvailable() {
  return (
    profile.cv.available &&
    existsSync(join(process.cwd(), "public", "cv", profile.cv.fileName))
  );
}
