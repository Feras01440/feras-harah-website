import type { Project } from "./types";

export const projects = [
  {
    slug: "basha-pantry",
    title: "Basha Pantry — online store for a local shop",
    shortDescription:
      "A Shopify storefront for WoodHouse Groceries, bringing their range of American, Asian, and African products online.",
    longDescription:
      "WoodHouse Groceries is a real local business with hundreds of products — American imports, sweets, Asian and African foods — and no online presence. I’m building Basha Pantry, their Shopify store, from the ground up: product data, photography, categories, and storefront. The unglamorous truth of e-commerce is that the hard part isn’t the website — it’s turning a shop full of stock into a clean, consistent, professional catalogue people can actually browse.",
    status: "in-progress",
    technologies: ["Shopify", "E-commerce", "Product data"],
    learnings: [
      "Working directly with a business owner: agreeing scope, priorities, and what “done” means",
      "Product data is a real engineering problem — naming, categorising, and photographing hundreds of items consistently",
    ],
    challenges: [
      "Building a catalogue that looks professional when the source material is a physical shop floor",
    ],
    featured: true,
    publicationStatus: "published",
    published: true,
    isPlaceholder: false,
  },
  {
    slug: "reignfall",
    title: "ReignFall — a text-adventure reborn as a web game",
    shortDescription:
      "A database-driven text-adventure web game built by a six-person team: accounts, saves, inventory, and analytics.",
    longDescription:
      "A first-year university project (CSC1034) that grew into a full product. ReignFall reimagines the classic text adventure for modern devices: a peasant rises against a tyrannical king, gathering allies along the way. Under the story sits real engineering — player accounts with salted and SHA-256-hashed passwords tested against sqlmap, session tokens that expire, autosave and manual saves that rebuild full game state on load, a four-slot inventory with stat effects, score and reputation systems, a global analytics page with leaderboards, and six accessibility features. The story itself is driven by JSON files, which kept the branching narrative clean.",
    status: "completed",
    technologies: ["JavaScript", "HTML & CSS", "SQL", "JSON"],
    learnings: [
      "How much of a “simple” game is actually database design",
      "Security is a feature: hashing, session expiry, and injection testing were built in, not bolted on",
      "Keeping six people productive in one codebase takes real coordination",
    ],
    challenges: [
      "Restoring a complete game state — session, allies, inventory, and logs — from a saved game without breaking anything",
    ],
    featured: false,
    publicationStatus: "published",
    published: true,
    isPlaceholder: false,
  },
  {
    slug: "greenopoly",
    title: "Greenopoly — Monopoly, but it teaches climate change",
    shortDescription:
      "A fully functional Monopoly-style game in C++ with a complete database, built by a six-person team to make climate education fun.",
    longDescription:
      "Our second-year Software Engineering group project: a playable, database-backed Monopoly variant written in C++ where the mechanics carry a message about climate change. Building a rules-heavy board game with six people is an exercise in interfaces — between game systems, between the game and its database, and between teammates who all need to ship their part without breaking everyone else’s.",
    status: "completed",
    technologies: ["C++", "SQL"],
    learnings: [
      "Designing game rules as clean, testable systems rather than one giant loop",
      "Agreeing interfaces early so six people can build in parallel",
    ],
    challenges: [
      "Keeping a rules-heavy game fun while it carries an educational message",
    ],
    featured: false,
    publicationStatus: "published",
    published: true,
    isPlaceholder: false,
  },
  {
    slug: "personal-website",
    title: "This website",
    shortDescription:
      "My hand-built home on the web: projects, learning notes, and a clear signal of what I’m looking for.",
    longDescription:
      "Built with Next.js, TypeScript, and Tailwind rather than a site builder, because owning the details matters to me: it ships no trackers or cookies, sends every page as static HTML, respects reduced-motion settings, and keeps all content in typed files that refuse to compile if I try to publish something unfinished. It’s also honest by design — everything on here is something I can back up in an interview.",
    status: "completed",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Motion"],
    learnings: [
      "Shipping something public forces decisions that tutorials never cover — accessibility, security headers, honest copy",
    ],
    challenges: [
      "Writing about yourself is harder than writing code",
    ],
    githubUrl: "https://github.com/Feras01440/feras-harah-website",
    featured: false,
    publicationStatus: "published",
    published: true,
    isPlaceholder: false,
  },
] as const satisfies readonly Project[];

export const publishedProjects = projects.filter((project) => project.published);
export const featuredProjects = publishedProjects.filter((project) => project.featured);
