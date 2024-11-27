import { useState } from 'react'
import React from 'react'
import logo from "../assets/newlogo.png"
import Recline from '../assets/recline.png'
import MobileMenu from './MobileMenu';
import { Link, useLocation } from "react-router-dom";


const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const linkClasses = (path) => 
    `hover:scale-95  md:text-lg lg:text-xl md:my-4 lg:my-5 md:px-2 lg:px-4 py-2 rounded ${location.pathname === path ? 'bg-white text-blue-800' : ''}`;
     console.log(location.pathname);

  return (
    <div>
      <div className="mb-3 ">
        <img src={Recline} alt="recline" />
      </div>
      <div className="relative flex justify-between px-5 md:px-10">
        <div className="flex ">
          <a href='/' > <img src={logo} width={100} height={100} alt='logo'></img></a>
          <div>
          <a href='/' ><h1 className="text-black ml-24 mt-3 text-md md:text-3xl lg:text-5xl font-bold">Thiruvallur District Roller Skating Association.</h1></a>
          <a href='/' ><h1 className="text-black ml-96  text-md md:text-3xl lg:text-xl font-semibold">(Affiliated to Tamilnadu Roller Skating Association)</h1></a>
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
        {/* <header className="hidden items-center md:flex lg:gap-8 md:gap-4">
          <Link to='/gallery'><button className="text-white py-3 px-4 bg-blue-800 hover:bg-blue-900 hover:scale-95 rounded text-xl">
            Gallery
          </button></Link>
        </header> */}
      </div>
      <nav className="hidden items-center md:flex md:justify-center font-semibold lg:gap-12 md:gap-2 bg-blue-800 text-white">
        <Link to="/" className={linkClasses("/")}>
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
        <Link to="/achievements" className={linkClasses("/achievements")}>
          Achievement
        </Link>
        <Link to="/club" className={linkClasses("/club")}>
          Associative Club
        </Link>
       
        <Link to="/skatersprofile" className={linkClasses("/skatersprofile")}>
          Skaters Profile
        </Link>
        <Link to="/gallery" className={linkClasses("/gallery")}>
          Gallery
        </Link>
        
      </nav>
      <MobileMenu isOpen={isMobileMenuOpen} onClose={toggleMobileMenu} />
    </div>
  );
};

export default Navbar;
