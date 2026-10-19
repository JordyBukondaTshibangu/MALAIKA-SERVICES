import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

import PageHeader from "@molecules/ms-page-header";
import { AboutStory, MissionVision, Values, Team } from "@molecules/ms-about";
import WhyUs from "@molecules/ms-why-us";
import Audiences from "@molecules/ms-audiences";
import CtaBanner from "@molecules/ms-cta-banner";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });
  return { title: t("about_title") };
}

export default async function AboutPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("About");

  return (
    <main className="pt-4">
      <PageHeader title={t("title")} lead={t("lead")} />
      <AboutStory />
      <MissionVision />
      <Values />
      <Team />
      <WhyUs />
      <Audiences />
      <CtaBanner />
    </main>
  );
}
