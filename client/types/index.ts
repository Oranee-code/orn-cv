export type Theme = "light" | "dark";

export interface ContactInfo {
  email: string;
  phone: string;
  location: string;
  website?: string;
}

export interface LinkItem {
  label: string;
  url: string;
  icon?: "github" | "linkedin" | "portfolio" | "external";
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export interface Language {
  name: string;
  level: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  description?: string;
}

export interface CertificationItem {
  name: string;
  issuer: string;
  date: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  location?: string;
  highlights: string[];
}

export interface ProjectItem {
  name: string;
  description: string;
  technologies: string[];
  url?: string;
}

export interface AwardItem {
  title: string;
  issuer: string;
  date: string;
}

export interface ProfileData {
  name: string;
  title: string;
  summary: string;
  contact: ContactInfo;
  skills: SkillGroup[];
  languages: Language[];
  sidebarEducation: EducationItem[];
  sidebarCertifications: CertificationItem[];
  links: LinkItem[];
  interests: string[];
  about: string[];
  experience: ExperienceItem[];
  projects: ProjectItem[];
  mainEducation: EducationItem[];
  mainCertifications: CertificationItem[];
  technicalSkills: SkillGroup[];
  awards: AwardItem[];
}
