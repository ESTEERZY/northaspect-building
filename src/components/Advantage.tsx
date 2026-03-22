const Advantage = () => {
  const advantages = [
    { name: 'Structural Tolerances', percentage: 99, color: 'bg-zinc-900' },
    { name: 'Architectural Integration', percentage: 95, color: 'bg-zinc-900' },
    { name: 'Systematic Execution', percentage: 98, color: 'bg-zinc-900' },
  ]

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-3 border border-zinc-200 bg-zinc-50 px-4 py-2 text-xs font-semibold text-zinc-800 tracking-[0.2em] uppercase">
              <span className="w-1.5 h-1.5 bg-zinc-900"></span>
              STRUCTURAL ENGINEERING
            </div>

            <h2 className="text-4xl lg:text-5xl font-light text-zinc-950 tracking-tight leading-[1.2]">
              Architectural <span className="font-semibold">Precision</span> Advantage
            </h2>

            <p className="text-base text-zinc-500 leading-relaxed font-light font-sans max-w-lg">
              Every project manifests our dedication to exacting standards. We employ advanced engineering principles to deliver spaces with microscopic tolerances, ensuring long-term structural integrity and aesthetic perfection.
            </p>

            <div className="space-y-5">
              {advantages.map((item, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-zinc-800 text-sm tracking-wide uppercase">{item.name}</span>
                    <span className="font-light text-zinc-500 text-sm">{item.percentage}%</span>
                  </div>
                  <div className="h-1 bg-zinc-100 overflow-hidden">
                    <div
                      className={`h-full ${item.color} transition-all duration-1000 ease-out`}
                      style={{ width: `${item.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <p className="text-xs text-zinc-400 font-light tracking-widest uppercase pt-4">
              Data: Foundation Showcase Quality Metrics 2026
            </p>
          </div>

          <div className="relative">
            <div className="aspect-[3/4] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
              <img
                src="https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Construction precision"
                className="w-full h-full object-cover scale-105 hover:scale-100 transition-transform duration-1000"
              />
            </div>

            <div className="absolute -bottom-6 -left-6 bg-white text-zinc-950 p-8 border border-zinc-200">
              <div className="text-4xl font-light tracking-tight">Zero</div>
              <div className="text-xs mt-2 uppercase tracking-widest text-zinc-500">Tolerance Policy</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Advantage
