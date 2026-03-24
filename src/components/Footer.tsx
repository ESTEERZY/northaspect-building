import { Facebook, Twitter, Instagram, Linkedin, Phone, Mail, MapPin } from 'lucide-react'

const Footer = () => {
  const services = [
    { name: 'Residential Construction', href: '#services' },
    { name: 'Commercial Projects', href: '#services' },
    { name: 'Renovation & Remodeling', href: '#services' },
    { name: 'Project Management', href: '#services' },
  ]

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <footer className="bg-black text-white border-t-4 border-accent-gold">
      <div className="container mx-auto px-6 lg:px-12 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div className="space-y-6">
            <h3 className="text-2xl font-extrabold tracking-tight uppercase text-white">
              Foundation <span className="accent-gold">Elite</span>
            </h3>
            <p className="text-gray-300 font-medium leading-relaxed">
              Building excellence since 2014. Your trusted partner for premium residential and commercial construction.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-12 h-12 bg-zinc-900 border border-accent-gold flex items-center justify-center hover:bg-accent-gold hover:text-black transition-all duration-300"
              >
                <Facebook size={20} strokeWidth={2} />
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-zinc-900 border border-accent-gold flex items-center justify-center hover:bg-accent-gold hover:text-black transition-all duration-300"
              >
                <Twitter size={20} strokeWidth={2} />
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-zinc-900 border border-accent-gold flex items-center justify-center hover:bg-accent-gold hover:text-black transition-all duration-300"
              >
                <Instagram size={20} strokeWidth={2} />
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-zinc-900 border border-accent-gold flex items-center justify-center hover:bg-accent-gold hover:text-black transition-all duration-300"
              >
                <Linkedin size={20} strokeWidth={2} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-extrabold mb-6 uppercase tracking-wider text-white">Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a href={service.href} className="text-gray-300 font-medium hover:accent-gold transition-colors duration-300">
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-extrabold mb-6 uppercase tracking-wider text-white">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-300 font-medium hover:accent-gold transition-colors duration-300">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-extrabold mb-6 uppercase tracking-wider text-white">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-accent-gold flex-shrink-0 mt-1" strokeWidth={2} />
                <div>
                  <a href="tel:+15551234567" className="text-gray-300 font-medium hover:accent-gold transition-colors">
                    (555) 123-4567
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-accent-gold flex-shrink-0 mt-1" strokeWidth={2} />
                <div>
                  <a href="mailto:info@foundationelite.com" className="text-gray-300 font-medium hover:accent-gold transition-colors break-all">
                    info@foundationelite.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent-gold flex-shrink-0 mt-1" strokeWidth={2} />
                <div>
                  <p className="text-gray-300 font-medium">
                    123 Construction Ave<br/>
                    Building City, ST 12345
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-accent-gold/30 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm font-medium text-gray-400">
            <div>
              © {new Date().getFullYear()} Foundation Elite. All rights reserved.
            </div>
            <div className="flex gap-8">
              <a href="#" className="hover:accent-gold transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="hover:accent-gold transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="hover:accent-gold transition-colors duration-300">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
