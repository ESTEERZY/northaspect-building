import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, User, Mail, MapPin, DollarSign, MessageSquare, CheckCircle2, ShieldCheck, Phone, Wrench } from 'lucide-react';
import { clientConfig, budgetTiers } from '../data/clientConfig';
import { serviceTaxonomy } from '../data/servicesData';
import { qualifyLeadGeography } from '../data/serviceAreas';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceCategory: '',
    location: '',
    budget: '',
    message: '',
  });

  const [locationFeedback, setLocationFeedback] = useState<{
    isQualified: boolean;
    message: string;
  } | null>(null);

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleLocationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setFormData((prev) => ({ ...prev, location: val }));
    if (val.trim().length >= 3) {
      const result = qualifyLeadGeography(val);
      setLocationFeedback({
        isQualified: result.isQualified,
        message: result.message,
      });
    } else {
      setLocationFeedback(null);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        serviceCategory: '',
        location: '',
        budget: '',
        message: '',
      });
      setLocationFeedback(null);
    }, 8000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-24 bg-charcoal border-t border-white/10 relative overflow-hidden">
      <div id="book-a-call" className="absolute -top-24 left-0"></div>
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
              Direct Lead Intake &bull; Consultation
            </div>

            <h2 className="text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
              Request a Quote From <span className="text-gold">{clientConfig.contactName}</span>
            </h2>

            <p className="text-base lg:text-lg text-white/70 font-normal leading-relaxed">
              Specializing in custom residential additions, renovations, structural alterations, remedial repairs, and outdoor carpentry projects ranging from <strong>{clientConfig.targetBudgetLabel}</strong>.
            </p>

            {/* Direct Contact Cards */}
            <div className="space-y-3 pt-2">
              <a
                href={`tel:${clientConfig.phoneRaw}`}
                className="flex items-center gap-3 p-3.5 rounded-[2px] bg-white/[0.03] border border-white/10 hover:border-gold transition-colors"
              >
                <div className="w-10 h-10 bg-gold/10 border border-gold/30 text-gold flex items-center justify-center rounded-[2px]">
                  <Phone size={18} />
                </div>
                <div>
                  <div className="text-[10px] font-bold text-white/50 uppercase tracking-widest">Call Directly</div>
                  <div className="text-sm font-black text-white">{clientConfig.phone}</div>
                </div>
              </a>

              <a
                href={`mailto:${clientConfig.email}`}
                className="flex items-center gap-3 p-3.5 rounded-[2px] bg-white/[0.03] border border-white/10 hover:border-gold transition-colors"
              >
                <div className="w-10 h-10 bg-gold/10 border border-gold/30 text-gold flex items-center justify-center rounded-[2px]">
                  <Mail size={18} />
                </div>
                <div>
                  <div className="text-[10px] font-bold text-white/50 uppercase tracking-widest">Email Inquiry</div>
                  <div className="text-xs font-bold text-gold break-all">{clientConfig.email}</div>
                </div>
              </a>
            </div>

            {/* Process Steps */}
            <div className="space-y-4 pt-2">
              {[
                { num: '01', label: 'Service & Budget Intake', desc: 'Select your service category and target project budget.' },
                { num: '02', label: 'Geographical Qualification', desc: 'Verified lead routing across Northern Beaches & North Shore postcodes.' },
                { num: '03', label: 'Consultation & Site Scope', desc: 'Direct consultation with Chris to plan your structural build.' },
              ].map((item) => (
                <div key={item.num} className="flex items-start gap-4 p-3 rounded-[2px] bg-white/[0.02] border border-white/5">
                  <div className="flex-shrink-0 w-8 h-8 bg-gold/10 border border-gold/20 text-gold flex items-center justify-center rounded-[2px] text-xs font-black">
                    {item.num}
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white tracking-wide">{item.label}</p>
                    <p className="text-[11px] text-white/60 font-medium leading-relaxed">{item.desc}</p>
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
              <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight mb-2">Request a Quote / Intake</h3>
              <p className="text-sm text-white/60 font-normal">Select your service, suburb, and budget to route your project directly to Chris.</p>
            </div>

            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 px-6 text-center space-y-4 bg-gold/10 border border-gold/30 rounded-[2px]"
              >
                <CheckCircle2 className="w-12 h-12 text-gold mx-auto" />
                <h4 className="text-xl font-black text-white tracking-tight">Project Qualification Submitted</h4>
                <p className="text-sm text-white/70 max-w-md mx-auto leading-relaxed">
                  Thank you for submitting your project specifications. <strong>Chris ({clientConfig.businessName})</strong> will review your details and contact you shortly at <strong>{clientConfig.email}</strong> or <strong>{clientConfig.phone}</strong>.
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
                {/* Row 1: Name & Phone */}
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
                      placeholder="e.g. Sarah Jenkins"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-[11px] font-extrabold uppercase tracking-widest text-white/70 mb-2 flex items-center gap-1.5">
                      <Phone className="w-3.5 h-3.5 text-gold" /> Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/[0.04] text-white text-sm border border-white/10 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30 transition-all rounded-[2px] placeholder:text-white/30"
                      placeholder="e.g. 0414 000 000"
                    />
                  </div>
                </div>

                {/* Email Address */}
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
                    placeholder="sarah@example.com"
                  />
                </div>

                {/* Service Category Selection */}
                <div>
                  <label htmlFor="serviceCategory" className="block text-[11px] font-extrabold uppercase tracking-widest text-white/70 mb-2 flex items-center gap-1.5">
                    <Wrench className="w-3.5 h-3.5 text-gold" /> Service Required *
                  </label>
                  <select
                    id="serviceCategory"
                    name="serviceCategory"
                    value={formData.serviceCategory}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/[0.04] text-white text-sm border border-white/10 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30 transition-all rounded-[2px] cursor-pointer"
                  >
                    <option value="" disabled className="bg-charcoal text-white/50">Select primary service capability</option>
                    {serviceTaxonomy.map((cat) => (
                      <optgroup key={cat.id} label={cat.category} className="bg-charcoal text-gold font-bold">
                        {cat.capabilities.map((cap) => (
                          <option key={cap} value={cap} className="bg-charcoal text-white font-normal pl-4">
                            {cap}
                          </option>
                        ))}
                      </optgroup>
                    ))}
                  </select>
                </div>

                {/* Row 2: Location & Target Budget */}
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="location" className="block text-[11px] font-extrabold uppercase tracking-widest text-white/70 mb-2 flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-gold" /> Suburb / Postcode *
                    </label>
                    <input
                      type="text"
                      id="location"
                      name="location"
                      value={formData.location}
                      onChange={handleLocationChange}
                      required
                      className="w-full px-4 py-3 bg-white/[0.04] text-white text-sm border border-white/10 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30 transition-all rounded-[2px] placeholder:text-white/30"
                      placeholder="e.g. Manly 2095, Mosman 2088"
                    />
                    {locationFeedback && (
                      <div className="mt-1.5 text-[10px] font-bold text-gold flex items-center gap-1">
                        <CheckCircle2 size={12} className="text-gold" />
                        <span>{locationFeedback.message}</span>
                      </div>
                    )}
                  </div>

                  <div>
                    <label htmlFor="budget" className="block text-[11px] font-extrabold uppercase tracking-widest text-white/70 mb-2 flex items-center gap-1.5">
                      <DollarSign className="w-3.5 h-3.5 text-gold" /> Target Project Budget *
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
                      {budgetTiers.map((tier) => (
                        <option key={tier.id} value={tier.id} className="bg-charcoal text-white">
                          {tier.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-[11px] font-extrabold uppercase tracking-widest text-white/70 mb-2 flex items-center gap-1.5">
                    <MessageSquare className="w-3.5 h-3.5 text-gold" /> Project Scope &amp; Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={3}
                    className="w-full px-4 py-3 bg-white/[0.04] text-white text-sm border border-white/10 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30 transition-all resize-none rounded-[2px] placeholder:text-white/30"
                    placeholder="Describe your site layout, timber/material preferences, structural modifications..."
                  />
                </div>

                {/* Submit CTA */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="group w-full bg-gold border border-gold text-charcoal px-6 py-4 text-xs font-black tracking-[0.15em] uppercase hover:bg-white hover:border-white transition-all duration-300 inline-flex items-center justify-center gap-2 rounded-[2px] shadow-[0_0_20px_rgba(197,160,89,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]"
                  >
                    <span>Submit Project Intake</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>

                {/* Privacy Guarantee */}
                <div className="pt-3 border-t border-white/10 flex items-center justify-center gap-2 text-[10px] font-bold text-white/50 uppercase tracking-widest text-center">
                  <ShieldCheck className="w-3.5 h-3.5 text-gold flex-shrink-0" />
                  Direct Consultation with Chris • NDA Protected • Confidential
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
