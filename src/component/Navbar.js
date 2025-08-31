import React, { useState } from 'react';
import lo from "../assets/logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="bg-[#FAF9F6] border-b border-green-500 py-4 px-4 flex items-center justify-between">
      {/* Hamburger for mobile */}
      <div className="lg:hidden flex items-center">
        <button onClick={() => setMenuOpen(!menuOpen)} className="p-2 focus:outline-none">
          <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-gray-700">
            <line x1="6" y1="10" x2="26" y2="10" />
            <line x1="6" y1="16" x2="26" y2="16" />
            <line x1="6" y1="22" x2="26" y2="22" />
          </svg>
        </button>
      </div>
      {/* Left Button & Links (hidden on mobile) */}
      <div className="hidden lg:flex items-center gap-8">
        <button className="border border-gray-400 rounded-full px-6 py-2 text-xs tracking-widest font-medium text-gray-700 hover:bg-gray-100 transition">
          WHICH MANUKA IS FOR ME?
        </button>
        <a href="#" className="text-gray-700 font-medium hover:text-green-700">Shop</a>
        <a href="#" className="text-gray-700 font-medium hover:text-green-700">Explore</a>
      </div>
      {/* Logo Centered */}
      <div className="flex flex-col items-center flex-1">
        <img src={lo} alt="Logo" className="h-8 mb-1 mx-auto" />
        <span className="text-base font-bold tracking-widest text-gray-800 text-center">NEW ZEALAND<br />HONEY CO.</span>
      </div>
      {/* Right Links & Icons (hidden on mobile) */}
      <div className="hidden lg:flex items-center gap-8">
        <a href="#" className="text-gray-700 font-medium hover:text-green-700">About</a>
        <a href="#" className="text-gray-700 font-medium hover:text-green-700">Rewards</a>
        <a href="#" className="text-gray-700 font-medium hover:text-green-700">Contact</a>
        {/* Icons */}
        <div className="flex items-center gap-4 ml-4">
          {/* User Icon */}
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-700"><circle cx="12" cy="8" r="4"/><path d="M6 20v-2a6 6 0 0 1 12 0v2"/></svg>
          {/* Search Icon */}
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-700"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
          {/* Cart Icon with badge */}
          <div className="relative">
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-700"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
            <span className="absolute -top-2 -right-2 bg-yellow-400 text-xs rounded-full px-2 py-0.5 font-bold">0</span>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-[#FAF9F6] border-b border-green-500 shadow-lg z-50 flex flex-col items-center py-6 gap-6 lg:hidden">
          <button className="border border-gray-400 rounded-full px-6 py-2 text-xs tracking-widest font-medium text-gray-700 hover:bg-gray-100 transition w-4/5">WHICH MANUKA IS FOR ME?</button>
          <a href="#" className="text-gray-700 font-medium hover:text-green-700 w-4/5 text-center">Shop</a>
          <a href="#" className="text-gray-700 font-medium hover:text-green-700 w-4/5 text-center">Explore</a>
          <a href="#" className="text-gray-700 font-medium hover:text-green-700 w-4/5 text-center">About</a>
          <a href="#" className="text-gray-700 font-medium hover:text-green-700 w-4/5 text-center">Rewards</a>
          <a href="#" className="text-gray-700 font-medium hover:text-green-700 w-4/5 text-center">Contact</a>
          <div className="flex items-center gap-6 mt-4">
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-700"><circle cx="12" cy="8" r="4"/><path d="M6 20v-2a6 6 0 0 1 12 0v2"/></svg>
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-700"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
            <div className="relative">
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-700"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
              <span className="absolute -top-2 -right-2 bg-yellow-400 text-xs rounded-full px-2 py-0.5 font-bold">0</span>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
