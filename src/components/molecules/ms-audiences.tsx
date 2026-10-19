"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useTranslations } from "next-intl";

import { audiences, contactHref } from "@/data/services";
import SectionHeading from "@atoms/section-heading";
import TextLink from "@atoms/text-link";

// Tabs: pick an audience, the panel swaps to what we do for them.
export default function Audiences() {
  const t = useTranslations("Audiences");
  const [active, setActive] = useState(0);
  const current = audiences[active];
  const Icon = current.icon;

  return (
    <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 lg:py-28">
      <SectionHeading title={t("title")} description={t("description")} />

      <div className="mt-12 grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10">
        <div role="tablist" aria-label={t("title")} className="flex flex-col gap-1.5">
          {audiences.map((a, i) => {
            const selected = i === active;
            return (
              <button
                key={a.key}
                role="tab"
                id={`aud-tab-${a.key}`}
                aria-selected={selected}
                aria-controls="aud-panel"
                tabIndex={selected ? 0 : -1}
                onClick={() => setActive(i)}
                onKeyDown={(e) => {
                  if (e.key === "ArrowDown" || e.key === "ArrowRight") {
                    e.preventDefault();
                    const n = (i + 1) % audiences.length;
                    setActive(n);
                    document.getElementById(`aud-tab-${audiences[n].key}`)?.focus();
                  }
                  if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
                    e.preventDefault();
                    const n = (i - 1 + audiences.length) % audiences.length;
                    setActive(n);
                    document.getElementById(`aud-tab-${audiences[n].key}`)?.focus();
                  }
                }}
                className={`relative flex items-center gap-4 rounded-2xl px-5 py-4 text-left font-display text-lg font-medium transition-colors ${
                  selected ? "text-ink" : "text-slate hover:text-ink"
                }`}
              >
                {selected && (
                  <motion.span
                    layoutId="aud-active"
                    className="absolute inset-0 -z-10 rounded-2xl bg-mist"
                    transition={{ type: "spring", stiffness: 420, damping: 38 }}
                  />
                )}
                <span
                  className={`h-6 w-1 rounded-full transition-colors ${selected ? "bg-leaf" : "bg-line"}`}
                  aria-hidden
                />
                {t(`${a.key}.title`)}
              </button>
            );
          })}
        </div>

        <div
          id="aud-panel"
          role="tabpanel"
          aria-labelledby={`aud-tab-${current.key}`}
          className="relative min-h-[17rem] overflow-hidden rounded-[2rem] bg-gradient-to-br from-sky-deep to-ink p-8 text-white md:p-10"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={current.key}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <Icon size={36} strokeWidth={1.5} aria-hidden className="text-leaf" />
              <h3 className="mt-6 text-2xl font-semibold !text-white md:text-3xl">{t(`${current.key}.title`)}</h3>
              <p className="mt-4 max-w-xl text-lg text-white/80">{t(`${current.key}.description`)}</p>
              {current.key === "graduates" && (
                <TextLink tone="light" href={contactHref("application")} className="mt-6">
                  {t("graduates.cta")}
                </TextLink>
              )}
            </motion.div>
          </AnimatePresence>
          <Icon
            aria-hidden
            strokeWidth={0.75}
            className="pointer-events-none absolute -bottom-10 -right-10 size-56 text-white/[0.06]"
          />
        </div>
      </div>
    </section>
  );
}
