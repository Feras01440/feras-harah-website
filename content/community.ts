import type { CommunityItem } from "./types";

export const communityIntro =
  "This space can grow into a record of useful resources, practical support, and community work that Feras chooses to share.";

export const communityEmptyState =
  "This section will grow with practical support, useful resources, and community work that can be shared with the right context.";

export const communityItems = [
  {
    id: "helping-someone-template",
    title: "Add an example of helping someone",
    summary:
      "Briefly explain the need and the useful outcome without exposing private details.",
    details:
      "Replace this template with a confirmed example. Focus on what was needed, how Feras helped, and what he learned rather than overstating the impact.",
    kind: "helping-people",
    replacementNote:
      "Obtain permission before naming another person or sharing identifying information.",
    publicationStatus: "template",
    published: false,
    isPlaceholder: true,
  },
  {
    id: "local-project-template",
    title: "Add a local or community project",
    summary:
      "Describe a real contribution, the scope of Feras’s role, and the project’s current status.",
    details:
      "Replace this copy only after the organisation, contribution, and any public links have been confirmed.",
    kind: "local-project",
    replacementNote:
      "Do not imply endorsement by an organisation or claim team outcomes as individual work.",
    publicationStatus: "template",
    published: false,
    isPlaceholder: true,
  },
  {
    id: "tech-help-template",
    title: "Add a practical tech-help example",
    summary:
      "Explain the problem and solution in approachable language.",
    details:
      "Replace this template with an example Feras is comfortable making public. Remove personal data, credentials, and sensitive technical details.",
    kind: "tech-support",
    replacementNote:
      "Keep the focus on the useful lesson rather than someone else’s difficulty.",
    publicationStatus: "template",
    published: false,
    isPlaceholder: true,
  },
  {
    id: "small-business-idea-template",
    title: "Add a small-business technology idea",
    summary:
      "Describe a useful idea without presenting an unbuilt concept as a delivered product.",
    details:
      "State clearly whether the entry is an idea, experiment, proposal, or completed piece of work.",
    kind: "small-business",
    replacementNote:
      "Confirm permission before identifying a business or discussing its internal needs.",
    publicationStatus: "template",
    published: false,
    isPlaceholder: true,
  },
  {
    id: "resource-template",
    title: "Add a useful resource",
    summary:
      "Explain who the resource is for and why Feras found it helpful.",
    details:
      "Replace this template with an accurate summary and add an https link only after checking that it is safe and still works.",
    kind: "resource",
    replacementNote:
      "Review external resources periodically for broken links or changed content.",
    publicationStatus: "template",
    published: false,
    isPlaceholder: true,
  },
] as const satisfies readonly CommunityItem[];

export const publishedCommunityItems = communityItems.filter(
  (item) => item.published,
);
