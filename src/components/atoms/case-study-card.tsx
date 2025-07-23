import Image from "next/image";
import Link from "next/link";

// Card component
const CaseStudyCard = ({
  image,
  title,
  description,
  buttonText,
}: {
  image: string;
  title: string;
  description: string;
  buttonText: string;
}) => (
  <div className="flex flex-col gap-6 bg-white p-8 rounded-lg">
    <Image
      src={image}
      width={1000}
      height={1000}
      alt={title}
      className="object-contain"
      priority
    />
    <h4 className="text-lg md:text-xl font-semibold text-black">{title}</h4>
    <p className="text-sm md:text-md text-[#7A7A7A] leading-7">{description}</p>
    <Link href="/services">
      <span className="text-sm md:text-md text-[#047db2] hover:underline uppercase">
        {buttonText}
      </span>
    </Link>
  </div>
);

export default CaseStudyCard;
