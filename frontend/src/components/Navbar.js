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
          <a href='/' ><h1 className="text-black  ml-4   text-md md:text-3xl font-bold">Thiruvallur District Roller <br className="hidden md:block" /> Skating Association.</h1></a>
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