import { useTranslations } from "next-intl";
import * as motion from "motion/react-client";

export default function MsContactBanner() {
  const t = useTranslations("Contact");
  return (
    <section className="bg-[#047db2]  h-[80%] -mt-48 pt-52 pb-20 px-5">
      <div className="max-w-7xl mx-auto w-full flex gap-14">
        <motion.h1
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl font-medium text-white is-style-underlined-heading"
        >
          {t("title")}
        </motion.h1>
      </div>
    </section>
  );
}
