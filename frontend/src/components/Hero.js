import React from 'react'
import skating from "../assets/skatinggirl.png"

const Hero = () => {
  return (
    <div className='pb-10 md:pb-16 lg:pb-20' >
        <div className='text-lg md:text-3xl lg:text-5xl text-center  py-10 md:py-16 lg:pt-20 lg:pb-20'>
            <h1 className='text-black font-semibold  text-2xl md:text-4xl lg:text-6xl'>Roller Skating Association</h1>
            <h2 className='text-slate-600 pt-2 md:pt-5'>Popularize Skating Sports and Promote</h2>
            <h2 className='text-blue-800 lg:pt-1'>An active, Healthy lifestyle.</h2>
        </div>

        <div className="relative flex items-center justify-center ">
  <div className="relative w-full  max-w-xs md:max-w-2xl lg:max-w-7xl  bg-white shadow-lg rounded-lg overflow-hidden"> {/* Increased max-width */}
    <img
      src={skating}
      alt="Skating"
      className="absolute inset-0 w-full h-full object-cover"
    />
    <div className="relative bg-black bg-opacity-50 px-5 py-10 md:px-10 md:py-10 lg:py-28 lg:pl-20 ">
      <h1 className="text-xl md:text-3xl lg:text-5xl font-bold text-white">
        Feel the Thrill on Wheels!
      </h1>
      <p className="mt-8 text-white md:max-w-md lg:max-w-xl md:text-lg lg:text-2xl">
        Discover the joy of roller skating with us! Whether you're a beginner or a pro, our community is the perfect place to skate, learn, and have fun.
      </p>
      <button className=" mt-10 md:mt-14 lg:mt-20 px-4 py-2 bg-white text-lg md:text-2xl text-blue-800 font-semibold rounded-lg hover:bg-blue-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
        Join as member
      </button>
    </div>
  </div>
</div>

    

    </div>
  )
}

export default Hero