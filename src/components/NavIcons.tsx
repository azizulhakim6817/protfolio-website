import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home,
  User,
  Wrench,
  FolderOpen,
  Briefcase,
  CircleDollarSign,
  Mail,
  FileText,
  Settings,
} from "lucide-react";

type NavItem = { id: string; label: string; icon: typeof Home };

const navItems: NavItem[] = [
  { id: "home", label: "Home", icon: Home },
  { id: "about", label: "About", icon: User },
  { id: "resume", label: "Resume", icon: FileText },
  { id: "skills", label: "Skills", icon: Settings },
  { id: "projects", label: "Projects", icon: FolderOpen },
  { id: "services", label: "Services", icon: Briefcase },
  { id: "pricing", label: "Pricing", icon: CircleDollarSign },
  { id: "contact", label: "Contact", icon: Mail },
];

const NavIcons: React.FC = () => {
  const [active, setActive] = useState("home");
  const [hovered, setHovered] = useState<string | null>(null);

  // Track which section is in view
  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { threshold: 0.2, rootMargin: "-20% 0px -20% 0px" },
    );

    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  // Scroll to section smoothly
  const handleClick = (id: string) => {
    setActive(id);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <nav className="lg:border fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col items-center gap-2 p-2 rounded-2xl nav-container">
      {navItems.map((item) => {
        const isActive = active === item.id;
        const Icon = item.icon;

        return (
          <a
            key={item.id}
            href={`#${item.id}`}
            onClick={(e) => {
              e.preventDefault();
              handleClick(item.id);
            }}
            onMouseEnter={() => setHovered(item.id)}
            onMouseLeave={() => setHovered(null)}
            className="relative p-3 rounded-xl transition-colors duration-200 group"
            aria-label={item.label}
          >
            {/* Hover label */}
            <AnimatePresence>
              {hovered === item.id && (
                <motion.div
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: -8 }}
                  exit={{ opacity: 0, x: 10 }}
                  transition={{ duration: 0.15 }}
                  className="absolute right-full mr-2 px-2.5 py-1 rounded-lg bg-foreground text-background text-[11px] font-medium tracking-wider pointer-events-none whitespace-nowrap"
                >
                  {item.label}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Active background pill */}
            {isActive && (
              <motion.div
                layoutId="nav-active-pill"
                className="absolute inset-0 bg-primary rounded-xl shadow-[0_2px_8px_hsl(221_83%_53%/0.3)]"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}

            {/* Icon */}
            <Icon
              size={18}
              className="relative z-10 transition-colors duration-200 text-muted-foreground group-hover:text-foreground"
            />
          </a>
        );
      })}
    </nav>
  );
};

export default NavIcons;
