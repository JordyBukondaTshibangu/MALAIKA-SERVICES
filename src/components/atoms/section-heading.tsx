import Reveal from "@/components/motion/reveal";

type Props = {
  title: string;
  description?: string;
  tone?: "dark" | "light";
  id?: string;
  className?: string;
  as?: "h1" | "h2";
};

export default function SectionHeading({ title, description, tone = "dark", id, className = "", as: Tag = "h2" }: Props) {
  return (
    <Reveal className={`max-w-2xl ${className}`}>
      <Tag
        id={id}
        className={`text-[2rem] font-semibold leading-[1.12] md:text-[2.6rem] ${tone === "light" ? "!text-white" : ""}`}
      >
        {title}
      </Tag>
      {description && (
        <p className={`mt-4 text-lg ${tone === "light" ? "text-white/75" : "text-slate"}`}>{description}</p>
      )}
    </Reveal>
  );
}
