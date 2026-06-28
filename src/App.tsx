import React, { ReactNode } from 'react';
import { motion } from 'motion/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Amenities from './components/Amenities';
import MediaShowcase from './components/MediaShowcase';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import ScrollToTop from './components/ScrollToTop';
import ProgressBar from './components/ProgressBar';

function FadeInSection({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen selection:bg-brand-accent selection:text-brand-dark relative overflow-x-hidden">
      <ProgressBar />
      <CustomCursor />
      <ScrollToTop />
      <Navbar />
      <main>
        <Hero />
        <FadeInSection>
          <About />
        </FadeInSection>
        <FadeInSection>
          <Amenities />
        </FadeInSection>
        <FadeInSection>
          <Services />
        </FadeInSection>
        <FadeInSection>
          <MediaShowcase />
        </FadeInSection>
        <FadeInSection>
          <Testimonials />
        </FadeInSection>
        <FadeInSection>
          <Contact />
        </FadeInSection>
      </main>
      <Footer />
    </div>
  );
}
