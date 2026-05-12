import { motion } from 'framer-motion';

const ProcessBreakdown = () => {
  const steps = [
    {
      id: "01",
      title: "Luxury Project Gallery",
      description: "Explore our portfolio of award-winning custom homes. Draw inspiration from our masterworks to begin shaping your vision.",
      image: "https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: "02",
      title: "Seamless Client Onboarding",
      description: "Experience white-glove service from day one. We pair you with an elite architectural consultant to map every detail.",
      image: "https://images.pexels.com/photos/834892/pexels-photo-834892.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: "03",
      title: "Real-Time Construction Updates",
      description: "Total transparency through the build phase. Watch your dream home come to life with weekly site reports and milestones.",
      image: "https://images.pexels.com/photos/2244746/pexels-photo-2244746.jpeg?auto=compress&cs=tinysrgb&w=800"
    }
  ];

  return (
    <section id="process" className="py-24 bg-charcoal relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mb-16"
        >
          <h2 className="text-sm font-black tracking-[0.2em] text-gold uppercase mb-4">The Architectural Journey</h2>
          <h3 className="text-4xl md:text-5xl font-black tracking-tighter text-white mb-6 leading-tight">
            From Vision to Masterpiece.
          </h3>
          <p className="text-lg text-white/70">
            A streamlined, transparent, and entirely bespoke process designed to make building your luxury home an effortless experience.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          transition={{ staggerChildren: 0.15 }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {steps.map((step) => (
            <motion.div
              key={step.id}
              variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' as const } } }}
              className="bg-darkgray border border-white/5 rounded-[2px] p-8 hover:border-gold/30 transition-all duration-300 group hover:-translate-y-2 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-bl-full -z-10 group-hover:bg-gold/10 transition-colors duration-500"></div>

              <div className="text-6xl font-black text-white/5 mb-6 group-hover:text-gold/20 transition-colors duration-300">
                {step.id}
              </div>

              <h4 className="text-2xl font-bold text-white mb-4 group-hover:text-gold transition-colors duration-300">
                {step.title}
              </h4>
              <p className="text-white/60 mb-8 min-h-[80px]">
                {step.description}
              </p>

              <div className="relative rounded-[2px] overflow-hidden border border-white/10 shadow-lg aspect-[4/3]">
                <div className="absolute inset-0 bg-charcoal/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
    </section>
  );
};

export default ProcessBreakdown;
