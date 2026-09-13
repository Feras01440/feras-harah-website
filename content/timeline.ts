import type { TimelineEntry } from "./types";

export const timelineIntro =
  "The route so far — school projects that found real users, two years of team engineering at Queen’s, and what comes next.";

export const timeline = [
  {
    id: "a-levels",
    period: "2022–24",
    title: "Found software at St Patrick’s College, Dungannon",
    description:
      "A levels in Software Systems Development, Digital Technology, Maths, and Arabic. Built a C# revision quiz that GCSE students at my school actually used, then a hotel booking system with C# and SQL — bookings, unique IDs, and a billing engine.",
    kind: "education",
    publicationStatus: "published",
    published: true,
    isPlaceholder: false,
  },
  {
    id: "kainos-2024",
    period: "2024",
    title: "Insight programme at Kainos",
    description:
      "Spent time with Kainos in Belfast learning how a large software company actually runs — how teams are structured, how software gets delivered, and what a career in tech looks like from the inside.",
    kind: "learning",
    publicationStatus: "published",
    published: true,
    isPlaceholder: false,
  },
  {
    id: "degree-start",
    period: "Sept 2024",
    title: "Started BSc Software Engineering with Placement at Queen’s",
    description:
      "Modules across programming, data-driven systems, cyber security, and maths for computing — plus the Robotics Club on the side.",
    kind: "education",
    publicationStatus: "published",
    published: true,
    isPlaceholder: false,
  },
  {
    id: "reignfall-year1",
    period: "2024–25",
    title: "Shipped ReignFall with a six-person team",
    description:
      "A database-driven text-adventure web game: player accounts with hashed passwords, save systems that restore full game state, inventory mechanics, analytics, and accessibility features.",
    kind: "project",
    publicationStatus: "published",
    published: true,
    isPlaceholder: false,
  },
  {
    id: "greenopoly-year2",
    period: "2025–26",
    title: "Built Greenopoly in second year",
    description:
      "A fully functional, database-backed Monopoly variant in C++ that teaches climate change — built with a team of six for our Software Engineering project.",
    kind: "project",
    publicationStatus: "published",
    published: true,
    isPlaceholder: false,
  },
  {
    id: "now-placement-search",
    period: "Now",
    title: "Building Basha Pantry & applying for placements",
    description:
      "Bringing a local grocery business online with a professional Shopify store — and available now for a 2026–27 industrial placement where I can contribute to a real engineering team.",
    kind: "goal",
    publicationStatus: "published",
    published: true,
    isPlaceholder: false,
  },
  {
    id: "next-graduation",
    period: "Next",
    title: "Placement year, final year, graduate in 2028",
    description:
      "A year in industry, then back to Queen’s to finish the degree — shipping and sharing useful work the whole way.",
    kind: "goal",
    publicationStatus: "published",
    published: true,
    isPlaceholder: false,
  },
] as const satisfies readonly TimelineEntry[];

export const publishedTimeline = timeline.filter((entry) => entry.published);
