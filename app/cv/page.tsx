import type { Metadata } from "next";

import { CheckIcon } from "@/components/icons";
import { CVViewer } from "@/components/cv-viewer";
import { PageShell } from "@/components/page-shell";
import { profile } from "@/content/profile";
import { isPublicCvAvailable } from "@/lib/cv";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "CV",
  description: "The CV and career hub of Feras Harah, a Software Engineering student at Queen’s University Belfast seeking a 2026–27 industrial placement.",
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
          <aside>
            <p className="eyebrow text-accent">Before downloading</p>
            <h2 className="mt-5 text-2xl font-semibold tracking-[-0.04em] text-ink">What this page is for</h2>
            <ul className="mt-6 space-y-4 text-sm leading-6 text-muted">
              <li className="flex gap-3"><CheckIcon className="mt-0.5 size-4 shrink-0 text-positive" /> A quick overview before opening the PDF</li>
              <li className="flex gap-3"><CheckIcon className="mt-0.5 size-4 shrink-0 text-positive" /> A same-origin preview where the browser supports it</li>
              <li className="flex gap-3"><CheckIcon className="mt-0.5 size-4 shrink-0 text-positive" /> A direct download alongside the browser preview</li>
            </ul>
            <p className="mt-7 border-t border-line pt-6 text-xs leading-6 text-subtle">This is a deliberately public document — private details like my phone number are shared directly with employers instead.</p>
          </aside>
          <CVViewer available={cvAvailable} />
        </div>
      </section>
    </PageShell>
  );
}
