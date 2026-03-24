import { Chrome as Home, Building, Wrench, Hammer } from 'lucide-react'

const Standards = () => {
  const services = [
    {
      icon: Home,
      title: 'Residential Construction',
      description: 'Custom homes, renovations, and additions built to your exact specifications with premium materials and craftsmanship.',
    },
    {
      icon: Building,
      title: 'Commercial Projects',
      description: 'Office buildings, retail spaces, and multi-unit developments delivered on time and within budget.',
    },
    {
      icon: Wrench,
      title: 'Renovation & Remodeling',
      description: 'Transform existing spaces with expert renovations that enhance functionality and aesthetic appeal.',
    },
    {
      icon: Hammer,
      title: 'Project Management',
      description: 'End-to-end project coordination ensuring quality, efficiency, and seamless execution from start to finish.',
    },
  ]

  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-6">
          <div className="inline-flex items-center gap-3 bg-accent-gold/10 border border-accent-gold px-5 py-3">
            <span className="w-2 h-2 bg-accent-gold"></span>
            <span className="text-xs font-bold tracking-[0.2em] accent-gold uppercase">Our Services</span>
          </div>

          <h2 className="text-5xl lg:text-6xl font-extrabold text-black leading-tight max-w-3xl mx-auto">
            Comprehensive Construction <span className="accent-gold">Solutions</span>
          </h2>

          <p className="text-xl text-gray-700 font-medium max-w-2xl mx-auto leading-relaxed">
            From concept to completion, we deliver exceptional results across all construction disciplines.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-zinc-50 border-l-4 border-accent-gold p-10 hover:bg-white hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-black flex items-center justify-center group-hover:bg-accent-gold transition-all duration-300">
                    <service.icon className="w-8 h-8 text-accent-gold group-hover:text-black transition-colors" strokeWidth={2.5} />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-extrabold text-black mb-4">{service.title}</h3>
                  <p className="text-base text-gray-700 leading-relaxed font-medium">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center bg-black p-12">
          <h3 className="text-3xl font-extrabold text-white mb-4">Need a Custom Solution?</h3>
          <p className="text-lg text-gray-300 mb-8 font-medium">Let's discuss your unique project requirements and create a tailored approach.</p>
          <a
            href="#contact"
            className="group bg-accent-gold text-black px-12 py-5 text-base font-bold tracking-wide uppercase hover:bg-white transition-all duration-300 inline-flex items-center gap-3 shadow-2xl shadow-accent-gold/20"
          >
            Schedule Consultation
          </a>
        </div>
      </div>
    </section>
  )
}

export default Standards
