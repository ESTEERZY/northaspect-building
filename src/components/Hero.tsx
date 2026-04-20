const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Hero Background - Luxury Pavilion */}
      <div className="absolute inset-0">
        <img
          src="/assets/coastal_luxury_villa.png"
          alt="Foundation Elite Luxury Villa"
          className="absolute inset-0 w-full h-full object-cover brightness-110"
          loading="eager"
        />
        {/* Subtle light veil for text contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-4xl py-20 lg:py-32">
          {/* Badge */}
          <div className="inline-flex items-center gap-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full mb-8 border border-slate-200">
            <span className="w-2 h-2 bg-orange-600 animate-pulse rounded-full"></span>
            <span className="text-xs font-bold tracking-[0.2em] text-slate-900 uppercase">Premium Architecture</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-slate-900 mb-6 leading-tight">
            Build Your <span className="text-slate-800">Vision.</span>
          </h1>
          <h2 className="text-4xl md:text-6xl font-bold text-orange-600 mb-8">
            Elevate Your Legacy.
          </h2>
        </div>
      </div>
    </section>
  )
}

export default Hero