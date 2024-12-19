import { useState } from "react";
import React from "react";
import logo from "../assets/newlogo.png";
import Recline from "../assets/recline.png";
import MobileMenu from "./MobileMenu";
import { Link, useLocation } from "react-router-dom";
import nav1 from "../assets/nav1.png";
import nav2 from "../assets/nav2.png";
import nav3 from "../assets/nav3.png";
import nav4 from "../assets/nav4.png";
import nav5 from "../assets/nav5.png";
import nav6 from "../assets/nav6.png";
import nav7 from "../assets/nav7.png";
import logo1 from "../assets/footerlogo.png"

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAchievementsDropdownOpen, setIsAchievementsDropdownOpen] =
    useState(false);
  const [isSkatersDropdownOpen, setIsSkatersDropdownOpen] = useState(false);
  const location = useLocation();
  let dropdownTimeout;

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleMouseEnter = (dropdownSetter) => {
    if (dropdownTimeout) clearTimeout(dropdownTimeout);
    dropdownSetter(true);
  };

  const handleMouseLeave = (dropdownSetter) => {
    dropdownTimeout = setTimeout(() => {
      dropdownSetter(false);
    }, 200); // Delay in milliseconds
  };

  const linkClasses = (path) => `
    hover:scale-95 md:text-lg lg:text-xl md:my-4 lg:my-5 md:px-2 lg:px-4 py-2 rounded ${
      location.pathname === path ? "bg-white text-blue-800" : ""
    }
  `;

  return (
    <div>
      <div>
        <img src={Recline} alt="recline" className="hidden md:block" />
      </div>
      <div className="relative flex justify-between px-2 sm:px-4 md:px-6 lg:px-10 items-center py-2 sm:py-3">
        <a href="/" className="flex items-center">
          <img
            src={logo}
            alt="logo"
            className="w-12 sm:w-16 md:w-20 lg:w-24 mr-2 sm:mr-3 md:mr-5"
          />
          <div className="flex-shrink">
            <h1 className="text-black text-5xl sm:text-sm md:text-xl lg:text-4xl font-bold leading-tight">
              Thiruvallur District Roller Skating Association.
            </h1>
            <h1 className="text-black text-xs sm:text-xs md:text-sm lg:text-base font-bold leading-tight">
              (Affiliated to Tamilnadu Roller Skating Association)
            </h1>
          </div>
        </a>
        
        <button
          className="text-black text-2xl md:hidden focus:outline-none"
          onClick={toggleMobileMenu}
        >
          &#9776;
        </button>
        <div className="hidden lg:flex gap-3 p-2">
        <img src={logo1} alt="icon" className="h-12 w-16" />
          <img src={nav1} alt="icon" className="h-12 w-16" />
          <img src={nav2} alt="icon" className="h-12 w-20" />
          <img src={nav3} alt="icon" className="h-12 w-16" />
          <img src={nav4} alt="icon" className="h-12 w-20" />
          <img src={nav5} alt="icon" className="h-12 w-16" />
          <img src={nav6} alt="icon" className="h-12 w-16" />
          <img src={nav7} alt="icon" className="h-12 w-16" />
        </div>
      </div>

      {/* Desktop Menu */}
      <nav className="hidden md:flex items-center justify-center font-semibold lg:gap-9 md:gap-2 bg-blue-800 text-white">
        <Link to="/newabout" className={linkClasses("/newabout")}>
          About
        </Link>
        <Link to="/team" className={linkClasses("/team")}>
         Office Bearers
        </Link>
        <Link to="/News" className={linkClasses("/News")}>
          News
        </Link>
        <Link to="/events" className={linkClasses("/events")}>
          Events
        </Link>

        <div
          className="relative"
          onMouseEnter={() => handleMouseEnter(setIsAchievementsDropdownOpen)}
          onMouseLeave={() => handleMouseLeave(setIsAchievementsDropdownOpen)}
        >
          <Link to="/achievements" className={linkClasses("/achievements")}>
            Achievements
          </Link>
          {isAchievementsDropdownOpen && (
            <div className="absolute left-0 mt-2 w-48 z-20 bg-white text-blue-800 shadow-lg rounded">
              <Link
                to="/international"
                className="block px-4 py-2 hover:bg-blue-800 hover:text-white"
              >
                International
              </Link>
              <Link
                to="/national"
                className="block px-4 py-2 hover:bg-blue-800 hover:text-white"
              >
                National
              </Link>
              <Link
                to="/state"
                className="block px-4 py-2 hover:bg-blue-800 hover:text-white"
              >
                State
              </Link>
              <Link
                to="/district"
                className="block px-4 py-2 hover:bg-blue-800 hover:text-white"
              >
                District
              </Link>
            </div>
          )}
        </div>

        <Link to="/club" className={linkClasses("/club")}>
          Associative Clubs
        </Link>

        <div
          className="relative"
          onMouseEnter={() => handleMouseEnter(setIsSkatersDropdownOpen)}
          onMouseLeave={() => handleMouseLeave(setIsSkatersDropdownOpen)}
        >
          <Link to="/skatersprofile" className={linkClasses("/skatersprofile")}>
            Skaters Profile
          </Link>
          {isSkatersDropdownOpen && (
            <div className="absolute left-0 mt-2 w-48 bg-white z-20 text-blue-800 shadow-lg rounded">
              <Link
                to="/skaterform"
                className="block px-4 py-2 hover:bg-blue-800 hover:text-white"
              >
                Registration
              </Link>
              <Link
                to="/skatersprofile"
                className="block px-4 py-2 hover:bg-blue-800 hover:text-white"
              >
                Profile
              </Link>
            </div>
          )}
        </div>

        <Link to="/gallery" className={linkClasses("/gallery")}>
          Gallery
        </Link>
        <Link to="/contactus" className={linkClasses("/contactus")}>
          Contact Us
        </Link>

      </nav>

      {/* Mobile Menu */}
      <MobileMenu isOpen={isMobileMenuOpen} onClose={toggleMobileMenu} />

      {/* Mobile Dropdowns */}
      <nav
        className={`md:hidden ${
          isMobileMenuOpen ? "block" : "hidden"
        } bg-blue-800 text-white`}
      >
        <Link to="/newabout" className={linkClasses("/newabout")}>
          About
        </Link>
        <Link to="/team" className={linkClasses("/team")}>
          Association
        </Link>
        <Link to="/News" className={linkClasses("/News")}>
          News
        </Link>
        <Link to="/events" className={linkClasses("/events")}>
          Events
        </Link>

        <div className="relative">
          <Link to="/achievements" className={linkClasses("/achievements")}>
            Achievements
          </Link>
          <div className={isAchievementsDropdownOpen ? "block" : "hidden"}>
            <Link
              to="/national"
              className="block px-4 py-2 hover:bg-blue-800 hover:text-white"
            >
              National
            </Link>
            <Link
              to="/state"
              className="block px-4 py-2 hover:bg-blue-800 hover:text-white"
            >
              State
            </Link>
          </div>
        </div>

        <Link to="/club" className={linkClasses("/club")}>
          Associative Clubs
        </Link>

        <div className="relative">
          <Link to="/skatersprofile" className={linkClasses("/skatersprofile")}>
            Skaters Profile
          </Link>
          <div className={isSkatersDropdownOpen ? "block" : "hidden"}>
            <Link
              to="/skaterform"
              className="block px-4 py-2 hover:bg-blue-800 hover:text-white"
            >
              Registration
            </Link>
            <Link
              to="/skatersprofile"
              className="block px-4 py-2 hover:bg-blue-800 hover:text-white"
            >
              Profile
            </Link>
          </div>
        </div>
        <Link to="/gallery" className={linkClasses("/gallery")}>
          Gallery
        </Link>

        

      </nav>
    </div>
  );
};

export default Navbar;