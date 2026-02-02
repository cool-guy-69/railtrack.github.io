
import React, { useState } from 'react';

const TESTIMONIALS = [
  {
    name: "Arun S.",
    role: "Logistics Manager",
    text: "The precision of RailTrack's PNR forecast is remarkable. It has significantly optimized my business travel planning across the western region.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop"
  },
  {
    name: "Deepika R.",
    role: "Corporate Executive",
    text: "I rely exclusively on the Coach Position feature. Knowing the platform entry point in advance allows for a seamless boarding experience.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop"
  },
  {
    name: "Rohan K.",
    role: "Senior Consultant",
    text: "Professional UI and accurate real-time data. RailTrack is undoubtedly the most reliable railway utility platform available today.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop"
  }
];

const Testimonials: React.FC = () => {
  const [active, setActive] = useState(0);

  return (
    <section id="testimonials" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-indigo-600 font-bold uppercase tracking-widest text-xs">User Feedback</h2>
            <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              A Trusted Standard <br /> for Commuters.
            </h3>
            <div className="flex gap-4">
              <button 
                onClick={() => setActive((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)}
                className="w-12 h-12 border border-slate-200 rounded-full flex items-center justify-center hover:bg-slate-900 hover:text-white transition-all active:scale-95"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" /></svg>
              </button>
              <button 
                onClick={() => setActive((prev) => (prev + 1) % TESTIMONIALS.length)}
                className="w-12 h-12 border border-slate-200 rounded-full flex items-center justify-center hover:bg-slate-900 hover:text-white transition-all active:scale-95"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" /></svg>
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="bg-slate-50 rounded-3xl p-10 md:p-14 border border-slate-200 shadow-sm">
              <div className="flex items-center gap-6 mb-8">
                <img src={TESTIMONIALS[active].image} className="w-16 h-16 rounded-full border border-slate-200 shadow-md object-cover" alt={TESTIMONIALS[active].name} />
                <div>
                  <h4 className="font-bold text-xl text-slate-900 leading-tight">{TESTIMONIALS[active].name}</h4>
                  <p className="text-indigo-600 font-semibold text-xs tracking-wider uppercase">{TESTIMONIALS[active].role}</p>
                </div>
              </div>
              <p className="text-xl text-slate-700 leading-relaxed font-medium italic">
                "{TESTIMONIALS[active].text}"
              </p>
              <div className="flex gap-1 mt-8">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-indigo-600" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
