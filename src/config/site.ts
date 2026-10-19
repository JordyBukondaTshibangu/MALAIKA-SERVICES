// Single source of truth for Malaïka Services contact details.
// Any field left empty ("") is hidden everywhere on the site, so nothing
// placeholder-looking is ever shown to visitors. Fill these in once the
// client confirms them (the Plaquette still lists them as "à confirmer").
export const siteConfig = {
  name: "Malaïka Services",
  legalName: "Malaïka Services SARL",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.malaikaservices.com",
  contact: {
    // TODO(client): confirm phone number, e.g. "+243 81 000 0000"
    phone: "",
    // TODO(client): confirm WhatsApp number in international format, digits only for the link
    whatsapp: "",
    email: "contact@malaikaservices.com",
    addressLines: ["Boulevard du 30 Juin", "Gombe, Kinshasa", "République Démocratique du Congo"],
  },
  // Map pin (Boulevard du 30 Juin, Gombe). Adjust once the exact building is confirmed.
  map: { lat: -4.3076, lng: 15.3086 },
  // TODO(client): add real profile URLs; empty entries are not rendered.
  social: {
    facebook: "",
    instagram: "",
    linkedin: "",
  },
} as const;

export const telHref = (value: string) => `tel:${value.replace(/[^+\d]/g, "")}`;
export const whatsappHref = (value: string) => `https://wa.me/${value.replace(/\D/g, "")}`;
