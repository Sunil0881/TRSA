import React from 'react';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import BG from "../assets/BG.png";

const Count = () => {
  const { ref: achievementsRef, inView: achievementsInView } = useInView({ triggerOnce: true });
  const { ref: legalitiesRef, inView: legalitiesInView } = useInView({ triggerOnce: true });
  const { ref: journeyRef, inView: journeyInView } = useInView({ triggerOnce: true });

  return (
    <div>
      <div className='absolute'>
        <img src={BG} alt='bg' className='h-80 md:h-full' />
      </div>
      <div className='relative text-white'>
        <h1 className='text-2xl lg:text-5xl md:text-3xl text-center pt-5 md:pt-7 lg:pt-20 font-semibold' style={{ fontFamily: 'Merriweather, serif' }}>
          Some count that matters
        </h1>
        <p className='text-center md:pt-1 lg:pt-4 text-xs md:text-md lg:text-lg'>Our achievement in the journey depicted in numbers</p>
        <div className='md:flex text-center pt-6 md:justify-center md:gap-32 md:pt-7 lg:pt-16'>
          <div ref={achievementsRef}>
            <h1 className='text-2xl md:text-3xl lg:text-5xl font-bold'>
              {achievementsInView ? <CountUp end={30} duration={2} /> : '0'}
            </h1>
            <p className='text-md lg:text-lg lg:pt-2'>Achievements</p>
          </div>
          <div ref={legalitiesRef}>
            <h1 className='text-2xl md:text-3xl lg:text-5xl font-bold pt-5 md:pt-0'>
              {legalitiesInView ? <CountUp end={300} duration={2} /> : '0'}
              +
            </h1>
            <p className='text-md lg:text-lg lg:pt-2'>Taken business legalities</p>
          </div>
          <div ref={journeyRef}>
            <h1 className='text-2xl md:text-3xl lg:text-5xl font-bold pt-5 md:pt-0'>
              {journeyInView ? <CountUp end={8} duration={2} /> : '0'}
            </h1>
            <p className='text-md lg:text-lg lg:pt-2'>Years of Journey</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Count;
