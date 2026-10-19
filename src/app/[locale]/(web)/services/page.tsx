import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

import PageHeader from "@molecules/ms-page-header";
import { HrServicesDetailed } from "@molecules/ms-hr-services";
import Process from "@molecules/ms-process";
import Spaces from "@molecules/ms-spaces";
import CtaBanner from "@molecules/ms-cta-banner";
import { ButtonLink } from "@atoms/button";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });
  return { title: t("services_title") };
}

export default async function ServicesPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("ServicesPage");

  return (
    <main className="pt-4">
      <PageHeader title={t("title")} lead={t("lead")}>
        <div className="flex flex-wrap gap-3">
          <ButtonLink href={{ pathname: "/services", hash: "rh" }}>{t("jump_hr")}</ButtonLink>
          <ButtonLink href={{ pathname: "/services", hash: "espaces" }} variant="secondary">
            {t("jump_spaces")}
          </ButtonLink>
        </div>
      </PageHeader>
      <HrServicesDetailed />
      <Spaces detailed />
      <Process />
      <CtaBanner />
    </main>
  );
}
