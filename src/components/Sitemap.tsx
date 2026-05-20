import { Link } from 'react-router-dom'
import { ArrowLeft, Compass, ExternalLink, FileText } from 'lucide-react'
import { projectsData } from '../data/projectsData'

const Sitemap = () => {
  return (
    <div className="min-h-screen bg-[#0c0c0c] text-white font-sans selection:bg-gold selection:text-charcoal">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0c0c0c]/90 backdrop-blur-md border-b border-white/10 shadow-sm transition-all duration-300">
        <nav className="container mx-auto px-6 lg:px-12 py-5 flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-2 text-xs font-bold tracking-[0.25em] uppercase text-white/60 hover:text-gold transition-colors duration-300 group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1.5 transition-transform duration-300" />
            <span>Back to Home</span>
          </Link>
          
          <Link to="/" className="text-2xl font-black tracking-[-0.08em] text-white uppercase flex items-center gap-3">
            Apex <span className="text-gold">Architecture</span>
          </Link>

          <div className="hidden md:block w-32 text-right">
            <Link
              to="/"
              state={{ scrollToContact: true }}
              className="text-xs font-bold tracking-wider text-gold hover:text-white uppercase transition-colors duration-300"
            >
              Start Project
            </Link>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="pt-32 pb-24 max-w-4xl mx-auto px-6 lg:px-12">
        <div className="space-y-6 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-[2px] text-xs font-bold text-gold tracking-widest uppercase">
            <Compass size={14} /> Navigation
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight font-heading leading-tight">
            Site <span className="text-gold italic font-light">Index Map</span>
          </h1>
          <p className="text-white/60 font-sans text-lg max-w-2xl leading-relaxed">
            Index page outlining all architectural case studies, corporate profiles, and statutory declarations published by Apex Architecture.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 border-t border-white/10 pt-12">
          {/* Main Pages */}
          <div className="space-y-6">
            <h2 className="text-xl font-bold font-heading text-white border-b border-white/10 pb-3 flex items-center gap-2">
              <FileText className="text-gold" size={18} /> Core Directories
            </h2>
            <ul className="space-y-4">
              <li>
                <Link to="/" className="group flex items-center justify-between p-4 bg-white/5 border border-white/10 rounded-[2px] hover:border-gold/50 transition-colors">
                  <div>
                    <div className="font-bold text-white group-hover:text-gold transition-colors">Home Page</div>
                    <div className="text-xs text-white/50">Landing, Blueprint interactive toggle, and Process Breakdown</div>
                  </div>
                  <ExternalLink size={16} className="text-white/30 group-hover:text-gold transition-colors" />
                </Link>
              </li>
              <li>
                <Link to="/#about" className="group flex items-center justify-between p-4 bg-white/5 border border-white/10 rounded-[2px] hover:border-gold/50 transition-colors">
                  <div>
                    <div className="font-bold text-white group-hover:text-gold transition-colors">About Us Section</div>
                    <div className="text-xs text-white/50">Elena Vance profile, design standards, and corporate philosophy</div>
                  </div>
                  <ExternalLink size={16} className="text-white/30 group-hover:text-gold transition-colors" />
                </Link>
              </li>
              <li>
                <Link to="/#contact" className="group flex items-center justify-between p-4 bg-white/5 border border-white/10 rounded-[2px] hover:border-gold/50 transition-colors">
                  <div>
                    <div className="font-bold text-white group-hover:text-gold transition-colors">Request a Consultation</div>
                    <div className="text-xs text-white/50">Interactive planning board, studio location, and email details</div>
                  </div>
                  <ExternalLink size={16} className="text-white/30 group-hover:text-gold transition-colors" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Case Studies */}
          <div className="space-y-6">
            <h2 className="text-xl font-bold font-heading text-white border-b border-white/10 pb-3 flex items-center gap-2">
              <Compass className="text-gold" size={18} /> Technical Case Studies
            </h2>
            <ul className="space-y-4">
              {projectsData.map((project) => (
                <li key={project.id}>
                  <Link to={`/${project.id}.html`} className="group flex items-center justify-between p-4 bg-white/5 border border-white/10 rounded-[2px] hover:border-gold/50 transition-colors">
                    <div>
                      <div className="font-bold text-white group-hover:text-gold transition-colors">{project.title}</div>
                      <div className="text-xs text-white/50">{project.location} • {project.scope.split(' / ')[0]}</div>
                    </div>
                    <ExternalLink size={16} className="text-white/30 group-hover:text-gold transition-colors" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal / Policy Links */}
          <div className="space-y-6 md:col-span-2">
            <h2 className="text-xl font-bold font-heading text-white border-b border-white/10 pb-3 flex items-center gap-2">
              <FileText className="text-gold" size={18} /> Legal Publications
            </h2>
            <div className="grid sm:grid-cols-3 gap-6">
              <Link to="/privacy.html" className="group p-4 bg-white/5 border border-white/10 rounded-[2px] hover:border-gold/50 transition-colors block">
                <div className="font-bold text-white group-hover:text-gold transition-colors">Privacy Policy</div>
                <div className="text-xs text-white/50 mt-1">Data security and spatial concept confidentiality details.</div>
              </Link>
              <Link to="/terms.html" className="group p-4 bg-white/5 border border-white/10 rounded-[2px] hover:border-gold/50 transition-colors block">
                <div className="font-bold text-white group-hover:text-gold transition-colors">Terms of Service</div>
                <div className="text-xs text-white/50 mt-1">blueprints copyright ownership and liability limitations.</div>
              </Link>
              <Link to="/sitemap.html" className="group p-4 bg-white/5 border border-white/10 rounded-[2px] hover:border-gold/50 transition-colors block border-gold/30">
                <div className="font-bold text-gold">Sitemap</div>
                <div className="text-xs text-white/50 mt-1">This detailed page directory and site mapping layout.</div>
              </Link>
            </div>
          </div>
        </div>
      </main>

      {/* Footer copyright */}
      <footer className="py-12 bg-[#080808] border-t border-white/5 text-center text-xs font-semibold tracking-wider text-white/30 uppercase">
        <div className="container mx-auto px-6">
          © {new Date().getFullYear()} Apex Architecture. All rights reserved. Meticulous structural integrity.
        </div>
      </footer>
    </div>
  )
}

export default Sitemap
