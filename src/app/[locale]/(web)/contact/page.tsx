import MsMap from "@components/molecules/ms-map";
import MsContactForm from "@components/molecules/ms-contact-form";
import MsContactBanner from "@components/molecules/ms-contact-us-banner";

function ContactUs() {
  return (
    <main className="flex flex-col w-full min-h-screen bg-white pt-20">
      <MsContactBanner />
      <MsContactForm />
      <MsMap />
    </main>
  );
}

export default ContactUs;
