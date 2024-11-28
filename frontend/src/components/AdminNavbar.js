import { useState } from 'react';
import React from 'react';
import logo from "../assets/logo.png";
import Recline from '../assets/recline.png';

import { Link, useLocation, useNavigate } from "react-router-dom";
import AdminMobile from './AdminMobile';

const AdminNavbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLogout = () => {
    // Clear authentication data
    window.localStorage.removeItem("authenticated");

    // Redirect to the login page
    navigate('/login');
  };

  const linkClasses = (path) => 
    `hover:scale-95  md:text-lg lg:text-xl md:my-4 lg:my-5 md:px-2 lg:px-4 py-2 rounded ${location.pathname === path ? 'bg-white text-blue-800' : ''}`;
  
  return (
    <div>
      <div className="mb-3 ">
        <img src={Recline} alt="recline" />
      </div>
      <div className="relative flex justify-between px-5 md:px-10">
        <div className="flex items-center">
          <a href='/' > <img src={logo} width={100} height={100} alt='logo'></img></a>
          <a href='/' ><h1 className="text-black ml-4 text-md md:text-3xl font-bold">Thiruvallur District Roller <br className="hidden md:block" /> Skating Association.</h1></a>
        </div>
        <div className="flex md:hidden">
          <button
            className="text-black text-2xl focus:outline-none"
            onClick={toggleMobileMenu}
          >
            &#9776; {/* Hamburger icon */}
          </button>
        </div>
        <header className="hidden items-center md:flex lg:gap-8 md:gap-4">
          <button 
            onClick={handleLogout} 
            className="text-white py-3 px-4 bg-blue-800 hover:bg-blue-900 hover:scale-95 rounded text-xl"
          >
            Logout
          </button>
        </header>
      </div>
      <nav className="hidden items-center md:flex md:justify-center font-semibold lg:gap-12 md:gap-2 bg-blue-800 text-white">
        <Link to="/admin" className={linkClasses("/admin")}>
          Home
        </Link>
        <Link to="/achievementspost" className={linkClasses("/achievementspost")}>
          AchievementsPost
        </Link>
        <Link to="/addnews" className={linkClasses("/addnews")}>
          Add News
        </Link>
        <Link to="/addupdates" className={linkClasses("/addupdates")}>
          AddUpdates
        </Link>
        <Link to="/addevents" className={linkClasses("/addevents")}>
          Add events
        </Link>
        <Link to="/addskaters" className={linkClasses("/addskaters")}>
          Add Skaters
        </Link>
        <Link to="/registrations" className={linkClasses("/registrations")}>
          Registrations
        </Link> 
        <Link to="/addimage" className={linkClasses("/addimage")}>
          Add Gallery
        </Link>
      </nav>
      <AdminMobile isOpen={isMobileMenuOpen} onClose={toggleMobileMenu} />
    </div>
  );
};

export default AdminNavbar;
