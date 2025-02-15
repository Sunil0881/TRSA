import React, { useState, useEffect } from "react";
import Navbar from './Navbar';
import { BACKEND_URL } from '../constants';
const SkaterForm = () => {
  const [formData, setFormData] = useState({
    rsfiNo: "",
    name: "",
    parentName: "",
    dob: "",
    gender: "",
    aadharNo: "",
    phoneNo: "",
    email: "",
    eventCategory: "",
    representativeClub: "",
    coachName: "",
    skaterPhoto: "",
    proofType: "",
    fileUrl: "",
  });

  const [error, setError] = useState("");
  const [clubs, setClubs] = useState([]); // State to store club list

  useEffect(() => {
    // Fetch club data from the backend
    const fetchClubs = async () => {
      try {
        const response = await fetch(`${BACKEND_URL}/api/associative-club`);
        const data = await response.json();

        if (response.ok) {
          setClubs(data.map((club) => club.clubName)); // Extract only club names
        } else {
          console.error("Failed to fetch club data:", data.message);
        }
      } catch (error) {
        console.error("Error fetching club data:", error);
      }
    };

    fetchClubs();
  }, []);

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "skaterPhoto" || name === "fileUrl") {
      if (files && files[0]) {
        const file = files[0];
        const reader = new FileReader();

        reader.onloadend = () => {
          setFormData((prevData) => ({
            ...prevData,
            [name]: reader.result,
          }));
        };
        reader.readAsDataURL(file);
      }
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSaveSkater = async () => {
    const formattedFormData = { ...formData };

    try {
      const response = await fetch(`${BACKEND_URL}/api/skaterprofiles`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formattedFormData),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Skater profile successfully added!");
        setFormData({
          rsfiNo: "",
          name: "",
          parentName: "",
          dob: "",
          aadharNo: "",
          phoneNo: "",
          email: "",
          eventCategory: "",
          representativeClub: "",
          coachName: "",
          skaterPhoto: "",
          proofType: "",
          fileUrl: "",
        });
        setError("");
      } else {
        const errorMessage = data.errors
          ? data.errors.join(", ")
          : data.message || "Failed to save the skater profile";

        alert(errorMessage);
        setError(errorMessage);
      }
    } catch (error) {
      console.error("Full error:", error);
      alert("Error saving the skater profile. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="container p-6 mx-auto">
        <h2 className="mb-6 text-3xl font-bold text-center text-gray-800">
          Add Skater Profile
        </h2>

        {error && <p className="mb-4 text-center text-red-500">{error}</p>}

        <form className="px-8 pt-6 pb-8 mb-4 bg-white rounded shadow-md">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="mb-4">
              <label
                className="block mb-2 text-sm font-bold text-gray-700"
                htmlFor="rsfiNo"
              >
                RSFI No (Optional)
              </label>
              <input
                type="text"
                id="rsfiNo"
                name="rsfiNo"
                value={formData.rsfiNo}
                onChange={handleInputChange}
                className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              />
            </div>

            <div className="mb-4">
              <label
                className="block mb-2 text-sm font-bold text-gray-700"
                htmlFor="name"
              >
                Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              />
            </div>

            <div className="mb-4">
              <label
                className="block mb-2 text-sm font-bold text-gray-700"
                htmlFor="parentName"
              >
                Parent/Guardian Name *
              </label>
              <input
                type="text"
                id="parentName"
                name="parentName"
                value={formData.parentName}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              />
            </div>

            <div className="mb-4">
              <label
                className="block mb-2 text-sm font-bold text-gray-700"
                htmlFor="dob"
              >
                Date of Birth *
              </label>
              <input
                type="date"
                id="dob"
                name="dob"
                value={formData.dob}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              />
            </div>

            <div className="mb-4">
              <label
                className="block mb-2 text-sm font-bold text-gray-700"
                htmlFor="gender"
              >
                Gender
              </label>
              <select
                id="gender"
                name="gender"
                value={formData.gender}
                onChange={handleInputChange}
                className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              >
                <option value="" disabled>
                  Select Gender
                </option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="mb-4">
              <label
                className="block mb-2 text-sm font-bold text-gray-700"
                htmlFor="aadharNo"
              >
                Aadhar No *
              </label>
              <input
                type="text"
                id="aadharNo"
                name="aadharNo"
                value={formData.aadharNo}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              />
            </div>

            <div className="mb-4">
              <label
                className="block mb-2 text-sm font-bold text-gray-700"
                htmlFor="phoneNo"
              >
                Phone No *
              </label>
              <input
                type="tel"
                id="phoneNo"
                name="phoneNo"
                value={formData.phoneNo}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              />
            </div>

            <div className="mb-4">
              <label
                className="block mb-2 text-sm font-bold text-gray-700"
                htmlFor="email"
              >
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              />
            </div>

            <div className="mb-4">
              <label
                className="block mb-2 text-sm font-bold text-gray-700"
                htmlFor="eventCategory"
              >
                Event Category *
              </label>
              <select
                id="eventCategory"
                name="eventCategory"
                value={formData.eventCategory}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              >
                <option value="">Select Category</option>
                <option value="Adjustable">Adjustable</option>
                <option value="Alpine Downhill">Alpine Downhill</option>
                <option value="Fancy Inline">Fancy Inline</option>
                <option value="Speed Inline">Speed Inline</option>
                <option value="Inline Hockey">Inline Hockey</option>
                <option value="Roller Hockey">Roller Hockey</option>
                <option value="Inline Freestyle">Inline Freestyle</option>
                <option value="Roller Freestyle">Roller Freestyle</option>
                <option value="Roller Derby">Roller Derby</option>
                <option value="Roller Scooter">Roller Scooter</option>
                <option value="Skate Boarding">Skate Boarding</option>
                <option value="Skate Cross">Skate Cross</option>
                <option value="Speed Quad">Speed Quad</option>
              </select>
            </div>

            <div className="mb-4">
              <label
                className="block mb-2 text-sm font-bold text-gray-700"
                htmlFor="representativeClub"
              >
                Representative Club *
              </label>
              <select
                name="representativeClub"
                value={formData.representativeClub}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              >
                <option value="">Select Club</option>
                {clubs.map((club, index) => (
                  <option key={index} value={club}>
                    {club}
                  </option>
                ))}
              </select>
            </div>

            <div className="mb-4">
              <label
                className="block mb-2 text-sm font-bold text-gray-700"
                htmlFor="coachName"
              >
                Coach Name *
              </label>
              <input
                type="text"
                id="coachName"
                name="coachName"
                value={formData.coachName}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              />
            </div>

            <div className="mb-4">
              <label
                className="block mb-2 text-sm font-bold text-gray-700"
                htmlFor="skaterPhoto"
              >
                Skater Photo *
              </label>
              <input
                type="file"
                id="skaterPhoto"
                name="skaterPhoto"
                onChange={handleInputChange}
                accept="image/*"
                required
                className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              />
              {formData.skaterPhoto && (
                <img
                  src={formData.skaterPhoto}
                  alt="Skater"
                  className="object-cover w-24 h-24 mt-2 rounded"
                />
              )}
            </div>

            <div className="mb-4">
              <label
                className="block mb-2 text-sm font-bold text-gray-700"
                htmlFor="proofType"
              >
                Identity Proof Type *
              </label>
              <select
                id="proofType"
                name="proofType"
                value={formData.proofType}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              >
                <option value="">Select Proof Type</option>
                <option value="Aadhar">Aadhar</option>
                <option value="Birth Certificate">Birth Certificate</option>
              </select>
            </div>

            <div className="mb-4">
              <label
                className="block mb-2 text-sm font-bold text-gray-700"
                htmlFor="fileUrl"
              >
                Identity Proof File *
              </label>
              <input
                type="file"
                id="fileUrl"
                name="fileUrl"
                accept="image/*"
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              />
              {formData.fileUrl && (
                <img
                  src={formData.fileUrl}
                  alt="Identity Proof"
                  className="object-cover w-24 h-24 mt-2 rounded"
                />
              )}
            </div>
          </div>

          <div className="flex items-center justify-center mt-6">
            <button
              type="button"
              onClick={handleSaveSkater}
              className="px-4 py-2 font-bold text-white transition duration-300 ease-in-out transform bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline hover:scale-105"
            >
              Save Skater Profile
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SkaterForm;