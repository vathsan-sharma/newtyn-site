import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, Square, Sparkles, Volume2, MapPin, Compass, Eye, ShieldCheck, Sun } from 'lucide-react';

export default function Hero() {
  const [localTime, setLocalTime] = useState('');
  const [activeVibe, setActiveVibe] = useState('Deep Focus');
  const [occupancy, setOccupancy] = useState(82);
  const [isHumming, setIsHumming] = useState(false);
  const audioContextRef = useRef<AudioContext | null>(null);
  const oscillatorsRef = useRef<{ osc1: OscillatorNode; osc2: OscillatorNode; gain: GainNode } | null>(null);

  // Scarborough live clock
  useEffect(() => {
    const updateClock = () => {
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'America/Toronto',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      };
      setLocalTime(new Intl.DateTimeFormat('en-US', options).format(new Date()));
    };

    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  // Soft random updates to occupancy and metrics to mock a "living, breathing space"
  useEffect(() => {
    const interval = setInterval(() => {
      setOccupancy((prev) => {
        const delta = Math.floor(Math.random() * 5) - 2; // -2 to +2
        return Math.max(68, Math.min(96, prev + delta));
      });
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  // Audio synthesizer logic for the "Breathe Atmosphere Hum" (using pure, memory-safe native Web Audio API)
  const toggleAtmosphereHum = () => {
    if (isHumming) {
      // Stop code
      if (oscillatorsRef.current) {
        try {
          oscillatorsRef.current.osc1.stop();
          oscillatorsRef.current.osc2.stop();
          oscillatorsRef.current.gain.disconnect();
        } catch (e) {
          console.log('Oscillators already stopped');
        }
        oscillatorsRef.current = null;
      }
      setIsHumming(false);
    } else {
      // Start code
      try {
        const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
        if (!AudioCtx) return;

        const ctx = new AudioCtx();
        audioContextRef.current = ctx;

        // Ensure audio graph is safe and low volume
        const masterGain = ctx.createGain();
        masterGain.gain.setValueAtTime(0, ctx.currentTime);
        // Fade in to prevent click popping
        masterGain.gain.linearRampToValueAtTime(0.045, ctx.currentTime + 1.5);

        // Subtly blended binaural frequencies for deep concentration/calm breathing
        const osc1 = ctx.createOscillator();
        const osc2 = ctx.createOscillator();

        // 110Hz low frequency deep drone + 114Hz for 4Hz binaural wave (breathe rhythm)
        osc1.type = 'sine';
        osc1.frequency.setValueAtTime(110, ctx.currentTime);

        osc2.type = 'triangle'; // triangle gives a softer harmonics vibe
        osc2.frequency.setValueAtTime(114, ctx.currentTime);

        // Low-pass filter to keep it exceptionally warm, rich and low-volume
        const lowpass = ctx.createBiquadFilter();
        lowpass.type = 'lowpass';
        lowpass.frequency.setValueAtTime(150, ctx.currentTime);

        // Connect graph
        osc1.connect(lowpass);
        osc2.connect(lowpass);
        lowpass.connect(masterGain);
        masterGain.connect(ctx.destination);

        osc1.start();
        osc2.start();

        oscillatorsRef.current = { osc1, osc2, gain: masterGain };
        setIsHumming(true);
      } catch (err) {
        console.warn('Audio contexts not allowed or failed to provision:', err);
      }
    }
  };

  // Turn off hummingbird synth if user navigates away or unmounts back to safe states
  useEffect(() => {
    return () => {
      if (oscillatorsRef.current) {
        try {
          oscillatorsRef.current.gain.disconnect();
          oscillatorsRef.current.osc1.stop();
          oscillatorsRef.current.osc2.stop();
        } catch (e) {}
      }
    };
  }, []);

  const vibes = [
    { name: 'Deep Focus', text: 'STRICT BIO-FOCUS', bars: [24, 40, 64, 48, 28, 16] },
    { name: 'Espresso Lounge', text: 'ACTIVE SYNERGY', bars: [48, 72, 56, 80, 44, 32] },
    { name: 'Zen Breath', text: 'MEDITATIVE HUM', bars: [12, 18, 24, 20, 16, 10] },
  ];

  const currentVibeData = vibes.find(v => v.name === activeVibe) || vibes[0];

  return (
    <section id="home" className="relative min-h-[110vh] flex items-center pt-28 overflow-hidden bg-brand-dark pb-16">
      {/* Decorative High-Performance Mesh Grid */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1A1A1A_1px,transparent_1px),linear-gradient(to_bottom,#1A1A1A_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        <div className="absolute top-[10%] right-[15%] w-[45%] h-[50%] bg-brand-accent/20 blur-[150px] rounded-full mix-blend-screen" />
        <div className="absolute bottom-[20%] left-[5%] w-[35%] h-[40%] bg-white/5 blur-[120px] rounded-full mix-blend-difference" />
      </div>

      <div className="container mx-auto px-6 relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Revolutionary Typographical Space */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, cubicBezier: [0.16, 1, 0.3, 1] }}
            >
              {/* Coordinates & Status Badges */}
              <div className="flex flex-wrap items-center gap-4 mb-8">
                <span className="flex items-center gap-2 bg-brand-line/60 border border-brand-line/80 px-4 py-2 text-[10px] font-bold tracking-[2px] uppercase text-[color:var(--brand-text)] backdrop-blur-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-accent animate-ping" />
                  SCARBOROUGH, TORONTO
                </span>
                <span className="text-[10px] font-mono text-[color:var(--brand-text-muted)] tracking-widest uppercase">
                  43.7764° N , 79.2573° W
                </span>
              </div>

              {/* Massive Split Typographic Art */}
              <h1 className="text-[72px] sm:text-[100px] md:text-[140px] xl:text-[160px] font-black leading-[0.85] tracking-[-0.04em] uppercase text-[color:var(--brand-text)] mb-8">
                WORK<br />
                <span className="text-transparent bg-[image:linear-gradient(135deg,#FF5A00_30%,#FFA066_100%)] bg-clip-text animate-pulse">GROW</span><br />
                THRIVE.
              </h1>

              <p className="text-lg md:text-xl text-[color:var(--brand-text-muted)] max-w-lg leading-relaxed uppercase font-medium mb-12">
                A premium 10,000 sq. ft. studio built with high-performance materials to inspire modern entrepreneurs, small businesses, and elite creators.
              </p>

              {/* High Intensity Buttons */}
              <div className="flex flex-wrap gap-5">
                <motion.a
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: '0 10px 30px rgba(255,90,0,0.35)'
                  }}
                  whileTap={{ scale: 0.95 }}
                  href="#services"
                  className="bg-brand-accent text-brand-dark px-12 py-6 rounded-none text-xs font-black uppercase tracking-[3px] hover:bg-white hover:text-brand-dark transition-all duration-300 flex items-center gap-3 border border-brand-accent"
                >
                  <Sparkles size={14} className="animate-spin" />
                  Explore Studio Spaces
                </motion.a>
                
                <motion.a
                  whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.05)' }}
                  whileTap={{ scale: 0.95 }}
                  href="#contact"
                  className="border border-brand-line text-[color:var(--brand-text)] px-10 py-6 rounded-none text-xs font-black uppercase tracking-[3px] hover:border-brand-accent hover:text-brand-accent transition-all duration-300"
                >
                  Secure An Office
                </motion.a>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Live Atmosphere & Environment Deck */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="bg-brand-line/30 border border-brand-line backdrop-blur-md p-8 md:p-10 rounded-none relative overflow-hidden"
            >
              {/* Subtle tech grid elements */}
              <div className="absolute top-0 right-0 w-16 h-16 border-r border-t border-brand-accent/30 pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-16 h-16 border-l border-b border-brand-accent/30 pointer-events-none" />

              <div className="flex justify-between items-start border-b border-brand-line pb-6 mb-8">
                <div>
                  <span className="text-[9px] font-black uppercase tracking-[3px] text-brand-accent block mb-1">
                    LIVE SPACE STATISTICS
                  </span>
                  <h3 className="text-xl font-bold uppercase tracking-tight text-[color:var(--brand-text)] flex items-center gap-1.5">
                    Netwyn Console
                  </h3>
                </div>
                {/* Scarborough Synchronized Live Clock */}
                <div className="text-right">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[color:var(--brand-text-muted)] block">SCARBOROUGH TIME</span>
                  <span id="local-clock" className="text-md font-mono font-black text-brand-accent tracking-tighter tabular-nums">
                    {localTime || '--:--:--'}
                  </span>
                </div>
              </div>

              {/* Environment Vibe Selector */}
              <div className="mb-8">
                <span className="text-[9px] font-black uppercase tracking-[3px] text-[color:var(--brand-text-muted)] block mb-3">
                  1. FOCUS MODE ATMOSPHERE (INTERACTIVE)
                </span>
                <div className="grid grid-cols-3 gap-2">
                  {vibes.map((vib) => (
                    <button
                      key={vib.name}
                      onClick={() => setActiveVibe(vib.name)}
                      className={`py-3 px-1 text-center transition-all duration-300 border text-[9px] font-black uppercase tracking-[1px] cursor-pointer ${
                        activeVibe === vib.name
                          ? 'bg-brand-accent/10 border-brand-accent text-brand-accent'
                          : 'border-brand-line bg-transparent text-[color:var(--brand-text-muted)] hover:text-white hover:border-white/30'
                      }`}
                    >
                      {vib.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Sound wave equalizer animation responsive to Focus Mode selection */}
              <div className="mb-8 bg-brand-dark/40 border border-brand-line p-5 flex flex-col items-center justify-center">
                <div className="flex items-end justify-center gap-1.5 h-16 w-full px-4 border-b border-brand-line/50 pb-4 mb-4">
                  {currentVibeData.bars.map((height, index) => (
                    <motion.div
                      key={index}
                      className="w-1.5 bg-brand-accent"
                      initial={{ height: 10 }}
                      animate={{ 
                        height: [height, height * 0.4, height * 1.2, height]
                      }}
                      transition={{ 
                        repeat: Infinity, 
                        duration: 1 + index * 0.2, 
                        ease: 'easeInOut' 
                      }}
                    />
                  ))}
                </div>
                
                <div className="w-full flex justify-between items-center text-[10px] font-mono text-[color:var(--brand-text-muted)]">
                  <span>SPECTRUM: <b className="text-brand-accent">{currentVibeData.text}</b></span>
                  <span className="animate-pulse">ONLINE</span>
                </div>
              </div>

              {/* Space Capacity, Coffee Status, and Hum Synthesizer */}
              <div className="grid grid-cols-2 gap-6 pt-2 border-t border-brand-line mb-8">
                <div>
                  <span className="text-[9px] font-black uppercase tracking-[2px] text-[color:var(--brand-text-muted)] block mb-1">
                    CURRENT UTILIATION
                  </span>
                  <span className="text-3xl font-black text-[color:var(--brand-text)]">
                    {occupancy}% <span className="text-xs text-brand-accent font-medium leading-[0] tracking-normal">Occupancy</span>
                  </span>
                </div>
                <div>
                  <span className="text-[9px] font-black uppercase tracking-[2px] text-[color:var(--brand-text-muted)] block mb-1">
                    CLIMATE & VIBE
                  </span>
                  <span className="text-lg font-black text-white block uppercase tracking-tight">
                    71°F • COFFEE FRESH
                  </span>
                </div>
              </div>

              {/* HUM SYNTHESIS CONTROLLER */}
              <div className="bg-brand-accent/5 border border-brand-accent/20 p-5 relative overflow-hidden flex flex-col sm:flex-row justify-between items-center gap-6">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-2 h-2 rounded-full bg-brand-accent animate-pulse" />
                    <span className="text-[10px] font-black uppercase tracking-[2px] text-brand-accent">
                      breathe sound hum
                    </span>
                  </div>
                  <p className="text-[10px] text-[color:var(--brand-text-muted)] uppercase tracking-wide leading-snug">
                    Generate an offline warm 110Hz focus hum to block acoustics & help breathing.
                  </p>
                </div>

                <button
                  onClick={toggleAtmosphereHum}
                  className={`flex items-center gap-2 px-6 py-4 text-[10px] font-black uppercase tracking-[2px] transition-all duration-300 rounded-none cursor-pointer w-full sm:w-auto justify-center select-none ${
                    isHumming
                      ? 'bg-red-600 text-white animate-pulse'
                      : 'bg-brand-accent text-brand-dark hover:bg-white hover:text-brand-dark'
                  }`}
                >
                  {isHumming ? (
                    <>
                      <Square size={12} className="fill-current" />
                      Stop Binaural
                    </>
                  ) : (
                    <>
                      <Volume2 size={12} />
                      Synthesize Hum
                    </>
                  )}
                </button>
              </div>

            </motion.div>
          </div>

        </div>
      </div>

      {/* Modern bottom scroll visual line */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 2 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden lg:block"
      >
        <span className="text-[10px] font-mono uppercase tracking-[4px] text-[color:var(--brand-text-muted)] block text-center mb-2">SCROLL TO TOURS</span>
        <div className="w-px h-16 bg-gradient-to-b from-brand-accent to-transparent mx-auto" />
      </motion.div>
    </section>
  );
}
