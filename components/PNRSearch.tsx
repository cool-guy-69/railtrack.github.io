
import React, { useState } from 'react';
import { simulatePNRStatus } from '../services/geminiService';
import { PNRResponse } from '../types';

const PNRSearch: React.FC = () => {
  const [pnr, setPnr] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<PNRResponse | null>(null);

  const handleSearch = async () => {
    if (pnr.length !== 10) return alert("Please enter a valid 10-digit PNR");
    setLoading(true);
    const data = await simulatePNRStatus(pnr);
    setResult(data);
    setLoading(false);
  };

  return (
    <section id="pnr" className="py-24 bg-white text-slate-900 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-end mb-12 gap-6">
             <div className="space-y-3">
                <span className="text-indigo-600 font-black uppercase text-xs tracking-widest">Official PNR Hub</span>
                <h3 className="text-5xl font-black tracking-tighter">Check Your Ticket</h3>
             </div>
             <div className="flex w-full lg:w-auto gap-2">
                <input 
                  type="text" 
                  maxLength={10}
                  placeholder="Enter 10-digit PNR"
                  className="flex-grow lg:w-64 px-6 py-4 bg-slate-100 border border-slate-200 rounded-2xl focus:outline-none focus:border-indigo-600 text-xl font-bold tracking-widest"
                  value={pnr}
                  onChange={(e) => setPnr(e.target.value.replace(/\D/g, ''))}
                />
                <button 
                  onClick={handleSearch}
                  className="px-8 py-4 bg-indigo-600 text-white rounded-2xl font-black hover:bg-indigo-700 transition-all flex items-center justify-center gap-2 shadow-xl shadow-indigo-200"
                >
                  {loading ? <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span> : 'Get Status'}
                </button>
             </div>
          </div>

          {!result && !loading && (
             <div className="p-16 border-2 border-dashed border-slate-200 rounded-[3rem] text-center space-y-6">
                <div className="w-20 h-20 bg-slate-50 rounded-3xl flex items-center justify-center mx-auto text-slate-300">
                   <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" strokeWidth="2" strokeLinecap="round"/></svg>
                </div>
                <p className="text-slate-500 font-medium">Your digital travel itinerary will appear here after verification.</p>
             </div>
          )}

          {result && (
            <div className="animate-fade-up bg-slate-50 rounded-[3rem] overflow-hidden border border-slate-200 shadow-2xl">
               {/* Ticket Header */}
               <div className="bg-indigo-600 p-8 md:p-12 text-white flex justify-between items-start">
                  <div>
                     <p className="text-[10px] font-black uppercase tracking-[0.3em] opacity-60 mb-2">Electronic Reservation Slip</p>
                     <h4 className="text-4xl md:text-5xl font-black tracking-tighter">{result.trainName}</h4>
                     <p className="text-lg opacity-80 font-medium">{result.trainNo} • Departs: {result.date}</p>
                  </div>
                  <div className="hidden md:block">
                     <div className="p-4 bg-white/10 rounded-2xl border border-white/20 backdrop-blur-md text-center">
                        <p className="text-[10px] font-black uppercase tracking-widest mb-1">PNR No.</p>
                        <p className="text-2xl font-black">{result.pnr}</p>
                     </div>
                  </div>
               </div>

               {/* Ticket Main Content */}
               <div className="p-8 md:p-12 space-y-12">
                  <div className="grid md:grid-cols-3 gap-8">
                     <div className="space-y-1">
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Journey Status</p>
                        <p className={`text-2xl font-black ${result.chartStatus.includes('NOT') ? 'text-amber-600' : 'text-green-600'}`}>{result.chartStatus}</p>
                     </div>
                     <div className="space-y-1">
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Boarding Reporting</p>
                        <p className="text-2xl font-black text-slate-900">30m Before</p>
                     </div>
                     <div className="space-y-1">
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Passenger Count</p>
                        <p className="text-2xl font-black text-slate-900">{result.passengers.length} Total</p>
                     </div>
                  </div>

                  <div className="bg-white rounded-[2rem] border border-slate-100 overflow-hidden shadow-sm">
                     <table className="w-full text-left">
                        <thead className="bg-slate-50 border-b border-slate-100">
                           <tr>
                              <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase">Passenger No.</th>
                              <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase">Booking Status</th>
                              <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase">Current Status</th>
                           </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                           {result.passengers.map((p, idx) => (
                              <tr key={idx} className="hover:bg-slate-50 transition-colors">
                                 <td className="px-8 py-6 font-bold text-slate-900">Passenger #{p.no}</td>
                                 <td className="px-8 py-6 text-slate-500 font-medium">{p.bookingStatus}</td>
                                 <td className="px-8 py-6">
                                    <span className={`px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-widest ${p.currentStatus.includes('CNF') ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'}`}>
                                       {p.currentStatus}
                                    </span>
                                 </td>
                              </tr>
                           ))}
                        </tbody>
                     </table>
                  </div>

                  <div className="flex flex-col md:flex-row items-center justify-between p-8 bg-indigo-50 rounded-[2.5rem] border border-indigo-100 gap-6">
                     <div className="flex items-center gap-6">
                        <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-indigo-600 shadow-sm border border-indigo-100">
                           <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                        </div>
                        <div>
                           <p className="text-[10px] font-black text-indigo-400 uppercase tracking-widest">AI Confirmation Intelligence</p>
                           <h5 className="text-2xl font-black text-slate-900">98% High Confirmation Confidence</h5>
                        </div>
                     </div>
                     <button className="w-full md:w-auto px-8 py-4 bg-white text-indigo-600 border border-indigo-200 rounded-2xl font-bold hover:bg-indigo-600 hover:text-white transition-all shadow-sm">
                        View Prediction Data
                     </button>
                  </div>
               </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default PNRSearch;
