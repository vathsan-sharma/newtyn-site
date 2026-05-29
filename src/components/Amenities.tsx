import { motion } from 'motion/react';
import { AMENITIES } from '../constants';
import * as LucideIcons from 'lucide-react';

export default function Amenities() {
  return (
    <section className="py-24 bg-brand-dark border-y border-brand-line">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start mb-24 gap-12">
          <div className="max-w-2xl">
            <h2 className="text-6xl md:text-8xl font-black mb-8 leading-[0.8] tracking-tighter text-[color:var(--brand-text)]">
              PRECISION <br />
              AMENITIES.
            </h2>
          </div>
          <p className="text-[color:var(--brand-text-muted)] md:max-w-xs text-xs uppercase font-medium leading-tight">
            Everything your business needs to operate at peak efficiency. 
            Zero distractions. Maximum focus.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-l border-t border-brand-line">
          {AMENITIES.map((amenity, index) => {
            const IconComponent = (LucideIcons as any)[amenity.icon];
            return (
              <motion.div
                key={amenity.name}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex flex-col p-10 border-r border-b border-brand-line group hover:bg-white/5 transition-colors"
              >
                <div className="mb-8">
                  {IconComponent && <IconComponent className="w-8 h-8 text-brand-accent group-hover:scale-110 transition-transform" />}
                </div>
                <h3 className="text-lg md:text-xl font-bold tracking-tight text-[color:var(--brand-text)] group-hover:text-brand-accent transition-colors uppercase">
                  {amenity.name}
                </h3>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
