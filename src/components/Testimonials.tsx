import { motion } from 'motion/react';
import { TESTIMONIALS } from '../constants';
import { Quote } from 'lucide-react';

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-brand-dark overflow-hidden border-t border-brand-line">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start mb-24 gap-12">
          <div className="max-w-2xl">
            <span className="text-brand-accent font-black tracking-[4px] uppercase text-[12px] mb-6 block">
              COMMUNITY • FEEDBACK
            </span>
            <h2 className="text-6xl md:text-8xl font-black mb-8 leading-[0.8] tracking-tighter text-[color:var(--brand-text)]">
              CLIENT <br />
              SYNERGY.
            </h2>
          </div>
          <p className="text-[color:var(--brand-text-muted)] md:max-w-xs text-xs uppercase font-medium leading-tight">
            Voices from the frontlines of innovation. 
            Real people. Real growth.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-0 border-l border-t border-brand-line">
          {TESTIMONIALS.map((t, index) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-12 border-r border-b border-brand-line flex flex-col group hover:bg-white/5 transition-colors"
            >
              <Quote className="text-brand-accent w-10 h-10 mb-8 opacity-20 group-hover:opacity-100 transition-opacity" />
              <p className="text-xl font-bold uppercase tracking-tight mb-12 text-[color:var(--brand-text)] leading-tight italic">
                "{t.quote}"
              </p>
              
              <div className="mt-auto flex items-center gap-4">
                <div className="w-12 h-12 rounded-none overflow-hidden border border-brand-line grayscale group-hover:grayscale-0 transition-all">
                  <img src={t.image} alt={t.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <div>
                  <h4 className="text-sm font-black uppercase tracking-widest text-[color:var(--brand-text)]">{t.name}</h4>
                  <p className="text-[10px] uppercase font-bold text-[color:var(--brand-text-muted)] tracking-widest">{t.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
