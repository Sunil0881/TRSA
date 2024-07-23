import React from 'react'
import Navbar from '../components/Navbar'
import Hero from "../components/Hero"
import Imgslide from '../components/Imgslide'

const Home = () => {
  return (
    
    <div>
        <Navbar />
        <Hero />
        <div className='text-blue-800 pl-8 md:pl-20 text-lg md:text-2xl lg:pl-32 lg:text-4xl  pb-5 md:pb-10 font-semibold '>
          What We Do ?
        </div>
        <Imgslide />
        </div>
  )
}

export default Home