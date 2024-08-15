import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const pageVariants = {
  initial: { 
    opacity: 0, 
    x: '-100vw' // Start off-screen to the left
  },
  enter: { 
    opacity: 1, 
    x: 0, // Slide to the center
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 20,
      delay: 0.1 // Slight delay for a more natural effect
    }
  },
  exit: { 
    opacity: 0, 
    x: '100vw', // Slide out to the right
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 20
    }
  }
};

const PageTransition = ({ children }) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial="initial"
        animate="enter"
        exit="exit"
        variants={pageVariants}
        style={{ height: '100%', width: '100%' }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default PageTransition;
