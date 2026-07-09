import type { EducationItem } from "../types";
import { SectionWrapper } from "../components/SectionWrapper";

interface MainEducationProps {
  education: EducationItem[];
}

export function MainEducation({ education }: MainEducationProps) {
  return (
    <SectionWrapper id="education" title="Education">
      <div className="space-y-6">
        {education.map((item) => (
          <article key={`${item.degree}-${item.period}`}>
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <div>
                <h3 className="text-base font-semibold text-foreground">
                  {item.degree}
                </h3>
                <p className="text-sm font-medium text-accent">
                  {item.institution}
                </p>
              </div>
              <p className="text-xs text-muted">{item.period}</p>
            </div>
            {item.description && (
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {item.description}
              </p>
            )}
          </article>
        ))}
      </div>
    </SectionWrapper>
  );
}
