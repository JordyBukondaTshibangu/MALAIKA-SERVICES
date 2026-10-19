import Image from "next/image";
import { useTranslations } from "next-intl";
import { Compass, Target } from "lucide-react";

import Reveal, { RevealGroup, RevealItem } from "@/components/motion/reveal";
import SectionHeading from "@atoms/section-heading";
import { team } from "@/data/team";

export function AboutStory() {
  const t = useTranslations("About");
  return (
    <section className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 md:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20 lg:py-28">
      <Reveal>
        <p className="font-display text-2xl font-medium leading-snug text-ink md:text-[1.75rem]">{t("description_1")}</p>
        <p className="mt-6 text-lg text-slate">{t("description_2")}</p>
      </Reveal>
      <Reveal delay={0.1} className="relative">
        <Image
          src="/assets/about-us-gallery-1.jpg"
          alt={t("image_alt")}
          width={1920}
          height={1280}
          sizes="(min-width: 1024px) 35vw, 100vw"
          className="aspect-[5/4] w-full rounded-[2rem] object-cover"
        />
        <div aria-hidden className="absolute -bottom-5 -left-5 -z-10 size-36 rounded-[2rem] bg-sky/20" />
      </Reveal>
    </section>
  );
}

export function MissionVision() {
  const t = useTranslations("About");
  const items = [
    { key: "mission", icon: Target, className: "bg-ink text-white", title: "!text-white", body: "text-white/80", iconC: "text-leaf" },
    { key: "vision", icon: Compass, className: "bg-mist", title: "", body: "text-slate", iconC: "text-sky-deep" },
  ] as const;

  return (
    <section className="mx-auto max-w-7xl px-5 md:px-8">
      <RevealGroup className="grid gap-5 md:grid-cols-2">
        {items.map(({ key, icon: Icon, className, title, body, iconC }) => (
          <RevealItem key={key} className={`rounded-[2rem] p-8 md:p-12 ${className}`}>
            <Icon size={34} strokeWidth={1.5} aria-hidden className={iconC} />
            <h2 className={`mt-6 text-3xl font-semibold ${title}`}>{t(`${key}.title`)}</h2>
            <p className={`mt-4 text-lg ${body}`}>{t(`${key}.description`)}</p>
          </RevealItem>
        ))}
      </RevealGroup>
    </section>
  );
}

const valueKeys = ["transparency", "listening", "proximity", "rigor", "adaptability"] as const;

export function Values() {
  const t = useTranslations("About.values");
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 lg:py-28">
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <SectionHeading title={t("title")} className="lg:sticky lg:top-28 lg:self-start" />
        <dl className="flex flex-col">
          {valueKeys.map((key, i) => (
            <Reveal key={key} delay={i * 0.04} className="grid gap-2 border-t border-line py-7 md:grid-cols-[12rem_1fr] md:gap-8">
              <dt className="flex items-center gap-3 font-display text-xl font-semibold text-ink">
                <span aria-hidden className={`size-2.5 rounded-full ${i % 2 ? "bg-leaf" : "bg-sky"}`} />
                {t(`${key}.title`)}
              </dt>
              <dd className="text-slate">{t(`${key}.description`)}</dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}

// Hidden until src/data/team.ts has entries.
export function Team() {
  const t = useTranslations("About.team");
  if (team.length === 0) return null;

  return (
    <section className="mx-auto max-w-7xl px-5 pb-20 md:px-8 lg:pb-28">
      <SectionHeading title={t("title")} />
      <RevealGroup className="mt-12 grid gap-6 md:grid-cols-2">
        {team.map((m) => (
          <RevealItem key={m.name} className="flex flex-col gap-6 rounded-[2rem] bg-mist p-8 sm:flex-row">
            {m.photo && (
              <Image src={m.photo} alt={m.name} width={160} height={160} className="size-28 shrink-0 rounded-2xl object-cover" />
            )}
            <div>
              <h3 className="text-2xl font-semibold">{m.name}</h3>
              <p className="font-medium text-sky-deep">{m.role}</p>
              <dl className="mt-4 grid gap-1 text-sm text-slate">
                {m.education && (<div><dt className="inline font-semibold text-ink">{t("education")} : </dt><dd className="inline">{m.education}</dd></div>)}
                {m.experience && (<div><dt className="inline font-semibold text-ink">{t("experience")} : </dt><dd className="inline">{m.experience}</dd></div>)}
                {m.expertise && (<div><dt className="inline font-semibold text-ink">{t("expertise")} : </dt><dd className="inline">{m.expertise}</dd></div>)}
              </dl>
              {m.bio && <p className="mt-4 text-slate">{m.bio}</p>}
            </div>
          </RevealItem>
        ))}
      </RevealGroup>
    </section>
  );
}
