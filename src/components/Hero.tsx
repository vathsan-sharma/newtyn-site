import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[95vh] flex items-center pt-28 overflow-hidden bg-slate-950 pb-16">
      {/* Coworking Space Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
        referrerPolicy="no-referrer"
      >
        <source src="https://raw.githubusercontent.com/vathsan-sharma/netwyn-images/main/IMG_8746.mov" type="video/mp4" />
        <source src="https://raw.githubusercontent.com/vathsan-sharma/netwyn-images/main/IMG_8746.mov" type="video/quicktime" />
      </video>

      {/* Subtle Cinematic Dark Overlay to Enhance Text Legibility (30% opacity) */}
      <div className="absolute inset-0 bg-black/30 z-10" />

      {/* Decorative subtle mesh grid to preserve high-performance feel */}
      <div className="absolute inset-0 z-10 opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        <div className="absolute top-[10%] right-[15%] w-[45%] h-[50%] bg-brand-accent/10 blur-[120px] rounded-full" />
      </div>

      <div className="container mx-auto px-6 relative z-20 w-full max-w-6xl">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, cubicBezier: [0.16, 1, 0.3, 1] }}
          >
            {/* Massive Split Typographic Art */}
            <h1 className="text-[72px] sm:text-[100px] md:text-[140px] xl:text-[160px] font-black leading-[0.85] tracking-[-0.04em] uppercase text-white mb-8 drop-shadow-sm">
              EDUCATE<br />
              <span className="text-transparent bg-[image:linear-gradient(135deg,#FF5A00_30%,#FFA066_100%)] bg-clip-text animate-pulse">EMPOWER</span><br />
              EXCEL.
            </h1>

            <p className="text-lg md:text-xl text-slate-200 max-w-lg leading-relaxed uppercase font-medium mb-12 drop-shadow-sm">
              A premium 10,000 sq. ft. studio built with high-performance materials to inspire modern entrepreneurs, small businesses, and elite creators.
            </p>

            {/* High Intensity Buttons */}
            <div className="flex flex-wrap gap-5">
              <motion.a
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: '0 10px 30px rgba(255,90,0,0.3)'
                }}
                whileTap={{ scale: 0.95 }}
                href="#services"
                className="bg-brand-accent text-white px-12 py-6 rounded-none text-xs font-black uppercase tracking-[3px] hover:bg-white hover:text-black hover:border-white transition-all duration-300 flex items-center gap-3 border border-brand-accent"
              >
                <Sparkles size={14} className="animate-spin" />
                Explore Studio Spaces
              </motion.a>
              
              <motion.a
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="border border-white/40 text-white px-10 py-6 rounded-none text-xs font-black uppercase tracking-[3px] hover:border-brand-accent hover:text-brand-accent transition-all duration-300"
              >
                Secure An Office
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
