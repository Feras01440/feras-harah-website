import { ArrowUpRightIcon } from "@/components/icons";
import Image from "next/image";
import type { Project } from "@/content/types";
import { cn } from "@/lib/cn";
import { safeExternalUrl } from "@/lib/safe-url";

const statusLabels: Record<Project["status"], string> = {
  planned: "Planned",
  "in-progress": "In progress",
  completed: "Completed",
};

export function ProjectCard({
  project,
  index = 0,
  featured = false,
}: {
  project: Project;
  index?: number;
  featured?: boolean;
}) {
  const githubUrl = safeExternalUrl(project.githubUrl);
  const liveUrl = safeExternalUrl(project.liveUrl);

  return (
    <article
      className={cn(
        "card-lift group flex h-full flex-col overflow-hidden rounded-[2rem] border border-line bg-surface shadow-soft",
        featured && "lg:grid lg:grid-cols-[0.8fr_1.2fr]",
      )}
    >
      <div
        className={cn(
          "quiet-noise relative min-h-56 overflow-hidden border-b border-line bg-ink p-6 text-canvas",
          featured && "lg:min-h-full lg:border-r lg:border-b-0",
        )}
      >
        {project.image ? (
          <Image
            src={project.image.src}
            alt={project.image.alt}
            fill
            sizes={featured ? "(min-width: 1024px) 40vw, 100vw" : "(min-width: 1024px) 50vw, 100vw"}
            className="object-cover"
          />
        ) : (
          <div aria-hidden="true" className="absolute inset-0 p-6">
            <div className="absolute inset-0 opacity-50 blueprint-grid" />
            <div className="relative flex h-full min-h-44 flex-col justify-between">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[0.65rem] uppercase tracking-[0.16em] text-canvas/60">
                  Project / {String(index + 1).padStart(2, "0")}
                </span>
                <span className="size-2 rounded-full bg-accent" />
              </div>
              <div>
                <span className="block text-[clamp(4rem,9vw,7rem)] font-semibold leading-none tracking-[-0.09em] text-canvas/95">
                  {project.title
                    .split(" ")
                    .slice(0, 2)
                    .map((word) => word[0])
                    .join("")}
                </span>
                <div className="mt-4 h-px w-full bg-canvas/15" />
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6 sm:p-8">
        <div className="flex flex-wrap items-center gap-3">
          <span className="eyebrow text-accent">
            {statusLabels[project.status]}
          </span>
          {project.featured ? (
            <span className="rounded-full border border-line px-2.5 py-1 font-mono text-[0.62rem] uppercase tracking-[0.12em] text-subtle">
              Selected work
            </span>
          ) : null}
        </div>
        <h3 className="mt-5 text-2xl font-semibold tracking-[-0.04em] text-ink sm:text-3xl">
          {project.title}
        </h3>
        <p className="mt-4 text-sm leading-7 text-muted sm:text-base">
          {featured ? project.longDescription : project.shortDescription}
        </p>

        {project.technologies.length ? (
          <ul className="mt-6 flex flex-wrap gap-2" aria-label="Technologies used">
            {project.technologies.map((technology) => (
              <li
                key={technology}
                className="rounded-full bg-accent-soft px-3 py-1.5 font-mono text-[0.68rem] font-semibold text-accent"
              >
                {technology}
              </li>
            ))}
          </ul>
        ) : null}

        {!featured || project.learnings.length || project.challenges.length ? (
          <details className="mt-7 rounded-2xl border border-line bg-canvas px-4 py-3">
            <summary className="cursor-pointer py-1 text-sm font-semibold text-ink marker:text-accent">
              Project notes
            </summary>
            <div className="space-y-5 border-t border-line pb-2 pt-5 text-sm leading-7 text-muted">
              {!featured ? <p>{project.longDescription}</p> : null}
              {project.learnings.length ? (
                <section>
                  <h4 className="font-semibold text-ink">What I learned</h4>
                  <ul className="mt-2 list-disc space-y-1 pl-5">
                    {project.learnings.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                </section>
              ) : null}
              {project.challenges.length ? (
                <section>
                  <h4 className="font-semibold text-ink">Challenges</h4>
                  <ul className="mt-2 list-disc space-y-1 pl-5">
                    {project.challenges.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                </section>
              ) : null}
            </div>
          </details>
        ) : null}

        {githubUrl || liveUrl ? (
          <div className="mt-auto flex flex-wrap gap-4 pt-8">
            {liveUrl ? (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-ink transition hover:text-accent"
              >
                Live project <ArrowUpRightIcon className="size-4" />
              </a>
            ) : null}
            {githubUrl ? (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-muted transition hover:text-accent"
              >
                Source <ArrowUpRightIcon className="size-4" />
              </a>
            ) : null}
          </div>
        ) : null}
      </div>
    </article>
  );
}
