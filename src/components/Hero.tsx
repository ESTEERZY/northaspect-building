const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen w-full overflow-hidden flex items-center justify-center bg-charcoal"
    >
      {/* Absolute Kinetic Gradient Mesh Background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden bg-kinetic-mesh animate-ambient-mesh z-0" />

      {/* Sharp Technical Grid Overlay */}
      <div className="absolute inset-0 w-full h-full bg-tech-grid pointer-events-none z-[1]" />

      {/* The Contrast Shield */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/90 pointer-events-none z-[2]"></div>


      {/* Centered content wrapper */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12 py-32 flex flex-col items-center text-center">
        <div className="max-w-4xl flex flex-col items-center">
          
          {/* The Top Tagline */}
          <span className="text-xs md:text-sm font-semibold tracking-[0.25em] text-gold uppercase mb-4 block animate-tagline-breath">
            Apex Architecture
          </span>

          {/* The Main Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white mb-6 leading-[1.02] animate-heading-breath">
            Structural Integrity.<br />
            <span className="text-gold">Residential Form.</span>
          </h1>

          {/* The Central Accent Line */}
          <div className="h-[2px] bg-gold mx-auto my-6 w-20 animate-divider-shimmer" />

          {/* The Subtext Paragraph */}
          <p className="text-xl lg:text-2xl font-medium text-white/85 max-w-2xl mx-auto leading-relaxed animate-subtext-breath">
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