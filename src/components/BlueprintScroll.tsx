import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const BlueprintScroll = () => {
  const containerRef = useRef(null);
  
  // Track the scroll progress through the container (300vh height gives ample scrolling distance)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // As user scrolls down, opacity of the rendered image increases from 0 to 1 between 20% and 80% scroll
  const renderOpacity = useTransform(scrollYProgress, [0.2, 0.8], [0, 1]);
  
  // Fading text out and in
  const blueprintTextOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const buildTextOpacity = useTransform(scrollYProgress, [0.8, 1], [0, 1]);

  return (
    <section ref={containerRef} className="relative h-[300vh] bg-charcoal border-y border-white/10">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center bg-charcoal">
        
        {/* Typography Overlays */}
        <div className="absolute inset-0 z-30 flex flex-col items-center justify-center pointer-events-none">
          <motion.div 
            style={{ opacity: blueprintTextOpacity }}
            className="absolute"
          >
            <h2 className="text-4xl md:text-7xl font-black text-white/90 uppercase tracking-[0.2em] bg-charcoal/40 px-10 py-5 backdrop-blur-md border border-white/20 rounded-[2px] shadow-2xl">
              Blueprint
            </h2>
          </motion.div>
          
          <motion.div 
            style={{ opacity: buildTextOpacity }}
            className="absolute"
          >
            <h2 className="text-4xl md:text-7xl font-black text-gold uppercase tracking-[0.2em] bg-charcoal/60 px-10 py-5 backdrop-blur-md border border-gold/40 rounded-[2px] shadow-[0_0_50px_rgba(197,160,89,0.3)]">
              Constructed
            </h2>
          </motion.div>
        </div>

        {/* The Blueprint Image (Base technical drafting layer) */}
        <div className="absolute inset-0 z-10 bg-charcoal">
          <img 
            src="https://images.pexels.com/photos/157811/pexels-photo-157811.jpeg?auto=compress&cs=tinysrgb&w=1920" 
            alt="Technical Architectural Blueprint" 
            className="w-full h-full object-cover opacity-90"
            style={{ filter: 'contrast(1.2)' }}
          />
          {/* Grid overlay for architectural feel */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>
        </div>

        {/* The Rendered Image (Overlay that fades in) */}
        <motion.div 
          className="absolute inset-0 z-20"
          style={{ opacity: renderOpacity }}
        >
          <img 
            src="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1920" 
            alt="Rendered Architecture" 
            className="w-full h-full object-cover"
          />
          {/* Subtle gradient to ground it */}
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-charcoal/30"></div>
        </motion.div>

        {/* Scroll Progress Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-40 flex flex-col items-center">
          <div className="text-[10px] font-bold tracking-[0.3em] text-white/50 uppercase mb-4">Scroll to Build</div>
          <div className="w-[2px] h-24 bg-white/10 rounded-full overflow-hidden">
            <motion.div 
              className="w-full bg-gold origin-top"
              style={{ scaleY: scrollYProgress }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlueprintScroll;
