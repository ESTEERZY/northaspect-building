import { motion } from 'framer-motion';

const Standards = () => {
  const services = [
    {
      image: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Residential Construction',
      description: 'Custom homes. Premium materials. Exact specifications.',
    },
    {
      image: 'https://images.pexels.com/photos/273209/pexels-photo-273209.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Commercial Projects',
      description: 'Office buildings. Retail spaces. Delivered on time.',
    },
    {
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Renovation & Remodeling',
      description: 'Transform existing spaces. Enhanced functionality. Aesthetic appeal.',
    },
    {
      image: 'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Project Management',
      description: 'End-to-end coordination. Quality execution. Seamless delivery.',
    },
  ];

  return (
    <section id="services" className="py-24 bg-charcoal relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent"></div>
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16 space-y-6"
        >
          <div className="inline-flex items-center gap-3 bg-white/5 border border-gold/40 px-5 py-3 rounded-[2px]">
            <span className="w-2 h-2 bg-gold"></span>
            <span className="text-xs font-black tracking-[0.2em] text-white/70 uppercase">Our Services</span>
          </div>

          <h2 className="text-5xl lg:text-6xl font-black tracking-tighter text-white leading-tight max-w-3xl mx-auto">
            Comprehensive Construction <span className="text-gold">Solutions</span>
          </h2>

          <p className="text-xl text-white/60 font-medium max-w-2xl mx-auto leading-relaxed tracking-tight">
            From concept to completion. Exceptional results. All disciplines.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          transition={{ staggerChildren: 0.12 }}
          className="grid md:grid-cols-2 gap-8"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } } }}
              className="bg-white/5 border border-gold/15 border-l-[3px] border-l-gold p-8 hover:shadow-[0_8px_30px_rgba(197,160,89,0.12)] transition-all duration-500 group rounded-[2px] flex gap-6 items-start"
            >
              <div className="flex-shrink-0 w-20 h-20 rounded-[2px] overflow-hidden border border-charcoal/10 group-hover:border-gold/50 transition-colors duration-500">
                <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-black tracking-tighter text-white mb-3 group-hover:text-gold transition-colors duration-300">{service.title}</h3>
                <p className="text-base text-white/60 leading-relaxed font-medium">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center bg-white/5 border border-gold/20 p-12 shadow-sm rounded-[2px]"
        >
          <h3 className="text-3xl font-black tracking-tighter text-white mb-4">Need a Custom Solution?</h3>
          <p className="text-lg text-white/60 mb-8 font-medium tracking-tight">Discuss your unique project. Create a tailored approach.</p>
          <a
            href="#contact"
            className="group bg-gold text-charcoal px-12 py-5 text-base font-black tracking-tighter uppercase hover:bg-charcoal hover:text-white transition-all duration-500 inline-flex items-center gap-3 shadow-[0_4px_20px_rgba(197,160,89,0.3)] rounded-[2px]"
          >
            Schedule Consultation
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Standards;
