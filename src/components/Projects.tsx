import { ArrowRight } from 'lucide-react'

const Projects = () => {
  const projects = [
    {
      image: '/assets/revenue_dashboard.png',
      title: 'Enterprise SaaS Pipeline',
      category: 'B2B Software',
      value: '+145% Leads',
    },
    {
      image: '/assets/calendar_dashboard.png',
      title: 'Consulting Firm Booking',
      category: 'Service Business',
      value: '+85% Meetings',
    },
    {
      image: '/assets/lead_inbox.png',
      title: 'Real Estate Lead Capture',
      category: 'High-Ticket',
      value: '-60% Cost/Acq',
    },
    {
      image: '/assets/automation_workflow.png',
      title: 'E-commerce Nurture',
      category: 'DTC Brand',
      value: '+210% LTV',
    },
  ]

  return (
    <section id="results" className="py-24 bg-darkgray relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/10 to-transparent"></div>
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-8">
          <div className="space-y-6 max-w-2xl animate-fade-in">
            <div className="inline-flex items-center gap-3 bg-charcoal border border-white/10 px-5 py-3 rounded-[2px] shadow-lg">
              <span className="w-2 h-2 bg-gold"></span>
              <span className="text-xs font-black tracking-[0.2em] text-white/80 uppercase">System Results</span>
            </div>
            <h2 className="text-5xl lg:text-6xl font-black tracking-tighter text-white leading-tight">
              Verified <span className="text-gold">Outcomes</span>
            </h2>
            <p className="text-xl text-white/60 font-medium">
              We don't build toys. We build revenue engines. See the numbers our systems are generating for partners across industries.
            </p>
          </div>

          <a
            href="#audit"
            className="group border border-white/20 text-white px-10 py-5 text-sm font-bold tracking-widest uppercase hover:bg-gold hover:text-charcoal hover:border-gold transition-all duration-500 inline-flex items-center gap-3 rounded-[2px]"
          >
            Get My Audit
            <ArrowRight className="group-hover:translate-x-2 transition-transform" size={20} />
          </a>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden aspect-[4/3] cursor-pointer rounded-xl bg-charcoal border border-white/10 shadow-lg hover:border-gold/30 transition-colors duration-500"
            >
              {/* Project Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                loading="lazy"
              />

              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/50 to-transparent"></div>

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-8">
                <div className="transform transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                  <div className="inline-block bg-gold/10 text-gold border border-gold/20 px-4 py-2 text-xs font-bold tracking-widest uppercase mb-4 rounded-[2px] backdrop-blur-md">
                    {project.category}
                  </div>
                  <h3 className="text-3xl font-bold tracking-tight text-white mb-3">{project.title}</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-black text-gold">{project.value}</span>
                    <ArrowRight className="text-white opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300" size={24} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Below Projects */}
        <div className="mt-20 text-center animate-slide-up">
          <p className="text-xl text-white/60 font-medium mb-8">Ready to scale your revenue operations?</p>
          <a
            href="#audit"
            className="group bg-gold text-charcoal px-12 py-6 text-base font-bold tracking-widest uppercase hover:bg-white transition-all duration-500 inline-flex items-center gap-3 shadow-[0_0_20px_rgba(212,175,55,0.2)] hover:shadow-[0_0_40px_rgba(212,175,55,0.4)] rounded-[2px]"
          >
            Audit My Process
            <ArrowRight className="group-hover:translate-x-2 transition-transform" size={22} />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Projects
