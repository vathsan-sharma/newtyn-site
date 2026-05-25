import { motion, useScroll, useSpring } from 'motion/react';
import { NAV_LINKS } from '../constants';
import { cn } from '../lib/utils';
import { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLight, setIsLight] = useState(false);

  // Scroll tracking for progress calculations
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 110,
    damping: 26,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setIsLight(!isLight);
    document.documentElement.classList.toggle('light');
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-6',
        isScrolled ? 'bg-brand-dark/90 backdrop-blur-md border-b border-brand-line py-4' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <a href="#home" className="flex items-center group">
          <div className="bg-white p-1.5 rounded-none dark:bg-transparent dark:p-0">
            <img 
              src="https://raw.githubusercontent.com/vathsan-sharma/netwyn-images/main/Netwyn%20Logo%20-%20Final%20.jpg" 
              alt="Netwyn Place"
              className="h-12 w-auto object-contain mix-blend-multiply dark:invert dark:mix-blend-screen group-hover:scale-105 transition-transform duration-300"
              referrerPolicy="no-referrer"
            />
          </div>
        </a>
        
        <div className="hidden md:flex items-center space-x-12">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[11px] font-bold tracking-[1px] text-[color:var(--brand-text-muted)] hover:text-brand-accent transition-colors uppercase"
            >
              {link.name}
            </a>
          ))}
          
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-brand-accent/10 transition-colors text-[color:var(--brand-text)]"
            aria-label="Toggle Theme"
          >
            {isLight ? <Moon size={18} /> : <Sun size={18} />}
          </button>

          <a
            href="#contact"
            className="text-[11px] font-bold tracking-[1px] text-[color:var(--brand-bg)] bg-brand-accent px-6 py-2 rounded-none transition-all hover:bg-white hover:text-brand-dark active:scale-95 uppercase"
          >
            Join Today
          </a>
        </div>
      </div>

      {/* Slim Scroll Progress Bar */}
      <motion.div 
        className="absolute bottom-0 left-0 right-0 h-[2px] bg-brand-accent origin-[0%]" 
        style={{ scaleX }}
      />
    </motion.nav>
  );
}
