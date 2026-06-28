import { motion, useScroll, useSpring } from 'motion/react';

export default function ProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-brand-accent via-[#FFA066] to-brand-accent z-[100] origin-left shadow-[0_0_15px_rgba(255,90,0,0.8)] pointer-events-none"
      style={{ scaleX }}
      role="progressbar"
      aria-label="Page scroll progress"
    />
  );
}
