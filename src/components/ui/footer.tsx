import Image from "next/image";
import { useTranslations } from "next-intl";
import { Facebook, Instagram, Linkedin, Mail, MapPin, MessageCircle, Phone } from "lucide-react";

import { Link } from "@/i18n/navigation";
import { siteConfig, telHref, whatsappHref } from "@/config/site";
import { hrServices, spaceServices } from "@/data/services";

export default function Footer() {
  const t = useTranslations("Footer");
  const nav = useTranslations("Navigation");
  const hr = useTranslations("HrServices");
  const spaces = useTranslations("Spaces");
  const common = useTranslations("Common");
  const { contact, social } = siteConfig;

  const socials = [
    { href: social.facebook, icon: Facebook, label: "Facebook" },
    { href: social.instagram, icon: Instagram, label: "Instagram" },
    { href: social.linkedin, icon: Linkedin, label: "LinkedIn" },
  ].filter((s) => s.href);

  const linkClass = "text-white/70 transition-colors hover:text-white";

  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto max-w-7xl px-5 pb-10 pt-16 md:px-8 lg:pt-20">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr_1fr_1.2fr]">
          <div className="max-w-sm">
            <Link href="/" className="inline-block rounded-2xl bg-white px-4 py-3" aria-label={siteConfig.name}>
              <Image src="/assets/logo-horizontal.png" alt={siteConfig.name} width={309} height={120} className="h-10 w-auto" />
            </Link>
            <p className="mt-6 text-white/70">{t("description")}</p>
            <p className="mt-4 font-display font-medium text-leaf">{common("tagline")}</p>
            {socials.length > 0 && (
              <div className="mt-6 flex gap-3">
                {socials.map(({ href, icon: Icon, label }) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                    className="grid size-10 place-items-center rounded-full bg-white/10 transition-colors hover:bg-leaf">
                    <Icon size={18} aria-hidden />
                  </a>
                ))}
              </div>
            )}
          </div>

          <nav aria-label={t("hr_services")}>
            <h2 className="font-display text-sm font-semibold !text-white">{t("hr_services")}</h2>
            <ul className="mt-5 flex flex-col gap-3 text-[0.95rem]">
              {hrServices.map(({ key }) => (
                <li key={key}>
                  <Link href={{ pathname: "/services", hash: key }} className={linkClass}>{hr(`${key}.title`)}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label={t("spaces")}>
            <h2 className="font-display text-sm font-semibold !text-white">{t("spaces")}</h2>
            <ul className="mt-5 flex flex-col gap-3 text-[0.95rem]">
              {spaceServices.map(({ key }) => (
                <li key={key}>
                  <Link href={{ pathname: "/services", hash: "espaces" }} className={linkClass}>{spaces(`${key}.title`)}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="font-display text-sm font-semibold !text-white">{t("contact")}</h2>
            <ul className="mt-5 flex flex-col gap-4 text-[0.95rem]">
              {contact.phone && (
                <li className="flex gap-3">
                  <Phone size={18} className="mt-1 shrink-0 text-leaf" aria-label={t("phone")} />
                  <a href={telHref(contact.phone)} className={linkClass}>{contact.phone}</a>
                </li>
              )}
              {contact.whatsapp && (
                <li className="flex gap-3">
                  <MessageCircle size={18} className="mt-1 shrink-0 text-leaf" aria-label={t("whatsapp")} />
                  <a href={whatsappHref(contact.whatsapp)} target="_blank" rel="noopener noreferrer" className={linkClass}>{contact.whatsapp}</a>
                </li>
              )}
              {contact.email && (
                <li className="flex gap-3">
                  <Mail size={18} className="mt-1 shrink-0 text-leaf" aria-label={t("email")} />
                  <a href={`mailto:${contact.email}`} className={linkClass}>{contact.email}</a>
                </li>
              )}
              <li className="flex gap-3">
                <MapPin size={18} className="mt-1 shrink-0 text-leaf" aria-label={t("address")} />
                <address className="not-italic text-white/70">
                  {contact.addressLines.map((l) => (<span key={l} className="block">{l}</span>))}
                </address>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col-reverse items-start justify-between gap-6 border-t border-white/10 pt-8 text-sm text-white/60 md:flex-row md:items-center">
          <p>{t("copyright", { year: new Date().getFullYear() })}</p>
          <nav aria-label={t("navigation")}>
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {(["/", "/services", "/about", "/contact"] as const).map((href, i) => (
                <li key={href}>
                  <Link href={href} className={linkClass}>
                    {nav((["home", "services", "about", "contact"] as const)[i])}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
