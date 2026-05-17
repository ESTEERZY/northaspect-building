const Hero = () => {
  return (
    <section 
      id="hero" 
      className="relative min-h-screen w-full overflow-hidden flex items-center justify-center bg-charcoal"
    >
      <style>{`
        @keyframes kinetic-zoom {
          0% {
            transform: scale(1.00) translate(0, 0);
          }
          100% {
            transform: scale(1.08) translate(-0.5%, -0.5%);
          }
        }
        .animate-kinetic-zoom {
          animation: kinetic-zoom 30s linear infinite alternate;
        }
      `}</style>

      {/* Absolute Background Container with cinematic zoom */}
      <div className="absolute inset-0 w-full h-full object-cover z-0 opacity-40 pointer-events-none">
        <img
          src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&dpr=1"
          alt="Luxury Residential Build"
          className="w-full h-full object-cover animate-kinetic-zoom"
        />
      </div>

      {/* Centered content wrapper */}
      <div className="relative z-20 container mx-auto px-6 lg:px-12 py-32 flex flex-col items-center text-center">
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