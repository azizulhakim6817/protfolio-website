import React from "react";
import profile from "../assets/profile.png";
import { ArrowDown, Github, Linkedin, Twitter, Facebook } from "lucide-react";
import { motion } from "framer-motion";
import { Video } from "lucide-react";
import intoVideo from "../assets/intro-video-azizul hakim.mp4";

const skills = [
  { lang: "English", percent: 100 },
  { lang: "French", percent: 70 },
  { lang: "Spanish", percent: 70 },
];

const LeftSidebar: React.FC = () => {
  return (
    <aside className="w-full md:mt-16 lg:mt-0  md:w-80 lg:w-72 bg-card text-card-foreground border-r border-border">
      <section className="p-6 md:p-8">
        {/* Profile */}
        <div className="flex flex-col items-center text-center ">
          <div className="relative mb-4">
            <img
              alt="Profile"
              className="w-24 h-24 md:w-28 md:h-28 rounded-full object-cover border-4 border-primary shadow-lg"
              src={profile}
            />
            <span className="absolute bottom-1 right-1 w-4 h-4 bg-primary rounded-full border-2 border-card" />
          </div>

          <h1 className="text-lg md:text-xl font-bold">Azizul Hakim</h1>

          <p className="text-sm text-muted-foreground mt-1 mb-3">
            Front-end Developer <br />
            Mern Stack || Full Stack Developer
          </p>
        </div>
        {/* into-video */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4 }}
            className=" flex justify-center mb-2"
          >
            <a
              href={intoVideo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4  rounded-full bg-primary text-white text-sm font-medium shadow-md hover:scale-105 transition-all"
            >
              <Video className="w-4 h-4"  />
              Watch Video
            </a>
          </motion.div>
        </div>

        {/* Info */}
        <div className="space-y-3 text-sm">
          <div className="flex justify-between">
            <span className="font-medium">Residence:</span>
            <span className="text-muted-foreground">Bangladesh</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">City:</span>
            <span className="text-muted-foreground">B-Baria</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Age:</span>
            <span className="text-muted-foreground">29</span>
          </div>
        </div>

        <hr className="my-6 border-border" />
        <div>
          {/* Social icons on the right side of the image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2, duration: 0.5 }}
            className="-translate-y-1/2 flex justify-around items-center"
          >
            {[
              {
                icon: Github,
                href: "https://github.com/azizulhakim6817",
                label: "GitHub",
              },
              {
                icon: Linkedin,
                href: "https://www.linkedin.com/in/azizul-hakim-948309237",
                label: "LinkedIn",
              },
              {
                icon: Twitter,
                href: "https://x.com/AzizulH33799138",
                label: "Twitter",
              },
              {
                icon: Facebook,
                href: "https://www.facebook.com/azizulhakim6817",
                label: "Facebook",
              },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="flex h-10 w-10 items-center justify-center rounded-full glass-card text-muted-foreground transition-all hover:text-primary hover:scale-110 hover:shadow-lg"
              >
                <social.icon className="h-4 w-4" />
              </a>
            ))}
          </motion.div>
        </div>
        <hr className="my-6 border-border" />

        {/* Languages */}
        <div className="grid grid-cols-3 gap-4 text-center">
          {skills.map((item) => {
            const radius = 45;
            const circumference = 2 * Math.PI * radius;
            const offset = circumference - (circumference * item.percent) / 100;

            return (
              <div key={item.lang} className="flex flex-col items-center">
                <div className="relative w-16 h-16 md:w-20 md:h-20">
                  <svg className="w-full h-full rotate-[-90deg]">
                    {/* Background Circle */}
                    <circle
                      cx="50%"
                      cy="50%"
                      r={radius + "%"}
                      stroke="hsl(var(--muted))"
                      strokeWidth="6"
                      fill="transparent"
                    />

                    {/* Animated Progress Circle */}
                    <motion.circle
                      cx="50%"
                      cy="50%"
                      r={radius + "%"}
                      stroke="hsl(var(--primary))"
                      strokeWidth="6"
                      fill="transparent"
                      strokeDasharray={circumference}
                      strokeDashoffset={circumference}
                      strokeLinecap="round"
                      initial={{ strokeDashoffset: circumference }}
                      animate={{ strokeDashoffset: offset }}
                      transition={{ duration: 1.2, ease: "easeOut" }}
                    />
                  </svg>

                  <span className="absolute inset-0 flex items-center justify-center text-xs font-semibold">
                    {item.percent}%
                  </span>
                </div>

                <span className="mt-2 text-xs uppercase font-medium text-muted-foreground">
                  {item.lang}
                </span>
              </div>
            );
          })}
        </div>
      </section>
    </aside>
  );
};

export default LeftSidebar;
