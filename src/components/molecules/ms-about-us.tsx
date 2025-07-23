import Image from "next/image";
import { useTranslations } from "next-intl";
import * as motion from "motion/react-client";

export default function MsAboutUs() {
  const t = useTranslations("About");
  return (
    <section className="bg-[#047db2]  h-[80%] -mt-48 pt-52 pb-20 md:pb-36 px-5">
      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row gap-14">
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col gap-6 w-3/4"
        >
          <h1 className="text-5xl font-medium text-white is-style-underlined-heading">
            {t("title")}
          </h1>
          <div className="flex flex-col gap-4">
            <p className="text-white text-lg font-normal leading-8">
              {t("description_1")}
            </p>
            <p className="text-white text-lg font-normal leading-8">
              {t("description_2")}
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="hidden md:flex flex-col gap-4 px-5"
        >
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Image
              src="/assets/about-us-gallery-1.jpg"
              width={300}
              height={300}
              alt="gallery-image-1"
              className="object-contain"
            />
            <Image
              src="/assets/about-us-gallery-2.jpg"
              width={300}
              height={300}
              alt="gallery-image-2"
              className="object-contain"
            />
            <Image
              src="/assets/about-us-gallery-3.jpg"
              width={300}
              height={300}
              alt="gallery-image-3"
              className="object-contain"
            />
          </div>
          <div className="w-full md:grid grid-cols-1 sm:grid-cols-2  gap-4">
            <Image
              src="/assets/about-us-gallery-4.jpg"
              width={350}
              height={300}
              alt="gallery-image-4"
              className="object-contain"
            />
            <Image
              src="/assets/about-us-gallery-5.jpg"
              width={350}
              height={300}
              alt="gallery-image-5"
              className="object-contain"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
