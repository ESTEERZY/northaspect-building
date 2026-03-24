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
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-lg border-b border-accent-gold/30">
      <nav className="container mx-auto px-6 lg:px-12 py-5">
        <div className="flex items-center justify-between">
          {/* Logo - High Contrast */}
          <div className="text-2xl font-extrabold tracking-tight text-white uppercase">
            Foundation <span className="accent-gold">Elite</span>
          </div>

          {/* Desktop Navigation - High Contrast Links */}
          <div className="hidden lg:flex items-center space-x-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-white hover:accent-gold transition-colors duration-300 text-base font-semibold tracking-wide uppercase relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent-gold group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}

            {/* Dominant CTA Button - Solid Gold */}
            <a
              href="#contact"
              className="bg-accent-gold text-black px-8 py-3 text-base font-bold tracking-wide uppercase hover:bg-white transition-all duration-300 inline-flex items-center gap-2 shadow-lg shadow-accent-gold/20"
            >
              <Phone size={18} />
              Get Quote
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-white"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu - High Contrast */}
        {isMenuOpen && (
          <div className="lg:hidden mt-6 pb-6 border-t border-accent-gold/20 pt-6">
            <div className="flex flex-col space-y-5">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-white hover:accent-gold transition-colors duration-300 text-lg font-semibold uppercase tracking-wide"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                className="bg-accent-gold text-black px-8 py-4 text-base font-bold tracking-wide uppercase hover:bg-white transition-all duration-300 inline-flex items-center justify-center gap-2 mt-4"
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
