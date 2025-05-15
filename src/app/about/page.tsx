// app/about/page.tsx
'use client';

import Navbar from '../components/Navbar';  // Import Navbar component
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar />
      
      {/* Konten Halaman About */}
      <motion.div
        className="min-h-screen bg-black text-white flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl">Tentang Mekanikace</h1>
      </motion.div>
    </div>
  );
};

export default About;
