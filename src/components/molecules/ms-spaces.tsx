import { useTranslations } from "next-intl";

import { spaceServices, contactHref } from "@/data/services";
import Reveal, { RevealGroup, RevealItem } from "@/components/motion/reveal";
import SectionHeading from "@atoms/section-heading";
import TextLink from "@atoms/text-link";
import { ButtonLink } from "@atoms/button";

type Props = { detailed?: boolean };

// Workspaces + business support, on the brand navy. `detailed` shows the full
// Plaquette text and a per-service call to action (services page).
export default function Spaces({ detailed = false }: Props) {
  const t = useTranslations("Spaces");
  const home = useTranslations("HomePage.spaces");

  return (
    <section id="espaces" aria-labelledby="espaces-title" className="relative scroll-mt-16 overflow-hidden bg-ink text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 -top-40 size-[34rem] rounded-full bg-sky/20 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-48 -left-40 size-[30rem] rounded-full bg-leaf/15 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-5 py-20 md:px-8 lg:py-28">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            id="espaces-title"
            tone="light"
            title={detailed ? t("title") : home("title")}
            description={detailed ? t("description") : home("description")}
          />
          <Reveal delay={0.1} className="shrink-0 text-white/70">
            {t("availability")}
          </Reveal>
        </div>

        <RevealGroup className="mt-14 grid gap-px overflow-hidden rounded-[2rem] bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
          {spaceServices.map(({ key, icon: Icon }) => (
            <RevealItem key={key} className="group flex flex-col bg-ink p-7 transition-colors duration-300 hover:bg-ink-soft md:p-8">
              <Icon
                size={30}
                strokeWidth={1.5}
                aria-hidden
                className="text-leaf transition-transform duration-500 group-hover:-translate-y-1"
              />
              <h3 className="mt-6 text-xl font-semibold !text-white">{t(`${key}.title`)}</h3>
              <p className={`mt-3 text-white/70 ${detailed ? "" : "line-clamp-3"}`}>{t(`${key}.description`)}</p>
              {detailed && (
                <TextLink tone="light" href={contactHref(key)} className="mt-auto pt-6">
                  {t(`${key}.cta`)}
                </TextLink>
              )}
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal className="mt-12 flex flex-col items-start justify-between gap-6 rounded-[2rem] bg-white/5 p-7 ring-1 ring-white/10 md:flex-row md:items-center md:p-8">
          <div className="max-w-2xl">
            <h3 className="text-xl font-semibold !text-white">{t("visit_title")}</h3>
            <p className="mt-2 text-white/70">{t("visit_description")}</p>
          </div>
          <div className="flex shrink-0 flex-wrap gap-3">
            <ButtonLink href={contactHref("visit")} variant="light">
              {t("visit_cta")}
            </ButtonLink>
            {!detailed && (
              <ButtonLink href={{ pathname: "/services", hash: "espaces" }} variant="ghost-light">
                {home("link")}
              </ButtonLink>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
