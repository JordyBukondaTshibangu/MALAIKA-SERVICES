"use client";

import { useTranslations } from "next-intl";
import * as motion from "motion/react-client";

import CaseStudyCard from "@atoms/case-study-card";

export default function MsCaseStudies() {
  const t = useTranslations("HomePage");

  const caseStudies = [
    {
      image: "/assets/case-study-one.webp",
      title: t("case_studies.case_1.title"),
      description: t("case_studies.case_1.description"),
      buttonText: t("case_studies.case_1.button"),
    },
    {
      image: "/assets/case-study-two.webp",
      title: t("case_studies.case_2.title"),
      description: t("case_studies.case_2.description"),
      buttonText: t("case_studies.case_2.button"),
    },
    {
      image: "/assets/case-study-three.webp",
      title: t("case_studies.case_3.title"),
      description: t("case_studies.case_3.description"),
      buttonText: t("case_studies.case_3.button"),
    },
  ];

  return (
    <section className="relative bg-[url('/assets/hero-image.webp')] bg-cover w-full flex flex-col items-center min-h-[90%]">
      <div className="flex flex-col items-center w-full h-full bg-black/70 gap-24 py-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-11/12 md:w-2/3 flex flex-col justify-center gap-6 items-center text-center"
        >
          <h3 className="font-medium text-md md:text-lg text-[#047db2]">
            {t("case_studies.title")}
          </h3>
          <h2 className="text-xl md:text-3xl font-medium text-white leading-10">
            {t("case_studies.subtitle")}
          </h2>
          <p className="text-white leading-8">
            {t("case_studies.description")}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-7xl w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-10"
        >
          {caseStudies.map((study, idx) => (
            <CaseStudyCard key={idx} {...study} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
