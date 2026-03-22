import { ArrowRight } from 'lucide-react'

const Projects = () => {
  const projects = [
    {
      image: 'https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Modern Villa Design',
      category: 'Residential',
    },
    {
      image: 'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Contemporary House',
      category: 'Luxury Home',
    },
    {
      image: 'https://images.pexels.com/photos/2581922/pexels-photo-2581922.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Urban Architecture',
      category: 'Modern Design',
    },
    {
      image: 'https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Elegant Residence',
      category: 'Premium Build',
    },
    {
      image: 'https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Sustainable Home',
      category: 'Eco-Friendly',
    },
  ]

  return (
    <section className="py-24 bg-zinc-50 text-zinc-950">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-3 bg-white border border-zinc-200 px-4 py-2 text-xs font-semibold tracking-[0.2em] text-zinc-600 uppercase">
              <span className="w-1.5 h-1.5 bg-zinc-950"></span>
              PORTFOLIO
            </div>
            <h2 className="text-4xl lg:text-5xl font-light tracking-tight">Architectural Works</h2>
          </div>

          <button className="group border border-zinc-950 text-zinc-950 px-8 py-3 text-sm tracking-widest uppercase hover:bg-zinc-950 hover:text-zinc-50 transition-all duration-500 inline-flex items-center gap-3">
            View All Projects
            <ArrowRight className="group-hover:translate-x-2 transition-transform" size={16} />
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-none border border-zinc-200 ${
                index === 0 ? 'md:col-span-2 md:row-span-2' : ''
              } ${index === 1 ? 'md:col-span-1 md:row-span-1' : ''} aspect-square hover:scale-[1.02] transition-transform duration-500`}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="text-xs text-zinc-500 font-semibold tracking-widest uppercase mb-2">
                    {project.category}
                  </div>
                  <h3 className="text-2xl font-light tracking-tight text-zinc-950">{project.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
