import React from 'react';

const SystemBreakdown = () => {
  const steps = [
    {
      id: "01",
      title: "Capture Leads Instantly",
      description: "We deploy high-converting funnels and chatbot entry points that turn traffic into qualified prospects 24/7.",
      image: "/assets/lead_inbox.png"
    },
    {
      id: "02",
      title: "Qualify with AI",
      description: "Our autonomous agents engage prospects in real-time, asking qualifying questions and dropping bad leads before they reach your team.",
      image: "/assets/chatbot_conversation.png"
    },
    {
      id: "03",
      title: "Convert Automatically",
      description: "Qualified leads are instantly booked into your calendar or nurtured through intelligent follow-up workflows until they buy.",
      image: "/assets/automation_workflow.png"
    }
  ];

  return (
    <section id="system" className="py-24 bg-darkgray relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent"></div>
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-3xl mb-16">
          <h2 className="text-sm font-black tracking-[0.2em] text-gold uppercase mb-4 animate-fade-in">Inside The System</h2>
          <h3 className="text-4xl md:text-5xl font-black tracking-tighter text-white mb-6 leading-tight animate-slide-up">
            How we turn clicks into booked appointments.
          </h3>
          <p className="text-lg text-white/70 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            Stop relying on manual outreach. We build systems that run entirely on their own.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div 
              key={step.id} 
              className="bg-charcoal border border-white/5 rounded-xl p-8 hover:border-gold/30 transition-all duration-300 group hover:-translate-y-2 relative overflow-hidden"
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
              
              <div className="relative rounded-lg overflow-hidden border border-white/10 shadow-lg aspect-[4/3]">
                <div className="absolute inset-0 bg-charcoal/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                <img 
                  src={step.image} 
                  alt={step.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
    </section>
  );
};

export default SystemBreakdown;
