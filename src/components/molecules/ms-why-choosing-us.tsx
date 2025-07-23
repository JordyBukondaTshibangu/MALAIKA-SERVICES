import { useTranslations } from "next-intl";
import * as motion from "motion/react-client";

export default function MsWhyChoosingUs() {
  const t = useTranslations("About");

  return (
    <section className="bg-[#047db2]  h-[80%] py-20 md:pt-52 md:pb-36 px-5">
      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row gap-14">
        <div className="flex flex-col gap-6 md:w-3/4">
          <motion.h1
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-5xl font-medium text-white leading-18 is-style-underlined-heading"
          >
            {t("why_choose_us.title")}
          </motion.h1>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10"
        >
          <div className="flex gap-6">
            <span className="text-6xl font-semibold text-white">1</span>
            <span className="text-lg font-medium text-white">
              {t("why_choose_us.reason_1")}
            </span>
          </div>

          <div className="flex gap-6">
            <span className="text-6xl font-semibold text-white">2</span>
            <span className="text-lg font-medium text-white">
              {t("why_choose_us.reason_2")}
            </span>
          </div>

          <div className="flex gap-6">
            <span className="text-6xl font-semibold text-white">3</span>
            <span className="text-lg font-medium text-white">
              {t("why_choose_us.reason_3")}
            </span>
          </div>

          <div className="flex gap-6">
            <span className="text-6xl font-semibold text-white">4</span>
            <span className="text-lg font-medium text-white">
              {t("why_choose_us.reason_4")}
            </span>
          </div>

          <div className="flex gap-6">
            <span className="text-6xl font-semibold text-white">5</span>
            <span className="text-lg font-medium text-white">
              {t("why_choose_us.reason_5")}
            </span>
          </div>

          <div className="flex gap-6">
            <span className="text-6xl font-semibold text-white">6</span>
            <span className="text-lg font-medium text-white">
              {t("why_choose_us.reason_6")}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
