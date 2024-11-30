import React, { useState } from 'react';
import AdminNavbar from '../../components/AdminNavbar';

const AddSkaters = () => {
  const [isFormVisible, setIsFormVisible] = useState(false); // Toggle for add/delete
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
    proofType: '',
    fileUrl: '' // Will store base64
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const handleInputChange = (e) => {
    const { name, value, files } = e.target;

    // Handle file inputs separately
    if (name === "skaterPhoto" && files && files[0]) {
      const file = files[0];
      const reader = new FileReader();

      reader.onloadend = () => {
        setFormData((prevData) => ({
          ...prevData,
          [name]: reader.result, // Store the base64 string of the image
        }));
      };
      reader.readAsDataURL(file); // Convert file to base64
    } else if (name === "fileUrl" && files && files[0]) {
      const file = files[0];
      const reader = new FileReader();

      reader.onloadend = () => {
        setFormData((prevData) => ({
          ...prevData,
          [name]: reader.result, // Store the base64 string for proof file
        }));
      };
      reader.readAsDataURL(file); // Convert file to base64
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
    // Create a full copy of the form data
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
      proofType: formData.proofType,
      fileUrl: formData.fileUrl
    };
  
    console.log('Sending data:', JSON.stringify(formattedFormData, null, 2));
  
    try {
      const response = await fetch('http://localhost:5000/api/skaterprofiles', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formattedFormData)
      });
  
      // Parse the response
      const data = await response.json();
      
      console.log('Response Status:', response.status);
      console.log('Response Data:', data);
  
      if (response.ok) {
        alert('Skater profile successfully added!');
        // Reset form
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
        // More detailed error handling
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
    <div>
      <AdminNavbar />
      <div className="px-4 md:px-6 lg:px-72 pt-20 relative">
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
            <div className="p-6"> {/* Delete Skater Section */}
              <h2 className="text-center text-lg font-semibold">
                Delete Skater functionality coming soon...
              </h2>
            </div>
          ) : (
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
      
              {/* Identity Proof Type */}
              <div>
                <label className="block mb-2">Identity Proof Type *</label>
                <select
                  name="proofType"
                  value={formData.proofType}
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
                  name="fileUrl"
                  accept="image/*"
                  onChange={handleInputChange}
                  required
                  className="w-full p-2 border rounded"
                />
                {formData.fileUrl && (
                  <img 
                    src={formData.fileUrl} 
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
                )}
          {error && <p className="text-red-600 text-sm mt-2">{error}</p>}
          {success && <p className="text-green-600 text-sm mt-2">{success}</p>}
        </div>
      </div>
    </div>
  );
};

export default AddSkaters;
