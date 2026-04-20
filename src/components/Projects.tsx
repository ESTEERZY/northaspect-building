import { ArrowRight } from 'lucide-react'

const Projects = () => {
  const projects = [
    {
      image: 'https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Modern Villa Complex',
      category: 'Residential',
      value: '$2.4M',
    },
    {
      image: 'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Luxury Estate',
      category: 'Premium',
      value: '$3.8M',
    },
    {
      image: 'https://images.pexels.com/photos/2581922/pexels-photo-2581922.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Urban Development',
      category: 'Commercial',
      value: '$5.2M',
    },
    {
      image: 'https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Architectural Masterpiece',
      category: 'Custom',
      value: '$4.1M',
    },
  ]

  return (
    <section id="projects" className="py-24 bg-offwhite">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-8">
          <div className="space-y-6 max-w-2xl">
            <div className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-md border border-sand/30 px-5 py-3 rounded-[2px]">
              <span className="w-2 h-2 bg-sand"></span>
              <span className="text-xs font-black tracking-[0.2em] text-sand uppercase">Featured Projects</span>
            </div>
            <h2 className="text-5xl lg:text-6xl font-black tracking-tighter text-charcoal leading-tight">
              Our Finest <span className="text-sand">Work</span>
            </h2>
            <p className="text-xl text-slate-600 font-medium">
              From luxury residences to commercial developments, explore projects that showcase our expertise and commitment to excellence.
            </p>
          </div>

          <a
            href="#contact"
            className="group border-2 border-charcoal text-charcoal px-10 py-5 text-base font-black tracking-tighter uppercase hover:bg-charcoal hover:text-white transition-all duration-500 inline-flex items-center gap-3 rounded-[2px]"
          >
            View All
            <ArrowRight className="group-hover:translate-x-2 transition-transform" size={20} />
          </a>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden aspect-[4/3] cursor-pointer rounded-[2px] bg-white/20 backdrop-blur-md border border-white/50 shadow-sm"
            >
              {/* Project Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />

              {/* Light Gradient Overlay for subtle text contrast instead of dark */}
              <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/40 to-transparent"></div>

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-8">
                <div className="transform transition-all duration-500">
                  <div className="inline-block bg-sand text-white px-4 py-2 text-xs font-black tracking-widest uppercase mb-4 rounded-[2px]">
                    {project.category}
                  </div>
                  <h3 className="text-3xl font-black tracking-tighter text-charcoal mb-3">{project.title}</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-black text-sand">{project.value}</span>
                    <ArrowRight className="text-charcoal group-hover:translate-x-2 transition-transform" size={24} />
                  </div>
                </div>
              </div>

              {/* Hover Border */}
              <div className="absolute inset-0 border-[3px] border-sand opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-[2px]"></div>
            </div>
          ))}
        </div>

        {/* CTA Below Projects */}
        <div className="mt-16 text-center">
          <p className="text-xl text-slate-600 font-medium mb-6">Ready to start your dream project?</p>
          <a
            href="#contact"
            className="group bg-sand text-white px-12 py-6 text-lg font-black tracking-tighter uppercase hover:bg-charcoal transition-all duration-500 inline-flex items-center gap-3 shadow-2xl shadow-sand/20 rounded-[2px]"
          >
            Request a Quote
            <ArrowRight className="group-hover:translate-x-2 transition-transform" size={22} />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Projects
