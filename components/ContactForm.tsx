'use client'; // חשוב מאוד כדי שהטופס יגיב ללחיצות בדפדפן

import { useState } from 'react';

export default function ContactForm() {
  const [status, setStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // כאן תוכלי בעתיד לחבר את הלוגיקה של שליחת המייל
    setStatus('Thanks for submitting!');
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <label className="text-sm font-bold tracking-widest text-gray-400">NAME*</label>
        <input 
          required
          type="text" 
          className="bg-transparent border-b border-white p-2 w-full outline-none focus:border-orange-400 transition-colors" 
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-sm font-bold tracking-widest text-gray-400">EMAIL *</label>
        <input 
          required
          type="email" 
          className="bg-transparent border-b border-white p-2 w-full outline-none focus:border-orange-400 transition-colors" 
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-sm font-bold tracking-widest text-gray-400">MESSAGE</label>
        <textarea 
          rows={5} 
          className="bg-transparent border-b border-white p-2 w-full outline-none focus:border-orange-400 transition-colors" 
        />
      </div>

      <button 
        type="submit" 
        className="mt-4 border border-white py-2 px-8 w-fit hover:bg-white hover:text-black transition-all font-bold tracking-widest"
      >
        SUBMIT
      </button>

      {status && <p className="text-orange-400 mt-4">{status}</p>}
    </form>
  );
}