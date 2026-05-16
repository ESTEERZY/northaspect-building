import { useState } from 'react';
import { motion } from 'framer-motion';

const BlueprintToggle = () => {
  const [view, setView] = useState<'blueprint' | 'reality'>('blueprint');

  return (
    <section id="concept" className="py-24 bg-charcoal relative overflow-hidden">
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
        <div className="relative w-full aspect-[16/9] overflow-hidden border border-white/10 rounded-[2px] shadow-2xl group">
          
          {/* Layer 1: The Base (Reality Photo) */}
          <div className="absolute inset-0 w-full h-full">
            <img 
              src="/images/blueprint-base.png" 
              alt="Delivered Structure" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Layer 2: The Blueprint Mask */}
          <motion.div 
            initial={false}
            animate={{ opacity: view === 'blueprint' ? 1 : 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="absolute inset-0 z-10 bg-[#001D3D]/90 mix-blend-multiply pointer-events-none"
            style={{ 
              backgroundImage: `
                linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)
              `,
              backgroundSize: '40px 40px'
            }}
          />

          {/* Layer 3: Technical Annotations (CAD Style) */}
          <motion.div 
            initial={false}
            animate={{ opacity: view === 'blueprint' ? 1 : 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="absolute inset-0 z-20 pointer-events-none font-mono text-[10px] tracking-tighter text-white/60 p-8"
          >
            {/* Top Left Spec */}
            <div className="absolute top-8 left-8 space-y-1">
              <div className="text-gold font-black border-l-2 border-gold pl-2">STR_REINFORCED_CONC_FOOTING</div>
              <div>COORD: 34.0522° N, 118.2437° W</div>
              <div>ELEV: +145.20m ASL</div>
            </div>

            {/* Bottom Right Dimensions */}
            <div className="absolute bottom-8 right-8 text-right space-y-1">
              <div className="text-gold font-black border-r-2 border-gold pr-2">SPEC_X_1450_SQM</div>
              <div>WALL_THICKNESS: 350MM (R-VALUE: 24.5)</div>
              <div>GLASS_TEMP_DBL_GLAZED_LOW_E</div>
            </div>

            {/* Corner Markers */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-gold/40"></div>
            <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-gold/40"></div>
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-gold/40"></div>
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-gold/40"></div>

            {/* Center Measurement Line */}
            <div className="absolute top-1/2 left-1/4 right-1/4 h-[1px] bg-white/20 flex items-center justify-center">
              <div className="bg-charcoal px-2 border border-white/10 text-[8px] tracking-widest uppercase">DIM_A: 24,500MM [REF: STRUCTURAL_01]</div>
            </div>
          </motion.div>

          {/* Subtle Scanner Glow (Optional but adds premium feel) */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gold/5 to-transparent h-1/4 animate-pulse pointer-events-none opacity-20"></div>
        </div>

        {/* Status Text Indicator */}
        <div className="mt-6 flex items-center gap-3">
          <div className="w-1.5 h-1.5 bg-gold rounded-full animate-pulse"></div>
          <span className="text-[10px] font-mono font-bold tracking-[0.2em] text-white/50 uppercase">
            // CURRENT VIEW: {view === 'blueprint' ? 'ARCHITECTURAL SCHEMATIC' : 'DELIVERED STRUCTURE'}
          </span>
        </div>

      </div>
    </section>
  );
};

export default BlueprintToggle;
