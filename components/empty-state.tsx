import type { ReactNode } from "react";

import { DocumentIcon } from "@/components/icons";

export function EmptyState({
  title,
  description,
  action,
}: {
  title: string;
  description: string;
  action?: ReactNode;
}) {
  return (
    <div className="rounded-[2rem] border border-dashed border-line bg-surface p-6 sm:p-10">
      <div className="grid size-11 place-items-center rounded-2xl bg-accent-soft text-accent">
        <DocumentIcon className="size-5" />
      </div>
      <h3 className="mt-6 text-xl font-semibold tracking-[-0.03em] text-ink">
        {title}
      </h3>
      <p className="mt-3 max-w-xl text-sm leading-7 text-muted">{description}</p>
      {action ? <div className="mt-6">{action}</div> : null}
    </div>
  );
}
