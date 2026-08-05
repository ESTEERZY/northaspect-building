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
  timestamp: number
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
    timestamp: Date.parse('2026-07-15T10:00:00Z'),
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
    rating: 4,
    date: 'June 2026',
    timestamp: Date.parse('2026-06-20T10:00:00Z'),
    title: 'High-rigor commercial delivery with strong safety standards',
    text: 'Delivering a 4,000 sqm corporate HQ in Sydney CBD requires strict compliance and logistics management. The team completed the structural build ahead of schedule. Minor supply lead times on custom acoustic glazing panels, but site coordination was top notch.',
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
    timestamp: Date.parse('2026-05-10T10:00:00Z'),
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
    rating: 4,
    date: 'April 2026',
    timestamp: Date.parse('2026-04-18T10:00:00Z'),
    title: 'Impressive heritage restoration & modern integration',
    text: 'Preserving a heritage facade while integrating a modern glass-encased rear wing seemed daunting. The site team preserved historical character while giving us state-of-the-art living spaces. Weather events caused a minor timeline shift, but communication was constant.',
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
    timestamp: Date.parse('2026-03-05T10:00:00Z'),
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
    timestamp: Date.parse('2026-01-28T10:00:00Z'),
    title: 'World-class luxury build experience from start to finish',
    text: 'From site excavation through to interior finishes, the communication was stellar. They respected our timeline and crafted an extraordinary family sanctuary that will last generations.',
    projectImage: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=800&q=80',
    verified: true,
    helpfulCount: 28,
  },
  {
    id: 'rev-7',
    author: 'David & Catherine Ross',
    role: 'Homeowners',
    location: 'Brighton, VIC',
    category: 'Custom Architectural',
    rating: 4,
    date: 'December 2025',
    timestamp: Date.parse('2025-12-14T10:00:00Z'),
    title: 'Exceptional structural quality and dedicated site team',
    text: 'The architectural detailing on our home required custom steel fabrication and extensive timber work. The site supervisors were meticulous and proactive. Occasional cost adjustments due to council variation requests were handled professionally.',
    projectImage: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80',
    verified: true,
    helpfulCount: 18,
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

  const averageRating = (
    reviews.reduce((acc, r) => acc + r.rating, 0) / (reviews.length || 1)
  ).toFixed(1)

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
      timestamp: Date.now(),
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
      if (sortBy === 'highest') {
        if (b.rating !== a.rating) {
          return b.rating - a.rating
        }
        if (b.helpfulCount !== a.helpfulCount) {
          return b.helpfulCount - a.helpfulCount
        }
        return b.timestamp - a.timestamp
      }
      if (sortBy === 'recent') {
        return b.timestamp - a.timestamp
      }
      return 0
    })

  return (
    <section id="reviews" className="py-28 bg-charcoal relative overflow-hidden border-t border-white/10">
      {/* Sleek Background Glow & Mesh Effect */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-tr from-gold/10 via-gold/5 to-transparent blur-[160px] pointer-events-none rounded-full" />
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.02] pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Toast Notification */}
        {toastMessage && (
          <div className="mb-10 p-4 bg-gold/15 border border-gold/40 text-gold text-sm font-semibold rounded-[2px] flex items-center justify-between backdrop-blur-xl animate-fade-in shadow-[0_4px_20px_rgba(197,160,89,0.15)]">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 flex-shrink-0 text-gold" />
              <span>{toastMessage}</span>
            </div>
            <button onClick={() => setToastMessage(null)} className="text-gold/70 hover:text-white transition-colors">
              <X className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 mb-16">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 px-3.5 py-1.5 rounded-full text-gold text-[11px] font-black tracking-[0.2em] uppercase shadow-[0_0_15px_rgba(197,160,89,0.15)]">
              <Award className="w-3.5 h-3.5" />
              Client Excellence &amp; Testimonials
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1]">
              Trusted by Australia's Most <span className="text-gold font-black">Discerning</span> Property Owners
            </h2>
            <p className="text-base md:text-lg text-white/70 font-normal leading-relaxed">
              Read verified feedback from homeowners, corporate clients, and property developers who entrusted us with their landmark projects.
            </p>
          </div>

          {/* Sleek Action & Stats Summary */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 bg-gradient-to-br from-white/[0.07] to-white/[0.02] backdrop-blur-xl border border-white/10 p-7 rounded-[2px] shadow-2xl relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-[2px]" />
            <div>
              <div className="flex items-center gap-3">
                <span className="text-4xl lg:text-5xl font-black text-white tracking-tight font-sans">{averageRating}</span>
                <div>
                  <div className="flex gap-1 text-gold mb-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={`w-4 h-4 ${
                          star <= Math.round(Number(averageRating))
                            ? 'fill-gold text-gold'
                            : 'text-white/20 fill-transparent'
                        }`}
                      />
                    ))}
                  </div>
                  <div className="text-[10px] font-black uppercase tracking-[0.15em] text-white/60">
                    128+ Verified Reviews
                  </div>
                </div>
              </div>
            </div>
            <div className="h-10 w-px bg-white/15 hidden sm:block" />
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-gold text-charcoal px-7 py-3.5 text-xs font-black tracking-[0.15em] uppercase hover:bg-white hover:text-charcoal transition-all duration-300 inline-flex items-center gap-2 rounded-[2px] shadow-[0_0_20px_rgba(197,160,89,0.25)] relative overflow-hidden group/btn"
            >
              <PlusCircle className="w-4 h-4 transition-transform duration-300 group-hover/btn:rotate-90" />
              <span>Write a Review</span>
            </button>
          </div>
        </div>

        {/* Verification Badges Bar - Sleek Glass Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-14 border-y border-white/10 py-7 bg-white/[0.015] backdrop-blur-sm px-4">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center flex-shrink-0">
              <ShieldCheck className="w-5 h-5 text-gold" />
            </div>
            <div>
              <div className="text-xs font-black text-white uppercase tracking-wider">Master Builders</div>
              <div className="text-[11px] text-white/50 font-medium">Verified Member MBA</div>
            </div>
          </div>
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center flex-shrink-0">
              <Star className="w-5 h-5 text-gold fill-gold" />
            </div>
            <div>
              <div className="text-xs font-black text-white uppercase tracking-wider">Google Reviews</div>
              <div className="text-[11px] text-white/50 font-medium">{averageRating} ★★★★★ (128)</div>
            </div>
          </div>
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center flex-shrink-0">
              <Building className="w-5 h-5 text-gold" />
            </div>
            <div>
              <div className="text-xs font-black text-white uppercase tracking-wider">Houzz Design 2025</div>
              <div className="text-[11px] text-white/50 font-medium">Best of Service Award</div>
            </div>
          </div>
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center flex-shrink-0">
              <Award className="w-5 h-5 text-gold" />
            </div>
            <div>
              <div className="text-xs font-black text-white uppercase tracking-wider">100% Fixed Price</div>
              <div className="text-[11px] text-white/50 font-medium">Guaranteed Contract</div>
            </div>
          </div>
        </div>

        {/* Filters & Sorting Bar */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-5 mb-10 pb-4 border-b border-white/5">
          {/* Category Pills */}
          <div className="flex items-center gap-2 flex-wrap">
            <div className="text-[11px] font-black uppercase tracking-widest text-white/40 flex items-center gap-1.5 mr-2">
              <Filter className="w-3.5 h-3.5 text-gold" /> Category:
            </div>
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 text-[11px] font-extrabold uppercase tracking-wider rounded-[2px] transition-all duration-300 border ${
                  selectedCategory === cat
                    ? 'bg-gold text-charcoal border-gold shadow-[0_0_15px_rgba(197,160,89,0.35)] scale-[1.02]'
                    : 'bg-white/[0.03] text-white/70 border-white/10 hover:border-gold/40 hover:text-white hover:bg-white/[0.06]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Sort Selector */}
          <div className="flex items-center gap-3 self-end md:self-auto">
            <span className="text-[11px] font-black uppercase tracking-widest text-white/40">Sort By:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as 'highest' | 'recent')}
              className="bg-white/[0.04] border border-white/15 text-white text-[11px] font-extrabold uppercase tracking-wider px-3.5 py-2 rounded-[2px] focus:outline-none focus:border-gold cursor-pointer transition-colors hover:border-white/30"
            >
              <option value="highest" className="bg-charcoal text-white">Highest Rated</option>
              <option value="recent" className="bg-charcoal text-white">Most Recent</option>
            </select>
          </div>
        </div>

        {/* Sleek Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredReviews.map((review) => {
            // Helper for initial avatar
            const initials = review.author
              .split('&')[0]
              .trim()
              .split(' ')
              .map((n) => n[0])
              .join('')
              .toUpperCase()
              .slice(0, 2)

            return (
              <div
                key={review.id}
                className="bg-gradient-to-b from-white/[0.05] to-white/[0.02] backdrop-blur-xl border border-white/10 p-8 flex flex-col justify-between hover:border-gold/50 transition-all duration-500 rounded-[2px] group relative shadow-lg hover:shadow-[0_12px_35px_rgba(0,0,0,0.5)] overflow-hidden"
              >
                {/* Top Subtle Hover Accent Line */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div>
                  {/* Top Meta: Category Tag & Star Rating */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-[10px] font-black tracking-[0.15em] text-gold uppercase bg-gold/10 px-3 py-1 rounded-[2px] border border-gold/20 shadow-inner">
                      {review.category}
                    </span>
                    <div className="flex items-center gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className={`w-3.5 h-3.5 ${
                            star <= review.rating
                              ? 'fill-gold text-gold'
                              : 'text-white/20 fill-transparent'
                          }`}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Title & Review Text */}
                  <h3 className="text-lg md:text-xl font-bold text-white mb-3 tracking-tight leading-snug group-hover:text-gold transition-colors duration-300">
                    "{review.title}"
                  </h3>
                  <p className="text-white/75 text-sm leading-relaxed mb-6 font-normal">
                    {review.text}
                  </p>
                </div>

                {/* Bottom Details & Author */}
                <div className="pt-6 border-t border-white/10 space-y-5">
                  {/* Optional Project Thumbnail */}
                  {review.projectImage && (
                    <div className="relative aspect-[16/9] w-full overflow-hidden rounded-[2px] border border-white/10 group/img">
                      <img
                        src={review.projectImage}
                        alt={review.title}
                        className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-700 ease-out"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/20 to-transparent" />
                      <div className="absolute bottom-2.5 left-2.5 text-[9px] font-black uppercase tracking-widest text-gold bg-charcoal/90 backdrop-blur-md px-2.5 py-1 rounded-[2px] border border-gold/20">
                        Completed Build
                      </div>
                    </div>
                  )}

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      {/* Avatar Badge */}
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold/25 to-white/10 border border-gold/40 flex items-center justify-center font-black text-gold text-xs tracking-wider shadow-inner flex-shrink-0">
                        {initials}
                      </div>
                      <div>
                        <div className="flex items-center gap-1.5">
                          <span className="font-extrabold text-white text-sm tracking-tight">{review.author}</span>
                          {review.verified && (
                            <span title="Verified Client">
                              <CheckCircle2 className="w-3.5 h-3.5 text-gold flex-shrink-0" />
                            </span>
                          )}
                        </div>
                        <div className="text-[11px] text-white/50 font-medium">
                          {review.role} • <span className="text-white/75">{review.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Helpful Button */}
                    <button
                      onClick={() => handleLike(review.id)}
                      className={`flex items-center gap-1.5 px-3 py-1.5 text-[11px] font-extrabold rounded-[2px] border transition-all duration-300 ${
                        likedReviews[review.id]
                          ? 'bg-gold/20 border-gold text-gold shadow-[0_0_10px_rgba(197,160,89,0.2)]'
                          : 'bg-white/[0.03] border-white/10 text-white/60 hover:text-white hover:border-gold/40 hover:bg-white/[0.06]'
                      }`}
                    >
                      <ThumbsUp className="w-3.5 h-3.5" />
                      <span>{review.helpfulCount}</span>
                    </button>
                  </div>
                </div>

                {/* Sleek Watermarked Quote Icon */}
                <Quote className="absolute top-6 right-6 w-20 h-20 text-white/[0.02] group-hover:text-gold/[0.04] transition-colors pointer-events-none" />
              </div>
            )
          })}
        </div>
      </div>

      {/* Write a Review Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xl flex items-center justify-center p-4">
          <div className="bg-charcoal border border-gold/40 p-8 md:p-10 max-w-xl w-full rounded-[2px] shadow-[0_20px_50px_rgba(0,0,0,0.8)] relative animate-slide-up max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="flex items-center gap-2 text-gold text-xs font-black uppercase tracking-[0.2em] mb-2">
              <Quote className="w-4 h-4" /> Share Your Experience
            </div>
            <h3 className="text-2xl md:text-3xl font-black text-white mb-6 tracking-tight">Submit a Client Review</h3>

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
                      className="p-1 focus:outline-none transition-transform hover:scale-110"
                    >
                      <Star
                        className={`w-7 h-7 ${
                          star <= formData.rating ? 'fill-gold text-gold' : 'text-white/20 hover:text-white/40'
                        }`}
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Author & Role */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-white/80 mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. John &amp; Claire Davis"
                    value={formData.author}
                    onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                    className="w-full bg-white/[0.05] border border-white/10 px-4 py-3 text-sm text-white focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30 rounded-[2px] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-white/80 mb-1.5">
                    Role / Profile
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Homeowner, Property Investor"
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    className="w-full bg-white/[0.05] border border-white/10 px-4 py-3 text-sm text-white focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30 rounded-[2px] transition-colors"
                  />
                </div>
              </div>

              {/* Location & Category */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-white/80 mb-1.5">
                    Location / Address
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. 12 Ocean St, Brighton VIC"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full bg-white/[0.05] border border-white/10 px-4 py-3 text-sm text-white focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30 rounded-[2px] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-white/80 mb-1.5">
                    Project Category
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) =>
                      setFormData({ ...formData, category: e.target.value as Review['category'] })
                    }
                    className="w-full bg-white/[0.05] border border-white/10 px-4 py-3 text-sm text-white focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30 rounded-[2px] cursor-pointer transition-colors"
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
                <label className="block text-xs font-bold uppercase tracking-wider text-white/80 mb-1.5">
                  Review Headline *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Summary of your experience..."
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="w-full bg-white/[0.05] border border-white/10 px-4 py-3 text-sm text-white focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30 rounded-[2px] transition-colors"
                />
              </div>

              {/* Review Text */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-white/80 mb-1.5">
                  Detailed Feedback *
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Share details about the quality, timeliness, communication, and overall build experience..."
                  value={formData.text}
                  onChange={(e) => setFormData({ ...formData, text: e.target.value })}
                  className="w-full bg-white/[0.05] border border-white/10 px-4 py-3 text-sm text-white focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30 rounded-[2px] transition-colors"
                />
              </div>

              <div className="pt-4 flex items-center justify-end gap-4 border-t border-white/10">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-5 py-2.5 text-xs font-extrabold uppercase tracking-wider text-white/60 hover:text-white transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-gold text-charcoal px-7 py-3 text-xs font-black uppercase tracking-[0.15em] hover:bg-white hover:text-charcoal transition-all duration-300 rounded-[2px] shadow-[0_0_15px_rgba(197,160,89,0.3)]"
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
