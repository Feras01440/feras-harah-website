import { ArrowRightIcon, DownloadIcon, MailIcon, SparkIcon } from "@/components/icons";
import { ButtonLink } from "@/components/button-link";
import { MotionWrapper } from "@/components/motion-wrapper";
import { profile } from "@/content/profile";
import { isPublicCvAvailable } from "@/lib/cv";

export function HeroSection() {
  const hasPublicContact = profile.contact.methods.some(
    (method) => method.published,
  );
  const hasPublicCv = isPublicCvAvailable();

  return (
    <section className="relative isolate min-h-[calc(100svh-4.75rem)] overflow-hidden border-b border-line">
      <div className="blueprint-grid absolute inset-0 -z-20 opacity-50" />
      <div className="absolute -right-32 top-16 -z-10 size-[28rem] rounded-full border border-accent/20 sm:size-[40rem]" />
      <div className="absolute -right-20 top-28 -z-10 size-[20rem] rounded-full border border-accent/15 sm:size-[30rem]" />

      <div className="site-shell grid min-h-[calc(100svh-4.75rem)] items-center gap-12 py-14 lg:grid-cols-[minmax(0,1fr)_20rem] lg:py-20">
        <MotionWrapper>
          <div className="flex items-center gap-3">
            <span className="size-2 rounded-full bg-accent" aria-hidden="true" />
            <p className="eyebrow text-muted">{profile.eyebrow}</p>
          </div>

          <h1 className="text-balance mt-7 max-w-5xl text-[clamp(4.2rem,12vw,9.5rem)] font-semibold leading-[0.82] tracking-[-0.085em] text-ink">
            Feras
            <span className="block text-accent">Harah.</span>
          </h1>

          <p className="mt-8 max-w-2xl text-base leading-8 text-muted sm:text-lg">
            {profile.heroIntro}
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <ButtonLink href="/projects">
              View projects <ArrowRightIcon className="size-4" />
            </ButtonLink>
            <ButtonLink href="/cv" variant="secondary">
              <DownloadIcon className="size-4" />
              {hasPublicCv ? "Download CV" : "View CV"}
            </ButtonLink>
            {hasPublicContact ? (
              <ButtonLink href="/contact" variant="quiet">
                <MailIcon className="size-4" /> Contact me
              </ButtonLink>
            ) : null}
          </div>
        </MotionWrapper>

        <MotionWrapper delay={0.12} className="lg:self-end lg:pb-2">
          <aside className="hairline-top rounded-[2rem] border border-line bg-surface/90 p-6 shadow-soft backdrop-blur sm:p-7">
            <div className="flex items-center justify-between pt-1">
              <p className="eyebrow text-accent">Current chapter</p>
              <SparkIcon className="size-4 text-accent" />
            </div>
            <p className="mt-6 text-sm leading-7 text-muted">
              {profile.currentChapter}
            </p>
            <dl className="mt-7 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line">
              <div className="bg-canvas p-4">
                <dt className="font-mono text-[0.6rem] uppercase tracking-[0.12em] text-subtle">
                  Seeking
                </dt>
                <dd className="mt-2 text-sm font-semibold text-ink">Placement 2026–27</dd>
              </div>
              <div className="bg-canvas p-4">
                <dt className="font-mono text-[0.6rem] uppercase tracking-[0.12em] text-subtle">
                  Based in
                </dt>
                <dd className="mt-2 text-sm font-semibold text-ink">Belfast, NI</dd>
              </div>
            </dl>
          </aside>
        </MotionWrapper>
      </div>

      <div className="pointer-events-none absolute bottom-5 left-1/2 hidden -translate-x-1/2 items-center gap-3 text-subtle lg:flex">
        <span className="h-px w-12 bg-line" />
        <span className="font-mono text-[0.62rem] uppercase tracking-[0.15em]">Scroll to explore</span>
        <span className="h-px w-12 bg-line" />
      </div>
    </section>
  );
}
