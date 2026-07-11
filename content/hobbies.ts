import type { Hobby } from "./types";

export const hobbiesIntro =
  "Software is only one part of this space. Over time, I’ll also use it to share creative interests, useful experiments, and things I enjoy learning.";

export const hobbiesEmptyState =
  "I’ll use this space for creative interests, media, and personal experiments when there is something worth sharing.";

export const hobbies = [
  {
    id: "creative-interest-template",
    title: "Add a creative interest",
    description:
      "Describe a real creative interest and what Feras enjoys about it in one or two natural sentences.",
    category: "creative",
    replacementNote:
      "Replace this template only with something Feras has confirmed he wants to share.",
    publicationStatus: "template",
    published: false,
    isPlaceholder: true,
  },
  {
    id: "editing-media-template",
    title: "Add an editing or media interest",
    description:
      "Explain the real format, tools, or type of media work without implying professional experience unless confirmed.",
    category: "media",
    replacementNote:
      "Add a public example only when Feras owns it or has permission to share it.",
    publicationStatus: "template",
    published: false,
    isPlaceholder: true,
  },
  {
    id: "technology-experiment-template",
    title: "Add a technology experiment",
    description:
      "Share a small experiment, what sparked it, and what Feras discovered.",
    category: "technology",
    replacementNote: "Keep this distinct from a full portfolio project where appropriate.",
    publicationStatus: "template",
    published: false,
    isPlaceholder: true,
  },
  {
    id: "learning-interest-template",
    title: "Add something Feras enjoys learning",
    description:
      "Describe a genuine interest outside or alongside formal software engineering study.",
    category: "learning",
    replacementNote: "Review this entry periodically so it remains current.",
    publicationStatus: "template",
    published: false,
    isPlaceholder: true,
  },
] as const satisfies readonly Hobby[];

export const publishedHobbies = hobbies.filter((hobby) => hobby.published);
