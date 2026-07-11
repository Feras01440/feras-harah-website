export const CONTACT_FIELD_LIMITS = {
  name: 80,
  email: 254,
  subject: 120,
  message: 2_000,
} as const;

export type ContactFieldsInput = {
  name: string;
  email: string;
  subject?: string;
  message: string;
};

export type SanitizedContactFields = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export type ContactFieldErrors = Partial<
  Record<keyof SanitizedContactFields, string>
>;

export type ContactValidationResult =
  | {
      ok: true;
      data: SanitizedContactFields;
    }
  | {
      ok: false;
      errors: ContactFieldErrors;
    };

export type MailtoBuildResult =
  | {
      ok: true;
      data: SanitizedContactFields;
      url: string;
    }
  | {
      ok: false;
      errors: ContactFieldErrors;
    };

const DISALLOWED_EMAIL_CHARACTERS = new Set([
  "%",
  "&",
  "?",
  "#",
  "/",
  ":",
  ";",
  ",",
  "<",
  ">",
  "(",
  ")",
  "[",
  "]",
  "\\",
]);

function isControlCharacter(character: string): boolean {
  const codePoint = character.codePointAt(0) ?? 0;
  return codePoint <= 31 || codePoint === 127;
}

function sanitizeSingleLine(value: string): string {
  const withoutControls = Array.from(value.normalize("NFC"), (character) =>
    isControlCharacter(character) ? " " : character,
  ).join("");

  return withoutControls
    .replace(/\s+/gu, " ")
    .trim();
}

function sanitizeMultiline(value: string): string {
  const normalizedLineEndings = value
    .normalize("NFC")
    .replace(/\r\n?/gu, "\n");

  return Array.from(normalizedLineEndings)
    .filter(
      (character) =>
        character === "\n" ||
        character === "\t" ||
        !isControlCharacter(character),
    )
    .join("")
    .trim();
}

export function sanitizeContactFields(
  input: ContactFieldsInput,
): SanitizedContactFields {
  return {
    name: sanitizeSingleLine(input.name),
    email: sanitizeSingleLine(input.email),
    subject: sanitizeSingleLine(input.subject ?? ""),
    message: sanitizeMultiline(input.message),
  };
}

export function isValidEmailAddress(value: string): boolean {
  if (
    value.length === 0 ||
    value.length > CONTACT_FIELD_LIMITS.email ||
    /\s/u.test(value) ||
    Array.from(value).some((character) =>
      DISALLOWED_EMAIL_CHARACTERS.has(character),
    )
  ) {
    return false;
  }

  const parts = value.split("@");

  if (parts.length !== 2) {
    return false;
  }

  const [localPart, domain] = parts;

  if (
    !localPart ||
    localPart.length > 64 ||
    localPart.startsWith(".") ||
    localPart.endsWith(".") ||
    localPart.includes("..") ||
    !/^[a-z0-9.!#$'*+=^_`{|}~-]+$/iu.test(localPart)
  ) {
    return false;
  }

  const labels = domain?.split(".") ?? [];

  return (
    labels.length >= 2 &&
    labels.every(
      (label) =>
        label.length > 0 &&
        label.length <= 63 &&
        /^[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/iu.test(label),
    )
  );
}

export function validateContactFields(
  input: ContactFieldsInput,
): ContactValidationResult {
  const data = sanitizeContactFields(input);
  const errors: ContactFieldErrors = {};

  if (data.name.length === 0) {
    errors.name = "Enter your name.";
  } else if (data.name.length > CONTACT_FIELD_LIMITS.name) {
    errors.name = `Name must be ${CONTACT_FIELD_LIMITS.name} characters or fewer.`;
  }

  if (data.email.length === 0) {
    errors.email = "Enter your email address.";
  } else if (!isValidEmailAddress(data.email)) {
    errors.email = "Enter a valid email address.";
  }

  if (data.subject.length > CONTACT_FIELD_LIMITS.subject) {
    errors.subject = `Subject must be ${CONTACT_FIELD_LIMITS.subject} characters or fewer.`;
  }

  if (data.message.length === 0) {
    errors.message = "Enter a message.";
  } else if (data.message.length > CONTACT_FIELD_LIMITS.message) {
    errors.message = `Message must be ${CONTACT_FIELD_LIMITS.message} characters or fewer.`;
  }

  if (Object.keys(errors).length > 0) {
    return { ok: false, errors };
  }

  return { ok: true, data };
}

/**
 * Builds a mailto URL without allowing visitor input to control the scheme or
 * recipient. `trustedRecipient` must come from reviewed static site content.
 */
export function buildMailtoUrl(
  trustedRecipient: string,
  input: ContactFieldsInput,
): MailtoBuildResult {
  const recipient = trustedRecipient.trim();

  if (recipient !== trustedRecipient || !isValidEmailAddress(recipient)) {
    throw new Error("The configured contact recipient is not a valid email address.");
  }

  const validation = validateContactFields(input);

  if (!validation.ok) {
    return validation;
  }

  const { data } = validation;
  const subject = data.subject || `Website message from ${data.name}`;
  const body = [
    `Name: ${data.name}`,
    `Reply email: ${data.email}`,
    "",
    data.message,
  ].join("\r\n");
  const [localPart, domain] = recipient.split("@");
  const encodedRecipient = `${encodeURIComponent(localPart)}@${domain}`;
  const url = `mailto:${encodedRecipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  return { ok: true, data, url };
}
