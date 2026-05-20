import { Link } from 'react-router-dom'
import { ArrowLeft, Shield, Lock, Eye } from 'lucide-react'

const PrivacyPolicy = () => {
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
            <Shield size={14} /> Security & Trust
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight font-heading leading-tight">
            Privacy <span className="text-gold italic font-light">Policy</span>
          </h1>
          <p className="text-white/60 font-sans text-lg max-w-2xl leading-relaxed">
            Effective Date: May 20, 2026. Your privacy is paramount. This policy outlines how Apex Architecture collects, uses, and safeguards your personal information and spatial concepts.
          </p>
        </div>

        <div className="space-y-12 border-t border-white/10 pt-12">
          {/* Section 1 */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold font-heading text-white flex items-center gap-3">
              <span className="text-gold">01.</span> Information Collection
            </h2>
            <p className="text-white/70 leading-relaxed font-sans">
              We collect information you provide directly to us when requesting a consultation, including your full name, email address, estimated project budget, location, and details about your architectural vision.
            </p>
          </section>

          {/* Section 2 */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold font-heading text-white flex items-center gap-3">
              <span className="text-gold">02.</span> Use of Data & Spatial Concepts
            </h2>
            <p className="text-white/70 leading-relaxed font-sans">
              Any details regarding your prospective land, budget limits, or architectural preferences are strictly used to formulate initial design pitches and establish direct communications. We never monetize, share, or publish project details without explicit signed authorization from the client.
            </p>
          </section>

          {/* Section 3 */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold font-heading text-white flex items-center gap-3">
              <span className="text-gold">03.</span> Advanced Encryption & Discretion
            </h2>
            <p className="text-white/70 leading-relaxed font-sans flex items-start gap-3">
              <Lock className="text-gold shrink-0 mt-1" size={16} />
              <span>
                All communications and project files are encrypted in transit and at rest. We implement rigorous standard firewalls to shield your property blueprints, CAD drafts, and layout preferences from public cataloging.
              </span>
            </p>
          </section>

          {/* Section 4 */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold font-heading text-white flex items-center gap-3">
              <span className="text-gold">04.</span> Cookies & Analytics
            </h2>
            <p className="text-white/70 leading-relaxed font-sans flex items-start gap-3">
              <Eye className="text-gold shrink-0 mt-1" size={16} />
              <span>
                Our website uses minimal analytics tools to optimize page performance and load times. We do not run persistent cross-site tracking cookies or share analytical details with external marketing corporations.
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

export default PrivacyPolicy
