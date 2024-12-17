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

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAchievementsDropdownOpen, setIsAchievementsDropdownOpen] = useState(false);
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
    }, 200);
  };

  const linkClasses = (path) => `
    transition-all duration-200 ease-in-out
    text-sm sm:text-base md:text-lg lg:text-xl
    px-2 sm:px-3 md:px-4 lg:px-6
    py-2 sm:py-3
    my-1 sm:my-2 md:my-3 lg:my-4
    rounded hover:bg-blue-700
    ${location.pathname === path ? "bg-white text-blue-800" : ""}
  `;

  return (
    <div className="w-full">
      <div>
        <img src={Recline} alt="recline" className="hidden md:block w-full object-cover" />
      </div>
      <div className="relative flex justify-between px-2 sm:px-4 md:px-6 lg:px-10 items-center py-2 sm:py-3">
        <a href="/" className="flex items-center">
          <img
            src={logo}
            alt="logo"
            className="w-12 sm:w-16 md:w-20 lg:w-24 mr-2 sm:mr-3 md:mr-5"
          />
          <div className="flex-shrink">
            <h1 className="text-black text-xs sm:text-sm md:text-xl lg:text-2xl font-bold leading-tight">
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
        
        <div className="hidden lg:flex gap-2 xl:gap-3 p-2">
          {[nav1, nav2, nav3, nav4, nav5, nav6, nav7].map((nav, index) => (
            <img 
              key={index} 
              src={nav} 
              alt={`icon-${index + 1}`} 
              className="h-8 w-12 xl:h-12 xl:w-16 object-contain"
            />
          ))}
        </div>
      </div>

      {/* Desktop Menu */}
      <nav className="hidden md:flex items-center justify-center flex-wrap font-semibold gap-1 sm:gap-2 lg:gap-4 xl:gap-6 bg-blue-800 text-white p-2">
        <Link to="/newabout" className={linkClasses("/newabout")}>About</Link>
        <Link to="/team" className={linkClasses("/team")}>Association</Link>
        <Link to="/News" className={linkClasses("/News")}>News</Link>
        <Link to="/events" className={linkClasses("/events")}>Events</Link>

        <div
          className="relative group"
          onMouseEnter={() => handleMouseEnter(setIsAchievementsDropdownOpen)}
          onMouseLeave={() => handleMouseLeave(setIsAchievementsDropdownOpen)}
        >
          <Link to="/achievements" className={linkClasses("/achievements")}>
            Achievements
          </Link>
          {isAchievementsDropdownOpen && (
            <div className="absolute left-0 mt-1 w-36 sm:w-40 md:w-44 lg:w-48 z-20 bg-white text-blue-800 shadow-lg rounded transform scale-100 opacity-100 transition-all duration-200">
              {["International", "National", "State", "District"].map((item) => (
                <Link
                  key={item}
                  to={`/${item.toLowerCase()}`}
                  className="block px-3 py-2 text-sm hover:bg-blue-800 hover:text-white transition-colors duration-200"
                >
                  {item}
                </Link>
              ))}
            </div>
          )}
        </div>

        <Link to="/club" className={linkClasses("/club")}>Associative Clubs</Link>

        <div
          className="relative group"
          onMouseEnter={() => handleMouseEnter(setIsSkatersDropdownOpen)}
          onMouseLeave={() => handleMouseLeave(setIsSkatersDropdownOpen)}
        >
          <Link to="/skatersprofile" className={linkClasses("/skatersprofile")}>
            Skaters Profile
          </Link>
          {isSkatersDropdownOpen && (
            <div className="absolute left-0 mt-1 w-36 sm:w-40 md:w-44 lg:w-48 z-20 bg-white text-blue-800 shadow-lg rounded transform scale-100 opacity-100 transition-all duration-200">
              {[
                { title: "Registration", path: "/skaterform" },
                { title: "Profile", path: "/skatersprofile" }
              ].map((item) => (
                <Link
                  key={item.title}
                  to={item.path}
                  className="block px-3 py-2 text-sm hover:bg-blue-800 hover:text-white transition-colors duration-200"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          )}
        </div>

        <Link to="/gallery" className={linkClasses("/gallery")}>Gallery</Link>
        <Link to="/contactus" className={linkClasses("/contactus")}>Contact Us</Link>
      </nav>

      {/* Mobile Menu */}
      <MobileMenu isOpen={isMobileMenuOpen} onClose={toggleMobileMenu} />

      {/* Mobile Navigation */}
      <nav
        className={`md:hidden ${
          isMobileMenuOpen ? "block" : "hidden"
        } bg-blue-800 text-white p-4 space-y-2`}
      >
        {[
          { path: "/newabout", label: "About" },
          { path: "/team", label: "Association" },
          { path: "/News", label: "News" },
          { path: "/events", label: "Events" },
          { path: "/achievements", label: "Achievements" },
          { path: "/club", label: "Associative Clubs" },
          { path: "/skatersprofile", label: "Skaters Profile" },
          { path: "/gallery", label: "Gallery" },
          { path: "/contactus", label: "Contact Us" }
        ].map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`block ${linkClasses(item.path)}`}
            onClick={toggleMobileMenu}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Navbar;