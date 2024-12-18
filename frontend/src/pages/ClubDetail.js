import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import tdrsalogo from "../assets/TDRSALOGO.jpg";


const clubsData = [
    {
        // logo: 'https://indiaskate.com/wp-content/uploads/2022/01/andaman-logo.jpeg', // Replace with your logo URL
        logo: tdrsalogo,
        stateName: 'Rockers Speed Skating Academy',
        clubName: 'Rockers Speed Skating Academy', 
        location: 'Thiruvallur',
        members: [
          {
            name: 'MR.XXX',
            image: 'https://indiaskate.com/wp-content/uploads/2020/04/team-placeholder-150x150.jpg',
            position: 'President',
          }
        ],
      },
      {
        // logo: 'https://indiaskate.com/wp-content/uploads/2020/03/ap.jpg', // Replace with your logo URL
        logo: tdrsalogo,
        stateName: 'Sathya Speed Skating Academy',
        clubName: 'Sathya Speed Skating Academy', 
        location: 'Thiruvallur',
        members: [
          {
            name: 'MR.XXX',
            image: 'https://indiaskate.com/wp-content/uploads/2020/04/team-placeholder-150x150.jpg',
            position: 'President',
          }
        ],
      },
      {
        // logo: 'https://indiaskate.com/wp-content/uploads/2024/02/arunachal-logo.jpg', // Replace with your logo URL
        logo: tdrsalogo,
        stateName: 'SS Academy',
        clubName: 'SS Academy',
        location: 'Thiruvallur',
        members: [
          {
            name: 'MR.XXX',
            image: 'https://indiaskate.com/wp-content/uploads/2020/04/team-placeholder-150x150.jpg',
            position: 'President',
          }
        ],
      },
      {
        // logo: 'https://indiaskate.com/wp-content/uploads/2021/11/stickey.png', // Replace with your logo URL
        logo: tdrsalogo,
        stateName: 'U Can Do Skating Academy',
        clubName: 'U Can Do Skating Academy',
        location: 'Thiruvallur',
        members: [
          {
            name: 'MR.XXX',
            image: 'https://indiaskate.com/wp-content/uploads/2020/04/team-placeholder-150x150.jpg',
            position: 'President',
          }
        ],
      },
      {
        // logo: 'https://indiaskate.com/wp-content/uploads/2021/11/stickey.png', // Replace with your logo URL
        logo: tdrsalogo,
        stateName: 'SNJ Skating Academy',
        clubName: 'SNJ Skating Academy',
        location: 'Thiruvallur',
        members: [
          {
            name: 'MR.XXX',
            image: 'https://indiaskate.com/wp-content/uploads/2020/04/team-placeholder-150x150.jpg',
            position: 'President',
          }
          
        ],
      },
      {
        // logo: 'https://indiaskate.com/wp-content/uploads/2021/11/stickey.png', // Replace with your logo URL
        logo: tdrsalogo,
        stateName: 'Thaisha Roller Skating Academy',
        clubName: 'Thaisha Roller Skating Academy',
        location: 'Thiruvallur',
        members: [
          {
            name: 'A. T. VEERAKUMAR',
            image: 'https://indiaskate.com/wp-content/uploads/2020/04/team-placeholder-150x150.jpg',
            position: 'Authorised Person',
            phno:"7358626172"
          }
        ],
      },
      {
        // logo: 'https://indiaskate.com/wp-content/uploads/2020/03/chandigarh.jpg', // Replace with your logo URL
        logo: tdrsalogo,
        stateName: 'Parthi Skating Academy',
        clubName: 'Parthi Skating Academy',
        location: 'Thiruvallur',
        members: [
          {
            name: 'MR.XXX',
            image: 'https://indiaskate.com/wp-content/uploads/2020/04/team-placeholder-150x150.jpg',
            position: 'President',
          }
          
        ],
      },
      {
        // logo: 'https://indiaskate.com/wp-content/uploads/2020/03/chattisgarh.jpg', // Replace with your logo URL
        logo: tdrsalogo,
        stateName: 'Spunk',
        clubName: 'Spunk',
        location: 'Thiruvallur',
        members: [
          {
            name: 'MR.XXX',
            image: 'https://indiaskate.com/wp-content/uploads/2020/04/team-placeholder-150x150.jpg',
            position: 'President',
          }
        ],
      },
      {
        // logo: 'https://indiaskate.com/wp-content/uploads/2020/03/delhi.jpg', // Replace with your logo URL
        logo: tdrsalogo,
        stateName: 'Anna Nagar Roller Skating Academy',
        clubName: 'Anna Nagar Roller Skating Academy',
        location: 'Thiruvallur',
        members: [
          {
            name: 'MR.XXX',
            image: 'https://indiaskate.com/wp-content/uploads/2020/04/team-placeholder-150x150.jpg',
            position: 'President',
          }
        ],
      },
      {
        // logo: 'https://indiaskate.com/wp-content/uploads/2020/03/goa.jpg', // Replace with your logo URL
        logo: tdrsalogo,
        stateName: 'Champions Roller Skating Academy',
        clubName: 'Champions Roller Skating Academy',
        location: 'Thiruvallur',
        members: [
          {
            name: 'MR.XXX',
            image: 'https://indiaskate.com/wp-content/uploads/2020/04/team-placeholder-150x150.jpg',
            position: 'President',
          }
        ],
      },
      {
        // logo: 'https://indiaskate.com/wp-content/uploads/2020/03/haryana.jpg', // Replace with your logo URL
        logo: tdrsalogo,
        stateName: 'New India Club',
        clubName: 'New India Club',
        location: 'Thiruvallur',
        members: [
          {
            name: 'MR.XXX',
            image: 'https://indiaskate.com/wp-content/uploads/2020/04/team-placeholder-150x150.jpg',
            position: 'President',
          }
        ],
      },
      {
        // logo: 'https://indiaskate.com/wp-content/uploads/2022/01/HIMACHAL-LOGO.jpeg', // Replace with your logo URL
        logo: tdrsalogo,
        stateName: 'ELUMALAI SPEED SKATING ACADEMY (ESSA)',
        clubName: 'ELUMALAI SPEED SKATING ACADEMY (ESSA)',
        location: 'Thiruvallur',
        members: [
          {
            name: 'P. ELUMALAI',
            image: 'https://indiaskate.com/wp-content/uploads/2020/04/team-placeholder-150x150.jpg',
            position: 'Authorised Person',
            phno:"9445341204"
          }
        ],
      },
      {
        // logo: 'https://indiaskate.com/wp-content/uploads/2020/03/jammu-kashmir.jpg', // Replace with your logo URL
        logo: tdrsalogo,
        stateName: 'Success Sports Academy',
        clubName: 'Success Sports Academy',
        location: 'Thiruvallur',
        members: [
          {
            name: 'MR.XXX',
            image: 'https://indiaskate.com/wp-content/uploads/2020/04/team-placeholder-150x150.jpg',
            position: 'President',
          }
        ],
      },
      {
        // logo: 'https://indiaskate.com/wp-content/uploads/2022/01/andaman-logo.jpeg', // Replace with your logo URL
        logo: tdrsalogo,
        stateName: 'Dolphin Speed Skating Academy ( DSSA )',
        clubName: 'Dolphin Speed Skating Academy ( DSSA )', 
        location: 'Thiruvallur',
        members: [
          {
            name: 'M.MANOJKUMAR',
            image: 'https://indiaskate.com/wp-content/uploads/2020/04/team-placeholder-150x150.jpg',
            position: 'Authorised Person',
            phno:"8754575530"
          }
        ],
      }
];

