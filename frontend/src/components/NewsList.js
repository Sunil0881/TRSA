import React, { useState } from 'react'
import NewsCard from './NewsCard'
import { useEffect } from 'react'

const NewsList = () => {
    
    const[news,setNews] = useState([])
    const[error,setError] = useState(null)
    const[loading,setLoading] = useState(true);
    useEffect(   () =>{
        const fetchNews = async () => {
try {
    const response = await fetch('https://trsabackend.vercel.app/api/news');
     
    if(!response.ok){
        const errordetails = await response.json();
        throw new Error(`HTTP error! Status: ${response.status}. Details: ${errordetails}`);

    }

    const data = await response.json();
      // validating the api response vro
     if(Array.isArray(data)){
        setNews(data);
     }
     else{
        throw new Error('Invalid response from the server');
     }

    
} catch (error) {
    console.error('Error while fetchingv news',error.message)
    setError(`Failed to load all news ${error.message}`)
} finally{
    setLoading(false)
}
}

   fetchNews();
},[])
  return (

  
    <div>
        
        
      <NewsCard/>
    </div>
  )
}

export default NewsList
