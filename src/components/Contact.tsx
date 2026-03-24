import { useState } from 'react'
import { ArrowRight, Phone, Mail, MapPin } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
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
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Left: Contact Info */}
          <div className="lg:col-span-2 space-y-8">
            <div className="inline-flex items-center gap-3 bg-accent-gold/10 border border-accent-gold px-5 py-3">
              <span className="w-2 h-2 bg-accent-gold"></span>
              <span className="text-xs font-bold tracking-[0.2em] accent-gold uppercase">Get In Touch</span>
            </div>

            <h2 className="text-5xl lg:text-6xl font-extrabold text-black leading-tight">
              Let's Build <span className="accent-gold">Together</span>
            </h2>

            <p className="text-xl text-gray-700 font-medium leading-relaxed">
              Ready to start your project? Contact us today for a free consultation and detailed quote.
            </p>

            {/* Contact Details */}
            <div className="space-y-6 pt-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-black flex items-center justify-center">
                  <Phone className="w-6 h-6 text-accent-gold" strokeWidth={2} />
                </div>
                <div>
                  <div className="text-sm font-bold uppercase tracking-wider text-gray-600 mb-1">Phone</div>
                  <a href="tel:+15551234567" className="text-xl font-bold text-black hover:accent-gold transition-colors">
                    (555) 123-4567
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-black flex items-center justify-center">
                  <Mail className="w-6 h-6 text-accent-gold" strokeWidth={2} />
                </div>
                <div>
                  <div className="text-sm font-bold uppercase tracking-wider text-gray-600 mb-1">Email</div>
                  <a href="mailto:info@foundationelite.com" className="text-xl font-bold text-black hover:accent-gold transition-colors">
                    info@foundationelite.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-black flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-accent-gold" strokeWidth={2} />
                </div>
                <div>
                  <div className="text-sm font-bold uppercase tracking-wider text-gray-600 mb-1">Office</div>
                  <p className="text-xl font-bold text-black">
                    123 Construction Ave<br/>
                    Building City, ST 12345
                  </p>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="pt-6 border-t border-gray-300">
              <div className="text-sm font-bold uppercase tracking-wider text-gray-600 mb-3">Business Hours</div>
              <div className="space-y-2 text-base font-medium text-gray-700">
                <div className="flex justify-between">
                  <span>Monday - Friday:</span>
                  <span className="font-bold text-black">8:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday:</span>
                  <span className="font-bold text-black">9:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday:</span>
                  <span className="font-bold text-black">Closed</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="lg:col-span-3 bg-black p-10 lg:p-12 border-4 border-accent-gold">
            <h3 className="text-3xl font-extrabold text-white mb-2">Request a Quote</h3>
            <p className="text-lg text-gray-300 mb-8 font-medium">Fill out the form below and we'll get back to you within 24 hours.</p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-bold text-white uppercase tracking-wider mb-3">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 bg-white text-black text-base font-medium border-2 border-transparent focus:outline-none focus:border-accent-gold transition-colors"
                  placeholder="John Smith"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-white uppercase tracking-wider mb-3">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 bg-white text-black text-base font-medium border-2 border-transparent focus:outline-none focus:border-accent-gold transition-colors"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-bold text-white uppercase tracking-wider mb-3">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 bg-white text-black text-base font-medium border-2 border-transparent focus:outline-none focus:border-accent-gold transition-colors"
                    placeholder="(555) 123-4567"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-bold text-white uppercase tracking-wider mb-3">
                  Project Details *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-5 py-4 bg-white text-black text-base font-medium border-2 border-transparent focus:outline-none focus:border-accent-gold transition-colors resize-none"
                  placeholder="Tell us about your project requirements, timeline, and budget..."
                />
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="group w-full bg-accent-gold text-black px-10 py-5 text-base font-bold tracking-wide uppercase hover:bg-white transition-all duration-300 inline-flex items-center justify-center gap-3 shadow-2xl shadow-accent-gold/20"
                >
                  Send Message
                  <ArrowRight className="group-hover:translate-x-2 transition-transform" size={20} />
                </button>
              </div>

              <p className="text-sm text-gray-400 text-center font-medium">
                We respect your privacy and will never share your information.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
