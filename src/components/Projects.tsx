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
    <section id="projects" className="py-24 bg-zinc-900">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-8">
          <div className="space-y-6 max-w-2xl">
            <div className="inline-flex items-center gap-3 bg-accent-gold/10 border border-accent-gold px-5 py-3">
              <span className="w-2 h-2 bg-accent-gold"></span>
              <span className="text-xs font-bold tracking-[0.2em] accent-gold uppercase">Featured Projects</span>
            </div>
            <h2 className="text-5xl lg:text-6xl font-extrabold text-white leading-tight">
              Our Finest <span className="accent-gold">Work</span>
            </h2>
            <p className="text-xl text-gray-300 font-medium">
              From luxury residences to commercial developments, explore projects that showcase our expertise and commitment to excellence.
            </p>
          </div>

          <a
            href="#contact"
            className="group border-2 border-accent-gold text-accent-gold px-10 py-5 text-base font-bold tracking-wide uppercase hover:bg-accent-gold hover:text-black transition-all duration-300 inline-flex items-center gap-3"
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
              className="group relative overflow-hidden aspect-[4/3] cursor-pointer"
            >
              {/* Project Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Dark Gradient Overlay - Always Visible Behind Text */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-8">
                <div className="transform transition-all duration-500">
                  <div className="inline-block bg-accent-gold text-black px-4 py-2 text-xs font-bold tracking-widest uppercase mb-4">
                    {project.category}
                  </div>
                  <h3 className="text-3xl font-extrabold text-white mb-3">{project.title}</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold accent-gold">{project.value}</span>
                    <ArrowRight className="text-white group-hover:translate-x-2 transition-transform" size={24} />
                  </div>
                </div>
              </div>

              {/* Hover Border */}
              <div className="absolute inset-0 border-4 border-accent-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* CTA Below Projects */}
        <div className="mt-16 text-center">
          <p className="text-xl text-white font-medium mb-6">Ready to start your dream project?</p>
          <a
            href="#contact"
            className="group bg-accent-gold text-black px-12 py-6 text-lg font-bold tracking-wide uppercase hover:bg-white transition-all duration-300 inline-flex items-center gap-3 shadow-2xl shadow-accent-gold/20"
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
