import { Award, Building2, Chrome as Home, Users } from 'lucide-react'

const Stats = () => {
  const stats = [
    {
      icon: Building2,
      value: '10+',
      label: 'Years Experience',
      color: 'border border-zinc-200 bg-white shadow-sm',
    },
    {
      icon: Award,
      value: '4.8/5',
      label: 'Customer Rating',
      color: 'bg-zinc-950',
      textColor: 'text-zinc-50',
    },
    {
      icon: Users,
      value: '20+',
      label: 'Team Members',
      color: 'border border-zinc-200 bg-zinc-50',
    },
    {
      icon: Home,
      value: '1.3K',
      label: 'Projects Done',
      color: 'border border-zinc-200 bg-white shadow-sm',
    },
  ]

  return (
    <section className="py-24 bg-zinc-50 border-y border-zinc-200">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`${stat.color} ${stat.textColor || 'text-zinc-950'} p-8 rounded-none text-center space-y-4 hover:-translate-y-1 transition-transform duration-500`}
            >
              <stat.icon className={`w-8 h-8 mx-auto ${stat.textColor === 'text-zinc-50' ? 'text-zinc-300' : 'text-zinc-800'}`} strokeWidth={1.5} />
              <div className="text-4xl font-light tracking-tight">{stat.value}</div>
              <div className={`text-xs font-semibold tracking-widest uppercase ${stat.textColor === 'text-zinc-50' ? 'text-zinc-300' : 'text-zinc-900'}`}>
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
