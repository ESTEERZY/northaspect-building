import { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, CheckCircle2, ThumbsUp, PlusCircle, X, Quote, MapPin, Award } from 'lucide-react';
import { VERIFIED_TESTIMONIALS, Testimonial } from '../data/testimonialsData';
import { clientConfig } from '../data/clientConfig';

const CATEGORIES = [
  'All',
  'Home Extension',
  'Water & Damp Remedial',
  'Internal Alterations & Open Plan Living',
  'Bathroom Renovation & Remedial',
] as const;

const Reviews = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>(VERIFIED_TESTIMONIALS);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [likedReviews, setLikedReviews] = useState<Record<string, boolean>>({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const averageRating = (
    testimonials.reduce((acc, r) => acc + r.rating, 0) / (testimonials.length || 1)
  ).toFixed(1);

  const [formData, setFormData] = useState({
    author: '',
    location: '',
    projectType: 'Home Extension',
    rating: 5,
    quote: '',
    badge: 'Verified Client Review',
  });

  const handleLike = (id: string) => {
    if (likedReviews[id]) return;
    setLikedReviews((prev) => ({ ...prev, [id]: true }));
    setToastMessage('Thank you for flagging this review as helpful!');
    setTimeout(() => setToastMessage(null), 3000);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.author || !formData.quote) return;

    const initials = formData.author
      .split('&')[0]
      .trim()
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);

    const newTestimonial: Testimonial = {
      id: `testimonial-${Date.now()}`,
      author: formData.author,
      initials: initials || 'VC',
      location: formData.location || 'Northern Beaches, Sydney NSW',
      relationshipDuration: 'Verified Client',
      projectType: formData.projectType,
      rating: Number(formData.rating),
      quote: formData.quote,
      badge: formData.badge || 'Verified Client Review',
      verified: true,
    };

    setTestimonials([newTestimonial, ...testimonials]);
    setIsModalOpen(false);
    setFormData({
      author: '',
      location: '',
      projectType: 'Home Extension',
      rating: 5,
      quote: '',
      badge: 'Verified Client Review',
    });

    setToastMessage('Thank you! Your verified client review has been recorded.');
    setTimeout(() => setToastMessage(null), 4000);
  };

  const filteredTestimonials = testimonials.filter(
    (t) => selectedCategory === 'All' || t.projectType === selectedCategory
  );

  // Schema.org JSON-LD Review & AggregateRating data
  const jsonLdData = {
    '@context': 'https://schema.org',
    '@type': 'GeneralContractor',
    name: clientConfig.businessName,
    telephone: clientConfig.phone,
    email: clientConfig.email,
    areaServed: clientConfig.serviceRegions,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: averageRating,
      reviewCount: testimonials.length,
      bestRating: '5',
      worstRating: '1',
    },
    review: testimonials.map((t) => ({
      '@type': 'Review',
      author: {
        '@type': 'Person',
        name: t.author,
      },
      reviewRating: {
        '@type': 'Rating',
        ratingValue: t.rating,
        bestRating: '5',
      },
      reviewBody: t.quote,
      name: t.badge,
    })),
  };

  return (
    <section id="reviews" className="py-24 bg-charcoal text-white relative border-t border-white/10 overflow-hidden">
      {/* JSON-LD Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
      />

      {/* Subtle background glow */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-gold/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="container mx-auto px-6 lg:px-12 max-w-7xl relative z-10">
        
        {/* Toast Notification */}
        {toastMessage && (
          <div className="mb-8 p-4 bg-gold/10 border border-gold/30 text-gold text-xs font-bold tracking-wide rounded-[2px] flex items-center justify-between animate-fade-in">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-gold" />
              <span>{toastMessage}</span>
            </div>
            <button onClick={() => setToastMessage(null)} className="text-gold/60 hover:text-white">
              <X className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 px-3.5 py-1.5 rounded-full text-gold text-[11px] font-black tracking-[0.2em] uppercase mb-4">
              <Award className="w-3.5 h-3.5" />
              Verified Client Testimonials &bull; {clientConfig.contactName}
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-white">
              Client Feedback &amp; <span className="text-gold">Craftsmanship Reviews</span>
            </h2>
          </div>

          <div className="flex items-center gap-4 flex-wrap">
            <div className="flex items-center gap-3 bg-white/[0.04] border border-white/10 px-4 py-2.5 rounded-[2px]">
              <span className="text-xl font-black text-white">{averageRating}</span>
              <div className="flex gap-1 text-gold">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>
              <span className="text-[11px] text-gold uppercase tracking-widest font-black border-l border-white/10 pl-3">
                100% 5-Star Verified
              </span>
            </div>

            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-gold text-charcoal border border-gold hover:bg-white transition-all duration-300 px-5 py-2.5 text-xs font-black tracking-wider uppercase rounded-[2px] inline-flex items-center gap-2 shadow-[0_0_15px_rgba(197,160,89,0.3)]"
            >
              <PlusCircle className="w-4 h-4" />
              <span>Submit Review</span>
            </button>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center gap-3 overflow-x-auto scrollbar-none pb-4 mb-10 border-b border-white/10">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 text-xs font-black uppercase tracking-wider transition-all whitespace-nowrap rounded-[2px] ${
                selectedCategory === cat
                  ? 'bg-gold text-charcoal shadow-[0_0_15px_rgba(197,160,89,0.3)]'
                  : 'text-white/70 hover:text-white hover:bg-white/5 border border-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTestimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-b from-white/[0.05] via-white/[0.02] to-transparent border border-white/10 hover:border-gold/50 p-8 rounded-[2px] flex flex-col justify-between transition-all duration-300 group relative shadow-lg"
            >
              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Quote Mark Watermark */}
              <Quote className="w-12 h-12 text-gold/10 absolute top-6 right-6 pointer-events-none" strokeWidth={1} />

              <div>
                {/* 5-Star Rating & Badge */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-1 text-gold">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-4 h-4 fill-gold text-gold" />
                    ))}
                  </div>
                  <span className="text-[10px] font-extrabold text-gold bg-gold/10 px-2 py-0.5 border border-gold/20 rounded-[2px] truncate">
                    {testimonial.badge}
                  </span>
                </div>

                {/* Testimonial Quote */}
                <p className="text-sm md:text-base text-white/85 leading-relaxed font-normal mb-6 italic">
                  "{testimonial.quote}"
                </p>
              </div>

              {/* Author Footer */}
              <div className="pt-5 border-t border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {/* Clean Monogram Avatar */}
                  <div className="w-10 h-10 bg-gradient-to-br from-gold/30 via-gold/10 to-transparent border border-gold/40 rounded-full flex items-center justify-center text-gold font-black text-xs tracking-wider shadow-inner flex-shrink-0">
                    {testimonial.initials}
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5 text-sm font-black text-white">
                      <span>{testimonial.author}</span>
                      <CheckCircle2 className="w-3.5 h-3.5 text-gold flex-shrink-0" />
                    </div>
                    <div className="text-[11px] text-white/60 font-medium flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-gold/70 flex-shrink-0" />
                      <span>{testimonial.location}{testimonial.postcode ? ` (${testimonial.postcode})` : ''}</span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => handleLike(testimonial.id)}
                  className={`p-2 rounded-[2px] transition-colors ${
                    likedReviews[testimonial.id]
                      ? 'text-gold bg-gold/10 border border-gold/30'
                      : 'text-white/40 hover:text-gold hover:bg-white/5'
                  }`}
                  title="Mark review as helpful"
                >
                  <ThumbsUp className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Write a Review Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-charcoal border border-gold/30 p-8 max-w-lg w-full rounded-[2px] relative animate-fade-in max-h-[90vh] overflow-y-auto shadow-2xl">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-5 right-5 text-white/40 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-[10px] font-black text-gold tracking-widest uppercase mb-1">
              Client Feedback &bull; Aspect North Building
            </div>
            <h3 className="text-2xl font-black text-white mb-6">Submit Verified Review</h3>

            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div>
                <label className="block text-[11px] uppercase tracking-wider text-white/70 mb-2 font-bold">
                  Star Rating *
                </label>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setFormData({ ...formData, rating: star })}
                      className="p-1 focus:outline-none"
                    >
                      <Star
                        className={`w-6 h-6 ${
                          star <= formData.rating ? 'fill-gold text-gold' : 'text-white/20'
                        }`}
                      />
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-white/70 mb-1 font-bold">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. David & Sarah"
                    value={formData.author}
                    onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                    className="w-full bg-white/[0.04] border border-white/10 px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-gold rounded-[2px]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-white/70 mb-1 font-bold">
                    Location / Suburb *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Manly, NSW 2095"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full bg-white/[0.04] border border-white/10 px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-gold rounded-[2px]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider text-white/70 mb-1 font-bold">
                  Project Type *
                </label>
                <select
                  value={formData.projectType}
                  onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                  className="w-full bg-charcoal border border-white/10 px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-gold rounded-[2px] cursor-pointer"
                >
                  {CATEGORIES.filter((c) => c !== 'All').map((cat) => (
                    <option key={cat} value={cat} className="bg-charcoal text-white">
                      {cat}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider text-white/70 mb-1 font-bold">
                  Your Review &amp; Experience *
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Share details regarding Chris's craftsmanship, communication, and project delivery..."
                  value={formData.quote}
                  onChange={(e) => setFormData({ ...formData, quote: e.target.value })}
                  className="w-full bg-white/[0.04] border border-white/10 px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-gold rounded-[2px] resize-none"
                />
              </div>

              <div className="pt-3 flex items-center justify-end gap-3 border-t border-white/10">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 text-xs text-white/50 hover:text-white font-bold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-gold text-charcoal px-6 py-2.5 text-xs font-black uppercase tracking-wider hover:bg-white transition-colors rounded-[2px]"
                >
                  Submit Verified Review
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default Reviews;
