import { ArrowRight } from 'lucide-react'

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-white pt-20">
      {/* Hero Background - Luxury Pavilion - High-Key, Sun-Drenched */}
      <div className="absolute inset-0">
        <img
          <img 
  src="/assets/coastal_luxury_villa.png"
          alt="Foundation Elite Luxury Villa"
          className="absolute inset-0 w-full h-full object-cover brightness-110"
          loading="eager"
        />
        />
        {/* Subtle light veil for text contrast - minimal and airy */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/15 via-white/5 to-transparent" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-4xl py-20 lg:py-32">
          {/* Badge - High Contrast on Light */}
          <div className="inline-flex items-center gap-3 bg-white/90 backdrop-blur-sm border border-orange-600 px-5 py-3 mb-8 shadow-lg">
            <span className="w-2 h-2 bg-orange-600 animate-pulse"></span>
            <span className="text-xs font-bold tracking-[0.2em] text-orange-600 uppercase">Premium Architecture</span>
          </div>

          {/* Headline - Ultra-Bold, Heavy Weight, Subtle Shadow for Readability */}
          <h1 className="text-6xl lg:text-8xl font-black tracking-tight leading-[0.95] mb-8 text-white drop-shadow-2xl" style={{ textShadow: '3px 3px 8px rgba(0,0,0,0.3)' }}>
            Build Your Vision.<br />
            <span className="text-orange-600">Elevate Your Legacy.</span>
          </h1>

          {/* Subheadline - Light and Airy, Readable */}
          <p className="text-xl lg:text-2xl text-slate-900 font-semibold leading-relaxed max-w-2xl mb-12 drop-shadow-lg" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.25)' }}>
            Premium residential and commercial architecture. We craft spaces that inspire—delivered on time, on budget, with architectural excellence.
          </p>

          {/* Strong CTA - Industrial Orange & Deep Charcoal */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="group bg-orange-600 text-white px-10 py-5 text-base font-black tracking-wide uppercase hover:bg-orange-700 transition-all duration-300 inline-flex items-center justify-center gap-3 shadow-2xl"
            >
              Request a Quote
              <ArrowRight className="group-hover:translate-x-2 transition-transform" size={20} />
            </a>
            <a
              href="#services"
              className="group bg-zinc-800 text-white px-10 py-5 text-base font-black tracking-wide uppercase hover:bg-black transition-all duration-300 inline-flex items-center justify-center gap-3 shadow-xl"
            >
              View Services
              <ArrowRight className="group-hover:translate-x-2 transition-transform" size={20} />
            </a>
          </div>

          {/* Trust Elements - High-Key, Airy */}
          <div className="mt-16 pt-8 border-t-2 border-orange-600/50">
            <div className="grid grid-cols-3 gap-8 max-w-2xl">
              <div className="bg-white/80 backdrop-blur-sm p-6 shadow-lg">
                <div className="text-5xl font-black text-orange-600 mb-2">1.3K+</div>
                <div className="text-sm text-zinc-700 font-bold uppercase tracking-wider">Projects Completed</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm p-6 shadow-lg">
                <div className="text-5xl font-black text-orange-600 mb-2">10+</div>
                <div className="text-sm text-zinc-700 font-bold uppercase tracking-wider">Years Excellence</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm p-6 shadow-lg">
                <div className="text-5xl font-black text-orange-600 mb-2">4.8/5</div>
                <div className="text-sm text-zinc-700 font-bold uppercase tracking-wider">Client Rating</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
