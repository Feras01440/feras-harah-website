import type { Skill } from "@/content/types";

const levelLabel: Record<Skill["level"], string> = {
  comfortable: "Comfortable",
  learning: "Learning",
  exploring: "Exploring",
};

export function SkillBadge({ skill }: { skill: Skill }) {
  return (
    <li className="flex min-h-14 items-center justify-between gap-4 rounded-2xl border border-line bg-surface px-4 py-3">
      <span>
        <span className="block text-sm font-semibold text-ink">{skill.name}</span>
        {skill.note ? <span className="mt-1 block text-xs leading-5 text-muted">{skill.note}</span> : null}
      </span>
      <span className="font-mono text-[0.65rem] uppercase tracking-[0.1em] text-accent">
        {levelLabel[skill.level]}
      </span>
    </li>
  );
}
