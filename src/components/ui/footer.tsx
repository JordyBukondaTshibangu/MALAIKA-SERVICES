import {
  Phone,
  Mail,
  MapPin,
  Youtube,
  Twitter,
  Facebook,
  Instagram,
} from "lucide-react";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

import Button from "@atoms/button";
import SocialIconLink from "@atoms/social-icon-link";
import ContactInfoBlock from "@atoms/contact-info-block";

const socialLinks = [
  { icon: <Facebook size={20} color="#fff" />, href: "#" },
  { icon: <Twitter size={20} color="#fff" />, href: "#" },
  { icon: <Instagram size={20} color="#fff" />, href: "#" },
  { icon: <Youtube size={20} color="#fff" />, href: "#" },
];

function Footer() {
  const t = useTranslations("Footer");

  const contactBlocks = [
    {
      icon: <Phone size={30} color="#2598d4" />,
      title: t("contact_us"),
      value: "(+021) 645 863 232",
    },
    {
      icon: <Mail size={30} color="#2598d4" />,
      title: t("send_us_a_message"),
      value: "support@domain.com",
    },
    {
      icon: <MapPin size={30} color="#2598d4" />,
      title: t("address"),
      value: "Boulevard du 30 Juin, 2eme et 3eme etages.",
    },
  ];

  const quickLinks = [
    { label: t("quick_links.about"), href: "/about" },
    { label: t("quick_links.services"), href: "/services" },
    { label: t("quick_links.projects"), href: "/services" },
    { label: t("quick_links.price"), href: "/services" },
    { label: t("quick_links.careers"), href: "/contact" },
  ];

  const legalLinks = [
    { label: t("legalLinks.privacy"), href: "/privacy-policy" },
    { label: t("legalLinks.TandCs"), href: "/terms-and-conditions" },
    { label: t("legalLinks.refund"), href: "/refund-policy" },
    { label: t("legalLinks.disclaimer"), href: "/disclaimer" },
    { label: t("legalLinks.support"), href: "/support" },
    { label: t("legalLinks.faq"), href: "/faq" },
  ];

  return (
    <footer className="bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto w-full py-16 flex flex-col gap-20 px-5">
        <div className="flex justify-between flex-wrap gap-6">
          {contactBlocks.map((block, i) => (
            <ContactInfoBlock key={i} {...block} />
          ))}
        </div>

        <div className="flex justify-between flex-wrap gap-12 border-t border-[#343940] pt-8">
          <div className="w-full lg:max-w-md flex flex-col gap-4">
            <h3 className="text-3xl font-medium">{t("title")}</h3>
            <p className="text-white leading-7">{t("description")}</p>
            <div className="flex gap-4">
              {socialLinks.map((link, i) => (
                <SocialIconLink key={i} {...link} />
              ))}
            </div>
          </div>

          <div className="w-full lg:w-1/4">
            <h3 className="font-medium text-[#047db2]">
              {t("quick_links.title")}
            </h3>
            <ul className="flex flex-col gap-2 list-disc px-5 py-4">
              {quickLinks.map(({ label, href }) => (
                <li key={label}>
                  <Link href={href}>{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="w-full lg:w-1/4">
            <h3 className="font-medium text-[#047db2]">
              {t("legalLinks.title")}
            </h3>
            <ul className="flex flex-col gap-2 list-disc px-5 py-4">
              {legalLinks.map(({ label, href }) => (
                <li key={href}>
                  <Link href={href}>{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="w-full md:max-w-1/2 lg:max-w-md flex flex-col gap-4">
            <h3 className="font-medium text-[#047db2]">
              {t("newsletter.title")}
            </h3>
            <p className="text-white leading-7">
              {t("newsletter.description")}
            </p>
            <Button buttonText={t("newsletter.button")} />
          </div>
        </div>

        <div className="flex justify-between items-center border-t border-[#343940] py-8 flex-wrap gap-4">
          <p className="text-white text-sm">{t("copyright")}</p>
          <div className="flex gap-4">
            <Link href="/terms-and-conditions">Terms & Conditions</Link>
            <Link href="/privacy-policy">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
