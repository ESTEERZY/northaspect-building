const Hero = () => {
  return (
    <section 
      id="hero" 
      className="relative min-h-screen w-full overflow-hidden flex items-center justify-center bg-charcoal"
    >
      {/* Endless background video loop */}
      <video
        src="https://assets.mixkit.co/videos/preview/mixkit-architectural-shot-of-a-modern-house-41584-large.mp4"
        className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Solid dark gradient overlay div directly on top of the video layer */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#0c0c0c]/80 via-transparent to-[#0c0c0c]"></div>

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