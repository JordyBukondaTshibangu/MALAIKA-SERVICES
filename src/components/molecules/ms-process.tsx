"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useTranslations } from "next-intl";

import SectionHeading from "@atoms/section-heading";
import { ButtonLink } from "@atoms/button";

const steps = ["1", "2", "3", "4", "5"] as const;

// The five-step client journey as an accordion timeline: the connecting line
// fills up to the step the visitor opens.
export default function Process() {
  const t = useTranslations("Process");
  const [active, setActive] = useState(0);

  return (
    <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 lg:py-28">
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading title={t("title")} description={t("description")} />
          <div className="mt-8 hidden lg:block">
            <ButtonLink href="/contact">{t("cta")}</ButtonLink>
          </div>
        </div>

        <ol className="relative">
          {steps.map((n, i) => {
            const isOpen = i === active;
            const done = i < active;
            return (
              <li key={n} className="relative pb-3 last:pb-0">
                {i < steps.length - 1 && (
                  <span aria-hidden className="absolute bottom-0 left-[1.3125rem] top-[3.25rem] w-0.5 overflow-hidden rounded-full bg-line">
                    <motion.span
                      className="absolute inset-0 origin-top bg-gradient-to-b from-sky to-leaf"
                      initial={false}
                      animate={{ scaleY: i < active ? 1 : 0 }}
                      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                    />
                  </span>
                )}
                <button
                  type="button"
                  onClick={() => setActive(i)}
                  aria-expanded={isOpen}
                  aria-controls={`step-panel-${n}`}
                  className="group flex w-full items-center gap-5 rounded-2xl py-2 pr-3 text-left"
                >
                  <span
                    className={`relative z-10 grid size-11 shrink-0 place-items-center rounded-full font-display text-lg font-semibold transition-colors duration-300 ${
                      isOpen
                        ? "bg-ink text-white"
                        : done
                          ? "bg-leaf text-white"
                          : "bg-white text-slate ring-2 ring-line group-hover:ring-sky"
                    }`}
                  >
                    {n}
                  </span>
                  <span className="flex-1">
                    <span className="sr-only">{t("step_label", { n })} : </span>
                    <span
                      className={`font-display text-xl font-semibold transition-colors md:text-2xl ${
                        isOpen ? "text-ink" : "text-slate group-hover:text-ink"
                      }`}
                    >
                      {t(`steps.${n}.title`)}
                    </span>
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`step-panel-${n}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 pl-16 pr-2 pt-1 text-lg text-slate">{t(`steps.${n}.description`)}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
