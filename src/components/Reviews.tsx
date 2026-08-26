import { useState } from 'react'
import { Star, CheckCircle2, ThumbsUp, PlusCircle, X } from 'lucide-react'

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
    location: 'Devonport, TAS',
    category: 'Luxury Residential',
    rating: 5,
    date: 'July 2026',
    timestamp: Date.parse('2026-07-15T10:00:00Z'),
    title: 'Transformed our vision into a coastal masterpiece',
    text: 'NorthAspect Building executed our custom residential build in North West Tasmania with flawless timber framing and craftsmanship. Their transparency during cost estimation gave us total peace of mind. Every detail exceeded our expectations.',
    projectImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    verified: true,
    helpfulCount: 24,
  },
  {
    id: 'rev-2',
    author: 'Robert Sterling',
    role: 'Homeowner',
    location: 'Burnie, TAS',
    category: 'Renovations & Extensions',
    rating: 5,
    date: 'June 2026',
    timestamp: Date.parse('2026-06-20T10:00:00Z'),
    title: 'High-rigor extension delivery & carpentry excellence',
    text: 'Delivering a major architectural extension in North West TAS requires strict site management. The NorthAspect team completed the timber structural framing phase ahead of schedule with exceptional site coordination.',
    projectImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
    verified: true,
    helpfulCount: 19,
  },
  {
    id: 'rev-3',
    author: 'Dr. Abraham Schlegel',
    role: 'Property Owner',
    location: 'Ulverstone, TAS',
    category: 'Custom Architectural',
    rating: 5,
    date: 'May 2026',
    timestamp: Date.parse('2026-05-10T10:00:00Z'),
    title: 'Architectural precision at the highest standard',
    text: 'Working with custom timber joinery and structural glazing can be complex. NorthAspect Building coordinated seamlessly with our architect, turning schematics into structural perfection.',
    projectImage: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80',
    verified: true,
    helpfulCount: 31,
  },
  {
    id: 'rev-4',
    author: 'Elena & Lucas Vance',
    role: 'Homeowners',
    location: 'Penguin, TAS',
    category: 'Renovations & Extensions',
    rating: 5,
    date: 'April 2026',
    timestamp: Date.parse('2026-04-18T10:00:00Z'),
    title: 'Character extension with modern comfort',
    text: 'Extending our home while integrating a modern timber wing seemed daunting. The NorthAspect site team preserved the home character while providing state-of-the-art living spaces and fine carpentry.',
    projectImage: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80',
    verified: true,
    helpfulCount: 15,
  },
  {
    id: 'rev-5',
    author: 'Michael Brown',
    role: 'Homeowner',
    location: 'Launceston, TAS',
    category: 'Custom Architectural',
    rating: 5,
    date: 'March 2026',
    timestamp: Date.parse('2026-03-05T10:00:00Z'),
    title: 'First-class management and budget control',
    text: 'Their clear communication kept us informed at every milestone. Financial reporting was exact, and the finished custom home in Tasmania speaks for itself.',
    projectImage: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80',
    verified: true,
    helpfulCount: 12,
  },
  {
    id: 'rev-6',
    author: 'Victoria Vance',
    role: 'Estate Owner',
    location: 'Cradle Coast, TAS',
    category: 'Luxury Residential',
    rating: 5,
    date: 'January 2026',
    timestamp: Date.parse('2026-01-28T10:00:00Z'),
    title: 'Outstanding custom build experience',
    text: 'From site excavation through to interior timber finishes, the communication was stellar. They respected our timeline and crafted an extraordinary family home that will last generations.',
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

  const averageRating = (
    reviews.reduce((acc, r) => acc + r.rating, 0) / (reviews.length || 1)
  ).toFixed(1)

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

    setToastMessage('Thank you! Your review has been added.')
    setTimeout(() => setToastMessage(null), 4000)
  }

  const filteredReviews = reviews
    .filter((r) => selectedCategory === 'All' || r.category === selectedCategory)
    .sort((a, b) => {
      if (sortBy === 'highest') {
        if (b.rating !== a.rating) return b.rating - a.rating
        if (b.helpfulCount !== a.helpfulCount) return b.helpfulCount - a.helpfulCount
        return b.timestamp - a.timestamp
      }
      return b.timestamp - a.timestamp
    })

  return (
    <section id="reviews" className="py-24 bg-[#0d0d0d] text-white relative border-t border-white/10">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        
        {/* Toast Notification */}
        {toastMessage && (
          <div className="mb-8 p-4 bg-gold/10 border border-gold/30 text-gold text-xs tracking-wide rounded-sm flex items-center justify-between animate-fade-in">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-gold" />
              <span>{toastMessage}</span>
            </div>
            <button onClick={() => setToastMessage(null)} className="text-gold/60 hover:text-white">
              <X className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* Minimal Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
          <div>
            <div className="text-[11px] font-mono font-bold tracking-[0.25em] text-gold uppercase mb-3">
              // CLIENT REVIEWS
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-white">
              Verified Client <span className="font-bold text-gold">Feedback</span>
            </h2>
          </div>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-3 bg-white/[0.03] border border-white/10 px-4 py-2.5 rounded-full">
              <span className="text-xl font-bold font-mono text-white">{averageRating}</span>
              <div className="flex gap-0.5 text-gold">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`w-3.5 h-3.5 ${
                      star <= Math.round(Number(averageRating))
                        ? 'fill-gold text-gold'
                        : 'text-white/20 fill-transparent'
                    }`}
                  />
                ))}
              </div>
              <span className="text-[11px] text-white/50 tracking-wider uppercase font-medium border-l border-white/10 pl-3">
                {reviews.length + 120}+ Builds
              </span>
            </div>

            <button
              onClick={() => setIsModalOpen(true)}
              className="border border-gold/40 text-gold hover:bg-gold hover:text-charcoal transition-all duration-300 px-5 py-2.5 text-xs font-semibold tracking-wider uppercase rounded-full inline-flex items-center gap-2"
            >
              <PlusCircle className="w-4 h-4" />
              <span>Write Review</span>
            </button>
          </div>
        </div>

        {/* Sleek Minimal Nav Tabs & Filter Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4 mb-10">
          <div className="flex items-center gap-6 overflow-x-auto scrollbar-none py-1">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`text-xs font-medium uppercase tracking-widest transition-all whitespace-nowrap relative py-1 ${
                  selectedCategory === cat
                    ? 'text-gold font-bold'
                    : 'text-white/40 hover:text-white'
                }`}
              >
                {cat}
                {selectedCategory === cat && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gold -mb-4" />
                )}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2 self-end sm:self-auto">
            <span className="text-[10px] font-mono uppercase tracking-widest text-white/30">SORT</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as 'highest' | 'recent')}
              className="bg-transparent text-white/70 text-xs font-medium uppercase tracking-wider focus:outline-none cursor-pointer border-b border-white/20 pb-0.5"
            >
              <option value="highest" className="bg-[#121212] text-white">Highest Rated</option>
              <option value="recent" className="bg-[#121212] text-white">Most Recent</option>
            </select>
          </div>
        </div>

        {/* Sleek Grid Layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredReviews.map((review) => {
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
                className="bg-white/[0.02] border border-white/10 hover:border-gold/40 p-7 rounded-sm flex flex-col justify-between transition-all duration-300 group relative"
              >
                <div>
                  {/* Top rating & category */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center gap-1 text-gold">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className={`w-3.5 h-3.5 ${
                            star <= review.rating
                              ? 'fill-gold text-gold'
                              : 'text-white/15 fill-transparent'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-[10px] font-mono text-white/40 tracking-wider uppercase">
                      {review.category}
                    </span>
                  </div>

                  {/* Title & Review Text */}
                  <h3 className="text-base font-semibold text-white mb-2 leading-snug group-hover:text-gold transition-colors">
                    "{review.title}"
                  </h3>
                  <p className="text-white/65 text-xs leading-relaxed font-light mb-6">
                    {review.text}
                  </p>
                </div>

                <div>
                  {/* Project image thumbnail if present */}
                  {review.projectImage && (
                    <div className="relative aspect-[21/9] w-full overflow-hidden rounded-sm mb-5 border border-white/5">
                      <img
                        src={review.projectImage}
                        alt={review.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                        loading="lazy"
                      />
                    </div>
                  )}

                  {/* Author & Helpful CTA */}
                  <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gold text-xs font-mono font-bold">
                        {initials}
                      </div>
                      <div>
                        <div className="flex items-center gap-1 text-xs font-medium text-white">
                          <span>{review.author}</span>
                          {review.verified && <CheckCircle2 className="w-3 h-3 text-gold" />}
                        </div>
                        <div className="text-[10px] text-white/40">
                          {review.role} • <span className="text-white/60">{review.location}</span>
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={() => handleLike(review.id)}
                      className={`flex items-center gap-1 text-[11px] font-mono transition-colors ${
                        likedReviews[review.id]
                          ? 'text-gold font-bold'
                          : 'text-white/40 hover:text-white'
                      }`}
                    >
                      <ThumbsUp className="w-3.5 h-3.5" />
                      <span>{review.helpfulCount}</span>
                    </button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Write a Review Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#121212] border border-white/15 p-8 max-w-lg w-full rounded-sm relative animate-fade-in max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-5 right-5 text-white/40 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-[10px] font-mono text-gold tracking-widest uppercase mb-1">// SHARE FEEDBACK</div>
            <h3 className="text-xl font-light text-white mb-6">Submit Client Review</h3>

            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div>
                <label className="block text-[11px] uppercase tracking-wider text-white/60 mb-2 font-mono">
                  Rating
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
                  <label className="block text-[11px] uppercase tracking-wider text-white/60 mb-1 font-mono">
                    Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. John Davis"
                    value={formData.author}
                    onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                    className="w-full bg-white/[0.04] border border-white/10 px-3.5 py-2 text-xs text-white focus:outline-none focus:border-gold rounded-sm"
                  />
                </div>
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-white/60 mb-1 font-mono">
                    Role
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Homeowner"
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    className="w-full bg-white/[0.04] border border-white/10 px-3.5 py-2 text-xs text-white focus:outline-none focus:border-gold rounded-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-white/60 mb-1 font-mono">
                    Location
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Melbourne VIC"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full bg-white/[0.04] border border-white/10 px-3.5 py-2 text-xs text-white focus:outline-none focus:border-gold rounded-sm"
                  />
                </div>
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-white/60 mb-1 font-mono">
                    Category
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) =>
                      setFormData({ ...formData, category: e.target.value as Review['category'] })
                    }
                    className="w-full bg-[#181818] border border-white/10 px-3 py-2 text-xs text-white focus:outline-none focus:border-gold rounded-sm cursor-pointer"
                  >
                    <option value="Luxury Residential">Luxury Residential</option>
                    <option value="Commercial Development">Commercial Development</option>
                    <option value="Custom Architectural">Custom Architectural</option>
                    <option value="Renovations & Extensions">Renovations &amp; Extensions</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider text-white/60 mb-1 font-mono">
                  Headline *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Summary of experience..."
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="w-full bg-white/[0.04] border border-white/10 px-3.5 py-2 text-xs text-white focus:outline-none focus:border-gold rounded-sm"
                />
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider text-white/60 mb-1 font-mono">
                  Feedback *
                </label>
                <textarea
                  required
                  rows={3}
                  placeholder="Your feedback..."
                  value={formData.text}
                  onChange={(e) => setFormData({ ...formData, text: e.target.value })}
                  className="w-full bg-white/[0.04] border border-white/10 px-3.5 py-2 text-xs text-white focus:outline-none focus:border-gold rounded-sm"
                />
              </div>

              <div className="pt-3 flex items-center justify-end gap-3 border-t border-white/10">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 text-xs text-white/50 hover:text-white"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-gold text-charcoal px-6 py-2 text-xs font-bold uppercase tracking-wider hover:bg-white transition-colors rounded-sm"
                >
                  Submit
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
