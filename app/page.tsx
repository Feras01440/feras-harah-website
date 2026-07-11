import type { Metadata } from "next";
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
import { publishedUpdates } from "@/content/updates";

export const metadata: Metadata = {
  title: { absolute: profile.seo.title },
  description: profile.seo.description,
};

export default function HomePage() {
  const featuredProject = featuredProjects[0];
  const latestUpdate = publishedUpdates[0];
  const hasPublicContact = profile.contact.methods.some(
    (method) => method.published,
  );

  return (
    <>
      <HeroSection />

      <section className="section-pad" aria-labelledby="selected-work-title">
        <div className="site-shell">
          <div className="flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeader
              id="selected-work-title"
              eyebrow="Selected work"
              title="A focused first project, built to grow."
              description="This site is the first published entry: a practical platform for future work, notes, and ideas. More projects will follow with the context they deserve."
            />
            <ButtonLink href="/projects" variant="quiet" className="self-start lg:self-auto">
              All projects <ArrowRightIcon className="size-4" />
            </ButtonLink>
          </div>

          {featuredProject ? (
            <MotionWrapper className="mt-10 sm:mt-14">
              <ProjectCard project={featuredProject} featured />
            </MotionWrapper>
          ) : null}
        </div>
      </section>

      <section className="border-y border-line bg-surface section-pad" aria-labelledby="growth-title">
        <div className="site-shell grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <SectionHeader
            id="growth-title"
            eyebrow="Areas in motion"
              title="Developing range, with plenty still to learn."
            description="These are the kinds of work and thinking I want to get better at as my degree and personal projects progress."
          />
          <div className="grid gap-px overflow-hidden rounded-[2rem] border border-line bg-line sm:grid-cols-2">
            {profile.about.interests.map((interest, index) => (
              <MotionWrapper key={interest} delay={index * 0.04} className="bg-canvas p-6 sm:p-7">
                <span className="font-mono text-xs text-accent">0{index + 1}</span>
                <h3 className="mt-10 text-xl font-semibold tracking-[-0.035em] text-ink">{interest}</h3>
                <p className="mt-3 text-sm leading-7 text-muted">
                  An active area for practice, reflection, and stronger future work.
                </p>
              </MotionWrapper>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad" aria-labelledby="more-than-code-title">
        <div className="site-shell">
          <SectionHeader
            id="more-than-code-title"
            eyebrow="A wider personal space"
            title="More than a project gallery."
            description="This site is designed to grow with the personal, creative, and community parts of life—not just coursework and code."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 sm:mt-14">
            <MotionWrapper>
              <Link href="/about#beyond-code" className="card-lift block h-full rounded-[2rem] border border-line bg-surface p-7 shadow-soft sm:p-9">
                <p className="eyebrow text-accent">Beyond code</p>
                <h3 className="mt-8 text-2xl font-semibold tracking-[-0.04em] text-ink">Interests, experiments, and the human details.</h3>
                <p className="mt-4 text-sm leading-7 text-muted">{hobbiesIntro}</p>
                <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-ink">About this space <ArrowRightIcon className="size-4" /></span>
              </Link>
            </MotionWrapper>
            <MotionWrapper delay={0.06}>
              <Link href="/about#community" className="card-lift block h-full rounded-[2rem] border border-line bg-surface p-7 shadow-soft sm:p-9">
                <p className="eyebrow text-accent">Community</p>
                <h3 className="mt-8 text-2xl font-semibold tracking-[-0.04em] text-ink">Useful knowledge is better when it helps someone.</h3>
                <p className="mt-4 text-sm leading-7 text-muted">{communityIntro}</p>
                <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-ink">See the intention <ArrowRightIcon className="size-4" /></span>
              </Link>
            </MotionWrapper>
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
                title="Documenting the process, selectively."
                description="Short updates on what I am building, learning, reconsidering, or preparing to explore next."
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

      <section className="section-pad" aria-labelledby="cv-home-title">
        <div className="site-shell grid overflow-hidden rounded-[2.5rem] border border-line bg-surface shadow-soft lg:grid-cols-[1fr_1fr]">
          <div className="quiet-noise relative min-h-72 overflow-hidden bg-ink p-8 text-canvas sm:p-12">
            <div className="blueprint-grid absolute inset-0 opacity-25" />
            <div className="relative flex h-full flex-col justify-between">
              <DownloadIcon className="size-8 text-accent" />
              <div>
                <span className="block font-mono text-xs uppercase tracking-[0.15em] text-canvas/50">Public document</span>
                <span className="mt-4 block text-6xl font-semibold tracking-[-0.07em]">CV / 01</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center p-8 sm:p-12">
            <p className="eyebrow text-accent">CV &amp; career hub</p>
            <h2 id="cv-home-title" className="text-balance mt-6 text-3xl font-semibold tracking-[-0.045em] text-ink sm:text-4xl">A concise view of education, projects, and development.</h2>
            <p className="mt-5 text-sm leading-7 text-muted">{profile.cv.summary}</p>
            <ul className="mt-6 space-y-3 text-sm text-muted">
              <li className="flex gap-3"><CheckIcon className="mt-0.5 size-4 shrink-0 text-positive" /> A short introduction before the PDF</li>
              <li className="flex gap-3"><CheckIcon className="mt-0.5 size-4 shrink-0 text-positive" /> PDF preview and download when available</li>
              <li className="flex gap-3"><CheckIcon className="mt-0.5 size-4 shrink-0 text-positive" /> Intentionally public, never hidden by accident</li>
            </ul>
            <ButtonLink href="/cv" className="mt-8 self-start">View CV page <ArrowRightIcon className="size-4" /></ButtonLink>
          </div>
        </div>
      </section>

      <ClosingPanel
        eyebrow={hasPublicContact ? "A good next conversation" : "Keep exploring"}
        title={hasPublicContact ? "Have an opportunity, useful idea, or thoughtful question?" : "See the work and thinking behind this growing space."}
        description={hasPublicContact ? "I am building this space as a clearer way to share what I am learning and open the door to genuine conversations." : "Projects and short updates offer the clearest view of what I am building and learning right now."}
        primaryHref={hasPublicContact ? "/contact" : "/projects"}
        primaryLabel={hasPublicContact ? "Contact me" : "Explore projects"}
        secondaryHref={hasPublicContact ? "/about" : "/updates"}
        secondaryLabel={hasPublicContact ? "Learn more first" : "Read updates"}
      />
    </>
  );
}
