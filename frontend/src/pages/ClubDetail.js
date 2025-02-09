import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import tdrsalogo from "../assets/TDRSALOGO.jpg";
import { BACKEND_URL } from "../../src/constants";
import dummyprofile  from "../assets/dummyprofile.jpg";



const ClubDetails = () => {
  const { id } = useParams();
  const [club, setClub] = useState(null);

  useEffect(() => {
    const fetchClubDetails = async () => {
      try {
        const response = await fetch(
          `${BACKEND_URL}/api/associative-club/${id}`
        );
        const data = await response.json();
        setClub(data);
      } catch (error) {
        console.error("Error fetching club details:", error);
      }
    };
    fetchClubDetails();
  }, [id]);

  if (!club) {
    return <p>Loading club details...</p>;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="p-8 max-w-4xl mx-auto text-center font-sans">
        <div className="flex justify-center">
          <img
            src={tdrsalogo}
            alt={`${club.stateName || "Club"} logo`}
            className="w-36 h-36 rounded-full object-cover mb-4"
          />
        </div>
        <h1 className="text-blue-800 text-3xl font-semibold mb-4 uppercase">
          {club.clubName || "Unnamed Club"}
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          {club.district || "Location not available"}
        </p>

        <h2 className="text-blue-800 text-2xl font-medium border-b-2 border-gray-200 pb-2 mb-8">
          Members
        </h2>

        <div className="flex flex-wrap justify-center gap-6">
          {club.members.map((member, index) => (
            <div
              key={index}
              className="w-60 text-center p-4 bg-white rounded-lg shadow-lg"
            >
              <div className="flex justify-center">
                <img
                  src={member.profileImage || dummyprofile}
                  alt={`${member.memberName || "Member"}'s profile`}
                  className="w-24 h-24 rounded-full object-cover shadow-md mb-3"
                />
              </div>
              <h3 className="text-gray-800 text-lg font-medium mb-2">
                {member.memberName || "Unknown Member"}
              </h3>
              <p>{member.mobileNumber || "No contact available"}</p>
              <p className="text-gray-600 text-base">
                {member.role || "No role assigned"}
              </p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ClubDetails;
