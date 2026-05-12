import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const BlueprintScroll = () => {
  const containerRef = useRef(null);
  
  // Track scroll progress as the section moves through the viewport
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Parallax Y movement for the "heavy sliding door" effect
  const parallaxY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  // Crossfade Opacities
  // Blueprint drops to 15% rather than 0% to create the authentic 'ghost' overlay
  const blueprintOpacity = useTransform(scrollYProgress, [0.2, 0.5], [1, 0.15]);
  const scaffoldOpacity = useTransform(scrollYProgress, [0.2, 0.4, 0.6, 0.8], [0, 1, 1, 0]);
  const renderOpacity = useTransform(scrollYProgress, [0.6, 0.8], [0, 1]);
  
  // Fading text overlays
  const blueprintTextOpacity = useTransform(scrollYProgress, [0.1, 0.3], [1, 0]);
  const scaffoldTextOpacity = useTransform(scrollYProgress, [0.3, 0.4, 0.6, 0.7], [0, 1, 1, 0]);
  const buildTextOpacity = useTransform(scrollYProgress, [0.7, 0.9], [0, 1]);

  return (
    <section ref={containerRef} className="relative h-[80vh] md:h-[100vh] overflow-hidden bg-charcoal border-y border-white/10">
      
      {/* Typography Overlays - Pinned to Center of Container */}
      <div className="absolute inset-0 z-40 flex flex-col items-center justify-center pointer-events-none">
        <motion.div style={{ opacity: blueprintTextOpacity }} className="absolute">
          <h2 className="text-4xl md:text-7xl font-bold text-white/90 uppercase tracking-[0.2em] bg-charcoal/40 px-10 py-5 backdrop-blur-md border border-white/20 rounded-[2px] shadow-2xl">
            Foundation
          </h2>
        </motion.div>

        <motion.div style={{ opacity: scaffoldTextOpacity }} className="absolute">
          <h2 className="text-4xl md:text-7xl font-bold text-white/90 uppercase tracking-[0.2em] bg-charcoal/40 px-10 py-5 backdrop-blur-md border border-white/20 rounded-[2px] shadow-2xl">
            Structure
          </h2>
        </motion.div>
        
        <motion.div style={{ opacity: buildTextOpacity }} className="absolute">
          <h2 className="text-4xl md:text-7xl font-bold text-gold uppercase tracking-[0.2em] bg-charcoal/60 px-10 py-5 backdrop-blur-md border border-gold/40 rounded-[2px] shadow-[0_0_50px_rgba(197,160,89,0.3)]">
            Realized
          </h2>
        </motion.div>
      </div>

      {/* 
        PARALLAX WRAPPER: 
        Height is 120% of container so it has room to translate up/down without showing background.
      */}
      <motion.div 
        className="absolute inset-0 w-full h-[120%] -top-[10%]"
        style={{ y: parallaxY }}
      >
        {/* LAYER 3: The Rendered Image (Base Layer for Parallax) */}
        <motion.div 
          className="absolute inset-0 z-10"
          style={{ opacity: renderOpacity }}
        >
          <img 
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1200&auto=format&fit=crop" 
            alt="Rendered Architecture" 
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* LAYER 2: The Scaffold / Structural Frame Image */}
        <motion.div 
          className="absolute inset-0 z-20 bg-charcoal"
          style={{ opacity: scaffoldOpacity }}
        >
          <img 
            src="https://images.unsplash.com/photo-1541888086225-ee8259d81d2a?q=80&w=1200&auto=format&fit=crop" 
            alt="Structural Scaffold Frame" 
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* LAYER 1: The Blueprint Image (Top layer, drops to 15% opacity to ghost over the final image) */}
        <motion.div 
          className="absolute inset-0 z-30 bg-white"
          style={{ opacity: blueprintOpacity }}
        >
          <img 
            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200&auto=format&fit=crop" 
            alt="Technical Architectural Blueprint" 
            className="w-full h-full object-cover"
            style={{ filter: 'grayscale(100%) contrast(1.2)' }}
          />
        </motion.div>

        {/* Overlay Gradients */}
        <div className="absolute inset-0 z-50 bg-gradient-to-t from-charcoal via-transparent to-charcoal/30"></div>
      </motion.div>

    </section>
  );
};

export default BlueprintScroll;
