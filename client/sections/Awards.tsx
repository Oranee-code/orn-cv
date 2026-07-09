import type { AwardItem } from "../types";
import { SectionWrapper } from "../components/SectionWrapper";

interface AwardsProps {
  awards: AwardItem[];
}

export function Awards({ awards }: AwardsProps) {
  if (awards.length === 0) return null;

  return (
    <SectionWrapper id="awards" title="Awards">
      <ul className="space-y-3">
        {awards.map((award) => (
          <li
            key={`${award.title}-${award.date}`}
            className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between"
          >
            <div>
              <p className="text-sm font-semibold text-foreground">
                {award.title}
              </p>
              <p className="text-sm text-muted">{award.issuer}</p>
            </div>
            <p className="text-xs text-muted">{award.date}</p>
          </li>
        ))}
      </ul>
    </SectionWrapper>
  );
}
