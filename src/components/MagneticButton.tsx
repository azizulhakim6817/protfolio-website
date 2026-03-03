import { motion } from "framer-motion";
import { useMagneticEffect } from "@/hooks/useAnimations";
import { type ReactNode } from "react";

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
}

export function MagneticButton({ children, className = "", onClick, href }: MagneticButtonProps) {
  const { ref, position } = useMagneticEffect();

  const content = (
    <motion.div
      ref={ref}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 200, damping: 15, mass: 0.5 }}
      className={`inline-flex items-center justify-center gap-2 rounded-lg px-8 py-4 font-medium transition-colors ${className}`}
    >
      {children}
    </motion.div>
  );

  if (href) {
    return <a href={href} className="inline-block">{content}</a>;
  }

  return <button onClick={onClick} className="inline-block">{content}</button>;
}
