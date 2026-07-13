import Link from "next/link";

import { ArrowUpRightIcon } from "@/components/icons";
import { Logo } from "@/components/logo";
import { profile } from "@/content/profile";
import type { PublicDetail } from "@/content/types";
import { getSafeSocialUrl } from "@/lib/safe-url";

const footerLinks = [
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/cv", label: "CV" },
  { href: "/updates", label: "Updates" },
  { href: "/contact", label: "Contact" },
] as const;

export function Footer() {
  const contactMethods: readonly PublicDetail[] = profile.contact.methods;
  const socialLinks = contactMethods.flatMap((method) => {
    if (
      !method.published ||
      (method.kind !== "github" && method.kind !== "linkedin")
    ) {
      return [];
    }

    const href = getSafeSocialUrl(method.kind, method.href);
    return href ? [{ label: method.label, href }] : [];
  });

  return (
    <footer className="border-t border-line bg-surface">
      <div className="site-shell py-12 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_0.8fr_0.8fr]">
          <div>
            <Logo />
            <p className="mt-5 max-w-md text-sm leading-7 text-muted">
              Software Engineering student in Belfast, building useful things
              and looking for a 2026–27 industrial placement.
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

          <div>
            <p className="eyebrow mb-4 text-subtle">Elsewhere</p>
            {socialLinks.length ? (
              <ul className="space-y-1">
                {socialLinks.map((link) => (
                  <li key={link.label}>
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
            ) : (
              <p className="max-w-[15rem] text-sm leading-6 text-subtle">
                Social profiles will appear here when they are ready to share.
              </p>
            )}
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-line pt-6 text-xs leading-5 text-subtle sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Feras Harah. Built with care.</p>
          <p>No tracking, cookies, or third-party scripts.</p>
        </div>
      </div>
    </footer>
  );
}
