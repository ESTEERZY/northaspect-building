import { useState } from 'react'
import { Star, Quote, CheckCircle2, ThumbsUp, PlusCircle, X, ShieldCheck, Award, Building, Filter } from 'lucide-react'

export interface Review {
  id: string
  author: string
  role: string
  location: string
  category: 'Luxury Residential' | 'Commercial Development' | 'Custom Architectural' | 'Renovations & Extensions'
  rating: number
  date: string
  title: string
  text: string
  projectImage?: string
  verified: boolean
  helpfulCount: number
}

const INITIAL_REVIEWS: Review[] = [
  {
    id: 'rev-1',
    author: 'Sarah & Mark Johnson',
    role: 'Homeowner',
    location: 'Toorak, VIC',
    category: 'Luxury Residential',
    rating: 5,
    date: 'July 2026',
    title: 'Transformed our coastal vision into a masterpiece',
    text: 'Aus Builds executed our custom multi-level waterfront residence with flawless craftsmanship. Their transparency during cost estimation and structural phase gave us total peace of mind. Every detail—from the polished concrete to timber joinery—exceeded our expectations.',
    projectImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    verified: true,
    helpfulCount: 24,
  },
  {
    id: 'rev-2',
    author: 'Robert Sterling',
    role: 'Managing Director',
    location: 'Barangaroo, NSW',
    category: 'Commercial Development',
    rating: 5,
    date: 'June 2026',
    title: 'On-time commercial delivery with exceptional rigor',
    text: 'Delivering a 4,000 sqm corporate HQ in Sydney CBD requires strict compliance and logistics management. The team at Aus Builds completed the structural build 2 weeks ahead of schedule without a single safety compromise.',
    projectImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
    verified: true,
    helpfulCount: 19,
  },
  {
    id: 'rev-3',
    author: 'Dr. Abraham Schlegel',
    role: 'Property Investor',
    location: 'Mosman, NSW',
    category: 'Custom Architectural',
    rating: 5,
    date: 'May 2026',
    title: 'Architectural precision at the highest standard',
    text: 'Working with complex cantilever designs and acoustic glazing is usually nerve-wracking. Aus Builds coordinated perfectly with our lead architect, turning ambitious schematics into structural perfection. Highly recommended for bespoke builds.',
    projectImage: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80',
    verified: true,
    helpfulCount: 31,
  },
  {
    id: 'rev-4',
    author: 'Elena & Lucas Vance',
    role: 'Homeowners',
    location: 'Paddington, QLD',
    category: 'Renovations & Extensions',
    rating: 5,
    date: 'April 2026',
    title: 'Seamless heritage renovation with modern luxury',
    text: 'Preserving a heritage facade while integrating a modern glass-encased rear wing seemed daunting. The craftsmanship of Aus Builds preserved historical character while giving us state-of-the-art living spaces.',
    projectImage: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80',
    verified: true,
    helpfulCount: 15,
  },
  {
    id: 'rev-5',
    author: 'Michael Brown',
    role: 'Development Partner',
    location: 'Gold Coast, QLD',
    category: 'Commercial Development',
    rating: 5,
    date: 'March 2026',
    title: 'First-class project management and budget control',
    text: 'Their transparency and digital twin tracking kept our board informed at every key milestone. The financial reporting was exact, and the finished luxury boutique hotel speaks for itself.',
    projectImage: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80',
    verified: true,
    helpfulCount: 12,
  },
  {
    id: 'rev-6',
    author: 'Victoria Vance',
    role: 'Estate Owner',
    location: 'Peppermint Grove, WA',
    category: 'Luxury Residential',
    rating: 5,
    date: 'January 2026',
    title: 'World-class luxury build experience from start to finish',
    text: 'From site excavation through to interior finishes, the communication was stellar. They respected our timeline and crafted an extraordinary family sanctuary that will last generations.',
    projectImage: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=800&q=80',
    verified: true,
    helpfulCount: 28,
  },
]

