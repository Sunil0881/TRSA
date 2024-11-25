import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
const News = () => {
  return (
    <div>
        <Navbar/>
        <div>
       
      <div>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>News Section</title>
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
        <main className="container mx-auto px-4 py-8  ">
          <div className="h-screen grid lg:grid-cols-3 gap-8">
            <section className="lg:col-span-2 ">
              <div className="bg-white shadow-lg rounded-md p-4 ">
                <h2 className="text-4xl font-regular text-blue-600 mt-5 mb-10">
                  ROLLER HOCKEY ON A ROLL, CONTESTS ON THE RISE - THE TRIBUNE INDIA
                </h2>
                <img className="w-full h-60 object-cover rounded-md mb-10" src="TRSA-main\frontend\src\assets\news1.png" alt="Main News" />
                <p className="text-gray-700 mb-10">
                  The RSA regularly provides updates to members about what's going on in the association. In addition, we send
                  out weekly newsletters just for members and their staff about new programs being offered, discounts, events,
                  and other information relevant to their businesses. If you aren't receiving our weekly RSA Today newsletters,
                  sign up below. Make sure to scroll down to see our newest members!
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
                        <a href="#" className="text-blue-600 font-semibold hover:text-blue-800">Read More</a>
                        <div className="container mx-auto flex justify-end ">
                          <button className="bg-blue-600 text-white px-4 py-2 rounded-md">View More</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div></section>
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
        </main>
      </div>
    );
  

        </div>
        <Footer/>
      
    </div>
  )
}

export default News

