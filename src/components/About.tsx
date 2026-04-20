import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-brand-dark overflow-hidden border-t border-brand-line">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-none overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
              <img
                src="https://picsum.photos/seed/netwyn-meeting/800/1000"
                alt="Networking at Netwyn Place"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-brand-accent text-brand-dark p-16 rounded-none hidden lg:block">
              <p className="text-6xl font-black mb-2 tracking-tighter">10K</p>
              <p className="text-[10px] uppercase tracking-[2px] font-black opacity-60">Sq. Ft. Shared Space</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-brand-accent font-black tracking-[4px] uppercase text-[12px] mb-6 block">
              PHILOSOPHY • GROWTH
            </span>
            <h2 className="text-6xl md:text-8xl font-black mb-10 leading-[0.8] tracking-tighter text-[color:var(--brand-text)]">
              A COMMUNITY <br />
              DESIGNED TO <br />
              BREATHE.
            </h2>
            <div className="space-y-8 text-[color:var(--brand-text-muted)] leading-tight uppercase font-medium text-sm max-w-lg">
              <p>
                Netwyn Place is a coworking office space in Scarborough, built for the modern professional. 
                coworking has become a smart solution for startups, entrepreneurs, 
                and professionals looking for room to work, connect, and grow.
              </p>
              <p>
                At Netwyn Place, we welcome small businesses, entrepreneurs, professionals, and everyone 
                in between. Reduction is the ultimate sophistication. We build environments that 
                breathe within their context.
              </p>
            </div>
            <div className="mt-16 grid grid-cols-2 gap-8 border-t border-brand-line pt-12">
              <div className="grid-item">
                <h3 className="text-[11px] uppercase tracking-[1px] mb-4 opacity-50 underline underline-offset-4 decoration-brand-accent">Modern Focus</h3>
                <p className="text-lg font-bold leading-tight uppercase text-[color:var(--brand-text)]">High-End<br />Amenities</p>
              </div>
              <div className="grid-item">
                <h3 className="text-[11px] uppercase tracking-[1px] mb-4 opacity-50 underline underline-offset-4 decoration-brand-accent">Natural</h3>
                <p className="text-lg font-bold leading-tight uppercase text-[color:var(--brand-text)]">Solarium<br />Lighting</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
