import { useTranslations } from "next-intl";
import { Eye, Puzzle, Handshake, Layers, ListChecks, HeartHandshake } from "lucide-react";

import { RevealGroup, RevealItem } from "@/components/motion/reveal";
import SectionHeading from "@atoms/section-heading";

const reasons = [
  { key: "transparent", icon: Eye },
  { key: "tailored", icon: Puzzle },
  { key: "close", icon: Handshake },
  { key: "skills", icon: Layers },
  { key: "procedures", icon: ListChecks },
  { key: "human", icon: HeartHandshake },
] as const;

export default function WhyUs() {
  const t = useTranslations("WhyUs");
  return (
    <section className="bg-mist">
      <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 lg:py-28">
        <SectionHeading title={t("title")} />
        <RevealGroup className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map(({ key, icon: Icon }) => (
            <RevealItem key={key}>
              <span className="grid size-12 place-items-center rounded-2xl bg-white text-sky-deep shadow-[0_8px_20px_-14px_rgba(15,27,61,0.5)]">
                <Icon size={22} strokeWidth={1.75} aria-hidden />
              </span>
              <h3 className="mt-5 text-xl font-semibold">{t(`${key}.title`)}</h3>
              <p className="mt-2 text-slate">{t(`${key}.description`)}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
