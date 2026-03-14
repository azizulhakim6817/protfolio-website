import { ScrollReveal } from "@/components/ScrollReveal";

export function AboutSection() {
  return (
    <section id="about" className="section-padding">
      <div className="mx-auto max-w-7xl">
        <ScrollReveal>
          <p className="heading-section">About Me</p>
          <h2 className="text-4xl font-semibold leading-10  mb-8">
            MERN Stack Developer
            <br />
            <span className="gradient-text"> React, Next.js & Node.js </span>
            Expert.
          </h2>
        </ScrollReveal>

        <div className="grid gap-12 lg:grid-cols-2">
          <ScrollReveal delay={0.1}>
            <div className="space-y-6 body-text">
              <p>
                I am Azizul Hakim, a Frontend and MERN Stack Developer skilled
                in React, Next.js, Node.js, Express, Firebase, MongoDB,
                Mongoose, HTML, CSS, JavaScript, and Tailwind CSS.
              </p>
              <p>
                I am passionate about building responsive and high-performance
                web applications while enhancing user experience. I am excited
                to contribute to innovative projects and continuously grow as a
                professional developer
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Name", value: "Azizul Hakim" },
                { label: "Location", value: "B-Baria" },
                { label: "Experience", value: "2+ Years" },
                { label: "Availability", value: "Freelance & Remote" },
                { label: "Focus", value: "Full Stack" },
                { label: "Education", value: "B.B.M" },
              ].map((item) => (
                <div key={item.label} className="glass-card rounded-lg p-4">
                  <p className="text-xs text-muted-foreground mb-1">
                    {item.label}
                  </p>
                  <p className="font-medium text-foreground">{item.value}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
