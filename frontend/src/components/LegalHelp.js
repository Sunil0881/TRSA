import React from 'react';
import Circle from "../assets/CircleLayer.png"
import Bag from "../assets/Bag.png"
import Rocket from "../assets/Rocket.png"
import User from "../assets/User.png"

const LegalHelp = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center p-8 bg-slate-100">
      <div className="md:w-1/3 mb-8 md:mb-0">
        <h1 className="text-4xl font-semibold mb-4">Why do we help with Legalization</h1>
        <p className="text-lg text-gray-700 ">We are here for Thiruvallur to carry out the legalization process, which is sometimes complicated.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:w-2/3">
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ">
          <img src={Circle} alt="Environmental Law" className="w-10 h-10 mb-4" />
          <h2 className="text-2xl font-semibold mb-2">Environmental Law</h2>
          <p className="text-gray-600  ">Environmental legal issues might occur since the planned business activities are designed.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <img src={Bag} alt="Corporate and Commercial" className="w-10 h-10 mb-4" />
          <h2 className="text-2xl font-semibold mb-2">Corporate and Commercial</h2>
          <p className="text-gray-600">We provide a complete range of services for the continuity of your business activities.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <img src={Rocket} alt="Information and Technology" className="w-10 h-10 mb-4" />
          <h2 className="text-2xl font-semibold mb-2">Information and Technology</h2>
          <p className="text-gray-600">IT not followed by the existing regulation which might cause legal uncertainty and business uncertainty.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <img src={User} alt="Other Services" className="w-10 h-10 mb-4" />
          <h2 className="text-2xl font-semibold mb-2">Other Services</h2>
          <p className="text-gray-600">In dealing with disruptive economic and legal challenge, our firm also provide various legal services.</p>
        </div>
      </div>
    </div>
  );
};

export default LegalHelp;
