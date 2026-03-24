import { Star, Quote } from 'lucide-react'

const Testimonials = () => {
  const testimonials = [
    {
      text: 'Foundation Elite transformed our vision into reality. The attention to detail, quality craftsmanship, and professionalism exceeded all expectations. Our dream home is now a stunning reality.',
      author: 'Sarah Johnson',
      role: 'Homeowner',
      rating: 5,
    },
    {
      text: 'Outstanding work from start to finish. The team kept us informed at every stage, delivered on time, and the final result is simply breathtaking. Highly recommend for any construction project.',
      author: 'Robert Smith',
      role: 'Business Owner',
      rating: 5,
    },
    {
      text: 'Professional, transparent, and dedicated to quality. From consultation to completion, Foundation Elite made our building experience stress-free and exceeded our expectations at every turn.',
      author: 'Abraham Schlegel',
      role: 'Property Developer',
      rating: 5,
    },
    {
      text: 'Completed on time, within budget, and with exceptional quality. Their project management and skilled team made the entire process seamless. The best construction company we have worked with.',
      author: 'Michael Brown',
      role: 'Commercial Client',
      rating: 5,
    },
  ]

  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-6">
          <div className="inline-flex items-center gap-3 bg-accent-gold/10 border border-accent-gold px-5 py-3">
            <span className="w-2 h-2 bg-accent-gold"></span>
            <span className="text-xs font-bold tracking-[0.2em] accent-gold uppercase">Client Testimonials</span>
          </div>

          <h2 className="text-5xl lg:text-6xl font-extrabold text-white leading-tight max-w-3xl mx-auto">
            Trusted by <span className="accent-gold">Hundreds</span> of Satisfied Clients
          </h2>

          <div className="flex items-center justify-center gap-2 pt-4">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-8 h-8 fill-accent-gold text-accent-gold" />
              ))}
            </div>
            <span className="text-2xl font-bold text-white ml-4">4.8/5</span>
            <span className="text-lg text-gray-400 font-medium">Average Rating</span>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-zinc-900 border border-accent-gold/30 p-10 hover:border-accent-gold transition-all duration-300 relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-8 right-8 opacity-10">
                <Quote className="w-20 h-20 text-accent-gold" strokeWidth={1} />
              </div>

              {/* Rating Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent-gold text-accent-gold" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-lg text-white font-medium leading-relaxed mb-8 relative z-10">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-6 border-t border-accent-gold/30">
                <div className="w-14 h-14 bg-accent-gold flex items-center justify-center font-extrabold text-black text-xl">
                  {testimonial.author.charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-white text-lg">{testimonial.author}</div>
                  <div className="text-sm accent-gold font-semibold uppercase tracking-wider">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-xl text-white font-medium mb-6">Join hundreds of satisfied clients who trusted us with their projects.</p>
          <a
            href="#contact"
            className="group bg-accent-gold text-black px-12 py-5 text-base font-bold tracking-wide uppercase hover:bg-white transition-all duration-300 inline-flex items-center gap-3 shadow-2xl shadow-accent-gold/20"
          >
            Get Started Today
          </a>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
