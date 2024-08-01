import React from 'react';
import image1 from "../assets/slider1.png";
import image2 from "../assets/slider2.png";
import image3 from "../assets/slider3.png";

const images = [image1, image2, image3, image1, image2, image3, image1, image2, image3]; // Duplicate images for continuous sliding

const Imgslide = () => {
  return (
    <div className="overflow-hidden w-full max-w-8xl mx-auto relative pb-10 md:pb-10 lg:pb-20 h-32 md:h-52 lg:h-80">
      <div className="flex h-full animate-slide">
        {images.map((image, index) => (
          <div key={index} className="w-1/3 flex-shrink-0 px-2 h-full">
            <img src={image} alt={`Slide ${index}`} className="rounded-lg w-full h-full object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Imgslide;
