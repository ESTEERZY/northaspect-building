import { useState } from 'react'
import { ArrowRight, Mail, LayoutDashboard, Bot } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    revenue: '',
    process: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="audit" className="py-24 bg-charcoal border-t border-white/10 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-gold/5 via-charcoal to-charcoal"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Left: Contact Info */}
          <div className="lg:col-span-2 space-y-8 animate-fade-in">
            <div className="inline-flex items-center gap-3 bg-darkgray/80 backdrop-blur-md border border-white/10 px-5 py-3 rounded-[2px] shadow-lg">
              <span className="w-2 h-2 bg-gold animate-pulse"></span>
              <span className="text-xs font-black tracking-[0.2em] text-white/80 uppercase">System Audit</span>
            </div>

            <h2 className="text-5xl lg:text-6xl font-black tracking-tighter text-white leading-tight">
              Scale Your <span className="text-gold">Revenue.</span>
            </h2>

            <p className="text-xl text-white/60 font-medium leading-relaxed">
              Request a free technical audit of your current lead capture and qualification process. We'll show you exactly where AI can plug the leaks.
            </p>

            {/* Contact Details */}
            <div className="space-y-6 pt-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-darkgray border border-white/10 flex items-center justify-center rounded-[2px]">
                  <LayoutDashboard className="w-6 h-6 text-gold" strokeWidth={1.5} />
                </div>
                <div>
                  <div className="text-sm font-bold uppercase tracking-widest text-white/50 mb-1">Step 1</div>
                  <p className="text-lg font-bold text-white">We map your current funnel</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-darkgray border border-white/10 flex items-center justify-center rounded-[2px]">
                  <Bot className="w-6 h-6 text-gold" strokeWidth={1.5} />
                </div>
                <div>
                  <div className="text-sm font-bold uppercase tracking-widest text-white/50 mb-1">Step 2</div>
                  <p className="text-lg font-bold text-white">Identify AI automation points</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-darkgray border border-white/10 flex items-center justify-center rounded-[2px]">
                  <Mail className="w-6 h-6 text-gold" strokeWidth={1.5} />
                </div>
                <div>
                  <div className="text-sm font-bold uppercase tracking-widest text-white/50 mb-1">Direct Contact</div>
                  <a href="mailto:partners@apexsystems.ai" className="text-lg font-bold text-white hover:text-gold transition-colors duration-500">
                    partners@apexsystems.ai
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Contact Form - Glassmorphism */}
          <div className="lg:col-span-3 bg-darkgray/80 backdrop-blur-md p-10 lg:p-12 border border-white/10 shadow-2xl rounded-xl animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-3xl font-bold text-white mb-2">Request Process Audit</h3>
            <p className="text-lg text-white/60 mb-8 font-medium">Submit your details and our systems architect will reach out within 2 hours.</p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-white/80 uppercase tracking-widest mb-3">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 bg-charcoal/50 text-white text-base border border-white/10 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all rounded-[2px]"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-white/80 uppercase tracking-widest mb-3">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 bg-charcoal/50 text-white text-base border border-white/10 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all rounded-[2px]"
                    placeholder="john@company.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="revenue" className="block text-sm font-bold text-white/80 uppercase tracking-widest mb-3">
                  Current Monthly Revenue *
                </label>
                <select
                  id="revenue"
                  name="revenue"
                  value={formData.revenue}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 bg-charcoal/50 text-white text-base border border-white/10 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all rounded-[2px]"
                >
                  <option value="" disabled>Select a range</option>
                  <option value="under_50k">Under $50k / mo</option>
                  <option value="50k_250k">$50k - $250k / mo</option>
                  <option value="250k_1m">$250k - $1M / mo</option>
                  <option value="over_1m">$1M+ / mo</option>
                </select>
              </div>

              <div>
                <label htmlFor="process" className="block text-sm font-bold text-white/80 uppercase tracking-widest mb-3">
                  Current Lead Process *
                </label>
                <textarea
                  id="process"
                  name="process"
                  value={formData.process}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-5 py-4 bg-charcoal/50 text-white text-base border border-white/10 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all resize-none rounded-[2px]"
                  placeholder="How do you currently capture and qualify leads?"
                />
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="group w-full bg-gold text-charcoal px-10 py-5 text-base font-bold tracking-widest uppercase hover:bg-white transition-all duration-500 inline-flex items-center justify-center gap-3 shadow-[0_0_20px_rgba(212,175,55,0.2)] hover:shadow-[0_0_40px_rgba(212,175,55,0.4)] rounded-[2px]"
                >
                  Submit For Audit
                  <ArrowRight className="group-hover:translate-x-2 transition-transform duration-500" size={20} />
                </button>
              </div>

              <p className="text-sm text-white/40 text-center font-medium">
                Your data is securely encrypted. We do not share information with third parties.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
