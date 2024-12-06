import { useState } from 'react';
import React from 'react';
import logo from '../assets/newlogo.png';
import Recline from '../assets/recline.png';
import MobileMenu from './MobileMenu';
import { Link, useLocation } from 'react-router-dom';

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
    }, 200); // Delay in milliseconds
  };

  const linkClasses = (path) =>
    `hover:scale-95 md:text-lg lg:text-xl md:my-4 lg:my-5 md:px-2 lg:px-4 py-2 rounded ${
      location.pathname === path ? 'bg-white text-blue-800' : ''
    }`;

  return (
    <div>
      <div className="mb-3 ">
        <img src={Recline} alt="recline" />
      </div>
      <div className="relative flex justify-between px-5 md:px-10">
        <div className="flex">
          <a href="/">
            <img src={logo} width={100} height={100} alt="logo" />
          </a>
          <div>
            <a href="/">
              <h1 className="text-black ml-24 mt-3 text-md md:text-3xl lg:text-5xl font-bold">
                Thiruvallur District Roller Skating Association.
              </h1>
            </a>
            <a href="/">
              <h1 className="text-black ml-96 text-md md:text-3xl lg:text-xl font-semibold">
                (Affiliated to Tamilnadu Roller Skating Association)
              </h1>
            </a>
          </div>
        </div>
        <div className="flex md:hidden">
          <button
            className="text-black text-2xl focus:outline-none"
            onClick={toggleMobileMenu}
          >
            &#9776; {/* Hamburger icon */}
          </button>
        </div>
      </div>
      <nav className="hidden items-center md:flex md:justify-center font-semibold lg:gap-12 md:gap-2 bg-blue-800 text-white">
        <Link to="/newabout" className={linkClasses('/newabout')}>
          About
        </Link>
        <Link to="/team" className={linkClasses('/team')}>
          Association
        </Link>
        <Link to="/News" className={linkClasses('/News')}>
          News
        </Link>
        <Link to="/events" className={linkClasses('/events')}>
          Events
        </Link>
        
        <div
          className="relative"
          onMouseEnter={() => handleMouseEnter(setIsAchievementsDropdownOpen)}
          onMouseLeave={() => handleMouseLeave(setIsAchievementsDropdownOpen)}
        >
          <Link to="/achievements" className={linkClasses('/achievements')}>
            Achievements
          </Link>
          {isAchievementsDropdownOpen && (
            <div className="absolute left-0 mt-2 w-48 z-20 bg-white text-blue-800 shadow-lg rounded">
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
          )}
        </div>
        <Link to="/club" className={linkClasses('/club')}>
          Associative Clubs
        </Link>
        <div
          className="relative"
          onMouseEnter={() => handleMouseEnter(setIsSkatersDropdownOpen)}
          onMouseLeave={() => handleMouseLeave(setIsSkatersDropdownOpen)}
        >
          <Link to="/skatersprofile" className={linkClasses('/skatersprofile')}>
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
        <Link to="/gallery" className={linkClasses('/gallery')}>
          Gallery
        </Link>
        
      </nav>
      <MobileMenu isOpen={isMobileMenuOpen} onClose={toggleMobileMenu} />
    </div>
  );
};

export default Navbar;
