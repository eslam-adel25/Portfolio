import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Eye, X } from "lucide-react";
import jsGuideImg from "../img/js-guide.png";

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
}

const PortfolioSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "Web Design", "Development", "UI/UX"];

  const projects: Project[] = [
    /*{
      id: 1,
      title: "E-Commerce Platform",
      category: "Development",
      description:
        "A modern e-commerce platform built with React and Node.js, featuring secure payments and real-time inventory management.",
      image:
        "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      liveUrl: "#",
      githubUrl: "#",
    },*/
    {
      id: 2,
      title: "JS Guide",
      category: "Web Design",
      description:
        "Interactive JavaScript learning platform with real-world examples, mini games, and modern UI.",
      image: jsGuideImg,
      technologies: ["HTML/CSS", "JavaScript"],
      liveUrl: "https://eslam-adel25.github.io/js-guide/",
      githubUrl: "https://github.com/eslam-adel25/js-guide",
    },
    /*{
      id: 3,
      title: 'Mobile Banking App',
      category: 'UI/UX',
      description: 'A sleek mobile banking application design with intuitive user experience and modern interface.',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop',
      technologies: ['Figma', 'Prototyping', 'User Research'],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      id: 4,
      title: "Social Media Platform",
      category: "Development",
      description:
        "A social networking platform with real-time messaging, posts, and user interactions.",
      image:
        "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop",
      technologies: ["React", "Firebase", "Socket.io", "Redux"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 5,
      title: "Restaurant Website",
      category: "Web Design",
      description:
        "An elegant restaurant website with online reservation system and menu showcase.",
      image:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop",
      technologies: ["HTML/CSS", "JavaScript", "GSAP"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 6,
      title: 'Fitness Tracking App',
      category: 'UI/UX',
      description: 'A fitness application design with workout tracking, progress charts, and goal setting.',
      image: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=800&h=600&fit=crop',
      technologies: ['Figma', 'Adobe XD', 'Animation'],
      liveUrl: '#',
      githubUrl: '#',
    },*/
  ];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" as const },
    },
  };

  return (
    <section id="portfolio" className="py-24 relative" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-[#00d4ff] text-sm font-semibold tracking-wider uppercase mb-4 block">
            My Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Latest <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#00d4ff] to-[#7b2cbf] mx-auto rounded-full mb-6" />
          <p className="text-[#a0a0b0] max-w-2xl mx-auto">
            Explore my recent projects showcasing my skills in web development,
            design, and creating exceptional digital experiences.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {filters.map((filter) => (
            <motion.button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                activeFilter === filter
                  ? "bg-gradient-to-r from-[#00d4ff] to-[#7b2cbf] text-white"
                  : "bg-[#1a1a25] text-[#a0a0b0] hover:text-white border border-[#ffffff10]"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {filter}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className="group relative rounded-2xl overflow-hidden cursor-pointer"
                onClick={() => setSelectedProject(project)}
                whileHover={{ y: -5 }}
              >
                {/* Image */}
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-[#0a0a0f80] to-transparent opacity-60 group-hover:opacity-90 transition-opacity" />

                {/* Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <span className="text-[#00d4ff] text-xs font-medium uppercase tracking-wider mb-2">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-[#00d4ff] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-[#a0a0b0] text-sm line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    {project.description}
                  </p>

                  {/* View Button */}
                  <motion.div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity"
                    whileHover={{ scale: 1.1 }}
                  >
                    <div className="w-14 h-14 rounded-full bg-gradient-to-r from-[#00d4ff] to-[#7b2cbf] flex items-center justify-center">
                      <Eye size={24} className="text-white" />
                    </div>
                  </motion.div>
                </div>

                {/* Tech Tags */}
                <div className="absolute top-4 left-4 flex flex-wrap gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  {project.technologies.slice(0, 2).map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-xs bg-[#0a0a0f80] backdrop-blur-sm rounded-full text-[#a0a0b0]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://github.com/eslam-adel25"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 border border-[#00d4ff] text-[#00d4ff] rounded-full font-semibold hover:bg-[#00d4ff] hover:text-white transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github size={20} />
            View All on GitHub
          </motion.a>
        </motion.div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0a0a0f90] backdrop-blur-lg"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="glass-strong rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-[#1a1a25] flex items-center justify-center text-[#a0a0b0] hover:text-white transition-colors z-10"
              >
                <X size={20} />
              </button>

              {/* Image */}
              <div className="aspect-video overflow-hidden rounded-t-2xl">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-8">
                <span className="text-[#00d4ff] text-sm font-medium uppercase tracking-wider">
                  {selectedProject.category}
                </span>
                <h3 className="text-2xl font-bold mt-2 mb-4">
                  {selectedProject.title}
                </h3>
                <p className="text-[#a0a0b0] mb-6 leading-relaxed">
                  {selectedProject.description}
                </p>

                {/* Technologies */}
                <div className="mb-8">
                  <h4 className="text-sm font-semibold mb-3 text-[#a0a0b0]">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 text-sm bg-[#1a1a25] rounded-full text-[#00d4ff] border border-[#00d4ff30]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-4">
                  <motion.a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-luxury flex items-center gap-2 flex-1 justify-center"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <ExternalLink size={18} />
                    Live Demo
                  </motion.a>
                  <motion.a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-4 border border-[#ffffff20] rounded-full font-semibold flex items-center gap-2 hover:border-[#00d4ff] hover:text-[#00d4ff] transition-all flex-1 justify-center"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Github size={18} />
                    View Code
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default PortfolioSection;
