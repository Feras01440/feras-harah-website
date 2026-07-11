import type { TimelineEntry } from "./types";

export const timelineIntro =
  "A simple record of the foundations, current chapter, and direction of Feras’s software engineering journey.";

export const timeline = [
  {
    id: "degree-foundation",
    period: "Foundation",
    title: "Started a Software Engineering degree",
    description:
      "Began studying Software Engineering at Queen’s University Belfast and building a foundation across the technical and collaborative parts of development.",
    kind: "education",
    publicationStatus: "published",
    published: true,
    isPlaceholder: false,
  },
  {
    id: "current-chapter",
    period: "Now",
    title: "Third-year study and practical experimentation",
    description:
      "Developing practical skills through university work, personal projects, and experiments while becoming more deliberate about how software is designed, built, and explained.",
    kind: "learning",
    publicationStatus: "published",
    published: true,
    isPlaceholder: false,
  },
  {
    id: "next-chapter",
    period: "Next",
    title: "Keep learning and ship useful work",
    description:
      "Continue strengthening software engineering ability, share projects when they are ready, and document useful lessons along the way.",
    kind: "goal",
    publicationStatus: "published",
    published: true,
    isPlaceholder: false,
  },
  {
    id: "degree-start-date-template",
    period: "Add year",
    title: "Confirm the degree start date",
    description:
      "Replace this template with the exact start month or year if Feras wants dates shown in the timeline.",
    kind: "education",
    replacementNote: "Do not infer the start year from the current year of study.",
    publicationStatus: "template",
    published: false,
    isPlaceholder: true,
  },
  {
    id: "project-milestone-template",
    period: "Add date",
    title: "Add a confirmed project milestone",
    description:
      "Describe a real university or personal project milestone, Feras’s contribution, and why it mattered.",
    kind: "project",
    replacementNote: "Add a date only after it has been confirmed.",
    publicationStatus: "template",
    published: false,
    isPlaceholder: true,
  },
] as const satisfies readonly TimelineEntry[];

export const publishedTimeline = timeline.filter((entry) => entry.published);
