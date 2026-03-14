import { useState } from "react";
import { motion } from "framer-motion";
import {
  StaggerReveal,
  FadeUpItem,
  ScrollReveal,
} from "@/components/ScrollReveal";
import { ExternalLink, Github } from "lucide-react";
import { Link } from "react-router-dom";

const projects = [
  {
    image:
      "https://i.ibb.co.com/W4Yrm67T/grok-image-699c7498-c55d-4d1c-b83f-789a71e66383.png",
    title: "Blood Donation & Funding Application",
    description:
      "A modern full-stack blood donation and funding platform with secure Stripe payments. Donors can contribute funds, track their donation history, and monitor total contributions, while admins manage donor data and funding records through a dedicated dashboard.",
    tags: [
      "React.js",
      "Tailwind CSS",
      "DaisyUI",
      "Node.js",
      "MongoDB",
      "Stripe",
      "Firebase",
      "JWT",
    ],
    color: "from-red-500/20 to-rose-400/10",
    githubLink: "https://github.com/azizulhakim6817/blood_donation_client",
    liveLink: "https://client-eight-ebon-64.vercel.app/",
  },
  {
    image:
      "https://i.ibb.co.com/pvkRVfzq/grok-image-aa7d5034-4f71-410b-9122-6710b29a0126.png",
    title: "Children Kidzz Toys – Kids’ E-Commerce",
    description:
      "A small, single-vendor e-commerce web application focused on selling children's products.",
    tags: [
      "Next.js",
      "Tailwind",
      "DaisyUI",
      "Node.js",
      "MongoDB",
      "Stripe",
      "Next-Auth",
      "JWT",
    ],
    color: "from-orange-400/20 to-amber-300/10",
    githubLink: "https://github.com/azizulhakim6817/nextJS-food-project",
    liveLink: "https://children-kidzz-toys.vercel.app/",
  },
  {
    image:
      "https://i.ibb.co.com/V0nTbx9Z/Chat-GPT-Image-Mar-3-2026-03-23-51-PM.png",
    title: "ZapShift Parcel Management System",
    description:
      "A full-stack parcel management platform with real-time tracking, cash-on-delivery support, rider dashboard, and secure payment integration.",
    tags: [
      "React.js",
      "Tailwind",
      "DaisyUI",
      "Node.js",
      "MongoDB",
      "Stripe",
      "Firebase",
      "JWT",
    ],
    color: "from-green-500/20 to-emerald-400/10",
    githubLink: "https://github.com/azizulhakim6817/zapshift-client-site",
    liveLink: "https://zapshift-client-site.vercel.app/",
  },
  {
    image:
      "https://i.ibb.co.com/Rksmnhjz/grok-image-f8e7a1a0-9a73-47a9-acc4-fedca6db8af0.png",
    title: "Smart Food Sharing & Waste Reduction System",
    description:
      "A full-stack food sharing platform that allows users to donate surplus food and request meals.",
    tags: [
      "React.js",
      "Tailwind",
      "DaisyUI",
      "Node.js",
      "MongoDB",
      "Stripe",
      "Firebase",
      "JWT",
    ],
    color: "from-orange-400/20 to-amber-300/10",
    githubLink:
      "https://github.com/azizulhakim6817/foods-sharing-client-assign-10",
    liveLink: "https://foods-sharing-client-assign-10.vercel.app/",
  },
  {
    image: "https://i.ibb.co.com/8D1KmKmc/my-protfolio.png",
    title: "Portfolio Website",
    description:
      "Full Stack Developer specializing in MERN Stack. I build responsive websites and powerful backend APIs.",
    tags: ["Next.js", "Tailwind", "DaisyUI", "Node.js", "MongoDB", "Next-auth"],
    color: "from-orange-400/20 to-amber-300/10",
    githubLink: "https://github.com/azizulhakim6817/protfolio-website",
    liveLink: "https://protfolio-website-orcin.vercel.app",
  },
  {
    image: "https://i.ibb.co.com/99PnN03F/foods-management-web.png",
    title: "Foods Management System",
    description:
      "A platform for managing food operations including inventory, recipes, and order monitoring.",
    tags: ["Next.js", "Tailwind", "DaisyUI", "Node.js", "MongoDB", "Next-auth"],
    color: "from-orange-400/20 to-amber-300/10",
    githubLink:
      "https://github.com/azizulhakim6817/foods-management-web-2-nextJS",
    liveLink: "https://foods-management-web-2.vercel.app/",
  },
];

export function ProjectsSection() {
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 4;

  const indexOfLast = currentPage * projectsPerPage;
  const indexOfFirst = indexOfLast - projectsPerPage;
  const currentProjects = projects.slice(indexOfFirst, indexOfLast);

  const totalPages = Math.ceil(projects.length / projectsPerPage);

  return (
    <section id="projects" className="section-padding">
      <div className="mx-auto max-w-7xl">
        <ScrollReveal>
          <p className="heading-section">Projects</p>
          <h2 className="heading-lg mb-12">
            Selected <span className="gradient-text">work.</span>
          </h2>
        </ScrollReveal>

        <StaggerReveal className="grid gap-6 md:grid-cols-2">
          {currentProjects.map((project) => (
            <FadeUpItem key={project.title}>
              <motion.div
                whileHover={{ y: -6 }}
                className="glass-card group relative overflow-hidden rounded-xl p-3 md:p-4 cursor-pointer"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
                />

                <div className="relative z-10 space-y-3">
                  <div className="relative rounded-xl overflow-hidden">
                    <Link to={project.liveLink} target="_blank">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="h-70 w-full object-cover rounded-xl transition-transform duration-500 hover:scale-105"
                      />
                    </Link>
                  </div>

                  <div className="flex items-center justify-between">
                    <Link to={project.liveLink} target="_blank">
                      <h3 className="text-xl font-bold text-foreground">
                        {project.title}
                      </h3>
                    </Link>

                    <div className="flex gap-3">
                      <Link to={project.githubLink} target="_blank">
                        <Github className="h-4 w-4 text-muted-foreground hover:text-foreground transition-colors" />
                      </Link>
                      <Link to={project.liveLink} target="_blank">
                        <ExternalLink className="h-4 w-4 text-muted-foreground hover:text-foreground transition-colors" />
                      </Link>
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {project.description.slice(0, 150)}...
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-border bg-secondary/50 px-3 py-1 text-xs text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </FadeUpItem>
          ))}
        </StaggerReveal>

        {/* Pagination */}
        <div className="flex justify-center gap-2 mt-12">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                currentPage === i + 1
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-muted-foreground hover:bg-primary/20"
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
