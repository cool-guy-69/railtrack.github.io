
import React, { useState } from 'react';

interface HeroProps {
  onTrack: (val: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onTrack }) => {
  const [trainNo, setTrainNo] = useState('');

  const handleTrack = () => {
    if (trainNo.length >= 5) {
      onTrack(trainNo);
      document.getElementById('live-status')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden cinematic-gradient">
      {/* Cinematic Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1624490740050-7164923e3e0c?q=80&w=2400&auto=format&fit=crop" 
          className="w-full h-full object-cover scale-110 blur-[2px] opacity-30"
          alt="Vande Bharat Background"
        />
        <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-[#02040a] to-transparent z-20"></div>
      </div>

      <div className="container mx-auto px-6 relative z-30 text-center">
        <div className="max-w-5xl mx-auto space-y-12 reveal">
          <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full glass border-indigo-500/20 text-indigo-400 font-black text-[10px] md:text-xs uppercase tracking-[0.4em] mb-4 shadow-2xl">
            <span className="w-2 h-2 rounded-full bg-indigo-500 shadow-[0_0_15px_#6366f1]"></span>
            Next Generation Travel
          </div>

          <h1 className="text-6xl md:text-8xl lg:text-9xl font-[900] text-white tracking-tighter leading-none text-glow">
            Journey <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-white to-white">Perfected.</span>
          </h1>

          <p className="text-lg md:text-2xl text-slate-400 max-w-3xl mx-auto font-medium leading-relaxed">
            The most advanced Indian Railway intelligence suite. Live tracking, PNR forecasting, and station mapping—designed for the elite traveler.
          </p>

          <div className="flex flex-col md:flex-row items-center gap-4 p-2.5 bg-white/5 backdrop-blur-3xl rounded-[2.5rem] border border-white/10 shadow-[0_30px_100px_rgba(0,0,0,0.5)] max-w-3xl mx-auto group focus-within:ring-2 focus-within:ring-indigo-500/50 transition-all">
            <div className="flex items-center flex-grow w-full px-8">
               <svg className="w-7 h-7 text-slate-500 mr-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" strokeWidth="3" strokeLinecap="round"/></svg>
               <input 
                type="text" 
                maxLength={5}
                placeholder="Enter Train Number (e.g. 12002)" 
                className="w-full py-5 md:py-7 bg-transparent text-white focus:outline-none text-xl md:text-3xl font-black placeholder:text-slate-700"
                value={trainNo}
                onChange={(e) => setTrainNo(e.target.value.replace(/\D/g, ''))}
                onKeyDown={(e) => e.key === 'Enter' && handleTrack()}
              />
            </div>
            <button 
              onClick={handleTrack}
              className="w-full md:w-auto px-12 py-5 md:py-7 bg-indigo-600 text-white rounded-[2rem] font-black text-lg md:text-xl hover:bg-indigo-700 transition-all shadow-2xl shadow-indigo-600/30 active:scale-95 whitespace-nowrap"
            >
              Start Journey
            </button>
          </div>

          <div className="grid grid-cols-3 gap-8 md:gap-24 pt-16 max-w-4xl mx-auto">
             <div className="space-y-1">
                <p className="text-2xl md:text-4xl font-black text-white">8K+</p>
                <p className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-slate-500">Live Fleets</p>
             </div>
             <div className="space-y-1">
                <p className="text-2xl md:text-4xl font-black text-white">2.5M</p>
                <p className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-slate-500">Commuters</p>
             </div>
             <div className="space-y-1">
                <p className="text-2xl md:text-4xl font-black text-white">100%</p>
                <p className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-slate-500">Precision</p>
             </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce opacity-20">
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 14l-7 7m0 0l-7-7m7 7V3" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
      </div>
    </section>
  );
};

export default Hero;
