import { Github, Linkedin, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Azizul Hakim. All rights reserved.
        </p>
        <div className="flex items-center gap-5">
          {[
            { icon: Github, href: "/" },
            { icon: Linkedin, href: "/" },
            { icon: Twitter, href: "/" },
          ].map((social, i) => (
            <a
              key={i}
              href={social.href}
              className="text-muted-foreground transition-colors hover:text-primary"
              aria-label={social.icon.displayName}
            >
              <social.icon className="h-5 w-5" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
