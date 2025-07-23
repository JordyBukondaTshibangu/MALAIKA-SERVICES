import Link from "next/link";

const ServiceCard = ({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => (
  <div className="flex gap-6 shadow-lg px-7 py-6 rounded-md bg-white">
    <div className="flex flex-col gap-2">{icon}</div>
    <div className="flex flex-col gap-2">
      <h4 className="text-lg md:text-xl font-medium text-black">{title}</h4>
      <p className="text-sm md:text-md text-[#7A7A7A] leading-7">
        {description}
      </p>
      <Link href="/services">
        <span className="text-sm md:text-md text-[#047db2] hover:underline">
          Learn More
        </span>
      </Link>
    </div>
  </div>
);

export default ServiceCard;
