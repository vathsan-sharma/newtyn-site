import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, Volume2, VolumeX, Maximize2 } from 'lucide-react';

const CHROMATIC_VIDEOS = [
  {
    id: 'tour',
    tag: 'SPACES • WALKTHROUGH',
    title: 'THE VIRTUAL TOUR',
    description: 'A complete guided walk through of our 10,000 sq. ft. high-performance environment in Scarborough.',
    videoUrl: 'https://raw.githubusercontent.com/vathsan-sharma/netwyn-images/main/IMG_8746.mov',
    posterUrl: 'https://picsum.photos/seed/netwyn-office-showcase/1200/675'
  },
  {
    id: 'lounge',
    tag: 'ATMOSPHERE • COLLABORATIVE',
    title: 'THE WORKPLACE ATMO',
    description: 'Witness the natural light, the curated coffee-fueled lounges, and the collaborative synergy of our community.',
    videoUrl: 'https://raw.githubusercontent.com/vathsan-sharma/netwyn-images/main/IMG_8744.mov',
    posterUrl: 'https://picsum.photos/seed/netwyn-meeting-showcase/1200/675'
  }
];

export default function MediaShowcase() {
  const [activeTab, setActiveTab] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const currentVideo = CHROMATIC_VIDEOS[activeTab];

  return (
    <section className="py-24 bg-brand-dark border-t border-brand-line overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-12">
          <div className="max-w-2xl">
            <h2 className="text-6xl md:text-8xl font-black mb-8 leading-[0.8] tracking-tighter text-[color:var(--brand-text)]">
              ATMOSPHERE <br />
              LOOPS.
            </h2>
          </div>
          <p className="text-[color:var(--brand-text-muted)] md:max-w-xs text-xs uppercase font-medium leading-tight pt-2">
            Experience the natural lighting, high-end infrastructure, and premium materials of Netwyn Place in real time.
          </p>
        </div>

        {/* Tab Selection */}
        <div className="flex border-b border-brand-line mb-12">
          {CHROMATIC_VIDEOS.map((video, idx) => (
            <button
              key={video.id}
              onClick={() => setActiveTab(idx)}
              className={`pb-4 px-6 text-xs font-black uppercase tracking-widest border-b-2 transition-all duration-300 ${
                activeTab === idx 
                  ? 'border-brand-accent text-brand-accent' 
                  : 'border-transparent text-[color:var(--brand-text-muted)] hover:text-[color:var(--brand-text)]'
              }`}
            >
              {video.title}
            </button>
          ))}
        </div>

        {/* Cinematic Video Player Container */}
        <div className="relative border border-brand-line bg-black overflow-hidden group">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentVideo.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="relative aspect-video w-full"
            >
              <video
                poster={currentVideo.posterUrl}
                autoPlay
                loop
                muted={isMuted}
                playsInline
                className="w-full h-full object-cover transition-all duration-700"
              >
                <source src={currentVideo.videoUrl} type="video/mp4" />
                <source src={currentVideo.videoUrl} type="video/quicktime" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent opacity-60 pointer-events-none" />

              {/* Title Overlay */}
              <div className="absolute bottom-8 left-8 right-8 flex flex-col md:flex-row justify-between items-end gap-6 pointer-events-none z-10">
                <div className="max-w-xl">
                  <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tighter text-white leading-tight">{currentVideo.title}</h3>
                  <p className="text-white/60 text-xs uppercase tracking-wide leading-relaxed mt-2">{currentVideo.description}</p>
                </div>
                
                {/* Audio controls */}
                <div className="flex gap-3 pointer-events-auto">
                  <button
                    onClick={() => setIsMuted(!isMuted)}
                    className="p-4 bg-brand-dark/80 text-white hover:bg-brand-accent hover:text-brand-dark transition-all duration-300 pointer-events-auto border border-white/10"
                    aria-label={isMuted ? 'Unmute' : 'Mute'}
                  >
                    {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
