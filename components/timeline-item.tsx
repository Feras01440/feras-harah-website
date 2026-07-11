import type { TimelineEntry } from "@/content/types";

export function TimelineItem({
  item,
  index,
}: {
  item: TimelineEntry;
  index: number;
}) {
  return (
    <li className="relative grid gap-4 border-t border-line py-7 sm:grid-cols-[8rem_1fr] sm:gap-8">
      <div className="flex items-center gap-3 sm:items-start">
        <span className="grid size-7 shrink-0 place-items-center rounded-full border border-accent bg-accent-soft font-mono text-[0.62rem] font-bold text-accent">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="eyebrow pt-1 text-subtle">{item.period}</span>
      </div>
      <div>
        <h3 className="text-lg font-semibold tracking-[-0.025em] text-ink sm:text-xl">
          {item.title}
        </h3>
        <p className="mt-2 max-w-2xl text-sm leading-7 text-muted">
          {item.description}
        </p>
      </div>
    </li>
  );
}
