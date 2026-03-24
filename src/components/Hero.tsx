import { ArrowRight } from 'lucide-react'

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-black pt-20">
      {/* Hero Background with Dark Gradient Overlay */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg?auto=compress&cs=tinysrgb&w=1920)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/95 to-black/70" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-4xl py-20 lg:py-32">
          {/* Badge */}
          <div className="inline-flex items-center gap-3 bg-accent-gold/10 border border-accent-gold px-5 py-3 mb-8">
            <span className="w-2 h-2 bg-accent-gold animate-pulse"></span>
            <span className="text-xs font-bold tracking-[0.2em] accent-gold uppercase">Premium Construction</span>
          </div>

          {/* Headline - Large, Bold, High Contrast */}
          <h1 className="text-6xl lg:text-8xl font-extrabold tracking-tight leading-[0.95] mb-8 text-white">
            Build Your Vision.<br/>
            <span className="accent-gold">Elevate Your Legacy.</span>
          </h1>

          {/* Subheadline - Constrained Width for Readability */}
          <p className="text-xl lg:text-2xl text-white font-medium leading-relaxed max-w-2xl mb-12">
            Premier residential and commercial construction services. We deliver projects on time, on budget, with unmatched quality and precision.
          </p>

          {/* Strong CTA - Solid Button */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="group bg-accent-gold text-black px-10 py-5 text-base font-bold tracking-wide uppercase hover:bg-white transition-all duration-300 inline-flex items-center justify-center gap-3 shadow-2xl shadow-accent-gold/20"
            >
              Request a Quote
              <ArrowRight className="group-hover:translate-x-2 transition-transform" size={20} />
            </a>
            <a
              href="#services"
              className="group border-2 border-white text-white px-10 py-5 text-base font-bold tracking-wide uppercase hover:bg-white hover:text-black transition-all duration-300 inline-flex items-center justify-center gap-3"
            >
              View Services
              <ArrowRight className="group-hover:translate-x-2 transition-transform" size={20} />
            </a>
          </div>

          {/* Trust Elements */}
          <div className="mt-16 pt-8 border-t border-accent-gold/30">
            <div className="grid grid-cols-3 gap-8 max-w-2xl">
              <div>
                <div className="text-4xl font-bold accent-gold mb-2">1.3K+</div>
                <div className="text-sm text-gray-300 font-medium uppercase tracking-wider">Projects Completed</div>
              </div>
              <div>
                <div className="text-4xl font-bold accent-gold mb-2">10+</div>
                <div className="text-sm text-gray-300 font-medium uppercase tracking-wider">Years Excellence</div>
              </div>
              <div>
                <div className="text-4xl font-bold accent-gold mb-2">4.8/5</div>
                <div className="text-sm text-gray-300 font-medium uppercase tracking-wider">Client Rating</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
