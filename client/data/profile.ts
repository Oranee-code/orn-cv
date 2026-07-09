import type { ProfileData } from "../types";

export const profileData: ProfileData = {
  name: "Oranee Kasem",
  title: "Full Stack Developer",
  summary:
    "Graduate specializing in Cloud Computing and Cybersecurity. Building secure, scalable web applications with clean code and modern tooling.",
  contact: {
    email: "oranee.kasem@email.com",
    phone: "+64 21 000 0000",
    location: "Auckland, New Zealand",
    website: "https://oranee.dev",
  },
  skills: [
    {
      category: "Core",
      items: ["TypeScript", "React", "Node.js", "Python", "SQL"],
    },
    {
      category: "Cloud & DevOps",
      items: ["AWS", "Docker", "CI/CD", "Linux", "Terraform"],
    },
    {
      category: "Security",
      items: ["OWASP", "Network Security", "Pen Testing Basics"],
    },
  ],
  languages: [
    { name: "English", level: "Native / Fluent" },
    { name: "Thai", level: "Native" },
  ],
  sidebarEducation: [
    {
      degree: "BSc — Cloud Computing & Cybersecurity",
      institution: "University",
      period: "2021 — 2025",
    },
  ],
  sidebarCertifications: [
    {
      name: "AWS Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "2024",
    },
    {
      name: "CompTIA Security+",
      issuer: "CompTIA",
      date: "2024",
    },
  ],
  links: [
    {
      label: "GitHub",
      url: "https://github.com/oraneekasem",
      icon: "github",
    },
    {
      label: "LinkedIn",
      url: "https://linkedin.com/in/oraneekasem",
      icon: "linkedin",
    },
    {
      label: "Portfolio",
      url: "https://oranee.dev",
      icon: "portfolio",
    },
  ],
  interests: ["Open Source", "CTF Challenges", "Cloud Architecture", "UI Design"],
  about:
    "I am a Full Stack Developer with a strong foundation in cloud computing and cybersecurity. I enjoy turning complex problems into elegant, secure solutions — from responsive front-end interfaces to robust back-end systems deployed on modern cloud infrastructure. I value clean architecture, accessibility, and continuous learning.",
  experience: [
    {
      role: "Software Developer Intern",
      company: "Tech Company",
      period: "2024 — Present",
      location: "Auckland, NZ",
      highlights: [
        "Developed and maintained React/TypeScript features for internal tools used by 200+ employees.",
        "Implemented REST API integrations and improved page load performance by 30%.",
        "Collaborated in Agile sprints with code reviews and CI/CD pipelines.",
      ],
    },
    {
      role: "Freelance Web Developer",
      company: "Self-employed",
      period: "2023 — 2024",
      highlights: [
        "Built responsive portfolio and business websites for small clients.",
        "Configured cloud hosting, SSL, and basic security hardening on AWS.",
        "Delivered projects on time with clear client communication.",
      ],
    },
  ],
  projects: [
    {
      name: "Secure Cloud Dashboard",
      description:
        "A full-stack monitoring dashboard with role-based access control, real-time metrics, and AWS deployment.",
      technologies: ["React", "Node.js", "PostgreSQL", "AWS", "Docker"],
      url: "https://github.com/oraneekasem",
    },
    {
      name: "Network Vulnerability Scanner",
      description:
        "Academic capstone tool for scanning local networks and reporting common misconfigurations with remediation guidance.",
      technologies: ["Python", "Linux", "Nmap", "Flask"],
    },
    {
      name: "orn-cv",
      description:
        "This portfolio — a single-page CV built with React, TypeScript, Tailwind CSS, and subtle Framer Motion animations.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Vite", "Framer Motion"],
      url: "https://github.com/oraneekasem/orn-cv",
    },
  ],
  mainEducation: [
    {
      degree: "Bachelor of Science — Cloud Computing & Cybersecurity",
      institution: "University",
      period: "2021 — 2025",
      description:
        "Coursework in distributed systems, network security, cloud architecture, software engineering, and ethical hacking.",
    },
  ],
  mainCertifications: [
    {
      name: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "2024",
    },
    {
      name: "CompTIA Security+",
      issuer: "CompTIA",
      date: "2024",
    },
  ],
  technicalSkills: [
    {
      category: "Frontend",
      items: ["React", "TypeScript", "Tailwind CSS", "HTML/CSS", "Vite"],
    },
    {
      category: "Backend",
      items: ["Node.js", "Express", "Python", "REST APIs", "PostgreSQL"],
    },
    {
      category: "Cloud & Infrastructure",
      items: ["AWS (EC2, S3, Lambda)", "Docker", "GitHub Actions", "Linux"],
    },
    {
      category: "Security",
      items: ["OWASP Top 10", "Network Security", "Encryption", "Secure SDLC"],
    },
  ],
  awards: [
    {
      title: "Dean's List",
      issuer: "University",
      date: "2023",
    },
  ],
};
