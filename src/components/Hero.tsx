import { motion } from 'framer-motion';

const Hero = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' as const } }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-charcoal overflow-hidden">
      {/* Full-screen background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&dpr=1"
          alt="Luxury Residential Home at Dusk"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: 'center center' }}
          loading="eager"
        />
        {/* Dark overlay — 45% opacity for legibility */}
        <div className="absolute inset-0 bg-black/45"></div>
        {/* Subtle gradient to ground the text */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20"></div>
      </div>

      {/* Centered content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12 py-32 flex flex-col items-center text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.18 }}
          className="max-w-4xl"
        >
          {/* Badge */}
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md px-5 py-2.5 rounded-[2px] mb-10 border border-gold/40 shadow-[0_0_20px_rgba(197,160,89,0.15)]">
            <span className="w-2 h-2 bg-gold animate-pulse rounded-[2px]"></span>
            <span className="text-xs font-black tracking-[0.25em] text-gold uppercase">Luxury Home Builder</span>
          </motion.div>

          <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white mb-6 leading-[1.02]">
            The Future of<br />
            <span className="text-gold">Residential Building.</span>
          </motion.h1>

          <motion.p variants={fadeInUp} className="text-xl lg:text-2xl font-medium text-white/85 mb-12 max-w-2xl mx-auto leading-relaxed">
            We design and construct masterworks that redefine modern living. Experience unparalleled craftsmanship and a seamless architectural journey from concept to completion.
          </motion.p>

          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#results"
              className="group bg-gold text-charcoal px-10 py-5 text-sm lg:text-base font-black tracking-widest uppercase hover:bg-white transition-all duration-500 inline-flex items-center justify-center gap-3 rounded-[2px] shadow-[0_4px_30px_rgba(197,160,89,0.4)] hover:shadow-[0_4px_50px_rgba(197,160,89,0.7)]"
            >
              View Portfolio
            </a>
            <a
              href="#system"
              className="group bg-transparent text-white border border-white/50 px-10 py-5 text-sm lg:text-base font-bold tracking-widest uppercase hover:bg-white/15 hover:border-gold transition-all duration-500 inline-flex items-center justify-center gap-3 rounded-[2px]"
            >
              The Architectural Journey
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom fade to next section */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-charcoal to-transparent"></div>
    </section>
  );
};

export default Hero;