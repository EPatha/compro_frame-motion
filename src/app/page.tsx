'use client';  // Menandakan bahwa ini adalah Client Component

import { motion } from 'framer-motion';

export default function Home() {
  return (
    <>
      <style jsx>{`
        /* Hapus watermark NEXT.js */
        .nextjs-watermark {
          display: none;
        }
      `}</style>
      <main className="min-h-screen bg-black flex items-center justify-center">
        <motion.h1
          className="text-4xl text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Selamat datang di Mekanikace!
        </motion.h1>
      </main>
    </>
  );
}
