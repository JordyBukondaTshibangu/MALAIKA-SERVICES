import Button from "./button";
import Image from "next/image";

const ToolCard = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => (
  <div className="flex flex-col gap-6 shadow-lg px-4 py-3 rounded-md bg-white">
    <div className="flex flex-col gap-2">
      <Image
        src="/assets/tool.png"
        width={1000}
        height={1000}
        alt={title}
        className="object-contain"
        priority
      />
    </div>
    <div className="flex flex-col gap-2 md:gap-4">
      <h4 className="text-lg md:text-xl font-medium text-black">{title}</h4>
      <p className="text-sm md:text-md text-[#7A7A7A] leading-7">
        {description}
      </p>
      <Button buttonText="Essayer" />
    </div>
  </div>
);

export default ToolCard;
