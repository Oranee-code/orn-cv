import { type ReactNode } from "react";
import { motion } from "framer-motion";

interface SectionWrapperProps {
  id: string;
  title: string;
  children: ReactNode;
  className?: string;
}

export function SectionWrapper({
  id,
  title,
  children,
  className = "",
}: SectionWrapperProps) {
  return (
    <motion.section
      id={id}
      aria-labelledby={`${id}-heading`}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={`scroll-mt-24 ${className}`}
    >
      <h2
        id={`${id}-heading`}
        className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-accent"
      >
        {title}
      </h2>
      {children}
    </motion.section>
  );
}
