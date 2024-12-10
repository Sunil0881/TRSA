// src/MobileMenu.js
import React from 'react';
import { Link, useNavigate  } from 'react-router-dom';



const AdminMobile = ({ isOpen, onClose }) => {

  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear authentication data
    window.localStorage.removeItem("authenticated");

    // Redirect to the login page
    navigate('/login');
  };



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
      <Link to="/admin/adminabout" className="text-black text-xl" onClick={onClose}>
          About
        </Link>

        <Link to="/achievementspost" className="text-black text-xl" onClick={onClose}>
        AchievementsPost
        </Link>
        
        <Link to="/addnews"  className="text-black text-xl" onClick={onClose}>
        Add News
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
        <Link to="/message" className="text-black text-xl" onClick={onClose}>
         Message
        </Link>

        <Link to="/addimage" className="text-black text-xl" onClick={onClose}>
        Add Gallery
        </Link>

        <Link to="/admin-add-news"  className="text-black text-xl" onClick={onClose}>
        Breaking News
       </Link>
            
  
        <button 
            onClick={handleLogout} 
            className="text-black text-xl"
          >
            Logout
          </button>
       
      </nav>
    </div>
  );
};

export default AdminMobile;