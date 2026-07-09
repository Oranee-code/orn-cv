import type { CertificationItem } from "../types";
import { SectionWrapper } from "../components/SectionWrapper";

interface MainCertificationsProps {
  certifications: CertificationItem[];
}

export function MainCertifications({
  certifications,
}: MainCertificationsProps) {
  return (
    <SectionWrapper id="certifications" title="Certifications">
      <div className="grid gap-4 sm:grid-cols-2">
        {certifications.map((cert) => (
          <article
            key={`${cert.name}-${cert.date}`}
            className="rounded-lg border border-border p-4"
          >
            <h3 className="text-sm font-semibold text-foreground">{cert.name}</h3>
            <p className="mt-1 text-sm text-muted">{cert.issuer}</p>
            <p className="mt-1 text-xs text-muted">{cert.date}</p>
          </article>
        ))}
      </div>
    </SectionWrapper>
  );
}
