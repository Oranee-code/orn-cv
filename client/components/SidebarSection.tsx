interface SidebarSectionProps {
  title: string;
  children: React.ReactNode;
}

export function SidebarSection({ title, children }: SidebarSectionProps) {
  return (
    <div className="mb-8 last:mb-0">
      <h3 className="mb-3 text-xs font-semibold uppercase tracking-[0.15em] text-sidebar-heading">
        {title}
      </h3>
      {children}
    </div>
  );
}
