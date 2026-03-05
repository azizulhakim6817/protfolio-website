import { motion } from "framer-motion";
import { useMagneticEffect } from "@/hooks/useAnimations";
import { ReactNode } from "react";
import { Link } from "react-router-dom";

// Base props shared by both button and anchor
interface BaseProps {
  className?: string;
}

// Props for anchor version
interface AnchorProps
  extends
    Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "children">, // remove duplicate 'children'
    BaseProps {
  href: string; // discriminant
  children: ReactNode;
}

// Props for button version
interface ButtonProps
  extends
    Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "children">, // remove duplicate 'children'
    BaseProps {
  href?: never;
  children: ReactNode;
}

// Union type
type MagneticButtonProps = AnchorProps | ButtonProps;

export function MagneticButton(props: MagneticButtonProps) {
  const { ref, position } = useMagneticEffect();

  const content = (
    <motion.div
      ref={ref}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 200, damping: 15, mass: 0.5 }}
      className={`inline-flex items-center justify-center gap-2 rounded-lg px-8 py-4 font-medium transition-colors ${
        props.className ?? ""
      }`}
    >
      {props.children}
    </motion.div>
  );

  // Render as <a> if href exists
  if ("href" in props && props.href) {
    const { href, children, className, ...anchorProps } = props;
    return (
      <a href={href} className="inline-block" {...anchorProps}>
        {content}
      </a>
    );
  }

  // Otherwise render as <button>
  const { children, className, ...buttonProps } = props as ButtonProps;
  return (
    <button className="inline-block" {...buttonProps}>
      {content}
    </button>
  );
}
