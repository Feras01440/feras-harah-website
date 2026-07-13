import type { Hobby } from "./types";

export const hobbiesIntro =
  "Software is only one part of the picture. This is the rest of it — the things that keep me curious away from the keyboard.";

export const hobbiesEmptyState =
  "I’ll use this space for creative interests, media, and personal experiments when there is something worth sharing.";

export const hobbies = [
  {
    id: "drone-videography",
    title: "Drone videography & photography",
    description:
      "I fly a drone for landscape video and photography — planning shots, flying them cleanly, and editing the results. There’s a surprising overlap with engineering: preparation, constraints, and patience.",
    category: "creative",
    publicationStatus: "published",
    published: true,
    isPlaceholder: false,
  },
  {
    id: "languages",
    title: "Three languages, still counting",
    description:
      "I grew up speaking Arabic, English, and Turkish, and I keep working at all three. Switching between them daily is probably why picking up new programming languages doesn’t scare me.",
    category: "learning",
    publicationStatus: "published",
    published: true,
    isPlaceholder: false,
  },
  {
    id: "robotics-hardware",
    title: "Robotics & hardware",
    description:
      "Member of the Queen’s Robotics Club. I’ve built PCs, and I like projects that reach outside the screen — Arduino, Raspberry Pi, and whatever needs wiring next.",
    category: "technology",
    publicationStatus: "published",
    published: true,
    isPlaceholder: false,
  },
  {
    id: "chess",
    title: "Chess",
    description:
      "Chess punishes lazy thinking and rewards patience — the same muscles debugging uses. I play to keep both sharp.",
    category: "learning",
    publicationStatus: "published",
    published: true,
    isPlaceholder: false,
  },
  {
    id: "gaming",
    title: "Gaming",
    description:
      "Games are part of why I code. ReignFall and Greenopoly exist because building a game turned out to be even more fun than playing one.",
    category: "technology",
    publicationStatus: "published",
    published: true,
    isPlaceholder: false,
  },
  {
    id: "ai-and-new-tech",
    title: "AI & new technology",
    description:
      "I follow AI and new tools closely and actually use them — carefully — in my own workflow. The interesting question is never the demo; it’s what the tool changes about how you work.",
    category: "technology",
    publicationStatus: "published",
    published: true,
    isPlaceholder: false,
  },
  {
    id: "football",
    title: "Playing football",
    description:
      "Five-a-side or full pitch, I’m in. Football is where I switch off — and a good reminder that a team that talks beats a team of individuals, on grass or in a codebase.",
    category: "sport",
    publicationStatus: "published",
    published: true,
    isPlaceholder: false,
  },
  {
    id: "swimming",
    title: "Swimming",
    description:
      "My reset button. A stubborn bug has quietly solved itself more than once somewhere around length twenty.",
    category: "sport",
    publicationStatus: "published",
    published: true,
    isPlaceholder: false,
  },
] as const satisfies readonly Hobby[];

export const publishedHobbies = hobbies.filter((hobby) => hobby.published);
