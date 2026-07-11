export type InternalPath = `/${string}`;
export type HttpsUrl = `https://${string}`;
export type MailtoUrl = `mailto:${string}@${string}`;
export type PublicHref = HttpsUrl | MailtoUrl;
export type ISODate = `${number}-${number}-${number}`;

export type Publication =
  | Readonly<{
      publicationStatus: "published";
      published: true;
      isPlaceholder: false;
    }>
  | Readonly<{
      publicationStatus: "draft";
      published: false;
      isPlaceholder: false;
    }>
  | Readonly<{
      publicationStatus: "template";
      published: false;
      isPlaceholder: true;
    }>;

export type ContentEntry<T extends object> = Readonly<T & Publication>;

export interface PersonalValue {
  readonly title: string;
  readonly description: string;
}

export type PublicDetailKind = "email" | "github" | "linkedin" | "location";

export type PublicDetail = ContentEntry<{
  readonly id: string;
  readonly kind: PublicDetailKind;
  readonly label: string;
  readonly displayValue?: string;
  readonly href?: PublicHref;
  readonly replacementNote?: string;
}>;

export interface Profile {
  readonly name: string;
  readonly givenName: string;
  readonly familyName: string;
  readonly role: string;
  readonly course: string;
  readonly university: string;
  readonly yearOfStudy: number;
  readonly eyebrow: string;
  readonly heroIntro: string;
  readonly currentChapter: string;
  readonly about: Readonly<{
    introduction: string;
    background: string;
    growthNote: string;
    interests: readonly string[];
  }>;
  readonly values: readonly PersonalValue[];
  readonly principle: string;
  readonly contact: Readonly<{
    introduction: string;
    unavailableMessage: string;
    methods: readonly PublicDetail[];
  }>;
  readonly cv: Readonly<{
    title: string;
    fileName: string;
    publicPath: InternalPath;
    available: boolean;
    summary: string;
    unavailableMessage: string;
  }>;
  readonly seo: Readonly<{
    title: string;
    description: string;
  }>;
}

export type ProjectStatus = "planned" | "in-progress" | "completed";

export interface ProjectImage {
  readonly src: InternalPath;
  readonly alt: string;
}

export type Project = ContentEntry<{
  readonly slug: string;
  readonly title: string;
  readonly shortDescription: string;
  readonly longDescription: string;
  readonly status: ProjectStatus;
  readonly technologies: readonly string[];
  readonly learnings: readonly string[];
  readonly challenges: readonly string[];
  readonly image?: ProjectImage;
  readonly githubUrl?: HttpsUrl;
  readonly liveUrl?: HttpsUrl;
  readonly featured: boolean;
  readonly replacementNotes?: readonly string[];
}>;

export type SkillLevel = "comfortable" | "learning" | "exploring";

export type Skill = ContentEntry<{
  readonly id: string;
  readonly name: string;
  readonly level: SkillLevel;
  readonly note?: string;
  readonly replacementNote?: string;
}>;

export interface SkillGroup {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly skills: readonly Skill[];
}

export type TimelineKind = "education" | "project" | "learning" | "goal";

export type TimelineEntry = ContentEntry<{
  readonly id: string;
  readonly period: string;
  readonly title: string;
  readonly description: string;
  readonly kind: TimelineKind;
  readonly date?: ISODate;
  readonly replacementNote?: string;
}>;

export type UpdateCategory =
  | "site"
  | "learning"
  | "project"
  | "personal"
  | "community";

export type Update = ContentEntry<{
  readonly slug: string;
  readonly title: string;
  readonly excerpt: string;
  readonly body: readonly string[];
  readonly category: UpdateCategory;
  readonly dateLabel: string;
  readonly publishedAt?: ISODate;
  readonly replacementNote?: string;
}>;

export type HobbyCategory = "creative" | "media" | "technology" | "learning";

export type Hobby = ContentEntry<{
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly category: HobbyCategory;
  readonly replacementNote?: string;
}>;

export type CommunityKind =
  | "helping-people"
  | "local-project"
  | "tech-support"
  | "small-business"
  | "resource";

export type CommunityItem = ContentEntry<{
  readonly id: string;
  readonly title: string;
  readonly summary: string;
  readonly details: string;
  readonly kind: CommunityKind;
  readonly link?: HttpsUrl;
  readonly replacementNote?: string;
}>;
