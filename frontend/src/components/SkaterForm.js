import React, { useState } from 'react';
import Navbar from './Navbar';

const SkaterForm = () => {
  const [formData, setFormData] = useState({
    rsfiNo: '',
    name: '',
    parentName: '',
    dob: '',
    gender: '',
    aadharNo: '',
    phoneNo: '',
    email: '',
    eventCategory: '',
    representativeClub: '',
    coachName: '',
    skaterPhoto: '',
    proofType: '',
    fileUrl: ''
  });
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "skaterPhoto" || name === "fileUrl") {
      if (files && files[0]) {
        const file = files[0];
        const reader = new FileReader();

        reader.onloadend = () => {
          setFormData(prevData => ({
            ...prevData,
            [name]: reader.result,
          }));
        };
        reader.readAsDataURL(file);
      }
    } else {
      setFormData(prevData => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const clubs = [
    "ISSA - KNPM",
    "Rockers Speed Skating Academy",
    "Sathya Speed Skating Academy",
    "U Can Do Skating Academy",
    "SNS Skaters Academy",
    "Thaisha Roller Skating Academy",
    "Parthi Skating Academy",
    "Spunk",
    "Anna Nagar Roller Skating Academy",
    "Champions Roller Skating Academy",
    "ES Skating Academy",
    "New India Club",
    "Success Sports Academy",
    'RSFI Delhi', 
    'Mumbai Skating Club', 
    'Bangalore Roller Sports', 
    'Chennai Skaters Association',
    "Others"
  ];

  const handleSaveSkater = async () => {
    const formattedFormData = { ...formData };
    
    try {
      const response = await fetch('http://localhost:5000/api/skaterprofiles', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formattedFormData)
      });

      const data = await response.json();

      if (response.ok) {
        alert('Skater profile successfully added!');
        setFormData({
          rsfiNo: '',
          name: '',
          parentName: '',
          dob: '',
          aadharNo: '',
          phoneNo: '',
          email: '',
          eventCategory: '',
          representativeClub: '',
          coachName: '',
          skaterPhoto: '',
          proofType: '',
          fileUrl: ''
        });
        setError('');
      } else {
        const errorMessage = data.errors 
          ? data.errors.join(', ') 
          : (data.message || 'Failed to save the skater profile');
        
        alert(errorMessage);
        setError(errorMessage);
      }
    } catch (error) {
      console.error('Full error:', error);
      alert('Error saving the skater profile. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="container mx-auto p-6">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Add Skater Profile</h2>
        
        {error && <p className="text-red-500 mb-4 text-center">{error}</p>}
  
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="rsfiNo">
                RSFI No (Optional)
              </label>
              <input
                type="text"
                id="rsfiNo"
                name="rsfiNo"
                value={formData.rsfiNo}
                onChange={handleInputChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
  
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
  
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="parentName">
                Parent/Guardian Name *
              </label>
              <input
                type="text"
                id="parentName"
                name="parentName"
                value={formData.parentName}
                onChange={handleInputChange}
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
  
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="dob">
                Date of Birth *
              </label>
              <input
                type="date"
                id="dob"
                name="dob"
                value={formData.dob}
                onChange={handleInputChange}
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="gender">
                    Gender
                </label>
                <select
                    id="gender"
                    name="gender"
                    value={formData.gender}
                    onChange={handleInputChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                >
                    <option value="" disabled>Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                </select>
                </div>
  
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="aadharNo">
                Aadhar No *
              </label>
              <input
                type="text"
                id="aadharNo"
                name="aadharNo"
                value={formData.aadharNo}
                onChange={handleInputChange}
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
  
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phoneNo">
                Phone No *
              </label>
              <input
                type="tel"
                id="phoneNo"
                name="phoneNo"
                value={formData.phoneNo}
                onChange={handleInputChange}
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
  
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
  
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="eventCategory">
                Event Category *
              </label>
              <select
                id="eventCategory"
                name="eventCategory"
                value={formData.eventCategory}
                onChange={handleInputChange}
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value="">Select Category</option>
                <option value="Speed Skating">Speed Skating</option>
                <option value="Figure Skating">Figure Skating</option>
                <option value="Artistic Skating">Artistic Skating</option>
                <option value="Inline Hockey">Inline Hockey</option>
                <option value="Speed Quad">Speed Quad</option>
                <option value="Speed Inline">Speed Inline</option>
                <option value="Roller Hockey">Roller Hockey</option>
                <option value="Inline Freestyle">Inline Freestyle</option>
                <option value="Alpine Downhill">Alpine Downhill</option>
                <option value="Roller Derby">Roller Derby</option>
                <option value="Roller Freestyle">Roller Freestyle</option>
                <option value="Roller Scooter">Roller Scooter</option>
                <option value="Skate Boarding">Skate Boarding</option>
              </select>
            </div>
  
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="representativeClub">
                Representative Club *
              </label>
              <select
                id="representativeClub"
                name="representativeClub"
                value={formData.representativeClub}
                onChange={handleInputChange}
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value="">Select Club</option>
                {clubs.map(club => (
                  <option key={club} value={club}>{club}</option>
                ))}
              </select>
            </div>
  
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="coachName">
                Coach Name *
              </label>
              <input
                type="text"
                id="coachName"
                name="coachName"
                value={formData.coachName}
                onChange={handleInputChange}
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
  
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="skaterPhoto">
                Skater Photo *
              </label>
              <input
                type="file"
                id="skaterPhoto"
                name="skaterPhoto"
                onChange={handleInputChange}
                accept="image/*"
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              {formData.skaterPhoto && (
                <img
                  src={formData.skaterPhoto}
                  alt="Skater"
                  className="mt-2 h-24 w-24 object-cover rounded"
                />
              )}
            </div>
  
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="proofType">
                Identity Proof Type *
              </label>
              <select
                id="proofType"
                name="proofType"
                value={formData.proofType}
                onChange={handleInputChange}
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value="">Select Proof Type</option>
                <option value="Aadhar">Aadhar</option>
                <option value="Birth Certificate">Birth Certificate</option>
              </select>
            </div>
  
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fileUrl">
                Identity Proof File *
              </label>
              <input
                type="file"
                id="fileUrl"
                name="fileUrl"
                accept="image/*"
                onChange={handleInputChange}
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              {formData.fileUrl && (
                <img 
                  src={formData.fileUrl} 
                  alt="Identity Proof" 
                  className="mt-2 h-24 w-24 object-cover rounded"
                />
              )}
            </div>
          </div>
  
          <div className="flex items-center justify-center mt-6">
            <button
              type="button"
              onClick={handleSaveSkater}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300 ease-in-out transform hover:scale-105"
            >
              Save Skater Profile
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SkaterForm;

