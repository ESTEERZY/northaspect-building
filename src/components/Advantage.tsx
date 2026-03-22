const Advantage = () => {
  const advantages = [
    { name: 'Frame Installation', percentage: 90, color: 'bg-app-accent' },
    { name: 'Electrical and Plumbing', percentage: 85, color: 'bg-app-accent' },
    { name: 'Interior Finishing', percentage: 98, color: 'bg-app-accent' },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-dark-blue/10 px-4 py-2 rounded-full text-xs font-semibold text-dark-blue tracking-wide">
              <span className="w-2 h-2 bg-app-accent rounded-full"></span>
              HOME BUILDER CONTRACTOR
            </div>

            <h2 className="text-4xl lg:text-5xl font-normal text-dark-blue leading-[1.3]">
              Our Craftsmanship Advantage
            </h2>

            <p className="text-sm text-gray-600 leading-relaxed">
              Every project showcases our dedication to superior quality and meticulous attention to detail. Our expert team brings decades of combined experience to deliver construction excellence that defines modern home building standards.
            </p>

            <div className="space-y-5">
              {advantages.map((item, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-dark-blue text-sm">{item.name}</span>
                    <span className="font-bold text-dark-blue text-sm">{item.percentage}%</span>
                  </div>
                  <div className="h-2.5 bg-gray-300 rounded-full overflow-hidden">
                    <div
                      className={`h-full ${item.color} transition-all duration-1000 ease-out`}
                      style={{ width: `${item.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <p className="text-xs text-gray-500 italic pt-2">
              Source: Foundation Showcase Quality Metrics 2024
            </p>
          </div>

          <div className="relative">
            <div className="aspect-[3/4] rounded-xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Construction quality"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="absolute -top-6 -right-6 bg-blue-400 text-white p-6 rounded-xl shadow-xl">
              <div className="text-3xl font-bold">50,000+</div>
              <div className="text-xs mt-1">Completed Projects</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Advantage
