import React from 'react';
import profile from "../assets/profileimg.png";
import "../Styles/MemberCard.css";

const MemberCard = () => {
  return (
    <div className="flex flex-col items-center min-h-screen p-4">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center pt-10">Meet Our Members</h1>
      <div className="grid grid-cols-1 gap-20 md:grid-cols-2 lg:grid-cols-3 w-full max-w-screen-xl mx-auto">
        {Array(6).fill().map((_, index) => (
          <div key={index} className="card shadow-xl mx-auto">
            <img 
              src={profile} 
              alt="profile" 
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <p className="card-title">Sport Counsellor</p>
              <p className="small-desc">
                As a new member of the Skatter Community, you'll enjoy unlimited skate sessions, exclusive events, and special discounts.
              </p>
              <div className="go-corner">
                <div className="go-arrow">→</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MemberCard;
