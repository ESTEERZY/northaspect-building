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
    <header className="fixed top-0 left-0 right-0 z-50 bg-dark-blue/95 backdrop-blur-sm">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-white">
            Foundation Showcase
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-white hover:text-app-accent transition-colors duration-300 text-sm font-medium"
              >
                {link.name}
              </a>
            ))}
            <button className="bg-app-accent text-dark-blue px-6 py-2 rounded-md font-semibold hover:bg-app-accent/90 transition-all duration-300">
              Request a Quote
            </button>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white"
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
                  className="text-white hover:text-app-accent transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <button className="bg-app-accent text-dark-blue px-6 py-2 rounded-md font-semibold hover:bg-app-accent/90 transition-all duration-300">
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
