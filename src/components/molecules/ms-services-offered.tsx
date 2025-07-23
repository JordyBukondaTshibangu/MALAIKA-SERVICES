import { useTranslations } from "next-intl";
import * as motion from "motion/react-client";

import Button from "@atoms/button";
import ServiceCard from "@atoms/service-card";
import { useServices } from "@/hooks/services";

export default function MsServicesOffered() {
  const t = useTranslations("HomePage");

  const services = useServices();

  return (
    <section className="max-w-7xl mx-auto w-full flex flex-col gap-20 px-5">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 md:gap-8">
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full flex flex-col gap-4"
        >
          <h3 className="font-medium text-md md:text-lg text-[#047db2]">
            {t("services.title")}
          </h3>
          <h2 className="text-xl md:text-3xl font-medium text-black leading-10">
            {t("services.subtitle")}
          </h2>
        </motion.div>

        <p className="w-full text-[#7A7A7A] leading-8 max-w-xl">
          {t("services.description")}
        </p>

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full flex lg:justify-end"
        >
          <Button buttonText={t("services.button")} />
        </motion.div>
      </div>

      {/* Services Grid */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
      >
        {services.map((service, idx) => (
          <ServiceCard key={idx} {...service} />
        ))}
      </motion.div>
    </section>
  );
}
