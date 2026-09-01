import { Star, Quote, CheckCircle2, MapPin } from 'lucide-react';
import { VERIFIED_TESTIMONIALS } from '../data/testimonialsData';

const Testimonials = () => {
  const averageRating = (
    VERIFIED_TESTIMONIALS.reduce((acc, t) => acc + t.rating, 0) / (VERIFIED_TESTIMONIALS.length || 1)
  ).toFixed(1);

  return (
    <section className="py-24 bg-charcoal border-t border-white/10 relative overflow-hidden">
      {/* Sleek background radial glow */}
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[400px] bg-gold/5 blur-[140px] pointer-events-none rounded-full" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-6">
          <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 px-3.5 py-1.5 rounded-full text-gold text-[11px] font-black tracking-[0.2em] uppercase mx-auto">
            <CheckCircle2 className="w-3.5 h-3.5" />
            Verified Client Reviews &bull; Aspect North Building
          </div>

          <h2 className="text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight max-w-3xl mx-auto">
            Trusted by Homeowners Across Sydney's <span className="text-gold">Northern Beaches &amp; North Shore</span>
          </h2>

          <div className="inline-flex items-center justify-center gap-3 pt-4 px-6 py-2.5 bg-gradient-to-r from-white/[0.05] via-white/[0.02] to-white/[0.05] border border-white/10 rounded-full backdrop-blur-xl">
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className="w-5 h-5 fill-gold text-gold drop-shadow-[0_0_8px_rgba(197,160,89,0.5)]"
                />
              ))}
            </div>
            <span className="text-xl font-black tracking-tight text-white ml-2">{averageRating} / 5.0</span>
            <span className="text-xs text-gold uppercase tracking-widest font-black border-l border-white/10 pl-3">
              100% 5-Star Verified
            </span>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {VERIFIED_TESTIMONIALS.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-gradient-to-b from-white/[0.06] via-white/[0.02] to-transparent backdrop-blur-2xl border border-white/10 p-8 hover:border-gold/50 transition-all duration-500 relative rounded-[2px] group shadow-lg flex flex-col justify-between"
            >
              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity pointer-events-none">
                <Quote className="w-12 h-12 text-gold" strokeWidth={1} />
              </div>

              <div>
                {/* Rating Stars & Badge */}
                <div className="flex items-center justify-between gap-2 mb-5">
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-4 h-4 fill-gold text-gold" />
                    ))}
                  </div>
                  <span className="text-[10px] font-extrabold text-gold bg-gold/10 px-2 py-0.5 border border-gold/20 rounded-[2px]">
                    {testimonial.badge}
                  </span>
                </div>

                {/* Testimonial Text */}
                <p className="text-sm md:text-base text-white/85 font-normal leading-relaxed mb-6 italic">
                  "{testimonial.quote}"
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-3 pt-5 border-t border-white/10">
                <div className="w-10 h-10 bg-gradient-to-br from-gold/30 via-gold/10 to-transparent border border-gold/40 rounded-full flex items-center justify-center font-black text-gold text-xs tracking-wider shadow-inner flex-shrink-0">
                  {testimonial.initials}
                </div>
                <div>
                  <div className="font-black tracking-tight text-white text-sm flex items-center gap-1.5">
                    <span>{testimonial.author}</span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-gold flex-shrink-0" />
                  </div>
                  <div className="text-[11px] text-white/60 font-medium flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-gold/70 flex-shrink-0" />
                    <span>{testimonial.location}{testimonial.postcode ? ` (${testimonial.postcode})` : ''}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-lg text-white/70 font-medium mb-6 tracking-tight">Ready to plan your build, renovation, or extension with Chris?</p>
          <a
            href="#contact"
            className="group bg-gold text-charcoal border border-gold px-10 py-4 text-xs font-black tracking-widest uppercase hover:bg-white transition-all duration-300 inline-flex items-center gap-3 shadow-[0_0_25px_rgba(197,160,89,0.3)] rounded-[2px]"
          >
            Request a Quote Today
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
