import type { ReactNode } from "react";

import { MotionWrapper } from "@/components/motion-wrapper";

export function PageShell({
  eyebrow,
  title,
  description,
  aside,
  children,
}: {
  eyebrow: string;
  title: string;
  description: string;
  aside?: ReactNode;
  children: ReactNode;
}) {
  return (
    <>
      <section className="relative overflow-hidden border-b border-line">
        <div className="blueprint-grid absolute inset-0 -z-10 opacity-45" />
        <div className="site-shell grid min-h-[27rem] items-end gap-10 py-16 sm:py-20 lg:grid-cols-[1fr_18rem] lg:py-24">
          <MotionWrapper>
            <p className="eyebrow mb-5 text-accent">{eyebrow}</p>
            <h1 className="text-balance max-w-4xl text-5xl font-semibold tracking-[-0.06em] text-ink sm:text-6xl lg:text-7xl">
              {title}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-muted sm:text-lg">
              {description}
            </p>
          </MotionWrapper>
          {aside ? (
            <MotionWrapper delay={0.08} className="lg:pb-2">
              {aside}
            </MotionWrapper>
          ) : null}
        </div>
      </section>
      {children}
    </>
  );
}
