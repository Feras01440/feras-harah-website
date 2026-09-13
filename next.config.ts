import type { NextConfig } from "next";

import { profile } from "./content/profile";

type SecurityHeader = {
  key: string;
  value: string;
};

const isDevelopment = process.env.NODE_ENV === "development";

const contentSecurityPolicy = [
  "default-src 'self'",
  "base-uri 'self'",
  "connect-src 'self'" + (isDevelopment ? " ws: wss:" : ""),
  "font-src 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
  "frame-src 'self'",
  "img-src 'self' data: blob:",
  "manifest-src 'self'",
  "media-src 'self'",
  "object-src 'none'",
  "script-src 'self' 'unsafe-inline'" +
    (isDevelopment ? " 'unsafe-eval'" : ""),
  "style-src 'self' 'unsafe-inline'",
  "worker-src 'self' blob:",
  ...(isDevelopment ? [] : ["upgrade-insecure-requests"]),
].join("; ");

const pdfContentSecurityPolicy = [
  "default-src 'none'",
  "base-uri 'none'",
  "frame-ancestors 'self'",
  "object-src 'none'",
].join("; ");

const commonSecurityHeaders: SecurityHeader[] = [
  {
    key: "Cross-Origin-Opener-Policy",
    value: "same-origin",
  },
  {
    key: "Cross-Origin-Resource-Policy",
    value: "same-origin",
  },
  {
    key: "Permissions-Policy",
    value:
      "accelerometer=(), autoplay=(), browsing-topics=(), camera=(), display-capture=(), encrypted-media=(), fullscreen=(self), geolocation=(), gyroscope=(), magnetometer=(), microphone=(), payment=(), picture-in-picture=(), publickey-credentials-get=(), usb=()",
  },
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "X-DNS-Prefetch-Control",
    value: "off",
  },
  {
    key: "X-Permitted-Cross-Domain-Policies",
    value: "none",
  },
];

if (!isDevelopment) {
  commonSecurityHeaders.push({
    key: "Strict-Transport-Security",
    value: "max-age=31536000",
  });
}

function wwwToApexRedirect() {
  const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL;
  if (!configuredUrl) return [];

  const { hostname, origin } = new URL(configuredUrl);
  if (hostname === "localhost" || hostname === "127.0.0.1" || hostname.startsWith("www.")) {
    return [];
  }

  return [
    {
      source: "/:path*",
      has: [{ type: "host" as const, value: `www\\.${hostname.replaceAll(".", "\\.")}` }],
      destination: `${origin}/:path*`,
      permanent: true,
    },
  ];
}

const nextConfig: NextConfig = {
  allowedDevOrigins: ["127.0.0.1"],
  poweredByHeader: false,
  async redirects() {
    return [
      ...wwwToApexRedirect(),
      {
        source: "/cv.pdf",
        destination: profile.cv.publicPath,
        permanent: false,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          ...commonSecurityHeaders,
          {
            key: "Content-Security-Policy",
            value: contentSecurityPolicy,
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
        ],
      },
      {
        // Later matching headers override the normal page policy for CV files.
        // `:path+` needs at least one segment; `:path*` would also match the /cv page and block its assets.
        source: "/cv/:path+",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=0, must-revalidate",
          },
          {
            key: "Content-Security-Policy",
            value: pdfContentSecurityPolicy,
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
