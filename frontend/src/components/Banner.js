import React from 'react';
import skating from "../assets/skatinggirl.png";

const Banner = ({ mainText, subTexts }) => {
  // Ensure subTexts is a string
  const text = typeof subTexts === 'string' ? subTexts : '';

  // Split the text into chunks, e.g., at every exclamation mark followed by a space
  const splitTexts = text.split("! ").map((chunk, index) => chunk + (index < text.split("! ").length - 1 ? "! " : ""));

  return (
    <div className="relative flex items-center justify-center pt-5 md:pt-10 pb-10">
      <div className="relative w-full max-w-xs md:max-w-2xl lg:max-w-7xl bg-white shadow-lg rounded-lg overflow-hidden">
        <img
          src={skating}
          alt="Skating"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative bg-black bg-opacity-50 py-5 md:py-10 lg:py-16 text-center">
          <h1 className="text-xl md:text-3xl lg:text-6xl font-semibold text-white">
            {mainText}
          </h1>
          <div className="relative overflow-hidden bg-blue-800 rounded-lg md:mx-40 mx-10 mt-2 lg:mx-72 lg:mt-5 md:mt-3 h-8 md:h-16 lg:h-16 flex items-center">
            <div className="flex animate-ticker whitespace-nowrap">
              {/* Duplicate the split texts for seamless scrolling */}
              <div className="flex flex-shrink-0">
                {splitTexts.map((text, index) => (
                  <h1 key={index} className="text-md md:text-xl lg:text-3xl font-semibold text-white flex-shrink-0 mx-6">
                    {text}
                  </h1>
                ))}
              </div>
              <div className="flex flex-shrink-0">
                {splitTexts.map((text, index) => (
                  <h1 key={`duplicate-${index}`} className="text-md md:text-xl lg:text-3xl font-semibold text-white flex-shrink-0 mx-6">
                    {text}
                  </h1>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
