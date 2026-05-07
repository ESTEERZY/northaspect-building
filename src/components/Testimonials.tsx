import { Star, Quote } from 'lucide-react'

const Testimonials = () => {
  const testimonials = [
    {
      text: 'Apex Systems transformed our vision into reality. The attention to detail, quality craftsmanship, and professionalism exceeded all expectations. Our dream home is now a stunning reality.',
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
      text: 'Professional, transparent, and dedicated to quality. From consultation to completion, Apex Systems made our building experience stress-free and exceeded our expectations at every turn.',
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
    <section className="py-24 bg-gold/5">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-6">
          <div className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-md border border-gold/30 px-5 py-3 rounded-[2px]">
            <span className="w-2 h-2 bg-gold"></span>
            <span className="text-xs font-black tracking-[0.2em] text-gold uppercase">Client Testimonials</span>
          </div>

          <h2 className="text-5xl lg:text-6xl font-black tracking-tighter text-charcoal leading-tight max-w-3xl mx-auto">
            Trusted by <span className="text-gold">Hundreds</span> of Satisfied Clients
          </h2>

          <div className="flex items-center justify-center gap-2 pt-4">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-8 h-8 fill-gold text-gold" />
              ))}
            </div>
            <span className="text-2xl font-black tracking-tight text-charcoal ml-4">4.8/5</span>
            <span className="text-lg text-slate-600 font-medium">Average Rating</span>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white/20 backdrop-blur-md border border-white/50 p-10 hover:shadow-lg transition-all duration-500 relative rounded-[2px]"
            >
              {/* Quote Icon */}
              <div className="absolute top-8 right-8 opacity-10">
                <Quote className="w-20 h-20 text-charcoal" strokeWidth={1} />
              </div>

              {/* Rating Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-lg text-slate-600 font-medium leading-relaxed mb-8 relative z-10">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-6 border-t border-slate-200">
                <div className="w-14 h-14 bg-gold flex items-center justify-center font-black text-white text-xl rounded-[2px]">
                  {testimonial.author.charAt(0)}
                </div>
                <div>
                  <div className="font-black tracking-tighter text-charcoal text-lg">{testimonial.author}</div>
                  <div className="text-sm text-gold font-black uppercase tracking-[0.1em]">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-xl text-slate-600 font-medium mb-6">Join hundreds of satisfied clients who trusted us with their projects.</p>
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
