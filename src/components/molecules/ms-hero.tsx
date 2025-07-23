"use client";
import { useTranslations } from "next-intl";
import * as motion from "motion/react-client";

import Button from "@atoms/button";

function Hero() {
  const t = useTranslations("HomePage");
  return (
    <section className="bg-[url('/assets/hero-image.webp')] bg-cover w-full flex flex-col items-center h-[80%] -mt-48">
      <div className="flex flex-col gap-48 md:items-center  w-full h-full bg-black/70 pt-72 pb-48">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col md:items-center gap-8 w-full lg:w-1/2 pt-18 px-5"
        >
          <h1 className="text-[52px] font-medium text-white md:text-center leading-[1.2]">
            <span className="font-bold block lg:inline">{t("hero.title")}</span>
            <span className="text-[#49990a] font-bold mr-1">
              {t("hero.title_description_1")}
            </span>
            <span className="block font-bold">
              {" "}
              {t("hero.title_description_2")}
            </span>
          </h1>
          <p className="text-lg text-white md:text-center w-3/5">
            {t("hero.subtitle")}
          </p>
          <div className="flex flex-col md:flex-row gap-6">
            <Button buttonText={t("hero.button_1")} />
            <Button buttonText={t("hero.button_2")} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
