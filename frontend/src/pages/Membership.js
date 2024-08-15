import React from 'react'
import Banner from '../components/Banner'
import signup from "../assets/signup.png"
import Questions from "../components/Questions"
import Footer from "../components/Footer"
import Navbar from '../components/Navbar'
import MemberCard from "../components/MemberCard"


const Membership = () => {
  return (
    <div>
      <Navbar />
        <Banner 
  mainText="One Membership,"
  subTexts="Unlimited benefits, and More rewards for you! Exclusive access to events! Special discounts and offers!"
/>

        <div>
          <h1 className='text-3xl md:text-5xl font-semibold px-5 md:px-20 lg:text-6xl lg:px-28 '>Join Our Skating <br className='hidden md:block'></br>Community!</h1>
          <p className='pt-4 px-5 md:text-xl md:px-20 lg:px-28 lg:text-xl lg:max-w-6xl lg:pt-8'>Become a member of Thiruvallur District Roller Skating Association and enjoy exclusive benefits that will keep you rolling in style.</p>
        </div>
        <div className='md:flex md:pt-5 md:px-16 lg:px-24 lg:items-center'>
          <div className='px-5 py-5 '>
            <img src={signup} alt='signup'></img>
          </div>
          <div className='px-5 md:pt-2 lg:pl-32 '>
            <p className='text-blue-800 md:text-lg lg:text-xl'>Do Sign-Up</p>
            <h1 className='text-2xl font-semibold pb-4 md:pb-2 md:text-3xl lg:text-4xl lg:pt-3'>Add Membership</h1>
            <p className='md:text-md lg:text-2xl lg:pt-5 '>Join Our Skating Community! Enjoy unlimited access to all open skate sessions, exclusive member events, and discounts on rentals and merchandise. Sign up today and roll into fun with Thiruvallur District Roller Skating Association!</p>
          </div>
        </div>

        <MemberCard />

       
        <Questions />
        <Footer />
        

    </div>
  )
}

export default Membership