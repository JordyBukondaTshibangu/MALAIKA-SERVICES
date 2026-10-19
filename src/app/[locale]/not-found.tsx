import { useTranslations } from "next-intl";

import { ButtonLink } from "@atoms/button";

export default function NotFound() {
  const t = useTranslations("NotFound");

  return (
    <main className="mx-auto flex min-h-[70vh] max-w-2xl flex-col items-center justify-center px-5 py-24 text-center">
      <p aria-hidden className="font-display text-[8rem] font-semibold leading-none text-sky">
        {t("code")}
      </p>
      <h1 className="mt-6 text-3xl font-semibold md:text-4xl">{t("title")}</h1>
      <p className="mt-4 max-w-md text-lg text-slate">{t("description")}</p>
      <ButtonLink href="/" className="mt-8">
        {t("button")}
      </ButtonLink>
    </main>
  );
}
