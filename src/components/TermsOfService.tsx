import { Link } from 'react-router-dom'
import { ArrowLeft, Scale, Edit3, ShieldAlert } from 'lucide-react'

const TermsOfService = () => {
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
            <Scale size={14} /> Legal Agreement
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight font-heading leading-tight">
            Terms of <span className="text-gold italic font-light">Service</span>
          </h1>
          <p className="text-white/60 font-sans text-lg max-w-2xl leading-relaxed">
            Effective Date: May 20, 2026. Please read these terms carefully before engaging our digital portal or submitting architectural concepts.
          </p>
        </div>

        <div className="space-y-12 border-t border-white/10 pt-12">
          {/* Section 1 */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold font-heading text-white flex items-center gap-3">
              <span className="text-gold">01.</span> Engagement Scope
            </h2>
            <p className="text-white/70 leading-relaxed font-sans">
              All digital materials, estimators, and blueprint previews provided on this site serve as references for custom home concept design and consultation scheduling. Official engineering, planning permits, and structural commitments are subject to separate formal bilateral construction agreements.
            </p>
          </section>

          {/* Section 2 */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold font-heading text-white flex items-center gap-3">
              <span className="text-gold">02.</span> Intellectual Property & Copyright
            </h2>
            <p className="text-white/70 leading-relaxed font-sans flex items-start gap-3">
              <Edit3 className="text-gold shrink-0 mt-1" size={16} />
              <span>
                All designs, animations, and interactive blueprint panels showcased on this site are the sole intellectual property of Apex Architecture. Copying layout formats, custom structural details, or styling for commercial copycat projects is strictly prohibited.
              </span>
            </p>
          </section>

          {/* Section 3 */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold font-heading text-white flex items-center gap-3">
              <span className="text-gold">03.</span> Client Responsibilities
            </h2>
            <p className="text-white/70 leading-relaxed font-sans">
              By submitting details via our contact board, you confirm that all spatial locations, land survey statistics, and topography dimensions provided are true and within your legitimate ownership or representation rights.
            </p>
          </section>

          {/* Section 4 */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold font-heading text-white flex items-center gap-3">
              <span className="text-gold">04.</span> Limitation of Liability
            </h2>
            <p className="text-white/70 leading-relaxed font-sans flex items-start gap-3">
              <ShieldAlert className="text-gold shrink-0 mt-1" size={16} />
              <span>
                Apex Architecture is not responsible for any digital site downtime, form transmission errors, or delays in consultation follow-ups. Design approximations shown in blueprint previews are conceptual only.
              </span>
            </p>
          </section>
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

export default TermsOfService
