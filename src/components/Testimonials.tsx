import { Star, Quote } from 'lucide-react'

const Testimonials = () => {
  const testimonials = [
    {
      text: 'Transformed our vision into reality. Attention to detail. Exceeded all expectations.',
      author: 'Sarah Johnson',
      role: 'Homeowner',
      rating: 5,
    },
    {
      text: 'Outstanding work and project oversight. Minor weather delays handled professionally, final result is breathtaking.',
      author: 'Robert Smith',
      role: 'Business Owner',
      rating: 4,
    },
    {
      text: 'Professional and dedicated to quality. Made our building experience stress-free.',
      author: 'Abraham Schlegel',
      role: 'Property Developer',
      rating: 5,
    },
    {
      text: 'Completed with great quality control and digital tracking. Exceptional craftsmanship.',
      author: 'Michael Brown',
      role: 'Commercial Client',
      rating: 4,
    },
  ]

  const averageRating = (
    testimonials.reduce((acc, t) => acc + t.rating, 0) / (testimonials.length || 1)
  ).toFixed(1)

  return (
    <section className="py-24 bg-charcoal border-t border-white/10 relative overflow-hidden">
      {/* Sleek background radial glow */}
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[400px] bg-gold/5 blur-[140px] pointer-events-none rounded-full" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-6">

          <h2 className="text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight max-w-3xl mx-auto">
            Trusted by <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-amber-200 to-gold">Hundreds</span> of Satisfied Clients
          </h2>

          <div className="inline-flex items-center justify-center gap-3 pt-4 px-6 py-2.5 bg-gradient-to-r from-white/[0.05] via-white/[0.02] to-white/[0.05] border border-white/10 rounded-full backdrop-blur-xl">
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className={`w-6 h-6 ${
                    star <= Math.round(Number(averageRating))
                      ? 'fill-gold text-gold drop-shadow-[0_0_8px_rgba(197,160,89,0.5)]'
                      : 'text-white/20 fill-transparent'
                  }`}
                />
              ))}
            </div>
            <span className="text-2xl font-black tracking-tight text-white ml-2">{averageRating} / 5.0</span>
            <span className="text-sm text-gold uppercase tracking-widest font-black">Average Rating</span>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-b from-white/[0.06] via-white/[0.02] to-transparent backdrop-blur-2xl border border-white/10 p-10 hover:border-gold/50 transition-all duration-500 relative rounded-[3px] group shadow-lg hover:shadow-[0_15px_40px_rgba(0,0,0,0.6)]"
            >
              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Quote Icon */}
              <div className="absolute top-8 right-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote className="w-20 h-20 text-gold" strokeWidth={1} />
              </div>

              {/* Rating Stars */}
              <div className="flex items-center gap-1.5 mb-6">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`w-5 h-5 ${
                      star <= testimonial.rating
                        ? 'fill-gold text-gold drop-shadow-[0_0_6px_rgba(197,160,89,0.4)]'
                        : 'text-white/20 fill-transparent'
                    }`}
                  />
                ))}
                <span className="ml-2 text-xs font-mono font-bold text-gold/90 bg-gold/10 px-2 py-0.5 rounded-[2px] border border-gold/20">
                  {testimonial.rating}.0
                </span>
              </div>

              {/* Testimonial Text */}
              <p className="text-lg text-white/80 font-normal leading-relaxed mb-8 relative z-10 group-hover:text-white transition-colors duration-300">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-6 border-t border-white/10">
                <div className="w-12 h-12 bg-gradient-to-br from-gold via-amber-500 to-gold flex items-center justify-center font-black text-charcoal text-lg rounded-full shadow-[0_0_15px_rgba(197,160,89,0.3)]">
                  {testimonial.author.charAt(0)}
                </div>
                <div>
                  <div className="font-extrabold tracking-tight text-white text-base">{testimonial.author}</div>
                  <div className="text-xs text-gold font-black uppercase tracking-[0.15em]">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-lg text-white/60 font-medium mb-6 tracking-tight">Ready to start your bespoke project?</p>
          <a
            href="#contact"
            className="group bg-gradient-to-r from-gold via-amber-400 to-gold text-charcoal px-12 py-5 text-sm font-black tracking-widest uppercase hover:brightness-110 transition-all duration-300 inline-flex items-center gap-3 shadow-[0_0_25px_rgba(197,160,89,0.3)] rounded-[2px]"
          >
            Get Started Today
          </a>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
