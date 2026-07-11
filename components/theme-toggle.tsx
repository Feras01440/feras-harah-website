"use client";

import { useSyncExternalStore } from "react";

import { MoonIcon, SunIcon } from "@/components/icons";

type Theme = "light" | "dark";
const themeEvent = "feras-theme-change";

function preferredTheme(): Theme {
  try {
    const saved = window.localStorage.getItem("theme");
    if (saved === "light" || saved === "dark") return saved;
  } catch {
    // Storage can be unavailable in hardened browsing modes; system preference
    // remains a safe, privacy-preserving fallback.
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function getThemeSnapshot(): Theme {
  const appliedTheme = document.documentElement.dataset.theme;
  return appliedTheme === "light" || appliedTheme === "dark"
    ? appliedTheme
    : preferredTheme();
}

function subscribeToTheme(callback: () => void) {
  const media = window.matchMedia("(prefers-color-scheme: dark)");
  window.addEventListener(themeEvent, callback);
  media.addEventListener("change", callback);

  return () => {
    window.removeEventListener(themeEvent, callback);
    media.removeEventListener("change", callback);
  };
}

export function ThemeToggle() {
  const theme = useSyncExternalStore(
    subscribeToTheme,
    getThemeSnapshot,
    () => "light",
  );

  function toggleTheme() {
    const nextTheme: Theme = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = nextTheme;
    try {
      window.localStorage.setItem("theme", nextTheme);
    } catch {
      // The theme still applies for this page view when storage is unavailable.
    }
    window.dispatchEvent(new Event(themeEvent));
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="grid size-11 place-items-center rounded-full border border-line bg-surface text-muted transition hover:border-accent hover:text-accent"
      aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
      aria-pressed={theme === "dark"}
    >
      <span className="theme-icon-dark"><SunIcon className="size-[1.1rem]" /></span>
      <span className="theme-icon-light"><MoonIcon className="size-[1.1rem]" /></span>
    </button>
  );
}
