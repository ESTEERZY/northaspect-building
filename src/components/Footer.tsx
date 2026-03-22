import { Facebook, Twitter, Instagram, Linkedin, ArrowRight } from 'lucide-react'

const Footer = () => {
  const services = [
    'Custom Home Design',
    'Home Construction',
    'Renovations and Additions',
    'Interior Design',
    'Project Management',
  ]

  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
    { name: 'Blog', href: '#blog' },
  ]

  return (
    <footer className="bg-dark-blue text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Foundation Showcase</h3>
            <p className="text-gray-300 leading-relaxed">
              Transforming visions into exceptional homes with superior craftsmanship, innovative design, and unwavering commitment to quality construction.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-app-accent hover:text-dark-blue transition-all duration-300"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-app-accent hover:text-dark-blue transition-all duration-300"
              >
                <Twitter size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-app-accent hover:text-dark-blue transition-all duration-300"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-app-accent hover:text-dark-blue transition-all duration-300"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-300 hover:text-app-accent transition-colors duration-300 flex items-center gap-2 group">
                    <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-300 hover:text-app-accent transition-colors duration-300 flex items-center gap-2 group">
                    <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Newsletter</h4>
            <p className="text-gray-300 mb-4">
              Subscribe to get the latest updates and news.
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-app-accent focus:border-transparent transition-all text-white placeholder-gray-400"
              />
              <button
                type="submit"
                className="w-full bg-app-accent text-dark-blue px-6 py-3 rounded-lg font-bold hover:bg-app-accent/90 transition-all duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <div>
              Copyright © {new Date().getFullYear()} Foundation Showcase. All rights reserved.
            </div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-app-accent transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-app-accent transition-colors duration-300">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
