import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Users, Award, Briefcase, Zap } from "lucide-react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt } from "react-icons/fa";
import {
  SiTypescript,
  SiTailwindcss,
  SiDotnet,
  SiPython,
  SiCplusplus,
  SiMysql,
} from "react-icons/si";

import aboutImg from "../img/Eslam_Adel.png";

const AboutSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [counters, setCounters] = useState({
    projects: 0,
    clients: 0,
    experience: 0,
    awards: 0,
  });

  const stats = [
    {
      icon: Briefcase,
      value: 10,
      label: "Projects Completed",
      key: "projects",
    },
    { icon: Users, value: 10, label: "Happy Clients", key: "clients" },
    { icon: Award, value: 3, label: "Years Experience", key: "experience" },
    { icon: Zap, value: 5, label: "Awards Won", key: "awards" },
  ];

  const skills = {
    Advanced: [
      { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
      { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
      { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
    ],
    Experienced: [
      { name: "React", icon: <FaReact className="text-cyan-400" /> },
    ],
    Strong: [
      { name: "Tailwind", icon: <SiTailwindcss className="text-teal-400" /> },
      { name: "Git", icon: <FaGitAlt className="text-orange-600" /> },
    ],
    Intermediate: [
      { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
    ],
    Familiar: [
      { name: "Python", icon: <SiPython className="text-yellow-300" /> },
      { name: "C++", icon: <SiCplusplus className="text-gray-400" /> },
      { name: ".NET", icon: <SiDotnet className="text-purple-500" /> },
      { name: "SQL", icon: <SiMysql className="text-blue-400" /> },
    ],
  };

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const interval = duration / steps;

      let step = 0;
      const timer = setInterval(() => {
        step++;
        const progress = step / steps;
        const easeOut = 1 - Math.pow(1 - progress, 3);

        setCounters({
          projects: Math.floor(10 * easeOut),
          clients: Math.floor(10 * easeOut),
          experience: Math.floor(3 * easeOut),
          awards: Math.floor(5 * easeOut),
        });

        if (step >= steps) clearInterval(timer);
      }, interval);

      return () => clearInterval(timer);
    }
  }, [isInView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  return (
    <section id="about" className="py-24 relative" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#00d4ff] text-sm font-semibold tracking-wider uppercase mb-4 block">
            Get To Know Me
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#00d4ff] to-[#7b2cbf] mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              {/* Background Shape */}
              <div className="absolute -inset-4 bg-gradient-to-br from-[#00d4ff20] to-[#7b2cbf20] rounded-3xl transform rotate-3" />

              {/* Main Image */}
              <div className="relative rounded-2xl overflow-hidden">
                <img
                  src={aboutImg}
                  alt="Eslam Adel"
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-transparent" />
              </div>

              {/* Experience Badge */}
              <motion.div
                className="absolute -bottom-6 -right-6 glass p-6 rounded-2xl"
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.6, type: "spring" }}
              >
                <div className="text-4xl font-bold gradient-text">3+</div>
                <div className="text-sm text-[#a0a0b0]">
                  Years of
                  <br />
                  Experience
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.h3
              variants={itemVariants}
              className="text-2xl font-bold mb-4"
            >
              Frontend Developer
            </motion.h3>

            <motion.p
              variants={itemVariants}
              className="text-[#a0a0b0] mb-6 leading-relaxed"
            >
              I'm a Front-End Developer focused on building modern, scalable,
              and user-centered web applications. Using React, TypeScript, and
              Tailwind CSS, I transform ideas into fast, responsive, and
              maintainable digital products.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-[#a0a0b0] mb-8 leading-relaxed"
            >
              My approach is centered on writing clean, maintainable code and
              building intuitive, accessible user interfaces. I continuously
              improve my skills by staying up to date with modern web
              technologies, best practices, and industry standards.
            </motion.p>

            {/* Skills */}
            <motion.div variants={itemVariants} className="mb-8">
              <h4 className="text-lg font-semibold mb-4">Technical Skills</h4>

              {Object.entries(skills).map(([level, items]) => (
                <div key={level} className="mb-4">
                  <h5 className="text-sm text-[#00d4ff] mb-2">{level}</h5>

                  <div className="flex flex-wrap gap-2">
                    {items.map((skill, i) => (
                      <span
                        key={i}
                        className="flex items-center gap-2 px-3 py-1 text-sm rounded-full bg-[#1a1a25] border border-[#2a2a35] hover:border-[#00d4ff] hover:scale-105 hover:shadow-[0_0_10px_#00d4ff55] transition"
                      >
                        {skill.icon}
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>
          
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="card-luxury p-6 text-center group"
              whileHover={{ y: -5 }}
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#00d4ff20] to-[#7b2cbf20] flex items-center justify-center group-hover:scale-110 transition-transform">
                <stat.icon className="text-[#00d4ff]" size={28} />
              </div>
              <div className="text-3xl font-bold gradient-text mb-1">
                {counters[stat.key as keyof typeof counters]}+
              </div>
              <div className="text-sm text-[#a0a0b0]">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
