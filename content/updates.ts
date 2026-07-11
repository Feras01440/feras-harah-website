import type { Update } from "./types";

export const updatesIntro =
  "Short notes on what I’m building, learning, reconsidering, or preparing to explore next.";

export const updates = [
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
    dateLabel: "Current",
    publicationStatus: "published",
    published: true,
    isPlaceholder: false,
  },
  {
    slug: "learning-log-template",
    title: "Add a learning note",
    excerpt:
      "Summarise one real topic, why it mattered, and what changed in Feras’s understanding.",
    body: [
      "Replace this paragraph with a short, personal reflection written from genuine experience.",
    ],
    category: "learning",
    dateLabel: "Add date",
    replacementNote:
      "Use a real date and avoid presenting general reference material as a personal experience.",
    publicationStatus: "template",
    published: false,
    isPlaceholder: true,
  },
  {
    slug: "project-update-template",
    title: "Add a project update",
    excerpt:
      "Explain what changed in a real project and the next useful step.",
    body: [
      "Replace this copy with a factual update, including limitations or unfinished work where relevant.",
    ],
    category: "project",
    dateLabel: "Add date",
    replacementNote: "Link to the project only when a valid public destination exists.",
    publicationStatus: "template",
    published: false,
    isPlaceholder: true,
  },
  {
    slug: "community-note-template",
    title: "Add a community note",
    excerpt:
      "Share a confirmed contribution without exposing someone else’s private information.",
    body: [
      "Replace this copy with an appropriately scoped reflection and obtain permission before naming people or organisations.",
    ],
    category: "community",
    dateLabel: "Add date",
    replacementNote:
      "Keep identifying details private unless they are intentionally public and approved.",
    publicationStatus: "template",
    published: false,
    isPlaceholder: true,
  },
] as const satisfies readonly Update[];

export const publishedUpdates = updates.filter((update) => update.published);
