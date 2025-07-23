type SocialIconLinkProps = {
  href: string;
  icon: React.ReactNode;
};

const SocialIconLink = ({ href, icon }: SocialIconLinkProps) => (
  <a
    href={href}
    className="w-fit rounded-full flex items-center justify-center bg-[#2598d4] p-2"
  >
    {icon}
  </a>
);

export default SocialIconLink;
