// src/app/layout.tsx
'use client';

import '../styles/globals.css';  // Path to global styles
import { ReactNode } from 'react';
import Link from 'next/link';
import Footer from './components/Footer'; // Import the Footer component

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <html lang="en">
        <body>
          {/* Navbar Section */}
           <div className="container mx-auto flex justify-center space-x-8">
          <Link href="/" className="text-lg hover:text-gray-300">
            Home
          </Link>
          <Link href="/" className="text-lg hover:text-gray-300">
            About Us
          </Link>
          <Link href="/" className="text-lg hover:text-gray-300">
            Portfolio
          </Link>
        </div>


          {/* Main Content */}
          <div className="bg-black text-white min-h-screen">
            <header>
              <main>{children}</main> {/* Render child components */}
            </header>
          </div>

          {/* Footer Section */}
          <Footer />  {/* Add the Footer here */}
          
        </body>
      </html>
    </>
  );
};

export default Layout;
