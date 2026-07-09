export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border px-6 py-6 text-center text-xs text-muted lg:px-10">
      <p>
        © {year} Oranee Kasem. Built with React, TypeScript & Tailwind CSS.
      </p>
    </footer>
  );
}
