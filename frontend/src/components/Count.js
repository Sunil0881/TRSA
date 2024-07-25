import React from 'react'
import BG from "../assets/BG.png"

const Count = () => {
  return (
    <div>
        <div className='absolute '>
        <img  src={BG} alt='bg'  className='h-80 md:h-full '></img>
        </div>
        <div className='relative  text-white' >
            <h1 className='text-2xl lg:text-5xl md:text-3xl text-center pt-5 md:pt-7 lg:pt-20 font-semibold' style={{fontFamily: 'Merriweather, serif'}}>Some count that matters</h1>
            <p className='text-center md:pt-1 lg:pt-4 text-xs md:text-md lg:text-lg'>Our achievement in the journey depicted in numbers</p>
            <div className='md:flex text-center pt-6   md:justify-center md:gap-32 md:pt-7 lg:pt-16'>
                <div>
                    <h1 className='text-2xl md:text-3xl lg:text-5xl font-bold '>30</h1>
                    <p className='text-md lg:text-lg lg:pt-2'>Achievements</p>
                    
                </div>
                <div>
                    <h1 className='text-2xl md:text-3xl lg:text-5xl font-bold pt-5 md:pt-0'>300+</h1>
                    <p className='text-md  lg:text-lg lg:pt-2'>Taken business legalities</p>
                </div>
                <div>
                    <h1 className='text-2xl md:text-3xl lg:text-5xl font-bold pt-5 md:pt-0'>8</h1>
                    <p className='text-md lg:text-lg lg:pt-2'>Years of Journey</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Count
