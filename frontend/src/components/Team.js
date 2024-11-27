import React from "react";
import TeamCard from "./TeamCard";
import Navbar from "./Navbar";
import Kumaran from "../assets/Kumaran_sir.jpg";
import Chairman from "../assets/TRSA_Chairman.jpg";
import Deepan from "../assets/Deepan.jpg";
import manikandan from "../assets/manikandan.jpg";
import rajakumar from "../assets/rajakumar.jpg";
import karunathi from "../assets/karunathi.jpg";
import kuttyraj from "../assets/kuttyraj.jpg";
import kingsley from "../assets/kingsley.jpg";
import elango from "../assets/elango.jpg";
import chandrasekar from "../assets/chandrasekar.jpg";
import ramathan from "../assets/ramathan.jpg";
import jaganathan from "../assets/jaganathan.jpg";
import rajasekar from "../assets/rajasekar.jpg";
import soundar from "../assets/soundar.jpg";
import anbu from "../assets/anbu.jpg";
import Footer from "./Footer";

const Team = () => {
  const teamMembers = [
    {
      image: ramathan,
      name: "Mr. Ramanathan D",
      designation: "Chairman",
      socialLinks: {
        call: "9840772864",
        email: "dramanathan21@gmail.com",
      },
    },
    {
      image: elango,
      name: "Mr. Elango AL",
      designation: "President",
      socialLinks: {
        call: "9042549424",
        email: "elango@successsteelstructures.in",
      },
    },
    {
      image: jaganathan,
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
      image: soundar,
      name: "Mr. Soundarrajan D",
      designation: "Joint Secretary",
      socialLinks: {
        call: "9884400302",
        email: "soundar_3000@yahoo.co.in",
      },
    },
    {
      image: anbu,
      name: "Mr. Anbu K",
      designation: "Joint Secretary",
      socialLinks: {
        call: "9677151697",
        email: "kanbuaswin@gmail.com",
      },
    },
    {
      image: chandrasekar,
      name: "Mr. Chandrasekar A R",
      designation: "Treasurer",
      socialLinks: {
        call: "9444171403",
        email: "arcchandru@yahoo.co.in",
      },
    },
    {
      image: rajakumar,
      name: "Mr. RajKumar",
      designation: "Executive Member",
      socialLinks: {
        call: "8807345048",
       
      },
    },
    {
      image: rajasekar,
      name: "Mr. Rajasekaran",
      designation: "Executive Member",
      socialLinks: {
        call: "8637434843",
        
      },
    },
    {
      image: Deepan,
      name: "Mr. Deepan",
      designation: "Executive Member",
      socialLinks: {
        call: "9629950555",
        email: "deepan.mhul@gmail.com",
      },
    },
    {
      image: manikandan,
      name: "Mr. ManiKandan",
      designation: "Executive Member",
      socialLinks: {
        call: "9941434919",
        
      },
    },
    {
      image: kuttyraj,
      name: "Mr. Kutty Raj",
      designation: "Executive Member",
      socialLinks: {
        call: "8072911810",
        email: "kelinraj2012@gmail.com",
      },
    },
    {
      image: kingsley,
      name: "Mr. Kingsley",
      designation: "Executive Member",
      socialLinks: {
        call: "9080087585",
        email: "kelinraj2012@gmail.com",
      },
    },
    {
      image: karunathi,
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
      <Footer />
    </div>
  );
};

export default Team;
