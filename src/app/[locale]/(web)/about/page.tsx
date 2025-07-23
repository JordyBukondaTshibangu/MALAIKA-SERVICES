import MsAboutUs from "@components/molecules/ms-about-us";
import MsOurTeam from "@components/molecules/ms-our-team";
import MsWhyChoosingUs from "@components/molecules/ms-why-choosing-us";

function AboutUs() {
  return (
    <main className="flex flex-col w-full min-h-screen bg-white pt-20">
      <MsAboutUs />
      <MsOurTeam />
      <MsWhyChoosingUs />
    </main>
  );
}

export default AboutUs;
