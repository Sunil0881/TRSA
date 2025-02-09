import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import tdrsalogo from "../assets/TDRSALOGO.jpg";
import { BACKEND_URL } from "../../src/constants";

const Club = () => {
  const [clubs, setClubs] = useState([]);

  useEffect(() => {
    const fetchClubs = async () => {
      try {
        const response = await fetch(`${BACKEND_URL}/api/associative-club`);
        const data = await response.json();
        setClubs(data);
      } catch (error) {
        console.error("Error fetching clubs:", error);
      }
    };
    fetchClubs();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="p-8">
        <h1 className="mb-6 text-2xl font-bold">Club Information</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {clubs.map((club) => (
            <Link
              key={club._id}
              to={`/club/${club._id}`}
              className="bg-white p-4 border rounded-lg shadow hover:shadow-lg transition-transform transform hover:scale-105"
            >
              <div className="flex items-center">
                <img
                  src={tdrsalogo}
                  alt="Club Logo"
                  className="w-12 h-12 object-cover rounded-md mr-4"
                />
                <h2 className="text-lg font-semibold">
                  {club.clubName || "Unnamed Club"}
                </h2>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Club;
