import { Zap, Calendar, CircleCheck as CheckCircle, TrendingUp } from 'lucide-react'

const Stats = () => {
  const stats = [
    {
      icon: TrendingUp,
      value: '$50M+',
      label: 'Pipeline Generated',
    },
    {
      icon: Calendar,
      value: '25k+',
      label: 'Meetings Booked',
    },
    {
      icon: Zap,
      value: '24/7',
      label: 'System Uptime',
    },
    {
      icon: CheckCircle,
      value: '100%',
      label: 'Lead Capture Rate',
    },
  ]

  return (
    <section className="py-20 bg-charcoal border-y border-white/5 relative z-20">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center space-y-4 group"
            >
              <div className="w-16 h-16 mx-auto bg-darkgray border border-white/10 flex items-center justify-center rounded-[2px] group-hover:bg-gold/10 group-hover:border-gold/30 transition-all duration-500 shadow-sm">
                <stat.icon className="w-8 h-8 text-gold group-hover:scale-110 transition-transform duration-500" strokeWidth={1.5} />
              </div>
              <div className="text-5xl lg:text-6xl font-black tracking-tighter text-white">{stat.value}</div>
              <div className="text-sm font-bold tracking-widest uppercase text-white/50 group-hover:text-gold transition-colors duration-300">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats
