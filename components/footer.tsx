import Link from "next/link";

import { CopyButton } from "@/components/copy-button";
import { ArrowUpRightIcon } from "@/components/icons";
import { Logo } from "@/components/logo";
import { profile } from "@/content/profile";
import { getPublicEmail, getPublicSocialLinks } from "@/lib/public-contact";

const footerLinks = [
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/cv", label: "CV" },
  { href: "/updates", label: "Updates" },
  { href: "/contact", label: "Contact" },
] as const;

export function Footer() {
  const email = getPublicEmail();
  const socialLinks = getPublicSocialLinks();

  return (
    <footer className="border-t border-line bg-surface">
      <div className="site-shell py-12 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_0.7fr_1fr]">
          <div>
            <Logo />
            <p className="mt-5 max-w-md text-sm leading-7 text-muted">
              Software Engineering student in Belfast, building useful things.{" "}
              {profile.availability.sentence}
            </p>
          </div>

          <div>
            <p className="eyebrow mb-4 text-subtle">Explore</p>
            <ul className="space-y-1">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="inline-flex min-h-11 items-center text-sm font-medium text-muted transition hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {email || socialLinks.length ? (
            <div>
              <p className="eyebrow mb-4 text-subtle">Get in touch</p>
              <ul className="space-y-1">
                {email ? (
                  <li className="flex flex-wrap items-center gap-x-4">
                    <a
                      href={`mailto:${email}`}
                      className="inline-flex min-h-11 items-center text-sm font-medium text-muted transition hover:text-accent wrap-anywhere"
                    >
                      {email}
                    </a>
                    <CopyButton
                      value={email}
                      label="Copy"
                      hiddenLabel="email address"
                      className="text-xs text-subtle hover:text-accent"
                    />
                  </li>
                ) : null}
                {socialLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-11 items-center gap-2 text-sm font-medium text-muted transition hover:text-accent"
                    >
                      {link.label}
                      <ArrowUpRightIcon className="size-3.5" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-line pt-6 text-xs leading-5 text-subtle sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Feras Harah. Built with care.</p>
          <p>No tracking, cookies, or third-party scripts.</p>
        </div>
      </div>
    </footer>
  );
}
