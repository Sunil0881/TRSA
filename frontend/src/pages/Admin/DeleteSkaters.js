import React, { useState, useEffect } from "react";
import {
  FaSearch,
  FaVenusMars,
  FaCalendar,
  FaSkating,
  FaBuilding,
  FaPhone,
  FaEnvelope,
  FaIdCard,
  FaFileAlt,
  FaTrash,
} from "react-icons/fa";
import AdminNavbar from "../../components/AdminNavbar"; // Assuming you have an AdminNavbar component

const BACKEND_URL = "https://trsabackend.vercel.app"; // Replace with your actual backend URL

const DeleteSkaters = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [skaters, setSkaters] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredSkaters, setFilteredSkaters] = useState([]);

  // Fetch skaters from the backend
  useEffect(() => {
    const fetchSkaters = async () => {
      try {
        const response = await fetch(`${BACKEND_URL}/api/skaterprofiles`);
        const data = await response.json();
        if (data.profiles) {
          const skatersWithAge = data.profiles.map((skater) => ({
            ...skater,
            age: calculateAge(skater.dob),
            ageCategory: getAgeCategory(calculateAge(skater.dob)),
          }));
          setSkaters(skatersWithAge);
          setFilteredSkaters(skatersWithAge);
        }
      } catch (error) {
        console.error("Error fetching skaters:", error);
        setError("Failed to fetch skater profiles");
      }
    };

    fetchSkaters();
  }, []);

  // Filter skaters based on search term
  useEffect(() => {
    const results = skaters.filter((skater) =>
      Object.keys(skater).some((key) =>
        [
          "name",
          "gender",
          "eventCategory",
          "representativeClub",
          "ageCategory",
        ].includes(key)
          ? skater[key]
              .toString()
              .toLowerCase()
              .includes(searchTerm.toLowerCase())
          : false
      )
    );
    setFilteredSkaters(results);
  }, [searchTerm, skaters]);

  // Calculate age from date of birth
  const calculateAge = (dob) => {
    const birthDate = new Date(dob);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < birthDate.getDate())
    ) {
      age--;
    }
    return age;
  };

  // Get age category based on age
  const getAgeCategory = (age) => {
    if (age >= 5 && age < 7) return "Cadet (5-7)";
    if (age >= 7 && age < 9) return "Cadet (7-9)";
    if (age >= 9 && age < 11) return "Cadet (9-11)";
    if (age >= 11 && age < 14) return "Sub Junior";
    if (age >= 14 && age < 17) return "Junior";
    if (age >= 17) return "Senior";
    return "Not Categorized";
  };

  // Handle file view
  const handleViewFile = (fileData) => {
    if (fileData) {
      const decodedData = atob(fileData.split(",")[1]);
      const byteNumbers = new Array(decodedData.length);
      for (let i = 0; i < decodedData.length; i++) {
        byteNumbers[i] = decodedData.charCodeAt(i);
      }
      const byteArray = new Uint8Array(byteNumbers);
      const blob = new Blob([byteArray], { type: "image/jpeg" });
      const imageUrl = URL.createObjectURL(blob);
      window.open(imageUrl, "_blank");
    } else {
      console.error("File data is undefined");
    }
  };

  // Handle skater deletion
  const handleDeleteSkater = async (id) => {
    try {
      const response = await fetch(`${BACKEND_URL}/api/skaterprofiles/${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        setSkaters(skaters.filter((skater) => skater._id !== id));
        setFilteredSkaters(
          filteredSkaters.filter((skater) => skater._id !== id)
        );
        setSuccess("Skater profile deleted successfully");
        setError("");
      } else {
        setError("Failed to delete skater profile");
        setSuccess("");
      }
    } catch (error) {
      console.error("Error deleting skater profile:", error);
      setError("Error deleting skater profile");
      setSuccess("");
    }
  };

  return (
    <div>
      <AdminNavbar />
      <div className="relative px-4 pt-20 md:px-6 lg:px-8">
        <h1 className="pb-10 text-2xl font-semibold text-center text-blue-800 md:text-4xl">
          Delete Skaters
        </h1>

        <div className="bg-white shadow-2xl rounded-3xl shadow-slate-500">
          <div className="container px-4 py-8 mx-auto">
            <h1 className="mb-8 text-3xl font-bold text-center text-gray-800">
              All {skaters.length} Rider Profiles from Thiruvallur
            </h1>
            <div className="max-w-md mx-auto mb-8">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search Profiles"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full py-3 pl-12 pr-4 text-gray-800 bg-white border rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <FaSearch className="absolute text-xl text-gray-400 transform -translate-y-1/2 top-1/2 left-4" />
              </div>
            </div>

            {/* Desktop view: Table */}
            <div className="hidden overflow-x-auto md:block">
              <table className="w-full overflow-hidden bg-white rounded-lg shadow-lg">
                <thead className="bg-gray-200">
                  <tr>
                    <th className="px-6 py-3 font-semibold text-left text-gray-600 uppercase">
                      S.no
                    </th>
                    <th className="px-6 py-3 font-semibold text-left text-gray-600 uppercase">
                      Profile
                    </th>
                    <th className="px-6 py-3 font-semibold text-left text-gray-600 uppercase">
                      Name
                    </th>
                    <th className="px-6 py-3 font-semibold text-left text-gray-600 uppercase">
                      Gender
                    </th>
                    <th className="px-6 py-3 font-semibold text-left text-gray-600 uppercase">
                      Age
                    </th>
                    <th className="px-6 py-3 font-semibold text-left text-gray-600 uppercase">
                      Age Category
                    </th>
                    <th className="px-6 py-3 font-semibold text-left text-gray-600 uppercase">
                      Event Category
                    </th>
                    <th className="px-6 py-3 font-semibold text-left text-gray-600 uppercase">
                      Representative Club
                    </th>
                    <th className="px-6 py-3 font-semibold text-left text-gray-600 uppercase">
                      Phone
                    </th>
                    <th className="px-6 py-3 font-semibold text-left text-gray-600 uppercase">
                      Email
                    </th>
                    <th className="px-6 py-3 font-semibold text-left text-gray-600 uppercase">
                      Aadhar No
                    </th>
                    <th className="px-6 py-3 font-semibold text-left text-gray-600 uppercase">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {filteredSkaters.map((skater, index) => (
                    <tr
                      key={skater._id}
                      className="transition duration-150 border-b border-gray-200 hover:bg-gray-100"
                    >
                      <td className="px-6 py-4 text-gray-800">{index + 1}</td>
                      <td className="px-6 py-4">
                        <img
                          src={skater.skaterPhoto}
                          alt={skater.name}
                          className="object-cover w-12 h-12 rounded-full"
                        />
                      </td>
                      <td className="px-6 py-4 font-medium text-gray-800">
                        {skater.name}
                      </td>
                      <td className="px-6 py-4 text-gray-600">
                        <div className="flex items-center">
                          <FaVenusMars className="mr-2 text-blue-500" />
                          <span>{skater.gender}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-gray-600">{skater.age}</td>
                      <td className="px-6 py-4 text-gray-600">
                        {skater.ageCategory}
                      </td>
                      <td className="px-6 py-4 text-gray-600">
                        <div className="flex items-center">
                          <FaSkating className="mr-2 text-green-500" />
                          <span>{skater.eventCategory}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-gray-600">
                        <div className="flex items-center">
                          <FaBuilding className="mr-2 text-purple-500" />
                          <span>{skater.representativeClub}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-gray-600">
                        {skater.phoneNo}
                      </td>
                      <td className="px-6 py-4 text-gray-600">
                        {skater.email}
                      </td>
                      <td className="px-6 py-4 text-gray-600">
                        {skater.aadharNo}
                      </td>
                      <td className="px-6 py-4">
                        <button
                          onClick={() => handleDeleteSkater(skater._id)}
                          className="flex items-center px-4 py-2 font-bold text-white bg-red-500 rounded hover:bg-red-600"
                        >
                          <FaTrash className="mr-2" />
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
          {success && <p className="mt-2 text-sm text-green-600">{success}</p>}
        </div>
      </div>
    </div>
  );
};

export default DeleteSkaters;
