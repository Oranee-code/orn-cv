import type { ProfileData } from "../types";
import { Contact } from "../sections/Contact";
import { Skills } from "../sections/Skills";
import { Languages } from "../sections/Languages";
import { SidebarEducation } from "../sections/SidebarEducation";
import { SidebarCertifications } from "../sections/SidebarCertifications";
import { Links } from "../sections/Links";
import { Interests } from "../sections/Interests";

interface SidebarProps {
  data: Pick<
    ProfileData,
    | "contact"
    | "skills"
    | "languages"
    | "sidebarEducation"
    | "sidebarCertifications"
    | "links"
    | "interests"
  >;
}

export function Sidebar({ data }: SidebarProps) {
  return (
    <aside
      aria-label="Sidebar"
      className="sidebar-bg border-b border-border px-4 py-6 text-sidebar-text sm:px-6 sm:py-8 md:px-8 lg:sticky lg:top-0 lg:h-dvh lg:overflow-y-auto lg:border-b-0 lg:border-r lg:px-8 lg:py-10 xl:px-10"
    >
      <div className="grid gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-1 lg:gap-0">
        <div className="contents lg:block">
          <Contact contact={data.contact} />
          <Links links={data.links} />
        </div>
        <div className="contents lg:block">
          <Skills skills={data.skills} />
          <Languages languages={data.languages} />
        </div>
        <div className="contents lg:block">
          <SidebarEducation education={data.sidebarEducation} />
          <SidebarCertifications certifications={data.sidebarCertifications} />
        </div>
        <div className="contents lg:block">
          <Interests interests={data.interests} />
        </div>
      </div>
    </aside>
  );
}
