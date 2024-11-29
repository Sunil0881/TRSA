import React from 'react'
import { useNavigate } from 'react-router-dom';


const NewsCard = ({title,description,image,id}) => {
const navigate = useNavigate();
const descriptionLenght = 120;

   const readMore = () =>{
// we scroll to ensure when navigated bring them up first
     window.scrollTo({top:0,left:0,behavior: "smooth"});
    // we use this hook to navigate to the page when event happened
     navigate(`/news/${id}`);
   }
//  code a fun to make decription good
const truncate = (text, maxLength) => {
  if (!text || typeof text !== 'string') {
    return ''; // Return an empty string if text is undefined or not a string
  }

  if (text.length > maxLength) {
    return text.slice(0, maxLength) + '...';
  }

  return text;
};




  return (


    <div>
    <div>News Section</div>
    <header className="bg-white p-4">
      <div className="flex items-center space-x-4">
        <div className="w-[20em]">
          <img className="w-full h-auto rounded-md" src="TRSA-main\frontend\src\assets\news1.png" alt="News" />
        </div>
        <aside className="w-auto">
          <h1 className="px-40 text-red-500 mt-2 font-bold text-4xl">
            NATIONAL CHAMPIONSHIP VICTORY
          </h1>
        </aside>
      </div>
    </header>
    <div className="container mx-auto px-4 py-8  ">
      <div className="h-screen grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 ">
          <div className="bg-white shadow-lg rounded-md p-4 ">
            <h2 className="text-4xl font-regular text-blue-600 mt-5 mb-10">
              {title}
            </h2>
            <img className="w-full h-60 object-cover rounded-md mb-10" src={image} alt= {title} />
            <p className="text-gray-700 mb-10">
             {/* The RSA regularly provides updates to members about what's going on in the association. In addition, we send
              out weekly newsletters just for members and their staff about new programs being offered, discounts, events,
              and other information relevant to their businesses. If you aren't receiving our weekly RSA Today newsletters,
              sign up below. Make sure to scroll down to see our newest members! */}
            { truncate(description,descriptionLenght) } 
            </p>
            <div className="w-auto mt-8">
              <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="flex">
                  <img src="TRSA-main\frontend\src\assets\news1.png" alt="Roller Skating" className="w-1/3 h-auto object-cover" />
                  <div className="p-4 w-auto">
                    <h2 className="text-lg font-semibold text-gray-800 mb-2">National Roller Skating Championship won-2021</h2>
                    <p className="text-sm text-gray-600 mb-4">
                      Our senior team clinched the first place, showcasing exceptional skill and teamwork.
                    </p>
                    <button
                                onClick={readMore}
                                className="text-blue-600 font-semibold hover:text-blue-800"
                            >
                                Read More
                            </button>
                    
                    <div className="container mx-auto flex justify-end ">
                      <button className="bg-blue-600 text-white px-4 py-2 rounded-md">View More</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div></div>
          <aside className="space-y-4">
              <div className="bg-white shadow-lg rounded-md p-4">
                <img className="w-full h-32 object-cover rounded-md mb-2" src="TRSA-main\frontend\src\assets\news1.png" alt="News 1" />
                <h4 className="text-sm font-medium">National Roller Skating - 2021</h4>
                <p className="text-xs text-green-600">Won First place</p>
              </div>
              <div className="bg-white shadow-lg rounded-md p-4">
                <img className="w-full h-32 object-cover rounded-md mb-2" src="=../assests/news1.png" alt="News 2" />
                <h4 className="text-sm font-medium">National Roller Skating - 2021</h4>
                <p className="text-xs text-green-600">Won First place</p>
              </div>
              <div className="bg-white shadow-lg rounded-md p-4">
                <img className="w-full h-32 object-cover rounded-md mb-2" src="TRSA-main\frontend\src\assets\news1.png" alt="News 3" />
                <h4 className="text-sm font-medium">National Roller Skating - 2021</h4>
                <p className="text-xs text-green-600">Won First place</p>
              </div>
              <div className="bg-white shadow-lg rounded-md p-4">
                <img className="w-full h-32 object-cover rounded-md mb-2" src="TRSA-main\frontend\src\assets\news1.png" alt="News 4" />
                <h4 className="text-sm font-medium">National Roller Skating - 2021</h4>
                <p className="text-xs text-green-600">Won First place</p>
              </div>
            </aside>
          </div>
          </div>
          </div>



 /*   <div>
        <img src={image} alt={title}/>
      <h2>
        {title}
      </h2>
      <p>
        { truncate(description,descriptionLenght)}
      </p>
      <button
      onClick={readMore}
      >
        Read More
      </button>
    </div>
    */
  )
}

export default NewsCard
