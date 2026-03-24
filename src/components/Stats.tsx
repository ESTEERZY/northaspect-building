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
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center space-y-4 group"
            >
              <div className="w-16 h-16 mx-auto bg-black border-2 border-accent-gold flex items-center justify-center group-hover:bg-accent-gold transition-all duration-300">
                <stat.icon className="w-8 h-8 text-accent-gold group-hover:text-black transition-colors" strokeWidth={2} />
              </div>
              <div className="text-5xl lg:text-6xl font-extrabold text-black">{stat.value}</div>
              <div className="text-sm font-bold tracking-widest uppercase text-gray-700">
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
