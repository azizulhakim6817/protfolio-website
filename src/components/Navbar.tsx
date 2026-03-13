import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "@/components/ThemeToggle";
import logo from "./../assets/logo.png";

const navItems = [
  { label: "Home", href: "#" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 max-w-6xl left-0 md:left-0 lg:left-72 right-0 z-50 transition-all duration-300 shadow-lg shadow-background/50  ${
        scrolled ? "glass-card py-3 shadow-xl shadow-background/60" : "py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 md:px-12 lg:px-24 xl:px-32">
        <a href="#" className="text-xl font-bold gradient-text">
          <img
            className="h-10 w-32 xl:-ml-10 lg:hidden xl:block object-cover rounded-full"
            src={logo}
            alt=""
          />
        </a>

        {/* Desktop nav - centered */}
        <div className="hidden  md:-ml-2 lg:-ml-0 xl:-ml-8 md:flex items-center gap-8  absolute left-1/2 lg:left-1/3 xl:left-1/2 -translate-x-1/2 ">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </div>

    
        {/* Right side */}
        <div className="flex items-center gap-4">
          {/* ThemeToggle always visible */}
          <ThemeToggle />
          {/* Hire Me button only on md+ */}
          <a
            href="#contact"
            className="hidden md:inline-block rounded-lg font-bold bg-primary px-5 py-2 text-sm text-primary-foreground transition-transform hover:scale-105"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden flex flex-col gap-1.5"
          aria-label="Toggle menu"
        >
          <motion.span
            animate={{ rotate: mobileOpen ? 45 : 0, y: mobileOpen ? 8 : 0 }}
            className="block h-0.5 w-6 bg-foreground"
          />
          <motion.span
            animate={{ opacity: mobileOpen ? 0 : 1 }}
            className="block h-0.5 w-6 bg-foreground"
          />
          <motion.span
            animate={{ rotate: mobileOpen ? -45 : 0, y: mobileOpen ? -8 : 0 }}
            className="block h-0.5 w-6 bg-foreground"
          />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="glass-card md:hidden overflow-hidden"
          >
            <div className="flex flex-col gap-4 px-6 py-6">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
