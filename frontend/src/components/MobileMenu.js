// src/MobileMenu.js
import React from 'react';


const MobileMenu = ({ isOpen, onClose }) => {


  return (
    <div
      className={`fixed top-0 left-0 w-full h-full bg-white transition-transform transform ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
      style={{ zIndex: 1000 }}
    >
      <div className="flex justify-end  p-4">
        <button onClick={onClose} className="text-black text-2xl">
          &times;
        </button>
      </div>
      <nav className="flex flex-col items-center mt-8 space-y-4">
        <a href="/" className="text-black text-xl" onClick={onClose}>
          Home
        </a>
        <a href="/events" className="text-black text-xl" onClick={onClose}>
          Events
        </a>
        
       
        <a href="/club" className="text-black text-xl" onClick={onClose}>
          Associative Club
        </a>

        <a href="/achievements" className="text-black text-xl" onClick={onClose}>
          Achievements
        </a>

        <a href="/skaters-profile" className="text-black text-xl" onClick={onClose}>
          Skaters Profile
        </a>

        <a href="/membership" className="text-black text-xl" onClick={onClose}>
          Membership
        </a>
       
      </nav>
    </div>
  );
};

export default MobileMenu;