const ClubDetail = () => {
  const { stateName } = useParams();

  // Find the club based on the stateName
  const club = clubsData.find(club => club.stateName.toLowerCase() === stateName.toLowerCase());

  // If no club is found, handle it (optional)
  if (!club) {
    return <div className="max-w-4xl mx-auto p-8">Club details not found.</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100">
    <Navbar />
    <div className="p-8 max-w-4xl mx-auto text-center font-sans">
        <div className='flex justify-center'>
        <img src={club.logo} alt={`${club.stateName} logo`} className="w-36 h-36 rounded-full object-cover mb-4" />
        </div>
        <h1 className="text-blue-800 text-3xl font-semibold mb-4 text-transform: uppercase">{club.clubName}</h1>
        <p className="text-lg text-gray-600 mb-8">{club.location}</p>
        
        <h2 className="text-blue-800 text-2xl font-medium border-b-2 border-gray-200 pb-2 mb-8">Members</h2>
        
        <div className="flex flex-wrap justify-center gap-6">
            {club.members.map((member, index) => (
                <div key={index} className=" w-60 text-center  p-4 bg-white rounded-lg shadow-lg">
                    <div className='flex justify-center'>
                    <img src={member.image} alt={`${member.name}`} className="w-24 h-24  rounded-full object-cover shadow-md mb-3" />
                    </div>
                    <h3 className="text-gray-800 text-lg font-medium mb-2">{member.name}</h3>
                    <p>{member.phno}</p>
                    <p className="text-gray-600 text-base">{member.position}</p>
                   
                </div>
            ))}
        </div>
    </div>
    <Footer />
</div>


  );
};

export default ClubDetail;
