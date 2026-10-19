import type { Metadata } from "next";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";

import "@fontsource-variable/lexend";
import "@fontsource-variable/figtree";

import { routing } from "@/i18n/routing";
import { siteConfig } from "@/config/site";
import MotionProvider from "@/components/motion/motion-provider";
import SiteHeader from "@ui/site-header";
import Footer from "@ui/footer";
import "./globals.css";

// Open Graph expects language_TERRITORY tags (e.g. "en_US"), not the bare
// language codes next-intl uses for routing.
const ogLocales: Record<string, string> = {
  en: "en_US",
  fr: "fr_FR",
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    metadataBase: new URL(siteConfig.url),
    title: {
      default: t("title"),
      template: `%s | ${siteConfig.name}`,
    },
    description: t("description"),
    alternates: {
      languages: Object.fromEntries(
        routing.locales.map((l) => [l, `/${l}`])
      ),
    },
    openGraph: {
      title: t("title"),
      description: t("description"),
      siteName: siteConfig.name,
      locale: ogLocales[locale] ?? locale,
      type: "website",
      images: ["/assets/logo.png"],
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "Common" });

  return (
    <html lang={locale}>
      <body className="min-h-screen overflow-x-hidden">
        <NextIntlClientProvider>
          <MotionProvider>
            <a
              href="#main"
              className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-ink focus:px-4 focus:py-2 focus:text-white"
            >
              {t("skip_to_content")}
            </a>
            <SiteHeader />
            <div id="main">{children}</div>
            <Footer />
          </MotionProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
