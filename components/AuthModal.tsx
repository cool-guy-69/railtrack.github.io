
import React, { useState } from 'react';

interface AuthModalProps {
  onClose: () => void;
  onSuccess: (name: string, email: string) => void;
}

const AuthModal: React.FC<AuthModalProps> = ({ onClose, onSuccess }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [method, setMethod] = useState<'email' | 'mobile'>('email');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      onSuccess(name || (method === 'email' ? email.split('@')[0] : 'User'), email || `${mobile}@railtrack.in`);
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
      <div className="absolute inset-0 bg-slate-900/90 backdrop-blur-sm animate-fade-in" onClick={onClose}></div>
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl p-10 md:p-14 animate-scale-in overflow-hidden border border-slate-200">
        <div className="absolute top-0 left-0 w-full h-1.5 bg-indigo-600"></div>
        
        <button onClick={onClose} className="absolute top-8 right-8 text-slate-400 hover:text-slate-900 transition-colors">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" /></svg>
        </button>

        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-slate-900 tracking-tight mb-2">
            {isLogin ? 'Sign In' : 'Create Account'}
          </h2>
          <p className="text-slate-500 font-medium text-sm">
            {isLogin ? 'Access your saved trips and PNR history.' : 'Start monitoring your journey with RailTrack.'}
          </p>
        </div>

        {/* Professional Social Logins */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          <button className="flex items-center justify-center gap-2 px-4 py-3 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 transition-all font-semibold text-sm shadow-sm active:scale-95">
            <svg className="w-5 h-5" viewBox="0 0 24 24"><path fill="#EA4335" d="M12 5.04c1.94 0 3.51.67 4.71 1.74L20.2 3.3C18.01 1.25 15.19 0 12 0 7.33 0 3.35 2.67 1.41 6.6l3.96 3.07C6.31 6.81 8.94 5.04 12 5.04z"/><path fill="#4285F4" d="M23.49 12.27c0-.79-.07-1.54-.19-2.27h-11.3v4.51h6.47c-.29 1.48-1.14 2.73-2.4 3.58l3.76 2.91c2.2-2.03 3.46-5.02 3.46-8.73z"/><path fill="#FBBC05" d="M5.37 14.53a7.19 7.19 0 010-4.51L1.41 6.95c-1.28 2.58-1.41 5.51-.35 8.16l4.31-3.34c-.11.23-.21.46-.31.76z"/><path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.76-2.91c-1.1.74-2.5 1.18-4.17 1.18-3.06 0-5.69-2.07-6.62-4.87l-4.22 3.27C3.12 21.32 7.18 24 12 24z"/></svg>
            Google
          </button>
          <button className="flex items-center justify-center gap-2 px-4 py-3 bg-slate-900 text-white rounded-xl hover:bg-slate-800 transition-all font-semibold text-sm shadow-sm active:scale-95">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C4.18 16.5 4.3 11 7.2 9c1.5-.9 3-.7 4 .2 1 .8 1.8.8 2.8 0 1.2-1 2.8-1.1 4.2-.2 1.2.9 2 2.2 2.4 3.5-2.6 1.3-2.2 4.4-1.8 5.7 1.2 1.3.8 2.5-.2 3.5v.1zm-3.2-15c-.1-1.8 1.5-3.5 3.3-3.6.2 1.8-1.5 3.6-3.3 3.6z"/></svg>
            Apple ID
          </button>
        </div>

        <div className="relative flex items-center gap-4 mb-8">
          <div className="flex-grow h-px bg-slate-100"></div>
          <span className="text-[10px] font-bold text-slate-300 uppercase tracking-widest">Authentication Method</span>
          <div className="flex-grow h-px bg-slate-100"></div>
        </div>

        <form className="space-y-6" onSubmit={handleSubmit}>
          {!isLogin && (
            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Full Name</label>
              <input 
                type="text" 
                required
                className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-indigo-600 focus:bg-white transition-all font-semibold" 
                placeholder="Official Name" 
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          )}

          {method === 'email' ? (
            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Email Address</label>
              <input 
                type="email" 
                required
                className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-indigo-600 focus:bg-white transition-all font-semibold" 
                placeholder="user@example.com" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          ) : (
            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Mobile Number</label>
              <div className="flex gap-2">
                <div className="px-4 py-3.5 bg-slate-100 rounded-xl font-bold text-slate-500 border border-slate-200">+91</div>
                <input 
                  type="tel" 
                  required
                  pattern="[0-9]{10}"
                  className="flex-grow px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-indigo-600 focus:bg-white transition-all font-semibold" 
                  placeholder="98XXXXXXXX" 
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value.replace(/\D/g, ''))}
                />
              </div>
            </div>
          )}

          <div className="flex justify-center">
             <button 
              type="button" 
              onClick={() => setMethod(method === 'email' ? 'mobile' : 'email')}
              className="text-xs font-bold text-indigo-600 hover:text-indigo-800"
            >
              Authenticate via {method === 'email' ? 'Mobile' : 'Email'}
            </button>
          </div>

          <button 
            type="submit"
            disabled={isLoading}
            className="w-full bg-indigo-600 text-white font-bold py-4 rounded-xl hover:bg-indigo-700 transition-all shadow-lg active:scale-[0.98] flex items-center justify-center gap-3"
          >
            {isLoading ? (
              <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
            ) : (
              isLogin ? 'Sign In to Dashboard' : 'Confirm Registration'
            )}
          </button>
        </form>

        <div className="mt-8 text-center">
          <p className="text-slate-500 font-semibold text-xs">
            {isLogin ? "No account?" : "Already registered?"} 
            <button 
              onClick={() => setIsLogin(!isLogin)}
              className="ml-2 text-indigo-600 hover:underline"
            >
              {isLogin ? 'Register now' : 'Log in instead'}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;
