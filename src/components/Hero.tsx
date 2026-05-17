const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen w-full overflow-hidden flex items-center justify-center bg-charcoal"
    >
      {/* Absolute Background Container with deep charcoal base */}
      <div className="absolute inset-0 w-full h-full bg-charcoal z-0 overflow-hidden">
        {/* Luxury Modern House Image with Ken Burns animation (No grayscale, bumped to 50% opacity) */}
        <img
          src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&dpr=1"
          alt="Luxury Residential Build"
          className="w-full h-full object-cover opacity-50 animate-ken-burns"
        />

        {/* Premium Amber/Gold Color Cast Blend Layer */}
        <div className="absolute inset-0 z-10 mix-blend-color bg-[#c5a880]/25 pointer-events-none"></div>

        {/* Soft Warm Gradient Mix Layer for deep shadow colors */}
        <div className="absolute inset-0 z-15 mix-blend-multiply bg-gradient-to-tr from-[#1c1a17]/85 via-[#c5a880]/15 to-transparent pointer-events-none"></div>

        {/* Foreground Contrast Shield / Dark Bottom Fade for Typography Legibility */}
        <div className="absolute inset-0 z-20 bg-gradient-to-b from-black/50 via-[rgba(0,0,0,0.3)] to-black/95 pointer-events-none"></div>
      </div>

      {/* Centered content wrapper */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12 py-32 flex flex-col items-center text-center">
        <div className="max-w-4xl flex flex-col items-center">
          
          {/* The Main Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white mb-6 leading-[1.02] animate-heading-breath">
            Structural Integrity.<br />
            <span className="text-gold">Residential Form.</span>
          </h1>

          {/* The Central Accent Line */}
          <div className="h-[2px] bg-gold mx-auto my-6 w-32" />

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