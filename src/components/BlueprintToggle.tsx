import { useState } from 'react';
import { motion } from 'framer-motion';

const BlueprintToggle = () => {
  const [view, setView] = useState<'blueprint' | 'reality'>('blueprint');

  return (
    <section id="concept" className="py-24 bg-[#121212] relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Header Row */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-8">
          <div className="space-y-2">
            <h2 className="text-sm font-black tracking-[0.3em] text-gold uppercase">04 // Interactive Schematic</h2>
            <h3 className="text-4xl md:text-5xl font-black tracking-tighter text-white">Concept To <span className="text-gold">Reality.</span></h3>
          </div>

          {/* Control Switch */}
          <div className="bg-darkgray/50 border border-white/10 p-1.5 rounded-[2px] flex gap-2">
            <button 
              onClick={() => setView('blueprint')}
              className={`px-6 py-3 text-xs font-black tracking-widest uppercase transition-all duration-300 rounded-[1px] ${
                view === 'blueprint' 
                ? 'bg-gold text-charcoal shadow-[0_0_20px_rgba(197,160,89,0.3)]' 
                : 'text-white/40 hover:text-white/70'
              }`}
            >
              01 // Blueprint
            </button>
            <button 
              onClick={() => setView('reality')}
              className={`px-6 py-3 text-xs font-black tracking-widest uppercase transition-all duration-300 rounded-[1px] ${
                view === 'reality' 
                ? 'bg-gold text-charcoal shadow-[0_0_20px_rgba(197,160,89,0.3)]' 
                : 'text-white/40 hover:text-white/70'
              }`}
            >
              02 // Reality
            </button>
          </div>
        </div>

        {/* Display Canvas Wrapper */}
        <div className="relative w-full aspect-[16/9] overflow-hidden border border-white/10 rounded-[2px] shadow-2xl bg-charcoal">
          
          {/* Layer 1: The Base (Reality Photo) */}
          <div className="absolute inset-0 w-full h-full">
            <img 
              src="/images/blueprint-base.png" 
              alt="Delivered Structure" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Layer 1.5: The CAD Blueprint Drawing (Option A) */}
          <motion.div 
            initial={false}
            animate={{ opacity: view === 'blueprint' ? 1 : 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="absolute inset-0 z-10 w-full h-full"
          >
            <img 
              src="/images/blueprint-drawing.png" 
              alt="Architectural Schematic" 
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Layer 2: The Blueprint Tint & Grid Overlay */}
          <motion.div 
            initial={false}
            animate={{ opacity: view === 'blueprint' ? 1 : 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="absolute inset-0 z-20 bg-[#001D3D]/80 mix-blend-multiply pointer-events-none"
            style={{ 
              backgroundImage: `
                linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)
              `,
              backgroundSize: '40px 40px'
            }}
          />

          {/* Layer 3: Technical Annotations & Room Labels */}
          <motion.div 
            initial={false}
            animate={{ opacity: view === 'blueprint' ? 1 : 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="absolute inset-0 z-30 pointer-events-none font-mono text-[10px] tracking-tighter text-white/60 p-8"
          >
            {/* Room Labels */}
            <div className="absolute top-[80%] left-[50%] md:top-[65%] md:left-[15%] -translate-x-1/2 -translate-y-1/2 px-2 md:px-4 py-1.5 border border-white/20 bg-charcoal/60 backdrop-blur-sm text-[10px] md:text-sm font-black text-gold tracking-[0.2em] pointer-events-none transition-all duration-500">
              [ <span className="md:hidden">G</span><span className="hidden md:inline">SECURE DOUBLE GARAGE</span> ]
            </div>
            <div className="absolute top-[50%] left-[50%] md:top-[50%] md:left-[45%] -translate-x-1/2 -translate-y-1/2 px-2 md:px-4 py-1.5 border border-white/20 bg-charcoal/60 backdrop-blur-sm text-[10px] md:text-sm font-black text-gold tracking-[0.2em] pointer-events-none transition-all duration-500">
              [ <span className="md:hidden">E</span><span className="hidden md:inline">MAIN ENTRY PORTICO</span> ]
            </div>
            <div className="absolute top-[20%] left-[50%] md:top-[20%] md:right-[15%] md:left-auto -translate-x-1/2 -translate-y-1/2 px-2 md:px-4 py-1.5 border border-white/20 bg-charcoal/60 backdrop-blur-sm text-[10px] md:text-sm font-black text-gold tracking-[0.2em] pointer-events-none transition-all duration-500">
              [ <span className="md:hidden">A</span><span className="hidden md:inline">ALFRESCO ENTERTAINING</span> ]
            </div>

            {/* Technical Specs - Top Left (Hidden on Mobile, Fade on Desktop) */}
            <div className="hidden md:block opacity-0 md:opacity-100 transition-opacity duration-1000 delay-500 absolute top-8 left-8 space-y-1">
              <div className="text-gold font-black border-l-2 border-gold pl-2">STR_REINFORCED_CONC_FOOTING</div>
              <div>COORD: 34.0522° N, 118.2437° W</div>
              <div>ELEV: +145.20m ASL</div>
            </div>

            {/* Dimensions - Bottom Right (Hidden on Mobile, Fade on Desktop) */}
            <div className="hidden md:block opacity-0 md:opacity-100 transition-opacity duration-1000 delay-700 absolute bottom-8 right-8 text-right space-y-1">
              <div className="text-gold font-black border-r-2 border-gold pr-2">SPEC_X_1450_SQM</div>
              <div>WALL_THICKNESS: 350MM (R-VALUE: 24.5)</div>
              <div>GLASS_TEMP_DBL_GLAZED_LOW_E</div>
            </div>

            {/* Crosshairs & Dimension Lines (Hidden on Mobile, Fade on Desktop) */}
            <div className="hidden md:block opacity-0 md:opacity-100 transition-opacity duration-1000 delay-300 absolute top-1/2 left-8 w-16 h-[1px] bg-white/30">
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[1px] h-3 bg-white/50"></div>
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-3 bg-white/50"></div>
            </div>
            
            <div className="hidden md:block opacity-0 md:opacity-100 transition-opacity duration-1000 delay-300 absolute bottom-24 right-1/2 w-[1px] h-24 bg-white/30">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-[1px] bg-white/50"></div>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-[1px] bg-white/50"></div>
            </div>

            {/* Corner Markers (Hidden on Mobile, Fade on Desktop) */}
            <div className="hidden md:block opacity-0 md:opacity-100 transition-opacity duration-1000 delay-100 absolute top-4 left-4 w-6 h-6 border-t border-l border-gold/40"></div>
            <div className="hidden md:block opacity-0 md:opacity-100 transition-opacity duration-1000 delay-100 absolute top-4 right-4 w-6 h-6 border-t border-r border-gold/40"></div>
            <div className="hidden md:block opacity-0 md:opacity-100 transition-opacity duration-1000 delay-100 absolute bottom-4 left-4 w-6 h-6 border-b border-l border-gold/40"></div>
            <div className="hidden md:block opacity-0 md:opacity-100 transition-opacity duration-1000 delay-100 absolute bottom-4 right-4 w-6 h-6 border-b border-r border-gold/40"></div>

            {/* Center Measurement Line (Hidden on Mobile, Fade on Desktop) */}
            <div className="hidden md:block opacity-0 md:opacity-100 transition-opacity duration-1000 delay-500 absolute top-1/2 left-1/4 right-1/4 h-[1px] bg-white/20 flex items-center justify-center">
              <div className="bg-charcoal px-2 border border-white/10 text-[8px] tracking-widest uppercase">DIM_A: 24,500MM [REF: STRUCTURAL_01]</div>
            </div>
          </motion.div>

          {/* Scanner Glow */}
          <motion.div 
            animate={{ top: ["0%", "100%", "0%"] }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            className="absolute left-0 w-full h-[2px] bg-gold/30 z-40 pointer-events-none opacity-50 blur-[2px]"
          />
        </div>

        {/* Status Text Indicator */}
        <div className="mt-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-1.5 bg-gold rounded-full animate-pulse"></div>
            <span className="text-[10px] font-mono font-bold tracking-[0.2em] text-white/50 uppercase">
              // CURRENT VIEW: {view === 'blueprint' ? 'ARCHITECTURAL SCHEMATIC' : 'DELIVERED STRUCTURE'}
            </span>
          </div>
          <span className="text-[8px] font-mono text-white/20 tracking-widest uppercase">Apex Architecture // Structural Protocol v4.0</span>
        </div>

      </div>
    </section>
  );
};

export default BlueprintToggle;
