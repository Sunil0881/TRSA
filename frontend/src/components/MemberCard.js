import React from 'react';
import profile from "../assets/profileimg.png";

const MemberCard = () => {
  return (
    <div className='flex justify-center items-center min-h-screen bg-gray-100'>
      <div className='max-w-xs w-full bg-white rounded-lg shadow-lg p-4'>
        <img 
          src={profile} 
          alt='profile' 
          className='w-full h-48 object-cover rounded-t-lg'
        />
        <div className='p-4'>
          <p className='text-blue-600 text-sm mb-2'>Sport Counsellor</p>
          <p className='text-2xl font-semibold mb-2'>Sivaguru</p>
          <p className='text-gray-700'>As a new member of the Skatter Community, you'll enjoy unlimited skate sessions, exclusive events, and special discounts.</p>
        </div>
      </div>
    </div>
  );
}

export default MemberCard;