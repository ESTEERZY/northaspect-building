const Hero = () => {
  return (
    <section 
      id="hero" 
      className="relative min-h-[85vh] lg:min-h-[90vh] w-full overflow-hidden flex items-center justify-center bg-charcoal"
    >
      <style>{`
        .animate-kinetic-zoom {
          animation: kineticZoom 30s linear infinite alternate;
          will-change: transform;
        }
        @keyframes kineticZoom {
          0% { transform: scale(1) translate(0, 0); }
          100% { transform: scale(1.08) translate(-1%, -0.5%); }
        }
      `}</style>

      {/* Endless background video loop */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0 pointer-events-none bg-charcoal">
        <video
          src="/videos/hero.mp4"
          className="absolute inset-0 w-full h-full object-cover opacity-100 transition-opacity duration-1000"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        />
        {/* Subtle dark overlay for premium legibility */}
        <div className="absolute inset-0 bg-black/50 z-[1]"></div>
      </div>

      {/* Centered content wrapper */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12 py-20 flex flex-col items-center text-center">
        <div className="max-w-3xl flex flex-col items-center w-full">
          
          {/* The Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white mb-6 leading-[1.12]">
            Residential building<br />
            <span className="text-gold">at its finest</span>
          </h1>

          {/* The Central Accent Line */}
          <div className="h-[2px] bg-gold mx-auto my-6 w-20" />

          {/* The Subtext Paragraph */}
          <p className="text-base md:text-lg lg:text-xl font-medium text-white/85 max-w-2xl mx-auto leading-relaxed animate-subtext-breath">
            We design and build bespoke luxury homes that combine timeless architecture, exceptional craftsmanship, and a seamless experience from concept to completion.
          </p>

        </div>
      </div>

      {/* Bottom fade to next section (matches design system) */}
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-charcoal to-transparent z-[2]"></div>
    </section>
  );
};

export default Hero;