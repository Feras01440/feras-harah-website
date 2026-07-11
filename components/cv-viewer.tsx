import { DownloadIcon } from "@/components/icons";
import { ButtonLink } from "@/components/button-link";
import { EmptyState } from "@/components/empty-state";
import { profile } from "@/content/profile";

export function CVViewer({ available }: { available: boolean }) {
  if (!available) {
    return (
      <EmptyState
        title="The CV is being prepared"
        description={profile.cv.unavailableMessage}
      />
    );
  }

  return (
    <div>
      <div className="no-print mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm leading-6 text-muted">
          If the viewer does not load, use the direct download.
        </p>
        <ButtonLink href={profile.cv.publicPath} download variant="secondary">
          <DownloadIcon className="size-4" /> Download PDF
        </ButtonLink>
      </div>
      <div className="overflow-hidden rounded-[1.75rem] border border-line bg-surface shadow-soft">
        <iframe
          src={profile.cv.publicPath}
          title="Feras Harah curriculum vitae PDF"
          loading="lazy"
          className="h-[75svh] min-h-[34rem] w-full bg-white"
        />
      </div>
    </div>
  );
}
