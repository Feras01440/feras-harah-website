import { profile } from "@/content/profile";
import type { PublicDetail } from "@/content/types";
import { isValidEmailAddress } from "@/lib/contact";
import { getSafeSocialUrl } from "@/lib/safe-url";

const methods: readonly PublicDetail[] = profile.contact.methods;

export const hasPublicContact = methods.some((method) => method.published);

export function getPublicEmail() {
  const method = methods.find(
    (candidate) => candidate.published && candidate.kind === "email",
  );
  const address = method?.href?.startsWith("mailto:")
    ? method.href.slice("mailto:".length)
    : "";

  return isValidEmailAddress(address) ? address : undefined;
}

export function getPublicLocation() {
  return methods.find(
    (method) => method.published && method.kind === "location",
  )?.displayValue;
}

export function getPublicSocialLinks() {
  return methods.flatMap((method) => {
    if (
      !method.published ||
      (method.kind !== "github" && method.kind !== "linkedin")
    ) {
      return [];
    }

    const href = getSafeSocialUrl(method.kind, method.href);
    return href ? [{ kind: method.kind, label: method.label, href }] : [];
  });
}
