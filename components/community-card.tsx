import { ArrowUpRightIcon } from "@/components/icons";
import type { CommunityItem } from "@/content/types";
import { safeExternalUrl } from "@/lib/safe-url";

export function CommunityCard({ item }: { item: CommunityItem }) {
  const link = safeExternalUrl(item.link);

  return (
    <article className="rounded-[2rem] border border-line bg-canvas p-6">
      <p className="eyebrow text-accent">{item.kind.replaceAll("-", " ")}</p>
      <h3 className="mt-5 text-xl font-semibold text-ink">{item.title}</h3>
      <p className="mt-3 text-sm leading-7 text-muted">{item.summary}</p>
      <p className="mt-3 text-sm leading-7 text-muted">{item.details}</p>
      {link ? (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-ink transition hover:text-accent"
        >
          Visit resource <ArrowUpRightIcon className="size-4" />
        </a>
      ) : null}
    </article>
  );
}
