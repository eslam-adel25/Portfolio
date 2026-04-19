import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Users, Award, Briefcase, Zap } from 'lucide-react';
import aboutImg from "../img/Eslam_Adel.jpg";

const AboutSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const [counters, setCounters] = useState({ projects: 0, clients: 0, experience: 0, awards: 0 });

  const stats = [
    { icon: Briefcase, value: 40, label: 'Projects Completed', key: 'projects' },
    { icon: Users, value: 20, label: 'Happy Clients', key: 'clients' },
    { icon: Award, value: 3, label: 'Years Experience', key: 'experience' },
    { icon: Zap, value: 10, label: 'Awards Won', key: 'awards' },
  ];

  const skills = [
    { name: 'HTML/CSS', level: 95 },
    { name: 'JavaScript', level: 90 },
    { name: 'React.js', level: 88 },
    { name: 'TypeScript', level: 85 },
    { name: 'Tailwind CSS', level: 92 },
    
  ];

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
          projects: Math.floor(40 * easeOut),
          clients: Math.floor(20 * easeOut),
          experience: Math.floor(3 * easeOut),
          awards: Math.floor(10 * easeOut),
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
      transition: { duration: 0.6, ease: 'easeOut' as const },
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
              I'm a passionate Front-End Developer with expertise in creating
              modern, responsive, and user-friendly websites . I specialize in
              transforming ideas into stunning digital experiences using
              cutting-edge technologies like React, TypeScript, and Tailwind
              CSS.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-[#a0a0b0] mb-8 leading-relaxed"
            >
              My goal is to deliver exceptional user experiences through clean
              code, intuitive design, and attention to detail. I believe in
              continuous learning and staying updated with the latest web
              development trends to provide the best solutions for my clients.
            </motion.p>

            {/* Skills */}
            <motion.div variants={itemVariants} className="mb-8">
              <h4 className="text-lg font-semibold mb-4">Technical Skills</h4>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm text-[#a0a0b0]">
                        {skill.name}
                      </span>
                      <span className="text-sm text-[#00d4ff]">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-[#1a1a25] rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-[#00d4ff] to-[#7b2cbf] rounded-full"
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* CTA Button */}
            <motion.button
              variants={itemVariants}
              className="btn-luxury"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Read More
            </motion.button>
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
