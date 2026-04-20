import { Shield, Zap, Target } from 'lucide-react';

const Advantage = () => {
  const advantages = [
    {
      icon: Shield,
      title: 'Quality Guarantee',
      description: 'Every project backed by our comprehensive warranty and quality assurance program.',
    },
    {
      icon: Zap,
      title: 'Fast Execution',
      description: '98% on-time completion rate with streamlined project management systems.',
    },
    {
      icon: Target,
      title: 'Precision Work',
      description: 'Meticulous attention to detail ensures flawless execution on every build.',
    },
  ]

  return (
    <section id="about" className="py-24 bg-offwhite">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16 space-y-6">
          <div className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-md border border-sand/30 px-5 py-3 rounded-[2px]">
            <span className="w-2 h-2 bg-sand"></span>
            <span className="text-xs font-black tracking-[0.2em] text-sand uppercase">Why Choose Us</span>
          </div>

          <h2 className="text-5xl lg:text-6xl font-black tracking-tighter text-charcoal leading-tight max-w-3xl mx-auto">
            The Foundation Elite <span className="text-sand">Advantage</span>
          </h2>

          <p className="text-xl text-slate-600 font-medium leading-relaxed max-w-2xl mx-auto">
            We don't just build structures—we create lasting value. Our commitment to excellence, combined with decades of expertise, ensures your project exceeds expectations.
          </p>
        </div>

        {/* 3-Column Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {advantages.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center p-10 bg-white/20 backdrop-blur-md border border-white/50 rounded-[2px] hover:-translate-y-2 hover:shadow-lg transition-all duration-500">
              <item.icon className="w-12 h-12 text-sand mb-6" strokeWidth={1} />
              <h3 className="text-2xl font-black tracking-tighter text-charcoal mb-4">{item.title}</h3>
              <p className="text-base text-slate-600 leading-relaxed font-medium">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Advantage
