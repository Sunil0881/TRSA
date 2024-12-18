import React from 'react';
import Banner from '../assets/Eventsimg.png';


const EventBanner = () => {
  return (
    <div className="relative w-full h-28 md:h-44 lg:w-full lg:h-full">
      <img src={Banner} alt="Event Banner" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black opacity-50"></div>
     
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
