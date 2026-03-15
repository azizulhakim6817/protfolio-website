import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { TextReveal } from "@/components/TextReveal";
import { MagneticButton } from "@/components/MagneticButton";
import heroPortrait from "@/assets/hero-portrait.png";
import { ArrowDown, Github, Linkedin, Twitter, Facebook } from "lucide-react";
import { FaDownload } from "react-icons/fa";

const fullName = "Azizul Hakim";

// Typewriter Component
function TypewriterName() {
  const [displayed, setDisplayed] = useState("");
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    let delay = deleting ? 60 : index === fullName.length ? 2000 : 120;

    timeoutRef.current = setTimeout(() => {
      if (!deleting) {
        if (index < fullName.length) setIndex(index + 1);
        else setDeleting(true);
      } else {
        if (index > 0) setIndex(index - 1);
        else setDeleting(false);
      }
    }, delay);

    setDisplayed(fullName.slice(0, index));

    return () => clearTimeout(timeoutRef.current);
  }, [index, deleting]);

  return (
    <span className="font-semibold gradient-text">
      {displayed}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.6, repeat: Infinity, repeatType: "reverse" }}
        className="inline-block w-[2px] h-[1em] bg-primary align-middle ml-0.5"
      />
    </span>
  );
}

// Animated Number Component
const AnimatedNumber = ({ value }: { value: number }) => {
  const [count, setCount] = useState(0);
  const startRef = useRef(0);

  useEffect(() => {
    const duration = 1500;
    let start = 0;
    let rafId: number;

    const step = () => {
      start += value / (duration / 16);
      if (start >= value) start = value;
      setCount(Math.round(start));
      if (start < value) rafId = requestAnimationFrame(step);
    };

    rafId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafId);
  }, [value]);

  return <p className="text-3xl font-bold gradient-text">{count}</p>;
};

// Stats
const stats: { value: number; label: string }[] = [
  { value: 50, label: "Projects" },
  { value: 100, label: "Clients" },
  { value: 75, label: "Awards" },
];

// Hero Section
export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center section-padding pt-32 overflow-hidden">
      {/* Background gradient orbs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -right-40 h-[600px] w-[600px] rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-accent/5 blur-3xl" />
      </div>

      <div className="relative mx-auto flex flex-col-reverse gap-4 md:gap-0 lg:flex-row lg:items-center w-full">
        {/* Text content */}
        <div className="flex-1 space-y-8">
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-primary mb-1 font-bold"
            >
              Full Stack Developer
            </motion.p>

            <h1 className="text-4xl font-bold leading-10">
              <TextReveal text="Building Modern" delay={0.3} />
              <span className="gradient-text">
                <TextReveal text="Web Experiences" delay={0.6} />
              </span>
            </h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="body-text max-w-lg"
          >
            <span>Hi, I'm </span>
            <TypewriterName />— a full stack developer crafting performant,
            beautiful web applications with Next.js, React, Node.js & MongoDB.
          </motion.p>

          <motion.div
            id="resume"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="flex flex-wrap gap-4"
          >
            <MagneticButton
              href="#projects"
              className="bg-primary text-primary-foreground"
            >
              View Projects
            </MagneticButton>
            <MagneticButton
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-primary-content hover:opacity-90 flex items-center gap-2"
            >
              <FaDownload />
              Download Resume
            </MagneticButton>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="flex gap-10 pt-6"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <AnimatedNumber value={stat.value} />
                <p className="text-xs text-muted-foreground mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="relative flex-shrink-0"
        >
          <div className="relative h-72 w-72 md:h-96 md:w-96 mx-auto lg:mx-0">
            <div className="absolute inset-0 rounded-2xl bg-primary/20 blur-2xl" />
            <img
              src={heroPortrait}
              alt="Azizul Hakim"
              className="relative h-full w-full rounded-2xl object-cover glow-border"
            />
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 2, y: { repeat: Infinity, duration: 2 } }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <ArrowDown className="h-5 w-5 text-muted-foreground" />
      </motion.div>
    </section>
  );
}
