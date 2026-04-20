import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-brand-dark">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[20%] right-[10%] w-[30%] h-[60%] bg-brand-accent/20 mix-blend-difference blur-[120px] rounded-full" />
      </div>

      <div className="container mx-auto px-6 relative z-20">
        <div className="max-w-6xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <span className="inline-block text-brand-accent font-bold tracking-[4px] uppercase text-[14px] mb-8">
              SCARBOROUGH • 2024
            </span>
            <h1 className="text-[120px] md:text-[220px] font-black leading-[0.75] tracking-[-0.05em] uppercase mb-12 flex flex-col text-[color:var(--brand-text)]">
              <span>WORK</span>
              <span className="text-brand-accent">GROW</span>
              <span>THRIVE</span>
            </h1>
            
            <div className="grid md:grid-cols-2 gap-12 items-end">
              <p className="text-lg text-[color:var(--brand-text-muted)] max-w-sm leading-tight uppercase font-medium">
                Netwyn Place is a 10,000 sq. ft. studio for 
                forward-thinking entrepreneurs and 
                modern professionals.
              </p>
              <div className="flex flex-wrap gap-4">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="#services"
                  className="bg-brand-accent text-[color:var(--brand-bg)] px-10 py-5 rounded-none text-xs font-black uppercase tracking-widest hover:bg-white hover:text-brand-dark transition-all"
                >
                  Explore Plans
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="#contact"
                  className="border border-brand-line text-[color:var(--brand-text)] px-10 py-5 rounded-none text-xs font-black uppercase tracking-widest hover:bg-brand-accent hover:border-brand-accent hover:text-brand-bg transition-all"
                >
                  Book a Tour
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block"
      >
        <div className="w-px h-12 bg-gradient-to-b from-brand-dark/50 to-transparent" />
      </motion.div>
    </section>
  );
}
