import { Facebook, Twitter, Instagram, Linkedin, Phone, Mail, MapPin, Clock } from 'lucide-react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const Footer = () => {
  const location = useLocation()
  const navigate = useNavigate()

  const quickLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About Us', href: '#about' },
    { name: 'Projects', href: '#portfolio' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <footer className="bg-white text-charcoal border-t border-slate-200">
      <div className="container mx-auto px-6 lg:px-12 py-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link
              to="/"
              onClick={() => {
                if (location.pathname === '/') {
                  window.scrollTo({ top: 0, behavior: 'smooth' })
                }
              }}
              className="text-2xl font-black tracking-tighter uppercase text-charcoal flex items-center gap-3 hover:text-gold/90 transition-colors duration-300"
            >
              <img src="/favicon.svg" alt="NorthAspect Building Logo" className="h-7 w-auto object-contain" />
              <span>NorthAspect <span className="text-gold font-light">Building</span></span>
            </Link>
            <p className="text-slate-600 font-medium leading-relaxed text-sm">
              Quality custom residential building, renovations, extensions, and master carpentry specialists based across Sydney's Northern Beaches &amp; North Shore.
            </p>
            <div className="flex gap-2.5 pt-1">
              <span
                className="w-10 h-10 bg-slate-100 border border-slate-200 flex items-center justify-center hover:bg-gold hover:border-gold hover:text-white transition-all duration-300 rounded-[2px] cursor-default text-slate-700"
                aria-label="Facebook"
              >
                <Facebook size={18} strokeWidth={2} />
              </span>
              <span
                className="w-10 h-10 bg-slate-100 border border-slate-200 flex items-center justify-center hover:bg-gold hover:border-gold hover:text-white transition-all duration-300 rounded-[2px] cursor-default text-slate-700"
                aria-label="Twitter"
              >
                <Twitter size={18} strokeWidth={2} />
              </span>
              <span
                className="w-10 h-10 bg-slate-100 border border-slate-200 flex items-center justify-center hover:bg-gold hover:border-gold hover:text-white transition-all duration-300 rounded-[2px] cursor-default text-slate-700"
                aria-label="Instagram"
              >
                <Instagram size={18} strokeWidth={2} />
              </span>
              <span
                className="w-10 h-10 bg-slate-100 border border-slate-200 flex items-center justify-center hover:bg-gold hover:border-gold hover:text-white transition-all duration-300 rounded-[2px] cursor-default text-slate-700"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} strokeWidth={2} />
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base font-black mb-4 uppercase tracking-[0.1em] text-charcoal">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault()
                      const targetId = link.href.replace('#', '')
                      if (location.pathname === '/') {
                        document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' })
                      } else {
                        navigate('/', { state: { scrollToSection: targetId } })
                      }
                    }}
                    className="text-slate-600 font-medium hover:text-gold transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#service-areas"
                  onClick={(e) => {
                    e.preventDefault()
                    if (location.pathname === '/') {
                      document.getElementById('service-areas')?.scrollIntoView({ behavior: 'smooth' })
                    } else {
                      navigate('/', { state: { scrollToSection: 'service-areas' } })
                    }
                  }}
                  className="text-slate-600 font-medium hover:text-gold transition-colors duration-300"
                >
                  Service Suburbs
                </a>
              </li>
            </ul>
          </div>

          {/* Locations We Service */}
          <div>
            <h4 className="text-base font-black mb-4 uppercase tracking-[0.1em] text-charcoal">Locations We Service</h4>
            <ul className="space-y-2 text-slate-600 font-medium text-sm">
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-gold flex-shrink-0" />
                <span>Northern Beaches &amp; North Shore (Sydney)</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-gold flex-shrink-0" />
                <span>Manly, Freshwater, Dee Why &amp; Mona Vale</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-gold flex-shrink-0" />
                <span>Newport, Bayview, Narrabeen &amp; Terrey Hills</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-gold flex-shrink-0" />
                <span>Mosman, Neutral Bay, Cremorne &amp; Chatswood</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-gold flex-shrink-0" />
                <span>Killara, Lindfield, St Ives &amp; Roseville</span>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-base font-black mb-4 uppercase tracking-[0.1em] text-charcoal">Contact</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" strokeWidth={2} />
                <div>
                  <a href="tel:0400000000" className="text-slate-600 font-medium hover:text-gold transition-colors duration-300">
                    Direct Inquiry (Sydney NSW)
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" strokeWidth={2} />
                <div>
                  <a href="mailto:aspectnorthccooke@gmail.com" className="text-slate-600 font-medium hover:text-gold transition-colors duration-300 break-all">
                    aspectnorthccooke@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" strokeWidth={2} />
                <div>
                  <p className="text-slate-600 font-medium leading-snug">
                    Northern Beaches &amp; North Shore, Sydney NSW
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" strokeWidth={2} />
                <div>
                  <p className="text-slate-600 font-medium leading-snug">
                    Mon–Fri: 7:00 AM–5:00 PM<br/>
                    Sat: By Appointment | Sun: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-200 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 text-xs font-medium text-slate-500">
            <div>
              © {new Date().getFullYear()} NorthAspect Building. All rights reserved.
            </div>
            <div className="flex gap-6">
              <Link to="/privacy" className="hover:text-gold transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-gold transition-colors duration-300">
                Terms of Service
              </Link>
              <Link to="/sitemap" className="hover:text-gold transition-colors duration-300">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
