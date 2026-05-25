import { useEffect, useState, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  
  // Custom cursor position using high-performance springs
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 250, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Check if device supports hover/coarse pointer (mobile/touch detection)
    const isTouchDevice = window.matchMedia('(hover: none)').matches;
    if (isTouchDevice) return;

    setIsVisible(true);

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 12);
      cursorY.set(e.clientY - 12);
    };

    const handleMouseOver = (e: MouseEvent) => {
      // Elevate effect on interaction elements
      const target = e.target as HTMLElement;
      if (
        target.closest('a') ||
        target.closest('button') ||
        target.closest('[role="button"]') ||
        target.closest('input') ||
        target.closest('video') ||
        target.closest('summary')
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    const handleMouseLeaveWindow = () => setIsVisible(false);
    const handleMouseEnterWindow = () => setIsVisible(true);

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseleave', handleMouseLeaveWindow);
    document.addEventListener('mouseenter', handleMouseEnterWindow);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseleave', handleMouseLeaveWindow);
      document.removeEventListener('mouseenter', handleMouseEnterWindow);
    };
  }, [cursorX, cursorY]);

  if (!isVisible) return null;

  return (
    <>
      {/* Centered target point */}
      <motion.div
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
        className="fixed top-0 left-0 w-6 h-6 rounded-full border border-brand-accent pointer-events-none z-[9999] mix-blend-difference hidden md:block"
        animate={{
          scale: isHovered ? 2.2 : 1.0,
          backgroundColor: isHovered ? 'var(--brand-accent)' : 'rgba(255, 90, 0, 0)',
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      />
      {/* Tiny core dot */}
      <motion.div
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
        className="fixed top-[9px] left-[9px] w-[6px] h-[6px] rounded-full bg-brand-accent pointer-events-none z-[9999] mix-blend-difference hidden md:block"
        animate={{
          scale: isHovered ? 0 : 1.0,
        }}
        transition={{ type: 'spring', stiffness: 400, damping: 25 }}
      />
    </>
  );
}
