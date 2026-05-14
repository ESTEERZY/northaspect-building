import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const BlueprintScroll = () => {
  const containerRef = useRef(null);
  
  // Track scroll progress as the section moves through the viewport
  // We use "start center" to "end center" to focus the animation in the middle of the screen
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  // Calculate opacity for the transition
  // We fade the finished photo in as we scroll through the center of the section
  const opacity = useTransform(scrollYProgress, [0.1, 0.6], [0, 1]);

  return (
    <section ref={containerRef} className="relative h-[150vh] bg-charcoal border-y border-white/10">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        
        {/* Layer 1: The Blueprint (Bottom Layer) */}
        <div className="absolute inset-0 z-10 w-full h-full">
          <img 
            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200&auto=format&fit=crop" 
            alt="Technical Architectural Blueprint" 
            className="w-full h-full object-cover"
            style={{ filter: 'grayscale(100%) contrast(1.5) brightness(0.8)' }}
          />
          {/* Subtle overlay to make it look like line-work on charcoal */}
          <div className="absolute inset-0 bg-charcoal/50 mix-blend-multiply"></div>
        </div>

        {/* Layer 2: The High-Res Finished Photo (Fading In) */}
        <motion.div 
          className="absolute inset-0 z-20 w-full h-full"
          style={{ opacity }}
        >
          <img 
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1200&auto=format&fit=crop" 
            alt="Rendered Architecture" 
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Overlay Typography */}
        <div className="absolute inset-0 z-40 flex items-center justify-center pointer-events-none">
          <h2 className="text-4xl md:text-7xl font-black text-white/90 uppercase tracking-[0.2em] mix-blend-difference drop-shadow-2xl text-center leading-[1.2]">
            Concept <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-white">To Reality</span>
          </h2>
        </div>

      </div>
    </section>

  );
};

export default BlueprintScroll;
