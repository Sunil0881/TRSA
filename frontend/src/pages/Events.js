import React from 'react'
import Navbar from "../components/Navbar.js"
import EventsBanner from "../components/EventBanner.js"
import EventsList from '../components/EventsList.js'
import Footer from "../components/Footer.js"

const Events = () => {
  return (
    <div>
        <Navbar />
        <EventsBanner />
        <EventsList />
        <Footer />
    </div>
  )
}

export default Events   