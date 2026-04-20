import { useState } from 'react'
import { Menu, X, Phone } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-white/60 shadow-sm">
      <nav className="container mx-auto px-6 lg:px-12 py-5">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-2xl font-black tracking-tighter text-charcoal uppercase">
            Foundation <span className="text-sand">Elite</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-charcoal hover:text-sand transition-colors duration-500 text-base font-black tracking-tight uppercase relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-sand group-hover:w-full transition-all duration-500"></span>
              </a>
            ))}

            {/* CTA Button */}
            <a
              href="#contact"
              className="bg-sand text-white px-8 py-3 text-base font-black tracking-tight uppercase hover:bg-charcoal transition-all duration-500 inline-flex items-center gap-2 rounded-[2px] shadow-lg shadow-sand/20"
            >
              <Phone size={18} />
              Get Quote
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-charcoal"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-6 pb-6 border-t border-charcoal/10 pt-6">
            <div className="flex flex-col space-y-5">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-charcoal hover:text-sand transition-colors duration-300 text-lg font-black uppercase tracking-tight"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                className="bg-sand text-white px-8 py-4 text-base font-black tracking-tight uppercase hover:bg-charcoal transition-all duration-300 inline-flex items-center justify-center gap-2 mt-4 rounded-[2px]"
                onClick={() => setIsMenuOpen(false)}
              >
                <Phone size={18} />
                Get Quote
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header
