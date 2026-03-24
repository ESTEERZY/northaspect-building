import { Star } from 'lucide-react'

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Exceptional Home Building',
      text: 'Foundation Showcase transformed our vision into a stunning reality. Their attention to detail and commitment to quality exceeded our expectations. Every aspect of the build was handled professionally, and the result is a home we absolutely love.',
      author: 'Sarah Johnson',
      rating: 5,
    },
    {
      name: 'Outstanding Expertise',
      text: 'Working with Foundation Showcase was an absolute pleasure. Their team demonstrated incredible craftsmanship and kept us informed throughout the entire process. The final result speaks for itself—a beautifully constructed home built to last.',
      author: 'Robert Smith',
      rating: 5,
    },
    {
      name: 'A Team You Can Trust',
      text: 'From initial consultation to final walkthrough, Foundation Showcase delivered excellence at every stage. Their professionalism, transparency, and dedication to quality construction made our building experience stress-free and enjoyable.',
      author: 'Abraham Schlegel',
      rating: 5,
    },
    {
      name: 'Professional and Efficient',
      text: 'Foundation Showcase completed our custom home on time and within budget without compromising on quality. Their skilled team and superior project management made the entire construction process seamless. Highly recommended for any building project.',
      author: 'Michael Brown',
      rating: 5,
    },
  ]

  return (
    <section className="py-24 bg-white border-b border-zinc-200">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-3 border border-zinc-200 bg-zinc-50 px-4 py-2 text-xs font-semibold text-zinc-800 tracking-[0.2em] uppercase">
            <span className="w-1.5 h-1.5 bg-zinc-900"></span>
            CLIENT PERSPECTIVES
          </div>
          <h2 className="text-4xl lg:text-5xl font-light text-zinc-950 tracking-tight leading-[1.2]">
            Perspectives on <span className="font-semibold">Precision</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-zinc-50 p-8 rounded-none border border-zinc-200 hover:border-zinc-400 transition-colors duration-500"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-zinc-900 text-zinc-900" />
                ))}
              </div>
              <h3 className="text-xl font-medium tracking-tight text-zinc-900 mb-4">
                {testimonial.name}
              </h3>
              <p className="text-zinc-900 font-medium leading-relaxed text-sm mb-8">"{testimonial.text}"</p>
              <div className="flex items-center gap-4 pt-6 border-t border-zinc-200">
                <div className="w-10 h-10 bg-zinc-200 rounded-none flex items-center justify-center font-bold text-zinc-900 text-sm border border-zinc-300">
                  {testimonial.author.charAt(0)}
                </div>
                <div>
                  <div className="font-medium tracking-wide text-zinc-900 text-sm uppercase">{testimonial.author}</div>
                  <div className="text-xs text-zinc-800 font-semibold uppercase tracking-widest mt-0.5">Verified Client</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
