import { motion } from 'motion/react';
import { SPACES, PLANS, HOURLY_SERVICES } from '../constants';
import { Check } from 'lucide-react';
import { cn } from '../lib/utils';

export default function Services() {
  return (
    <section id="services" className="py-24 bg-brand-dark overflow-hidden border-t border-brand-line">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start mb-24 gap-12">
          <div className="max-w-2xl">
            <h2 className="text-6xl md:text-8xl font-black mb-8 leading-[0.8] tracking-tighter text-[color:var(--brand-text)]">
              PRICING <br />
              MODULES.
            </h2>
          </div>
          <p className="text-[color:var(--brand-text-muted)] md:max-w-xs text-xs uppercase font-medium leading-tight">
            Flexible plans for the modern workforce. 
            Select your optimal membership tier.
          </p>
        </div>

        {/* Spaces Showcase */}
        <div className="grid md:grid-cols-3 gap-1 mb-32 border-b border-brand-line">
          {SPACES.map((space, index) => (
            <motion.div
              key={space.name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer border border-brand-line"
            >
              <div className="aspect-[1/1] overflow-hidden rounded-none relative transition-all duration-700 bg-brand-line">
                {space.video ? (
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  >
                    <source src={space.video} type="video/mp4" />
                    <source src={space.video} type="video/quicktime" />
                  </video>
                ) : (
                  <img
                    src={space.image}
                    alt={space.name}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                )}
              </div>
              <div className="p-8">
                <h4 className="text-xl font-black uppercase tracking-tighter text-[color:var(--brand-text)] mb-3">
                  {space.name}
                </h4>
                <p className="text-[color:var(--brand-text-muted)] group-hover:text-[color:var(--brand-text)] transition-colors text-[13px] leading-relaxed uppercase font-black tracking-wider">
                  {space.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Membership Plans */}
        <div className="mb-32">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-0 border-l border-t border-brand-line">
            {PLANS.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={cn(
                  'flex flex-col p-8 border-r border-b border-brand-line transition-all duration-300 h-full rounded-none',
                  plan.highlight 
                    ? 'bg-brand-accent text-white' 
                    : 'bg-transparent text-[color:var(--brand-text)] group hover:bg-black/[0.02]'
                )}
              >
                <div className="mb-12">
                  <h4 className="text-[14px] font-black tracking-[4px] uppercase mb-4">{plan.name}</h4>
                  <div className="flex items-baseline gap-1">
                    <span className="text-5xl font-black tracking-tighter">{plan.price}</span>
                    <span className={cn('text-[10px] font-black uppercase tracking-widest opacity-60')}>
                      CAD / {plan.period}
                    </span>
                  </div>
                </div>
                <ul className="space-y-4 mb-12 flex-grow">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-[11px] font-bold uppercase tracking-wider leading-tight">
                      <div className={cn('w-1 h-1 mt-1.5 shrink-0 rounded-full bg-current opacity-50')} />
                      <span className="opacity-80">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  className={cn(
                    'w-full py-4 rounded-none text-xs font-black uppercase tracking-widest transition-all border',
                    plan.highlight
                      ? 'bg-white text-brand-accent border-white hover:bg-black hover:text-white hover:border-black'
                      : 'bg-transparent text-black border-black/10 hover:bg-black hover:text-white hover:border-black'
                  )}
                >
                  Join Tier
                </button>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Hourly/Other Services Grid */}
        <div className="bg-black/[0.01] p-12 md:p-20 border border-brand-line">
          <h3 className="text-2xl font-black uppercase tracking-tighter mb-16 text-center text-brand-accent underline underline-offset-8 decoration-brand-accent">Additional Modules</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-0 border-l border-t border-brand-line/50">
            {HOURLY_SERVICES.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex items-center justify-between p-8 border-r border-b border-brand-line/50 group hover:bg-black/[0.02] transition-colors"
              >
                <span className="text-[11px] font-black uppercase tracking-widest text-[color:var(--brand-text-muted)] group-hover:text-[color:var(--brand-text)] transition-colors">{service.name}</span>
                <span className="text-sm font-black text-brand-accent">{service.price}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
