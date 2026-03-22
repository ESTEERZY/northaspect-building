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
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 bg-dark-blue/10 px-4 py-2 rounded-full text-xs font-semibold text-dark-blue tracking-wide">
            <span className="w-2 h-2 bg-app-accent rounded-full"></span>
            TESTIMONIALS
          </div>
          <h2 className="text-4xl lg:text-5xl font-normal text-dark-blue leading-[1.3]">
            What Our Clients Say
            <br />
            About Our Work
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex gap-1 mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-app-accent text-app-accent" />
                ))}
              </div>
              <h3 className="text-lg font-bold text-dark-blue mb-3">
                {testimonial.name}
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm mb-5">{testimonial.text}</p>
              <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
                <div className="w-11 h-11 bg-gray-200 rounded-full flex items-center justify-center font-bold text-dark-blue text-sm">
                  {testimonial.author.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-dark-blue text-sm">{testimonial.author}</div>
                  <div className="text-xs text-gray-500">Verified Customer</div>
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
