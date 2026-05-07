const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-charcoal overflow-hidden">
      {/* Hero Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-charcoal/80 z-10"></div>
        <img
          src="https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="Luxury Architecture"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/80 to-transparent z-10"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-20 flex flex-col lg:flex-row items-center gap-12">
        <div className="w-full lg:w-3/5 py-20 lg:py-32">
          {/* Badge */}
          <div className="inline-flex items-center gap-3 bg-gold/10 backdrop-blur-md px-4 py-2 rounded-[2px] mb-8 border border-gold/20 shadow-[0_0_15px_rgba(212,175,55,0.1)] animate-fade-in">
            <span className="w-2 h-2 bg-gold animate-pulse rounded-[2px]"></span>
            <span className="text-xs font-black tracking-[0.2em] text-gold uppercase">Premium Home Builder</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter text-white mb-6 leading-[1.05] animate-slide-up">
            Build Your <span className="text-gold">Vision.</span> <br className="hidden lg:block"/>
            Elevate Your Legacy.
          </h1>
          <h2 className="text-xl lg:text-2xl font-medium tracking-wide text-white/70 mb-10 max-w-2xl animate-slide-up" style={{ animationDelay: '0.1s' }}>
            We specialize in designing and constructing custom, luxury masterpieces. Experience unparalleled craftsmanship, sustainable materials, and a seamless building journey from concept to completion.
          </h2>

          <div className="flex flex-col sm:flex-row gap-4 mt-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <a
              href="#projects"
              className="group bg-gold text-charcoal px-10 py-5 text-sm lg:text-base font-black tracking-widest uppercase hover:bg-white transition-all duration-500 inline-flex items-center justify-center gap-3 rounded-[2px] shadow-[0_0_20px_rgba(212,175,55,0.2)] hover:shadow-[0_0_40px_rgba(212,175,55,0.5)]"
            >
              View Portfolio
            </a>
            <a
              href="#system"
              className="group bg-transparent text-white border border-white/20 px-10 py-5 text-sm lg:text-base font-bold tracking-widest uppercase hover:bg-white/5 hover:border-white/40 transition-all duration-500 inline-flex items-center justify-center gap-3 rounded-[2px]"
            >
              Our Process
            </a>
          </div>
        </div>

        {/* Floating Image / UI element representation */}
        <div className="w-full lg:w-2/5 hidden lg:block relative animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <div className="absolute -inset-1 bg-gradient-to-r from-gold to-white/20 blur opacity-20 rounded-[2px]"></div>
          <img
            src="https://images.pexels.com/photos/32870/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=800"
            alt="Custom Build Details"
            className="relative w-full h-auto rounded-[2px] shadow-2xl border border-white/10"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;