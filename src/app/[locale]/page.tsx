import { setRequestLocale } from "next-intl/server";

import Hero from "@molecules/ms-hero";
import Intro from "@molecules/ms-intro";
import { HrServicesSummary } from "@molecules/ms-hr-services";
import Process from "@molecules/ms-process";
import Spaces from "@molecules/ms-spaces";
import Audiences from "@molecules/ms-audiences";
import CtaBanner from "@molecules/ms-cta-banner";

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main>
      <Hero />
      <HrServicesSummary />
      <Intro />
      <Process />
      <Spaces />
      <Audiences />
      <CtaBanner />
    </main>
  );
}
