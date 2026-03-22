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
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-5">
            <div className="inline-flex items-center gap-2 bg-dark-blue/10 px-4 py-2 rounded-full text-xs font-semibold text-dark-blue tracking-wide">
              <span className="w-2 h-2 bg-app-accent rounded-full"></span>
              GET IN TOUCH
            </div>

            <h2 className="text-4xl lg:text-5xl font-normal text-dark-blue leading-[1.3]">
              Request a Quote and Start Building Your Dream Home
            </h2>

            <p className="text-sm text-gray-600 leading-relaxed">
              Ready to transform your vision into reality? Our team is here to discuss your project, answer questions, and provide a detailed consultation. Contact us today to discover how Foundation Showcase can bring exceptional craftsmanship to your next construction project.
            </p>

            <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-xl">
              <img
                src="https://images.pexels.com/photos/3862379/pexels-photo-3862379.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Construction team"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="bg-gray-50 p-8 lg:p-10 rounded-xl shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-xs font-semibold text-dark-blue mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-app-accent focus:border-transparent transition-all text-sm"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-xs font-semibold text-dark-blue mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-app-accent focus:border-transparent transition-all text-sm"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-semibold text-dark-blue mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-app-accent focus:border-transparent transition-all resize-none text-sm"
                  placeholder="Tell us about your project..."
                />
              </div>

              <button
                type="submit"
                className="group w-full bg-dark-blue text-white px-7 py-3.5 rounded-lg font-bold hover:bg-dark-blue/90 transition-all duration-300 inline-flex items-center justify-center gap-2 text-base"
              >
                Send Message
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
