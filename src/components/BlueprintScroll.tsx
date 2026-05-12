import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const BlueprintScroll = () => {
  const containerRef = useRef(null);
  
  // Track the scroll progress through the container (300vh height gives ample scrolling distance)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // 3-Stage Transition Logic:
  // 0.0 -> 0.33: Blueprint crossfades into Scaffold
  // 0.33 -> 0.66: Scaffold holds focus
  // 0.66 -> 1.0: Scaffold crossfades into Final Render

  const blueprintOpacity = useTransform(scrollYProgress, [0, 0.33], [1, 0]);
  const scaffoldOpacity = useTransform(scrollYProgress, [0, 0.33, 0.66, 1], [0, 1, 1, 0]);
  const renderOpacity = useTransform(scrollYProgress, [0.66, 1], [0, 1]);
  
  // Fading text out and in
  const blueprintTextOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  const scaffoldTextOpacity = useTransform(scrollYProgress, [0.33, 0.5, 0.66], [0, 1, 0]);
  const buildTextOpacity = useTransform(scrollYProgress, [0.85, 1], [0, 1]);

  return (
    <section ref={containerRef} className="relative h-[300vh] bg-charcoal border-y border-white/10">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center bg-charcoal">
        
        {/* Typography Overlays */}
        <div className="absolute inset-0 z-40 flex flex-col items-center justify-center pointer-events-none">
          <motion.div 
            style={{ opacity: blueprintTextOpacity }}
            className="absolute"
          >
            <h2 className="text-4xl md:text-7xl font-bold text-white/90 uppercase tracking-[0.2em] bg-charcoal/40 px-10 py-5 backdrop-blur-md border border-white/20 rounded-[2px] shadow-2xl">
              Foundation
            </h2>
          </motion.div>

          <motion.div 
            style={{ opacity: scaffoldTextOpacity }}
            className="absolute"
          >
            <h2 className="text-4xl md:text-7xl font-bold text-white/90 uppercase tracking-[0.2em] bg-charcoal/40 px-10 py-5 backdrop-blur-md border border-white/20 rounded-[2px] shadow-2xl">
              Structure
            </h2>
          </motion.div>
          
          <motion.div 
            style={{ opacity: buildTextOpacity }}
            className="absolute"
          >
            <h2 className="text-4xl md:text-7xl font-bold text-gold uppercase tracking-[0.2em] bg-charcoal/60 px-10 py-5 backdrop-blur-md border border-gold/40 rounded-[2px] shadow-[0_0_50px_rgba(197,160,89,0.3)]">
              Realized
            </h2>
          </motion.div>
        </div>

        {/* LAYER 1: The Blueprint Image (Clean Residential Floor Plan) */}
        <motion.div 
          className="absolute inset-0 z-10 bg-white"
          style={{ opacity: blueprintOpacity }}
        >
          <img 
            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2831&auto=format&fit=crop" 
            alt="Technical Architectural Blueprint" 
            className="w-full h-full object-cover"
            // Light grayscale and contrast to ensure black lines on clean background
            style={{ filter: 'grayscale(100%) contrast(1.2)' }}
          />
        </motion.div>

        {/* LAYER 2: The Scaffold / Structural Frame Image */}
        <motion.div 
          className="absolute inset-0 z-20 bg-charcoal"
          style={{ opacity: scaffoldOpacity }}
        >
          <img 
            src="https://images.unsplash.com/photo-1541888086225-ee8259d81d2a?q=80&w=2874&auto=format&fit=crop" 
            alt="Structural Scaffold Frame" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-charcoal/40 mix-blend-multiply"></div>
        </motion.div>

        {/* LAYER 3: The Rendered Image (Final Polish) */}
        <motion.div 
          className="absolute inset-0 z-30"
          style={{ opacity: renderOpacity }}
        >
          <img 
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2950&auto=format&fit=crop" 
            alt="Rendered Architecture" 
            className="w-full h-full object-cover"
          />
          {/* Subtle gradient to ground it */}
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-charcoal/30"></div>
        </motion.div>

        {/* Scroll Progress Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center">
          <div className="text-[10px] font-bold tracking-[0.3em] text-white/50 uppercase mb-4 font-sans">Scroll to Build</div>
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
