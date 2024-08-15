import React from 'react';
import profile from "../assets/profileimg.png";

const MemberCard = () => {
  return (
    <div className="flex flex-col items-center min-h-screen p-4">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center pt-10">Meet Our Members</h1>
      <div className="grid grid-cols-1 gap-20 md:grid-cols-2 lg:grid-cols-3 w-full">
        {Array(6).fill().map((_, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg max-w-xs w-full mx-auto">
            <img 
              src={profile} 
              alt="profile" 
              className="w-full h-48 object-cover rounded-t-lg" 
            />
            <div className="p-4">
              <p className="text-blue-600 text-sm mb-2">Sport Counsellor</p>
              <p className="text-2xl font-semibold mb-2">Sivaguru</p>
              <p className="text-gray-700">
                As a new member of the Skatter Community, you'll enjoy unlimited skate sessions, exclusive events, and special discounts.
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MemberCard;
