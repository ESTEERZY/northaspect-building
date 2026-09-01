import { useState } from 'react';
import { motion } from 'framer-motion';
import { Home, Hammer, ShieldAlert, Sun, ArrowRight, CheckCircle } from 'lucide-react';
import { serviceTaxonomy, ServiceCategory } from '../data/servicesData';
import { clientConfig } from '../data/clientConfig';

const iconMap: Record<string, React.ReactNode> = {
  Home: <Home className="w-6 h-6 text-gold" />,
  Hammer: <Hammer className="w-6 h-6 text-gold" />,
  ShieldAlert: <ShieldAlert className="w-6 h-6 text-gold" />,
  Sun: <Sun className="w-6 h-6 text-gold" />,
};

const ServicesTaxonomy = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleSelectService = (categoryId: string) => {
    setSelectedCategory(categoryId);
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-24 bg-charcoal relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gold/5 via-charcoal to-charcoal pointer-events-none"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16 space-y-4"
        >
          <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 px-3.5 py-1.5 rounded-full text-gold text-[11px] font-black tracking-[0.2em] uppercase mx-auto">
            Service Capabilities &bull; {clientConfig.targetBudgetLabel}
          </div>

          <h2 className="text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
            Specialist Residential <span className="text-gold">Services &amp; Alterations</span>
          </h2>

          <p className="text-base lg:text-lg text-white/70 max-w-2xl mx-auto font-normal leading-relaxed">
            From 2nd storey structural additions and high-end home renovations to remedial repairs and bespoke outdoor timber carpentry across Sydney's Northern Beaches &amp; North Shore.
          </p>
        </motion.div>

        {/* 4 Category Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {serviceTaxonomy.map((cat: ServiceCategory, index: number) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group flex flex-col justify-between p-7 bg-white/[0.03] border transition-all duration-300 rounded-[2px] relative overflow-hidden ${
                selectedCategory === cat.id
                  ? 'border-gold bg-gold/10 shadow-[0_0_30px_rgba(197,160,89,0.2)]'
                  : 'border-white/10 hover:border-gold/50 hover:bg-white/[0.05]'
              }`}
            >
              {/* Category Top */}
              <div>
                <div className="w-12 h-12 bg-gold/10 border border-gold/30 flex items-center justify-center rounded-[2px] mb-6 group-hover:scale-110 transition-transform duration-300">
                  {iconMap[cat.iconName] || <Hammer className="w-6 h-6 text-gold" />}
                </div>

                <h3 className="text-xl font-black text-white tracking-tight mb-2 group-hover:text-gold transition-colors">
                  {cat.category}
                </h3>

                <p className="text-xs text-white/60 leading-relaxed mb-6">
                  {cat.description}
                </p>

                {/* Capability Bullet Items */}
                <ul className="space-y-2.5 border-t border-white/10 pt-4 mb-6">
                  {cat.capabilities.map((cap: string) => (
                    <li key={cap} className="flex items-start gap-2 text-xs font-semibold text-white/85">
                      <CheckCircle className="w-3.5 h-3.5 text-gold flex-shrink-0 mt-0.5" />
                      <span>{cap}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Link */}
              <button
                onClick={() => handleSelectService(cat.id)}
                className="w-full text-xs font-bold uppercase tracking-widest text-gold hover:text-white flex items-center justify-between border-t border-white/10 pt-4 group/btn"
              >
                <span>Request Quote</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesTaxonomy;
