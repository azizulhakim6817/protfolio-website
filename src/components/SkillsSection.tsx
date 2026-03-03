import { motion } from "framer-motion";
import { StaggerReveal, FadeUpItem } from "@/components/ScrollReveal";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SiMongodb } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiPostgresql } from "react-icons/si";
import { Atom, FileCode2 } from "lucide-react";
import { type ElementType } from "react";
import { FaDocker } from "react-icons/fa";
import { FaAws } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { IoLogoNodejs } from "react-icons/io";
import { IoLogoFirebase } from "react-icons/io5";
import { SiPrisma } from "react-icons/si";
import { RiJavascriptLine } from "react-icons/ri";

const skills: { name: string; icon: ElementType }[] = [
  { name: "React.js", icon: Atom },
  { name: "Next.js", icon: RiNextjsFill },
  { name: "Javascript", icon: RiJavascriptLine },
  { name: "TypeScript", icon: FileCode2 },
  { name: "Tailwind CSS", icon: RiTailwindCssFill },
  { name: "Nodejs & Express", icon: IoLogoNodejs },
  { name: "Firebase", icon: IoLogoFirebase },
  { name: "Prisma", icon: SiPrisma },
  { name: "MongoDB", icon: SiMongodb },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "Docker", icon: FaDocker },
  { name: "AWS / Cloud", icon: FaAws },
];

function SkillCard({ name, icon: Icon }: { name: string; icon: ElementType }) {
  return (
    <motion.div
      whileHover={{ y: -4, transition: { duration: 0.25 } }}
      className="glass-card group flex flex-col items-center gap-3 rounded-xl p-6 text-center transition-colors hover:border-primary/30"
    >
      <div className="rounded-lg bg-primary/10 p-3 text-primary transition-colors group-hover:bg-primary/20">
        <Icon className="h-6 w-6" />
      </div>
      <span className="text-sm font-medium text-foreground">{name}</span>
    </motion.div>
  );
}

export function SkillsSection() {
  return (
    <section id="skills" className="section-padding bg-card/50">
      <div className="mx-auto max-w-7xl">
        <ScrollReveal>
          <p className="heading-section">Skills</p>
          <h2 className="heading-lg mb-12">
            My <span className="gradient-text">technical</span> toolkit.
          </h2>
        </ScrollReveal>

        <StaggerReveal className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {skills.map((skill) => (
            <FadeUpItem key={skill.name}>
              <SkillCard {...skill} />
            </FadeUpItem>
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
}
