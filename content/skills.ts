import type { Skill, SkillGroup } from "./types";

export const skillsIntro =
  "Honest labels instead of made-up percentages: comfortable means I can build and discuss it in an interview, learning means I use it and I’m levelling up, exploring means early days.";

export const skillsEmptyState =
  "I’m preparing a focused skills summary that reflects what I can discuss and demonstrate with confidence.";

export const skillGroups = [
  {
    id: "programming",
    title: "Programming",
    description: "Languages I’ve used in coursework and shipped projects.",
    skills: [
      {
        id: "java",
        name: "Java",
        level: "comfortable",
        note: "My main university language across two years of modules.",
        publicationStatus: "published",
        published: true,
        isPlaceholder: false,
      },
      {
        id: "cpp",
        name: "C++",
        level: "comfortable",
        note: "Greenopoly — a database-backed board game built with a team of six.",
        publicationStatus: "published",
        published: true,
        isPlaceholder: false,
      },
      {
        id: "csharp",
        name: "C#",
        level: "learning",
        note: "Two shipped A-level projects: a revision quiz and a hotel booking system.",
        publicationStatus: "published",
        published: true,
        isPlaceholder: false,
      },
      {
        id: "javascript",
        name: "JavaScript / TypeScript",
        level: "learning",
        note: "ReignFall’s game front-end, and this site.",
        publicationStatus: "published",
        published: true,
        isPlaceholder: false,
      },
      {
        id: "python",
        name: "Python",
        level: "learning",
        publicationStatus: "published",
        published: true,
        isPlaceholder: false,
      },
    ],
  },
  {
    id: "web-development",
    title: "Web development",
    description: "Building for the browser, from storefronts to hand-rolled sites.",
    skills: [
      {
        id: "html-css",
        name: "HTML & CSS",
        level: "comfortable",
        note: "Every project ends up here eventually.",
        publicationStatus: "published",
        published: true,
        isPlaceholder: false,
      },
      {
        id: "nextjs",
        name: "Next.js & React",
        level: "learning",
        note: "This site is the live evidence.",
        publicationStatus: "published",
        published: true,
        isPlaceholder: false,
      },
      {
        id: "nodejs",
        name: "Node.js",
        level: "learning",
        publicationStatus: "published",
        published: true,
        isPlaceholder: false,
      },
      {
        id: "shopify",
        name: "Shopify",
        level: "learning",
        note: "Building Basha Pantry, a real store for a real shop.",
        publicationStatus: "published",
        published: true,
        isPlaceholder: false,
      },
    ],
  },
  {
    id: "databases",
    title: "Databases",
    description: "Modelling, querying, and keeping application state sane.",
    skills: [
      {
        id: "sql",
        name: "SQL",
        level: "comfortable",
        note: "Game saves, booking systems, museum catalogue — SQL runs through most of my projects.",
        publicationStatus: "published",
        published: true,
        isPlaceholder: false,
      },
      {
        id: "mysql-postgres",
        name: "MySQL & PostgreSQL",
        level: "learning",
        publicationStatus: "published",
        published: true,
        isPlaceholder: false,
      },
      {
        id: "mongodb",
        name: "MongoDB",
        level: "exploring",
        publicationStatus: "published",
        published: true,
        isPlaceholder: false,
      },
    ],
  },
  {
    id: "tools",
    title: "Tools",
    description: "The everyday kit.",
    skills: [
      {
        id: "git",
        name: "Git & GitHub",
        level: "comfortable",
        note: "Version control on every team and solo project.",
        publicationStatus: "published",
        published: true,
        isPlaceholder: false,
      },
      {
        id: "ides",
        name: "Visual Studio, VS Code & Eclipse",
        level: "comfortable",
        publicationStatus: "published",
        published: true,
        isPlaceholder: false,
      },
      {
        id: "linux",
        name: "Linux",
        level: "learning",
        publicationStatus: "published",
        published: true,
        isPlaceholder: false,
      },
      {
        id: "hardware",
        name: "Arduino & Raspberry Pi",
        level: "exploring",
        note: "Robotics Club tinkering and hardware builds.",
        publicationStatus: "published",
        published: true,
        isPlaceholder: false,
      },
    ],
  },
  {
    id: "software-engineering-concepts",
    title: "Software engineering practice",
    description: "Practices I can back up with project examples.",
    skills: [
      {
        id: "teamwork",
        name: "Team development",
        level: "comfortable",
        note: "Two year-long projects in six-person teams, from planning to presentation.",
        publicationStatus: "published",
        published: true,
        isPlaceholder: false,
      },
      {
        id: "security-basics",
        name: "Secure coding basics",
        level: "learning",
        note: "Salted & hashed passwords, session expiry, and SQL-injection testing in ReignFall.",
        publicationStatus: "published",
        published: true,
        isPlaceholder: false,
      },
      {
        id: "testing",
        name: "Testing",
        level: "comfortable",
        note: "Security testing on ReignFall, including sqlmap checks for SQL injection.",
        publicationStatus: "published",
        published: true,
        isPlaceholder: false,
      },
    ],
  },
  {
    id: "currently-learning",
    title: "Currently learning",
    description: "What I’m actively getting better at right now.",
    skills: [
      {
        id: "dsa",
        name: "Data structures & algorithms",
        level: "learning",
        note: "Second-year module, now interview prep.",
        publicationStatus: "published",
        published: true,
        isPlaceholder: false,
      },
      {
        id: "ai-workflows",
        name: "AI-assisted development",
        level: "exploring",
        note: "Using AI tools deliberately — as a multiplier, not a substitute for understanding.",
        publicationStatus: "published",
        published: true,
        isPlaceholder: false,
      },
    ],
  },
] as const satisfies readonly SkillGroup[];

export const publishedSkillGroups = skillGroups
  .map((group) => ({
    ...group,
    skills: group.skills.filter((skill) => skill.published),
  }))
  .filter((group) => group.skills.length > 0);

export const publishedSkills: readonly Skill[] = publishedSkillGroups.flatMap(
  (group) => group.skills,
);

const programmingSkills: readonly Skill[] =
  publishedSkillGroups.find((group) => group.id === "programming")?.skills ?? [];

export const strongestLanguages = programmingSkills
  .filter((skill) => skill.level === "comfortable")
  .map((skill) => skill.name);
