import type { Profile } from "./types";

export const profile = {
  name: "Feras Harah",
  givenName: "Feras",
  familyName: "Harah",
  role: "Software Engineering Student at Queen’s University Belfast",
  course: "Software Engineering",
  university: "Queen’s University Belfast",
  yearOfStudy: 3,
  eyebrow: "Software Engineering · Queen’s University Belfast",
  heroIntro:
    "I’m a third-year Software Engineering student developing practical skills through university work, personal projects, and careful experimentation. I’m interested in useful digital tools, thoughtful engineering, and becoming a stronger developer through consistent practice.",
  currentChapter:
    "Shaping this website into a long-term home for projects, learning notes, and the parts of my work and interests that are worth sharing.",
  about: {
    introduction:
      "I’m Feras, a third-year Software Engineering student at Queen’s University Belfast. I’m developing my skills through university work, personal projects, and practical experiments—and trying to become more deliberate about how I design, build, and explain software.",
    background:
      "My degree is helping me build a foundation in both the technical and collaborative sides of software development, while personal projects give me space to experiment, make mistakes, and understand ideas more deeply.",
    growthNote:
      "I’m still growing as a developer. I care less about pretending to know everything and more about asking useful questions, responding well to feedback, and improving the quality of what I build over time.",
    interests: [
      "Useful digital tools",
      "Thoughtful web experiences",
      "Software engineering practice",
      "Practical experimentation",
    ],
  },
  values: [
    {
      title: "Learn with intention",
      description:
        "Understand the reasoning behind an approach instead of stopping at the first working answer.",
    },
    {
      title: "Stay consistent",
      description:
        "Make steady progress and treat improvement as something built over time.",
    },
    {
      title: "Make room for creativity",
      description:
        "Explore different ideas while keeping the outcome clear and useful.",
    },
    {
      title: "Help where I can",
      description:
        "Share useful knowledge and use technical skills in ways that support other people.",
    },
    {
      title: "Build useful things",
      description:
        "Focus on real needs and leave the result more helpful than it was before.",
    },
  ],
  principle: "Keep learning, build carefully, and make the result useful.",
  contact: {
    introduction:
      "If you’d like to talk about an opportunity, a project, or something I’m learning, you’ll be able to reach me through the public details listed here.",
    unavailableMessage:
      "Public contact details are being finalised. Until then, this site does not collect messages or publish an unverified address.",
    methods: [
      {
        id: "public-email",
        kind: "email",
        label: "Email",
        replacementNote:
          "Add a dedicated public email address and a mailto URL before publishing this method.",
        publicationStatus: "template",
        published: false,
        isPlaceholder: true,
      },
      {
        id: "github",
        kind: "github",
        label: "GitHub",
        replacementNote:
          "Add Feras’s confirmed public GitHub profile using an https URL.",
        publicationStatus: "template",
        published: false,
        isPlaceholder: true,
      },
      {
        id: "linkedin",
        kind: "linkedin",
        label: "LinkedIn",
        replacementNote:
          "Add Feras’s confirmed public LinkedIn profile using an https URL.",
        publicationStatus: "template",
        published: false,
        isPlaceholder: true,
      },
      {
        id: "location",
        kind: "location",
        label: "Location",
        replacementNote:
          "Confirm whether Feras wants to publish Belfast, Northern Ireland, or another location.",
        publicationStatus: "template",
        published: false,
        isPlaceholder: true,
      },
    ],
  },
  cv: {
    title: "Curriculum vitae",
    fileName: "Feras-Harah-CV.pdf",
    publicPath: "/cv/Feras-Harah-CV.pdf",
    available: false,
    summary:
      "My CV will provide a concise overview of my education, projects, and technical development.",
    unavailableMessage:
      "The CV is being reviewed for public release. It will appear here when the PDF and its privacy details are ready.",
  },
  seo: {
    title: "Feras Harah — Software Engineering Student",
    description:
      "The personal website of Feras Harah, a third-year Software Engineering student at Queen’s University Belfast, featuring projects, learning notes, and future updates.",
  },
} as const satisfies Profile;
