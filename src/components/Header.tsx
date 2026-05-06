import { useState } from 'react'
import { Menu, X, Zap } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navLinks = [
    { name: 'System', href: '#system' },
    { name: 'Features', href: '#features' },
    { name: 'Results', href: '#results' },
    { name: 'About', href: '#about' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-charcoal/80 backdrop-blur-md border-b border-white/10 shadow-sm">
      <nav className="container mx-auto px-6 lg:px-12 py-5">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-2xl font-black tracking-tighter text-white uppercase flex items-center gap-2">
            <Zap className="text-gold" size={24} />
            Apex <span className="text-white/60">Systems</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-white/80 hover:text-gold transition-colors duration-500 text-sm font-bold tracking-widest uppercase relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold group-hover:w-full transition-all duration-500"></span>
              </a>
            ))}

            {/* CTA Button */}
            <a
              href="#audit"
              className="bg-white/5 text-white border border-white/10 px-8 py-3 text-sm font-bold tracking-widest uppercase hover:bg-gold hover:text-charcoal hover:border-gold transition-all duration-500 inline-flex items-center gap-2 rounded-[2px]"
            >
              Audit My Process
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

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-6 pb-6 border-t border-white/10 pt-6 animate-fade-in">
            <div className="flex flex-col space-y-5">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-white/80 hover:text-gold transition-colors duration-300 text-lg font-bold uppercase tracking-widest"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#audit"
                className="bg-gold text-charcoal px-8 py-4 text-base font-bold tracking-widest uppercase hover:bg-white transition-all duration-300 inline-flex items-center justify-center gap-2 mt-4 rounded-[2px]"
                onClick={() => setIsMenuOpen(false)}
              >
                Audit My Process
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header
