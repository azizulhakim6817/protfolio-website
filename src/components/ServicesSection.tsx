import { StaggerReveal, FadeUpItem, ScrollReveal } from "@/components/ScrollReveal";
import { Code, Layout, Server, Smartphone, Palette, Zap } from "lucide-react";

const services = [
  { icon: Code, title: "Web Development", description: "Custom web applications built with modern frameworks and best practices." },
  { icon: Layout, title: "UI/UX Design", description: "Clean, intuitive interfaces focused on user experience and conversion." },
  { icon: Server, title: "Backend Development", description: "Scalable APIs and server architectures that power your applications." },
  { icon: Smartphone, title: "Responsive Design", description: "Pixel-perfect experiences across every device and screen size." },
  { icon: Palette, title: "Design Systems", description: "Consistent, reusable component libraries that scale with your product." },
  { icon: Zap, title: "Performance", description: "Optimized applications with fast load times and smooth interactions." },
];

export function ServicesSection() {
  return (
    <section id="services" className="section-padding bg-card/50">
      <div className="mx-auto max-w-7xl">
        <ScrollReveal>
          <p className="heading-section">Services</p>
          <h2 className="heading-lg mb-12">
            What I <span className="gradient-text">offer.</span>
          </h2>
        </ScrollReveal>

        <StaggerReveal className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <FadeUpItem key={service.title}>
              <div className="glass-card group rounded-xl p-6 transition-all duration-300 hover:border-primary/30">
                <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3 text-primary transition-colors group-hover:bg-primary/20">
                  <service.icon className="h-5 w-5" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            </FadeUpItem>
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
}
