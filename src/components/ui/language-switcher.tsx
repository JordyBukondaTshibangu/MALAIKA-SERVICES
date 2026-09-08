"use client";

import { useEffect, useRef, useState, useTransition } from "react";
import { Languages } from "lucide-react";
import { useLocale } from "next-intl";

import { usePathname, useRouter } from "@/i18n/navigation";

const locales = [
  { code: "en", label: "English" },
  { code: "fr", label: "Français" },
];

export default function LanguageSwitcher() {
  const router = useRouter();
  const locale = useLocale();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (nextLocale: string) => {
    setIsOpen(false);
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale });
    });
  };

  return (
    <div className="relative" ref={containerRef}>
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        disabled={isPending}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-label="Change language"
        className="flex items-center justify-center rounded-md border p-4 text-white shadow-sm hover:shadow-md transition cursor-pointer disabled:opacity-50"
      >
        <Languages size={20} />
      </button>

      {isOpen && (
        <ul
          role="listbox"
          className="absolute right-0 mt-2 min-w-32 overflow-hidden rounded-md border bg-white shadow-md z-20"
        >
          {locales.map((lang) => (
            <li key={lang.code}>
              <button
                type="button"
                role="option"
                aria-selected={locale === lang.code}
                onClick={() => handleSelect(lang.code)}
                className={`block w-full px-4 py-3 text-left text-sm cursor-pointer transition-colors duration-200 ${
                  locale === lang.code
                    ? "bg-[#2598d4] text-white"
                    : "text-black hover:bg-gray-100"
                }`}
              >
                {lang.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
