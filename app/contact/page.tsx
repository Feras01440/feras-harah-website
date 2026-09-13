import type { Metadata } from "next";

import { ContactCard } from "@/components/contact-card";
import { ContactForm } from "@/components/contact-form";
import { PageShell } from "@/components/page-shell";
import { profile } from "@/content/profile";
import type { PublicDetail } from "@/content/types";
import { createMetadata } from "@/lib/metadata";
import { getPublicEmail, hasPublicContact } from "@/lib/public-contact";

export const metadata: Metadata = createMetadata({
  title: "Contact",
  description: "Contact Feras Harah about an opportunity, project, collaboration, or thoughtful software engineering conversation.",
  path: "/contact",
});

if (!hasPublicContact) {
  metadata.robots = { index: false, follow: true };
}

export default function ContactPage() {
  const contactMethods: readonly PublicDetail[] = profile.contact.methods;
  const publicMethods = contactMethods.filter((method) => method.published);

  return (
    <PageShell
      eyebrow="Contact / Say hello"
      title="A simple way to start a genuine conversation."
      description={profile.contact.introduction}
      aside={<div><p className="eyebrow text-accent">Response time</p><p className="mt-3 text-sm leading-7 text-muted">I check this inbox daily and usually reply within a day or two.</p></div>}
    >
      <section className="section-pad">
        <div className="site-shell grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-14">
          <aside>
            <p className="eyebrow text-accent">Contact details</p>
            <h2 className="mt-5 text-2xl font-semibold tracking-[-0.04em] text-ink">Choose the route that feels natural.</h2>
            <p className="mt-4 text-sm leading-7 text-muted">
              {publicMethods.length ? "Email is the quickest way to reach me." : profile.contact.unavailableMessage}
            </p>
            {publicMethods.length ? (
              <div className="mt-7 space-y-3">{publicMethods.map((method) => <ContactCard key={method.id} detail={method} />)}</div>
            ) : null}
            <div className="mt-8 border-t border-line pt-6">
              <p className="eyebrow text-subtle">Good reasons to write</p>
              <ul className="mt-4 space-y-2 text-sm leading-6 text-muted">
                <li>Placements or early-career opportunities</li>
                <li>A project or idea worth discussing</li>
                <li>Constructive feedback or a useful resource</li>
                <li>A community or student collaboration</li>
              </ul>
            </div>
          </aside>
          <ContactForm recipientEmail={getPublicEmail()} />
        </div>
      </section>
    </PageShell>
  );
}
