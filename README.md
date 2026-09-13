# Feras Harah — personal website

[![CI](https://github.com/Feras01440/feras-harah-website/actions/workflows/ci.yml/badge.svg)](https://github.com/Feras01440/feras-harah-website/actions/workflows/ci.yml)

A content-driven personal website for Feras Harah, live at
[ferasharah.com](https://ferasharah.com), built with Next.js App Router,
TypeScript, Tailwind CSS, and Motion. The site is deliberately static-first: it
has no database, analytics, cookies, third-party scripts, or message-processing
backend.

The editable content lives in typed files under `content/`. Draft and template
entries remain out of public views until they are explicitly published.

## Local setup

### Requirements

- Node.js 20.9 or newer (CI uses Node.js 22).
- pnpm 11.7 or newer. This project intentionally uses pnpm because its committed
  workspace policy pins the audited PostCSS override and allowlists only two
  reviewed dependency build scripts.
- Chrome or Edge, only if you rebuild the CV with `pnpm cv`.

### Install and run

| Task | Command |
| --- | --- |
| Install | `pnpm install` |
| Start development | `pnpm dev` |
| Lint | `pnpm lint` |
| Type-check | `pnpm typecheck` |
| Production build | `pnpm build` |
| Start the production build | `pnpm start` |
| Rebuild the CV PDF and preview image | `pnpm cv` |
| Check that the newest update is recent | `pnpm check:freshness` |

The development site is available at `http://localhost:3000` by default.

Create `.env.local` in the repository root using `.env.example` as the model:

```dotenv
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

`.env.local` is ignored by Git. The current variable is not a secret, however:
every `NEXT_PUBLIC_*` value is included in browser-facing output.
Vercel and Netlify builds fail clearly when this value is missing, preventing a
public deployment from publishing localhost canonical URLs.

## Where to edit content

These are the exact content files used by the site:

| File | What it controls |
| --- | --- |
| `content/profile.ts` | Name, availability status, role, biography, values, contact methods, CV state, and core SEO copy |
| `content/projects.ts` | Projects, status, technologies, lessons, links, screenshots, and featured state |
| `content/skills.ts` | Skill groups and honest `comfortable`, `learning`, or `exploring` levels |
| `content/timeline.ts` | Education, project, learning, and goal milestones |
| `content/updates.ts` | Short learning, project, personal, site, and community notes |
| `content/hobbies.ts` | Personal, creative, media, technology, learning, and sport interests |
| `content/community.ts` | Community help, local projects, resources, and small-business ideas |
| `content/types.ts` | Shared schemas and publication-state rules; change this only when the content model itself changes |
| `cv-source/Feras-Harah-CV.html` | The source for the downloadable CV (see [CV](#cv)) |

Keep content factual. Do not publish inferred dates, private details, invented
experience, unconfirmed team contributions, or links that have not been opened
and checked.

### Keep the site current

A stale status reads as an abandoned site. Whenever the situation changes — a
placement is secured, a project launches, a new term starts:

1. Update `profile.availability` in `content/profile.ts` (`status`, `label`,
   `seeking`, and `sentence`). The hero, footer, homepage closing panel, CV page
   metadata, and social preview image all read from it.
2. Update the free-text lines beside it: `heroIntro`, `currentChapter`, and
   `seo.description`, plus the `Now` entry in `content/timeline.ts`.
3. Add a short dated note to `content/updates.ts`.
4. Update `cv-source/Feras-Harah-CV.html` and run `pnpm cv`.

The `Content freshness` GitHub Action runs on the first day of each month and
fails — which sends GitHub's failure email — when the newest update is more than
90 days old.

### Drafts, templates, and published entries

Every list entry uses one valid publication-state combination:

| State | `publicationStatus` | `published` | `isPlaceholder` |
| --- | --- | --- | --- |
| Real content still being reviewed | `"draft"` | `false` | `false` |
| Editing template, not a real claim | `"template"` | `false` | `true` |
| Reviewed public content | `"published"` | `true` | `false` |

The exported public collections filter on `published`. Changing only a title or
removing a card visually is not enough to make information private. TypeScript
rejects mismatched publication flags.

### Add a project

1. Add a new object to `projects` in `content/projects.ts` with a unique,
   URL-friendly `slug`.
2. Fill in the real description, status, technologies, learnings, and
   challenges. Use only public screenshots and checked HTTPS links. Screenshots
   go under `public/images/projects/` and are referenced with the `image` field
   (`src` plus descriptive `alt` text).
3. Begin with the draft state:

   ```ts
   publicationStatus: "draft",
   published: false,
   isPlaceholder: false,
   ```

4. Run lint, type-checking, and a production build. Review the project on mobile
   and desktop.
5. When every claim and link is ready, switch all three fields together:

   ```ts
   publicationStatus: "published",
   published: true,
   isPlaceholder: false,
   ```

Set `featured: true` for projects that should appear on the homepage; the first
featured project gets the large card. Do not publish a `*-template` slug or
generic template title.

### Add an update or note

Add an object to `updates` in `content/updates.ts`. Use a unique slug, one of the
allowed categories, a required ISO `publishedAt` date such as `2026-09-13`, and
an array of plain-text paragraphs in `body`. Updates are sorted newest first by
`publishedAt`, so their position in the array does not matter. The card shows
the month and year automatically; set `dateLabel` only to override that text.
Start as a draft and use the same three-field publishing workflow shown above.
Content is rendered as text; do not add raw HTML.

The same publication workflow applies to skills, timeline entries, hobbies, and
community items.

## Contact details and mailto behavior

Contact methods are in `profile.contact.methods` in `content/profile.ts`. A
published email entry should use a hardcoded `mailto:` destination, for example:

```ts
{
  id: "public-email",
  kind: "email",
  label: "Email",
  displayValue: "hello@example.com",
  href: "mailto:hello@example.com",
  publicationStatus: "published",
  published: true,
  isPlaceholder: false,
}
```

Published email and social links flow automatically into the contact page, the
footer, the homepage closing panel, and the Person structured data.

The contact form does not submit to this website. It validates and normalises
the fields, then opens the visitor's configured email application with an
encoded draft. Messages are capped at 1,000 characters so the encoded draft stays
within the URL limits of older desktop mail clients. The site must never claim
that a message was sent, and it does not store the message. If no email
application opens, the form shows the address with buttons to copy the message
and the address.

If a real contact endpoint is added later, it needs server-side validation,
body-size limits, origin checks, rate limiting, spam protection, server-only
provider credentials, safe plain-text output, redacted logs, and a documented
retention policy. See `SECURITY.md` before making that change.

## CV

The CV is written as HTML in `cv-source/Feras-Harah-CV.html`. After editing it,
run:

```bash
pnpm cv
```

The script uses a local Chrome or Edge installation (set `CHROME_PATH` if it is
not found) to produce:

- `public/cv/Feras-Harah-CV.pdf` — the download, with clickable links
- `public/cv/Feras-Harah-CV-preview.png` — the first-page preview shown on the
  homepage and on phones, where browsers cannot display an embedded PDF

It fails if the PDF is not exactly two pages or contains no clickable links.
Review both files, then commit them together. `ferasharah.com/cv.pdf` redirects
to the current PDF, which makes a short link for application forms.

To publish or unpublish the CV:

1. Review the CV privacy checklist in `SECURITY.md`, including both visible
   content and PDF metadata. Never add a phone number or home address.
2. Keep the exact case-sensitive filenames above, or update `profile.cv` to
   match.
3. Set `profile.cv.available` to `true` or `false` in `content/profile.ts`.
4. Build the site and test the CV page, embedded viewer, mobile preview, direct
   URL, and download link.

Removing a public CV cannot revoke copies that visitors, crawlers, or archives
already obtained.

## Canonical site URL

`NEXT_PUBLIC_SITE_URL` supplies the public origin used by metadata, canonical
links, the sitemap, structured data, and social previews. Set it to the final
HTTPS origin with no path, query, or fragment:

```dotenv
NEXT_PUBLIC_SITE_URL=https://ferasharah.com
```

When the origin has no `www.` prefix, requests to the `www.` host are permanently
redirected to it by `next.config.ts`. Set the variable separately in each
hosting environment and redeploy after a change. The localhost fallback is for
development only; do not publish a build that still relies on it.

## Colours and visual tokens

The colour system is in `app/globals.css`. Edit semantic custom properties
rather than scattering hex values through components:

- Surfaces: `--canvas`, `--surface`, `--surface-raised`
- Text: `--ink`, `--muted`, `--subtle`
- UI: `--line`, `--accent`, `--accent-hover`, `--accent-soft`, `--positive`
- Depth: `--shadow-soft`, `--shadow-lift`

Light values are under `:root`. Dark values appear in both
`[data-theme="dark"]` and the system-preference media query; keep those two dark
sets in sync. The `@theme inline` block maps the variables to semantic Tailwind
utilities such as `bg-canvas`, `text-ink`, and `border-line`. Check text,
controls, hover states, focus rings, and both themes for WCAG contrast after any
colour change. Small text on `bg-accent-soft` should use `text-accent-hover`,
which meets AA contrast in both themes.

## Public content versus private data

Assume all of the following are public:

- Every file under `public/`, including the CV and its preview image
- Every value in `content/` and `cv-source/`, especially if the repository is
  public
- Every `NEXT_PUBLIC_*` environment variable
- Client-component source and data included in browser bundles
- Git history, even after a later deletion

Draft flags control presentation, not access. Never put secrets, private contact
details, unpublished documents, credentials, API keys, tokens, private messages,
or confidential project information in this repository. Store any future
server-side secrets only in the hosting provider's protected environment
settings, without a `NEXT_PUBLIC_` prefix.

## Analytics, cookies, and third parties

No analytics, trackers, cookies, CAPTCHA, or third-party scripts are installed.
Keep them absent unless there is a clear need and a deliberate privacy review.
Adding one may require user disclosure or consent, a Content Security Policy
update, documentation of data processing and retention, and verification that
the site remains usable when the service is blocked.

## Continuous integration

- `.github/workflows/ci.yml` runs `pnpm lint`, `pnpm typecheck`, and
  `pnpm build` on every push to `main` and every pull request, plus a
  production dependency audit that reports without failing the run.
- `.github/dependabot.yml` opens weekly grouped dependency updates and monthly
  GitHub Actions updates. Also enable Dependabot alerts and security updates
  under the repository's **Settings → Code security**.
- `.github/workflows/content-freshness.yml` is the monthly reminder described
  in [Keep the site current](#keep-the-site-current).

Vercel deploys independently of CI, so check the CI result for anything you
push straight to `main`.

## Deploy

Run the complete local quality gate before either deployment:

Run `pnpm lint`, `pnpm typecheck`, and `pnpm build` in sequence.

### Vercel

1. Push the project and `pnpm-lock.yaml` to a Git provider.
2. In Vercel, create a project and import the repository. Next.js is detected
   automatically.
3. In Project Settings, add `NEXT_PUBLIC_SITE_URL` for Production and any
   relevant Preview environment. Use the real production domain for the
   production value.
4. Confirm the selected Node.js runtime satisfies `>=20.9.0`, deploy, and then
   redeploy whenever an environment value changes.
5. Test canonical URLs, the sitemap, CV behavior, external links, and response
   headers on the deployed origin.

See Vercel's official [Git deployment guide](https://vercel.com/docs/git) and
[environment-variable documentation](https://vercel.com/docs/environment-variables).

### Netlify

1. Push the project and `pnpm-lock.yaml` to a Git provider, then connect the
   repository in the Netlify dashboard.
2. Let Netlify detect Next.js and use its maintained adapter with `pnpm build`;
   do not manually publish `.next/` as a static folder.
3. Add `NEXT_PUBLIC_SITE_URL` in the Netlify environment-variable settings with
   Build scope and the correct value for each deploy context.
4. Confirm the Node.js runtime satisfies `>=20.9.0`, deploy, and perform the same
   production checks as for Vercel.

See Netlify's official [Next.js deployment guide](https://docs.netlify.com/build/frameworks/framework-setup-guides/nextjs/overview/)
and [framework environment-variable guide](https://docs.netlify.com/build/frameworks/use-environment-variables-with-frameworks/).

No `vercel.json` or `netlify.toml` is required for the current site.

## Security and release checklist

Read `SECURITY.md` for the full threat model and future backend requirements.
Before every public release:

1. Use a clean install from the committed lockfile, then run lint, type-checking,
   and the production build — or confirm the CI run for the commit passed.
2. Run `pnpm audit --prod`. Investigate findings; do
   not use a forced upgrade without reviewing compatibility.
3. Search for template publication states, replacement notes,
   `your-domain.example`, secrets, private data, raw HTML rendering, and
   unreviewed `http://` or external links.
4. Open every navigation, social, project, demo, repository, CV, and download
   link. External new-tab links must retain `rel="noopener noreferrer"`.
5. Test keyboard-only navigation, visible focus, heading order, contrast,
   reduced motion, 320px-wide mobile layout, large screens, and both themes.
6. Check the production browser console and network panel. A mailto action must
   not create a fake HTTP form submission.
7. Inspect deployed headers for the homepage and CV, for example with
   `curl -I`. HTML should deny framing; the CV should permit only same-origin
   framing. Confirm CSP, HSTS, referrer, permissions, and MIME-sniffing headers.
8. Review the public CV and all media for metadata, hidden content, licensing,
   consent, and accidental personal information.
9. Confirm there are still no unexpected analytics, cookies, trackers, or
   third-party network requests.

## Current status and remaining setup

All content sections are published: availability status, contact methods
(email, LinkedIn, GitHub, location), four projects, six skill groups, the
timeline, hobbies, community items, dated updates, and the two-page CV with its
preview image.

Still outstanding:

- Screenshots for Basha Pantry, ReignFall, and Greenopoly, and current Basha
  Pantry progress figures or a preview link.
- Dates for the Amazon Flex entry in the CV source; rebuild with `pnpm cv`
  after adding them.

The publication-state system continues to apply to every future entry.
