import { SidebarSection } from "../components/SidebarSection";

interface InterestsProps {
  interests: string[];
}

export function Interests({ interests }: InterestsProps) {
  if (interests.length === 0) return null;

  return (
    <SidebarSection title="Interests">
      <ul className="flex flex-wrap gap-1.5">
        {interests.map((interest) => (
          <li
            key={interest}
            className="rounded-md bg-sidebar-tag px-2 py-0.5 text-xs text-sidebar-text"
          >
            {interest}
          </li>
        ))}
      </ul>
    </SidebarSection>
  );
}
