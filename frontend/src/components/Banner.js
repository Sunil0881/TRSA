import React from 'react'
import skating from "../assets/skatinggirl.png"

const Banner = () => {
  return (
    
        <div className="relative flex items-center justify-center pt-5 md:pt-10">
  <div className="relative w-full  max-w-xs md:max-w-2xl lg:max-w-7xl  bg-white shadow-lg rounded-lg overflow-hidden"> {/* Increased max-width */}
    <img
      src={skating}
      alt="Skating"
      className="absolute inset-0 w-full h-full object-cover"
    />
    <div className="relative bg-black bg-opacity-50 py-5 md:py-10 lg:py-16  text-center ">
      <h1 className="text-xl md:text-3xl lg:text-6xl font-semibold text-white">
        One Membership,
      </h1>
      <h1 className="text-xl md:text-3xl lg:text-6xl font-semibold text-white bg-blue-800 rounded-lg md:mx-40 mx-10 mt-2 lg:mx-72 lg:mt-5 md:mt-3 ">
        Unlimited benedits, and 
      </h1>
      
      
    </div>
  </div>
    </div>
  )
}

export default Banner