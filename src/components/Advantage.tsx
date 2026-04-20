import { Shield, Zap, Target, ArrowRight } from 'lucide-react'

const Advantage = () => {
  const advantages = [
    {
      icon: Shield,
      title: 'Quality Guarantee',
      description: 'Every project backed by our comprehensive warranty and quality assurance program.',
    },
    {
      icon: Zap,
      title: 'Fast Execution',
      description: '98% on-time completion rate with streamlined project management systems.',
    },
    {
      icon: Target,
      title: 'Precision Work',
      description: 'Meticulous attention to detail ensures flawless execution on every build.',
    },
  ]

  return (
    <section id="about" className="py-24 bg-offwhite">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-md border border-sand/30 px-5 py-3 rounded-[2px]">
              <span className="w-2 h-2 bg-sand"></span>
              <span className="text-xs font-black tracking-[0.2em] text-sand uppercase">Why Choose Us</span>
            </div>

            <h2 className="text-5xl lg:text-6xl font-black tracking-tight text-charcoal leading-tight">
              The Foundation Elite <span className="text-sand">Advantage</span>
            </h2>

            <p className="text-xl text-slate-600 font-medium leading-relaxed">
              We don't just build structures—we create lasting value. Our commitment to excellence, combined with decades of expertise, ensures your project exceeds expectations.
            </p>

            {/* Advantage Cards */}
            <div className="space-y-6 pt-4">
              {advantages.map((item, index) => (
                <div key={index} className="flex gap-5 bg-white/20 backdrop-blur-md border border-white/50 border-l-4 border-l-sand p-6 rounded-[2px] hover:bg-white/40 transition-all duration-300 shadow-sm">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 bg-sand flex items-center justify-center rounded-[2px]">
                      <item.icon className="w-7 h-7 text-white" strokeWidth={2.5} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-charcoal mb-2">{item.title}</h3>
                    <p className="text-base text-slate-600 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <a
                href="#contact"
                className="group bg-sand text-white px-10 py-5 text-base font-black tracking-tight uppercase hover:bg-charcoal transition-all duration-300 inline-flex items-center gap-3 rounded-[2px]"
              >
                Start Your Project
                <ArrowRight className="group-hover:translate-x-2 transition-transform" size={20} />
              </a>
            </div>
          </div>

          {/* Right: Image with Overlay */}
          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2px] shadow-lg">
              <img
                src="https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Construction excellence"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white/60 via-transparent to-transparent"></div>
            </div>

            {/* Floating Badge */}
            <div className="absolute bottom-8 left-8 bg-sand text-white p-8 shadow-2xl rounded-[2px]">
              <div className="text-5xl font-black tracking-tight">98%</div>
              <div className="text-sm mt-2 uppercase tracking-[0.1em] font-black">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Advantage
