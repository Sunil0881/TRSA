import React from 'react';
import Gallery from "../assets/gallery.png";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Gallary = () => {
  return (
    <div>
      <Navbar />
      <div className="relative w-full h-28 md:h-44 lg:w-full lg:h-full">
        <img src={Gallery} alt="Event Banner" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <p className="absolute inset-0 flex items-center justify-left pl-10 text-white text-2xl md:text-4xl font-bold">
          Gallery
        </p>
      </div>

      <div>

      </div>
      <Footer />
    </div>
  );
};

export default Gallary;
