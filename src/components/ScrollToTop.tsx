import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUp } from 'lucide-react';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button after scrolling past the fold (450px threshold)
      if (window.scrollY > 450) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          id="scroll-to-top"
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-40 bg-brand-accent hover:bg-white text-brand-dark hover:text-brand-dark p-4 rounded-none shadow-2xl transition-all duration-300 border border-brand-accent/20 cursor-pointer active:scale-90 flex items-center justify-center"
          aria-label="Scroll to top"
          whileHover={{ 
            y: -4,
            boxShadow: '0px 8px 30px rgba(255, 90, 0, 0.4)'
          }}
        >
          <ArrowUp size={18} className="stroke-[3px]" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