const CATEGORIES = [
  'All',
  'Luxury Residential',
  'Commercial Development',
  'Custom Architectural',
  'Renovations & Extensions',
] as const

const Reviews = () => {
  const [reviews, setReviews] = useState<Review[]>(INITIAL_REVIEWS)
  const [selectedCategory, setSelectedCategory] = useState<string>('All')
  const [sortBy, setSortBy] = useState<'highest' | 'recent'>('highest')
  const [likedReviews, setLikedReviews] = useState<Record<string, boolean>>({})
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [toastMessage, setToastMessage] = useState<string | null>(null)

  // Form State for Write a Review modal
  const [formData, setFormData] = useState({
    author: '',
    role: 'Homeowner',
    location: '',
    category: 'Luxury Residential' as Review['category'],
    rating: 5,
    title: '',
    text: '',
  })

  const handleLike = (id: string) => {
    if (likedReviews[id]) return
    setLikedReviews((prev) => ({ ...prev, [id]: true }))
    setReviews((prev) =>
      prev.map((r) => (r.id === id ? { ...r, helpfulCount: r.helpfulCount + 1 } : r))
    )
  }

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.author || !formData.title || !formData.text) return

    const newReview: Review = {
      id: `rev-${Date.now()}`,
      author: formData.author,
      role: formData.role || 'Verified Client',
      location: formData.location || 'Australia',
      category: formData.category,
      rating: Number(formData.rating),
      date: 'Just now',
      title: formData.title,
      text: formData.text,
      verified: true,
      helpfulCount: 1,
    }

    setReviews([newReview, ...reviews])
    setIsModalOpen(false)
    setFormData({
      author: '',
      role: 'Homeowner',
      location: '',
      category: 'Luxury Residential',
      rating: 5,
      title: '',
      text: '',
    })
    
    setToastMessage('Thank you! Your review has been successfully submitted and added.')
    setTimeout(() => setToastMessage(null), 5000)
  }

  const filteredReviews = reviews
    .filter((r) => selectedCategory === 'All' || r.category === selectedCategory)
    .sort((a, b) => {
      if (sortBy === 'highest') return b.rating - a.rating
      return 0 // keep order
    })

  return (
    <section id="reviews" className="py-24 bg-charcoal relative overflow-hidden border-t border-white/10">
      {/* Background Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/5 blur-[140px] pointer-events-none rounded-full" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Toast Notification */}
        {toastMessage && (
          <div className="mb-8 p-4 bg-gold/20 border border-gold text-gold text-sm font-semibold rounded-[2px] flex items-center justify-between animate-fade-in">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
              <span>{toastMessage}</span>
            </div>
            <button onClick={() => setToastMessage(null)} className="text-gold hover:text-white">
              <X className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 px-3 py-1 rounded-full text-gold text-xs font-black tracking-widest uppercase">
              <Award className="w-3.5 h-3.5" />
              Client Excellence &amp; Testimonials
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
              Trusted by Australia's Most <span className="text-gold">Discerning</span> Property Owners
            </h2>
            <p className="text-lg text-white/70 font-medium leading-relaxed">
              Read verified feedback from homeowners, corporate clients, and property developers who entrusted us with their landmark projects.
            </p>
          </div>

          {/* Action & Stats summary */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-[2px]">
            <div>
              <div className="flex items-center gap-3">
                <span className="text-4xl font-black text-white tracking-tight">4.9</span>
                <div className="flex gap-1 text-gold">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                  ))}
                </div>
              </div>
              <div className="text-xs font-extrabold uppercase tracking-widest text-white/60 mt-1">
                Based on 128+ Verified Reviews
              </div>
            </div>
            <div className="h-10 w-px bg-white/10 hidden sm:block" />
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-gold text-charcoal px-6 py-3 text-xs font-black tracking-widest uppercase hover:bg-white transition-all duration-300 inline-flex items-center gap-2 rounded-[2px] shadow-[0_0_15px_rgba(197,160,89,0.2)]"
            >
              <PlusCircle className="w-4 h-4" />
              Write a Review
            </button>
          </div>
        </div>

        {/* Verification Badges Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 border-y border-white/10 py-6">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-8 h-8 text-gold flex-shrink-0" />
            <div>
              <div className="text-sm font-black text-white">Master Builders</div>
              <div className="text-xs text-white/50">Verified Member MBA</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Star className="w-8 h-8 text-gold flex-shrink-0 fill-gold/20" />
            <div>
              <div className="text-sm font-black text-white">Google Reviews</div>
              <div className="text-xs text-white/50">4.9 ★★★★★ Rating</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Building className="w-8 h-8 text-gold flex-shrink-0" />
            <div>
              <div className="text-sm font-black text-white">Houzz Design 2025</div>
              <div className="text-xs text-white/50">Best of Service Award</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Award className="w-8 h-8 text-gold flex-shrink-0" />
            <div>
              <div className="text-sm font-black text-white">100% Fixed Price</div>
              <div className="text-xs text-white/50">Guaranteed Contract</div>
            </div>
          </div>
        </div>

        {/* Filters & Sorting Bar */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-10 pb-6">
          {/* Category Pills */}
          <div className="flex items-center gap-2 flex-wrap">
            <div className="text-xs font-black uppercase text-white/50 flex items-center gap-1.5 mr-2">
              <Filter className="w-3.5 h-3.5 text-gold" /> Filter:
            </div>
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 text-xs font-extrabold uppercase tracking-wider rounded-[2px] transition-all duration-300 border ${
                  selectedCategory === cat
                    ? 'bg-gold text-charcoal border-gold shadow-[0_0_12px_rgba(197,160,89,0.3)]'
                    : 'bg-white/5 text-white/70 border-white/10 hover:border-gold/40 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Sort Selector */}
          <div className="flex items-center gap-2 self-end md:self-auto">
            <span className="text-xs font-black uppercase text-white/50">Sort:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as 'highest' | 'recent')}
              className="bg-white/5 border border-white/10 text-white text-xs font-bold uppercase tracking-wider px-3 py-2 rounded-[2px] focus:outline-none focus:border-gold"
            >
              <option value="highest" className="bg-charcoal text-white">Highest Rated</option>
              <option value="recent" className="bg-charcoal text-white">Most Recent</option>
            </select>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredReviews.map((review) => (
            <div
              key={review.id}
              className="bg-white/5 backdrop-blur-md border border-white/10 p-8 flex flex-col justify-between hover:border-gold/40 transition-all duration-500 rounded-[2px] group relative"
            >
              {/* Top Meta & Star Rating */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-gold">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                    ))}
                  </div>
                  <span className="text-xs font-extrabold tracking-widest text-gold uppercase bg-gold/10 px-2.5 py-0.5 rounded-[2px] border border-gold/20">
                    {review.category}
                  </span>
                </div>

                {/* Title & Review Text */}
                <h3 className="text-xl font-bold text-white mb-3 tracking-tight group-hover:text-gold transition-colors duration-300">
                  "{review.title}"
                </h3>
                <p className="text-white/70 text-sm leading-relaxed mb-6 font-medium">
                  {review.text}
                </p>
              </div>

              {/* Bottom Details & Author */}
              <div className="pt-6 border-t border-white/10 space-y-4">
                {/* Optional Project Thumbnail */}
                {review.projectImage && (
                  <div className="relative h-32 w-full overflow-hidden rounded-[2px] border border-white/10">
                    <img
                      src={review.projectImage}
                      alt={review.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 to-transparent" />
                    <div className="absolute bottom-2 left-2 text-[10px] font-black uppercase text-white/90 bg-charcoal/80 px-2 py-0.5 rounded-[2px]">
                      Completed Project
                    </div>
                  </div>
                )}

                <div className="flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="font-extrabold text-white text-base tracking-tight">{review.author}</span>
                      {review.verified && (
                        <span title="Verified Client">
                          <CheckCircle2 className="w-4 h-4 text-gold flex-shrink-0" />
                        </span>
                      )}
                    </div>
                    <div className="text-xs text-white/50 font-medium">
                      {review.role} • <span className="text-white/70">{review.location}</span>
                    </div>
                  </div>

                  {/* Helpful Button */}
                  <button
                    onClick={() => handleLike(review.id)}
                    className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold rounded-[2px] border transition-colors ${
                      likedReviews[review.id]
                        ? 'bg-gold/20 border-gold text-gold'
                        : 'bg-white/5 border-white/10 text-white/60 hover:text-white hover:border-white/30'
                    }`}
                  >
                    <ThumbsUp className="w-3.5 h-3.5" />
                    <span>{review.helpfulCount}</span>
                  </button>
                </div>
              </div>

              {/* Decorative Quote Icon Background */}
              <Quote className="absolute top-6 right-6 w-16 h-16 text-white/[0.03] pointer-events-none" />
            </div>
          ))}
        </div>
      </div>

      {/* Write a Review Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-charcoal/90 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-charcoal border border-gold/40 p-8 max-w-xl w-full rounded-[2px] shadow-2xl relative animate-slide-up max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-6 right-6 text-white/60 hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="flex items-center gap-2 text-gold text-xs font-black uppercase tracking-widest mb-2">
              <Quote className="w-4 h-4" /> Share Your Experience
            </div>
            <h3 className="text-2xl font-black text-white mb-6">Submit a Client Review</h3>

            <form onSubmit={handleFormSubmit} className="space-y-5">
              {/* Rating Selector */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-white/80 mb-2">
                  Overall Rating
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
                        className={`w-7 h-7 ${
                          star <= formData.rating ? 'fill-gold text-gold' : 'text-white/20'
                        }`}
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Author & Role */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-white/80 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. John &amp; Claire Davis"
                    value={formData.author}
                    onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 px-4 py-2.5 text-sm text-white focus:outline-none focus:border-gold rounded-[2px]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-white/80 mb-1">
                    Role / Profile
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Homeowner, Property Investor"
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 px-4 py-2.5 text-sm text-white focus:outline-none focus:border-gold rounded-[2px]"
                  />
                </div>
              </div>

              {/* Location & Category */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-white/80 mb-1">
                    Location
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Brighton, VIC"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 px-4 py-2.5 text-sm text-white focus:outline-none focus:border-gold rounded-[2px]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-white/80 mb-1">
                    Project Category
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) =>
                      setFormData({ ...formData, category: e.target.value as Review['category'] })
                    }
                    className="w-full bg-white/5 border border-white/10 px-4 py-2.5 text-sm text-white focus:outline-none focus:border-gold rounded-[2px]"
                  >
                    <option value="Luxury Residential" className="bg-charcoal text-white">Luxury Residential</option>
                    <option value="Commercial Development" className="bg-charcoal text-white">Commercial Development</option>
                    <option value="Custom Architectural" className="bg-charcoal text-white">Custom Architectural</option>
                    <option value="Renovations & Extensions" className="bg-charcoal text-white">Renovations &amp; Extensions</option>
                  </select>
                </div>
              </div>

              {/* Headline */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-white/80 mb-1">
                  Review Headline *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Summary of your experience..."
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 px-4 py-2.5 text-sm text-white focus:outline-none focus:border-gold rounded-[2px]"
                />
              </div>

              {/* Review Text */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-white/80 mb-1">
                  Detailed Feedback *
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Share details about the quality, timeliness, communication, and overall build experience..."
                  value={formData.text}
                  onChange={(e) => setFormData({ ...formData, text: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 px-4 py-2.5 text-sm text-white focus:outline-none focus:border-gold rounded-[2px]"
                />
              </div>

              <div className="pt-4 flex items-center justify-end gap-4 border-t border-white/10">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white/70 hover:text-white transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-gold text-charcoal px-6 py-2.5 text-xs font-black uppercase tracking-widest hover:bg-white transition-all duration-300 rounded-[2px] shadow-[0_0_12px_rgba(197,160,89,0.3)]"
                >
                  Submit Review
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  )
}

export default Reviews
