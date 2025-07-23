import { useTranslations } from "next-intl";
import * as motion from "motion/react-client";

import ToolCard from "@atoms/tool-card";

export default function MsOurTools() {
  const t = useTranslations("Services");

  const tools = [
    {
      title: t("tools.tool_1.title"),
      description: t("tools.tool_1.description"),
    },
    {
      title: t("tools.tool_2.title"),
      description: t("tools.tool_2.description"),
    },
  ];
  return (
    <section className="bg-[#047db2]  h-[80%] py-20 md:py-48 px-5">
      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row gap-20">
        <div className="w-full md:w-1/2">
          <motion.h1
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-5xl font-medium text-white is-style-underlined-heading"
          >
            {t("tools.title")}
          </motion.h1>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full grid grid-cols-1 sm:grid-cols-2 gap-10"
        >
          {tools.map((tool, idx) => (
            <ToolCard key={idx} {...tool} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
