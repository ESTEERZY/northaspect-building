import { ArrowRight } from 'lucide-react'

const Projects = () => {
  const projects = [
    {
      image: 'https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Modern Villa Complex',
      location: 'Beverly Hills, CA',
      scale: '1,450 sqm',
      materials: 'Concrete & Glass',
      intent: 'To merge brutalist concrete forms with the surrounding natural topography, creating a seamless indoor-outdoor living experience that honors the dramatic coastal landscape.',
    },
    {
      image: 'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Luxury Estate',
      location: 'Aspen, CO',
      scale: '2,100 sqm',
      materials: 'Timber & Stone',
      intent: 'A contemporary alpine retreat designed to capture panoramic mountain views while utilizing sustainable, locally sourced materials to ensure environmental harmony.',
    },
    {
      image: 'https://images.pexels.com/photos/2581922/pexels-photo-2581922.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Urban Development',
      location: 'New York, NY',
      scale: '3,800 sqm',
      materials: 'Steel & Glass',
      intent: 'Redefining vertical living in the urban core. This project maximizes natural light penetration and offers expansive communal terraces within a highly efficient structural envelope.',
    },
    {
      image: 'https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Architectural Masterpiece',
      location: 'Malibu, CA',
      scale: '950 sqm',
      materials: 'Exposed Concrete',
      intent: 'An exercise in minimalist precision. The structure acts as a quiet, monumental frame for the vast Pacific Ocean, employing clean geometry and elemental materiality.',
    },
  ]

  return (
    <section id="results" className="py-32 bg-darkgray relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/10 to-transparent"></div>
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-8">
          <div className="space-y-6 max-w-3xl animate-fade-in">
            <div className="inline-flex items-center gap-3 bg-charcoal border border-white/10 px-5 py-3 rounded-[2px] shadow-lg">
              <span className="w-2 h-2 bg-gold"></span>
              <span className="text-xs font-black tracking-[0.2em] text-white/80 uppercase font-sans">Case Studies</span>
            </div>
            <h2 className="text-5xl lg:text-7xl font-bold tracking-tight text-white leading-tight animate-slide-up">
              Curated <span className="text-gold italic font-light">Gallery</span>
            </h2>
            <p className="text-xl text-white/60 font-sans font-medium animate-slide-up max-w-2xl" style={{ animationDelay: '0.1s' }}>
              Explore our defining masterworks. Each project is a meticulous exploration of form, light, and context.
            </p>
          </div>

          <a
            href="#contact"
            className="group border border-white/20 text-white px-10 py-5 text-sm font-bold tracking-widest uppercase hover:bg-gold hover:text-charcoal hover:border-gold transition-all duration-500 inline-flex items-center gap-3 rounded-[2px] animate-slide-up font-sans"
            style={{ animationDelay: '0.2s' }}
          >
            Full Portfolio
            <ArrowRight className="group-hover:translate-x-2 transition-transform" size={20} />
          </a>
        </div>

        {/* Projects List */}
        <div className="space-y-32">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`flex flex-col ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-20 items-center animate-slide-up group`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image */}
              <div className="w-full lg:w-3/5 relative aspect-[16/10] overflow-hidden rounded-[2px] shadow-2xl border border-white/10">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-charcoal/10 group-hover:bg-transparent transition-colors duration-500"></div>
              </div>

              {/* Case Study Content */}
              <div className="w-full lg:w-2/5 flex flex-col justify-center">
                <h3 className="text-4xl lg:text-5xl font-bold tracking-tight text-white mb-8 group-hover:text-gold transition-colors duration-500">
                  {project.title}
                </h3>
                
                <div className="mb-10">
                  <h4 className="text-xs font-bold tracking-[0.2em] text-white/40 uppercase font-sans mb-3">Architectural Intent</h4>
                  <p className="text-lg text-white/70 font-sans leading-relaxed">
                    {project.intent}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-x-8 gap-y-8 border-t border-white/10 pt-8 font-sans">
                  <div>
                    <div className="text-[10px] font-bold tracking-[0.2em] text-white/40 uppercase mb-2">Location</div>
                    <div className="text-sm font-medium text-white/90">{project.location}</div>
                  </div>
                  <div>
                    <div className="text-[10px] font-bold tracking-[0.2em] text-white/40 uppercase mb-2">Scale</div>
                    <div className="text-sm font-medium text-white/90">{project.scale}</div>
                  </div>
                  <div className="col-span-2">
                    <div className="text-[10px] font-bold tracking-[0.2em] text-white/40 uppercase mb-3">Materials</div>
                    <div className="inline-flex px-4 py-2 bg-white/5 border border-white/10 text-xs font-bold tracking-[0.15em] text-gold uppercase rounded-[2px]">
                      {project.materials}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Below Projects */}
        <div className="mt-32 text-center animate-slide-up border-t border-white/10 pt-24" style={{ animationDelay: '0.3s' }}>
          <h3 className="text-4xl font-bold text-white mb-6">Ready to realize your vision?</h3>
          <p className="text-xl text-white/60 font-sans font-medium mb-10 max-w-2xl mx-auto">
            Schedule a private consultation with our architectural directors to begin shaping your legacy.
          </p>
          <a
            href="#contact"
            className="group bg-gold text-charcoal px-12 py-6 text-base font-bold tracking-widest uppercase hover:bg-white transition-all duration-500 inline-flex items-center gap-3 shadow-[0_0_20px_rgba(212,175,55,0.2)] hover:shadow-[0_0_40px_rgba(212,175,55,0.4)] rounded-[2px] font-sans"
          >
            Request a Consultation
            <ArrowRight className="group-hover:translate-x-2 transition-transform" size={22} />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Projects
