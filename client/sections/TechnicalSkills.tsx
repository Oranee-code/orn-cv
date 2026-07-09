import type { SkillGroup } from "../types";
import { SectionWrapper } from "../components/SectionWrapper";

interface TechnicalSkillsProps {
  skills: SkillGroup[];
}

export function TechnicalSkills({ skills }: TechnicalSkillsProps) {
  return (
    <SectionWrapper id="technical-skills" title="Technical Skills">
      <div className="grid gap-6 sm:grid-cols-2">
        {skills.map((group) => (
          <div key={group.category}>
            <h3 className="mb-2 text-sm font-semibold text-foreground">
              {group.category}
            </h3>
            <ul className="flex flex-wrap gap-1.5">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-md bg-tag px-2.5 py-1 text-xs text-muted"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
