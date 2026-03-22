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
    <section className="py-20 bg-dark-blue text-white">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-xs font-semibold tracking-wide">
              <span className="w-2 h-2 bg-app-accent rounded-full"></span>
              OUR PROJECTS
            </div>
            <h2 className="text-4xl lg:text-5xl font-normal">Project Portfolio</h2>
          </div>

          <button className="group bg-app-accent text-dark-blue px-7 py-3.5 rounded-lg font-bold hover:bg-app-accent/90 transition-all duration-300 inline-flex items-center gap-2 text-base">
            View All Projects
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-xl ${
                index === 0 ? 'md:col-span-2 md:row-span-2' : ''
              } ${index === 1 ? 'md:col-span-1 md:row-span-1' : ''} aspect-square hover:scale-[1.02] transition-transform duration-300`}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-blue/90 via-dark-blue/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-5 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="text-xs text-app-accent font-semibold mb-1">
                    {project.category}
                  </div>
                  <h3 className="text-xl font-bold">{project.title}</h3>
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
