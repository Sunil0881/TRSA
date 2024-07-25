import React from 'react'
import logo from "../assets/footerlogo.png"
import insta from "../assets/insta.png"
import twitter from "../assets/twitter.png"
import youtube from "../assets/youtube.png"

const Footer = () => {
  return (
    <div className='bg-blue-800'>
        <div className='flex pl-40 pr-20 pt-14'>
            <div>
                <div className="flex items-center">
                    <a href='/' > <img src={logo} width={100} height={100} alt='logo'></img></a>
                    <a href='/' ><h1 className="text-white ml-4 text-md md:text-3xl font-semibold">Thiruvallur District Roller <br className="hidden md:block" /> Skating Association.</h1></a>
                    
                </div>
                <p className='text-white max-w-md text-lg pt-5'>At Thiruvallur District Roller Skating Association, we believe in the power of roller skating to bring people together and keep them active.</p>
            </div>

            <div className='flex text-white pt-5 lg:gap-20 ml-72'>
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
                    <div>
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
            </div>
        </div>
        <div className='flex justify-between px-40 pt-10 pb-3 ' >
            <p className='text-white'>2024, All rights reserved</p>
            <div className='flex gap-3'>
                <img src={insta} alt='insta' className='h-10'></img>
                <img src={twitter} alt='twitter' className='h-10'></img>
                <img src={youtube} alt='youtube' className='h-10'></img>

            </div>
        </div>
    </div>
  )
}

export default Footer