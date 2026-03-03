import { StaggerReveal, FadeUpItem, ScrollReveal } from "@/components/ScrollReveal";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Paul Trueman",
    role: "Template Author",
    text: "Working with Azizul has been a pleasure. Better yet — I alerted them of a minor issue before going to sleep. The issue was fixed the next morning. I couldn't ask for better support. Thank you Azizul! This is easily a 5 star freelancer.",
    rating: 5,
  },
  {
    name: "Sarah Mitchell",
    role: "Startup Founder",
    text: "Azizul delivered our entire MVP in record time. The code quality was exceptional, and the attention to detail in both the UI and backend architecture was impressive. Highly recommended for any serious project.",
    rating: 5,
  },
  {
    name: "James Chen",
    role: "Product Manager",
    text: "An outstanding developer who truly understands both the technical and business sides. Azizul transformed our complex requirements into an elegant, performant application. Will definitely hire again.",
    rating: 5,
  },
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="section-padding bg-card/50">
      <div className="mx-auto max-w-7xl">
        <ScrollReveal>
          <p className="heading-section">Testimonials</p>
          <h2 className="heading-lg mb-12">
            <span className="gradient-text">Recommendations.</span>
          </h2>
        </ScrollReveal>

        <StaggerReveal className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item) => (
            <FadeUpItem key={item.name}>
              <div className="glass-card rounded-xl p-6 md:p-8 space-y-4 h-full flex flex-col">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary font-bold text-lg">
                    {item.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{item.name}</h4>
                    <p className="text-xs text-muted-foreground">{item.role}</p>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                  {item.text.slice(0,100)}
                </p>

                <div className="flex gap-1 pt-2">
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
              </div>
            </FadeUpItem>
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
}
