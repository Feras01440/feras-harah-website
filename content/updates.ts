import type { Update } from "./types";

export const updatesIntro =
  "Short notes on what I’m building, learning, reconsidering, or preparing to explore next.";

export const updates = [
  {
    slug: "september-2026",
    title: "Where things stand this September",
    excerpt:
      "Still applying for a 2026–27 placement — which means I can start straight away.",
    body: [
      "The 2026–27 placement year has started and I’m still applying, so I can start straight away. If your team has a late-start industrial placement or an internship, I’d love to hear from you.",
      "In the meantime I’m sharpening my Java and C++, working through data structures and algorithms, and still building Basha Pantry for WoodHouse Groceries.",
    ],
    category: "personal",
    publishedAt: "2026-09-13",
    publicationStatus: "published",
    published: true,
    isPlaceholder: false,
  },
  {
    slug: "placement-search-2026",
    title: "Placement season, open for business",
    excerpt:
      "I’m applying for 2026–27 industrial placements. Here’s what to look at first.",
    body: [
      "I’m applying for 2026–27 industrial placements as part of my Software Engineering degree at Queen’s. This site exists so companies can see the work itself, not just the CV.",
      "If you’re reading this because a CV or application pointed you here: the projects page is the best two minutes you can spend, and my inbox is open.",
    ],
    category: "site",
    publishedAt: "2026-07-12",
    publicationStatus: "published",
    published: true,
    isPlaceholder: false,
  },
  {
    slug: "cataloguing-a-whole-shop",
    title: "Cataloguing an entire shop, one product at a time",
    excerpt:
      "The hardest part of building an online store isn’t the store — it’s the data.",
    body: [
      "Basha Pantry — the Shopify store I’m building for WoodHouse Groceries — has taught me a lesson no tutorial mentions: the storefront is the easy bit. The real work is turning hundreds of physical products into clean data: consistent names, sensible categories, decent photos, accurate details.",
      "It’s slow, unglamorous, and exactly the kind of work that makes the difference between a store that looks like a hobby and one that looks like a business.",
    ],
    category: "project",
    publishedAt: "2026-07-12",
    publicationStatus: "published",
    published: true,
    isPlaceholder: false,
  },
  {
    slug: "building-this-space",
    title: "Building this space",
    excerpt:
      "This website is becoming a long-term home for my work, ideas, and learning.",
    body: [
      "This website is being shaped into a long-term home for projects, learning notes, and the parts of my work and interests that are worth sharing.",
      "I’ll add more when it is ready rather than filling the space with invented detail.",
    ],
    category: "site",
    publishedAt: "2026-07-11",
    publicationStatus: "published",
    published: true,
    isPlaceholder: false,
  },
] as const satisfies readonly Update[];

export const publishedUpdates = updates
  .filter((update) => update.published)
  .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
