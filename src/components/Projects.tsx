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
    <section id="results" className="py-24 bg-darkgray relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/10 to-transparent"></div>
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-8">
          <div className="space-y-6 max-w-2xl animate-fade-in">
            <div className="inline-flex items-center gap-3 bg-charcoal border border-white/10 px-5 py-3 rounded-[2px] shadow-lg">
              <span className="w-2 h-2 bg-gold"></span>
              <span className="text-xs font-black tracking-[0.2em] text-white/80 uppercase">Featured Projects</span>
            </div>
            <h2 className="text-5xl lg:text-6xl font-black tracking-tighter text-white leading-tight animate-slide-up">
              Our Finest <span className="text-gold">Work</span>
            </h2>
            <p className="text-xl text-white/60 font-medium animate-slide-up" style={{ animationDelay: '0.1s' }}>
              From luxury residences to commercial developments, explore masterworks that showcase our expertise and commitment to excellence.
            </p>
          </div>

          <a
            href="#contact"
            className="group border border-white/20 text-white px-10 py-5 text-sm font-bold tracking-widest uppercase hover:bg-gold hover:text-charcoal hover:border-gold transition-all duration-500 inline-flex items-center gap-3 rounded-[2px] animate-slide-up"
            style={{ animationDelay: '0.2s' }}
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
              className="group relative overflow-hidden aspect-[4/3] cursor-pointer rounded-xl bg-charcoal border border-white/10 shadow-lg hover:border-gold/30 transition-colors duration-500 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                loading="lazy"
              />

              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/50 to-transparent"></div>

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-8">
                <div className="transform transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                  <div className="inline-block bg-gold/10 text-gold border border-gold/20 px-4 py-2 text-xs font-bold tracking-widest uppercase mb-4 rounded-[2px] backdrop-blur-md">
                    {project.category}
                  </div>
                  <h3 className="text-3xl font-bold tracking-tight text-white mb-3 group-hover:text-gold transition-colors duration-300">{project.title}</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-black text-gold">{project.value}</span>
                    <ArrowRight className="text-white opacity-0 group-hover:opacity-100 group-hover:translate-x-2 group-hover:text-gold transition-all duration-300" size={24} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Below Projects */}
        <div className="mt-20 text-center animate-slide-up" style={{ animationDelay: '0.3s' }}>
          <p className="text-xl text-white/60 font-medium mb-8">Ready to start your dream project?</p>
          <a
            href="#contact"
            className="group bg-gold text-charcoal px-12 py-6 text-base font-bold tracking-widest uppercase hover:bg-white transition-all duration-500 inline-flex items-center gap-3 shadow-[0_0_20px_rgba(212,175,55,0.2)] hover:shadow-[0_0_40px_rgba(212,175,55,0.4)] rounded-[2px]"
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
