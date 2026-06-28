import { motion } from 'motion/react';
import { CONTACT_INFO } from '../constants';
import { MapPin, Mail, Phone, Navigation } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-brand-dark border-t border-brand-line">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-24">
          {/* Info Block */}
          <div>
            <h2 className="text-6xl md:text-8xl font-black text-[color:var(--brand-text)] mb-16 leading-[0.8] tracking-tighter">
              READY TO <br />
              <span className="text-brand-accent">ACTIVATE.</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-12 mb-16 border-t border-brand-line pt-12">
              <div className="grid-item">
                <h3 className="text-[11px] uppercase tracking-[1px] mb-4 opacity-50 underline underline-offset-4 decoration-brand-accent text-[color:var(--brand-text)]">Location</h3>
                <p className="text-lg font-bold leading-tight uppercase font-display text-[color:var(--brand-text)]">
                  {CONTACT_INFO.address.split(',')[0]}<br />
                  {CONTACT_INFO.address.split(',').slice(1).join(',')}
                </p>
              </div>

              <div className="grid-item">
                <h3 className="text-[11px] uppercase tracking-[1px] mb-4 opacity-50 underline underline-offset-4 decoration-brand-accent text-[color:var(--brand-text)]">Inquiries</h3>
                <p className="text-lg font-bold leading-tight uppercase font-display mb-4 text-[color:var(--brand-text)]">
                  <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-brand-accent transition-colors block italic">{CONTACT_INFO.email}</a>
                  <a href={`tel:${CONTACT_INFO.phone}`} className="hover:text-brand-accent transition-colors block italic">{CONTACT_INFO.phone}</a>
                </p>
              </div>
            </div>

            <div className="p-12 bg-black/[0.01] border border-brand-line group hover:border-brand-accent/30 transition-colors">
              <div className="flex items-center gap-3 mb-8">
                <Navigation className="text-brand-accent w-6 h-6" />
                <h4 className="font-black text-xl uppercase tracking-tighter text-[color:var(--brand-text)]">Route Logistics</h4>
              </div>
              <p className="text-[10px] uppercase tracking-widest font-black mb-6 text-brand-accent/50 italic">
                Driving East/West on highway 401:
              </p>
              <ul className="space-y-4">
                {CONTACT_INFO.directions.map((step, i) => (
                  <li key={i} className="flex gap-4 text-xs font-bold uppercase tracking-wider text-[color:var(--brand-text-muted)] leading-tight">
                    <span className="text-brand-accent font-black opacity-40">0{i + 1}</span>
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Form Block */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="bg-brand-accent p-12 md:p-16 rounded-none text-white shadow-2xl relative"
          >
            <h3 className="text-4xl font-black uppercase tracking-tighter mb-12 flex flex-col leading-[0.8] text-white">
              <span>INITIALIZE</span>
              <span>CONTACT</span>
            </h3>
            
            <form className="space-y-8 relative z-10" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[2px] font-black opacity-80 italic text-white">Identity</label>
                  <input
                    type="text"
                    className="w-full bg-white/10 text-white border-b-2 border-white/20 px-0 py-3 text-sm font-bold uppercase tracking-widest focus:outline-none focus:border-white transition-colors placeholder:text-white/40"
                    placeholder="Full Name"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[2px] font-black opacity-80 italic text-white">Digital Trace</label>
                  <input
                    type="email"
                    className="w-full bg-white/10 text-white border-b-2 border-white/20 px-0 py-3 text-sm font-bold uppercase tracking-widest focus:outline-none focus:border-white transition-colors placeholder:text-white/40"
                    placeholder="Email Address"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[2px] font-black opacity-80 italic text-white">Interest Module</label>
                <select className="w-full bg-white/10 text-white border-b-2 border-white/20 px-2 py-3 text-sm font-bold uppercase tracking-widest focus:outline-none focus:border-white transition-colors appearance-none cursor-pointer">
                  <option className="text-black">Coworking Space</option>
                  <option className="text-black">Private Office</option>
                  <option className="text-black">Event Space</option>
                  <option className="text-black">Virtual Office</option>
                  <option className="text-black">Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[2px] font-black opacity-80 italic text-white">Data Payload</label>
                <textarea
                  className="w-full bg-white/10 text-white border-b-2 border-white/20 px-0 py-3 text-sm font-bold uppercase tracking-widest focus:outline-none focus:border-white transition-colors h-32 resize-none placeholder:text-white/40"
                  placeholder="Details..."
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-black text-white py-6 rounded-none font-black uppercase tracking-[3px] text-xs hover:bg-white hover:text-black hover:border-white border border-transparent transition-all"
              >
                Execute Send
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
