const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen w-full overflow-hidden flex items-center justify-center bg-charcoal"
    >
      {/* Absolute Background Container with deep charcoal base */}
      <div className="absolute inset-0 w-full h-full bg-charcoal z-0 overflow-hidden">
        {/* Luxury Modern House Image with Ken Burns animation */}
        <img
          src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&dpr=1"
          alt="Luxury Residential Build"
          className="w-full h-full object-cover opacity-35 animate-ken-burns"
        />

        {/* Premium Amber/Gold Color Cast Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(197,168,128,0.10)] via-[rgba(0,0,0,0.45)] to-black/95 pointer-events-none"></div>
      </div>

      {/* Sharp Technical Grid Overlay */}
      <div className="absolute inset-0 w-full h-full bg-tech-grid pointer-events-none z-[1]" />



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