import React from 'react';
import Banner from '../assets/Eventsimg.png';
import Euro from '../assets/Euro.png';

const EventBanner = () => {
  return (
    <div className="relative w-full h-28 md:h-44 lg:w-full lg:h-full">
      <img src={Banner} alt="Event Banner" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <img
        src={Euro}
        alt="Euro"
        className="absolute w-20 h-16 lg:w-52 lg:h-32 md:w-28 md:h-24"
        style={{ top: '35%', left: '50%', transform: 'translate(-50%, -50%)' }}
      />
      <button
        className="absolute bg-red-500  md:text-xl  lg:text-2xl bg-opacity-70 text-white font-semibold rounded-md lg:px-10 lg:py-3 md:px-4 md:py-2 py-1 px-3"
        style={{ top: '80%', left: '50%', transform: 'translate(-50%, -50%)' }}
      >
        Register Now!
      </button>
    </div>
  );
};

export default EventBanner;
