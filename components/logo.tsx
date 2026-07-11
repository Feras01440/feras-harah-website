import Link from "next/link";

export function Logo() {
  return (
    <Link
      href="/"
      aria-label="Feras Harah — home"
      className="group inline-flex min-h-11 items-center gap-3 rounded-sm"
    >
      <span className="grid size-9 place-items-center rounded-xl bg-ink text-[0.7rem] font-bold tracking-[-0.04em] text-canvas transition-transform duration-200 group-hover:-rotate-3">
        FH
      </span>
      <span className="hidden text-sm font-semibold tracking-[-0.02em] text-ink sm:block">
        Feras Harah
      </span>
    </Link>
  );
}
