import Image from "next/image";
import { Quote } from "lucide-react";

function ClientCard({
  name,
  title,
  imageSrc,
  feedback,
}: {
  name: string;
  title: string;
  imageSrc: string;
  feedback: string;
}) {
  return (
    <div className="flex flex-col gap-6 bg-white rounded-lg shadow-lg p-8 w-full">
      <div className="flex items-center justify-between gap-4">
        <Image
          src={imageSrc}
          width={60}
          height={60}
          alt={name}
          className="object-contain rounded-full"
          priority
        />
        <div className="flex-1">
          <span className="block font-medium text-black text-lg">{name}</span>
          <span className="text-[#7A7A7A]">{title}</span>
        </div>
        <Quote color="#2598d4" size={30} />
      </div>
      <p className="text-[#7A7A7A] leading-7">{feedback}</p>
    </div>
  );
}

export default ClientCard;
