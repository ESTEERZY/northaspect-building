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
    <footer className="bg-zinc-950 text-zinc-50 border-t border-zinc-900">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="space-y-6">
            <h3 className="text-xl font-bold tracking-widest uppercase text-zinc-50">Antigravity</h3>
            <p className="text-zinc-300 font-light leading-relaxed text-sm">
              Structuring environments defined by precision, structural integrity, and architectural permanence.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 border border-zinc-800 rounded-none flex items-center justify-center hover:bg-zinc-50 hover:text-zinc-950 transition-all duration-500"
              >
                <Facebook size={16} />
              </a>
              <a
                href="#"
                className="w-10 h-10 border border-zinc-800 rounded-none flex items-center justify-center hover:bg-zinc-50 hover:text-zinc-950 transition-all duration-500"
              >
                <Twitter size={16} />
              </a>
              <a
                href="#"
                className="w-10 h-10 border border-zinc-800 rounded-none flex items-center justify-center hover:bg-zinc-50 hover:text-zinc-950 transition-all duration-500"
              >
                <Instagram size={16} />
              </a>
              <a
                href="#"
                className="w-10 h-10 border border-zinc-800 rounded-none flex items-center justify-center hover:bg-zinc-50 hover:text-zinc-950 transition-all duration-500"
              >
                <Linkedin size={16} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a href="#" className="text-zinc-300 font-light hover:text-zinc-50 transition-colors duration-300 flex items-center gap-3 group text-sm">
                    <ArrowRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
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
                  <a href={link.href} className="text-zinc-300 font-light hover:text-zinc-50 transition-colors duration-300 flex items-center gap-3 group text-sm">
                    <ArrowRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Newsletter</h4>
            <p className="text-zinc-300 text-sm font-light mb-6">
              Subscribe to technical briefs and updates.
            </p>
            <form className="space-y-5">
              <input
                type="email"
                placeholder="Email address"
                className="w-full px-0 py-2 bg-transparent rounded-none border-b border-zinc-700 focus:outline-none focus:border-zinc-50 transition-colors text-zinc-50 placeholder-zinc-500 text-sm"
              />
              <button
                type="submit"
                className="w-full border border-zinc-50 text-zinc-50 px-6 py-3 text-xs tracking-widest uppercase font-semibold hover:bg-zinc-50 hover:text-zinc-950 transition-all duration-500"
              >
                Sign Up
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-zinc-900 pt-8 mt-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-light text-zinc-400 tracking-wide uppercase">
            <div>
              © {new Date().getFullYear()} Antigravity Systems. All rights reserved.
            </div>
            <div className="flex gap-8">
              <a href="#" className="hover:text-zinc-50 transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-zinc-50 transition-colors duration-300">
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
