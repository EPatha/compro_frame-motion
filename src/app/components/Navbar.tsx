// app/components/Navbar.tsx
'use client';

import Link from 'next/link';

const Navbar = () => {
  return (
    <header className="w-[800px] h-16 px-8 bg-black rounded-full inline-flex justify-center items-center gap-20 fixed top-0 left-1/2 transform -translate-x-1/2 z-10">
      <Link href="/" className="w-28 self-stretch px-6 py-4 flex justify-center items-center gap-2.5">
        <div className="justify-start text-neutral-300 text-2xl font-normal font-['Inter']">Home</div>
      </Link>
      <Link href="/about" className="w-28 self-stretch px-5 py-4 flex justify-center items-center gap-2.5">
        <div className="justify-start text-white text-2xl font-semibold font-['Inter']">About Us</div>
      </Link>
      <Link href="/portfolio" className="w-28 self-stretch px-6 py-4 flex justify-center items-center gap-2.5">
        <div className="justify-start text-neutral-300 text-2xl font-normal font-['Inter']">Portfolio</div>
      </Link>
    </header>
  );
};

export default Navbar;
