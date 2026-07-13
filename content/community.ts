import type { CommunityItem } from "./types";

export const communityIntro =
  "Useful skills should leave the building. These are the places my work has helped someone other than me.";

export const communityEmptyState =
  "This section will grow with practical support, useful resources, and community work that can be shared with the right context.";

export const communityItems = [
  {
    id: "woodhouse-groceries-store",
    title: "Bringing a local grocery shop online",
    summary:
      "WoodHouse Groceries had a shop full of international products and no way to sell them online. I’m fixing that.",
    details:
      "I’m building Basha Pantry, their Shopify store, end to end — product catalogue, categories, photos, and storefront. For a small business, a professional online presence isn’t a luxury; it’s the difference between being found and being invisible.",
    kind: "small-business",
    publicationStatus: "published",
    published: true,
    isPlaceholder: false,
  },
  {
    id: "gcse-revision-quiz",
    title: "A revision tool my school actually used",
    summary:
      "At A level I built a C# geography quiz for GCSE students revising for their exams.",
    details:
      "It wasn’t fancy, but it was real: students at St Patrick’s College used it to prepare for their geography GCSE. It was the first time something I built had users — and the moment I understood that software is for people, not for portfolios.",
    kind: "helping-people",
    publicationStatus: "published",
    published: true,
    isPlaceholder: false,
  },
] as const satisfies readonly CommunityItem[];

export const publishedCommunityItems = communityItems.filter(
  (item) => item.published,
);
