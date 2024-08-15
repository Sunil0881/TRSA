// src/MobileMenu.js
import React from 'react';
import { Link } from 'react-router-dom';


const AdminMobile = ({ isOpen, onClose }) => {


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
      <Link to="/admin" className="text-black text-xl" onClick={onClose}>
          Home
        </Link>

        <Link to="/achievementspost" className="text-black text-xl" onClick={onClose}>
        AchievementsPost
        </Link>
        
       
        <Link to="/addupdates"  className="text-black text-xl" onClick={onClose}>
        AddUpdates
        </Link>

        <Link to="/addevents" className="text-black text-xl" onClick={onClose}>
        Add events
        </Link>

        <Link to="/addskaters" className="text-black text-xl" onClick={onClose}>
       Add Skaters
        </Link>

        <Link to="/registrations" className="text-black text-xl" onClick={onClose}>
        Registrations
        </Link>

        <Link to="/addimage"  className="text-black text-xl" onClick={onClose}>
        Add Gallery
        </Link>
       
      </nav>
    </div>
  );
};

export default AdminMobile;