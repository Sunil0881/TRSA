import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import NewsList from '../components/NewsList'
const News = () => {
  return (
    <div>
        <Navbar/>
        <div>
       
        
            <NewsList/>

        </div>
        <Footer/>
      
    </div>
  )
}

export default News

