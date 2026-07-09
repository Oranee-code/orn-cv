import type { SkillGroup } from "../types";
import { SidebarSection } from "../components/SidebarSection";

interface SkillsProps {
  skills: SkillGroup[];
}

export function Skills({ skills }: SkillsProps) {
  return (
    <SidebarSection title="Skills">
      <div className="space-y-4">
        {skills.map((group) => (
          <div key={group.category}>
            <p className="mb-1.5 text-xs font-medium text-sidebar-heading">
              {group.category}
            </p>
            <ul className="flex flex-wrap gap-1.5">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-md bg-sidebar-tag px-2 py-0.5 text-xs text-sidebar-text"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </SidebarSection>
  );
}
