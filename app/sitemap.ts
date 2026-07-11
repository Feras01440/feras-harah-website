import type { MetadataRoute } from "next";

import { profile } from "@/content/profile";
import { isPublicCvAvailable } from "@/lib/cv";
import { getSiteUrl } from "@/lib/metadata";

const hasPublicContact = profile.contact.methods.some(
  (method) => method.published,
);
const routes = [
  "",
  "/about",
  "/projects",
  "/updates",
  ...(isPublicCvAvailable() ? ["/cv"] : []),
  ...(hasPublicContact ? ["/contact"] : []),
];

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();

  return routes.map((route) => ({
    url: new URL(route || "/", siteUrl).toString(),
    changeFrequency: route === "/updates" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
