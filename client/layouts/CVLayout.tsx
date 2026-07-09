import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { MainContent } from "../components/MainContent";
import { Footer } from "../components/Footer";
import { ThemeToggle } from "../components/ThemeToggle";
import type { ProfileData } from "../types";

interface CVLayoutProps {
  data: ProfileData;
}

export function CVLayout({ data }: CVLayoutProps) {
  return (
    <div className="min-h-dvh w-full bg-page theme-transition">
      <ThemeToggle />

      <div className="flex min-h-dvh w-full flex-col">
        <div className="main-bg w-full border-b border-border px-4 py-6 sm:px-6 md:px-8 lg:px-12 lg:py-10 xl:px-16">
          <Header
            name={data.name}
            title={data.title}
            summary={data.summary}
          />
        </div>

        <div className="flex w-full flex-1 flex-col lg:flex-row">
          <div className="w-full shrink-0 lg:w-1/4 lg:max-w-sm xl:max-w-md">
            <Sidebar
              data={{
                contact: data.contact,
                skills: data.skills,
                languages: data.languages,
                sidebarEducation: data.sidebarEducation,
                sidebarCertifications: data.sidebarCertifications,
                links: data.links,
                interests: data.interests,
              }}
            />
          </div>

          <div className="main-bg flex min-w-0 flex-1 flex-col">
            <MainContent
              data={{
                about: data.about,
                experience: data.experience,
                projects: data.projects,
                mainEducation: data.mainEducation,
                mainCertifications: data.mainCertifications,
                technicalSkills: data.technicalSkills,
                awards: data.awards,
              }}
            />
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}
