"use client";

import { useRouter } from "next/navigation";
import * as motion from "motion/react-client";
import { useTranslations } from "next-intl";

import { Youtube, Facebook, Twitter, Instagram, X } from "lucide-react";

import SocialIconLink from "@atoms/social-icon-link";

const socialLinks = [
  { icon: <Facebook size={20} color="#fff" />, href: "#" },
  { icon: <Twitter size={20} color="#fff" />, href: "#" },
  { icon: <Instagram size={20} color="#fff" />, href: "#" },
  { icon: <Youtube size={20} color="#fff" />, href: "#" },
];

type MobileNavigationBarProps = {
  closeMenu: () => void;
};

export default function MobileNavigationBar({
  closeMenu,
}: MobileNavigationBarProps) {
  const router = useRouter();
  const t = useTranslations("Navigation");

  const navLinks = [
    { href: "/", label: t("home") },
    { href: "/services", label: t("services") },
    { href: "/about", label: t("about") },
    { href: "/contact", label: t("contact") },
  ];

  const handleLinkClick = ({ link }: { link: string }) => {
    router.push(link);
    setTimeout(() => {
      closeMenu();
      window.scrollTo({ top: 0, behavior: "smooth" });

      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 100);
    }, 500);
  };

  return (
    <nav className="flex flex-col gap-10 justify-center overflow-hidden md:hidden fixed top-0 bottom-0 left-0 right-0 bg-[#2598d4] px-5 py-20 z-10">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col  gap-8 w-full"
      >
        <span
          onClick={closeMenu}
          className="self-end -mt-8 mb-12 cursor-pointer"
        >
          <X size={32} />
        </span>
        <h1 className="text-[45px] font-medium  leading-[1.2] is-style-underlined-heading-nav">
          <span className="font-bold">Malaika Services</span>
        </h1>
      </motion.div>

      <ul className="flex flex-col gap-20">
        {navLinks.map(({ href, label }) => (
          <motion.li
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.6, ease: "easeOut" }}
            key={href}
          >
            <span
              onClick={() => handleLinkClick({ link: href })}
              className="text-2xl font-bold text-white hover:text-[#10193c] cursor-pointer transition-colors duration-200"
            >
              {label}
            </span>
          </motion.li>
        ))}
      </ul>

      <div className="w-full flex flex-col mt-auto">
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="flex gap-4 justify-center"
        >
          {socialLinks.map((link, i) => (
            <SocialIconLink key={i} {...link} />
          ))}
        </motion.div>
      </div>
    </nav>
  );
}
