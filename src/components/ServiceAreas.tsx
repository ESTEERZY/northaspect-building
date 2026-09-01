import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Search, Compass, CheckCircle2 } from 'lucide-react';
import { serviceAreasData } from '../data/serviceAreas';

const ServiceAreas = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'northern-beaches' | 'north-shore'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredRegions = serviceAreasData.map((region) => {
    if (activeTab !== 'all' && region.id !== activeTab) {
      return null;
    }
    const matchingSuburbs = region.suburbs.filter(
      (suburb) =>
        suburb.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        suburb.postcode.includes(searchQuery)
    );

    if (matchingSuburbs.length === 0 && searchQuery.trim() !== '') {
      return null;
    }

    return {
      ...region,
      suburbs: searchQuery.trim() !== '' ? matchingSuburbs : region.suburbs,
    };
  }).filter(Boolean);

  const totalSuburbsCount = serviceAreasData.reduce(
    (acc, region) => acc + region.suburbs.length,
    0
  );

  return (
    <section id="service-areas" className="py-24 bg-darkgray relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent"></div>
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12 space-y-4"
        >
          <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 px-3.5 py-1.5 rounded-full text-gold text-[11px] font-black tracking-[0.2em] uppercase mx-auto">
            <Compass className="w-3.5 h-3.5 text-gold" />
            Service Locations &bull; Sydney NSW
          </div>

          <h2 className="text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
            Primary Service <span className="text-gold">Areas &amp; Suburbs</span>
          </h2>

          <p className="text-base lg:text-lg text-white/70 max-w-2xl mx-auto font-normal leading-relaxed">
            NorthAspect Building provides premium custom residential construction, luxury renovations, and artisan carpentry across {totalSuburbsCount} primary suburbs in Sydney's Northern Beaches &amp; North Shore.
          </p>
        </motion.div>

        {/* Filter Tabs & Search Bar */}
        <div className="max-w-4xl mx-auto mb-12 flex flex-col md:flex-row items-center justify-between gap-4 bg-white/5 border border-white/10 p-2.5 rounded-[2px]">
          {/* Region Tabs */}
          <div className="flex items-center gap-2 w-full md:w-auto">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 text-xs font-black uppercase tracking-wider transition-all rounded-[2px] ${
                activeTab === 'all'
                  ? 'bg-gold text-charcoal shadow-[0_0_15px_rgba(197,160,89,0.3)]'
                  : 'text-white/70 hover:text-white hover:bg-white/5'
              }`}
            >
              All Suburbs ({totalSuburbsCount})
            </button>
            <button
              onClick={() => setActiveTab('northern-beaches')}
              className={`px-4 py-2 text-xs font-black uppercase tracking-wider transition-all rounded-[2px] ${
                activeTab === 'northern-beaches'
                  ? 'bg-gold text-charcoal shadow-[0_0_15px_rgba(197,160,89,0.3)]'
                  : 'text-white/70 hover:text-white hover:bg-white/5'
              }`}
            >
              Northern Beaches
            </button>
            <button
              onClick={() => setActiveTab('north-shore')}
              className={`px-4 py-2 text-xs font-black uppercase tracking-wider transition-all rounded-[2px] ${
                activeTab === 'north-shore'
                  ? 'bg-gold text-charcoal shadow-[0_0_15px_rgba(197,160,89,0.3)]'
                  : 'text-white/70 hover:text-white hover:bg-white/5'
              }`}
            >
              North Shore
            </button>
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-white/40 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search suburb or postcode..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-charcoal/80 border border-white/10 text-white text-xs pl-9 pr-4 py-2 focus:outline-none focus:border-gold transition-colors rounded-[2px] placeholder:text-white/30"
            />
          </div>
        </div>

        {/* Region & Suburb Grid */}
        <div className="space-y-10 max-w-6xl mx-auto">
          {filteredRegions.length > 0 ? (
            filteredRegions.map((regionData) => {
              if (!regionData) return null;
              return (
                <motion.div
                  key={regionData.id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="bg-charcoal/60 border border-white/10 p-6 md:p-8 rounded-[2px]"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-6 border-b border-white/10 pb-4">
                    <div>
                      <h3 className="text-xl md:text-2xl font-black text-white flex items-center gap-2">
                        <MapPin className="w-5 h-5 text-gold flex-shrink-0" />
                        <span>{regionData.region}</span>
                      </h3>
                      <p className="text-xs md:text-sm text-white/60 font-medium mt-1">
                        {regionData.description}
                      </p>
                    </div>
                    <div className="text-xs font-bold text-gold uppercase tracking-widest bg-gold/10 px-3 py-1 border border-gold/20 rounded-[2px] self-start md:self-auto">
                      {regionData.suburbs.length} Locations
                    </div>
                  </div>

                  {/* Suburbs Badge Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                    {regionData.suburbs.map((suburb) => (
                      <div
                        key={`${suburb.name}-${suburb.postcode}`}
                        className="group flex items-center justify-between p-2.5 bg-white/[0.03] border border-white/5 hover:border-gold/50 hover:bg-gold/10 transition-all duration-300 rounded-[2px]"
                      >
                        <div className="flex items-center gap-1.5 overflow-hidden">
                          <CheckCircle2 className="w-3.5 h-3.5 text-gold flex-shrink-0 opacity-70 group-hover:opacity-100" />
                          <span className="text-xs font-bold text-white/90 group-hover:text-white truncate">
                            {suburb.name}
                          </span>
                        </div>
                        <span className="text-[10px] font-extrabold text-gold bg-gold/10 px-1.5 py-0.5 border border-gold/20 rounded-[2px] ml-1 flex-shrink-0">
                          {suburb.postcode}
                        </span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })
          ) : (
            <div className="text-center py-12 text-white/50 text-sm">
              No matching suburb or postcode found for "{searchQuery}".
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ServiceAreas;
