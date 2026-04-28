"use client";

import * as motion from "motion/react-client";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function NotFound() {
  const t = useTranslations("NotFound");

  return (
    <main className="flex flex-col w-full min-h-screen bg-white">
      <section className="bg-[#047db2] h-[80%] -mt-48 pt-64 pb-20 px-5">
        <div className="max-w-7xl mx-auto w-full">
          <motion.h1
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-5xl font-medium text-white is-style-underlined-heading"
          >
            {t("banner_title")}
          </motion.h1>
        </div>
      </section>

      <section className="flex-1 flex items-center justify-center px-5 py-24">
        <div className="max-w-2xl mx-auto flex flex-col items-center gap-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-[140px] font-bold leading-none text-[#047db2] select-none">
              {t("code")}
            </span>
            <span className="block w-20 h-1 bg-[#6bb238] rounded-full" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
            className="flex flex-col items-center gap-4"
          >
            <h2 className="text-2xl md:text-3xl font-medium text-black">
              {t("title")}
            </h2>
            <p className="text-[#7A7A7A] leading-8 max-w-md">
              {t("description")}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
          >
            <Link
              href="/"
              className="inline-block bg-[#047db2] hover:bg-[#2598d4] text-white font-medium py-4 px-8 rounded uppercase transition-colors duration-200"
            >
              {t("button")}
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
