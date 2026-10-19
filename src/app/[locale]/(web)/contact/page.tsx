import { Suspense } from "react";
import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

import PageHeader from "@molecules/ms-page-header";
import ContactForm from "@molecules/ms-contact-form";
import ContactDetails from "@molecules/ms-contact-details";
import MapLazy from "@molecules/ms-map-lazy";
import Reveal from "@/components/motion/reveal";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });
  return { title: t("contact_title") };
}

export default async function ContactPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("Contact");

  return (
    <main className="pt-4">
      <PageHeader title={t("title")} lead={t("lead")} />

      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-16 md:px-8 lg:grid-cols-[1.4fr_1fr] lg:gap-14 lg:py-24">
        <Reveal>
          <h2 className="mb-8 text-2xl font-semibold">{t("form_title")}</h2>
          <Suspense>
            <ContactForm />
          </Suspense>
        </Reveal>
        <Reveal delay={0.1} className="flex flex-col gap-6">
          <ContactDetails />
          <div className="h-72 overflow-hidden rounded-[2rem] ring-1 ring-line lg:h-auto lg:flex-1">
            <h2 className="sr-only">{t("map_title")}</h2>
            <MapLazy />
          </div>
        </Reveal>
      </section>
    </main>
  );
}
