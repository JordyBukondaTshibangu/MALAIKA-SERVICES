import {
  Wallet,
  FileText,
  BookKey,
  Banknote,
  HandCoins,
  PackageOpen,
} from "lucide-react";
import { useTranslations } from "next-intl";

export const useServices = () => {
  const t = useTranslations("Services");

  return [
    {
      icon: <Wallet className="text-[#047db2]" size={46} strokeWidth={1} />,
      title: t("services.service_1.title"),
      description: t("services.service_1.description"),
    },
    {
      icon: <FileText className="text-[#047db2]" size={46} strokeWidth={1} />,
      title: t("services.service_2.title"),
      description: t("services.service_2.description"),
    },
    {
      icon: <Banknote className="text-[#047db2]" size={46} strokeWidth={1} />,
      title: t("services.service_3.title"),
      description: t("services.service_3.description"),
    },
    {
      icon: <HandCoins className="text-[#047db2]" size={46} strokeWidth={1} />,
      title: t("services.service_4.title"),
      description: t("services.service_4.description"),
    },
    {
      icon: (
        <PackageOpen className="text-[#047db2]" size={46} strokeWidth={1} />
      ),
      title: t("services.service_5.title"),
      description: t("services.service_5.description"),
    },
    {
      icon: <BookKey className="text-[#047db2]" size={46} strokeWidth={1} />,
      title: t("services.service_6.title"),
      description: t("services.service_6.description"),
    },
  ];
};
