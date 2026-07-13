import type { Metadata } from "next";

import { ClosingPanel } from "@/components/closing-panel";
import { EmptyState } from "@/components/empty-state";
import { MotionWrapper } from "@/components/motion-wrapper";
import { PageShell } from "@/components/page-shell";
import { ProjectCard } from "@/components/project-card";
import { publishedProjects } from "@/content/projects";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Projects",
  description: "Published software projects and practical experiments by Feras Harah, shared with honest status and context.",
  path: "/projects",
});

export default function ProjectsPage() {
  return (
    <PageShell
      eyebrow="Work / Experiments"
      title="Useful things, shared with honest context."
      description="This is a deliberately selective record of university work, personal builds, and software experiments."
      aside={<div><p className="eyebrow text-subtle">Published now</p><p className="mt-3 text-5xl font-semibold tracking-[-0.06em] text-ink">{String(publishedProjects.length).padStart(2, "0")}</p><p className="mt-2 text-sm leading-6 text-muted">A selective collection, with more work added when it is ready to share.</p></div>}
    >
      <section className="section-pad">
        <div className="site-shell">
          <h2 className="sr-only">Published projects</h2>
          {publishedProjects.length ? (
            <div className="grid gap-7">
              {publishedProjects.map((project, index) => (
                <MotionWrapper key={project.slug} delay={index * 0.05}>
                  <ProjectCard project={project} index={index} featured={project.featured} />
                </MotionWrapper>
              ))}
            </div>
          ) : (
            <EmptyState title="Project case studies are being prepared" description="Future entries will cover the problem, approach, current status, challenges, and lessons in a useful amount of detail." />
          )}

          <aside className="mt-10 rounded-[2rem] border border-line bg-surface p-6 sm:p-8">
            <div className="grid gap-5 sm:grid-cols-[8rem_1fr] sm:items-start">
              <p className="eyebrow pt-1 text-accent">How work is shared</p>
              <div>
                <h2 className="text-xl font-semibold tracking-[-0.03em] text-ink">Context matters as much as the screenshot.</h2>
                <p className="mt-3 max-w-2xl text-sm leading-7 text-muted">Each future case study is designed to explain the problem, my contribution, the engineering decisions, and what I learned—not just list a technology stack.</p>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <ClosingPanel eyebrow="The learning behind the work" title="Projects matter most when the lessons are understood." description="The wider journey, values, and areas I am developing live on the About page." primaryHref="/about#journey" primaryLabel="See the journey" secondaryHref="/updates" secondaryLabel="Read the notes" />
    </PageShell>
  );
}
