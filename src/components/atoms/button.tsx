import type { ComponentProps } from "react";
import { Link } from "@/i18n/navigation";

type Variant = "primary" | "secondary" | "light" | "ghost-light";

const base =
  "group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-[0.95rem] font-semibold transition-[background-color,color,box-shadow,transform] duration-300 ease-out-soft active:scale-[0.98] disabled:pointer-events-none disabled:opacity-60";

const variants: Record<Variant, string> = {
  primary:
    "bg-ink text-white hover:bg-sky-deep shadow-[0_8px_24px_-12px_rgba(15,27,61,0.6)]",
  secondary:
    "bg-white text-ink ring-1 ring-inset ring-line hover:ring-ink",
  light: "bg-white text-ink hover:bg-mist",
  "ghost-light":
    "text-white ring-1 ring-inset ring-white/35 hover:bg-white/10 hover:ring-white",
};

export const buttonClasses = (variant: Variant = "primary", extra = "") =>
  `${base} ${variants[variant]} ${extra}`;

type ButtonLinkProps = ComponentProps<typeof Link> & { variant?: Variant };

export function ButtonLink({ variant = "primary", className = "", ...props }: ButtonLinkProps) {
  return <Link className={buttonClasses(variant, className)} {...props} />;
}

type ButtonProps = ComponentProps<"button"> & { variant?: Variant };

export default function Button({ variant = "primary", className = "", type = "button", ...props }: ButtonProps) {
  return <button type={type} className={buttonClasses(variant, className)} {...props} />;
}
