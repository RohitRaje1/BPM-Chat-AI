
import React from 'react';

const UserIcon: React.FC = () => (
  <div className="w-8 h-8 rounded-full bg-slate-600 flex items-center justify-center text-slate-300 shadow-md">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
    </svg>
  </div>
);

export default UserIcon;
