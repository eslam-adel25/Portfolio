import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Facebook, Twitter, Instagram, Linkedin, Download, ArrowRight } from 'lucide-react';
import myImage from "../img/es2.jpg";

const HeroSection = () => {
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const professions = ['Frontend Developer', 'React Specialist', 'Web Creator'];
  const period = 2000;
  const deltaRef = useRef(100);
  const tickRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const tick = () => {
      const i = loopNum % professions.length;
      const fullText = professions[i];

      if (isDeleting) {
        setDisplayText(fullText.substring(0, displayText.length - 1));
        deltaRef.current = 50;
      } else {
        setDisplayText(fullText.substring(0, displayText.length + 1));
        deltaRef.current = 100;
      }

      if (!isDeleting && displayText === fullText) {
        deltaRef.current = period;
        setIsDeleting(true);
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        deltaRef.current = 500;
      }

      tickRef.current = setTimeout(tick, deltaRef.current);
    };

    tickRef.current = setTimeout(tick, 500);

    return () => {
      if (tickRef.current) clearTimeout(tickRef.current);
    };
  }, [displayText, isDeleting, loopNum, professions]);

  const socialLinks = [
    { icon: Facebook, href: 'https://www.instagram.com/eslam_adel0127?igsh=MWZ5bGgzdGdvbDY2Nw==', label: 'Facebook' },
    { icon: Twitter, href: 'https://x.com/AdelEslam87922', label: 'Twitter' },
    { icon: Instagram, href: 'https://www.facebook.com/share/1LSKF77jxP/', label: 'Instagram' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/eslam-adel-jadalrab-808862361?utm_source=share_via&utm_content=profile&utm_medium=member_android', label: 'LinkedIn' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' as const },
    },
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden"
    >
      {/* Background Orbs */}
      <div className="orb orb-1" />
      <div className="orb orb-2" />

      <div className="max-w-7xl mx-auto px-6 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="order-2 lg:order-1"
          >
            <motion.p
              variants={itemVariants}
              className="text-[#00d4ff] text-lg font-medium mb-4"
            >
              Hello, I'm
            </motion.p>

            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4"
            >
              Eslam <span className="gradient-text">Adel</span>
            </motion.h1>

            <motion.div
              variants={itemVariants}
              className="text-2xl md:text-3xl font-semibold mb-6 h-12"
            >
              <span className="text-white">And I'm a </span>
              <span className="gradient-text typing-cursor">{displayText}</span>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-[#a0a0b0] text-lg max-w-lg mb-8 leading-relaxed"
            >
              A passionate Front-End Developer dedicated to creating modern,
              responsive, and user-friendly websites that deliver exceptional
              digital experiences.
            </motion.p>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="flex gap-4 mb-8">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={social.label}
                >
                  <social.icon size={22} />
                </motion.a>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4"
            >
              <motion.a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="btn-luxury flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Hire Me
                <ArrowRight size={18} />
              </motion.a>
              <motion.a
                href="#"
                className="px-8 py-4 border border-[#00d4ff] text-[#00d4ff] rounded-full font-semibold flex items-center gap-2 hover:bg-[#00d4ff] hover:text-white transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download size={18} />
                Download CV
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#00d4ff] to-[#7b2cbf] rounded-full blur-[80px] opacity-30 animate-pulse" />

              {/* Image Container */}
              <motion.div
                className="relative w-72 h-72 md:w-96 md:h-96"
                animate={{ y: [0, -20, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <div className="image-frame w-full h-full">
                  <img
                    src={myImage}
                    alt="Eslam Adel"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Floating Badges */}
                <motion.div
                  className="absolute -top-4 -right-4 glass px-4 py-2 rounded-full"
                  animate={{ y: [0, -10, 0] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5,
                  }}
                >
                  <span className="text-[#00d4ff] font-semibold text-sm">
                    3+ Years
                  </span>
                </motion.div>

                <motion.div
                  className="absolute -bottom-4 -left-4 glass px-4 py-2 rounded-full"
                  animate={{ y: [0, 10, 0] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                >
                  <span className="text-[#ffd700] font-semibold text-sm">
                    40+ Projects
                  </span>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-[#00d4ff] rounded-full flex justify-center pt-2">
          <motion.div
            className="w-1.5 h-3 bg-[#00d4ff] rounded-full"
            animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
