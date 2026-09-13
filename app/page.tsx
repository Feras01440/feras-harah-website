import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { ArrowRightIcon, CheckIcon, DownloadIcon } from "@/components/icons";
import { ButtonLink } from "@/components/button-link";
import { ClosingPanel } from "@/components/closing-panel";
import { HeroSection } from "@/components/hero-section";
import { MotionWrapper } from "@/components/motion-wrapper";
import { ProjectCard } from "@/components/project-card";
import { SectionHeader } from "@/components/section-header";
import { UpdateCard } from "@/components/update-card";
import { communityIntro } from "@/content/community";
import { hobbiesIntro } from "@/content/hobbies";
import { profile } from "@/content/profile";
import { featuredProjects } from "@/content/projects";
import { publishedSkills } from "@/content/skills";
import { publishedUpdates } from "@/content/updates";
import { isCvPreviewAvailable, isPublicCvAvailable } from "@/lib/cv";
import { getPublicEmail, hasPublicContact } from "@/lib/public-contact";

export const metadata: Metadata = {
  title: { absolute: profile.seo.title },
  description: profile.seo.description,
};

const toolkitLevels = [
  { level: "comfortable", label: "Comfortable" },
  { level: "learning", label: "Learning" },
] as const;

export default function HomePage() {
  const [leadProject, ...moreProjects] = featuredProjects;
  const latestUpdate = publishedUpdates[0];
  const hasPublicCv = isPublicCvAvailable();
  const hasCvPreview = isCvPreviewAvailable();
  const email = getPublicEmail();
  const isSeeking = profile.availability.status === "seeking";

  return (
    <>
      <HeroSection />

      <section className="section-pad" aria-labelledby="selected-work-title">
        <div className="site-shell">
          <div className="flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeader
              id="selected-work-title"
              eyebrow="Selected work"
              title="What I’ve built so far."
              description="Client work, team projects from Queen’s, and the engineering behind each one."
            />
            <ButtonLink href="/projects" variant="quiet" className="self-start lg:self-auto">
              All projects <ArrowRightIcon className="size-4" />
            </ButtonLink>
          </div>

          {leadProject ? (
            <MotionWrapper className="mt-10 sm:mt-14">
              <ProjectCard project={leadProject} featured />
            </MotionWrapper>
          ) : null}

          {moreProjects.length ? (
            <div className="mt-7 grid gap-7 md:grid-cols-2">
              {moreProjects.map((project, index) => (
                <MotionWrapper key={project.slug} delay={index * 0.05} className="h-full">
                  <ProjectCard project={project} index={index + 1} />
                </MotionWrapper>
              ))}
            </div>
          ) : null}
        </div>
      </section>

      <section className="border-y border-line bg-surface section-pad" aria-labelledby="growth-title">
        <div className="site-shell">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <SectionHeader
              id="growth-title"
              eyebrow="What I work on"
              title="Four areas, all backed by real work."
              description="Not a wishlist — each one comes from something I’ve actually built or done."
            />
            <div className="grid gap-px overflow-hidden rounded-[2rem] border border-line bg-line sm:grid-cols-2">
              {profile.about.interests.map((interest, index) => (
                <MotionWrapper key={interest.title} delay={index * 0.04} className="bg-canvas p-6 sm:p-7">
                  <span className="font-mono text-xs text-accent">0{index + 1}</span>
                  <h3 className="mt-10 text-xl font-semibold tracking-[-0.035em] text-ink">{interest.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted">{interest.description}</p>
                </MotionWrapper>
              ))}
            </div>
          </div>

          <div className="mt-12 rounded-[2rem] border border-line bg-canvas p-6 sm:mt-16 sm:p-8">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <h3 className="text-xl font-semibold tracking-[-0.03em] text-ink">Toolkit</h3>
              <Link
                href="/about#skills"
                className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-ink transition hover:text-accent"
              >
                Full skills breakdown <ArrowRightIcon className="size-4" />
              </Link>
            </div>
            <dl className="mt-5 space-y-5">
              {toolkitLevels.map(({ level, label }) => (
                <div key={level} className="grid gap-3 sm:grid-cols-[8.5rem_1fr] sm:items-start">
                  <dt className="eyebrow pt-2 text-accent">{label}</dt>
                  <dd>
                    <ul className="flex flex-wrap gap-2">
                      {publishedSkills
                        .filter((skill) => skill.level === level)
                        .map((skill) => (
                          <li
                            key={skill.id}
                            className="rounded-full border border-line bg-surface px-3 py-1.5 text-sm font-medium text-ink"
                          >
                            {skill.name}
                          </li>
                        ))}
                    </ul>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section className="section-pad" aria-labelledby="cv-home-title">
        <div className="site-shell grid overflow-hidden rounded-[2.5rem] border border-line bg-surface shadow-soft lg:grid-cols-[1fr_1fr]">
          <div className="quiet-noise relative flex min-h-72 items-end justify-center overflow-hidden bg-ink px-8 pt-12 sm:px-12 sm:pt-16">
            <div className="blueprint-grid absolute inset-0 opacity-25" />
            {hasCvPreview ? (
              <a
                href={profile.cv.publicPath}
                target="_blank"
                rel="noopener noreferrer"
                className="relative block h-72 w-full max-w-[22rem] overflow-hidden rounded-t-xl bg-white shadow-lift transition duration-300 hover:-translate-y-1 sm:h-80"
              >
                <Image
                  src={profile.cv.preview.src}
                  alt="Preview of the first page of Feras Harah’s CV (opens the PDF)"
                  width={profile.cv.preview.width}
                  height={profile.cv.preview.height}
                  sizes="(min-width: 1024px) 22rem, 90vw"
                  className="h-auto w-full"
                />
              </a>
            ) : (
              <div className="relative flex w-full flex-col justify-between gap-10 pb-8 text-canvas sm:pb-12">
                <DownloadIcon className="size-8 text-accent" />
                <span className="block text-6xl font-semibold tracking-[-0.07em]">CV / 01</span>
              </div>
            )}
          </div>
          <div className="flex flex-col justify-center p-8 sm:p-12">
            <p className="eyebrow text-accent">CV &amp; career hub</p>
            <h2 id="cv-home-title" className="text-balance mt-6 text-3xl font-semibold tracking-[-0.045em] text-ink sm:text-4xl">A concise view of education, projects, and development.</h2>
            <p className="mt-5 text-sm leading-7 text-muted">{profile.cv.summary}</p>
            <ul className="mt-6 space-y-3 text-sm leading-6 text-muted">
              {profile.cv.highlights.map((highlight) => (
                <li key={highlight} className="flex gap-3">
                  <CheckIcon className="mt-1 size-4 shrink-0 text-positive" /> {highlight}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              {hasPublicCv ? (
                <ButtonLink href={profile.cv.publicPath} download>
                  <DownloadIcon className="size-4" /> Download CV (PDF)
                </ButtonLink>
              ) : null}
              <ButtonLink href="/cv" variant={hasPublicCv ? "secondary" : "primary"}>
                View CV page <ArrowRightIcon className="size-4" />
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      {latestUpdate ? (
        <section className="border-y border-line bg-surface section-pad" aria-labelledby="latest-note-title">
          <div className="site-shell grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
            <div>
              <SectionHeader
                id="latest-note-title"
                eyebrow="Latest note"
                title="What I’m up to."
                description="Short notes on what I’m building, learning, and working towards."
              />
              <ButtonLink href="/updates" variant="quiet" className="mt-6">
                Browse updates <ArrowRightIcon className="size-4" />
              </ButtonLink>
            </div>
            <MotionWrapper>
              <UpdateCard update={latestUpdate} />
            </MotionWrapper>
          </div>
        </section>
      ) : null}

      <section className="pt-[clamp(4.5rem,8vw,8rem)]" aria-labelledby="beyond-code-title">
        <div className="site-shell">
          <h2 id="beyond-code-title" className="eyebrow mb-6 text-accent">Beyond code</h2>
          <div className="grid gap-5 md:grid-cols-2">
            <MotionWrapper className="h-full">
              <Link href="/about#beyond-code" className="card-lift block h-full rounded-[2rem] border border-line bg-surface p-7 shadow-soft sm:p-8">
                <h3 className="text-2xl font-semibold tracking-[-0.04em] text-ink">Interests, experiments, and the personal details.</h3>
                <p className="mt-4 text-sm leading-7 text-muted">{hobbiesIntro}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-ink">The personal side <ArrowRightIcon className="size-4" /></span>
              </Link>
            </MotionWrapper>
            <MotionWrapper delay={0.06} className="h-full">
              <Link href="/about#community" className="card-lift block h-full rounded-[2rem] border border-line bg-surface p-7 shadow-soft sm:p-8">
                <h3 className="text-2xl font-semibold tracking-[-0.04em] text-ink">Useful knowledge is better when it helps someone.</h3>
                <p className="mt-4 text-sm leading-7 text-muted">{communityIntro}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-ink">Community work <ArrowRightIcon className="size-4" /></span>
              </Link>
            </MotionWrapper>
          </div>
        </div>
      </section>

      <ClosingPanel
        eyebrow={hasPublicContact ? profile.availability.label : "Keep exploring"}
        title={
          hasPublicContact
            ? isSeeking
              ? "Looking for a placement student who ships real things?"
              : "Want to talk about something I’ve built?"
            : "See the work and thinking behind this growing space."
        }
        description={
          hasPublicContact
            ? `${profile.availability.sentence} If you’d like to talk — or want to see more of the work first — my inbox is open.`
            : "Projects and short updates offer the clearest view of what I am building and learning right now."
        }
        primaryHref={hasPublicContact ? "/contact" : "/projects"}
        primaryLabel={hasPublicContact ? "Contact me" : "Explore projects"}
        secondaryHref={email ? `mailto:${email}` : "/updates"}
        secondaryLabel={email ? "Email me directly" : "Read updates"}
      />
    </>
  );
}
