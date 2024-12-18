import React from 'react'
import logo from "../assets/newlogo.png";
import insta from "../assets/insta.png"
import twitter from "../assets/twitter.png"
import youtube from "../assets/youtube.png"

const Footer = () => {
  return (
    <div className='bg-blue-800'>
      <div className='pt-5 px-4 md:pt-10 md:px-6 md:flex lg:pl-40 lg:pr-20 lg:pt-14'>
        <div className='flex flex-wrap gap-8 md:gap-20 lg:gap-72 justify-between'>
          <div className="flex items-center">
            {/* Responsive Logo */}
            <a href='/'>
              <img src={logo} className="w-16 h-16 md:w-24 md:h-24 lg:w-28 lg:h-28" alt='logo' />
            </a>
            <a href='/'>
              <h1 className="text-white ml-4 text-sm md:text-xl lg:text-2xl font-semibold">
                Thiruvallur District Roller <br className="hidden md:block" /> Skating Association.
              </h1>
            </a>
          </div>
          <p className='text-white lg:max-w-md md:max-w-sm lg:text-lg pt-5'>
            At Thiruvallur District Roller Skating Association, we believe in the power of roller skating to bring people together and keep them active.
          </p>
        </div>
      </div>
      {/* Footer Bottom */}
      <div className='md:flex md:justify-between pt-10 text-center lg:px-40 lg:pt-10 md:items-center md:px-10 md:pt-8'>
        <p className='text-white text-sm md:text-base'>2024, TDRSA All rights reserved</p>
        <div className='flex gap-3 pb-3 pt-3 md:pt-0 justify-center'>
          <img src={insta} alt='insta' className='h-8 w-8 md:h-10 md:w-10' />
          <img src={twitter} alt='twitter' className='h-8 w-8 md:h-10 md:w-10' />
          <img src={youtube} alt='youtube' className='h-8 w-8 md:h-10 md:w-10' />
        </div>
      </div>
    </div>
  )
}

export default Footer


 {/* <div className='flex text-white pt-10 gap-3 md:gap-5 lg:gap-20 lg:ml-72 md:ml-10 justify-center '>
                <div>
                    <h1 className='text-xl font-semibold pb-3'>Product</h1>
                    <div className=''>
                        <p className='py-2'>Overview</p>
                        <p className='py-2'>Features</p>
                        <p className='py-2'>Tutorial</p>
                        <p className='py-2'>Pricing</p>
                        <p className='py-2'>Releases</p>
                    </div>
                </div>

                <div>
                    <h1 className='text-xl font-semibold pb-3'>Association</h1>
                    <div className='text-center'>
                        <p className='py-2'>About</p>
                        <p className='py-2'>Press</p>
                        <p className='py-2'>Careers</p>
                        <p className='py-2'>Contact</p>
                        <p className='py-2'>Partners</p>
                    </div>
                </div>

                <div>
                    <h1 className='text-xl font-semibold pb-3'>Support</h1>
                    <div> 
                        <p className='py-2'>Help Center</p>
                        <p className='py-2'>Terms of service</p>
                        <p className='py-2'>legal</p>
                        <p className='py-2'>Privacy Policy</p>
                        <p className='py-2'>Status</p>
                    </div>
                </div>
            </div> */}