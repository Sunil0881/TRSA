import React from 'react'
import { useState } from 'react'
import AdminNavbar from '../../components/AdminNavbar';
import DeleteNews from './DeleteNews';
const AddNews = () => {

    const [title,setTitle] = useState('');
    const [description,setDescription] = useState('');
    const [image,setImage] = useState(null);
    const [success,setSuccess] = useState('');
    const maxTitleLength = 45;
    const[error,setError] =useState(null);
    const [isFormVisible, setIsFormVisible] = useState(false);
  
    const maxDescriptionLength = 300;   


    const handleSubmit = async  (e) =>{
        
      // to avoid reload after sunmission  
        
      e.preventDefault();
       // checks if there is no string inside
       if(!title.trim()){
        setError('Please enter a title')
        return;
       }     

        const newsEvents ={
            title,
            description,
            image
        };

        const urlvar = 'https://trsabackend.vercel.app';
           
        try {
            
            const response =await fetch (`${urlvar}/api/news`,{
                method: 'POST',
                headers:{
                    'Content-Type': 'application/json',
                },
                body : JSON.stringify(newsEvents)
            });

            if(response.ok){
                const data = await response.json();
                console.log(data);
                setSuccess(" News saved successfully:", data);
                setTitle('');
                setDescription('');
                setImage(null);
                setError('');

            }
            else{
                const errorData = await response.json();
        console.error('Failed to save the event:', errorData);
        setError('Failed to save the event. Please try again.');
            }
            
        } catch (error) {
            console.error('Error saving the event:', error);
            setError('Error saving the event. Please try again.');
        }

    };

    // we code this to
    // to upload image to add new's image
    const handleImageUpload =(e) =>{
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onloadend =() =>{
            setImage(reader.result);
        };
        reader.readAsDataURL(file);

    };
  return (
          
    // need TO-Do :
    // add a input for title
    // add a input for conten
    // adda input to upload images

    // use handle submit to submit rgis 


    // use useffect to fetch the backend once 

    <div>
      <AdminNavbar />
      <div className="px-4 md:px-6 lg:px-72 pt-20 relative">
        {/* Toggle Switch */}
        <div className="absolute top-0 right-0 mt-5 mr-5">
          <label className="flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="sr-only"
              checked={isFormVisible}
              onChange={() => setIsFormVisible(!isFormVisible)}
            />
            <div className="relative">
              <div className="block bg-gray-600 w-14 h-8 rounded-full"></div>
              <div
                className={`absolute left-1 top-1 w-6 h-6 rounded-full transition-transform transform ${
                  isFormVisible ? 'translate-x-full bg-red-500' : 'bg-green-500'
                }`}
              >
                {isFormVisible ? (
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                ) : (
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 4v16m8-8H4"
                    ></path>
                  </svg>
                )}
              </div>
            </div>
          </label>
        </div>

        <h1 className="text-2xl md:text-4xl font-semibold text-center pb-10 text-blue-800">
          {isFormVisible ? 'Delete news' : 'Add New news'}
        </h1>

        <div className="bg-white rounded-3xl shadow-2xl shadow-slate-500">
          {isFormVisible ? (
            <DeleteNews />
          ) : (
            <form onSubmit={handleSubmit} className="p-6 space-y-6">
              {/* news Title */}
              <div>
                <label htmlFor="title" className="block text-gray-700 font-semibold mb-2">
                  news Title
                </label>
                <input
                  type="text"
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value.slice(0, maxTitleLength))}
                  maxLength={maxTitleLength}
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                  placeholder="Enter news title"
                  required
                />
                <p className="text-gray-500 text-sm mt-2">{title.length}/{maxTitleLength} characters</p>
              </div>

              

              {/* news Description */}
              <div>
                <label htmlFor="description" className="block text-gray-700 font-semibold mb-2">
                  news Description
                </label>
                <textarea
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value.slice(0, maxDescriptionLength))}
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                  placeholder="Enter news description"
                  rows="4"
                />
                <p className="text-gray-500 text-sm mt-2">{description.length}/{maxDescriptionLength} characters</p>
              </div>


              {/* Image Upload */}
              <div>
                <label htmlFor="image" className="block text-gray-700 font-semibold mb-2">
                  news Image
                </label>
                <input
                  type="file"
                  id="image"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                />
                {image && <img src={image} alt="Uploaded" className="mt-4 max-h-48 object-contain" />}
              </div>

              {/* Submit Button */}
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="bg-blue-800 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out"
                >
                  Submit
                </button>
              </div>
            </form>
          )}

          {error && <p className="text-red-600 text-sm mt-2">{error}</p>}
          {success && <p className="text-green-600 text-sm mt-2">{success}</p>}
        </div>
      </div>
    </div>
  )
}

export default AddNews
