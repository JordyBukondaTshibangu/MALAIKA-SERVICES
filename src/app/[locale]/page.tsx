import MSHero from "@components/molecules/ms-hero";
import WelcomeToMs from "@components/molecules/ms-welcome";
import MsGetInTouch from "@components/molecules/ms-get-in-touch";
import MsCaseStudies from "@components/molecules/ms-case-studies";
import MsServices from "@components/molecules/ms-services-offered";
import MsClientsFeedback from "@components/molecules/ms-clients-feedback";

export default function Home() {
  return (
    <main className="min-w-screen w-full bg-whit flex flex-col gap-10 lg:gap-32 min-h-screen">
      <MSHero />
      <WelcomeToMs />
      <MsServices />
      <MsCaseStudies />
      <MsClientsFeedback />
      <MsGetInTouch />
    </main>
  );
}
