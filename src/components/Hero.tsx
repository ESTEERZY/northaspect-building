import { ArrowRight } from 'lucide-react'

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-zinc-950 pt-16">
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center py-12">
          <div className="text-zinc-50 space-y-8 animate-fade-in">
            <div className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-md border border-white/10 px-4 py-2 text-xs font-semibold tracking-[0.2em] text-zinc-300">
              <span className="w-1.5 h-1.5 bg-zinc-50 animate-pulse"></span>
              PRECISION CONSTRUCTION
            </div>

            <h1 className="text-5xl lg:text-7xl font-light tracking-tight leading-[1.1]">
              Architectural <br/>
              <span className="font-semibold">Excellence.</span>
            </h1>

            <p className="text-lg text-zinc-300 leading-relaxed max-w-xl font-light">
              Elevating spatial design through uncompromising precision. We construct environments that define the modern era, merging structural integrity with stark, minimalist aesthetics for unparalleled architectural impact.
            </p>

            <div className="pt-2">
              <button className="group border border-zinc-50 text-zinc-50 px-8 py-4 text-sm tracking-widest uppercase hover:bg-zinc-50 hover:text-zinc-950 transition-all duration-500 inline-flex items-center gap-3">
                Explore Projects
                <ArrowRight className="group-hover:translate-x-2 transition-transform" size={16} />
              </button>
            </div>

            <div className="pt-10">
              <div className="inline-flex items-center gap-6 border-l-2 border-zinc-800 pl-6">
                <span className="text-2xl font-light text-zinc-50 tracking-widest">2026</span>
                <div className="text-zinc-300">
                  <div className="text-xs font-semibold tracking-widest uppercase text-zinc-200">Award-Winning</div>
                  <div className="text-xs mt-1">Structural Excellence</div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="aspect-[3/4] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
              <img
                src="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Modern structural construction"
                className="w-full h-full object-cover scale-105 hover:scale-100 transition-transform duration-1000"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
