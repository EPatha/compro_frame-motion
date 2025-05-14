// src/app/layout.tsx
import '../styles/globals.css';  // Path to global styles
import { ReactNode } from 'react';
import Link from 'next/link';
import Footer from '../components/Footer'; // Import the Footer component

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <html lang="en">
        <body>
          {/* Navbar Section */}
          <div className="navbar">
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/portfolio">Portfolio</Link></li>
            </ul>
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
