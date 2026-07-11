import Link from "next/link";
import type { ReactNode } from "react";

import { cn } from "@/lib/cn";
import { safeExternalUrl } from "@/lib/safe-url";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "quiet";
  external?: boolean;
  download?: boolean;
};

const styles = {
  primary:
    "border-ink bg-ink text-canvas hover:-translate-y-0.5 hover:bg-accent hover:border-accent hover:text-white",
  secondary:
    "border-line bg-surface text-ink hover:-translate-y-0.5 hover:border-accent hover:text-accent",
  quiet: "border-transparent bg-transparent text-ink hover:bg-surface hover:text-accent",
};

export function ButtonLink({
  href,
  children,
  className,
  variant = "primary",
  external = false,
  download = false,
}: ButtonLinkProps) {
  const classes = cn(
    "inline-flex min-h-11 items-center justify-center gap-2 rounded-full border px-5 py-2.5 text-sm font-semibold transition duration-200",
    styles[variant],
    className,
  );

  if (external) {
    const safeHref = safeExternalUrl(href);
    if (!safeHref) return null;

    return (
      <a
        href={safeHref}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
      >
        {children}
      </a>
    );
  }

  if (download) {
    return (
      <a href={href} download className={classes}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
