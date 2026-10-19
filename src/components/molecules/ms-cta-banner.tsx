import { useTranslations } from "next-intl";

import Reveal from "@/components/motion/reveal";
import { ButtonLink } from "@atoms/button";
import { contactHref } from "@/data/services";

export default function CtaBanner() {
  const t = useTranslations("Cta");

  return (
    <section className="px-5 pb-20 md:px-8 lg:pb-28">
      <Reveal className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-leaf px-7 py-14 md:px-14 md:py-20">
        {/* faint network motif */}
        <svg aria-hidden viewBox="0 0 400 300" className="pointer-events-none absolute -right-10 top-1/2 hidden h-[130%] -translate-y-1/2 text-white/25 md:block">
          <g stroke="currentColor" strokeWidth="2" fill="none">
            <path d="M200 20 L80 80 L40 190 L120 280 L280 280 L360 180 L320 70 Z" />
            <path d="M200 20 L150 140 L280 160 L320 70 M80 80 L150 140 L120 280 M40 190 L150 140 M280 160 L360 180 M280 160 L280 280" />
          </g>
          <g fill="currentColor">
            {[[200,20],[80,80],[40,190],[120,280],[280,280],[360,180],[320,70],[150,140],[280,160]].map(([x,y]) => (
              <circle key={`${x}-${y}`} cx={x} cy={y} r="9" />
            ))}
          </g>
        </svg>

        <div className="relative max-w-2xl">
          <h2 className="text-[2rem] font-semibold leading-[1.1] !text-ink md:text-[2.75rem]">{t("title")}</h2>
          <p className="mt-5 text-lg text-ink/80">{t("description")}</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/contact">{t("primary")}</ButtonLink>
            <ButtonLink href={contactHref("visit")} variant="light">
              {t("secondary")}
            </ButtonLink>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
