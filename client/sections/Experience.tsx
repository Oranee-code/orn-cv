import type { ExperienceItem } from "../types";
import { SectionWrapper } from "../components/SectionWrapper";

interface ExperienceProps {
  experience: ExperienceItem[];
}

export function Experience({ experience }: ExperienceProps) {
  return (
    <SectionWrapper id="experience" title="Experience">
      <div className="space-y-8">
        {experience.map((item) => (
          <article key={`${item.company}-${item.period}`}>
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <div>
                <h3 className="text-base font-semibold text-foreground">
                  {item.role}
                </h3>
                <p className="text-sm font-medium text-accent">{item.company}</p>
              </div>
              <div className="text-xs text-muted">
                <span>{item.period}</span>
                {item.location && (
                  <span className="before:mx-1.5 before:content-['·']">
                    {item.location}
                  </span>
                )}
              </div>
            </div>
            <ul className="mt-3 space-y-1.5 text-sm text-muted">
              {item.highlights.map((highlight) => (
                <li key={highlight} className="flex gap-2 leading-relaxed">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                  {highlight}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </SectionWrapper>
  );
}
