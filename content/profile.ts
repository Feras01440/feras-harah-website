import type { Profile } from "./types";

export const profile = {
  name: "Feras Harah",
  givenName: "Feras",
  familyName: "Harah",
  role: "Software Engineering Student",
  course: "Software Engineering",
  university: "Queen’s University Belfast",
  yearOfStudy: 3,
  eyebrow: "Software Engineering · Belfast",
  heroIntro:
    "I build practical software: an online store for a local grocery business, database-driven games with my university team, and the site you’re reading now. I’m a Software Engineering student at Queen’s University Belfast, looking for a 2026–27 industrial placement where I can do more of this.",
  currentChapter:
    "Heading into my placement year at Queen’s: applying to companies for 2026–27, sharpening my Java and C++, and going deeper on data structures and algorithms.",
  about: {
    introduction:
      "I’m Feras — curious by default, practical by habit. I speak three languages (Arabic, English, and Turkish), and I got hooked on software at school, when a revision quiz I wrote in C# ended up being used by GCSE students preparing for their exams. Making something that other people actually used changed how I saw programming, and I’ve been chasing that feeling since.",
    background:
      "I’m studying Software Engineering with placement at Queen’s University Belfast, graduating in 2028. In two years I’ve shipped a database-driven text-adventure game with a six-person team, built a climate-change board game in C++, and started building a real online store for a local business. Alongside study I’ve delivered for Amazon Flex and worked weekend shifts in a busy restaurant — work that taught me plenty about showing up and dealing with people.",
    growthNote:
      "I don’t pretend to know everything. What I can promise is that I ask good questions, take feedback seriously, and the things I build get noticeably better each time.",
    interests: [
      {
        title: "Full-stack web development",
        description:
          "From a Shopify storefront for a real shop to this hand-built Next.js site — I like owning the whole thing, front to back.",
      },
      {
        title: "Databases & data-driven apps",
        description:
          "Save systems, analytics pages, booking systems — most of my projects end up being database design in disguise.",
      },
      {
        title: "Games with a purpose",
        description:
          "ReignFall and Greenopoly taught me more about state, persistence, and teamwork than any tutorial could.",
      },
      {
        title: "Hardware & robotics",
        description:
          "Queen’s Robotics Club member. I’ve built PCs and tinker with Arduino and Raspberry Pi when a project needs to touch the real world.",
      },
    ],
  },
  values: [
    {
      title: "Learn with intention",
      description:
        "Understand why an approach works instead of stopping at the first answer that runs.",
    },
    {
      title: "Stay consistent",
      description:
        "Small, steady progress beats bursts of motivation. Improvement is built, not found.",
    },
    {
      title: "Make room for creativity",
      description:
        "Explore odd ideas — then keep whatever actually makes the result clearer or more useful.",
    },
    {
      title: "Help where I can",
      description:
        "Skills matter most when they solve someone else’s problem, not just my own.",
    },
    {
      title: "Build useful things",
      description:
        "Start from a real need, and leave things more helpful than I found them.",
    },
  ],
  principle: "Keep learning, build things properly, and make them count.",
  contact: {
    introduction:
      "Whether it’s a placement opportunity, a project, or a question about something I’ve built — my inbox is open, and I reply.",
    unavailableMessage:
      "Public contact details are being finalised. Until then, this site does not collect messages or publish an unverified address.",
    methods: [
      {
        id: "public-email",
        kind: "email",
        label: "Email",
        displayValue: "feras07hrh@gmail.com",
        href: "mailto:feras07hrh@gmail.com",
        publicationStatus: "published",
        published: true,
        isPlaceholder: false,
      },
      {
        id: "github",
        kind: "github",
        label: "GitHub",
        displayValue: "github.com/Feras01440",
        href: "https://github.com/Feras01440",
        publicationStatus: "published",
        published: true,
        isPlaceholder: false,
      },
      {
        id: "linkedin",
        kind: "linkedin",
        label: "LinkedIn",
        replacementNote:
          "Feras has a LinkedIn profile but has chosen to keep it off the site for now.",
        publicationStatus: "draft",
        published: false,
        isPlaceholder: false,
      },
      {
        id: "location",
        kind: "location",
        label: "Location",
        displayValue: "Belfast, Northern Ireland",
        publicationStatus: "published",
        published: true,
        isPlaceholder: false,
      },
    ],
  },
  cv: {
    title: "Curriculum vitae",
    fileName: "Feras-Harah-CV.pdf",
    publicPath: "/cv/Feras-Harah-CV.pdf",
    available: true,
    summary:
      "A two-page overview of my education, projects, and skills — the same story as this site, in the format recruiters expect.",
    unavailableMessage:
      "The CV is being updated at the moment. Email me at feras07hrh@gmail.com and I’ll send you the latest version directly.",
  },
  seo: {
    title: "Feras Harah — Software Engineering Student in Belfast",
    description:
      "Software Engineering student at Queen’s University Belfast seeking a 2026–27 industrial placement. Projects include an online store for a local grocery business and database-driven web games.",
  },
} as const satisfies Profile;
