import React, { useState, useEffect } from 'react';
import AdminNavbar from '../../components/AdminNavbar';
import { FaSearch, FaVenusMars, FaSkating, FaBuilding, FaCalendar, FaPhone, FaEnvelope, FaIdCard, FaFileAlt } from 'react-icons/fa';

const AddSkaters = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [skaters, setSkaters] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredSkaters, setFilteredSkaters] = useState([]);

  useEffect(() => {
    const fetchSkaters = async () => {
      try {
        const response = await fetch('https://trsabackend.vercel.app/api/skaterprofiles');
        const data = await response.json();
        console.log("Fetched skater data:", data); // Add this line
        const skatersWithAge = data.map(skater => ({
          ...skater,
          age: calculateAge(skater.dob),
          ageCategory: getAgeCategory(calculateAge(skater.dob))
        }));
        setSkaters(skatersWithAge);
        setFilteredSkaters(skatersWithAge);
      } catch (error) {
        console.error('Error fetching skaters:', error);
      }
    };

    fetchSkaters();
  }, []);

  useEffect(() => {
    const results = skaters.filter((skater) =>
      Object.keys(skater).some((key) =>
        ['name', 'gender', 'eventCategory', 'representativeClub', 'ageCategory'].includes(key)
          ? skater[key].toString().toLowerCase().includes(searchTerm.toLowerCase())
          : false
      )
    );
    setFilteredSkaters(results);
  }, [searchTerm, skaters]);

  const calculateAge = (dob) => {
    const birthDate = new Date(dob);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  const getAgeCategory = (age) => {
    if (age >= 5 && age < 7) return 'Cadet (5-7)';
    if (age >= 7 && age < 9) return 'Cadet (7-9)';
    if (age >= 9 && age < 11) return 'Cadet (9-11)';
    if (age >= 11 && age < 14) return 'Sub Junior';
    if (age >= 14 && age < 17) return 'Junior';
    if (age >= 17) return 'Senior';
    return 'Not Categorized';
  };

  const handleViewFile = (fileData) => {
    if (fileData) {
      const decodedData = atob(fileData.split(',')[1]);
      const byteNumbers = new Array(decodedData.length);
      for (let i = 0; i < decodedData.length; i++) {
        byteNumbers[i] = decodedData.charCodeAt(i);
      }
      const byteArray = new Uint8Array(byteNumbers);
      const blob = new Blob([byteArray], { type: 'image/jpeg' });
      const imageUrl = URL.createObjectURL(blob);
      window.open(imageUrl, '_blank');
    } else {
      console.error("File data is undefined");
      // You can add a user-friendly error message here, e.g., using a toast notification
    }
  };
  return (
    <div>
      <AdminNavbar />
      <div className="px-4 md:px-6 lg:px-8 pt-20 relative">
        {/* Toggle Switch */}
        <div className="absolute top-0 right-0 mt-5 mr-5">
          <label className="flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="sr-only"
              checked={isFormVisible}
              onChange={() => setIsFormVisible(!isFormVisible)}
            />
            <div className="relative">
              <div className="block bg-gray-600 w-14 h-8 rounded-full"></div>
              <div
                className={`absolute left-1 top-1 w-6 h-6 rounded-full transition-transform transform ${
                  isFormVisible ? 'translate-x-full bg-red-500' : 'bg-green-500'
                }`}
              >
                {isFormVisible ? (
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                ) : (
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 4v16m8-8H4"
                    ></path>
                  </svg>
                )}
              </div>
            </div>
          </label>
        </div>

        <h1 className="text-2xl md:text-4xl font-semibold text-center pb-10 text-blue-800">
          {isFormVisible ? 'Delete Skater' : 'Add New Skater'}
        </h1>

        <div className="bg-white rounded-3xl shadow-2xl shadow-slate-500">
          {isFormVisible ? (
            <div className="p-6">
              <h2 className="text-center text-lg font-semibold">
                Delete Skater functionality coming soon...
              </h2>
            </div>
          ) : (
            <div className="container mx-auto px-4 py-8">
              <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
                All {skaters.length} Rider Profiles from Thiruvallur
              </h1>
              <div className="max-w-md mx-auto mb-8">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search Profiles"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 border rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-gray-800"
                  />
                  <FaSearch className="absolute top-1/2 left-4 transform -translate-y-1/2 text-gray-400 text-xl" />
                </div>
              </div>

              {/* Mobile view: Cards */}
              <div className="md:hidden grid grid-cols-1 gap-6">
                {filteredSkaters.map((skater, index) => (
                  <div key={skater._id} className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="p-4">
                      <div className="flex items-center mb-4">
                        <img
                          src={skater.skaterPhoto}
                          alt={skater.name}
                          className="h-16 w-16 object-cover rounded-full mr-4"
                        />
                        <div>
                          <h2 className="text-xl font-semibold text-gray-800">{skater.name}</h2>
                          <p className="text-sm text-gray-600">#{index + 1}</p>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <div className="flex items-center">
                          <FaVenusMars className="mr-2 text-blue-500" />
                          <span>{skater.gender}</span>
                        </div>
                        <div className="flex items-center">
                          <FaCalendar className="mr-2 text-red-500" />
                          <span>{skater.age} years ({skater.ageCategory})</span>
                        </div>
                        <div className="flex items-center">
                          <FaSkating className="mr-2 text-green-500" />
                          <span>{skater.eventCategory}</span>
                        </div>
                        <div className="flex items-center">
                          <FaBuilding className="mr-2 text-purple-500" />
                          <span>{skater.representativeClub}</span>
                        </div>
                        <div className="flex items-center col-span-2">
                          <FaPhone className="mr-2 text-gray-500" />
                          <span>{skater.phoneNo}</span>
                        </div>
                        <div className="flex items-center col-span-2">
                          <FaEnvelope className="mr-2 text-gray-500" />
                          <span>{skater.email}</span>
                        </div>
                        <div className="flex items-center col-span-2">
                          <FaIdCard className="mr-2 text-gray-500" />
                          <span>{skater.aadharNo}</span>
                        </div>
                        <div className="flex items-center col-span-2 mt-2">
                          <button
                            onClick={() => handleViewFile(skater.fileUrl)}
                            className={`bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded flex items-center ${!skater.fileUrl ? 'opacity-50 cursor-not-allowed' : ''}`}
                            disabled={!skater.fileUrl}
                          >
                            <FaFileAlt className="mr-2" />
                            {skater.fileUrl ? 'View File' : 'No File'}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Desktop view: Table */}
              <div className="hidden md:block overflow-x-auto">
                <table className="w-full bg-white shadow-lg rounded-lg overflow-hidden">
                  <thead className="bg-gray-200">
                    <tr>
                      <th className="py-3 px-6 text-left text-gray-600 font-semibold uppercase">S.no</th>
                      <th className="py-3 px-6 text-left text-gray-600 font-semibold uppercase">Profile</th>
                      <th className="py-3 px-6 text-left text-gray-600 font-semibold uppercase">Name</th>
                      <th className="py-3 px-6 text-left text-gray-600 font-semibold uppercase">Gender</th>
                      <th className="py-3 px-6 text-left text-gray-600 font-semibold uppercase">Age</th>
                      <th className="py-3 px-6 text-left text-gray-600 font-semibold uppercase">Age Category</th>
                      <th className="py-3 px-6 text-left text-gray-600 font-semibold uppercase">Event Category</th>
                      <th className="py-3 px-6 text-left text-gray-600 font-semibold uppercase">Representative Club</th>
                      <th className="py-3 px-6 text-left text-gray-600 font-semibold uppercase">Phone</th>
                      <th className="py-3 px-6 text-left text-gray-600 font-semibold uppercase">Email</th>
                      <th className="py-3 px-6 text-left text-gray-600 font-semibold uppercase">Aadhar No</th>
                      <th className="py-3 px-6 text-left text-gray-600 font-semibold uppercase">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredSkaters.map((skater, index) => (
                      <tr key={skater._id} className="border-b border-gray-200 hover:bg-gray-100 transition duration-150">
                        <td className="py-4 px-6 text-gray-800">{index + 1}</td>
                        <td className="py-4 px-6">
                          <img
                            src={skater.skaterPhoto}
                            alt={skater.name}
                            className="h-12 w-12 object-cover rounded-full"
                          />
                        </td>
                        <td className="py-4 px-6 text-gray-800 font-medium">{skater.name}</td>
                        <td className="py-4 px-6 text-gray-600">
                          <div className="flex items-center">
                            <FaVenusMars className="mr-2 text-blue-500" />
                            <span>{skater.gender}</span>
                          </div>
                        </td>
                        <td className="py-4 px-6 text-gray-600">{skater.age}</td>
                        <td className="py-4 px-6 text-gray-600">{skater.ageCategory}</td>
                        <td className="py-4 px-6 text-gray-600">
                          <div className="flex items-center">
                            <FaSkating className="mr-2 text-green-500" />
                            <span>{skater.eventCategory}</span>
                          </div>
                        </td>
                        <td className="py-4 px-6 text-gray-600">
                          <div className="flex items-center">
                            <FaBuilding className="mr-2 text-purple-500" />
                            <span>{skater.representativeClub}</span>
                          </div>
                        </td>
                        <td className="py-4 px-6 text-gray-600">{skater.phoneNo}</td>
                        <td className="py-4 px-6 text-gray-600">{skater.email}</td>
                        <td className="py-4 px-6 text-gray-600">{skater.aadharNo}</td>
                        <td className="py-4 px-6">
                          <button
                            onClick={() => handleViewFile(skater.fileUrl)}
                            className={`bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded flex items-center ${!skater.fileUrl ? 'opacity-50 cursor-not-allowed' : ''}`}
                            disabled={!skater.fileUrl}
                          >
                            <FaFileAlt className="mr-2" />
                            {skater.fileUrl ? 'View File' : 'No File'}
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
          {error && <p className="text-red-600 text-sm mt-2">{error}</p>}
          {success && <p className="text-green-600 text-sm mt-2">{success}</p>}
        </div>
      </div>
    </div>
  );
};

export default AddSkaters;

