import Image from "next/image";

import { ArrowUpRightIcon, DownloadIcon } from "@/components/icons";
import { ButtonLink } from "@/components/button-link";
import { EmptyState } from "@/components/empty-state";
import { profile } from "@/content/profile";
import { isCvPreviewAvailable } from "@/lib/cv";

export function CVViewer({ available }: { available: boolean }) {
  if (!available) {
    return (
      <EmptyState
        title="The CV is being prepared"
        description={profile.cv.unavailableMessage}
      />
    );
  }

  const hasPreview = isCvPreviewAvailable();

  return (
    <div>
      <div className="no-print mb-5 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
        <p className="text-sm leading-6 text-muted">
          Two A4 pages — the same file you download.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <ButtonLink href={profile.cv.publicPath} download>
            <DownloadIcon className="size-4" /> Download PDF
          </ButtonLink>
          <ButtonLink href={profile.cv.publicPath} newTab variant="secondary">
            Open in new tab <ArrowUpRightIcon className="size-4" />
          </ButtonLink>
        </div>
      </div>

      <div className="hidden overflow-hidden rounded-[1.75rem] border border-line bg-surface shadow-soft lg:block">
        <iframe
          src={profile.cv.publicPath}
          title="Feras Harah curriculum vitae PDF"
          loading="lazy"
          className="h-[80svh] min-h-[40rem] w-full bg-white"
        />
      </div>

      {hasPreview ? (
        <a
          href={profile.cv.publicPath}
          target="_blank"
          rel="noopener noreferrer"
          className="relative block overflow-hidden rounded-[1.75rem] border border-line bg-white shadow-soft lg:hidden"
        >
          <Image
            src={profile.cv.preview.src}
            alt="Preview of the first page of Feras Harah’s CV"
            width={profile.cv.preview.width}
            height={profile.cv.preview.height}
            sizes="(min-width: 640px) 40rem, 100vw"
            className="h-auto w-full"
          />
          <span className="absolute inset-x-0 bottom-0 flex items-center justify-center gap-2 bg-linear-to-t from-black/85 via-black/55 to-transparent px-4 pb-5 pt-20 text-sm font-semibold text-white">
            Open the full PDF <ArrowUpRightIcon className="size-4" />
          </span>
        </a>
      ) : null}
    </div>
  );
}
