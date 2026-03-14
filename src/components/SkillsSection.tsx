import { useState, type ElementType } from "react";
import { motion } from "framer-motion";
import { StaggerReveal, FadeUpItem } from "@/components/ScrollReveal";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SiMongodb, SiPostgresql, SiPrisma } from "react-icons/si";
import {
  RiTailwindCssFill,
  RiNextjsFill,
  RiJavascriptLine,
} from "react-icons/ri";
import { Atom, FileCode2 } from "lucide-react";
import { FaDocker, FaAws } from "react-icons/fa";
import { IoLogoNodejs } from "react-icons/io";
import { IoLogoFirebase } from "react-icons/io5";
import { BiLogoTypescript } from "react-icons/bi";
import { TbBrandJavascript } from "react-icons/tb";
import { SiExpress } from "react-icons/si";
import { IoLogoFigma } from "react-icons/io5";
import { FaBootstrap } from "react-icons/fa6";
import { SiRedux } from "react-icons/si";
import { RiVercelFill } from "react-icons/ri";
import { SiNetlify } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { LiaCpanel } from "react-icons/lia";
import { SiGooglecloud } from "react-icons/si";
import { BsStripe } from "react-icons/bs";
import { VscVscode } from "react-icons/vsc";

type Skill = {
  name: string;
  icon: ElementType;
  category: "Frontend" | "Backend" | "Tool";
};

const skills: Skill[] = [
  // Frontend
  { name: "React.js", icon: Atom, category: "Frontend" },
  { name: "Next.js", icon: RiNextjsFill, category: "Frontend" },
  { name: "Javascript", icon: TbBrandJavascript, category: "Frontend" },
  { name: "TypeScript", icon: BiLogoTypescript, category: "Frontend" },
  { name: "Redux", icon: SiRedux, category: "Frontend" },
  { name: "Tailwind CSS", icon: RiTailwindCssFill, category: "Frontend" },
  { name: "Bootstrap", icon: FaBootstrap, category: "Frontend" },

  // Backend
  { name: "Node.js", icon: IoLogoNodejs, category: "Backend" },
  { name: "Express", icon: SiExpress, category: "Backend" },
  { name: "Firebase", icon: IoLogoFirebase, category: "Backend" },
  { name: "Prisma", icon: SiPrisma, category: "Backend" },
  { name: "MongoDB", icon: SiMongodb, category: "Backend" },
  { name: "PostgreSQL", icon: SiPostgresql, category: "Backend" },

  // Tools / Cloud
  { name: "Figma", icon: IoLogoFigma, category: "Tool" },
  { name: "Linkedin", icon: FaLinkedin, category: "Tool" },
  { name: "Vscode", icon: VscVscode, category: "Tool" },
  { name: "Github", icon: FaGithub, category: "Tool" },
  { name: "Vercel", icon: RiVercelFill, category: "Tool" },
  { name: "Netlify", icon: SiNetlify, category: "Tool" },
  { name: "Cpanel", icon: LiaCpanel, category: "Tool" },
  { name: "Google Cloud", icon: SiGooglecloud, category: "Tool" },
  { name: "Stripe", icon: BsStripe, category: "Tool" },
  { name: "Docker", icon: FaDocker, category: "Tool" },
  { name: "AWS / Cloud", icon: FaAws, category: "Tool" },
];

function SkillCard({ name, icon: Icon }: { name: string; icon: ElementType }) {
  return (
    <motion.div
      whileHover={{
        y: -4,
        scale: 1.03,
        transition: { duration: 0.25, type: "spring", stiffness: 300 },
      }}
      className="glass-card group flex items-center gap-3 rounded-full border border-transparent bg-gradient-to-br from-white/10 to-white/5 shadow-xl transition-all hover:border-primary/40 hover:shadow-xl"
    >
      <motion.div
        whileHover={{ rotate: 15 }}
        className="flex items-center justify-center rounded-full bg-primary/10 p-2 text-primary transition-colors group-hover:bg-gradient-to-tr group-hover:from-primary/30 group-hover:to-primary/50"
      >
        <Icon className="h-6 w-6" aria-hidden="true" />
      </motion.div>
      <motion.span
        whileHover={{ color: "#0ea5e9" }} // Tailwind cyan-500 hex
        className="text-sm font-semibold text-foreground transition-colors"
      >
        {name}
      </motion.span>
    </motion.div>
  );
}

export function SkillsSection() {
  const [activeTab, setActiveTab] = useState<
    "All" | "Frontend" | "Backend" | "Tools"
  >("All");

  const filteredSkills =
    activeTab === "All"
      ? skills
      : skills.filter(
          (skill) =>
            skill.category === (activeTab === "Tools" ? "Tool" : activeTab),
        );

  const tabs: ("All" | "Frontend" | "Backend" | "Tools")[] = [
    "All",
    "Frontend",
    "Backend",
    "Tools",
  ];

  return (
    <section id="skills" className="section-padding bg-card/50">
      <div className="mx-auto max-w-7xl px-4 py-2">
        <ScrollReveal>
          <p className="heading-section">Skills</p>
          <h2 className="heading-lg mb-6">
            My <span className="gradient-text">technical</span> toolkit.
          </h2>
        </ScrollReveal>

        {/* Tabs */}
        <div className="mb-8 flex gap-4 flex-wrap">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-lg font-medium transition ${
                activeTab === tab
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-muted-foreground hover:bg-secondary/80"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <StaggerReveal
          key={activeTab} // <-- Force remount whenever activeTab changes
          className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4"
        >
          {filteredSkills.map((skill) => (
            <FadeUpItem key={skill.name}>
              <div>
                <SkillCard {...skill} />
              </div>
            </FadeUpItem>
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
}
