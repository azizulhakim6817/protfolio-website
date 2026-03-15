import { motion } from "framer-motion";
import { Check, X, ArrowRight } from "lucide-react";
import { StaggerReveal, FadeUpItem, ScrollReveal } from "@/components/ScrollReveal";

const plans = [
  {
    name: "Starter Price",
    price: "FREE",
    period: "hour",
    popular: false,
    features: [
      { name: "Web Development", included: true },
      { name: "UI Design", included: true },
      { name: "React.js", included: true },
      { name: "Next.js", included: true },
      { name: "Tailwind CSS", included: true },
      { name: "DaisyUI", included: false },
      { name: "ShadcnUI", included: false },
      { name: "Node.js", included: false },
      { name: "MongoDB", included: false },
      { name: "Stripe", included: false },
      { name: "Firebase", included: false },
      { name: "JWT", included: false },
      { name: "Next-Auth", included: false },
    ],
    note: "* Free only when ordering paid services",
  },
  {
    name: "Hourly Payment",
    price: "29",
    period: "hour",
    popular: true,
    features: [
      { name: "Web Development", included: true },
      { name: "UI Design", included: true },
      { name: "React.js", included: true },
      { name: "Next.js", included: true },
      { name: "Tailwind CSS", included: true },
      { name: "DaisyUI", included: true },
      { name: "ShadcnUI", included: false },
      { name: "Node.js", included: true },
      { name: "MongoDB", included: true },
      { name: "Stripe", included: true },
      { name: "Firebase", included: true },
      { name: "JWT", included: true },
      { name: "Next-Auth", included: true },
    ],
  },
  {
    name: "Full Time",
    price: "2999",
    period: "month",
    popular: false,
    features: [
      { name: "Web Development", included: true },
      { name: "UI Design", included: true },
      { name: "React.js", included: true },
      { name: "Next.js", included: true },
      { name: "Tailwind CSS", included: true },
      { name: "DaisyUI", included: true },
      { name: "ShadcnUI", included: true },
      { name: "Node.js", included: true },
      { name: "MongoDB", included: true },
      { name: "Stripe", included: true },
      { name: "Firebase", included: true },
      { name: "JWT", included: true },
      { name: "Next-Auth", included: true },
    ],
  },
];

export function PricingSection() {
  return (
    <section id="pricing" className="section-padding">
      <div className="mx-auto max-w-7xl">
        <ScrollReveal>
          <p className="heading-section">Pricing</p>
          <h2 className="heading-lg mb-12">
            Price <span className="gradient-text">Plans.</span>
          </h2>
        </ScrollReveal>

        <StaggerReveal className="grid gap-6 md:grid-cols-3">
          {plans.map((plan) => (
            <FadeUpItem key={plan.name}>
              <div
                className={`glass-card relative rounded-xl p-6 md:p-8 transition-all duration-300 hover:border-primary/30 ${
                  plan.popular ? "border-primary/50 ring-1 ring-primary/20" : ""
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-0 right-4 rounded-b-lg bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground uppercase tracking-wider">
                    Popular
                  </div>
                )}

                <h3 className="text-lg font-semibold text-primary text-center mb-6">
                  {plan.name}
                </h3>

                <div className="flex items-baseline justify-center gap-1 mb-8">
                  <span className="text-sm text-muted-foreground">$</span>
                  <span className="text-5xl font-bold gradient-text">{plan.price}</span>
                  <span className="text-sm text-muted-foreground italic">/ {plan.period}</span>
                </div>

                <div className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <div key={feature.name} className="flex items-center gap-3">
                      {feature.included ? (
                        <Check className="h-4 w-4 text-primary flex-shrink-0" />
                      ) : (
                        <X className="h-4 w-4 text-muted-foreground/40 flex-shrink-0" />
                      )}
                      <span
                        className={`text-sm ${
                          feature.included ? "text-foreground" : "text-muted-foreground/50"
                        }`}
                      >
                        {feature.name}
                      </span>
                    </div>
                  ))}
                </div>

                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center justify-center gap-2 rounded-lg border border-primary/30 bg-primary/5 px-6 py-3 text-sm font-medium text-primary transition-colors hover:bg-primary/10 w-full"
                >
                  ORDER NOW <ArrowRight className="h-4 w-4" />
                </motion.a>

                {plan.note && (
                  <p className="mt-4 text-center text-xs text-muted-foreground italic">{plan.note}</p>
                )}
              </div>
            </FadeUpItem>
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
}