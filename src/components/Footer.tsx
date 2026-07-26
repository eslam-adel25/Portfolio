import { motion } from "framer-motion";
import { ArrowUp, Heart } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: "Quick Links",
      links: [
        { label: "Home", href: "#home" },
        { label: "About", href: "#about" },
        { label: "Expertise", href: "#expertise" },
        { label: "Portfolio", href: "#portfolio" },
      ],
    },
    {
      title: "Expertise",
      links: [
        { label: "Web Development", href: "#expertise" },
        { label: "UI/UX Design", href: "#expertise" },
        { label: "Digital Marketing", href: "#expertise" },
        { label: "Mobile Apps", href: "#expertise" },
      ],
    },
  ];

  return (
    <footer className="relative bg-[#0a0a0f] border-t border-[#ffffff08]">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <motion.a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("home")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="text-3xl font-bold gradient-text inline-block mb-4"
              whileHover={{ scale: 1.05 }}
            >
              Eslam<span className="text-white">.</span>
            </motion.a>
            <p className="text-[#a0a0b0] max-w-md mb-6 leading-relaxed">
              A passionate Front-End Developer creating modern, responsive, and
              user-friendly web applications. Let's work together to bring your
              ideas to life.
            </p>
            <motion.button
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="btn-luxury text-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.button>
          </div>

          {/* Links */}
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h4 className="text-lg font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        document
                          .querySelector(link.href)
                          ?.scrollIntoView({ behavior: "smooth" });
                      }}
                      className="text-[#a0a0b0] hover:text-[#00d4ff] transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#ffffff08]">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#a0a0b0] text-sm flex items-center gap-1">
            © {currentYear} Eslam Adel. Made with
            <Heart size={14} className="text-red-500 fill-red-500" />
            in Egypt
          </p>

          <motion.button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-gradient-to-r from-[#00d4ff] to-[#7b2cbf] flex items-center justify-center text-white"
            whileHover={{ scale: 1.1, y: -3 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
