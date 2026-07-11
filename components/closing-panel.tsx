import { ArrowRightIcon } from "@/components/icons";
import { ButtonLink } from "@/components/button-link";

export function ClosingPanel({
  eyebrow,
  title,
  description,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
}: {
  eyebrow: string;
  title: string;
  description: string;
  primaryHref: string;
  primaryLabel: string;
  secondaryHref?: string;
  secondaryLabel?: string;
}) {
  return (
    <section className="section-pad">
      <div className="site-shell">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-ink px-6 py-12 text-canvas shadow-lift sm:px-10 sm:py-16 lg:px-16">
          <div className="blueprint-grid absolute inset-0 opacity-20" />
          <div className="relative max-w-3xl">
            <p className="eyebrow text-accent">{eyebrow}</p>
            <h2 className="text-balance mt-6 text-3xl font-semibold tracking-[-0.05em] text-canvas sm:text-5xl">
              {title}
            </h2>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-canvas/65 sm:text-base">
              {description}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink
                href={primaryHref}
                className="border-canvas bg-canvas text-ink hover:border-accent hover:bg-accent hover:text-white"
              >
                {primaryLabel} <ArrowRightIcon className="size-4" />
              </ButtonLink>
              {secondaryHref && secondaryLabel ? (
                <ButtonLink
                  href={secondaryHref}
                  variant="quiet"
                  className="text-canvas hover:bg-canvas/10 hover:text-canvas"
                >
                  {secondaryLabel}
                </ButtonLink>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
