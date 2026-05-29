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
            <div className="aspect-[4/5] rounded-none overflow-hidden bg-brand-line-accent transition-all duration-700">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              >
                <source src="https://raw.githubusercontent.com/vathsan-sharma/netwyn-images/main/IMG_8744.mov" type="video/mp4" />
                <source src="https://raw.githubusercontent.com/vathsan-sharma/netwyn-images/main/IMG_8744.mov" type="video/quicktime" />
              </video>
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
            <h2 className="text-6xl md:text-8xl font-black mb-10 leading-[0.8] tracking-tighter text-[color:var(--brand-text)] uppercase">
              A COMMUNITY <br />
              DESIGNED TO <br />
              BREATHE.
            </h2>
            <div className="space-y-6 text-[color:var(--brand-text-muted)] leading-relaxed text-sm max-w-lg font-medium">
              <p>
                At Netwyn Place, work feels different.
              </p>
              <p>
                We are a 10,000 sq. ft. coworking space in Scarborough designed for entrepreneurs, small businesses, professionals, and growing teams who want more than just a desk. Here, you get a bright, modern, and professional environment where you can focus, meet clients, build your business, and feel part of a real community.
              </p>
              <p>
                With natural light, flexible workspaces, high-end amenities, and a calm atmosphere away from the distractions of home, Netwyn Place gives you the space, support, and energy to do your best work every day. Whether you are starting something new or growing what you have already built, this is a place where your next step feels possible.
              </p>
              <p className="text-brand-accent font-black tracking-wider uppercase text-base pt-4">
                Your next big move starts here.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
