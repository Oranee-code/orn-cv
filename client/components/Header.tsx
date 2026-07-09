import { motion } from "framer-motion";
import profilePhoto from "../assets/profile.svg";

interface HeaderProps {
  name: string;
  title: string;
  summary?: string;
}

export function Header({ name, title, summary }: HeaderProps) {
  return (
    <motion.header
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="flex flex-col items-center gap-5 sm:gap-6 md:flex-row md:items-center md:justify-between md:gap-8"
    >
      <div className="flex shrink-0">
        <img
          src={profilePhoto}
          alt={`${name} profile photo`}
          className="h-24 w-24 rounded-full border-4 border-surface object-cover shadow-md ring-2 ring-accent/20 sm:h-28 sm:w-28 md:h-32 md:w-32 lg:h-36 lg:w-36"
        />
      </div>

      <div className="max-w-3xl text-center md:text-right">
        <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl md:text-4xl lg:text-5xl">
          {name}
        </h1>
        <p className="mt-1 text-base font-medium text-accent sm:text-lg md:text-xl">
          {title}
        </p>
        {summary && (
          <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base md:ml-auto">
            {summary}
          </p>
        )}
      </div>
    </motion.header>
  );
}
