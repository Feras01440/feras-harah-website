"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import { CloseIcon, MenuIcon } from "@/components/icons";
import { Logo } from "@/components/logo";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/cn";

const navigation = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/cv", label: "CV" },
  { href: "/updates", label: "Updates" },
  { href: "/contact", label: "Contact" },
] as const;

function isCurrent(pathname: string, href: string) {
  return href === "/" ? pathname === href : pathname.startsWith(href);
}

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleKeydown(event: KeyboardEvent) {
      if (event.key === "Escape" && open) {
        setOpen(false);
        menuButtonRef.current?.focus();
      }
    }

    document.addEventListener("keydown", handleKeydown);
    return () => document.removeEventListener("keydown", handleKeydown);
  }, [open]);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 1024px)");
    const closeAfterResize = (event: MediaQueryListEvent) => {
      if (event.matches) setOpen(false);
    };

    desktop.addEventListener("change", closeAfterResize);
    return () => desktop.removeEventListener("change", closeAfterResize);
  }, []);

  useEffect(() => {
    const main = document.querySelector("main");
    const footer = document.querySelector("footer");

    document.body.style.overflow = open ? "hidden" : "";
    main?.toggleAttribute("inert", open);
    footer?.toggleAttribute("inert", open);

    if (open) {
      mobileMenuRef.current?.querySelector<HTMLAnchorElement>("a")?.focus();
    }

    return () => {
      document.body.style.overflow = "";
      main?.removeAttribute("inert");
      footer?.removeAttribute("inert");
    };
  }, [open]);

  return (
    <nav
      aria-label="Primary navigation"
      className="sticky top-0 z-50 border-b border-line/80 bg-canvas/88 backdrop-blur-xl"
    >
      <div className="site-shell flex h-[4.75rem] items-center justify-between gap-4">
        <Logo />

        <div className="hidden items-center gap-1 lg:flex">
          {navigation.map((item) => {
            const current = isCurrent(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={current ? "page" : undefined}
                className={cn(
                  "relative flex min-h-11 items-center rounded-full px-4 text-sm font-medium transition-colors",
                  current
                    ? "bg-surface text-ink shadow-soft"
                    : "text-muted hover:bg-surface hover:text-ink",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            ref={menuButtonRef}
            type="button"
            className="grid size-11 place-items-center rounded-full border border-line bg-surface text-ink lg:hidden"
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? (
              <CloseIcon className="size-5" />
            ) : (
              <MenuIcon className="size-5" />
            )}
          </button>
        </div>
      </div>

      <div
        ref={mobileMenuRef}
        id="mobile-navigation"
        hidden={!open}
        className="fixed inset-x-0 top-[4.75rem] h-[calc(100dvh-4.75rem)] overflow-y-auto overscroll-contain border-t border-line bg-canvas lg:hidden"
      >
        <div className="site-shell flex h-full flex-col py-6">
          <div className="flex flex-col">
            {navigation.map((item, index) => {
              const current = isCurrent(pathname, item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={current ? "page" : undefined}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "flex min-h-14 items-center justify-between border-b border-line py-3 text-xl font-semibold tracking-[-0.03em]",
                    current ? "text-accent" : "text-ink",
                  )}
                >
                  <span>{item.label}</span>
                  <span className="font-mono text-xs text-subtle">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </Link>
              );
            })}
          </div>
          <p className="mt-auto max-w-xs pb-4 text-sm leading-6 text-muted">
            A personal space for useful work, careful learning, and the things
            worth sharing.
          </p>
        </div>
      </div>
    </nav>
  );
}
