import React from 'react';
import { FaPhoneAlt } from 'react-icons/fa';

const Questions = () => {
  return (
    <div className='pt-20 pb-16 pl-7 md:pt-28 md:pl-28 lg:pl-60 lg:pt-52 lg:pb-32 md:pb-20'>
      <h1 style={{ fontFamily: 'Merriweather, serif' }} className='text-2xl md:text-4xl lg:text-6xl font-semibold'>
        Complex Questions ?
      </h1>
      <p className='md:text-xl lg:text-2xl md:max-w-xl lg:max-w-3xl py-6 md:py-10 pr-7 md:pr-0'>
        Request for a personalized budget for your legal problem. We will send you a couple options in 24 hours. You can have a free consult if you are our first customer.
      </p>
      <button className='px-3 py-2 bg-blue-800 text-white text-xl md:text-2xl font-semibold rounded-lg flex items-center group'>
        <FaPhoneAlt className='mr-2 group-hover:animate-ring' />
        Call now
      </button>
    </div>
  );
};

export default Questions;
