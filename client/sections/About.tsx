import { SectionWrapper } from "../components/SectionWrapper";

interface AboutProps {
  content: string;
}

export function About({ content }: AboutProps) {
  return (
    <SectionWrapper id="about" title="About Me">
      <p className="text-sm leading-relaxed text-muted">{content}</p>
    </SectionWrapper>
  );
}
