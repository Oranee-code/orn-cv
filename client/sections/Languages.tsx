import type { Language } from "../types";
import { SidebarSection } from "../components/SidebarSection";

interface LanguagesProps {
  languages: Language[];
}

export function Languages({ languages }: LanguagesProps) {
  return (
    <SidebarSection title="Languages">
      <ul className="space-y-2 text-sm text-sidebar-text">
        {languages.map((lang) => (
          <li key={lang.name} className="flex justify-between gap-2">
            <span className="font-medium text-sidebar-heading">{lang.name}</span>
            <span className="text-sidebar-text">{lang.level}</span>
          </li>
        ))}
      </ul>
    </SidebarSection>
  );
}
