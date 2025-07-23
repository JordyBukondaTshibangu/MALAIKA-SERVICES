import Image from "next/image";
import { useTranslations } from "next-intl";
import * as motion from "motion/react-client";
import { Mail, Twitter, Linkedin } from "lucide-react";

const teamMembers = [
  {
    name: "John Kasongo",
    role: "Founder & CEO",
    image: "/assets/team-member-1.jpg",
  },
  {
    name: "Jonathan Otiba",
    role: "Founder & COO",
    image: "/assets/team-member-2.jpg",
  },
  {
    name: "Daniel Tshiswaka",
    role: "Director",
    image: "/assets/team-member-3.jpg",
  },
  {
    name: "Pierrette Ntumba",
    role: "HR Manager",
    image: "/assets/team-member-4.jpg",
  },
];

export default function MsOurTeam() {
  const t = useTranslations("About");
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto w-full flex flex-col items-center gap-20">
        <motion.h1
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl font-medium text-black is-style-underlined-heading-blue"
        >
          {t("our_team.title")}
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-20 md:gap-10"
        >
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="w-full flex flex-col gap-4 items-center"
            >
              <div className="w-full h-full rounded-full flex items-center justify-center">
                <Image
                  src={member.image}
                  width={180}
                  height={180}
                  alt={member.name}
                  className="object-cover rounded-full"
                  priority
                />
              </div>
              <div className="flex flex-col items-center gap-3">
                <h4 className="text-xl font-semibold text-black">
                  {member.name}
                </h4>
                <span className="text-lg font-medium text-black">
                  {member.role}
                </span>
                <div className="flex justify-center gap-4">
                  <a href="">
                    <Mail color="#047db2" size={18} />
                  </a>
                  <a href="">
                    <Twitter color="#047db2" size={18} />
                  </a>
                  <a href="">
                    <Linkedin color="#047db2" size={18} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
