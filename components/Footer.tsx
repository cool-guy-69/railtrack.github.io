
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-24 relative overflow-hidden border-t border-slate-800">
      {/* Subtle Parallax Texture */}
      <div className="absolute inset-0 opacity-[0.03] grayscale pointer-events-none">
        <img 
          src="https://images.unsplash.com/photo-1544027993-37dbfe43562a?q=80&w=2400&auto=format&fit=crop" 
          className="w-full h-full object-cover" 
          alt="Railway Texture"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* App Download Section (Relocated from Hero) */}
        <div className="max-w-4xl mx-auto text-center mb-24 space-y-10">
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">Deploy the Intelligence Fleet.</h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto font-medium">Download the RailTrack mobile client for push notifications, offline PNR access, and GPS background tracking.</p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <button className="w-full sm:w-auto flex items-center justify-center gap-4 px-10 py-5 bg-white text-slate-900 rounded-2xl font-bold text-lg hover:bg-slate-100 transition-all shadow-2xl active:scale-95">
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C4.18 16.5 4.3 11 7.2 9c1.5-.9 3-.7 4 .2 1 .8 1.8.8 2.8 0 1.2-1 2.8-1.1 4.2-.2 1.2.9 2 2.2 2.4 3.5-2.6 1.3-2.2 4.4-1.8 5.7 1.2 1.3.8 2.5-.2 3.5v.1zm-3.2-15c-.1-1.8 1.5-3.5 3.3-3.6.2 1.8-1.5 3.6-3.3 3.6z"/></svg>
              Apple App Store
            </button>
            <button className="w-full sm:w-auto flex items-center justify-center gap-4 px-10 py-5 bg-indigo-600 text-white rounded-2xl font-bold text-lg hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-500/10 active:scale-95 border border-indigo-500/20">
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M17.5 12c.3 0 .5-.2.5-.5V10c0-3-2.5-5.5-5.5-5.5S7 7 7 10v1.5c0 .3.2.5.5.5h10zm-5.5-5c1.9 0 3.5 1.6 3.5 3.5V11h-7V10c0-1.9 1.6-3.5 3.5-3.5zM18 13H6c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-4c0-1.1-.9-2-2-2zm-6 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/></svg>
              Google Play Store
            </button>
          </div>
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-600">Unified Release Version 4.8.2. Operating across 12 Railway Zones.</p>
        </div>

        <div className="grid md:grid-cols-4 gap-12 mb-12 pt-24 border-t border-slate-800">
          <div className="col-span-2 space-y-8">
            <div className="flex items-center gap-3">
              <div className="bg-indigo-600 p-2.5 rounded-xl shadow-lg">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <span className="text-3xl font-black tracking-tighter text-white">
                Rail<span className="text-indigo-500">Track</span>
              </span>
            </div>
            <p className="max-w-sm leading-relaxed text-slate-400 font-medium">
              A professional-grade intelligence suite for Indian Railway travelers. We specialize in operational precision, predictive logistics, and real-time telemetry data.
            </p>
            <div className="flex gap-4">
              {['twitter', 'linkedin', 'github'].map(social => (
                <a key={social} href="#" className="w-12 h-12 bg-slate-800/50 rounded-xl flex items-center justify-center hover:bg-indigo-600 hover:text-white transition-all shadow-sm">
                  <span className="sr-only">{social}</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z"/>
                  </svg>
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-white font-bold text-sm uppercase tracking-widest">Analytics</h4>
            <ul className="space-y-4 font-medium text-sm">
              <li><a href="#live-status" className="hover:text-indigo-400">Telemetry Data</a></li>
              <li><a href="#pnr" className="hover:text-indigo-400">PNR Probability</a></li>
              <li><a href="#coach" className="hover:text-indigo-400">Terminal Mapping</a></li>
              <li><a href="#" className="hover:text-indigo-400">Fleet Availability</a></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-white font-bold text-sm uppercase tracking-widest">Support</h4>
            <ul className="space-y-4 font-medium text-sm">
              <li><a href="#" className="hover:text-indigo-400">API Documentation</a></li>
              <li><a href="#" className="hover:text-indigo-400">Regulatory Terms</a></li>
              <li><a href="#" className="hover:text-indigo-400">Security Privacy</a></li>
              <li><a href="#" className="hover:text-indigo-400">Enterprise Access</a></li>
            </ul>
          </div>
        </div>
        <div className="pt-12 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6 text-xs font-bold uppercase tracking-[0.2em]">
          <p>© 2024 RAILTRACK LOGISTICS LTD. ALL OPERATIONS REGISTERED.</p>
          <p className="flex items-center gap-2">
            System Status: <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse"></span> Operational
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
