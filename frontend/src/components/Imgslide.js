import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import image1 from "../assets/slider1.png";
import image2 from "../assets/slider2.png";
import image3 from "../assets/slider3.png";

const images = [image1, image2, image3, image1, image2, image3, image1, image2, image3]; // Duplicate images for continuous sliding

const Imgslide = () => {
  const controls = useAnimation();

  useEffect(() => {
    let isMounted = true;

    const sequence = async () => {
      if (isMounted) {
        await controls.start({ x: 0 });
        await controls.start({ x: "-100%" });
        await controls.start({ x: "-200%" });
        await controls.start({ x: "-300%" });
      }
    };

    const interval = setInterval(sequence, 24000); // Repeat the sequence every 24 seconds (6s x 4 steps)

    return () => {
      isMounted = false;
      clearInterval(interval);
    };
  }, [controls]);

  return (
    <div className="overflow-hidden w-full max-w-8xl mx-auto relative pb-10 md:pb-10 lg:pb-20 h-32 md:h-52 lg:h-80">
      <motion.div
        className="flex h-full"
        animate={controls}
        transition={{ duration: 6, ease: "linear", repeat: Infinity, repeatType: "loop" }}
      >
        {images.map((image, index) => (
          <div key={index} className="w-1/3 flex-shrink-0 px-2 h-full">
            <img src={image} alt={`Slide ${index}`} className="rounded-lg w-full h-full object-cover" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Imgslide;
