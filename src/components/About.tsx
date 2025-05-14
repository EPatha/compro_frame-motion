// src/components/About.tsx
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16 text-white">
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold">About Mekanikace</h1>
        <p className="text-xl mt-4">
          Discover the story, mission, and people behind everything we do.
        </p>
        <p className="mt-8 text-lg">
          Mekanikace is a technology solutions provider focused on delivering innovative tools to help your business grow and transform in the digital era. We are committed to delivering optimal results through carefully designed solutions tailored to meet your specific business needs. By prioritizing quality and reliability, Mekanikace ensures every service we offer is built to last. We are here to support your digital goals with effective and sustainable solutions that drive real progress.
        </p>
      </section>

      {/* Vision & Mission */}
      <section className="mt-24 text-center">
        <h2 className="text-3xl font-bold mb-6">Vision & Mission</h2>
        <div className="flex flex-col md:flex-row justify-center gap-16">
          <div className="text-left w-full md:w-1/2">
            <h3 className="text-2xl font-semibold">🔨 Vision</h3>
            <p className="mt-4">
              Our vision is to be a leading partner for businesses in delivering innovative and reliable technology solutions, which drive growth and readiness to face challenges in the digital era.
            </p>
          </div>
          <div className="text-left w-full md:w-1/2">
            <h3 className="text-2xl font-semibold">🌍 Mission</h3>
            <p className="mt-4">
              Our mission is to provide quality technology solutions specifically designed to drive business growth in the digital era, prioritizing innovation and reliability in every service. We are committed to building long-term relationships based on trust, transparency, and responsive support, adapting to the latest technological developments to meet dynamic business needs.
            </p>
          </div>
        </div>
      </section>

      {/* Commitment */}
      <section className="mt-24">
        <h2 className="text-3xl font-bold text-center mb-6">Commitment</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
          <div>
            <h3 className="text-xl font-semibold">⚒️ Product Quality</h3>
            <p className="mt-2">We provide a guarantee for every product we make, ensuring the best quality for you.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">⚡ Quick Response</h3>
            <p className="mt-2">We are always ready to help and answer any of your questions with a fast and professional response.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">🛡️ Warranty & Support</h3>
            <p className="mt-2">We offer a full warranty at no additional cost in the event of product failure, as well as ongoing technical support.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">💛 Commitment to Clients</h3>
            <p className="mt-2">We are committed to maintaining a good relationship with each client, ensuring that each project meets your expectations and needs.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
