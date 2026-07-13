import type { Update } from "@/content/types";

const categoryLabels: Record<Update["category"], string> = {
  site: "Site note",
  learning: "Learning",
  project: "Project",
  personal: "Personal",
  community: "Community",
};

export function UpdateCard({
  update,
  large = false,
  showBody = false,
}: {
  update: Update;
  large?: boolean;
  showBody?: boolean;
}) {
  return (
    <article className="card-lift hairline-top rounded-[2rem] border border-line bg-surface p-6 shadow-soft sm:p-8">
      <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
        <span className="eyebrow text-accent">
          {categoryLabels[update.category]}
        </span>
        {update.publishedAt ? (
          <time dateTime={update.publishedAt} className="font-mono text-[0.68rem] uppercase tracking-[0.1em] text-subtle">
            {update.dateLabel}
          </time>
        ) : (
          <span className="font-mono text-[0.68rem] uppercase tracking-[0.1em] text-subtle">
            {update.dateLabel}
          </span>
        )}
      </div>
      <h3
        className={large
          ? "mt-8 text-3xl font-semibold tracking-[-0.045em] text-ink sm:text-4xl"
          : "mt-7 text-2xl font-semibold tracking-[-0.04em] text-ink"}
      >
        {update.title}
      </h3>
      <p className="mt-4 text-sm leading-7 text-muted sm:text-base">
        {update.excerpt}
      </p>
      {showBody && update.body.length ? (
        <div className="mt-6 space-y-4 border-t border-line pt-6 text-sm leading-7 text-muted sm:text-base">
          {update.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      ) : null}
    </article>
  );
}
