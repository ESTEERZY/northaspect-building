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
    <section className="py-24 bg-charcoal border-t border-white/5">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-6">

          <h2 className="text-5xl lg:text-6xl font-black tracking-tighter text-white leading-tight max-w-3xl mx-auto">
            Trusted by <span className="text-gold">Hundreds</span> of Satisfied Clients
          </h2>

          <div className="flex items-center justify-center gap-2 pt-4">
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className={`w-8 h-8 ${
                    star <= Math.round(Number(averageRating))
                      ? 'fill-gold text-gold'
                      : 'text-white/20 fill-transparent'
                  }`}
                />
              ))}
            </div>
            <span className="text-2xl font-black tracking-tight text-white ml-4">{averageRating}/5</span>
            <span className="text-lg text-white/60 font-medium">Average Rating</span>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-md border border-white/10 p-10 hover:shadow-lg transition-all duration-500 relative rounded-[2px]"
            >
              {/* Quote Icon */}
              <div className="absolute top-8 right-8 opacity-10">
                <Quote className="w-20 h-20 text-white" strokeWidth={1} />
              </div>

              {/* Rating Stars */}
              <div className="flex gap-1 mb-6">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`w-5 h-5 ${
                      star <= testimonial.rating
                        ? 'fill-gold text-gold'
                        : 'text-white/20 fill-transparent'
                    }`}
                  />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-lg text-white/70 font-medium leading-relaxed mb-8 relative z-10">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-6 border-t border-white/10">
                <div className="w-14 h-14 bg-gold flex items-center justify-center font-black text-white text-xl rounded-[2px]">
                  {testimonial.author.charAt(0)}
                </div>
                <div>
                  <div className="font-black tracking-tighter text-white text-lg">{testimonial.author}</div>
                  <div className="text-sm text-gold font-black uppercase tracking-[0.1em]">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-xl text-white/60 font-medium mb-6 tracking-tight">Join hundreds of satisfied clients.</p>
          <a
            href="#contact"
            className="group bg-gold text-white px-12 py-5 text-base font-black tracking-tighter uppercase hover:bg-charcoal transition-all duration-500 inline-flex items-center gap-3 shadow-[0_4px_20px_rgba(197,160,89,0.3)] rounded-[2px]"
          >
            Get Started Today
          </a>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
