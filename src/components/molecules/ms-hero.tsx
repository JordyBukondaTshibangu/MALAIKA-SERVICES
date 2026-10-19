"use client";

import { motion } from "motion/react";
import { useTranslations } from "next-intl";

import { ButtonLink } from "@atoms/button";
import NetworkArt from "@molecules/ms-network-art";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  const t = useTranslations("HomePage.hero");
  const common = useTranslations("Common");

  return (
    <section className="relative -mt-20 overflow-hidden pt-20">
      {/* cool wash anchored to the art side */}
      <div aria-hidden className="absolute inset-y-0 right-0 -z-10 hidden w-[46%] rounded-bl-[4rem] bg-mist lg:block" />

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 pb-20 pt-10 md:px-8 lg:grid-cols-[1.05fr_1fr] lg:gap-8 lg:pb-28 lg:pt-16">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="flex items-center gap-3 font-display text-base font-medium text-leaf-deep"
          >
            <span aria-hidden className="h-0.5 w-8 rounded-full bg-leaf" />
            {common("tagline")}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.08, ease }}
            className="mt-6 text-[2.5rem] font-semibold leading-[1.06] sm:text-[3.25rem] lg:text-[3.9rem]"
          >
            {t("title")}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.18, ease }}
            className="mt-6 max-w-xl text-lg text-slate"
          >
            {t("description")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.28, ease }}
            className="mt-9 flex flex-col gap-3 sm:flex-row"
          >
            <ButtonLink href="/contact">{t("primary_cta")}</ButtonLink>
            <ButtonLink href={{ pathname: "/services", hash: "espaces" }} variant="secondary">
              {t("secondary_cta")}
            </ButtonLink>
          </motion.div>
        </div>

        <div className="px-4 sm:px-10 lg:px-0">
          <NetworkArt />
        </div>
      </div>
    </section>
  );
}
