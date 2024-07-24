import React from 'react';
import gridimg from "../assets/gridimg.png";
import skating from "../assets/skatinggirl.png";

const GridDesign = () => {
  return (
    <div className='md:px-12 lg:px-36 pb-20 '>
    <div className='grid grid-rows-3 grid-cols-3 md:gap-5 lg:gap-10'>
      <div className='flex flex-col justify-center bg-gray-200 md:px-5 md:py-5 lg:px-10 rounded-2xl'>
        <h1 className='text-blue-800 md:text-xl lg:text-2xl'>For Professionals</h1>
        <h1 className='md:text-3xl lg:text-4xl md:pt-1 lg:pt-2'>Competitions</h1>
        <h1 className='md:text-md md:pt-6 lg:pt-10 lg:text-xl'>+10 Events per year</h1>
      </div>

      <div className='col-span-2 row-span-2 rounded-2xl'>
        <img src={gridimg} alt='img' className='w-full h-full object-cover' />
      </div>

      <div className='row-span-2 rounded-2xl'>
        <img src={skating} alt='img' className='w-full h-full object-cover' />
      </div>

      <div className='flex flex-col justify-center px-10 rounded-2xl md:px-5 bg-blue-800 text-white'>
        <h1 className=' md:text-xl  lg:text-2xl'>For Casuals</h1>
        <h1 className='lg:text-4xl lg:pt-2 md:pt-1 md:text-3xl'>Events</h1>
        <h1 className=' md:text-md md:pt-6 lg:pt-10 lg:text-xl'>+3k participants per year</h1>
      </div>

      <div className='flex flex-col justify-center md:px-5 px-10 bg-gray-200 rounded-2xl'>
      <h1 className='text-blue-800 md:text-xl lg:text-2xl'>For journalist</h1>
        <h1 className='md:text-3xl lg:text-4xl md:pt-1 lg:pt-2'>Informations</h1>
        <h1 className='md:text-md md:pt-6 lg:pt-10 lg:text-xl'>Valuable aticlesr</h1>
      </div>
    </div>
    </div>
  );
}

export default GridDesign;
