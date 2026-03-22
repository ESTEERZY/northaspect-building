import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Contact Us', href: '#contact' },
    { name: 'Blog', href: '#blog' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-zinc-200">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold tracking-widest text-zinc-950 uppercase">
            Foundation Showcase
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-zinc-600 hover:text-zinc-950 transition-colors duration-300 text-sm font-medium tracking-wide uppercase"
              >
                {link.name}
              </a>
            ))}
            <button className="border border-zinc-950 text-zinc-950 px-6 py-2 text-sm uppercase tracking-wider font-semibold hover:bg-zinc-950 hover:text-zinc-50 transition-all duration-300">
              Request a Quote
            </button>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-zinc-950"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-zinc-600 hover:text-zinc-950 transition-colors duration-300 text-sm uppercase tracking-wide"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <button className="border border-zinc-950 text-zinc-950 px-6 py-2 text-sm uppercase tracking-wider font-semibold hover:bg-zinc-950 hover:text-zinc-50 transition-all duration-300">
                Request a Quote
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header
