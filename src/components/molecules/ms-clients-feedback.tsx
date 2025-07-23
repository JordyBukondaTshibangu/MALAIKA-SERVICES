import { useTranslations } from "next-intl";
import * as motion from "motion/react-client";

import ClientCard from "@atoms/client-card";

function MsClientsFeedback() {
  const t = useTranslations("HomePage");

  return (
    <section className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row gap-4 md:gap-10 px-5">
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full md:w-2/3 flex flex-col gap-4"
      >
        <h3 className="font-medium text-md md:text-lg text-[#047db2]">
          {t("clients_feedback.title")}
        </h3>
        <h2 className="text-xl md:text-3xl font-medium text-black leading-10">
          {t("clients_feedback.subtitle")}
        </h2>
        <p className="text-[#7A7A7A] leading-8 max-w-xl">
          {t("clients_feedback.description")}
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="grid grid-cols-1 md:grid-cols-2 gap-10"
      >
        <ClientCard
          name={t("clients_feedback.client_1.name")}
          title={t("clients_feedback.client_1.position")}
          imageSrc="/assets/client-1.webp"
          feedback={t("clients_feedback.client_1.feedback")}
        />
        <ClientCard
          name={t("clients_feedback.client_2.name")}
          title={t("clients_feedback.client_2.position")}
          imageSrc="/assets/client-2.webp"
          feedback={t("clients_feedback.client_2.feedback")}
        />
      </motion.div>
    </section>
  );
}

export default MsClientsFeedback;
