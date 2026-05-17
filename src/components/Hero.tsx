import { useEffect, useState } from 'react';

const Hero = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section 
      id="home" 
      className="relative min-h-screen w-full overflow-hidden flex items-center justify-center bg-charcoal"
    >
      {/* The Ambient Video Wrapper */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-30 grayscale"
        >
          <source 
            src="https://assets.mixkit.co/videos/preview/mixkit-modern-apartment-building-facade-41716-large.mp4" 
            type="video/mp4" 
          />
          Your browser does not support the video tag.
        </video>
        
        {/* The Contrast Shield */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/90 pointer-events-none z-[1]"></div>
      </div>

      {/* Centered content wrapper */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12 py-32 flex flex-col items-center text-center">
        <div className="max-w-4xl flex flex-col items-center">
          
          {/* The Top Tagline */}
          <span 
            className={`text-xs md:text-sm font-semibold tracking-[0.25em] text-gold uppercase mb-4 block transition-all duration-1000 ease-out ${
              isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Apex Architecture
          </span>

          {/* The Main Heading */}
          <h1 
            className={`text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white mb-6 leading-[1.02] transition-all duration-1000 ease-out delay-200 ${
              isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Structural Integrity.<br />
            <span className="text-gold">Residential Form.</span>
          </h1>

          {/* The Central Accent Line */}
          <div 
            className={`h-[2px] bg-gold mx-auto my-6 transition-all duration-1000 ease-out delay-500 ${
              isMounted ? 'w-32' : 'w-0'
            }`}
          />

          {/* The Subtext Paragraph */}
          <p 
            className={`text-xl lg:text-2xl font-medium text-white/85 max-w-2xl mx-auto leading-relaxed transition-all duration-1000 ease-out delay-700 ${
              isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Masterworks of modern living. Unparalleled craftsmanship. A seamless architectural journey.
          </p>

        </div>
      </div>

      {/* Bottom fade to next section (matches design system) */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-charcoal to-transparent z-[2]"></div>
    </section>
  );
};

export default Hero;