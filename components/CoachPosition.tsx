
import React, { useState } from 'react';

const COACHES = [
  { id: 'LOCO', label: 'Engine', type: 'Locomotive', pos: 'Front' },
  { id: 'DL1', label: 'DL1', type: 'Guard', pos: '1st' },
  { id: 'S1', label: 'S1', type: 'Sleeper', pos: '2nd' },
  { id: 'S2', label: 'S2', type: 'Sleeper', pos: '3rd' },
  { id: 'S3', label: 'S3', type: 'Sleeper', pos: '4th' },
  { id: 'B1', label: 'B1', type: '3-AC', pos: '5th' },
  { id: 'B2', label: 'B2', type: '3-AC', pos: '6th' },
  { id: 'B3', label: 'B3', type: '3-AC', pos: '7th' },
  { id: 'A1', label: 'A1', type: '2-AC', pos: '8th' },
  { id: 'PC', label: 'PC', type: 'Pantry', pos: '9th' },
  { id: 'GEN', label: 'GEN', type: 'General', pos: '10th' },
];

const CoachPosition: React.FC = () => {
  const [selected, setSelected] = useState(COACHES[5]);

  return (
    <section id="coach" className="py-24 bg-[#050811] text-white relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16 space-y-4">
          <span className="text-indigo-400 font-black uppercase text-xs tracking-[0.3em]">Smart Platform Positioning</span>
          <h2 className="text-5xl md:text-6xl font-black tracking-tighter">Your Coach Spot.</h2>
          <p className="text-slate-500 font-medium">Don't guess where to stand. We'll show you exactly where your coach will stop on the platform.</p>
        </div>

        <div className="relative glass rounded-[3rem] p-10 md:p-16 border-white/5 shadow-3xl overflow-hidden">
          {/* Horizontal Coach Fleet Navigation */}
          <div className="flex overflow-x-auto gap-4 pb-12 scrollbar-hide snap-x">
            {COACHES.map((coach) => (
              <button 
                key={coach.id}
                onClick={() => setSelected(coach)}
                className={`flex-shrink-0 w-28 h-28 rounded-2xl border-2 flex flex-col items-center justify-center transition-all snap-center ${selected.id === coach.id ? 'bg-indigo-600 border-indigo-400 scale-110 shadow-2xl shadow-indigo-600/30' : 'bg-white/5 border-white/10 opacity-40 hover:opacity-100'}`}
              >
                <span className="text-[10px] font-black text-indigo-200 uppercase mb-1 tracking-widest">{coach.id === 'LOCO' ? 'Lead' : 'Unit'}</span>
                <span className="text-3xl font-black">{coach.label}</span>
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-12 gap-12 items-center pt-12 border-t border-white/5">
            <div className="md:col-span-7 space-y-8">
               <div className="space-y-2">
                  <h4 className="text-4xl font-black tracking-tighter uppercase">Coach {selected.label} Details</h4>
                  <p className="text-slate-400 text-lg">Unit Type: <span className="text-white font-bold">{selected.type}</span></p>
               </div>
               
               <div className="grid grid-cols-2 gap-6">
                  <div className="p-6 bg-white/5 rounded-2xl border border-white/5">
                     <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">Positioning</p>
                     <p className="text-xl font-bold">{selected.pos} from Front</p>
                  </div>
                  <div className="p-6 bg-white/5 rounded-2xl border border-white/5">
                     <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">Exit Recommendation</p>
                     <p className="text-xl font-bold">Center of Platform</p>
                  </div>
               </div>

               <div className="flex items-start gap-4 p-6 bg-indigo-600/10 border border-indigo-500/20 rounded-2xl">
                  <svg className="w-8 h-8 text-indigo-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"/></svg>
                  <p className="text-indigo-200 font-medium leading-relaxed">Wait near the platform's <span className="text-white font-bold">Digital Indicator Mark {selected.id}</span> for immediate access upon train arrival.</p>
               </div>
            </div>

            <div className="md:col-span-5 relative group">
               <div className="aspect-square glass rounded-[3rem] p-1 flex items-center justify-center overflow-hidden border border-white/10 group-hover:border-indigo-500/50 transition-all duration-500">
                  {/* Top-down visualization placeholder */}
                  <div className="relative w-full h-full bg-slate-900 rounded-[2.8rem] flex flex-col items-center justify-center p-8 text-center space-y-6">
                     <div className="w-full h-1.5 bg-white/10 rounded-full relative">
                        <div className="absolute top-0 left-0 w-2 h-2 bg-yellow-400 rounded-full animate-ping"></div>
                     </div>
                     <p className="text-slate-400 text-xs font-bold uppercase tracking-widest leading-relaxed">Platform Top-Down Visual Rendering</p>
                     <div className="space-y-2">
                        <div className="w-32 h-16 bg-white/5 rounded-xl border border-white/10 mx-auto flex items-center justify-center font-black text-3xl text-indigo-400">
                           {selected.label}
                        </div>
                        <p className="text-xs font-black uppercase text-slate-500">Your Target Unit</p>
                     </div>
                     <div className="flex gap-2">
                        <div className="w-20 h-8 bg-white/5 rounded-lg"></div>
                        <div className="w-20 h-8 bg-indigo-600/20 rounded-lg border border-indigo-500/30"></div>
                        <div className="w-20 h-8 bg-white/5 rounded-lg"></div>
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoachPosition;
