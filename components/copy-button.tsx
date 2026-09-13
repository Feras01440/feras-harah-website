"use client";

import { useEffect, useRef, useState } from "react";

import { CheckIcon, CopyIcon } from "@/components/icons";
import { cn } from "@/lib/cn";

function copyWithTextarea(value: string) {
  const textarea = document.createElement("textarea");
  textarea.value = value;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "fixed";
  textarea.style.opacity = "0";
  document.body.append(textarea);
  textarea.select();
  document.execCommand("copy");
  textarea.remove();
}

export function CopyButton({
  value,
  label,
  copiedLabel = "Copied",
  hiddenLabel,
  className,
}: {
  value: string;
  label: string;
  copiedLabel?: string;
  hiddenLabel?: string;
  className?: string;
}) {
  const [copied, setCopied] = useState(false);
  const resetTimer = useRef<number | undefined>(undefined);

  useEffect(() => () => window.clearTimeout(resetTimer.current), []);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(value);
    } catch {
      copyWithTextarea(value);
    }

    setCopied(true);
    window.clearTimeout(resetTimer.current);
    resetTimer.current = window.setTimeout(() => setCopied(false), 2500);
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      className={cn(
        "inline-flex min-h-11 items-center gap-2 rounded-full text-sm font-semibold transition",
        className,
      )}
    >
      {copied ? (
        <CheckIcon className="size-4 text-positive" />
      ) : (
        <CopyIcon className="size-4" />
      )}
      <span aria-live="polite">
        {copied ? copiedLabel : label}
        {hiddenLabel && !copied ? (
          <span className="sr-only"> {hiddenLabel}</span>
        ) : null}
      </span>
    </button>
  );
}
