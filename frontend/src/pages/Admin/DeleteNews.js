import React from 'react'
import { useEffect,useState } from 'react';
import '../../Styles/Scroll.css'
const DeleteNews = () => {
    // bring news from backend
     const [news, setNews] = useState([]);
     const[error,setError] = useState(null);
     const [loading, setLoading] = useState(true)
     const [success, setSuccess] = useState(''); 


     useEffect( ()=>{
        // need to the news from backend

        const fetchNews = async () =>{
            try {
                const response = await fetch ('https://trsabackend.vercel.app/api/news',
                
                )
                
              if(!response.ok){
                const errorData = await response.text();
                throw new Error(`HTTP error! Status: ${response.status}. Details: ${errorData}`);
              } 
              
              const data = await response.json();

              // let me check if these is a an array tyoe
              // new skill learned
              if(Array.isArray(data)){
                setNews(data);
              }
              else{
                throw new Error('Unexpected data format');
              }
            } catch (error) {
                console.error('Error fetching news:', error.message);
        setError(`Failed to load news. Error: ${error.message}`);
                
            } finally{
                setLoading(false);
            }

};
     // need to call the function
     fetchNews();
     },[])

     const handleDelete = async (id) =>{
        if (window.confirm('Are you sure you want to delete this event?')) {
        try {
             const response = await fetch (`https://trsabackend.vercel.app/api/news/${id}`, {
                  method: 'DELETE',
        }) 

        if (response.ok){
           setNews( news.filter( (news) => news._id !== id
           ));   
        }
        else{
            const errorData = await response.text();
            throw new Error(`HTTP error! Status: ${response.status}. Details: ${errorData}`
     )   }
    }catch (error) {
           console.error('Error deleting event:', error.message)
           setError(`Failed to delete event. Error: ${error.message}`)
        }
     }
    }

  return (
    <div>
        <div className="p-4 lg:px-28">
     

     {/* Loader or Content */}
     {loading ? (
       <div className="flex justify-center items-center min-h-screen">
         <div className="loader"> <div className="spinner"></div></div> {/* Loader style from Scroll.css */}
       </div>
     ) : error ? (
       <p className="text-red-500 text-center">{error}</p>
     ) : (
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
         {news.length > 0 ? (
           news.map((news) => (
             <div key={news._id} className="bg-white rounded-3xl shadow-lg p-6 w-full max-w-sm">
               <h3 className="text-xl font-semibold mb-2">{news.title}</h3>
               <p className="text-gray-600 mb-2">{news.escription}</p>
               {news.image && <img src={news.image} alt={news.title} className="w-full h-48 object-cover mb-4" />}
               <button
                 onClick={() => handleDelete(news._id)}
                 className="bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-500 transition duration-300 ease-in-out"
               >
                 Delete
               </button>
             </div>
           ))
         ) : (
           <p className="text-center">No news found</p>
         )}
       </div>
     )}

     {success && <p className="text-green-600 text-center mt-4">{success}</p>}
   </div>
      
    </div>
  )
};

export default DeleteNews
