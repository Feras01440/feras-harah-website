# Security and privacy

This website is designed to have a small public attack surface: static content,
local assets, no analytics, no cookies, and no server-side contact endpoint.
Security headers and defensive helpers are included, but deployment content must
still be reviewed before the site is made public.

## Secrets and environment variables

- The initial site does not require a secret, API key, or access token.
- `.env*` files are ignored except for `.env.example`.
- `NEXT_PUBLIC_SITE_URL` is intentionally public and is used only as the site's
  canonical origin. Every `NEXT_PUBLIC_*` value is included in browser bundles.
- If a server integration is added later, keep its credentials in the hosting
  platform's server-only environment settings. Never add them to content files,
  client components, logs, screenshots, or the repository.
- Use separate preview and production environment settings, and rotate a secret
  immediately if it is ever committed or exposed.

## Links and untrusted content

- React's normal text rendering must be used for editable content. Do not add
  `dangerouslySetInnerHTML` or enable raw HTML in MDX.
- Social profile URLs use exact GitHub and LinkedIn hostname allowlists.
  Reviewed project and resource links still require HTTPS and reject
  credentials, control characters, backslashes, and non-standard ports.
- External links opened in a new tab must use `rel="noopener noreferrer"`.
- Missing social, repository, or demo URLs should result in no link. Do not use
  `#`, `javascript:`, empty, or invented placeholder destinations.
- Files placed in `public/`, content bundled into client code, and content in a
  public repository must all be treated as public. Hiding an item in the UI is
  not an access-control mechanism.

## Contact behavior

The initial contact flow uses `mailto:` and does not submit to this website. The
UI must say that it opens the visitor's email application and must not claim that
a message was sent.

`lib/contact.ts` normalizes visitor fields, removes control characters, enforces
lengths, validates email-shaped values, and percent-encodes every visitor value
at the mailto URI sink. The scheme is hardcoded, and the recipient is supplied
separately from reviewed static configuration. Sanitization here is not
permission to render a visitor's content as HTML.

If a contact backend is introduced later, it must include all of the following:

- Server-side type, required-field, format, and length validation.
- A small request body limit, POST-only routing, strict content-type checking,
  no permissive CORS policy, and validation of the request `Origin`/host.
- Output encoding or plain-text email bodies. Do not insert raw visitor values
  into HTML or email headers; reject CR/LF in all header-derived values.
- Durable per-source and global rate limits, a honeypot, and a minimum sensible
  form-completion time. Rate-limit identifiers should be minimized or hashed
  and retained only as long as necessary.
- Server-only email-provider credentials, generic public errors, redacted logs,
  and no storage of message content unless a retention policy is deliberately
  documented.
- Clear disclosure of any CAPTCHA, anti-spam provider, analytics, cookies, or
  other third-party data processing before it is enabled.

## Public CV

`public/cv/Feras-Harah-CV.pdf` is intentionally public. Once deployed it can be
indexed, cached, downloaded, mirrored, and archived. Removing or replacing it
later cannot revoke copies that have already been obtained.

Before uploading the CV, check both visible content and PDF metadata for:

- A home address, private phone number, date of birth, signature, or identity
  document details.
- References' private contact details or any information shared in confidence.
- Hidden comments, tracked changes, attachments, authoring-tool metadata, and
  stale document titles or author names.

Prefer a dedicated public email alias and a coarse location such as Belfast or
Northern Ireland. Keep an accessible HTML summary and direct download fallback
because embedded browser PDF viewers are not consistently accessible.

The security headers intentionally treat the CV differently from normal pages:
HTML pages deny framing, while everything under `/cv/` (the PDF and its preview
image) permits same-origin framing so the CV page can embed it. The rule matches
the folder rather than a filename, so renaming the PDF keeps the preview
working. Do not replace the `SAMEORIGIN`/`frame-ancestors 'self'` policy with a
global `DENY` rule unless the embedded preview is also removed.

The CV source in `cv-source/` is public in the repository. Apply the same
checklist to it as to the generated PDF.

The static page CSP permits inline scripts for Next.js hydration and inline
styles for component motion, but it never permits `unsafe-eval` in production.
Development adds `unsafe-eval` and websocket connections for framework tooling.
If the site later adopts a per-request nonce policy, verify the resulting
rendering and caching behavior before removing these compatibility directives.

## Deployment and dependency checks

Before each public release:

1. Run clean install, lint, TypeScript, test (when configured), and production
   build commands.
2. Review the production dependency audit. Investigate findings rather than
   applying unsafe forced upgrades blindly.
3. Search the working tree and generated client output for secrets, private
   content, placeholder URLs, `dangerouslySetInnerHTML`, and broken links.
4. Verify keyboard navigation, reduced-motion behavior, contrast, responsive
   layouts, the browser console, and the network panel.
5. Inspect deployed response headers and confirm both clickjacking protection
   and the same-origin CV iframe behavior.
6. Confirm HTTPS redirects, the canonical production URL, sitemap/robots output,
   and that no page is indexed before its placeholder and privacy review passes.

The CI workflow runs lint, type-checking, and the production build on every push
and pull request, and reports `pnpm audit --prod --audit-level=high` results.
Dependabot opens weekly dependency updates. Review and merge security updates
promptly: a public repository with known critical advisories undermines the
site's stated security posture.

Keep dependencies minimal and commit the lockfile. Prefer platform and framework
features over packages when the additional dependency does not materially
improve correctness or maintainability. When a transitive advisory needs a
workspace override, pin the smallest patched version and remove the override
once upstream ranges include the fix.

Do not report a security issue through a public tracker if it contains sensitive
details. Use the verified private contact method published on the deployed site.
