import type { Metadata } from "next";

import { ClosingPanel } from "@/components/closing-panel";
import { EmptyState } from "@/components/empty-state";
import { MotionWrapper } from "@/components/motion-wrapper";
import { PageShell } from "@/components/page-shell";
import { UpdateCard } from "@/components/update-card";
import { publishedUpdates, updatesIntro } from "@/content/updates";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Updates",
  description: "Short notes from Feras Harah on projects, learning, personal experiments, and ideas worth documenting.",
  path: "/updates",
});

export default function UpdatesPage() {
  return (
    <PageShell
      eyebrow="Notes / Updates"
      title="Small notes from work in progress."
      description={updatesIntro}
      aside={<p className="text-sm leading-7 text-muted">Published selectively. This is a learning log, not a content treadmill.</p>}
    >
      <section className="section-pad">
        <div className="site-shell">
          <h2 className="sr-only">Published updates</h2>
          {publishedUpdates.length ? (
            <div className="grid gap-6 lg:grid-cols-2">
              {publishedUpdates.map((update, index) => (
                <MotionWrapper key={update.slug} delay={index * 0.05} className={index === 0 ? "lg:col-span-2" : undefined}>
                  <UpdateCard update={update} large={index === 0} showBody />
                </MotionWrapper>
              ))}
            </div>
          ) : (
            <EmptyState title="No notes are published yet" description="Learning logs, project updates, personal reflections, and community notes will appear here when there is something useful to share." />
          )}
        </div>
      </section>

      <ClosingPanel eyebrow="Follow the work" title="The project page shows what shipped; the notes keep the thinking visible." description="Both stay intentionally small until there is something genuine and useful to add." primaryHref="/projects" primaryLabel="Explore projects" secondaryHref="/about" secondaryLabel="About the journey" />
    </PageShell>
  );
}
