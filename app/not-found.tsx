import Link from "next/link";
import type { Metadata } from "next";

import { ArrowRightIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <section className="relative grid min-h-[70svh] place-items-center overflow-hidden border-b border-line px-4 py-20 text-center">
      <div className="blueprint-grid absolute inset-0 -z-10 opacity-50" />
      <div>
        <p className="eyebrow text-accent">Error / 404</p>
        <p className="mt-5 text-[clamp(7rem,24vw,15rem)] font-semibold leading-none tracking-[-0.09em] text-ink">404</p>
        <h1 className="text-balance mt-5 text-3xl font-semibold tracking-[-0.045em] text-ink sm:text-4xl">This path does not lead anywhere yet.</h1>
        <p className="mx-auto mt-4 max-w-lg text-sm leading-7 text-muted">The page may have moved, the link may be outdated, or this part of the site may still be an idea for later.</p>
        <Link href="/" className="mt-8 inline-flex min-h-12 items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-canvas transition hover:bg-accent hover:text-white">Back to home <ArrowRightIcon className="size-4" /></Link>
      </div>
    </section>
  );
}
