import React from "react";
import TeamCard from "./TeamCard";
import Navbar from "./Navbar";
import Kumaran from "../assets/Kumaran_sir.jpg";
import Chairman from "../assets/TRSA_Chairman.jpg";

const Team = () => {
  const teamMembers = [
    {
      image: Chairman,
      name: "Mr. Ramanathan D",
      designation: "Chairman",
      socialLinks: {
        call: "9840772864",
        email: "dramanathan21@gmail.com",
      },
    },
    {
      image: Kumaran,
      name: "Mr. Elango AL",
      designation: "President",
      socialLinks: {
        call: "9042549424",
        email: "elango@successsteelstructures.in",
      },
    },
    {
      image: Kumaran,
      name: "Mr. Jaganathan P",
      designation: "Vice President",
      socialLinks: {
        call: "9381039509",
        email: "pon.chemical@gmail.com",
      },
    },
    {
      image: Kumaran,
      name: "Mr. Rajesh K",
      designation: "Vice President",
      socialLinks: {
        call: "9444489677",
       
      },
    },
    {
      image: Kumaran,
      name: "Mr. Kumaran M",
      designation: "Secretary",
      socialLinks: {
        call: "9444246644",
        email: "kumaran.ma@gmail.com",
      },
    },
    {
      image: Kumaran,
      name: "Mr. Soundarrajan D",
      designation: "Joint Secretary",
      socialLinks: {
        call: "9884400302",
        email: "soundar_3000@yahoo.co.in",
      },
    },
    {
      image: Kumaran,
      name: "Mr. Anbu K",
      designation: "Joint Secretary",
      socialLinks: {
        call: "9677151697",
        email: "kanbuaswin@gmail.com",
      },
    },
    {
      image: Kumaran,
      name: "Mr. Chandrasekar A R",
      designation: "Treasurer",
      socialLinks: {
        call: "9444171403",
        email: "arcchandru@yahoo.co.in",
      },
    },
    {
      image: Kumaran,
      name: "Mr. RajKumar",
      designation: "Executive Member",
      socialLinks: {
        call: "8807345048",
       
      },
    },
    {
      image: Kumaran,
      name: "Mr. Rajasekaran",
      designation: "Executive Member",
      socialLinks: {
        call: "8637434843",
        
      },
    },
    {
      image: Kumaran,
      name: "Mr. Deepan",
      designation: "Executive Member",
      socialLinks: {
        call: "9629950555",
        email: "deepan.mhul@gmail.com",
      },
    },
    {
      image: Kumaran,
      name: "Mr. ManiKandan",
      designation: "Executive Member",
      socialLinks: {
        call: "9941434919",
        
      },
    },
    {
      image: Kumaran,
      name: "Mr. Kutty Raj",
      designation: "Executive Member",
      socialLinks: {
        call: "8072911810",
        email: "kelinraj2012@gmail.com",
      },
    },
    {
      image: Kumaran,
      name: "Mr. Kingsley",
      designation: "Executive Member",
      socialLinks: {
        call: "9080087585",
        email: "kelinraj2012@gmail.com",
      },
    },
    {
      image: Kumaran,
      name: "Mr. Karunanidhi",
      designation: "Executive Member",
      socialLinks: {
        call: "9962264144",
        
      },
    },
  ];
  

  return (
    <div>
      <Navbar />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
        {teamMembers.map((member, index) => (
          <TeamCard
            key={index}
            image={member.image}
            name={member.name}
            designation={member.designation}
            socialLinks={member.socialLinks}
          />
        ))}
      </div>
    </div>
  );
};

export default Team;
