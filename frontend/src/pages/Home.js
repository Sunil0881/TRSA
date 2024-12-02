// import React from 'react'
// import Hero from "../components/Hero"
// import Imgslide from '../components/Imgslide'
// import GridDesign from '../components/GridDesign'
// import LegalHelp from '../components/LegalHelp'
// import Count from '../components/Count'
// import Questions from '../components/Questions'
// import Footer from '../components/Footer'
// import Navbar from '../components/Navbar'

// const Home = () => {
//   return (

//     <div>
//         <Navbar />
//         <Hero />
//         <div className='text-blue-800 pl-5 md:pl-20 text-lg md:text-2xl lg:pl-32 lg:text-4xl  pb-5 md:pb-10 font-semibold '>
//           What We Do ?
//         </div>
//         <Imgslide />

//         <div className='md:flex md:gap-32 lg:gap-96 px-5 md:px-20 lg:px-36 pb-10 md:pb-20'>
//           <div>
//             <h1 className='text-blue-900 text-lg md:text-2xl lg:text-3xl'>Introduction</h1>
//             <h2 className='text-2xl md:text-3xl lg:text-5xl pt-2 md:pt-4'>About Association</h2>
//             <p className='pt-1 md:pt-4 lg:pt-9 md:text-lg lg:text-xl max-w-6xl'>At Thiruvallur District Roller Skating Association, we believe in the power of roller skating to bring people together and keep them active. Our mission is to create a welcoming and vibrant space for skaters of all ages and skill levels.</p>
//           </div>

//           <div>
//             <h1 className='text-blue-900 text-lg md:text-2xl lg:text-3xl pt-6 md:pt-0'>Goal</h1>
//             <h2 className='text-2xl md:text-3xl pt-2 lg:text-5xl md:pt-4'>Achievement</h2>
//             <p className='pt-1 md:pt-4 lg:pt-9 md:text-lg lg:text-xl max-w-3xl'>From basic skills to advanced tricks, our experienced instructors are here to help you glide smoothly on your skates.</p>
//           </div>

//         </div>

//          <div className='hidden md:block'>
//         <GridDesign />
//         </div>

//         <LegalHelp />
//         <Count />
//         <Questions />
//         <Footer />

//     </div>
//   )
// }

// export default Home


import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import tdrsalogo from "../assets/tdrsa_logo2.png";
import vision from "../assets/vision.png";

const Home = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="">
        <div className='lg:flex p-4 lg:p-20'>
        <div className='flex justify-center mt-10 xl:w-[30%] lg:hidden'>
            <img src={tdrsalogo} alt='logo' className='h-auto w-80' />
          </div>
          <div className="p-10 xl:w-[70%]">
            <h1 className="text-2xl md:text-5xl font-bold text-center lg:text-left text-[#2D30A4]">
              Thiruvallur District Roller Skating Association
            </h1>
            <p className="mt-6 text-xl mr-0 lg:mr-40 text-center lg:text-left">
              Thiruvallur District Roller Skating Association (TDRSA) is a
              non-profit organization dedicated to promoting the sport of roller
              skating in Thiruvallur district, Tamil Nadu, India.
            </p>
            <p className="mt-6 text-xl mr-0 lg:mr-40 text-center lg:text-left">
              Established in 2006, our association aims to provide a platform for
              skaters of all ages and skill levels to develop their talents, promote
              physical fitness, and foster a sense of community.
            </p>
          </div>
          <div className='lg:flex justify-center xl:w-[30%] hidden'>
            <img src={tdrsalogo} alt='logo' className='h-auto w-96' />
          </div>
        </div>

        <div className='p-10'>
          <div className="bg-[#2D30A4] mt-10 rounded-lg p-6 lg:flex justify-center items-center gap-10">
            <div className="px-10">
              <img
                src={vision}
                alt="Skating Image"
                className="rounded-lg"
              />
            </div>
            <div className="flex-1 text-white px-6">
              <h2 className="text-3xl font-semibold mt-2 md:mt-4 lg:mt-0">Vision</h2>
              <p className="mt-4 text-xl">
                Our vision is to make Thiruvallur district a hub for roller skating
                excellence, where skaters can thrive, grow, and reach their full
                potential. We strive to create a supportive environment that
                encourages participation, innovation, and fun.
              </p>
            </div>

          </div>
        </div>

        <div className="mt-10">
          <h2 className="text-4xl font-semibold text-[#2D30A4] text-center">
            Our mission is to:
          </h2>
          <ul className="mt-6 space-y-4 mx-10 md:mx-20 lg:mx-40">
            {[
              "Develop and promote roller skating in Thiruvallur district",
              "Conduct regular training sessions, workshops, and competitions",
              "Identify and nurture talented skaters",
              "Foster a sense of camaraderie and sportsmanship among members",
              "Collaborate with national and international roller skating organizations to promote the sport",
            ].map((mission, index) => (
              <li
                key={index}
                className="bg-[#2D30A4] text-white p-4 rounded-lg flex items-center gap-3"
              >
                <span className="text-white text-lg font-bold">✔</span>
                <p>{mission}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="my-10">
          <h2 className="text-3xl h-12 pt-1 font-semibold text-white bg-[#2D30A4] text-center">
            Objectives
          </h2>
          <ul className="mt-6 space-y-4 mx-10 md:mx-20 lg:mx-40">
            {[
              "To promote roller skating as a recreational and competitive sport",
              "To provide opportunities for skaters to participate in state, national, and international events",
              "To develop infrastructure and resources for roller skating in Thiruvallur district",
              "To build partnerships with schools, colleges, and local communities to promote the sport",
            ].map((objective, index) => (
              <li
                key={index}
                className="p-4 flex items-center gap-3 border-b-2 border-b-[#2D30A4] hover:bg-[#2D30A4] group"
              >
                <span className="text-2xl font-bold text-[#2D30A4] group-hover:text-white">
                  ▶
                </span>
                <p className="text-xl text-[#2D30A4] group-hover:text-white">{objective}</p>
              </li>

            ))}
          </ul>
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  )
}

export default Home
