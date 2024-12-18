import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import StateCard from '../components/StateCard';
import tdrsalogo from "../assets/TDRSALOGO.jpg";

const Club = () => {
  const stateCardData = [
    {
      // logo: 'https://indiaskate.com/wp-content/uploads/2022/01/andaman-logo.jpeg', // Replace with your logo URL
      logo: tdrsalogo,
      stateName: 'Rockers Speed Skating Academy',
      // clubName: 'ANDHAMAN AND NICOBAR ROLLER SKATING ASSOCIATION'
    },
    {
      // logo: 'https://indiaskate.com/wp-content/uploads/2020/03/ap.jpg', // Replace with your logo URL
      logo: tdrsalogo,
      stateName: 'Sathya Speed Skating Academy',
      // clubName: 'ANDHRA PRADESH ROLLER SKATING ASSOCIATION'
    },
    {
      // logo: 'https://indiaskate.com/wp-content/uploads/2024/02/arunachal-logo.jpg', // Replace with your logo URL
      logo: tdrsalogo,
      stateName: 'SS Academy',
      // clubName: 'ARUNACHAL PRADESH SKATING ASSOCIATION'
    },
    {
      // logo: 'https://indiaskate.com/wp-content/uploads/2021/11/stickey.png', // Replace with your logo URL
      logo: tdrsalogo,
      stateName: 'U Can Do Skating Academy',
      // clubName: 'INDIA SKATE – GUJARAT*'
    },
    {
      // logo: 'https://indiaskate.com/wp-content/uploads/2021/11/stickey.png', // Replace with your logo URL
      logo: tdrsalogo,
      stateName: 'SNJ Skating Academy',
      // clubName: 'INDIA SKATE – ASSAM'
    },
    {
      // logo: 'https://indiaskate.com/wp-content/uploads/2021/11/stickey.png', // Replace with your logo URL
      logo: tdrsalogo,
      stateName: 'Thaisha Roller Skating Academy',
      // clubName: 'INDIA SKATE – BIHAR'
    },
    {
      // logo: 'https://indiaskate.com/wp-content/uploads/2020/03/chandigarh.jpg', // Replace with your logo URL
      logo: tdrsalogo,
      stateName: 'Parthi Skating Academy',
      // clubName: 'CHANDIGARH ROLLER SKATING ASSOCIATION'
    },
    {
      // logo: 'https://indiaskate.com/wp-content/uploads/2020/03/chattisgarh.jpg', // Replace with your logo URL
      logo: tdrsalogo,
      stateName: 'Spunk',
      // clubName: 'CHATTISGARH ROLLER SKATING ASSOCIATION'
    },
    {
      // logo: 'https://indiaskate.com/wp-content/uploads/2020/03/delhi.jpg', // Replace with your logo URL
      logo: tdrsalogo,
      stateName: 'Anna Nagar Roller Skating Academy',
      // clubName: 'DELHI SKATING ASSOCIATION'
    },
    {
      // logo: 'https://indiaskate.com/wp-content/uploads/2020/03/goa.jpg', // Replace with your logo URL
      logo: tdrsalogo,
      stateName: 'Champions Roller Skating Academy',
      // clubName: 'SKATING ASSOCIATION OF GOA'
    },
    {
      // logo: 'https://indiaskate.com/wp-content/uploads/2020/03/haryana.jpg', // Replace with your logo URL
      logo: tdrsalogo,
      stateName: 'New India Club',
      // clubName: 'HARYANA ROLLER SKATING ASSOCIATION'
    },
    {
      // logo: 'https://indiaskate.com/wp-content/uploads/2022/01/HIMACHAL-LOGO.jpeg', // Replace with your logo URL
      logo: tdrsalogo,
      stateName: 'Dolphin Speed Skating Academy ( DSSA )',
      // clubName: 'HIMACHAL SKATING ASSOCIATION'
    },
    {
      // logo: 'https://indiaskate.com/wp-content/uploads/2020/03/jammu-kashmir.jpg', // Replace with your logo URL
      logo: tdrsalogo,
      stateName: 'Success Sports Academy',
      // clubName: 'JAMMU & KASHMIR ROLLER SKATING ASSOCIATION'
    },
    {
      // logo: 'https://indiaskate.com/wp-content/uploads/2020/03/jammu-kashmir.jpg', // Replace with your logo URL
      logo: tdrsalogo,
      stateName: 'ELUMALAI SPEED SKATING ACADEMY (ESSA)',
      // clubName: 'JAMMU & KASHMIR ROLLER SKATING ASSOCIATION'
    },
    // {
    //   logo: 'https://indiaskate.com/wp-content/uploads/2022/01/JHARKAND-LOGO.jpeg', // Replace with your logo URL
    //   stateName: 'Jharkhand',
    //   // clubName: 'ROLLER SKATING ASSOCIATION OF JHARKHAND'
    // },
    // {
    //   logo: 'https://indiaskate.com/wp-content/uploads/2020/03/karnataka.jpg', // Replace with your logo URL
    //   stateName: 'Karnataka',
    //   // clubName: 'KARNATAKA ROLLER SKATING ASSOCIATION'
    // },
    // {
    //   logo: 'https://indiaskate.com/wp-content/uploads/2020/03/kerala.jpg', // Replace with your logo URL
    //   stateName: 'Kerala',
    //   // clubName: 'KERALA ROLLER SKATING ASSOCIATION'
    // },
    // {
    //   logo: 'https://indiaskate.com/wp-content/uploads/2024/02/ladakh-logo-1.jpg', // Replace with your logo URL
    //   stateName: 'Ladakh',
    //   // clubName: 'LADAKH ROLLER SKATING ASSOCIATION'
    // },
    // {
    //   logo: 'https://indiaskate.com/wp-content/uploads/2020/03/madhyapradesh.jpg', // Replace with your logo URL
    //   stateName: 'Madhya Pradesh',
    //   // clubName: 'ROLLER SKATE DEVELOPMENT ASSOCIATION MADHYA PRADESH'
    // },
    // {
    //   logo: 'https://indiaskate.com/wp-content/uploads/2020/03/maharashtra.jpg', // Replace with your logo URL
    //   stateName: 'Maharashtra',
    //   // clubName: 'SKATING ASSOCIATION OF MAHARASHTRA'
    // },
    // {
    //   logo: 'https://indiaskate.com/wp-content/uploads/2022/01/MANIPUR-LOGO.jpeg', // Replace with your logo URL
    //   stateName: 'Manipur',
    //   // clubName: 'MANIPUR EXTREME SPORTS AND SKATE ASSOCIATION'
    // },
    // {
    //   logo: 'https://indiaskate.com/wp-content/uploads/2020/03/pondy.jpg', // Replace with your logo URL
    //   stateName: 'Pondicherry',
    //   // clubName: 'PONDICHERRY ROLLER SKATING ASSOCIATION'
    // },
    // {
    //   logo: 'https://indiaskate.com/wp-content/uploads/2022/01/ODISHA-LOGO.jpeg', // Replace with your logo URL
    //   stateName: 'Odisha',
    //   // clubName: 'Skating Association of Odisha'
    // },
    // {
    //   logo: 'https://indiaskate.com/wp-content/uploads/2020/03/punjab.jpg', // Replace with your logo URL
    //   stateName: 'Punjab',
    //   // clubName: 'PUNJAB ROLLER SKATING ASSOCIATION'
    // },
    // {
    //   logo: 'https://indiaskate.com/wp-content/uploads/2022/01/RAJASTHAN-LOGO.jpeg', // Replace with your logo URL
    //   stateName: 'Rajasthan',
    //   // clubName: 'RAJASTHAN SKATE ASSOCIATION'
    // },
    // {
    //   logo: 'https://indiaskate.com/wp-content/uploads/2024/02/sikkim-1.jpg', // Replace with your logo URL
    //   stateName: 'Sikkim',
    //   // clubName: 'ALL SIKKIM SKATEBOARDING ASSOCIATION'
    // },
    // {
    //   logo: 'https://indiaskate.com/wp-content/uploads/2021/11/logo-rect.png', // Replace with your logo URL
    //   stateName: 'Telegana',
    //   // clubName: 'TELANGANA ROLLER SKATING ASSOCIATION*'
    // },
    // {
    //   logo: 'https://indiaskate.com/wp-content/uploads/2020/03/tamilnadu.jpg', // Replace with your logo URL
    //   stateName: 'Tamil Nadu',
    //   // clubName: 'TAMIL NADU ROLLER SKATING ASSOCIATION'
    // },
    // {
    //   logo: 'https://indiaskate.com/wp-content/uploads/2020/03/uttar-pradesh.jpg', // Replace with your logo URL
    //   stateName: 'Uttar Pradesh',
    //   // clubName: 'UTTAR PRADESH ROLLER SPORTS SANGH'
    // },
    // {
    //   logo: 'https://indiaskate.com/wp-content/uploads/2022/01/UK-LOGO.jpeg', // Replace with your logo URL
    //   stateName: 'Uttarkhand',
    //   // clubName: 'SKATES ASSOCIATION UTTARAKHAND'
    // },
    // {
    //   logo: 'https://indiaskate.com/wp-content/uploads/2018/11/FAV.png', // Replace with your logo URL
    //   stateName: 'West Bengal',
    //   // clubName: 'RSFI – WEST BENGAL*'
    // },

  ];

  return (
    <div>
      <Navbar />
      <div className="p-8">
        <h1 className="text-2xl font-bold mb-6">Club Information</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6  ">
          {stateCardData.map((card, index) => (
            <StateCard
              key={index}
              logo={card.logo}
              stateName={card.stateName}
              // clubName={card.clubName}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Club;
