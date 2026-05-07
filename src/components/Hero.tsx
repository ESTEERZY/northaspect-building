import { motion } from 'framer-motion';

const Hero = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' as const } }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center bg-charcoal overflow-hidden">
      {/* Hero Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-charcoal/70 z-10"></div>
        <img
          src="https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="Luxury Architecture"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal via-transparent to-charcoal z-10"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-20 flex flex-col lg:flex-row items-center gap-12">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ staggerChildren: 0.2 }}
          className="w-full lg:w-3/5 py-20 lg:py-32"
        >
          {/* Badge */}
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-3 bg-gold/10 backdrop-blur-md px-4 py-2 rounded-[2px] mb-8 border border-gold/30 shadow-[0_0_15px_rgba(197,160,89,0.1)]">
            <span className="w-2 h-2 bg-gold animate-pulse rounded-[2px]"></span>
            <span className="text-xs font-black tracking-[0.2em] text-gold uppercase">Luxury Home Builder</span>
          </motion.div>

          <motion.h1 variants={fadeInUp} className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter text-white mb-6 leading-[1.05]">
            The Future of <br className="hidden lg:block"/>
            <span className="text-gold">Residential Building.</span>
          </motion.h1>
          
          <motion.h2 variants={fadeInUp} className="text-xl lg:text-2xl font-medium tracking-wide text-white/80 mb-10 max-w-2xl">
            We design and construct masterworks that redefine modern living. Experience unparalleled craftsmanship and a seamless architectural journey from concept to completion.
          </motion.h2>

          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 mt-8">
            <a
              href="#projects"
              className="group bg-gold text-charcoal px-10 py-5 text-sm lg:text-base font-black tracking-widest uppercase hover:bg-white transition-all duration-500 inline-flex items-center justify-center gap-3 rounded-[2px] shadow-[0_0_20px_rgba(197,160,89,0.3)] hover:shadow-[0_0_40px_rgba(197,160,89,0.6)]"
            >
              View Portfolio
            </a>
            <a
              href="#system"
              className="group bg-transparent text-white border border-white/30 px-10 py-5 text-sm lg:text-base font-bold tracking-widest uppercase hover:bg-white/10 hover:border-gold transition-all duration-500 inline-flex items-center justify-center gap-3 rounded-[2px]"
            >
              The Architectural Journey
            </a>
          </motion.div>
        </motion.div>

        {/* Floating Image / UI element representation */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
          className="w-full lg:w-2/5 hidden lg:block relative"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-gold to-white/20 blur opacity-30 rounded-[2px]"></div>
          <img
            src="https://images.pexels.com/photos/32870/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=800"
            alt="Custom Build Details"
            className="relative w-full h-auto rounded-[2px] shadow-2xl border border-white/20"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;