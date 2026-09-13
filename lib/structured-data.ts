import { profile } from "@/content/profile";
import { publishedSkills } from "@/content/skills";
import { getSiteUrl } from "@/lib/metadata";
import {
  getPublicEmail,
  getPublicLocation,
  getPublicSocialLinks,
} from "@/lib/public-contact";

export function serializeJsonLd(data: Record<string, unknown>) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

function getPersonId() {
  return new URL("/#person", getSiteUrl()).toString();
}

export function getSiteJsonLd() {
  const siteUrl = getSiteUrl().toString();
  const email = getPublicEmail();
  const location = getPublicLocation();

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": new URL("/#website", siteUrl).toString(),
        url: siteUrl,
        name: profile.name,
        inLanguage: "en-GB",
        publisher: { "@id": getPersonId() },
      },
      {
        "@type": "Person",
        "@id": getPersonId(),
        name: profile.name,
        alternateName: profile.alternateName,
        givenName: profile.givenName,
        familyName: profile.familyName,
        url: siteUrl,
        jobTitle: profile.role,
        description: profile.seo.description,
        ...(email ? { email: `mailto:${email}` } : {}),
        ...(location
          ? { homeLocation: { "@type": "Place", name: location } }
          : {}),
        affiliation: {
          "@type": "CollegeOrUniversity",
          name: profile.university,
          sameAs: "https://www.qub.ac.uk",
        },
        knowsLanguage: profile.languages,
        knowsAbout: publishedSkills
          .filter((skill) => skill.level !== "exploring")
          .map((skill) => skill.name),
        sameAs: getPublicSocialLinks().map((link) => link.href),
      },
    ],
  };
}

export function getProfilePageJsonLd(path: `/${string}`) {
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    url: new URL(path, getSiteUrl()).toString(),
    mainEntity: { "@id": getPersonId() },
  };
}
