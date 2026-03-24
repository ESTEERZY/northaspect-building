import { useState } from 'react'
import { ArrowRight } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="py-24 bg-zinc-50">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-3 border border-zinc-200 bg-white px-4 py-2 text-xs font-semibold text-zinc-800 tracking-[0.2em] uppercase">
              <span className="w-1.5 h-1.5 bg-zinc-900"></span>
              INITIATE PROJECT
            </div>

            <h2 className="text-4xl lg:text-5xl font-light text-zinc-950 tracking-tight leading-[1.2]">
              Commence Architectural <span className="font-semibold">Consultation</span>
            </h2>

            <p className="text-base font-light text-zinc-600 leading-relaxed max-w-lg">
              Ready to construct environments defined by precision and permanence? Engage our team to discuss your project requirements, technical specifications, and architectural ambitions.
            </p>

            <div className="relative aspect-[4/3] rounded-none overflow-hidden border border-zinc-200">
              <img
                src="https://images.pexels.com/photos/3862379/pexels-photo-3862379.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Engineering consultation"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>

          <div className="bg-white p-10 lg:p-12 rounded-none border border-zinc-200">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <label htmlFor="name" className="block text-xs font-semibold text-zinc-900 tracking-widest uppercase mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-0 py-3 bg-transparent rounded-none border-b border-zinc-300 focus:outline-none focus:border-zinc-900 transition-colors text-base"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-xs font-semibold text-zinc-900 tracking-widest uppercase mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-0 py-3 bg-transparent rounded-none border-b border-zinc-300 focus:outline-none focus:border-zinc-900 transition-colors text-base"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-semibold text-zinc-900 tracking-widest uppercase mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-0 py-3 bg-transparent rounded-none border-b border-zinc-300 focus:outline-none focus:border-zinc-900 transition-colors resize-none text-base"
                  placeholder="Define your project specs..."
                />
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="group w-full border border-zinc-950 text-zinc-950 px-8 py-4 text-sm tracking-widest uppercase font-semibold hover:bg-zinc-950 hover:text-zinc-50 transition-all duration-500 inline-flex items-center justify-center gap-3"
                >
                  Submit Inquiry
                  <ArrowRight className="group-hover:translate-x-2 transition-transform" size={16} />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
