import type { SkillGroup } from "./types";

export const skillsIntro =
  "I prefer clear labels—comfortable, learning, and exploring—over inflated percentages. This section will grow into a concise, current picture of the tools and ideas I use.";

export const skillsEmptyState =
  "I’m preparing a focused skills summary that reflects what I can discuss and demonstrate with confidence.";

export const skillGroups = [
  {
    id: "programming",
    title: "Programming",
    description: "Languages used in confirmed coursework or personal work.",
    skills: [
      {
        id: "programming-language-template",
        name: "Add a programming language",
        level: "learning",
        replacementNote:
          "Replace with a language Feras has used and choose comfortable, learning, or exploring.",
        publicationStatus: "template",
        published: false,
        isPlaceholder: true,
      },
    ],
  },
  {
    id: "web-development",
    title: "Web development",
    description: "Confirmed client-side, server-side, and web platform experience.",
    skills: [
      {
        id: "web-technology-template",
        name: "Add a web technology",
        level: "learning",
        replacementNote:
          "Do not infer personal proficiency from the stack used to generate this website.",
        publicationStatus: "template",
        published: false,
        isPlaceholder: true,
      },
    ],
  },
  {
    id: "databases",
    title: "Databases",
    description: "Confirmed database systems, modelling, or query experience.",
    skills: [
      {
        id: "database-template",
        name: "Add a database or data skill",
        level: "learning",
        replacementNote:
          "Add a specific technology or concept only after Feras confirms using it.",
        publicationStatus: "template",
        published: false,
        isPlaceholder: true,
      },
    ],
  },
  {
    id: "tools",
    title: "Tools",
    description: "Development, collaboration, and delivery tools used in real work.",
    skills: [
      {
        id: "development-tool-template",
        name: "Add a development tool",
        level: "learning",
        replacementNote:
          "Replace with a tool Feras can discuss from genuine use.",
        publicationStatus: "template",
        published: false,
        isPlaceholder: true,
      },
    ],
  },
  {
    id: "software-engineering-concepts",
    title: "Software engineering concepts",
    description: "Practices Feras can support with coursework or project examples.",
    skills: [
      {
        id: "engineering-concept-template",
        name: "Add a software engineering concept",
        level: "learning",
        replacementNote:
          "Use a concrete concept and add a short evidence-based note where useful.",
        publicationStatus: "template",
        published: false,
        isPlaceholder: true,
      },
    ],
  },
  {
    id: "currently-learning",
    title: "Currently learning",
    description: "Topics Feras is actively developing now.",
    skills: [
      {
        id: "current-learning-template",
        name: "Add a current learning focus",
        level: "exploring",
        replacementNote:
          "Replace with a timely topic and review it regularly so it does not become stale.",
        publicationStatus: "template",
        published: false,
        isPlaceholder: true,
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
