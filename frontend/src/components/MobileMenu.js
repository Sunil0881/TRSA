// src/MobileMenu.js
import React from 'react';
import { Link } from 'react-router-dom';


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
        <Link to="/newabout" className="text-black text-xl" onClick={onClose}>
          About
         </Link>
        <Link to="/team" className="text-black text-xl" onClick={onClose}>
          Association
         </Link>
        
       
        <Link to="/club" className="text-black text-xl" onClick={onClose}>
          Associative Club
         </Link>

         <Link to="/News" className="text-black text-xl" onClick={onClose}>
          News
         </Link>
         <Link to="/events" className="text-black text-xl" onClick={onClose}>
          Events
         </Link>

        <Link to="/achievements" className="text-black text-xl" onClick={onClose}>
          Achievements
         </Link>

         <Link to="/club" className="text-black text-xl" onClick={onClose}>
          Associative Clubs
         </Link>

        <Link to="/skatersprofile" className="text-black text-xl" onClick={onClose}>
          Skaters Profile
         </Link>

         <Link to="/gallery"  className="text-black text-xl" onClick={onClose}>
        Gallery
        </Link>
         <Link to="/contactus"  className="text-black text-xl" onClick={onClose}>
         Contact US
        </Link>
        
       
      </nav>
    </div>
  );
};

export default MobileMenu;