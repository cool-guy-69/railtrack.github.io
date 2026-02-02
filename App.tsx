
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import PNRSearch from './components/PNRSearch';
import LiveStatus from './components/LiveStatus';
import CoachPosition from './components/CoachPosition';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import TravelAssistant from './components/TravelAssistant';
import AuthModal from './components/AuthModal';
import { User } from './types';

const App: React.FC = () => {
  const [showAuth, setShowAuth] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [activeTrain, setActiveTrain] = useState<string>('');
  const [notification, setNotification] = useState<string | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem('railtrack_user');
    if (saved) setUser(JSON.parse(saved));
  }, []);

  const handleLogin = (u: { name: string, email: string }) => {
    const newUser = { ...u, isLoggedIn: true };
    setUser(newUser);
    localStorage.setItem('railtrack_user', JSON.stringify(newUser));
    setShowAuth(false);
    triggerNotification(`Successfully Logged In. Welcome back, ${u.name}.`);
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('railtrack_user');
    triggerNotification('Logged out successfully.');
  };

  const triggerNotification = (msg: string) => {
    setNotification(msg);
    setTimeout(() => setNotification(null), 3000);
  };

  return (
    <div className="relative min-h-screen bg-[#050811] text-white selection:bg-indigo-500/30">
      <Navbar user={user} onOpenAuth={() => setShowAuth(true)} onLogout={handleLogout} />
      
      {notification && (
        <div className="fixed top-24 left-1/2 -translate-x-1/2 z-[100] animate-fade-in px-4 w-full md:w-auto">
          <div className="bg-indigo-600 text-white px-8 py-3 rounded-full shadow-2xl font-black text-sm flex items-center justify-center gap-3 border border-white/20 whitespace-nowrap">
            <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
            {notification}
          </div>
        </div>
      )}

      <main className="relative">
        <Hero onTrack={(no) => setActiveTrain(no)} />
        
        <div className="relative z-10">
          <LiveStatus initialTrainNo={activeTrain} />
          <PNRSearch />
          <CoachPosition />
          <Features />
          <Testimonials />
        </div>
        
        {/* Cinematic Closing CTA */}
        <section className="bg-[#050811] py-40 md:py-60 relative overflow-hidden border-t border-white/5">
          <div className="absolute inset-0 opacity-[0.03] grayscale bg-[url('https://images.unsplash.com/photo-1544027993-37dbfe43562a?q=80&w=2400')] bg-cover bg-center"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#050811] via-transparent to-[#050811]"></div>
          
          <div className="container mx-auto px-6 text-center relative z-10">
            <h2 className="text-6xl md:text-9xl font-black text-white mb-10 tracking-tighter leading-none animate-fade-up">
              Travel <br className="md:hidden" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-indigo-200 to-white">Without Limits.</span>
            </h2>
            <p className="text-slate-400 text-xl md:text-2xl mb-16 max-w-2xl mx-auto font-medium">
              Join the future of Indian Railway travel today. Experience the most advanced tracking suite ever built.
            </p>
            
            {!user && (
              <button 
                onClick={() => setShowAuth(true)}
                className="px-16 py-6 bg-indigo-600 text-white rounded-full font-black text-2xl hover:bg-indigo-700 transition-all shadow-3xl shadow-indigo-600/30 active:scale-95 uppercase tracking-widest"
              >
                Join RailTrack Now
              </button>
            )}
          </div>
        </section>
      </main>

      <Footer />
      <TravelAssistant />
      
      {showAuth && (
        <AuthModal 
          onClose={() => setShowAuth(false)} 
          onSuccess={(name, email) => handleLogin({ name, email })}
        />
      )}
    </div>
  );
};

export default App;
