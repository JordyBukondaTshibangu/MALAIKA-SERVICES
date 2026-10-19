import Image from "next/image";
import { Link } from "@/i18n/navigation";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <Link href="/" className={`inline-flex shrink-0 items-center ${className}`} aria-label="Malaïka Services">
      <Image
        src="/assets/logo-horizontal.png"
        width={309}
        height={120}
        alt="Malaïka Services"
        priority
        className="h-11 w-auto"
      />
    </Link>
  );
}
