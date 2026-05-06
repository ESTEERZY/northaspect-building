import { Shield, Zap, Target } from 'lucide-react';

const Advantage = () => {
  const advantages = [
    {
      icon: Target,
      title: 'Precision Targeting',
      description: 'AI agents identify and prioritize high-intent leads based on strict qualification criteria.',
    },
    {
      icon: Zap,
      title: 'Sub-Second Response',
      description: 'Engage inbound traffic instantly. Never lose a lead to slow follow-up times again.',
    },
    {
      icon: Shield,
      title: 'Spam Protection',
      description: 'Intelligent filtering prevents unqualified tire-kickers from clogging your calendar.',
    },
  ]

  return (
    <section id="features" className="py-24 bg-charcoal">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16 space-y-6 animate-fade-in">
          <div className="inline-flex items-center gap-3 bg-darkgray/80 backdrop-blur-md border border-white/10 px-5 py-3 rounded-[2px] shadow-lg">
            <span className="w-2 h-2 bg-gold"></span>
            <span className="text-xs font-black tracking-[0.2em] text-white/80 uppercase">System Capabilities</span>
          </div>

          <h2 className="text-5xl lg:text-6xl font-black tracking-tighter text-white leading-tight max-w-3xl mx-auto">
            The Apex <span className="text-gold">Advantage</span>
          </h2>

          <p className="text-xl text-white/60 font-medium leading-relaxed max-w-2xl mx-auto">
            We don't just provide chatbots. We deploy full-scale revenue infrastructure designed to maximize your conversion rates.
          </p>
        </div>

        {/* 3-Column Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {advantages.map((item, index) => (
            <div key={index} className="group flex flex-col items-center text-center p-10 bg-darkgray/50 backdrop-blur-md border border-white/5 rounded-xl hover:-translate-y-2 hover:border-gold/30 hover:shadow-[0_0_30px_rgba(212,175,55,0.1)] transition-all duration-500">
              <item.icon className="w-12 h-12 text-gold mb-6 group-hover:scale-110 transition-transform duration-500" strokeWidth={1.5} />
              <h3 className="text-2xl font-bold tracking-tight text-white mb-4">{item.title}</h3>
              <p className="text-base text-white/60 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Advantage
