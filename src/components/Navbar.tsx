import React from 'react';
import { motion } from 'framer-motion'; // Import framer-motion

const Navbar: React.FC = () => {
  return (
    <motion.div
      className="flex justify-center items-center gap-20 absolute top-20 left-1/2 transform -translate-x-1/2 w-3/4 h-16 bg-black rounded-full z-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        className="flex justify-center items-center w-32 h-16 font-inter font-normal text-2xl text-gray-300"
        whileHover={{ scale: 1.1 }}
      >
        Home
      </motion.div>
      <motion.div
        className="flex justify-center items-center w-32 h-16 font-inter font-semibold text-2xl text-white"
        whileHover={{ scale: 1.1 }}
      >
        About Us
      </motion.div>
      <motion.div
        className="flex justify-center items-center w-32 h-16 font-inter font-normal text-2xl text-gray-300"
        whileHover={{ scale: 1.1 }}
      >
        Portfolio
      </motion.div>
    </motion.div>
  );
}

export default Navbar;
