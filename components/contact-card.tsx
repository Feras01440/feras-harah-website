import { ArrowUpRightIcon, CodeIcon, LinkedInIcon, MailIcon, MapPinIcon } from "@/components/icons";
import type { PublicDetail } from "@/content/types";
import { isValidEmailAddress } from "@/lib/contact";
import { getSafeSocialUrl } from "@/lib/safe-url";

const icons = {
  email: MailIcon,
  github: CodeIcon,
  linkedin: LinkedInIcon,
  location: MapPinIcon,
};

export function ContactCard({ detail }: { detail: PublicDetail }) {
  if (!detail.published || !detail.displayValue) return null;

  const Icon = icons[detail.kind];
  const externalHref =
    detail.kind === "github" || detail.kind === "linkedin"
      ? getSafeSocialUrl(detail.kind, detail.href)
      : null;
  const configuredRecipient = detail.href?.startsWith("mailto:")
    ? detail.href.slice("mailto:".length)
    : "";
  const emailHref =
    detail.kind === "email" && isValidEmailAddress(configuredRecipient)
      ? `mailto:${configuredRecipient}`
      : null;
  const href = externalHref ?? emailHref;

  const body = (
    <>
      <span className="grid size-11 place-items-center rounded-2xl bg-accent-soft text-accent">
        <Icon className="size-5" />
      </span>
      <span className="min-w-0 flex-1">
        <span className="eyebrow block text-subtle">{detail.label}</span>
        <span className="mt-1 block text-sm font-semibold text-ink wrap-anywhere">
          {detail.displayValue}
        </span>
      </span>
      {href ? <ArrowUpRightIcon className="size-4 text-subtle" /> : null}
    </>
  );

  if (!href) {
    return (
      <div className="flex items-center gap-4 rounded-2xl border border-line bg-surface p-4">
        {body}
      </div>
    );
  }

  if (externalHref) {
    return (
      <a
        href={externalHref}
        target="_blank"
        rel="noopener noreferrer"
        className="card-lift flex items-center gap-4 rounded-2xl border border-line bg-surface p-4"
      >
        {body}
      </a>
    );
  }

  return (
    <a
      href={emailHref ?? undefined}
      className="card-lift flex items-center gap-4 rounded-2xl border border-line bg-surface p-4"
    >
      {body}
    </a>
  );
}
