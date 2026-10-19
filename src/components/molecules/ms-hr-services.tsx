import { useTranslations } from "next-intl";
import { ArrowUpRight } from "lucide-react";

import { Link } from "@/i18n/navigation";
import { hrServices, contactHref } from "@/data/services";
import Reveal, { RevealGroup, RevealItem } from "@/components/motion/reveal";
import SectionHeading from "@atoms/section-heading";
import TextLink from "@atoms/text-link";

/** Compact list for the home page: each row links to the detailed block on /services. */
export function HrServicesSummary() {
  const t = useTranslations("HrServices");
  const home = useTranslations("HomePage.hr");
  const common = useTranslations("Common");

  return (
    <section className="bg-mist">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 md:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16 lg:py-28">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading title={home("title")} description={home("description")} />
          <Reveal delay={0.1}>
            <TextLink href="/services" className="mt-8">
              {home("link")}
            </TextLink>
          </Reveal>
        </div>

        <RevealGroup className="flex flex-col gap-3">
          {hrServices.map(({ key, icon: Icon }) => (
            <RevealItem key={key}>
              <Link
                href={{ pathname: "/services", hash: key }}
                className="group flex items-start gap-5 rounded-3xl bg-white p-6 ring-1 ring-transparent transition-[box-shadow,transform] duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_40px_-24px_rgba(15,27,61,0.45)] hover:ring-line md:p-7"
              >
                <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-mist text-sky-deep transition-colors duration-300 group-hover:bg-ink group-hover:text-white">
                  <Icon size={24} strokeWidth={1.75} aria-hidden />
                </span>
                <span className="flex-1">
                  <span className="flex flex-wrap items-center gap-x-3 gap-y-1">
                    <span className="font-display text-xl font-semibold text-ink">{t(`${key}.title`)}</span>
                    {key === "training" && (
                      <span className="rounded-full bg-leaf/15 px-2.5 py-0.5 text-xs font-semibold text-leaf-deep">
                        {common("in_development")}
                      </span>
                    )}
                  </span>
                  <span className="mt-1.5 block text-slate">{t(`${key}.summary`)}</span>
                </span>
                <ArrowUpRight
                  aria-hidden
                  className="mt-1 shrink-0 text-slate transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink"
                />
              </Link>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}

/** Full descriptions for the services page, one block per service. */
export function HrServicesDetailed() {
  const t = useTranslations("HrServices");
  const page = useTranslations("ServicesPage");
  const common = useTranslations("Common");

  return (
    <section aria-labelledby="rh" className="mx-auto max-w-7xl px-5 py-20 md:px-8 lg:py-28">
      <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <SectionHeading id="rh" title={page("hr_title")} />
        <Reveal delay={0.1}>
          <p className="text-lg text-slate">{t("intro")}</p>
          <p className="mt-4 border-l-[3px] border-leaf pl-4 text-ink-soft">{t("scope_note")}</p>
        </Reveal>
      </div>

      <div className="mt-16 flex flex-col">
        {hrServices.map(({ key, icon: Icon }) => (
          <article
            key={key}
            id={key}
            className="grid scroll-mt-28 gap-6 border-t border-line py-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16"
          >
            <Reveal className="flex items-start gap-4">
              <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-mist text-sky-deep">
                <Icon size={24} strokeWidth={1.75} aria-hidden />
              </span>
              <div>
                <h3 className="text-2xl font-semibold leading-tight">{t(`${key}.title`)}</h3>
                {key === "training" && (
                  <span className="mt-3 inline-block rounded-full bg-leaf/15 px-2.5 py-0.5 text-xs font-semibold text-leaf-deep">
                    {common("in_development")}
                  </span>
                )}
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="text-slate">{t(`${key}.body_1`)}</p>
              <p className="mt-4 text-slate">{t(`${key}.body_2`)}</p>
              <TextLink href={contactHref(key)} className="mt-6">
                {t(`${key}.cta`)}
              </TextLink>
            </Reveal>
          </article>
        ))}
      </div>
    </section>
  );
}
