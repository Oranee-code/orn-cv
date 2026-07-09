import type { EducationItem } from "../types";
import { SidebarSection } from "../components/SidebarSection";

interface SidebarEducationProps {
  education: EducationItem[];
}

export function SidebarEducation({ education }: SidebarEducationProps) {
  return (
    <SidebarSection title="Education">
      <ul className="space-y-4 text-sm">
        {education.map((item) => (
          <li key={`${item.degree}-${item.period}`}>
            <p className="font-medium text-sidebar-heading">{item.degree}</p>
            <p className="text-sidebar-text">{item.institution}</p>
            <p className="text-xs text-sidebar-muted">{item.period}</p>
          </li>
        ))}
      </ul>
    </SidebarSection>
  );
}
