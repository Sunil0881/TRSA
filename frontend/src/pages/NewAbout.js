
import {React ,useEffect , useState} from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import tdrsalogo from "../assets/tdrsa_logo2.png";
import vision from "../assets/vision.png";
import axios from 'axios';

const NewAbout = () => {
  const [news, setNews] = useState({ title: "", description: "" });
  useEffect(() => {
    axios
      .get("https://trsabackend.vercel.app/api/news")
      .then((response) => {
        const latestNews = response.data.news;
        setNews({
          title: latestNews?.title || "No Breaking News",
          description: latestNews?.description || "",
        });
      })
      .catch((error) => {
        console.error("Error fetching news:", error);
        setNews({ title: "No Breaking News", description: "" });
      });
  }, []);
  return (
    <div>
      <div>
        <Navbar />
        <div className="breaking-news">
  <marquee>
    <strong>{news.title}</strong>: {news.description}
  </marquee>
</div>
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

export default NewAbout