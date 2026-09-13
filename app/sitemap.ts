import type { MetadataRoute } from "next";

import { publishedUpdates } from "@/content/updates";
import { isPublicCvAvailable } from "@/lib/cv";
import { getSiteUrl } from "@/lib/metadata";
import { hasPublicContact } from "@/lib/public-contact";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();
  const latestUpdate = publishedUpdates[0]?.publishedAt;

  // Only pages whose content carries a real date get lastModified; a deploy date would be noise.
  const routes: { path: string; lastModified?: string }[] = [
    { path: "/", lastModified: latestUpdate },
    { path: "/about" },
    { path: "/projects" },
    { path: "/updates", lastModified: latestUpdate },
    ...(isPublicCvAvailable() ? [{ path: "/cv" }] : []),
    ...(hasPublicContact ? [{ path: "/contact" }] : []),
  ];

  return routes.map(({ path, lastModified }) => ({
    url: new URL(path, siteUrl).toString(),
    ...(lastModified ? { lastModified } : {}),
  }));
}
