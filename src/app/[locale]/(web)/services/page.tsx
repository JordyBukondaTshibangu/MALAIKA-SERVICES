import MsServices from "@components/molecules/ms-services";
import MsOurTools from "@components/molecules/ms-our-tools";
import MsGetInTouch from "@components/molecules/ms-get-in-touch";
import MsWhyMalaikaServices from "@components/molecules/ms-why-malaika-services";

function Services() {
  return (
    <main className="flex flex-col w-full min-h-screen bg-white pt-20">
      <MsServices />
      <MsWhyMalaikaServices />
      <MsOurTools />
      <MsGetInTouch />
    </main>
  );
}

export default Services;
