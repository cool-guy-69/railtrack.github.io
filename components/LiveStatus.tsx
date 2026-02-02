
import React, { useState, useEffect } from 'react';
import { getLiveTrainStatus } from '../services/geminiService';
import { TrainData } from '../types';

interface LiveStatusProps {
  initialTrainNo?: string;
}

const LiveStatus: React.FC<LiveStatusProps> = ({ initialTrainNo }) => {
  const [trainNo, setTrainNo] = useState(initialTrainNo || '');
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<TrainData | null>(null);
  const [panelOpen, setPanelOpen] = useState(false);
  const [viewMode, setViewMode] = useState<'animated' | 'linear'>('animated');

  useEffect(() => {
    if (initialTrainNo) {
      setTrainNo(initialTrainNo);
      handleTrack(initialTrainNo);
    }
  }, [initialTrainNo]);

  const handleTrack = async (no?: string) => {
    const target = no || trainNo;
    if (!target) return;
    setLoading(true);
    const result = await getLiveTrainStatus(target);
    setData(result);
    setLoading(false);
    setPanelOpen(true);
  };

  const toggleView = (e: React.MouseEvent) => {
    e.stopPropagation();
    setViewMode(prev => prev === 'animated' ? 'linear' : 'animated');
  };

  const demoStations = [
    { name: data?.source || 'Origin', time: '06:15 AM', status: 'Departed', platform: '01' },
    { name: 'Junction Hub', time: '09:40 AM', status: 'Passed', platform: '04' },
    { name: data?.nextStation || 'Current Halt', time: '11:55 AM', status: 'Arriving', active: true, platform: '02' },
    { name: 'Intermediate Jct', time: '03:10 PM', status: 'Upcoming', platform: '01' },
    { name: data?.destination || 'Terminus', time: '06:45 PM', status: 'Upcoming', platform: '08' },
  ];

  return (
    <section id="live-status" className="py-24 md:py-32 bg-[#02040a] relative">
      <div className="container mx-auto px-6">
        {!panelOpen ? (
          <div className="max-w-4xl mx-auto text-center py-24 glass rounded-[3rem] border-white/5 shadow-3xl reveal">
            <div className="w-24 h-24 bg-indigo-600 rounded-[2rem] flex items-center justify-center mx-auto mb-10 shadow-3xl shadow-indigo-600/30">
              <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </div>
            <h3 className="text-5xl font-black text-white mb-6">Track Your Fleet</h3>
            <p className="text-slate-400 text-xl mb-12 max-w-xl mx-auto">Access real-time GPS telemetry for premium trains across India.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 px-4">
              <input 
                type="text" 
                maxLength={5}
                placeholder="12002"
                className="bg-white/5 border border-white/10 rounded-3xl px-10 py-6 text-white font-black text-4xl outline-none focus:border-indigo-600 w-full sm:w-80 text-center transition-all shadow-inner"
                value={trainNo}
                onChange={(e) => setTrainNo(e.target.value.replace(/\D/g, ''))}
              />
              <button 
                onClick={() => handleTrack()}
                className="w-full sm:w-auto bg-indigo-600 text-white px-14 py-6 rounded-3xl font-black uppercase tracking-widest hover:bg-indigo-700 transition-all shadow-3xl active:scale-95 text-lg"
              >
                {loading ? <span className="w-6 h-6 border-4 border-white border-t-transparent rounded-full animate-spin"></span> : 'Find Now'}
              </button>
            </div>
            <p className="mt-12 text-[10px] font-black text-slate-600 uppercase tracking-[0.4em] cursor-pointer hover:text-indigo-400 transition-all" onClick={() => handleTrack('22436')}>
              Quick Access: Vande Bharat NDLS (22436)
            </p>
          </div>
        ) : (
          <div className="space-y-12 reveal">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-indigo-500 animate-pulse"></span>
                  <span className="text-indigo-500 font-black text-xs uppercase tracking-[0.5em]">Live GPS Feed</span>
                </div>
                <h3 className="text-5xl md:text-7xl font-black text-white tracking-tighter">Current Journey</h3>
              </div>
              <button onClick={() => setPanelOpen(false)} className="px-8 py-3.5 glass text-slate-500 hover:text-white rounded-2xl font-black text-xs uppercase tracking-widest transition-all">
                Reset Tracker
              </button>
            </div>

            {/* Dashboard Container */}
            <div 
              onClick={toggleView}
              className={`glass rounded-[3.5rem] p-10 md:p-16 border-white/5 overflow-hidden relative cursor-pointer transition-all duration-700 hover:shadow-[0_0_100px_rgba(99,102,241,0.15)] ${viewMode === 'linear' ? 'bg-[#05070f]' : 'bg-[#080b15]'}`}
            >
              <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-500/5 blur-[150px] -z-10"></div>
              
              {/* Header Info */}
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-10 pointer-events-none">
                 <div className="flex flex-wrap gap-12 md:gap-20">
                    <div className="space-y-2">
                       <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em]">Fleet Unit</p>
                       <p className="text-4xl md:text-5xl font-black text-white tracking-tighter">{data?.number} <span className="text-indigo-600 opacity-30">/</span> {data?.name}</p>
                    </div>
                    <div className="space-y-2">
                       <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em]">Status Delta</p>
                       <p className="text-4xl md:text-5xl font-black text-green-400 tracking-tighter">{data?.delay || 'ON TIME'}</p>
                    </div>
                 </div>
                 <div className="px-8 py-3.5 glass border-indigo-500/30 text-indigo-400 rounded-2xl text-[11px] font-black tracking-[0.3em] uppercase backdrop-blur-3xl">
                    View: {viewMode === 'animated' ? 'Interactive Map' : 'Station List'}
                 </div>
              </div>

              {viewMode === 'animated' ? (
                <div className="space-y-20 pointer-events-none">
                  {/* High-Fidelity Train Map */}
                  <div className="relative py-32 px-12 bg-black/50 rounded-[3rem] border border-white/5 overflow-x-auto scrollbar-hide shadow-inner">
                    <div className="min-w-[800px] relative">
                      {/* Detailed Railway Tracks */}
                      <div className="h-14 w-full flex flex-col gap-3.5 justify-center relative">
                        <div className="h-2 w-full bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 rounded-full opacity-40"></div>
                        <div className="h-2 w-full bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 rounded-full opacity-40"></div>
                        
                        {/* Master Vande Bharat Animation */}
                        <div className="absolute inset-0 flex items-center animate-train-vande">
                          <div className="relative flex items-center">
                            {/* Locomotive - Vande Bharat Style (White/Blue) */}
                            <div className="w-32 h-14 bg-white rounded-r-[2.5rem] shadow-[0_0_60px_rgba(255,255,255,0.1)] border-r-[10px] border-indigo-600 relative overflow-hidden">
                               <div className="absolute top-2.5 right-6 w-14 h-6 bg-slate-950 rounded-full opacity-90"></div>
                               <div className="absolute bottom-3 left-0 w-full h-3 bg-indigo-600"></div>
                               <div className="absolute bottom-2 right-4 w-5 h-5 bg-yellow-400/80 rounded-full blur-[4px] animate-pulse"></div>
                               <div className="absolute top-0 right-0 w-full h-full bg-indigo-500/5 skew-x-[-45deg]"></div>
                            </div>
                            {/* Sleek Passenger Coaches */}
                            <div className="flex gap-2 ml-2">
                              {[1,2,3,4,5,6,7].map(i => (
                                <div key={i} className="w-24 h-13 bg-white rounded-md relative overflow-hidden border-b-[6px] border-slate-200">
                                  <div className="absolute bottom-2 w-full h-2 bg-indigo-600/90"></div>
                                  <div className="flex justify-around mt-3">
                                    <div className="w-6 h-3.5 bg-slate-900/10 rounded-sm"></div>
                                    <div className="w-6 h-3.5 bg-slate-900/10 rounded-sm"></div>
                                    <div className="w-6 h-3.5 bg-slate-900/10 rounded-sm"></div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Logistic Anchors */}
                      <div className="absolute bottom-[-70px] left-0 w-full flex justify-between px-20">
                         <div className="flex flex-col items-center">
                            <div className="w-6 h-6 rounded-full bg-slate-900 border-2 border-slate-700 mb-3 shadow-xl"></div>
                            <span className="text-[11px] font-black text-slate-500 uppercase tracking-widest">{data?.source}</span>
                         </div>
                         <div className="flex flex-col items-center relative">
                            <div className="w-14 h-14 rounded-full bg-white border-[8px] border-indigo-600 mb-4 shadow-[0_0_60px_rgba(99,102,241,0.6)] flex items-center justify-center">
                               <div className="w-3 h-3 bg-indigo-600 rounded-full animate-ping"></div>
                            </div>
                            <span className="text-xl font-black text-white uppercase tracking-[0.3em]">{data?.nextStation}</span>
                            <div className="absolute -top-24 px-8 py-4 bg-indigo-600 text-white text-xs font-black rounded-3xl border border-white/20 shadow-3xl animate-bounce whitespace-nowrap">
                               SIGNAL STATUS: PROCEED
                            </div>
                         </div>
                         <div className="flex flex-col items-center">
                            <div className="w-6 h-6 rounded-full bg-slate-900 border-2 border-slate-700 mb-3 shadow-xl"></div>
                            <span className="text-[11px] font-black text-slate-500 uppercase tracking-widest">{data?.destination}</span>
                         </div>
                      </div>
                    </div>
                  </div>

                  {/* Summary Grid */}
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
                    <div className="glass p-10 rounded-[2.5rem] space-y-5 border-white/5 group hover:bg-white/5 transition-all">
                       <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.4em]">Progress</p>
                       <p className="text-6xl font-black text-indigo-400 leading-none">{data?.progress}%</p>
                       <div className="w-full h-3 bg-white/5 rounded-full overflow-hidden p-0.5">
                          <div className="h-full bg-indigo-500 rounded-full shadow-[0_0_30px_rgba(99,102,241,0.7)] transition-all duration-[2.5s] ease-out" style={{ width: `${data?.progress}%` }}></div>
                       </div>
                    </div>
                    <div className="glass p-10 rounded-[2.5rem] space-y-2 border-white/5">
                       <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.4em]">Platform</p>
                       <p className="text-5xl font-black text-white">No. 02</p>
                       <p className="text-[11px] font-bold text-green-500 uppercase tracking-widest">Confirmed Entry</p>
                    </div>
                    <div className="glass p-10 rounded-[2.5rem] space-y-2 border-white/5">
                       <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.4em]">Hub Code</p>
                       <p className="text-5xl font-black text-white">NDLS</p>
                       <p className="text-[11px] font-bold text-slate-600 uppercase tracking-widest">New Delhi Central</p>
                    </div>
                    <div className="glass p-10 rounded-[2.5rem] space-y-2 border-white/5">
                       <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.4em]">GPS Updated</p>
                       <p className="text-3xl font-black text-slate-400 uppercase tracking-tight">{data?.lastUpdated}</p>
                       <p className="text-[11px] font-bold text-indigo-500 uppercase tracking-widest">Direct Feed</p>
                    </div>
                  </div>
                  
                  <p className="text-center text-slate-600 font-bold text-[11px] uppercase tracking-[0.5em] pt-4">Click anywhere to view the full station route</p>
                </div>
              ) : (
                <div className="py-12 pointer-events-none reveal">
                   <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-6 border-b border-white/10 pb-10">
                      <h4 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tighter">Route Operational Log</h4>
                      <p className="text-xs font-black text-indigo-400 uppercase tracking-[0.5em]">System Verified</p>
                   </div>
                   
                   <div className="relative space-y-6">
                      <div className="absolute left-[2.4rem] md:left-[3.4rem] top-6 bottom-6 w-1.5 bg-indigo-600/10 rounded-full"></div>
                      
                      {demoStations.map((station, idx) => (
                         <div key={idx} className={`relative flex items-center gap-12 md:gap-16 p-8 md:p-12 rounded-[2.5rem] md:rounded-[3.5rem] transition-all duration-700 ${station.active ? 'bg-indigo-600/10 border border-indigo-500/20 shadow-4xl scale-[1.03]' : 'opacity-40 grayscale-[0.5]'}`}>
                            <div className={`z-10 w-5 md:w-6 h-5 md:h-6 rounded-full border-[6px] border-[#02040a] shadow-2xl ${station.status === 'Upcoming' ? 'bg-slate-800' : 'bg-indigo-500'} ${station.active ? 'bg-white w-8 h-8 md:w-10 md:h-10 pulse-soft' : ''}`}></div>
                            <div className="grid grid-cols-2 md:grid-cols-4 items-center flex-grow gap-10">
                               <div>
                                  <p className={`text-2xl md:text-3xl font-black ${station.active ? 'text-white' : 'text-slate-600'}`}>{station.time}</p>
                               </div>
                               <div className="col-span-1 md:col-span-2 space-y-2">
                                  <p className={`text-3xl md:text-5xl font-black uppercase tracking-tighter leading-tight ${station.active ? 'text-indigo-400' : 'text-white'}`}>{station.name}</p>
                                  {station.active && <p className="text-[11px] font-bold text-slate-500 uppercase tracking-[0.2em]">Verified Platform {station.platform}</p>}
                               </div>
                               <div className="hidden md:block text-right">
                                  <span className={`px-8 py-3 rounded-2xl text-[11px] font-black uppercase tracking-widest border border-white/5 ${station.status === 'Arriving' ? 'bg-indigo-600 text-white shadow-2xl shadow-indigo-600/20' : 'bg-slate-900 text-slate-600'}`}>
                                     {station.status}
                                  </span>
                               </div>
                            </div>
                         </div>
                      ))}
                   </div>
                   <p className="text-center text-slate-600 font-bold text-[11px] uppercase tracking-[0.5em] mt-24">Click dashboard to return to Map View</p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default LiveStatus;
