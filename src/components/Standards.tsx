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
    <section id="services" className="py-24 bg-offwhite">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-6">
          <div className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-md border border-sand/30 px-5 py-3 rounded-[2px]">
            <span className="w-2 h-2 bg-sand"></span>
            <span className="text-xs font-black tracking-[0.2em] text-sand uppercase">Our Services</span>
          </div>

          <h2 className="text-5xl lg:text-6xl font-black tracking-tighter text-charcoal leading-tight max-w-3xl mx-auto">
            Comprehensive Construction <span className="text-sand">Solutions</span>
          </h2>

          <p className="text-xl text-slate-600 font-medium max-w-2xl mx-auto leading-relaxed">
            From concept to completion, we deliver exceptional results across all construction disciplines.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white/20 backdrop-blur-md border border-white/50 border-l-[4px] border-l-sand p-10 hover:bg-white/40 shadow-sm hover:shadow-md transition-all duration-500 group rounded-[2px]"
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-sand flex items-center justify-center group-hover:bg-charcoal transition-all duration-500 rounded-[2px]">
                    <service.icon className="w-8 h-8 text-white transition-colors duration-500" strokeWidth={2.5} />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-black tracking-tighter text-charcoal mb-4">{service.title}</h3>
                  <p className="text-base text-slate-600 leading-relaxed font-medium">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center bg-white/20 backdrop-blur-md border border-white/50 p-12 shadow-sm rounded-[2px]">
          <h3 className="text-3xl font-black tracking-tighter text-charcoal mb-4">Need a Custom Solution?</h3>
          <p className="text-lg text-slate-600 mb-8 font-medium">Let's discuss your unique project requirements and create a tailored approach.</p>
          <a
            href="#contact"
            className="group bg-sand text-white px-12 py-5 text-base font-black tracking-tighter uppercase hover:bg-charcoal transition-all duration-500 inline-flex items-center gap-3 shadow-lg shadow-sand/20 rounded-[2px]"
          >
            Schedule Consultation
          </a>
        </div>
      </div>
    </section>
  )
}

export default Standards
