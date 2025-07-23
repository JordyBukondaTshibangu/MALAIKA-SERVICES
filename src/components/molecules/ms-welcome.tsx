"use client";
import Image from "next/image";
import { useTranslations } from "next-intl";
import * as motion from "motion/react-client";
import { Users, Trophy, ListChecks, UserPen } from "lucide-react";

import MetricCard from "@atoms/metric-card";

export default function WelcomeToMs() {
  const t = useTranslations("HomePage");

  const metrics = [
    {
      icon: <Users color="#2598d4" size={45} />,
      value: "1,452 +",
      label: t("welcome_to_malaika.metrics.metric_1"),
    },
    {
      icon: <Trophy color="#2598d4" size={45} />,
      value: "5 +",
      label: t("welcome_to_malaika.metrics.metric_2"),
    },
    {
      icon: <ListChecks color="#2598d4" size={45} />,
      value: "128 +",
      label: t("welcome_to_malaika.metrics.metric_3"),
    },
    {
      icon: <UserPen color="#2598d4" size={45} />,
      value: "72 +",
      label: t("welcome_to_malaika.metrics.metric_4"),
    },
  ];

  return (
    <section className="max-w-7xl mx-auto flex flex-col gap-8 px-5">
      <div className="w-full flex flex-col lg:flex-row gap-12 md:py-10">
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full flex flex-col gap-4"
        >
          <h3 className="font-medium text-md md:text-lg text-[#047db2]">
            {t("welcome_to_malaika.title")}
          </h3>
          <h2 className="text-xl md:text-3xl font-medium text-black leading-10">
            {t("welcome_to_malaika.subtitle")}
          </h2>
          <p className="text-[#7A7A7A] leading-8">
            {t("welcome_to_malaika.description")}
          </p>
          <div className="md:flex justify-between">
            <ul className="list-disc text-[13px] py-2 text-[#6bb238] font-bold leading-8 flex flex-col gap-2">
              <li>{t("welcome_to_malaika.list_1.0")}</li>
              <li>{t("welcome_to_malaika.list_1.1")}</li>
              <li>{t("welcome_to_malaika.list_1.2")}</li>
            </ul>

            <ul className="list-disc text-[13px] py-2 text-[#6bb238] font-bold leading-8 flex flex-col gap-2">
              <li>{t("welcome_to_malaika.list_2.0")}</li>
              <li>{t("welcome_to_malaika.list_2.1")}</li>
              <li>{t("welcome_to_malaika.list_2.2")}</li>
            </ul>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full"
        >
          <Image
            src="/assets/get-in-touch.webp"
            width={700}
            height={300}
            alt="Get in Touch"
            className="rounded-xl w-full h-auto"
          />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full flex flex-wrap justify-between gap-6 bg-[#f9f9f9] p-8 rounded-xl"
      >
        {metrics.map((metric, index) => (
          <MetricCard key={index} {...metric} />
        ))}
      </motion.div>
    </section>
  );
}
