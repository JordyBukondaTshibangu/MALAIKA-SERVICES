import type { ComponentProps } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "@/i18n/navigation";

// Inline call-to-action with an arrow icon that nudges on hover.
export default function TextLink({
  children,
  className = "",
  tone = "dark",
  ...props
}: ComponentProps<typeof Link> & { tone?: "dark" | "light" }) {
  const color =
    tone === "dark"
      ? "text-sky-deep hover:text-ink"
      : "text-white hover:text-leaf";
  return (
    <Link
      className={`group inline-flex items-center gap-1.5 font-semibold underline decoration-current/25 decoration-2 underline-offset-[6px] transition-colors hover:decoration-current ${color} ${className}`}
      {...props}
    >
      {children}
      <ArrowRight
        aria-hidden
        size={17}
        className="shrink-0 transition-transform duration-300 group-hover:translate-x-1"
      />
    </Link>
  );
}
