import React, { useState } from 'react';

export default function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-900 text-white font-sans p-6">
      <div className="bg-slate-800 border border-slate-700 rounded-2xl p-8 max-w-md w-full shadow-2xl text-center">
        <div className="inline-block bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full text-xs font-semibold mb-4 border border-blue-500/30">
          Davteam Agent Engine v6.0
        </div>
        <h1 className="text-2xl font-bold mb-2">Lovable Live Preview</h1>
        <p className="text-slate-400 text-sm mb-6">
          Full-stack autonomous app built with Vite, React 18, and TailwindCSS.
        </p>
        <button 
          onClick={() => setCount(count + 1)} 
          className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-semibold py-2.5 px-6 rounded-xl transition duration-200 shadow-lg mb-4 cursor-pointer"
        >
          Interactive Counter: {count}
        </button>
        <div className="text-xs text-slate-500 border-t border-slate-700/50 pt-4 mt-2">
          Status: Verified & Synced to GitHub
        </div>
      </div>
    </div>
  );
}
