import { useState } from 'react';
import React from 'react';
import logo from "../assets/logo.png";
import Recline from "../assets/recline.png";
import nav1 from "../assets/nav1.png";
import nav2 from "../assets/nav2.png";
import nav3 from "../assets/nav3.png";
import nav4 from "../assets/nav4.png";
import nav5 from "../assets/nav5.png";
import nav6 from "../assets/nav6.png";
import nav7 from "../assets/nav7.png";

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
      <div className="">
        <img src={Recline} alt="recline" className="hidden md:block" />
      </div>
      <div className="mb-3">
        <div className="relative flex justify-between px-3 md:px-10 items-center">
          <a href="/" className="flex items-center">
            <img
              src={logo}
              width={100}
              height={100}
              alt="logo"
              className="mr-5"
            />
            <div>
              <h1 className="text-black text-sm md:text-xl lg:text-2xl font-bold">
                Thiruvallur District Roller Skating Association.
              </h1>
              <h1 className="text-black text-xs md:text-lg lg:text-md font-semibold">
                (Affiliated to Tamilnadu Roller Skating Association)
              </h1>
            </div>
          </a>
          <button
            className="text-black text-2xl md:hidden focus:outline-none"
            onClick={toggleMobileMenu}
          >
            &#9776; {/* Hamburger icon */}
          </button>
          <div className="hidden lg:flex gap-3 p-2">
            <img src={nav1} alt="icon" className="h-12 w-16" />
            <img src={nav2} alt="icon" className="h-12 w-20" />
            <img src={nav3} alt="icon" className="h-12 w-16" />
            <img src={nav4} alt="icon" className="h-12 w-20" />
            <img src={nav5} alt="icon" className="h-12 w-16" />
            <img src={nav6} alt="icon" className="h-12 w-16" />
            <img src={nav7} alt="icon" className="h-12 w-16" />
          </div>

          <header className="hidden md:flex items-center lg:gap-8 md:gap-4">
            <button
              onClick={handleLogout}
              className="text-white py-3 px-4 bg-blue-800 hover:bg-blue-900 hover:scale-95 rounded text-xl"
            >
              Logout
            </button>
          </header>
        </div>
      </div>

      {/* Desktop Navbar Links */}
      <nav className="hidden md:flex items-center md:justify-center font-semibold lg:gap-9 md:gap-2 bg-blue-800 text-white">
        {/* <Link to="/admin" className={linkClasses("/admin")}>Home</Link> */}
        <Link
          to="/admin/adminabout"
          className={linkClasses("/admin/adminabout")}
        >
          About
        </Link>
        <Link
          to="/achievementspost"
          className={linkClasses("/achievementspost")}
        >
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
        <Link to="/message" className={linkClasses("/message")}>
          Message
        </Link>
        <Link to="/addimage" className={linkClasses("/addimage")}>
          Add Gallery
        </Link>
        <Link to="/admin-add-news" className={linkClasses("/admin-add-news")}>
          Breaking News
        </Link>
      </nav>

      {/* Mobile Menu */}
      {/*already have seperate component as adminmobile  */}
      <nav
        className={`md:hidden ${
          isMobileMenuOpen ? "block" : "hidden"
        } bg-blue-800 text-white`}
      >
        <Link
          to="/admin/adminabout"
          className={linkClasses("/admin/adminabout")}
        >
          About
        </Link>
        <Link
          to="/achievementspost"
          className={linkClasses("/achievementspost")}
        >
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
        <Link to="/message" className={linkClasses("/message")}>
          Message
        </Link>
        <Link to="/addimage" className={linkClasses("/addimage")}>
          Add Gallery
        </Link>
        <Link to="/admin-add-news" className={linkClasses("/admin-add-news")}>
          Breaking News
        </Link>
        <button
          onClick={handleLogout}
          className="text-white py-3 px-4 bg-blue-800 hover:bg-blue-900 hover:scale-95 rounded text-xl"
        >
          Logout
        </button>
      </nav>

      <AdminMobile isOpen={isMobileMenuOpen} onClose={toggleMobileMenu} />
    </div>
  );
};

export default AdminNavbar;
