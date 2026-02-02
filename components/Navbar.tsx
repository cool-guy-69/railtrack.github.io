
import React, { useState, useEffect } from 'react';
import { User } from '../types';

interface NavbarProps {
  user: User | null;
  onOpenAuth: () => void;
  onLogout: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ user, onOpenAuth, onLogout }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${isScrolled ? 'py-4' : 'py-8'}`}>
      <nav className={`mx-auto max-w-6xl flex items-center justify-between px-6 py-3 rounded-full border transition-all duration-500 ${isScrolled ? 'glass shadow-2xl scale-95 border-white/10' : 'bg-transparent border-transparent'}`}>
        <div className="flex items-center gap-2 group cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
          <div className="w-9 h-9 bg-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-500/20 group-hover:scale-110 transition-transform">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
          </div>
          <span className="text-xl font-extrabold tracking-tighter text-white">RailTrack</span>
        </div>

        <div className="hidden md:flex items-center gap-10">
          <a href="#live-status" className="text-[11px] font-black uppercase tracking-[0.2em] text-white/50 hover:text-white transition-colors">Live View</a>
          <a href="#pnr" className="text-[11px] font-black uppercase tracking-[0.2em] text-white/50 hover:text-white transition-colors">PNR Hub</a>
          <a href="#coach" className="text-[11px] font-black uppercase tracking-[0.2em] text-white/50 hover:text-white transition-colors">Guide</a>
        </div>

        <div className="flex items-center gap-4">
          {user ? (
            <div className="flex items-center gap-4">
              <span className="hidden sm:inline text-[10px] font-bold text-white/40 uppercase tracking-widest">{user.name}</span>
              <button 
                onClick={onLogout}
                className="px-5 py-2 glass hover:bg-white/10 text-white rounded-full text-[10px] font-black uppercase tracking-widest transition-all"
              >
                Exit
              </button>
            </div>
          ) : (
            <button 
              onClick={onOpenAuth}
              className="px-6 py-2.5 bg-white text-black rounded-full text-[11px] font-black hover:bg-indigo-500 hover:text-white transition-all uppercase tracking-widest shadow-xl shadow-white/5"
            >
              Sign In
            </button>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
