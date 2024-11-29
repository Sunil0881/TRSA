import React, { useState } from 'react';
import Navbar from "../../components/Navbar";

const AddSkaters = () => {
  const [formData, setFormData] = useState({
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
    skaterPhoto: '', // Will store base64
    identityProofType: '',
    identityProofFile: '' // Will store base64
  });

  const [error, setError] = useState('');

  // Function to convert file to base64
  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  // Handle input changes, including file inputs
  const handleInputChange = (e) => {
    const { name, value } = e.target;
  
    // Handle nested fields
    if (name === "identityProofType") {
      setFormData((prevData) => ({
        ...prevData,
        identityProof: {
          ...prevData.identityProof,
          type: value, // Update the nested type
        },
      }));
    } else if (name === "identityProofFile") {
      setFormData((prevData) => ({
        ...prevData,
        identityProof: {
          ...prevData.identityProof,
          fileUrl: value, // Update the nested fileUrl
        },
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value, // Update other fields
      }));
    }
  };
  


  // Clubs list
  const clubs = [
    'RSFI Delhi', 
    'Mumbai Skating Club', 
    'Bangalore Roller Sports', 
    'Chennai Skaters Association'
  ];

  const handleSaveSkater = async () => {
    const requiredFields = [
      'name', 'parentName', 'dob', 'aadharNo',
      'phoneNo', 'email', 'eventCategory',
      'representativeClub', 'coachName', 'skaterPhoto',
      'identityProofType', 'identityProofFile'
    ];
  
    // Check for missing fields
    const missingFields = requiredFields.filter(field => !formData[field]);
    if (missingFields.length > 0) {
      setError(`Please fill out all required fields: ${missingFields.join(', ')}`);
      return;
    }
  
    // Reformat formData for the backend schema
    const formattedFormData = {
      rsfiNo: formData.rsfiNo || "", // Optional field
      name: formData.name,
      parentName: formData.parentName,
      dob: formData.dob,
      aadharNo: formData.aadharNo,
      phoneNo: formData.phoneNo,
      email: formData.email,
      eventCategory: formData.eventCategory,
      representativeClub: formData.representativeClub,
      coachName: formData.coachName,
      skaterPhoto: formData.skaterPhoto,
      identityProof: {
        proofType: formData.identityProofType,
        fileUrl: formData.identityProofFile
      }
    };
  
    try {
      console.log(formattedFormData);
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
          identityProofType: '',
          identityProofFile: ''
        });
        setError('');
      } else {
        alert(`Failed to save the skater profile: ${data.message}`);
      }
    } catch (error) {
      console.error('Error saving the skater profile:', error);
      alert('Error saving the skater profile. Please try again.');
    }
  };
  

  return (
    <div>
      <Navbar />
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">Add Skater Profile</h2>
      
      {error && <p className="text-red-500 mb-4">{error}</p>}

      {/* Form Fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* RSFI No (Optional) */}
        <div>
          <label className="block mb-2">RSFI No (Optional)</label>
          <input
            type="text"
            name="rsfiNo"
            value={formData.rsfiNo}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
          />
        </div>

        {/* Name */}
        <div>
          <label className="block mb-2">Name *</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
            className="w-full p-2 border rounded"
          />
        </div>

        {/* Parent Name */}
        <div>
          <label className="block mb-2">Parent/Guardian Name *</label>
          <input
            type="text"
            name="parentName"
            value={formData.parentName}
            onChange={handleInputChange}
            required
            className="w-full p-2 border rounded"
          />
        </div>

        {/* Date of Birth */}
        <div>
          <label className="block mb-2">Date of Birth *</label>
          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleInputChange}
            required
            className="w-full p-2 border rounded"
          />
        </div>

        {/* Aadhar No */}
        <div>
          <label className="block mb-2">Aadhar No *</label>
          <input
            type="text"
            name="aadharNo"
            value={formData.aadharNo}
            onChange={handleInputChange}
            required
            className="w-full p-2 border rounded"
          />
        </div>

        {/* Phone No */}
        <div>
          <label className="block mb-2">Phone No *</label>
          <input
            type="tel"
            name="phoneNo"
            value={formData.phoneNo}
            onChange={handleInputChange}
            required
            className="w-full p-2 border rounded"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block mb-2">Email *</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="w-full p-2 border rounded"
          />
        </div>

        {/* Event Category */}
        <div>
          <label className="block mb-2">Event Category *</label>
          <select
            name="eventCategory"
            value={formData.eventCategory}
            onChange={handleInputChange}
            required
            className="w-full p-2 border rounded"
          >
            <option value="">Select Category</option>
            <option value="Speed Skating">Speed Skating</option>
            <option value="Figure Skating">Figure Skating</option>
            <option value="Artistic Skating">Artistic Skating</option>
            <option value="Inline Hockey">Inline Hockey</option>
          </select>
        </div>

        {/* Representative Club */}
        <div>
          <label className="block mb-2">Representative Club *</label>
          <select
            name="representativeClub"
            value={formData.representativeClub}
            onChange={handleInputChange}
            required
            className="w-full p-2 border rounded"
          >
            <option value="">Select Club</option>
            {clubs.map(club => (
              <option key={club} value={club}>{club}</option>
            ))}
          </select>
        </div>

        {/* Coach Name */}
        <div>
          <label className="block mb-2">Coach Name *</label>
          <input
            type="text"
            name="coachName"
            value={formData.coachName}
            onChange={handleInputChange}
            required
            className="w-full p-2 border rounded"
          />
        </div>

        {/* Skater Photo */}
        <div>
          <label className="block mb-2">Skater Photo *</label>
          <input
            type="file"
            name="skaterPhoto"
            onChange={handleInputChange}
            accept="image/*"
            required
            className="w-full p-2 border rounded"
          />
          {formData.skaterPhoto && (
            <img 
              src={formData.skaterPhoto} 
              alt="Skater" 
              className="mt-2 h-24 w-24 object-cover"
            />
          )}
        </div>

        {/* Identity Proof */}
        <div>
          <label className="block mb-2">Identity Proof Type *</label>
          <select
            name="identityProofType" // Matches the key in the handleInputChange
            value={formData.identityProof?.type || ""} // Ensure it reads the nested value
            onChange={handleInputChange}
            required
            className="w-full p-2 border rounded"
          >
            <option value="">Select Proof Type</option>
            <option value="Aadhar">Aadhar</option>
            <option value="Birth Certificate">Birth Certificate</option>
          </select>
        </div>

        {/* Identity Proof File */}
        <div>
          <label className="block mb-2">Identity Proof File *</label>
          <input
            type="file"
            name="identityProofFile"
            onChange={handleInputChange}
            accept="image/*,application/pdf"
            required
            className="w-full p-2 border rounded"
          />
          {formData.identityProofFile && (
            <img 
              src={formData.identityProofFile} 
              alt="Identity Proof" 
              className="mt-2 h-24 w-24 object-cover"
            />
          )}
        </div>
      </div>

      {/* Save Button */}
      <div className="col-span-2 text-right">
  <button
    onClick={handleSaveSkater}
    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
  >
    Save Skater Profile
  </button>
</div>
    </div>
    </div>
  );
};

export default AddSkaters;