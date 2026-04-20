import { Award, Building2, CircleCheck as CheckCircle, Users } from 'lucide-react'

const Stats = () => {
  const stats = [
    {
      icon: Building2,
      value: '1,300+',
      label: 'Projects Completed',
    },
    {
      icon: Award,
      value: '10+',
      label: 'Years Excellence',
    },
    {
      icon: Users,
      value: '20+',
      label: 'Expert Team',
    },
    {
      icon: CheckCircle,
      value: '98%',
      label: 'On-Time Delivery',
    },
  ]

  return (
    <section className="py-20 bg-offwhite">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center space-y-4 group"
            >
              <div className="w-16 h-16 mx-auto bg-white/20 backdrop-blur-md border border-white/50 flex items-center justify-center rounded-[2px] group-hover:bg-sand group-hover:border-sand transition-all duration-500 shadow-sm">
                <stat.icon className="w-8 h-8 text-sand group-hover:text-white transition-colors duration-500" strokeWidth={2} />
              </div>
              <div className="text-5xl lg:text-6xl font-black tracking-tighter text-charcoal">{stat.value}</div>
              <div className="text-sm font-black tracking-[0.1em] uppercase text-slate-600">
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
