import { motion } from 'framer-motion';

const Advantage = () => {
  const advantages = [
    {
      image: 'https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Modern Architecture',
      description: 'Award-winning architectural designs that maximize natural light and open living spaces.',
    },
    {
      image: 'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Clean Timber Finishes',
      description: 'Premium, sustainably sourced timber finishes that add warmth and character to every room.',
    },
    {
      image: 'https://images.pexels.com/photos/2581922/pexels-photo-2581922.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Luxury Kitchens',
      description: 'State-of-the-art culinary spaces featuring stone benchtops and high-end integrated appliances.',
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' as const } }
  };

  return (
    <section id="features" className="py-24 bg-gold/5 relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16 space-y-6"
        >
          <div className="inline-flex items-center gap-3 bg-charcoal/10 backdrop-blur-md border border-gold/40 px-5 py-3 rounded-[2px] shadow-lg">
            <span className="w-2 h-2 bg-gold"></span>
            <span className="text-xs font-black tracking-[0.2em] text-charcoal/70 uppercase">Premium Craftsmanship</span>
          </div>

          <h2 className="text-5xl lg:text-6xl font-black tracking-tighter text-charcoal leading-tight max-w-3xl mx-auto">
            The Apex <span className="text-gold">Advantage</span>
          </h2>

          <p className="text-xl text-charcoal/60 font-medium leading-relaxed max-w-2xl mx-auto">
            We don't just build houses. We craft high-end, custom living spaces designed to elevate your lifestyle.
          </p>
        </motion.div>

        {/* 3-Column Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid md:grid-cols-3 gap-8"
        >
          {advantages.map((item) => (
            <motion.div
              key={item.title}
              variants={cardVariants}
              className="group flex flex-col items-center text-center p-8 bg-white border border-gold/20 rounded-[2px] hover:-translate-y-2 hover:border-gold hover:shadow-[0_8px_40px_rgba(197,160,89,0.15)] transition-all duration-500"
            >
              <div className="w-full aspect-video mb-8 overflow-hidden rounded-[2px] border border-charcoal/10 group-hover:border-gold/50 transition-colors duration-500">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <h3 className="text-2xl font-bold tracking-tight text-charcoal mb-4 group-hover:text-gold transition-colors duration-500">{item.title}</h3>
              <p className="text-base text-charcoal/60 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Advantage;
