import { useParams, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { ArrowLeft, ArrowRight, MapPin, Check } from 'lucide-react'
import { motion } from 'framer-motion'
import { projectsData } from '../data/projectsData'

const CaseStudyTemplate = () => {
  const { id } = useParams<{ id: string }>()
  const cleanId = id ? id.replace('.html', '') : ''
  const project = projectsData.find((p) => p.id === cleanId)
  const [activeIndex, setActiveIndex] = useState(0)

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0)
    setActiveIndex(0)
  }, [id])

  if (!project) {
    return (
      <div className="min-h-screen bg-[#0c0c0c] text-white flex flex-col items-center justify-center p-6">
        <h2 className="text-4xl font-bold font-heading mb-4">Case Study Not Found</h2>
        <p className="text-white/60 mb-8 max-w-md text-center">
          The requested luxury build was not found or is currently undergoing private cataloging.
        </p>
        <Link
          to="/"
          className="group bg-gold text-charcoal px-8 py-4 text-sm font-bold tracking-widest uppercase hover:bg-white transition-all duration-500 rounded-[2px]"
        >
          Return to Portfolio
        </Link>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#0c0c0c] text-white font-sans overflow-x-hidden selection:bg-gold selection:text-charcoal">
      
      {/* 1. Persistent, Clean Header Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0c0c0c]/90 backdrop-blur-md border-b border-white/10 shadow-sm transition-all duration-300">
        <nav className="container mx-auto px-6 lg:px-12 py-5 flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-2 text-xs font-bold tracking-[0.25em] uppercase text-white/60 hover:text-gold transition-colors duration-300 group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1.5 transition-transform duration-300" />
            <span>Back to Portfolio</span>
          </Link>
          
          <Link to="/" className="text-2xl font-black tracking-[-0.08em] text-white uppercase flex items-center gap-3">
            Apex <span className="text-gold">Architecture</span>
          </Link>

          {/* Dummy element to balance flexbox */}
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

      {/* 2. Project Hero - Full-Bleed Section */}
      <section className="relative h-screen w-full flex items-end overflow-hidden z-0 bg-[#0c0c0c]">
        {/* Full bleed image with smooth pan */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src={project.heroImage}
            alt={project.title}
            className="w-full h-full object-cover animate-infinitePan"
          />
          {/* Rich gradient mask layer for typography legibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0c] via-[#0c0c0c]/40 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute inset-0 bg-black/35 z-5 pointer-events-none"></div>
        </div>

        {/* Hero Title & Parameters */}
        <div className="relative z-20 container mx-auto px-6 lg:px-12 pb-24 md:pb-32 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-3 text-gold text-xs font-bold tracking-[0.3em] uppercase mb-4">
              <MapPin size={14} />
              <span>{project.location}</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[1.05] mb-6 font-heading">
              {project.title}
            </h1>

            <div className="h-[2px] bg-gold w-24 mb-6"></div>

            <p className="text-lg md:text-xl font-medium tracking-wide text-white/80 max-w-2xl font-sans uppercase">
              Scope: {project.scope}
            </p>
          </motion.div>
        </div>
      </section>

      {/* 3. The Architectural Breakdown Section - 2-Column Structural Grid Layout */}
      <section className="py-32 bg-[#0c0c0c] border-t border-white/5 relative z-10">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
            
            {/* Left Column: Bold, Minimal Project Overview & Design Intent */}
            <div className="lg:col-span-7 space-y-8">
              <div>
                <span className="text-xs font-bold tracking-[0.3em] text-gold uppercase block mb-3">Architectural Intent</span>
                <h2 className="text-3xl md:text-5xl font-bold font-heading text-white">
                  Form Follows Poetic Permanence.
                </h2>
              </div>
              
              <div className="w-16 h-px bg-white/20"></div>

              <p className="text-xl md:text-2xl font-light text-white/90 leading-relaxed font-sans tracking-wide">
                {project.overview}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center text-gold shrink-0">
                    <Check size={16} />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-2">Bespoke Design</h4>
                    <p className="text-sm text-white/50">Custom developed spatial layouts configured exactly to site topography and views.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center text-gold shrink-0">
                    <Check size={16} />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-2">Material Precision</h4>
                    <p className="text-sm text-white/50">Rigorous structural detailing utilizing raw structural components as finish materials.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Deep-Dive Project Metadata Metrics */}
            <div className="lg:col-span-5 bg-[#111] border border-white/10 p-8 md:p-10 rounded-[2px] shadow-xl relative overflow-hidden">
              {/* Subtle background architectural line */}
              <div className="absolute -right-10 -bottom-10 opacity-[0.03] text-white pointer-events-none font-black text-9xl uppercase font-sans">
                SPEC
              </div>
              
              <h3 className="text-xs font-bold tracking-[0.3em] text-white/50 uppercase mb-8 pb-4 border-b border-white/10">
                Technical Specifications
              </h3>
              
              <div className="space-y-6">
                {project.metrics.map((metric, index) => (
                  <div 
                    key={index}
                    className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 pb-6 border-b border-white/5 last:border-0 last:pb-0"
                  >
                    <span className="text-[10px] font-bold tracking-[0.2em] text-white/40 uppercase pt-0.5">
                      {metric.label}
                    </span>
                    <span className="text-sm font-semibold text-gold font-sans sm:text-right max-w-sm">
                      {metric.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Technical Construction Gallery */}
      <section className="py-24 bg-[#0a0a0a] border-t border-white/5 relative z-10">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-xs font-bold tracking-[0.3em] text-gold uppercase block mb-3">Construction Lifecycle</span>
              <h2 className="text-3xl md:text-5xl font-bold font-heading text-white">
                Technical Progress Gallery
              </h2>
            </div>
            
            {/* Slider Navigation */}
            <div className="flex items-center gap-4">
              <button
                onClick={() => setActiveIndex((prev) => (prev === 0 ? project.gallery.length - 1 : prev - 1))}
                className="w-12 h-12 rounded-full border border-white/10 hover:border-gold hover:text-gold flex items-center justify-center transition-all duration-300 bg-[#111]"
                aria-label="Previous Slide"
              >
                <ArrowLeft size={20} />
              </button>
              <span className="text-sm font-sans font-bold tracking-widest text-white/50">
                {String(activeIndex + 1).padStart(2, '0')} / {String(project.gallery.length).padStart(2, '0')}
              </span>
              <button
                onClick={() => setActiveIndex((prev) => (prev === project.gallery.length - 1 ? 0 : prev + 1))}
                className="w-12 h-12 rounded-full border border-white/10 hover:border-gold hover:text-gold flex items-center justify-center transition-all duration-300 bg-[#111]"
                aria-label="Next Slide"
              >
                <ArrowRight size={20} />
              </button>
            </div>
          </div>

          {/* Slider Main Box */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-[#111] border border-white/10 p-6 md:p-10 rounded-[2px] relative overflow-hidden">
            {/* Main Image Container */}
            <div className="lg:col-span-8 relative aspect-[16/10] overflow-hidden rounded-[2px] border border-white/5 group">
              <img
                src={project.gallery[activeIndex].image}
                alt={project.gallery[activeIndex].description}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-102"
              />
              <div className="absolute inset-0 bg-black/15 pointer-events-none"></div>
            </div>

            {/* Slider Info Panel */}
            <div className="lg:col-span-4 flex flex-col justify-center h-full space-y-6">
              <div>
                <span className="text-[10px] font-bold tracking-[0.25em] text-white/40 uppercase block mb-2">Stage</span>
                <h3 className="text-2xl md:text-3xl font-bold font-heading text-white">
                  {project.gallery[activeIndex].type}
                </h3>
              </div>
              
              <div className="w-12 h-px bg-white/20"></div>

              <p className="text-base text-white/70 font-sans leading-relaxed font-medium">
                {project.gallery[activeIndex].description}
              </p>

              {/* Dots Indicator */}
              <div className="flex gap-2 pt-6">
                {project.gallery.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveIndex(idx)}
                    className={`h-1 transition-all duration-300 rounded-full ${
                      idx === activeIndex ? 'w-8 bg-gold' : 'w-2 bg-white/20 hover:bg-white/40'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Thumbnail Previews */}
          <div className="grid grid-cols-3 gap-6 mt-8">
            {project.gallery.map((item, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`relative aspect-[16/10] overflow-hidden rounded-[2px] border text-left transition-all duration-500 group ${
                  idx === activeIndex 
                    ? 'border-gold shadow-[0_0_15px_rgba(212,175,55,0.15)] opacity-100' 
                    : 'border-white/10 opacity-40 hover:opacity-80'
                }`}
              >
                <img
                  src={item.image}
                  alt={item.type}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300"></div>
              </button>
            ))}
          </div>

        </div>
      </section>

      {/* 5. Bottom Action Block - Focused Conversion Area */}
      <section className="relative py-32 bg-[#0c0c0c] overflow-hidden z-10">
        {/* Glow backdrop */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gold/5 rounded-full filter blur-[120px] pointer-events-none"></div>

        <div className="container mx-auto px-6 lg:px-12 text-center relative z-10">
          <div className="max-w-3xl mx-auto">
            <span className="text-xs font-bold tracking-[0.3em] text-gold uppercase block mb-4">Shaping Residential Legacies</span>
            <h2 className="text-4xl md:text-6xl font-bold font-heading mb-6 leading-tight">
              Ready to Manifest<br />Your Masterwork?
            </h2>
            <p className="text-lg md:text-xl text-white/60 mb-12 max-w-2xl mx-auto leading-relaxed">
              Connect with Elena Vance and the Apex architectural board to discuss your bespoke structural concept. Let us turn your vision into permanent residential form.
            </p>
            
            <Link
              to="/"
              state={{ scrollToContact: true }}
              className="group bg-gold text-charcoal px-12 py-6 text-base font-bold tracking-widest uppercase hover:bg-white transition-all duration-500 inline-flex items-center gap-3 shadow-[0_0_20px_rgba(212,175,55,0.25)] hover:shadow-[0_0_40px_rgba(212,175,55,0.5)] rounded-[2px] font-sans"
            >
              <span>Start a Project</span>
              <ArrowRight className="group-hover:translate-x-2 transition-transform duration-300" size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer copyright section for completeness */}
      <footer className="py-12 bg-[#080808] border-t border-white/5 text-center text-xs font-semibold tracking-wider text-white/30 uppercase z-10 relative">
        <div className="container mx-auto px-6">
          © {new Date().getFullYear()} Apex Architecture. All rights reserved. Meticulous structural integrity.
        </div>
      </footer>

    </div>
  )
}

export default CaseStudyTemplate
