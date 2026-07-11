import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const shared = {
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

export function ArrowRightIcon(props: IconProps) {
  return (
    <svg {...shared} {...props}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function ArrowUpRightIcon(props: IconProps) {
  return (
    <svg {...shared} {...props}>
      <path d="M7 17 17 7M8 7h9v9" />
    </svg>
  );
}

export function DownloadIcon(props: IconProps) {
  return (
    <svg {...shared} {...props}>
      <path d="M12 3v12m0 0 5-5m-5 5-5-5M5 21h14" />
    </svg>
  );
}

export function MenuIcon(props: IconProps) {
  return (
    <svg {...shared} {...props}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

export function CloseIcon(props: IconProps) {
  return (
    <svg {...shared} {...props}>
      <path d="m6 6 12 12M18 6 6 18" />
    </svg>
  );
}

export function SunIcon(props: IconProps) {
  return (
    <svg {...shared} {...props}>
      <circle cx="12" cy="12" r="3.5" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42" />
    </svg>
  );
}

export function MoonIcon(props: IconProps) {
  return (
    <svg {...shared} {...props}>
      <path d="M21 15.5A9 9 0 1 1 8.5 3 7 7 0 0 0 21 15.5Z" />
    </svg>
  );
}

export function MailIcon(props: IconProps) {
  return (
    <svg {...shared} {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}

export function CodeIcon(props: IconProps) {
  return (
    <svg {...shared} {...props}>
      <path d="m8 9-3 3 3 3m8-6 3 3-3 3m-2-9-4 12" />
    </svg>
  );
}

export function LinkedInIcon(props: IconProps) {
  return (
    <svg {...shared} {...props}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6ZM2 9h4v12H2z" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export function MapPinIcon(props: IconProps) {
  return (
    <svg {...shared} {...props}>
      <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

export function CheckIcon(props: IconProps) {
  return (
    <svg {...shared} {...props}>
      <path d="m5 12 4 4L19 6" />
    </svg>
  );
}

export function SparkIcon(props: IconProps) {
  return (
    <svg {...shared} {...props}>
      <path d="m12 3 1.35 4.15a5.5 5.5 0 0 0 3.5 3.5L21 12l-4.15 1.35a5.5 5.5 0 0 0-3.5 3.5L12 21l-1.35-4.15a5.5 5.5 0 0 0-3.5-3.5L3 12l4.15-1.35a5.5 5.5 0 0 0 3.5-3.5L12 3Z" />
    </svg>
  );
}

export function DocumentIcon(props: IconProps) {
  return (
    <svg {...shared} {...props}>
      <path d="M6 2h8l4 4v16H6z" />
      <path d="M14 2v5h5M9 13h6M9 17h6" />
    </svg>
  );
}
