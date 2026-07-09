import type { ProfileData } from "../types";
import { About } from "../sections/About";
import { Experience } from "../sections/Experience";
import { Projects } from "../sections/Projects";
import { MainEducation } from "../sections/MainEducation";
import { MainCertifications } from "../sections/MainCertifications";
import { TechnicalSkills } from "../sections/TechnicalSkills";
import { Awards } from "../sections/Awards";

interface MainContentProps {
  data: Pick<
    ProfileData,
    | "about"
    | "experience"
    | "projects"
    | "mainEducation"
    | "mainCertifications"
    | "technicalSkills"
    | "awards"
  >;
}

export function MainContent({ data }: MainContentProps) {
  return (
    <main className="w-full flex-1 px-4 py-6 sm:px-6 sm:py-8 md:px-8 lg:px-12 lg:py-10 xl:px-16">
      <div className="mx-auto w-full max-w-5xl space-y-8 sm:space-y-10 md:space-y-12 lg:max-w-none lg:space-y-14">
        <About content={data.about} />
        <Experience experience={data.experience} />
        <Projects projects={data.projects} />
        <MainEducation education={data.mainEducation} />
        <MainCertifications certifications={data.mainCertifications} />
        <TechnicalSkills skills={data.technicalSkills} />
        <Awards awards={data.awards} />
      </div>
    </main>
  );
}
