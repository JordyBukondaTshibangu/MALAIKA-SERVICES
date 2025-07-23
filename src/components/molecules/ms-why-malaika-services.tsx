import { useTranslations } from "next-intl";
import * as motion from "motion/react-client";

export default function MsWhyMalaikaServices() {
  const t = useTranslations("Services");

  const stats = [
    { value: "24k+", label: t("why_malaika.why_1") },
    { value: "98%", label: t("why_malaika.why_2") },
    { value: "5+", label: t("why_malaika.why_3") },
    { value: "100%", label: t("why_malaika.why_4") },
  ];

  return (
    <section className="py-20 px-5 md:py-48">
      <div className="max-w-7xl mx-auto w-full flex flex-col md:items-center gap-20">
        <motion.h1
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-3xl md:text-5xl font-medium text-black is-style-underlined-heading-blue"
        >
          {t("why_malaika.title")}
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-10"
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="w-full flex flex-col items-center gap-4"
            >
              <h3 className="text-4xl md:text-6xl font-semibold text-black">
                {stat.value}
              </h3>
              <span className="text-md md:text-lg font-medium text-black">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
