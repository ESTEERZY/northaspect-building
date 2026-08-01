import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  User, 
  Mail, 
  MapPin, 
  DollarSign, 
  MessageSquare, 
  CheckCircle2, 
  ShieldCheck, 
  Calendar as CalendarIcon, 
  Clock, 
  Video, 
  PhoneCall, 
  ChevronLeft, 
  Sparkles
} from 'lucide-react';

const Contact = () => {
  // Helper to generate upcoming 10 business days
  const generateAvailableDays = () => {
    const days = [];
    const today = new Date();
    let current = new Date(today);
    current.setDate(current.getDate() + 1); // Start from tomorrow

    while (days.length < 10) {
      // 0 is Sunday, 6 is Saturday
      const dayOfWeek = current.getDay();
      if (dayOfWeek !== 0 && dayOfWeek !== 6) {
        days.push({
          dateObj: new Date(current),
          formattedDate: current.toLocaleDateString('en-AU', { weekday: 'short', month: 'short', day: 'numeric' }),
          dayName: current.toLocaleDateString('en-AU', { weekday: 'short' }),
          dayNum: current.getDate(),
          monthName: current.toLocaleDateString('en-AU', { month: 'short' }),
          isoString: current.toISOString().split('T')[0]
        });
      }
      current.setDate(current.getDate() + 1);
    }
    return days;
  };

  const availableDays = generateAvailableDays();
  const timeSlots = [
    '09:00 AM',
    '10:30 AM',
    '01:00 PM',
    '02:30 PM',
    '04:00 PM'
  ];

  const [selectedDayIndex, setSelectedDayIndex] = useState(0);
  const [selectedTime, setSelectedTime] = useState('10:30 AM');
  const [callType, setCallType] = useState<'video' | 'phone'>('video');
  const [step, setStep] = useState<1 | 2>(1);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    budget: '$1M – $2M',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const selectedDay = availableDays[selectedDayIndex];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-24 bg-charcoal border-t border-white/10 relative overflow-hidden">
      <div id="book-a-call" className="absolute -top-24 left-0"></div>
      <div id="calendar" className="absolute -top-24 left-0"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-gold/5 via-charcoal to-charcoal pointer-events-none"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Header Title Block */}
        <div className="max-w-3xl mb-16 text-left">
          <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 px-4 py-1.5 rounded-full text-gold text-[11px] font-black tracking-[0.2em] uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            Book a Discovery Call
          </div>
          <h2 className="text-4xl lg:text-6xl font-black tracking-tight text-white leading-tight mb-4">
            Schedule Your <span className="text-gold">Discovery Call.</span>
          </h2>
          <p className="text-base lg:text-lg text-white/70 font-normal leading-relaxed">
            Select a date and time on our calendar below to book a direct 30-minute consultation with our architectural directors.
          </p>
        </div>

        {/* Interactive Booking Calendar Container */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Meeting Summary & Benefits */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-4 bg-gradient-to-br from-white/[0.04] to-white/[0.01] p-8 border border-white/10 rounded-[2px] space-y-6"
          >
            <div className="border-b border-white/10 pb-6">
              <span className="text-[10px] font-mono font-bold tracking-[0.2em] text-gold uppercase block mb-2">Discovery Protocol</span>
              <h3 className="text-2xl font-black text-white tracking-tight">30-Min Architectural Consultation</h3>
              <p className="text-xs text-white/60 mt-2 leading-relaxed">
                Direct strategy session with Cole &amp; senior structural lead to evaluate your project scope and feasibility.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3 text-white/80 text-sm">
                <Clock className="w-4 h-4 text-gold shrink-0" />
                <span>30 Minutes &bull; Confidential Session</span>
              </div>
              <div className="flex items-center gap-3 text-white/80 text-sm">
                <Video className="w-4 h-4 text-gold shrink-0" />
                <span>Google Meet / HD Video Call or Phone</span>
              </div>
              <div className="flex items-center gap-3 text-white/80 text-sm">
                <ShieldCheck className="w-4 h-4 text-gold shrink-0" />
                <span>NDA Protected &bull; Complimentary</span>
              </div>
            </div>

            {/* Selected Slot Preview Box */}
            <div className="bg-gold/10 border border-gold/30 p-5 rounded-[2px] space-y-2">
              <div className="text-[10px] font-bold tracking-widest text-gold uppercase">Selected Appointment</div>
              <div className="text-lg font-black text-white flex items-center gap-2">
                <CalendarIcon className="w-4 h-4 text-gold" />
                <span>{selectedDay.formattedDate}</span>
              </div>
              <div className="text-sm font-semibold text-white/90 flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-gold" />
                <span>{selectedTime} (AEST)</span>
              </div>
            </div>

            {/* Process Highlights */}
            <div className="pt-4 border-t border-white/10 space-y-3">
              {[
                'Review site context & local planning constraints',
                'Preliminary budget & construction timeline assessment',
                'Custom architectural portfolio walk-through'
              ].map((benefit, i) => (
                <div key={i} className="flex items-start gap-2 text-xs text-white/60">
                  <CheckCircle2 className="w-3.5 h-3.5 text-gold shrink-0 mt-0.5" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Interactive Date & Time Picker + Details Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-8 bg-gradient-to-br from-white/[0.06] to-white/[0.02] p-8 md:p-10 border border-white/10 shadow-2xl rounded-[2px] relative overflow-hidden backdrop-blur-xl"
          >
            {/* Top Accent Line */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent" />

            {/* Step Progress Indicator */}
            <div className="flex items-center justify-between border-b border-white/10 pb-6 mb-8">
              <div className="flex items-center gap-3">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-black transition-colors ${step === 1 ? 'bg-gold text-charcoal' : 'bg-gold/20 text-gold'}`}>
                  1
                </div>
                <span className={`text-xs font-bold uppercase tracking-wider ${step === 1 ? 'text-white' : 'text-white/40'}`}>
                  Select Date &amp; Time
                </span>
              </div>
              <div className="w-12 h-px bg-white/10 hidden sm:block"></div>
              <div className="flex items-center gap-3">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-black transition-colors ${step === 2 ? 'bg-gold text-charcoal' : 'bg-white/10 text-white/40'}`}>
                  2
                </div>
                <span className={`text-xs font-bold uppercase tracking-wider ${step === 2 ? 'text-white' : 'text-white/40'}`}>
                  Your Details
                </span>
              </div>
            </div>

            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 px-6 text-center space-y-5 bg-gold/10 border border-gold/30 rounded-[2px]"
              >
                <CheckCircle2 className="w-16 h-16 text-gold mx-auto" />
                <h4 className="text-2xl font-black text-white tracking-tight">Discovery Call Confirmed!</h4>
                <p className="text-sm text-white/80 max-w-md mx-auto leading-relaxed">
                  Your 30-minute discovery call has been scheduled for <strong className="text-gold">{selectedDay.formattedDate} at {selectedTime} (AEST)</strong>.
                </p>
                <p className="text-xs text-white/60 max-w-md mx-auto">
                  A calendar invite and video link have been sent to <span className="text-white font-mono">{formData.email || 'your email'}</span>.
                </p>
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setStep(1);
                  }}
                  className="mt-6 text-xs font-bold bg-gold text-charcoal px-6 py-3 uppercase tracking-widest hover:bg-white transition-colors rounded-[2px]"
                >
                  Book Another Discovery Call
                </button>
              </motion.div>
            ) : step === 1 ? (
              <div className="space-y-8">
                
                {/* Call Type Selection */}
                <div>
                  <label className="block text-[11px] font-extrabold uppercase tracking-widest text-white/70 mb-3">
                    Call Medium
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    <button
                      type="button"
                      onClick={() => setCallType('video')}
                      className={`p-4 border rounded-[2px] flex items-center justify-center gap-3 text-xs font-bold uppercase tracking-wider transition-all ${
                        callType === 'video' 
                          ? 'bg-gold text-charcoal border-gold shadow-[0_0_15px_rgba(197,160,89,0.3)]' 
                          : 'bg-white/[0.03] text-white/70 border-white/10 hover:border-white/30'
                      }`}
                    >
                      <Video className="w-4 h-4" /> Video Call (Google Meet)
                    </button>
                    <button
                      type="button"
                      onClick={() => setCallType('phone')}
                      className={`p-4 border rounded-[2px] flex items-center justify-center gap-3 text-xs font-bold uppercase tracking-wider transition-all ${
                        callType === 'phone' 
                          ? 'bg-gold text-charcoal border-gold shadow-[0_0_15px_rgba(197,160,89,0.3)]' 
                          : 'bg-white/[0.03] text-white/70 border-white/10 hover:border-white/30'
                      }`}
                    >
                      <PhoneCall className="w-4 h-4" /> Phone Call
                    </button>
                  </div>
                </div>

                {/* 1. Date Picker Grid */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <label className="text-[11px] font-extrabold uppercase tracking-widest text-white/70 flex items-center gap-2">
                      <CalendarIcon className="w-3.5 h-3.5 text-gold" /> Select Date (Available Business Days)
                    </label>
                    <span className="text-[10px] text-gold/80 font-mono font-semibold uppercase">Australia / Sydney Time (AEST)</span>
                  </div>

                  {/* Horizontal Scroll / Grid of Days */}
                  <div className="grid grid-cols-5 gap-2.5 sm:gap-3">
                    {availableDays.map((day, idx) => (
                      <button
                        key={day.isoString}
                        type="button"
                        onClick={() => setSelectedDayIndex(idx)}
                        className={`p-3 rounded-[2px] border text-center transition-all flex flex-col items-center justify-center gap-1 ${
                          selectedDayIndex === idx
                            ? 'bg-gold text-charcoal border-gold shadow-[0_0_20px_rgba(197,160,89,0.4)] scale-[1.02]'
                            : 'bg-white/[0.03] text-white border-white/10 hover:border-gold/50 hover:bg-white/[0.06]'
                        }`}
                      >
                        <span className={`text-[10px] font-black uppercase tracking-widest ${selectedDayIndex === idx ? 'text-charcoal' : 'text-white/50'}`}>
                          {day.dayName}
                        </span>
                        <span className="text-xl font-black leading-none">
                          {day.dayNum}
                        </span>
                        <span className={`text-[9px] font-bold uppercase ${selectedDayIndex === idx ? 'text-charcoal/80' : 'text-gold'}`}>
                          {day.monthName}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* 2. Time Slots Grid */}
                <div>
                  <label className="block text-[11px] font-extrabold uppercase tracking-widest text-white/70 mb-3 flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-gold" /> Select Available Time Slot
                  </label>

                  <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
                    {timeSlots.map((slot) => (
                      <button
                        key={slot}
                        type="button"
                        onClick={() => setSelectedTime(slot)}
                        className={`py-3 px-2 border rounded-[2px] text-xs font-bold tracking-wider transition-all text-center ${
                          selectedTime === slot
                            ? 'bg-gold text-charcoal border-gold shadow-[0_0_15px_rgba(197,160,89,0.3)]'
                            : 'bg-white/[0.03] text-white/80 border-white/10 hover:border-white/30 hover:text-white'
                        }`}
                      >
                        {slot}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Next Step Button */}
                <div className="pt-4 border-t border-white/10 flex justify-end">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="bg-gold border border-gold text-charcoal px-8 py-4 text-xs font-black tracking-[0.15em] uppercase hover:bg-white hover:border-white transition-all duration-300 inline-flex items-center gap-2 rounded-[2px] shadow-[0_0_20px_rgba(197,160,89,0.3)]"
                  >
                    <span>Continue to Details</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

              </div>
            ) : (
              /* Step 2: Contact Details Form */
              <form onSubmit={handleSubmit} className="space-y-5">
                
                {/* Back button */}
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="text-xs font-bold text-gold hover:text-white uppercase tracking-wider flex items-center gap-1.5 mb-2 transition-colors"
                >
                  <ChevronLeft className="w-4 h-4" /> Back to Calendar
                </button>

                {/* Row 1: Name & Email */}
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-[11px] font-extrabold uppercase tracking-widest text-white/70 mb-2 flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5 text-gold" /> Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/[0.04] text-white text-sm border border-white/10 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30 transition-all rounded-[2px] placeholder:text-white/30"
                      placeholder="Jane Smith"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-[11px] font-extrabold uppercase tracking-widest text-white/70 mb-2 flex items-center gap-1.5">
                      <Mail className="w-3.5 h-3.5 text-gold" /> Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/[0.04] text-white text-sm border border-white/10 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30 transition-all rounded-[2px] placeholder:text-white/30"
                      placeholder="jane@example.com"
                    />
                  </div>
                </div>

                {/* Row 2: Location & Phone */}
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="location" className="block text-[11px] font-extrabold uppercase tracking-widest text-white/70 mb-2 flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-gold" /> Project Location / Address *
                    </label>
                    <input
                      type="text"
                      id="location"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/[0.04] text-white text-sm border border-white/10 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30 transition-all rounded-[2px] placeholder:text-white/30"
                      placeholder="e.g. 124 Ocean Drive, Sorrento VIC"
                    />
                  </div>

                  <div>
                    <label htmlFor="budget" className="block text-[11px] font-extrabold uppercase tracking-widest text-white/70 mb-2 flex items-center gap-1.5">
                      <DollarSign className="w-3.5 h-3.5 text-gold" /> Estimated Investment *
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/[0.04] text-white text-sm border border-white/10 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30 transition-all rounded-[2px] cursor-pointer"
                    >
                      <option value="500k_1m" className="bg-charcoal text-white">$500k – $1M</option>
                      <option value="1m_2m" className="bg-charcoal text-white">$1M – $2M</option>
                      <option value="2m_5m" className="bg-charcoal text-white">$2M – $5M</option>
                      <option value="over_5m" className="bg-charcoal text-white">$5M+</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-[11px] font-extrabold uppercase tracking-widest text-white/70 mb-2 flex items-center gap-1.5">
                    <MessageSquare className="w-3.5 h-3.5 text-gold" /> Project Vision / Key Discussion Points *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={3}
                    className="w-full px-4 py-3 bg-white/[0.04] text-white text-sm border border-white/10 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30 transition-all resize-none rounded-[2px] placeholder:text-white/30"
                    placeholder="Briefly describe your architectural style, timeline, or site details..."
                  />
                </div>

                {/* Confirm Call CTA */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="group w-full bg-gold border border-gold text-charcoal px-6 py-4 text-xs font-black tracking-[0.15em] uppercase hover:bg-white hover:border-white transition-all duration-300 inline-flex items-center justify-center gap-2 rounded-[2px] shadow-[0_0_20px_rgba(197,160,89,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]"
                  >
                    <span>Confirm Discovery Call ({selectedDay.dayName} {selectedDay.dayNum} {selectedDay.monthName} @ {selectedTime})</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>

                {/* Guarantee */}
                <div className="pt-3 border-t border-white/10 flex items-center justify-center gap-2 text-[10px] font-bold text-white/50 uppercase tracking-widest text-center">
                  <ShieldCheck className="w-3.5 h-3.5 text-gold flex-shrink-0" />
                  Instant Calendar Booking &bull; NDA Protected &bull; Zero Spam
                </div>

              </form>
            )}

          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Contact;
