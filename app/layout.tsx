import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";

import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { profile } from "@/content/profile";
import { getSiteUrl } from "@/lib/metadata";
import { getSiteJsonLd, serializeJsonLd } from "@/lib/structured-data";

import "./globals.css";

// Self-hosted at build time; no request leaves the site's origin at runtime.
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const themeInitScript = `try{var t=localStorage.getItem("theme");if(t!=="light"&&t!=="dark"){t=matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}document.documentElement.dataset.theme=t}catch(e){}`;

// Static, reviewed content only — visitor input never reaches this JSON.
const siteJsonLd = serializeJsonLd(getSiteJsonLd());

export const metadata: Metadata = {
  metadataBase: getSiteUrl(),
  title: {
    default: profile.seo.title,
    template: `%s | ${profile.name}`,
  },
  description: profile.seo.description,
  applicationName: `${profile.name} — Personal website`,
  authors: [{ name: profile.name }],
  creator: profile.name,
  category: "technology",
  alternates: { canonical: "/" },
  openGraph: {
    title: profile.seo.title,
    description: profile.seo.description,
    url: "/",
    siteName: profile.name,
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: profile.seo.title,
    description: profile.seo.description,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f4f2ec" },
    { media: "(prefers-color-scheme: dark)", color: "#0b0d12" },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en-GB" className={inter.variable} suppressHydrationWarning>
      <head>
        <script id="theme-init">{themeInitScript}</script>
        <script type="application/ld+json">{siteJsonLd}</script>
      </head>
      {/* suppressHydrationWarning: browser extensions like Grammarly inject
          attributes into <body> before React hydrates. */}
      <body suppressHydrationWarning>
        <a
          href="#main-content"
          className="fixed left-4 top-3 z-[100] -translate-y-24 rounded-full bg-ink px-5 py-3 text-sm font-semibold text-canvas transition focus:translate-y-0"
        >
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
