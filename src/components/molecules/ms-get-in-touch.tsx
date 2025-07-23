import { useTranslations } from "next-intl";
import * as motion from "motion/react-client";

import Button from "@atoms/button";

export default function MsGetInTouch() {
  const t = useTranslations("HomePage");

  return (
    <section className="relative bg-[url('/assets/get-in-touch.webp')] bg-cover w-full flex flex-col items-center min-h-[90%]">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col items-center w-full h-full bg-black/70 gap-20 py-24"
      >
        <div className="w-11/12 md:w-1/2 flex flex-col justify-center gap-4 items-center text-center">
          <h3 className="font-medium  text-md md:text-lg text-[#047db2]">
            {t("get_in_touch.title")}
          </h3>
          <h2 className="text-xl md:text-3xl font-medium text-white leading-10">
            {t("get_in_touch.subtitle")}
            <span className="block text-[#49990a]">
              {t("get_in_touch.subtitle_description")}
            </span>
          </h2>
          <p className="text-sm text-white leading-8">
            {t("get_in_touch.description")}
          </p>
        </div>

        <Button buttonText={t("get_in_touch.button")} />
      </motion.div>
    </section>
  );
}
