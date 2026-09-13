import type { Metadata } from "next";

import { ClosingPanel } from "@/components/closing-panel";
import { EmptyState } from "@/components/empty-state";
import { MotionWrapper } from "@/components/motion-wrapper";
import { PageShell } from "@/components/page-shell";
import { ProjectCard } from "@/components/project-card";
import { publishedProjects } from "@/content/projects";
import { createMetadata } from "@/lib/metadata";
import { getPublicEmail } from "@/lib/public-contact";

export const metadata: Metadata = createMetadata({
  title: "Projects",
  description: "Software projects by Feras Harah: a Shopify store for a local business, two team-built games, and this website — with the stack, status, and lessons for each.",
  path: "/projects",
});

export default function ProjectsPage() {
  const email = getPublicEmail();

  return (
    <PageShell
      eyebrow="Work / Projects"
      title="Work I can walk you through."
      description="A store for a local business, two team projects from Queen’s, and the site you’re on — with the stack, status, and lessons for each."
      aside={<div><p className="eyebrow text-subtle">Projects</p><p className="mt-3 text-5xl font-semibold tracking-[-0.06em] text-ink">{String(publishedProjects.length).padStart(2, "0")}</p><p className="mt-2 text-sm leading-6 text-muted">Open a project’s notes for what I learned and what was hard.</p></div>}
    >
      <section className="section-pad">
        <div className="site-shell">
          <h2 className="sr-only">Projects</h2>
          {publishedProjects.length ? (
            <div className="grid gap-7">
              {publishedProjects.map((project, index) => (
                <MotionWrapper key={project.slug} delay={index * 0.05}>
                  <ProjectCard project={project} index={index} featured />
                </MotionWrapper>
              ))}
            </div>
          ) : (
            <EmptyState title="Project case studies are being prepared" description="Future entries will cover the problem, approach, current status, challenges, and lessons in a useful amount of detail." />
          )}

          <aside className="mt-10 rounded-[2rem] border border-line bg-surface p-6 sm:p-8">
            <div className="grid gap-5 sm:grid-cols-[8rem_1fr] sm:items-start">
              <p className="eyebrow pt-1 text-accent">Going deeper</p>
              <div>
                <h2 className="text-xl font-semibold tracking-[-0.03em] text-ink">Happy to talk through any of these.</h2>
                <p className="mt-3 max-w-2xl text-sm leading-7 text-muted">
                  Ask me about the design decisions, the bugs, and what I’d do differently — in an interview, or by email first
                  {email ? (
                    <>
                      {" at "}
                      <a href={`mailto:${email}`} className="font-semibold text-ink underline decoration-accent underline-offset-4 transition hover:text-accent">{email}</a>
                    </>
                  ) : null}
                  .
                </p>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <ClosingPanel eyebrow="The person behind the work" title="Projects are only part of the story." description="My background, skills, and the route so far are on the About page." primaryHref="/about" primaryLabel="About me" secondaryHref="/updates" secondaryLabel="Read the notes" />
    </PageShell>
  );
}
