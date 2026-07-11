import type { Metadata } from "next";

import { profile } from "@/content/profile";

export function getSiteUrl() {
  const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL;
  const isHostedBuild = Boolean(process.env.VERCEL || process.env.NETLIFY);

  if (!configuredUrl) {
    if (isHostedBuild) {
      throw new Error(
        "NEXT_PUBLIC_SITE_URL is required for hosted builds so canonical URLs never point to localhost.",
      );
    }
    return new URL("http://localhost:3000");
  }

  try {
    const url = new URL(configuredUrl);
    const isLocal = url.hostname === "localhost" || url.hostname === "127.0.0.1";

    if (
      (!isLocal && url.protocol !== "https:") ||
      (isLocal && url.protocol !== "http:") ||
      url.username ||
      url.password ||
      url.pathname !== "/" ||
      url.search ||
      url.hash
    ) {
      throw new Error("The site URL must be a clean HTTPS origin.");
    }

    return new URL(url.origin);
  } catch {
    throw new Error(
      "NEXT_PUBLIC_SITE_URL must be a valid HTTPS origin, for example https://feras.example.",
    );
  }
}

export function createMetadata({
  title,
  description,
  path = "/",
}: {
  title: string;
  description: string;
  path?: string;
}): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: `${title} | ${profile.name}`,
      description,
      url: path,
      siteName: profile.name,
      locale: "en_GB",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${profile.name}`,
      description,
    },
  };
}
