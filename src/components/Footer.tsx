import { SOCIAL_LINKS } from '../constants';
import * as LucideIcons from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-20 bg-brand-dark border-t border-brand-line">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 items-center gap-12 text-center md:text-left">
          <div className="text-[18px] font-black tracking-[-1px] uppercase text-[color:var(--brand-text)]">
            NETWYN<span className="text-brand-accent">PLACE</span>
          </div>
          
          <div className="flex justify-center gap-8">
            {SOCIAL_LINKS.map((social) => {
              const IconComponent = (LucideIcons as any)[social.icon];
              return (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 border border-brand-line text-[color:var(--brand-text-muted)] hover:text-brand-accent hover:border-brand-accent transition-all"
                  aria-label={social.name}
                >
                  {IconComponent && <IconComponent size={18} />}
                </a>
              );
            })}
          </div>
          
          <div className="flex flex-col md:items-end gap-2">
            <div className="flex gap-8 mb-4 justify-center md:justify-end">
              <a href="#" className="text-[10px] uppercase tracking-[2px] font-black text-[color:var(--brand-text-muted)] hover:text-brand-accent transition-colors">Privacy</a>
              <a href="#" className="text-[10px] uppercase tracking-[2px] font-black text-[color:var(--brand-text-muted)] hover:text-brand-accent transition-colors">Terms</a>
            </div>
            <p className="text-[10px] font-bold uppercase tracking-widest text-[color:var(--brand-text-muted)] opacity-50">
              © {new Date().getFullYear()} Netwyn Place • Reduction is Sophistication
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
