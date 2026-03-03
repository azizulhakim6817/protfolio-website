import { motion } from "framer-motion";
import { useScrollReveal, fadeUpVariants, staggerContainer } from "@/hooks/useAnimations";
import { type ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function ScrollReveal({ children, className, delay = 0 }: ScrollRevealProps) {
  const { ref, controls } = useScrollReveal();
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as const, delay } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerReveal({ children, className }: { children: ReactNode; className?: string }) {
  const { ref, controls } = useScrollReveal();
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={staggerContainer}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function FadeUpItem({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div variants={fadeUpVariants} className={className}>
      {children}
    </motion.div>
  );
}
