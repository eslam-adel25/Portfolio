import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  Code2, 
 // Palette, 
  TrendingUp, 
 // Smartphone, 
  Globe, 
  //Sparkles,
  ArrowRight
} from 'lucide-react';

const ServicesSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  const services = [
    {
      icon: Code2,
      title: 'Web Development',
      description: 'Building modern, responsive websites using the latest technologies like React, Next.js, and TypeScript for optimal performance.',
      color: '#00d4ff',
      features: ['React & Next.js', 'TypeScript', 'Performance Optimization', 'Clean Code'],
    },
    /*{
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Creating beautiful, intuitive user interfaces with focus on user experience and modern design principles.',
      color: '#7b2cbf',
      features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems'],
    },*/
    {
      icon: TrendingUp,
      title: 'Digital Marketing',
      description: 'Strategic digital marketing solutions to help your business grow online and reach your target audience effectively.',
      color: '#ffd700',
      features: ['SEO Optimization', 'Social Media', 'Content Strategy', 'Analytics'],
    },
    /*{
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'Developing cross-platform mobile applications that work seamlessly on iOS and Android devices.',
      color: '#00d4ff',
      features: ['React Native', 'PWA', 'Responsive Design', 'App Store Ready'],
    },*/
    {
      icon: Globe,
      title: 'E-Commerce Solutions',
      description: 'Complete e-commerce development with secure payment integration and inventory management systems.',
      color: '#7b2cbf',
      features: ['Shopify/WooCommerce', 'Payment Gateway', 'Inventory', 'Analytics'],
    },
    /*{
      icon: Sparkles,
      title: 'Brand Identity',
      description: 'Crafting unique brand identities that make your business stand out in the competitive market.',
      color: '#ffd700',
      features: ['Logo Design', 'Brand Guidelines', 'Visual Identity', 'Marketing Materials'],
    },*/
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
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
    <section id="services" className="py-24 relative bg-[#12121a]" ref={sectionRef}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #00d4ff 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#00d4ff] text-sm font-semibold tracking-wider uppercase mb-4 block">
            What I Offer
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Services</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#00d4ff] to-[#7b2cbf] mx-auto rounded-full mb-6" />
          <p className="text-[#a0a0b0] max-w-2xl mx-auto">
            I provide comprehensive digital solutions to help businesses establish 
            a strong online presence and achieve their goals.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="card-luxury p-8 group relative overflow-hidden"
              whileHover={{ y: -10 }}
            >
              {/* Hover Gradient */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `linear-gradient(135deg, ${service.color}10, transparent)`,
                }}
              />

              {/* Icon */}
              <div 
                className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 group-hover:rotate-6"
                style={{ 
                  background: `linear-gradient(135deg, ${service.color}20, ${service.color}10)`,
                  border: `1px solid ${service.color}30`,
                }}
              >
                <service.icon size={32} style={{ color: service.color }} />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold mb-3 group-hover:text-[#00d4ff] transition-colors">
                {service.title}
              </h3>
              <p className="text-[#a0a0b0] mb-6 text-sm leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-center gap-2 text-sm text-[#a0a0b0]">
                    <div 
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ backgroundColor: service.color }}
                    />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Read More */}
              <motion.a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 text-sm font-medium transition-colors"
                style={{ color: service.color }}
                whileHover={{ x: 5 }}
              >
                Learn More
                <ArrowRight size={16} />
              </motion.a>

              {/* Corner Decoration */}
              <div 
                className="absolute -bottom-10 -right-10 w-32 h-32 rounded-full opacity-10 group-hover:opacity-20 transition-opacity"
                style={{ background: service.color }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-[#a0a0b0] mb-6">
            Have a project in mind? Let's discuss how I can help you.
          </p>
          <motion.a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="btn-luxury inline-flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start a Project
            <ArrowRight size={18} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
