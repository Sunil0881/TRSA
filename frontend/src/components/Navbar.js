import { useState } from 'react'
import React from 'react'
import logo from "../assets/logo.png"
import Recline from '../assets/recline.png'
import MobileMenu from './MobileMenu';
import { Link  } from "react-router-dom";


const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
 
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

 

  return (
    <div>
      
      <div className="mb-3 ">
        <img src={Recline} alt="recline" />
      </div>
      <div className="relative flex justify-between px-5 md:px-10">
        <div className="flex items-center">
          <a href='/' > <img src={logo} width={100} height={100} alt='logo'></img></a>
          <a href='/' ><h1 className="text-black  ml-4   text-xl md:text-2xl font-bold">Thiruvallur District Roller <br className="hidden lg:block" /> Skating Association.</h1></a>
        </div>
        <div className="flex  md:hidden">
          <button
            className="text-black text-2xl focus:outline-none"
            onClick={toggleMobileMenu}
          >
            &#9776; {/* Hamburger icon */}
          </button>
        </div>
        <nav className="hidden items-center md:flex lg:gap-8 md:gap-4 ">
          <Link to="/" className="text-black hover:scale-95 text-xl">
            Home
          </Link>
          <Link to="/about" className="text-black hover:scale-95 text-xl">
            Membership
          </Link>
          <Link to="/about" className="text-black hover:scale-95 text-xl">
            About
          </Link>
          
          <Link to="/display" className="text-black hover:scale-95 text-xl">
           Contact
          </Link>
          <a href='/contact' ><button className="text-white p-2 px-4 bg-blue-800 hover:bg-blue-900 hover:scale-95 rounded text-xl">
            Member Login
          </button></a>
        </nav>
      </div>
      <MobileMenu isOpen={isMobileMenuOpen} onClose={toggleMobileMenu} />
    </div>
  );
};


export default Navbar