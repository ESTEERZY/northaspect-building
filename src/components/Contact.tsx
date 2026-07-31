import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, User, Mail, MapPin, DollarSign, MessageSquare, CheckCircle2, ShieldCheck } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    location: '',
    budget: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        location: '',
        budget: '',
        message: '',
      });
    }, 6000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-24 bg-charcoal border-t border-white/10 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-gold/5 via-charcoal to-charcoal pointer-events-none"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2 space-y-8"
          >
            <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 px-3.5 py-1.5 rounded-full text-gold text-[11px] font-black tracking-[0.2em] uppercase">
              <ShieldCheck className="w-3.5 h-3.5" />
              Private Consultation
            </div>

            <h2 className="text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
              Begin Your <span className="text-gold">Journey.</span>
            </h2>

            <p className="text-base lg:text-lg text-white/70 font-normal leading-relaxed">
              Tell us about your architectural vision. Our directors will review your parameters and respond within one business day.
            </p>

            {/* Process Steps */}
            <div className="space-y-5 pt-4">
              {[
                { num: '01', label: 'Initial Consultation', desc: 'Discuss site context, timeline, and preliminary investment range.' },
                { num: '02', label: 'Feasibility & Design', desc: 'Custom architectural drafting and site analysis.' },
                { num: '03', label: 'Fixed Contract Build', desc: 'Precision construction with real-time digital twin tracking.' },
              ].map((item) => (
                <div key={item.num} className="flex items-start gap-4 p-3.5 rounded-[2px] bg-white/[0.02] border border-white/5 hover:border-gold/30 transition-colors">
                  <div className="flex-shrink-0 w-10 h-10 bg-gold/10 border border-gold/20 text-gold flex items-center justify-center rounded-[2px] text-xs font-black">
                    {item.num}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white tracking-wide">{item.label}</p>
                    <p className="text-xs text-white/60 font-medium leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-3 bg-gradient-to-br from-white/[0.06] to-white/[0.02] p-8 md:p-10 border border-white/10 shadow-2xl rounded-[2px] relative overflow-hidden backdrop-blur-xl"
          >
            {/* Top Accent Line */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent" />

            <div className="mb-8 border-b border-white/10 pb-6">
              <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight mb-2">Request a Consultation</h3>
              <p className="text-sm text-white/60 font-normal">Share your project specifications for a confidential estimate.</p>
            </div>

            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 px-6 text-center space-y-4 bg-gold/10 border border-gold/30 rounded-[2px]"
              >
                <CheckCircle2 className="w-12 h-12 text-gold mx-auto" />
                <h4 className="text-xl font-black text-white tracking-tight">Consultation Request Received</h4>
                <p className="text-sm text-white/70 max-w-md mx-auto leading-relaxed">
                  Thank you for reaching out. One of our senior directors will examine your project details and contact you shortly.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-4 text-xs font-bold text-gold hover:text-white uppercase tracking-widest transition-colors"
                >
                  Submit Another Inquiry
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Row 1: Name & Email */}
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-[11px] font-extrabold uppercase tracking-widest text-white/70 mb-2 flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5 text-gold" /> Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/[0.04] text-white text-sm border border-white/10 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30 transition-all rounded-[2px] placeholder:text-white/30"
                      placeholder="Jane Smith"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-[11px] font-extrabold uppercase tracking-widest text-white/70 mb-2 flex items-center gap-1.5">
                      <Mail className="w-3.5 h-3.5 text-gold" /> Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/[0.04] text-white text-sm border border-white/10 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30 transition-all rounded-[2px] placeholder:text-white/30"
                      placeholder="jane@example.com"
                    />
                  </div>
                </div>

                {/* Row 2: Location & Budget */}
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="location" className="block text-[11px] font-extrabold uppercase tracking-widest text-white/70 mb-2 flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-gold" /> Project Location / Address *
                    </label>
                    <input
                      type="text"
                      id="location"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/[0.04] text-white text-sm border border-white/10 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30 transition-all rounded-[2px] placeholder:text-white/30"
                      placeholder="e.g. 124 Ocean Drive, Sorrento VIC"
                    />
                  </div>

                  <div>
                    <label htmlFor="budget" className="block text-[11px] font-extrabold uppercase tracking-widest text-white/70 mb-2 flex items-center gap-1.5">
                      <DollarSign className="w-3.5 h-3.5 text-gold" /> Estimated Budget *
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/[0.04] text-white text-sm border border-white/10 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30 transition-all rounded-[2px] cursor-pointer"
                    >
                      <option value="" disabled className="bg-charcoal text-white/50">Select investment range</option>
                      <option value="500k_1m" className="bg-charcoal text-white">$500k – $1M</option>
                      <option value="1m_2m" className="bg-charcoal text-white">$1M – $2M</option>
                      <option value="2m_5m" className="bg-charcoal text-white">$2M – $5M</option>
                      <option value="over_5m" className="bg-charcoal text-white">$5M+</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-[11px] font-extrabold uppercase tracking-widest text-white/70 mb-2 flex items-center gap-1.5">
                    <MessageSquare className="w-3.5 h-3.5 text-gold" /> Project Vision & Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 bg-white/[0.04] text-white text-sm border border-white/10 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30 transition-all resize-none rounded-[2px] placeholder:text-white/30"
                    placeholder="Describe your architectural style, site constraints, preferred timeline..."
                  />
                </div>

                {/* Submit CTA */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="group w-full bg-gold border border-gold text-charcoal px-6 py-4 text-xs font-black tracking-[0.15em] uppercase hover:bg-white hover:border-white transition-all duration-300 inline-flex items-center justify-center gap-2 rounded-[2px] shadow-[0_0_20px_rgba(197,160,89,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]"
                  >
                    <span>Request Consultation</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>

                {/* Privacy Guarantee */}
                <div className="pt-3 border-t border-white/10 flex items-center justify-center gap-2 text-[10px] font-bold text-white/50 uppercase tracking-widest text-center">
                  <ShieldCheck className="w-3.5 h-3.5 text-gold flex-shrink-0" />
                  Strictly Confidential • NDA Protected • No Spam Guarantee
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
