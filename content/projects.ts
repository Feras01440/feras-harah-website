import type { Project } from "./types";

export const projects = [
  {
    slug: "personal-website",
    title: "This website",
    shortDescription:
      "An evolving personal platform for projects, learning notes, and the interests I choose to share.",
    longDescription:
      "Designed as a long-term home that can grow with new work without needing the layout to be rebuilt each time. The site prioritises accessibility, security, performance, and straightforward content updates.",
    status: "in-progress",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    learnings: [],
    challenges: [],
    featured: true,
    publicationStatus: "published",
    published: true,
    isPlaceholder: false,
  },
  {
    slug: "university-software-engineering-project-template",
    title: "University software engineering project",
    shortDescription:
      "Replace this template with the real project goal, context, and Feras’s contribution.",
    longDescription:
      "Describe the problem, team or module context, engineering approach, outcome, and what Feras personally worked on. Do not publish until every claim is confirmed.",
    status: "completed",
    technologies: [],
    learnings: [],
    challenges: [],
    featured: false,
    replacementNotes: [
      "Add the confirmed project title and status.",
      "Add Feras’s individual contribution rather than implying ownership of all team work.",
      "Add real technologies, screenshots, repository, and demo links only when public.",
    ],
    publicationStatus: "template",
    published: false,
    isPlaceholder: true,
  },
  {
    slug: "stock-management-experiment-template",
    title: "Stock management experiment",
    shortDescription:
      "Replace this template with a real inventory or ecommerce experiment if one exists.",
    longDescription:
      "Explain the real user problem, data model, main workflows, current state, and what Feras learned. Keep this entry unpublished until those details are confirmed.",
    status: "planned",
    technologies: [],
    learnings: [],
    challenges: [],
    featured: false,
    replacementNotes: [
      "Confirm that this project exists before changing its publication state.",
      "Replace the sample status and add only real project links.",
    ],
    publicationStatus: "template",
    published: false,
    isPlaceholder: true,
  },
  {
    slug: "ai-productivity-tool-template",
    title: "AI-assisted productivity tool",
    shortDescription:
      "Replace this template with a real experiment and a precise explanation of where AI is used.",
    longDescription:
      "Document the actual workflow, limitations, privacy considerations, and Feras’s implementation. Avoid broad AI claims or implying capabilities the project does not have.",
    status: "planned",
    technologies: [],
    learnings: [],
    challenges: [],
    featured: false,
    replacementNotes: [
      "Confirm that this project exists before changing its publication state.",
      "Explain the AI provider and data handling only after they are known.",
    ],
    publicationStatus: "template",
    published: false,
    isPlaceholder: true,
  },
  {
    slug: "web-app-experiment-template",
    title: "Web app experiment",
    shortDescription:
      "Use this template for a smaller web project that is ready to discuss honestly.",
    longDescription:
      "Replace this copy with the project’s real purpose, scope, implementation choices, outcome, and next steps before publishing it.",
    status: "planned",
    technologies: [],
    learnings: [],
    challenges: [],
    featured: false,
    replacementNotes: [
      "Choose a specific title rather than publishing the generic template name.",
      "Add only links that resolve to public, intentional destinations.",
    ],
    publicationStatus: "template",
    published: false,
    isPlaceholder: true,
  },
] as const satisfies readonly Project[];

export const publishedProjects = projects.filter((project) => project.published);
export const featuredProjects = publishedProjects.filter((project) => project.featured);
