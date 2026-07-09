import type { ContactInfo } from "../types";
import { SidebarSection } from "../components/SidebarSection";

interface ContactProps {
  contact: ContactInfo;
}

export function Contact({ contact }: ContactProps) {
  return (
    <SidebarSection title="Contact">
      <ul className="space-y-2 text-sm text-sidebar-text">
        <li>
          <a
            href={`mailto:${contact.email}`}
            className="transition-colors hover:text-sidebar-heading"
          >
            {contact.email}
          </a>
        </li>
        <li>
          <a
            href={`tel:${contact.phone.replace(/\s/g, "")}`}
            className="transition-colors hover:text-sidebar-heading"
          >
            {contact.phone}
          </a>
        </li>
        <li>{contact.location}</li>
        {contact.website && (
          <li>
            <a
              href={contact.website}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-sidebar-heading"
            >
              {contact.website.replace(/^https?:\/\//, "")}
            </a>
          </li>
        )}
      </ul>
    </SidebarSection>
  );
}
