import { Award, Wrench, Clock, ArrowRight } from 'lucide-react'

const Standards = () => {
  const standards = [
    {
      icon: Award,
      title: 'Stringent Tolerances',
      description: 'We execute construction with unparalleled precision. Materials and methodology are constantly evaluated to meet exact architectural specifications.',
    },
    {
      icon: Wrench,
      title: 'Parametric Engineering',
      description: 'Adapting to complex spatial requirements. Our advanced modeling and execution guarantee structural integrity and minimalist perfection.',
    },
    {
      icon: Clock,
      title: 'Calculated Delivery',
      description: 'Project timelines are managed through strict milestone tracking. We ensure seamless execution and handoff without friction or delays.',
    },
  ]

  return (
    <section id="services" className="py-24 bg-zinc-950 text-zinc-50">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="space-y-6 mb-16">
          <div className="inline-flex items-center gap-3 border border-zinc-800 bg-black/20 px-4 py-2 text-xs font-semibold tracking-[0.2em] text-zinc-400 uppercase">
            <span className="w-1.5 h-1.5 bg-zinc-50"></span>
            ENGINEERING STANDARDS
          </div>

          <h2 className="text-4xl lg:text-5xl font-light tracking-tight leading-[1.2] max-w-2xl">
            Elevating Structural <span className="font-semibold">Tolerances</span>
          </h2>

          <div className="pt-4">
            <button className="group border border-zinc-50 text-zinc-50 px-8 py-3 text-sm tracking-widest uppercase hover:bg-zinc-50 hover:text-zinc-950 transition-all duration-500 inline-flex items-center gap-3">
              View Specs
              <ArrowRight className="group-hover:translate-x-2 transition-transform" size={16} />
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {standards.map((standard, index) => (
            <div
              key={index}
              className="border border-zinc-800 bg-zinc-900/30 p-8 hover:bg-zinc-800/50 transition-all duration-300 group"
            >
              <div className="w-12 h-12 border border-zinc-700 flex items-center justify-center mb-6 group-hover:border-zinc-500 transition-colors">
                <standard.icon className="w-5 h-5 text-zinc-300" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-medium tracking-wide mb-4">{standard.title}</h3>
              <p className="text-zinc-400 font-light leading-relaxed text-sm">{standard.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Standards
