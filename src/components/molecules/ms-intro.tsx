import Image from "next/image";
import { useTranslations } from "next-intl";

import Reveal from "@/components/motion/reveal";
import TextLink from "@atoms/text-link";

export default function Intro() {
  const t = useTranslations("HomePage.intro");

  return (
    <section className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 md:px-8 lg:grid-cols-2 lg:gap-20 lg:py-28">
      <Reveal className="relative order-2 lg:order-1">
        <div className="relative overflow-hidden rounded-[2rem]">
          <Image
            src="/assets/get-in-touch.webp"
            alt={t("image_alt")}
            width={1920}
            height={1092}
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="aspect-[4/3] w-full object-cover"
          />
        </div>
        <div aria-hidden className="absolute -bottom-3 -right-3 -z-10 size-32 md:-bottom-5 md:-right-5 md:size-40 rounded-[2rem] bg-leaf/25" />
        <div aria-hidden className="absolute -left-3 -top-3 -z-10 size-24 md:-left-5 md:-top-5 md:size-28 rounded-[1.5rem] bg-sky/20" />
      </Reveal>

      <Reveal className="order-1 lg:order-2" delay={0.1}>
        <h2 className="text-[2rem] font-semibold leading-[1.12] md:text-[2.6rem]">{t("title")}</h2>
        <p className="mt-6 text-lg text-slate">{t("description")}</p>
        <p className="mt-4 text-lg text-slate">{t("description_2")}</p>
        <TextLink href="/about" className="mt-8">
          {t("link")}
        </TextLink>
      </Reveal>
    </section>
  );
}
