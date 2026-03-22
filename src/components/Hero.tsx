import { ArrowRight } from 'lucide-react'

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-dark-blue pt-16">
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center py-12">
          <div className="text-white space-y-6 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-xs font-semibold tracking-wide">
              <span className="w-2 h-2 bg-app-accent rounded-full animate-pulse"></span>
              HOME BUILDER CONTRACTOR
            </div>

            <h1 className="text-5xl lg:text-6xl font-normal leading-[1.3]">
              Experience Foundation Showcase's Premier Construction Excellence
            </h1>

            <p className="text-base text-gray-300 leading-relaxed max-w-xl">
              Transform your vision into reality with unmatched craftsmanship and precision. We deliver exceptional residential construction that exceeds industry standards, combining innovative design with time-tested building techniques to create homes that stand the test of time.
            </p>

            <div className="pt-2">
              <button className="group bg-app-accent text-dark-blue px-7 py-3.5 rounded-lg font-bold text-base hover:bg-app-accent/90 transition-all duration-300 inline-flex items-center gap-2">
                View Our Work
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
              </button>
            </div>

            <div className="pt-6">
              <div className="inline-flex items-center gap-4 bg-white px-6 py-3 rounded-lg">
                <span className="text-xl font-bold text-app-accent">2024</span>
                <div className="h-8 w-px bg-gray-300"></div>
                <div className="text-dark-blue">
                  <div className="text-xs font-bold">Award-Winning Builder</div>
                  <div className="text-xs text-gray-600">Excellence in Construction</div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Modern home construction"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
