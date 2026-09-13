"use client";

import { useState } from "react";

import { CopyButton } from "@/components/copy-button";
import { ArrowUpRightIcon, MailIcon } from "@/components/icons";
import { EmptyState } from "@/components/empty-state";
import {
  buildMailtoUrl,
  CONTACT_FIELD_LIMITS,
  type ContactFieldErrors,
  type ContactFieldsInput,
} from "@/lib/contact";

const initialFields: ContactFieldsInput = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

type Draft = {
  subject: string;
  body: string;
};

export function ContactForm({ recipientEmail }: { recipientEmail?: string }) {
  const [fields, setFields] = useState(initialFields);
  const [errors, setErrors] = useState<ContactFieldErrors>({});
  const [status, setStatus] = useState("");
  const [draft, setDraft] = useState<Draft | null>(null);

  const trustedRecipient = recipientEmail ?? "";

  if (!trustedRecipient) {
    return (
      <EmptyState
        title="The public contact channel is coming soon"
        description="Until a public address is confirmed, this site stays private by design and does not collect messages."
      />
    );
  }

  function updateField(field: keyof ContactFieldsInput, value: string) {
    setFields((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
    setStatus("");
    setDraft(null);
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("");
    setDraft(null);

    try {
      const result = buildMailtoUrl(trustedRecipient, fields);
      if (!result.ok) {
        setErrors(result.errors);
        setStatus("Check the highlighted fields and try again.");
        return;
      }

      setErrors({});
      setDraft({
        subject: result.subject,
        body: result.body.replaceAll("\r\n", "\n"),
      });
      setStatus("Opening your email app — nothing is sent until you press send there.");
      window.location.assign(result.url);
    } catch {
      setStatus("The contact address is not configured correctly yet.");
    }
  }

  const fieldClass =
    "mt-2 min-h-12 w-full rounded-2xl border border-subtle bg-canvas px-4 py-3 text-sm text-ink placeholder:text-subtle transition focus:border-accent";

  return (
    <form onSubmit={handleSubmit} noValidate className="rounded-[2rem] border border-line bg-surface p-6 shadow-soft sm:p-8">
      <div className="mb-7 flex items-start gap-4 border-b border-line pb-6">
        <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-accent-soft text-accent">
          <MailIcon className="size-5" />
        </span>
        <div>
          <h2 className="text-xl font-semibold tracking-[-0.03em] text-ink">Start a conversation</h2>
          <p className="mt-2 text-sm leading-6 text-muted">
            This opens your email app. The site does not transmit, save, or track your message.
          </p>
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          label="Your name"
          name="name"
          value={fields.name}
          error={errors.name}
          maxLength={CONTACT_FIELD_LIMITS.name}
          autoComplete="name"
          onChange={(value) => updateField("name", value)}
          className={fieldClass}
        />
        <Field
          label="Your email"
          name="email"
          type="email"
          value={fields.email}
          error={errors.email}
          maxLength={CONTACT_FIELD_LIMITS.email}
          autoComplete="email"
          onChange={(value) => updateField("email", value)}
          className={fieldClass}
        />
      </div>

      <div className="mt-5">
        <Field
          label="Subject (optional)"
          name="subject"
          value={fields.subject ?? ""}
          error={errors.subject}
          maxLength={CONTACT_FIELD_LIMITS.subject}
          autoComplete="off"
          onChange={(value) => updateField("subject", value)}
          className={fieldClass}
        />
      </div>

      <div className="mt-5">
        <label htmlFor="message" className="text-sm font-semibold text-ink">Message</label>
        <textarea
          id="message"
          name="message"
          rows={7}
          required
          maxLength={CONTACT_FIELD_LIMITS.message}
          value={fields.message}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : "message-hint"}
          onChange={(event) => updateField("message", event.target.value)}
          className={`${fieldClass} resize-y`}
          placeholder="What would you like to talk about?"
        />
        <div className="mt-2 flex justify-between gap-4 text-xs leading-5">
          <span id={errors.message ? "message-error" : "message-hint"} className={errors.message ? "text-error" : "text-subtle"}>
            {errors.message ?? "Please avoid sharing sensitive information."}
          </span>
          <span className="shrink-0 text-subtle">{fields.message.length}/{CONTACT_FIELD_LIMITS.message}</span>
        </div>
      </div>

      <div className="mt-7 flex flex-col-reverse gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p aria-live="polite" className="text-xs leading-5 text-muted">{status}</p>
        <button
          type="submit"
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-ink bg-ink px-6 py-3 text-sm font-semibold text-canvas transition hover:-translate-y-0.5 hover:border-accent hover:bg-accent hover:text-white"
        >
          Open in email app <ArrowUpRightIcon className="size-4" />
        </button>
      </div>

      {draft ? (
        <div className="mt-6 rounded-2xl border border-line bg-canvas p-5 text-sm leading-6 text-muted">
          <p>
            Nothing opened? Email{" "}
            <a
              href={`mailto:${trustedRecipient}`}
              className="font-semibold text-ink underline decoration-accent underline-offset-4 transition hover:text-accent"
            >
              {trustedRecipient}
            </a>{" "}
            from your usual inbox and paste your message in.
          </p>
          <div className="mt-3 flex flex-wrap gap-x-6">
            <CopyButton
              value={`Subject: ${draft.subject}\n\n${draft.body}`}
              label="Copy message"
              copiedLabel="Message copied"
              className="text-ink hover:text-accent"
            />
            <CopyButton
              value={trustedRecipient}
              label="Copy email address"
              copiedLabel="Address copied"
              className="text-ink hover:text-accent"
            />
          </div>
        </div>
      ) : null}
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  value,
  error,
  maxLength,
  autoComplete,
  onChange,
  className,
}: {
  label: string;
  name: "name" | "email" | "subject";
  type?: string;
  value: string;
  error?: string;
  maxLength: number;
  autoComplete: string;
  onChange: (value: string) => void;
  className: string;
}) {
  const errorId = `${name}-error`;

  return (
    <div>
      <label htmlFor={name} className="text-sm font-semibold text-ink">{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        required={name !== "subject"}
        maxLength={maxLength}
        autoComplete={autoComplete}
        value={value}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorId : undefined}
        onChange={(event) => onChange(event.target.value)}
        className={className}
      />
      {error ? <p id={errorId} className="mt-2 text-xs leading-5 text-error">{error}</p> : null}
    </div>
  );
}
