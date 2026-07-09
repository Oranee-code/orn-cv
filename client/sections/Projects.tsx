import type { ProjectItem } from "../types";
import { SectionWrapper } from "../components/SectionWrapper";

interface ProjectsProps {
  projects: ProjectItem[];
}

export function Projects({ projects }: ProjectsProps) {
  return (
    <SectionWrapper id="projects" title="Projects">
      <div className="space-y-6">
        {projects.map((project) => (
          <article
            key={project.name}
            className="rounded-lg border border-border bg-surface/50 p-5 transition-colors hover:border-accent/30"
          >
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <h3 className="text-base font-semibold text-foreground">
                {project.url ? (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-accent"
                  >
                    {project.name}
                  </a>
                ) : (
                  project.name
                )}
              </h3>
            </div>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              {project.description}
            </p>
            <ul className="mt-3 flex flex-wrap gap-1.5">
              {project.technologies.map((tech) => (
                <li
                  key={tech}
                  className="rounded-md bg-tag px-2 py-0.5 text-xs text-muted"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </SectionWrapper>
  );
}
