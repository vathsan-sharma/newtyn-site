import { motion, useScroll, useSpring } from 'motion/react';
import { NAV_LINKS, CONTACT_INFO } from '../constants';
import { cn } from '../lib/utils';
import { useState, useEffect } from 'react';
import { Phone } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

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

  // Intersection Observer for highlighting active section
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-40% 0px -50% 0px', // Trigger when section occupies the main viewport area
      threshold: 0
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    // Track all sections
    NAV_LINKS.forEach((link) => {
      const sectionId = link.href.replace('#', '');
      const element = document.getElementById(sectionId);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6',
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-200/80 py-3 shadow-md' 
          : 'bg-white/90 backdrop-blur-md border-b border-slate-100 py-4 shadow-sm'
      )}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <a href="#home" className="flex items-center group">
          <div className="bg-white p-1 rounded-none border border-slate-200 shadow-sm">
            <img 
              src="https://raw.githubusercontent.com/vathsan-sharma/netwyn-images/main/Netwyn%20Logo%20-%20Final%20.jpg" 
              alt="Netwyn Place"
              className="h-10 sm:h-12 w-auto object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-300"
              referrerPolicy="no-referrer"
            />
          </div>
        </a>
        
        <div className="flex items-center space-x-3 sm:space-x-4 md:space-x-8">
          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map((link) => {
              const sectionId = link.href.replace('#', '');
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "relative text-[12px] font-bold tracking-[1.5px] uppercase py-2 transition-all duration-200",
                    isActive 
                      ? "text-brand-accent font-extrabold" 
                      : "text-slate-700 hover:text-brand-accent"
                  )}
                >
                  {link.name}
                  {/* Active Section Indicator Underline */}
                  <span className={cn(
                    "absolute bottom-0 left-0 w-full h-[2px] bg-brand-accent transition-transform duration-300 origin-left",
                    isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100 hover:scale-x-100"
                  )} />
                </a>
              );
            })}
          </div>

          {/* Business Contact Phone Link */}
          <a
            href={`tel:${CONTACT_INFO.phone}`}
            className="flex items-center gap-2 text-[10px] sm:text-[11px] font-black tracking-widest text-slate-800 hover:text-brand-accent transition-all px-3 py-2 border border-slate-200 rounded-none bg-slate-50 hover:bg-slate-100 shadow-sm"
            title={`Call Netwyn Place at ${CONTACT_INFO.phone}`}
          >
            <Phone size={13} className="text-brand-accent animate-pulse" />
            <span className="font-mono tracking-tight text-[11px] sm:text-xs font-bold">{CONTACT_INFO.phone}</span>
          </a>

          {/* CTA Button */}
          <a
            href="#contact"
            className="text-[11px] font-black tracking-[1.5px] text-white bg-brand-accent px-4 sm:px-6 py-2.5 rounded-none transition-all hover:bg-black hover:text-white active:scale-95 uppercase shadow-sm border border-brand-accent hover:border-black"
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
