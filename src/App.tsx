import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ParticlesBackground from './components/ParticlesBackground';
import Navigation from './components/Navigation';
import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import ExpertiseSection from "./sections/ExpertiseSection";
import PortfolioSection from './sections/PortfolioSection';
import ContactSection from './sections/ContactSection';
import Footer from './components/Footer';

// Loading Screen Component
const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  useEffect(() => {
    const timer = setTimeout(onComplete, 2500);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] bg-[#0a0a0f] flex items-center justify-center"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-center">
        {/* Logo Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-5xl md:text-6xl font-bold mb-8"
        >
          <span className="gradient-text">Eslam</span>
          <span className="text-white">.</span>
        </motion.div>

        {/* Loading Bar */}
        <div className="w-64 h-1 bg-[#1a1a25] rounded-full overflow-hidden mx-auto">
          <motion.div
            className="h-full bg-gradient-to-r from-[#00d4ff] to-[#7b2cbf]"
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ duration: 2, ease: 'easeInOut' }}
          />
        </div>

        {/* Loading Text */}
        <motion.p
          className="text-[#a0a0b0] mt-4 text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Loading amazing things...
        </motion.p>
      </div>
    </motion.div>
  );
};

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  // Custom cursor effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' || target.tagName === 'BUTTON' || target.closest('a') || target.closest('button')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      {!isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          {/* Custom Cursor (Desktop Only) */}
          <div className="hidden lg:block">
            <motion.div
              className="fixed w-4 h-4 rounded-full bg-[#00d4ff] pointer-events-none z-[9999] mix-blend-difference"
              animate={{
                x: cursorPosition.x - 8,
                y: cursorPosition.y - 8,
                scale: isHovering ? 2 : 1,
              }}
              transition={{ type: "spring", stiffness: 500, damping: 28 }}
            />
            <motion.div
              className="fixed w-8 h-8 rounded-full border border-[#00d4ff50] pointer-events-none z-[9998]"
              animate={{
                x: cursorPosition.x - 16,
                y: cursorPosition.y - 16,
                scale: isHovering ? 1.5 : 1,
              }}
              transition={{ type: "spring", stiffness: 150, damping: 20 }}
            />
          </div>

          {/* Particles Background */}
          <ParticlesBackground />

          {/* Navigation */}
          <Navigation />

          {/* Main Content */}
          <main>
            <HeroSection />
            <AboutSection />
            <ExpertiseSection />
            <PortfolioSection />
            <ContactSection />
          </main>

          {/* Footer */}
          <Footer />
        </motion.div>
      )}
    </>
  );
}

export default App;
