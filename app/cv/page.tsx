import type { Metadata } from "next";

import { CheckIcon } from "@/components/icons";
import { CVViewer } from "@/components/cv-viewer";
import { PageShell } from "@/components/page-shell";
import { profile } from "@/content/profile";
import { isPublicCvAvailable } from "@/lib/cv";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "CV",
  description: `The CV of Feras Harah, a Software Engineering student at Queen’s University Belfast. ${profile.availability.sentence}`,
  path: "/cv",
});

if (!isPublicCvAvailable()) {
  metadata.robots = { index: false, follow: true };
}

export default function CVPage() {
  const cvAvailable = isPublicCvAvailable();

  return (
    <PageShell
      eyebrow="CV / Career hub"
      title="The two-page version of all this."
      description={profile.cv.summary}
      aside={<div className="rounded-2xl border border-line bg-surface p-5"><p className="eyebrow text-accent">Document status</p><p className="mt-3 text-sm font-semibold text-ink">{cvAvailable ? "Available to view and download" : "In preparation"}</p></div>}
    >
      <section className="section-pad">
        <div className="site-shell grid gap-12 lg:grid-cols-[18rem_1fr] lg:gap-14">
          <aside className="order-2 lg:order-1">
            <p className="eyebrow text-accent">What’s inside</p>
            <h2 className="mt-5 text-2xl font-semibold tracking-[-0.04em] text-ink">Two pages, no filler</h2>
            <ul className="mt-6 space-y-4 text-sm leading-6 text-muted">
              {profile.cv.highlights.map((highlight) => (
                <li key={highlight} className="flex gap-3"><CheckIcon className="mt-0.5 size-4 shrink-0 text-positive" /> {highlight}</li>
              ))}
            </ul>
            <p className="mt-7 border-t border-line pt-6 text-xs leading-6 text-subtle">This is a deliberately public document — private details like my phone number are shared directly with employers instead.</p>
          </aside>
          <div className="order-1 lg:order-2">
            <CVViewer available={cvAvailable} />
          </div>
        </div>
      </section>
    </PageShell>
  );
}
