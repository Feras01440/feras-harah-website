import type { Metadata } from "next";

import { ClosingPanel } from "@/components/closing-panel";
import { CommunityCard } from "@/components/community-card";
import { EmptyState } from "@/components/empty-state";
import { MotionWrapper } from "@/components/motion-wrapper";
import { PageShell } from "@/components/page-shell";
import { SectionHeader } from "@/components/section-header";
import { SkillBadge } from "@/components/skill-badge";
import { TimelineItem } from "@/components/timeline-item";
import { communityEmptyState, communityIntro, publishedCommunityItems } from "@/content/community";
import { hobbiesEmptyState, hobbiesIntro, publishedHobbies } from "@/content/hobbies";
import { profile } from "@/content/profile";
import { publishedSkillGroups, skillsEmptyState, skillsIntro } from "@/content/skills";
import { publishedTimeline, timelineIntro } from "@/content/timeline";
import { createMetadata } from "@/lib/metadata";
import { getProfilePageJsonLd, serializeJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = createMetadata({
  title: "About",
  description: "The background, values, interests, and learning journey behind Feras Harah’s work in software engineering.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <PageShell
      eyebrow="About / Feras Harah"
      title="The person behind the projects."
      description={profile.about.introduction}
      aside={<div className="border-l-2 border-accent pl-5"><p className="eyebrow text-accent">Working principle</p><p className="mt-3 text-sm leading-7 text-muted">{profile.principle}</p></div>}
    >
      <script type="application/ld+json">{serializeJsonLd(getProfilePageJsonLd("/about"))}</script>
      <section className="section-pad" aria-labelledby="background-title">
        <div className="site-shell grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
          <SectionHeader id="background-title" eyebrow="Background" title="A foundation in engineering—and room to experiment." />
          <div className="space-y-6 text-base leading-8 text-muted sm:text-lg">
            <p>{profile.about.background}</p>
            <p>{profile.about.growthNote}</p>
            <div className="mt-8 rounded-[2rem] border border-line bg-surface p-6 shadow-soft sm:p-8">
              <p className="eyebrow text-accent">Current perspective</p>
              <p className="mt-5 text-base font-medium leading-8 text-ink">I learn fastest by building something real and getting straight feedback on it.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-surface section-pad" aria-labelledby="values-title">
        <div className="site-shell">
          <SectionHeader id="values-title" eyebrow="Values" title="Principles that shape how I want to work." description="These are simple on purpose. The challenge is practising them consistently." />
          <div className="mt-10 grid gap-px overflow-hidden rounded-[2rem] border border-line bg-line sm:grid-cols-2 lg:grid-cols-5 sm:mt-14">
            {profile.values.map((value, index) => (
              <MotionWrapper key={value.title} delay={index * 0.04} className="bg-canvas p-6">
                <span className="font-mono text-xs text-accent">0{index + 1}</span>
                <h3 className="mt-10 text-lg font-semibold tracking-[-0.03em] text-ink">{value.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted">{value.description}</p>
              </MotionWrapper>
            ))}
          </div>
        </div>
      </section>

      <section id="journey" className="section-pad" aria-labelledby="journey-title">
        <div className="site-shell grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
          <div>
            <SectionHeader id="journey-title" eyebrow="Journey" title="The chapter so far." description={timelineIntro} />
          </div>
          <ol>
            {publishedTimeline.map((item, index) => <TimelineItem key={item.id} item={item} index={index} />)}
          </ol>
        </div>
      </section>

      <section id="skills" className="border-y border-line bg-surface section-pad" aria-labelledby="skills-title">
        <div className="site-shell">
          <SectionHeader id="skills-title" eyebrow="Skills" title="What I can build with today." description={skillsIntro} />
          <div className="mt-10 sm:mt-14">
            {publishedSkillGroups.length ? (
              <div className="grid gap-6 lg:grid-cols-2">
                {publishedSkillGroups.map((group) => (
                  <section key={group.id} className="rounded-[2rem] border border-line bg-canvas p-6 sm:p-8">
                    <h3 className="text-xl font-semibold tracking-[-0.03em] text-ink">{group.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-muted">{group.description}</p>
                    <ul className="mt-6 space-y-3">{group.skills.map((skill) => <SkillBadge key={skill.id} skill={skill} />)}</ul>
                  </section>
                ))}
              </div>
            ) : (
              <EmptyState title="A concise skills summary is on the way" description={skillsEmptyState} />
            )}
          </div>
        </div>
      </section>

      <section id="beyond-code" className="section-pad" aria-labelledby="beyond-code-title">
        <div className="site-shell grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
          <SectionHeader id="beyond-code-title" eyebrow="Beyond code" title="The personal parts belong here too." description={hobbiesIntro} />
          <div>
            {publishedHobbies.length ? (
              <div className="grid gap-4 sm:grid-cols-2">{publishedHobbies.map((hobby) => <article key={hobby.id} className="rounded-[2rem] border border-line bg-surface p-6"><p className="eyebrow text-accent">{hobby.category}</p><h3 className="mt-5 text-xl font-semibold text-ink">{hobby.title}</h3><p className="mt-3 text-sm leading-7 text-muted">{hobby.description}</p></article>)}</div>
            ) : (
              <EmptyState title="This part of the story is still taking shape" description={hobbiesEmptyState} />
            )}
          </div>
        </div>
      </section>

      <section id="community" className="border-y border-line bg-surface section-pad" aria-labelledby="community-title">
        <div className="site-shell grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
          <SectionHeader id="community-title" eyebrow="Community" title="Making space for work that helps people." description={communityIntro} />
          <div>
            {publishedCommunityItems.length ? (
              <div className="space-y-4">{publishedCommunityItems.map((item) => <CommunityCard key={item.id} item={item} />)}</div>
            ) : (
              <EmptyState title="Community stories will be added with context" description={communityEmptyState} />
            )}
          </div>
        </div>
      </section>

      <ClosingPanel eyebrow="See the work" title="The next part of the story is what gets built." description="Each project lists its status, the hard parts, and what I learned." primaryHref="/projects" primaryLabel="Explore projects" secondaryHref="/updates" secondaryLabel="Read the notes" />
    </PageShell>
  );
}
