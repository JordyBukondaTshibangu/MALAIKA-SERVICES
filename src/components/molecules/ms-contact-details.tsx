import { useTranslations } from "next-intl";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";

import { siteConfig, telHref, whatsappHref } from "@/config/site";

export default function ContactDetails() {
  const t = useTranslations("Contact");
  const { contact } = siteConfig;

  const items = [
    contact.phone && { icon: Phone, label: t("phone"), value: contact.phone, href: telHref(contact.phone) },
    contact.whatsapp && { icon: MessageCircle, label: t("whatsapp"), value: contact.whatsapp, href: whatsappHref(contact.whatsapp), external: true },
    contact.email && { icon: Mail, label: t("email"), value: contact.email, href: `mailto:${contact.email}` },
  ].filter(Boolean) as { icon: typeof Phone; label: string; value: string; href: string; external?: boolean }[];

  return (
    <div className="rounded-[2rem] bg-ink p-8 text-white md:p-10">
      <h2 className="text-2xl font-semibold !text-white">{t("details_title")}</h2>
      <ul className="mt-8 flex flex-col gap-6">
        {items.map(({ icon: Icon, label, value, href, external }) => (
          <li key={label} className="flex gap-4">
            <span className="grid size-11 shrink-0 place-items-center rounded-full bg-white/10 text-leaf">
              <Icon size={20} aria-hidden />
            </span>
            <span>
              <span className="block text-sm text-white/60">{label}</span>
              <a href={href} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="font-semibold underline-offset-4 hover:underline">{value}</a>
            </span>
          </li>
        ))}
        <li className="flex gap-4">
          <span className="grid size-11 shrink-0 place-items-center rounded-full bg-white/10 text-leaf">
            <MapPin size={20} aria-hidden />
          </span>
          <span>
            <span className="block text-sm text-white/60">{t("address")}</span>
            <address className="font-semibold not-italic">
              {contact.addressLines.map((l) => (<span key={l} className="block">{l}</span>))}
            </address>
          </span>
        </li>
      </ul>
    </div>
  );
}
