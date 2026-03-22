import { Award, Wrench, Clock, ArrowRight } from 'lucide-react'

const Standards = () => {
  const standards = [
    {
      icon: Award,
      title: 'Quality Craftsmanship',
      description: 'We deliver superior construction quality using premium materials and proven building techniques. Every project reflects our commitment to excellence and lasting value.',
    },
    {
      icon: Wrench,
      title: 'Customization Options',
      description: 'Your vision becomes reality with our flexible design approach. We tailor every detail to match your lifestyle, preferences, and unique requirements for your dream home.',
    },
    {
      icon: Clock,
      title: 'Timely Completion',
      description: 'Our expert project management ensures on-schedule delivery without compromising quality. We respect your timeline and maintain transparent communication throughout the build.',
    },
  ]

  return (
    <section id="services" className="py-20 bg-dark-blue text-white">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="space-y-5 mb-12">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-xs font-semibold tracking-wide">
            <span className="w-2 h-2 bg-app-accent rounded-full"></span>
            WHY CHOOSE US
          </div>

          <h2 className="text-4xl lg:text-5xl font-normal leading-[1.3] max-w-3xl">
            Elevating Home Construction Standards
          </h2>

          <button className="group bg-app-accent text-dark-blue px-7 py-3.5 rounded-lg font-bold hover:bg-app-accent/90 transition-all duration-300 inline-flex items-center gap-2 text-base">
            Learn More
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {standards.map((standard, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm p-6 rounded-xl hover:bg-white/10 transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center mb-5 group-hover:bg-white/15 transition-colors">
                <standard.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">{standard.title}</h3>
              <p className="text-gray-300 leading-relaxed text-sm">{standard.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Standards
