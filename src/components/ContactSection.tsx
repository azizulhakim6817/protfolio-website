import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/ScrollReveal";
import { MagneticButton } from "@/components/MagneticButton";
import { Send, Mail, MapPin } from "lucide-react";
import { FaWhatsappSquare } from "react-icons/fa";
import confetti from "canvas-confetti";
import { Link } from "react-router-dom";

export function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const formRef = useRef<HTMLFormElement>(null);

  //! handlesubmit--------------
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState({ name: "", email: "", message: "" });
    shootConfetti();
  };

  //! * npm i canvas-confetti------------ */
  const shootConfetti = () => {
    confetti({
      particleCount: 30,
      spread: 360,
      ticks: 60,
      gravity: 0.5,
      decay: 0.9,
      shapes: ["circle"],
      scalar: 2,
    });
  };

  return (
    <section id="contact" className="section-padding">
      <div className="mx-auto max-w-7xl">
        <ScrollReveal>
          <p className="heading-section">Contact</p>
          <h2 className="heading-lg mb-12">
            Let's <span className="gradient-text">connect.</span>
          </h2>
        </ScrollReveal>

        <div className="grid gap-12 lg:grid-cols-2">
          <ScrollReveal delay={0.1}>
            <div className="space-y-8">
              <p className="body-text">
                I'm always open to new opportunities, whether it's a freelance
                project, a full-time remote position, or just a chat about tech.
              </p>
              <div className="space-y-4">
                <div
                  onClick={() =>
                    window.open(
                      "https://mail.google.com/mail/?view=cm&fs=1&to=azizulhakim68178@gmail.com",
                      "_blank",
                    )
                  }
                  className="flex items-center gap-4 p-2 rounded-lg bg-primary/10 hover:opacity-80 transition cursor-pointer"
                >
                  <div className="rounded-lg bg-primary/20 p-3">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>

                  <div>
                    <p className="text-xs text-muted-foreground">Email</p>
                    <p className="font-medium text-foreground">
                      azizulhakim68178@gmail.com
                    </p>
                  </div>
                </div>
                <div
                  onClick={() =>
                    window.open("https://wa.me/8801743086886", "_blank")
                  }
                  className="flex items-center gap-4 p-2 rounded-lg bg-primary/10 hover:opacity-80 transition cursor-pointer"
                >
                  <div className="rounded-lg bg-primary/20 p-3">
                    <FaWhatsappSquare className="h-5 w-5 text-primary" />
                  </div>

                  <div>
                    <p className="text-xs text-muted-foreground">WhatsApp</p>
                    <p className="font-medium text-foreground">
                      +880 1743086886
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="rounded-lg bg-primary/10 p-3">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Location</p>
                    <p className="font-medium text-foreground">
                      Available Worldwide (Remote)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="glass-card rounded-xl p-6 md:p-8 space-y-5"
            >
              {(["name", "email"] as const).map((field) => (
                <div key={field}>
                  <label
                    htmlFor={field}
                    className="mb-2 block text-xs font-medium uppercase tracking-wider text-muted-foreground"
                  >
                    {field}
                  </label>
                  <motion.input
                    whileFocus={{ borderColor: "hsl(200, 100%, 55%)" }}
                    id={field}
                    required
                    type={field === "email" ? "email" : "text"}
                    value={formState[field]}
                    onChange={(e) =>
                      setFormState((s) => ({ ...s, [field]: e.target.value }))
                    }
                    className="w-full rounded-lg border border-border bg-secondary/30 px-4 py-3 text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary"
                    placeholder={
                      field === "name" ? "Your name" : "your@email.com"
                    }
                  />
                </div>
              ))}
              <div>
                {/* form--------------- */}
                <label
                  htmlFor="message"
                  className="mb-2 block text-xs font-medium uppercase tracking-wider text-muted-foreground"
                >
                  Message
                </label>
                <motion.textarea
                  whileFocus={{ borderColor: "hsl(200, 100%, 55%)" }}
                  id="message"
                  required
                  rows={4}
                  value={formState.message}
                  onChange={(e) =>
                    setFormState((s) => ({ ...s, message: e.target.value }))
                  }
                  className="w-full resize-none rounded-lg border border-border bg-secondary/30 px-4 py-3 text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary"
                  placeholder="Tell me about your project..."
                />
              </div>
              <MagneticButton className="w-full font-bold bg-primary text-primary-foreground justify-center">
                <Send className="h-4 w-4" />
                Send Message
              </MagneticButton>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
