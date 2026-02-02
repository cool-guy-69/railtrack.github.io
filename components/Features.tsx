
import React from 'react';

const FEATURES = [
  {
    id: 'live-status',
    title: 'Live Train Tracker',
    description: 'High-precision GPS tracking for over 8,000 daily trains across India.',
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    color: 'bg-indigo-600'
  },
  {
    id: 'pnr',
    title: 'PNR Probability',
    description: 'AI-driven confirmation forecasting with 95% historical accuracy.',
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    color: 'bg-indigo-700'
  },
  {
    id: 'coach',
    title: 'Coach Positioning',
    description: 'Verify coach alignment and platform location before train arrival.',
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    color: 'bg-slate-900'
  }
];

const Features: React.FC = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="features" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-indigo-600 font-bold tracking-widest uppercase text-xs mb-4">Core Technology</h2>
          <h3 className="text-4xl font-extrabold text-slate-900 mb-6 tracking-tight">Advanced Railway Logistics</h3>
          <p className="text-slate-600 font-medium">Standardized tools for the modern Indian commuter, focusing on reliability and data precision.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {FEATURES.map((feature, idx) => (
            <div key={idx} className="p-8 bg-white rounded-2xl shadow-sm border border-slate-200 hover:shadow-xl transition-all duration-300">
              <div className={`w-14 h-14 ${feature.color} rounded-xl flex items-center justify-center mb-6 shadow-lg`}>
                {feature.icon}
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h4>
              <p className="text-slate-500 text-sm leading-relaxed mb-6">{feature.description}</p>
              <button 
                onClick={() => scrollTo(feature.id)}
                className="inline-flex items-center text-indigo-600 font-bold text-sm hover:gap-2 transition-all"
              >
                Access Feature <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
