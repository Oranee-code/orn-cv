import type { CertificationItem } from "../types";
import { SidebarSection } from "../components/SidebarSection";

interface SidebarCertificationsProps {
  certifications: CertificationItem[];
}

export function SidebarCertifications({
  certifications,
}: SidebarCertificationsProps) {
  return (
    <SidebarSection title="Certifications">
      <ul className="space-y-3 text-sm">
        {certifications.map((cert) => (
          <li key={`${cert.name}-${cert.date}`}>
            <p className="font-medium text-sidebar-heading">{cert.name}</p>
            <p className="text-sidebar-text">{cert.issuer}</p>
            <p className="text-xs text-sidebar-muted">{cert.date}</p>
          </li>
        ))}
      </ul>
    </SidebarSection>
  );
}
