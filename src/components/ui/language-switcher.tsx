"use client";

import { useTransition } from "react";
import { useLocale, useTranslations } from "next-intl";
import { motion } from "motion/react";

import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

export default function LanguageSwitcher({ tone = "dark" }: { tone?: "dark" | "light" }) {
  const router = useRouter();
  const locale = useLocale();
  const pathname = usePathname();
  const t = useTranslations("Navigation");
  const [isPending, startTransition] = useTransition();

  const select = (next: string) => {
    if (next === locale) return;
    startTransition(() => {
      router.replace(pathname, { locale: next });
    });
  };

  return (
    <div
      role="group"
      aria-label={t("change_language")}
      className={`relative flex rounded-full p-1 text-xs font-bold ${
        tone === "dark" ? "bg-mist" : "bg-white/10"
      } ${isPending ? "opacity-60" : ""}`}
    >
      {routing.locales.map((code) => {
        const active = code === locale;
        return (
          <button
            key={code}
            type="button"
            lang={code}
            aria-pressed={active}
            onClick={() => select(code)}
            className={`relative z-10 w-10 rounded-full py-1.5 uppercase transition-colors ${
              active
                ? tone === "dark" ? "text-white" : "text-ink"
                : tone === "dark" ? "text-slate hover:text-ink" : "text-white/70 hover:text-white"
            }`}
          >
            {active && (
              <motion.span
                layoutId={`lang-pill-${tone}`}
                className={`absolute inset-0 -z-10 rounded-full ${tone === "dark" ? "bg-ink" : "bg-white"}`}
                transition={{ type: "spring", stiffness: 500, damping: 38 }}
              />
            )}
            {code}
          </button>
        );
      })}
    </div>
  );
}
