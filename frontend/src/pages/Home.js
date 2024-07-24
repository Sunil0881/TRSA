import React from 'react'
import Navbar from '../components/Navbar'
import Hero from "../components/Hero"
import Imgslide from '../components/Imgslide'
import GridDesign from '../components/GridDesign'
import LegalHelp from '../components/LegalHelp'

const Home = () => {
  return (
    
    <div>
        <Navbar />
        <Hero />
        <div className='text-blue-800 pl-5 md:pl-20 text-lg md:text-2xl lg:pl-32 lg:text-4xl  pb-5 md:pb-10 font-semibold '>
          What We Do ?
        </div>
        <Imgslide />

        <div className='md:flex md:gap-32 lg:gap-96 px-5 md:px-20 lg:px-36 pb-10 md:pb-20'>
          <div>
            <h1 className='text-blue-900 text-lg md:text-2xl lg:text-3xl'>Introduction</h1>
            <h2 className='text-2xl md:text-3xl lg:text-5xl pt-2 md:pt-4'>About Association</h2>
            <p className='pt-1 md:pt-4 lg:pt-9 md:text-lg lg:text-xl max-w-6xl'>At Thiruvallur District Roller Skating Association, we believe in the power of roller skating to bring people together and keep them active. Our mission is to create a welcoming and vibrant space for skaters of all ages and skill levels.</p>
          </div>

          <div>
            <h1 className='text-blue-900 text-lg md:text-2xl lg:text-3xl pt-6 md:pt-0'>Goal</h1>
            <h2 className='text-2xl md:text-3xl pt-2 lg:text-5xl md:pt-4'>Achievement</h2>
            <p className='pt-1 md:pt-4 lg:pt-9 md:text-lg lg:text-xl max-w-3xl'>From basic skills to advanced tricks, our experienced instructors are here to help you glide smoothly on your skates.</p>
          </div>

        </div>
         
         <div className='hidden md:block'>
        <GridDesign />
        </div>

        <LegalHelp />

    </div>
  )
}

export default Home