import { Award, Building2, Chrome as Home, Users } from 'lucide-react'

const Stats = () => {
  const stats = [
    {
      icon: Building2,
      value: '10+',
      label: 'Years Experience',
      color: 'bg-gray-100',
    },
    {
      icon: Award,
      value: '4.8/5',
      label: 'Customer Rating',
      color: 'bg-dark-blue',
      textColor: 'text-white',
    },
    {
      icon: Users,
      value: '20+',
      label: 'Team Members',
      color: 'bg-gray-200',
    },
    {
      icon: Home,
      value: '1.3K',
      label: 'Projects Done',
      color: 'bg-gray-100',
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`${stat.color} ${stat.textColor || 'text-dark-blue'} p-6 rounded-xl text-center space-y-3 hover:scale-105 transition-transform duration-300`}
            >
              <stat.icon className={`w-9 h-9 mx-auto ${stat.textColor === 'text-white' ? 'text-app-accent' : 'text-dark-blue'}`} />
              <div className="text-3xl font-bold">{stat.value}</div>
              <div className={`text-xs font-semibold ${stat.textColor === 'text-white' ? 'text-gray-300' : 'text-gray-600'}`}>
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
