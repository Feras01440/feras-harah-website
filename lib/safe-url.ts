export const MAX_EXTERNAL_URL_LENGTH = 2_048;

function hasControlCharacter(value: string): boolean {
  return Array.from(value).some((character) => {
    const codePoint = character.codePointAt(0) ?? 0;
    return codePoint <= 31 || codePoint === 127;
  });
}

/**
 * Returns a canonical HTTPS URL only when its hostname is an exact allowlist
 * match. Callers must explicitly list every trusted hostname, including `www`
 * variants; subdomains are never trusted implicitly.
 */
export function getSafeHttpsUrl(
  value: string | null | undefined,
  allowedHosts: readonly string[],
): string | null {
  if (typeof value !== "string") {
    return null;
  }

  const candidate = value.trim();

  if (
    candidate.length === 0 ||
    candidate.length > MAX_EXTERNAL_URL_LENGTH ||
    hasControlCharacter(candidate) ||
    candidate.includes("\\")
  ) {
    return null;
  }

  let url: URL;

  try {
    url = new URL(candidate);
  } catch {
    return null;
  }

  if (
    url.protocol !== "https:" ||
    url.username !== "" ||
    url.password !== "" ||
    (url.port !== "" && url.port !== "443")
  ) {
    return null;
  }

  const hostname = url.hostname.toLowerCase().replace(/\.$/u, "");
  const trustedHosts = new Set(
    allowedHosts.map((host) => host.trim().toLowerCase().replace(/\.$/u, "")),
  );

  if (!trustedHosts.has(hostname)) {
    return null;
  }

  return url.toString();
}

const socialHosts = {
  github: ["github.com", "www.github.com"],
  linkedin: ["linkedin.com", "www.linkedin.com"],
} as const;

export function getSafeSocialUrl(
  kind: "github" | "linkedin",
  value: string | null | undefined,
) {
  return getSafeHttpsUrl(value, socialHosts[kind]);
}

/**
 * Validates editable public content where the final host is intentionally not
 * fixed (for example a future project demo). It still permits HTTPS only and
 * rejects credentials, control characters, backslashes, and nonstandard ports.
 */
export function safeExternalUrl(
  value: string | null | undefined,
): string | null {
  if (typeof value !== "string") return null;

  const candidate = value.trim();
  if (
    candidate.length === 0 ||
    candidate.length > MAX_EXTERNAL_URL_LENGTH ||
    hasControlCharacter(candidate) ||
    candidate.includes("\\")
  ) {
    return null;
  }

  try {
    const url = new URL(candidate);
    if (
      url.protocol !== "https:" ||
      url.username ||
      url.password ||
      (url.port && url.port !== "443") ||
      !url.hostname
    ) {
      return null;
    }
    return url.toString();
  } catch {
    return null;
  }
}
