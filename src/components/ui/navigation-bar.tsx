"use client";

import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import Image from "next/image";

import Button from "@atoms/button";
import LanguageSwitcher from "@ui/language-switcher";

export default function NavigationBar() {
  const t = useTranslations("Navigation");

  const navLinks = [
    { href: "/", label: t("home") },
    { href: "/services", label: t("services") },
    { href: "/about", label: t("about") },
    { href: "/contact", label: t("contact") },
  ];

  return (
    <nav className="hidden md:flex sticky top-5 z-10 w-[90%] xl:w-full lg:max-w-7xl mx-auto justify-between items-center mt-4 bg-[#94949472] p-6 rounded-xl h-24 ">
      <Link href="/" className="flex items-center justify-start">
        <Image
          src="/assets/logo.png"
          width={250}
          height={40}
          alt="Malaika-Services-Logo"
          className="object-contain"
          priority
        />
      </Link>

      <ul className="flex gap-8 text-base font-medium text-black">
        {navLinks.map(({ href, label }) => (
          <li key={href}>
            <Link
              href={href}
              className="text-white hover:text-[#2598d4] transition-colors duration-200"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>

      <div className="hidden xl:flex gap-4 items-center">
        <Button buttonText={t("button")} />
        <LanguageSwitcher />
      </div>
    </nav>
  );
}
