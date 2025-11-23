// src/components/HeroSection.jsx
import React from 'react';

export default function HeroSection() {
  return (
    <section className="text-center py-20 bg-gradient-to-r to-blue-500 h-[50vh] pt-[8%] from-yellow-600 text-white">
      <a href='https://professional.edu.np/' target='_blank'><h4 className='text-xl font-bold text-white w-fit rounded-2xl m-auto'>Professional Education Consultancy</h4></a>
      <p>presents</p>
      <h1 className="text-4xl font-bold mb-4">LICT Inter-College Hackathon</h1>
      <p className="text-lg mb-6">The Ultimate 48‑Hour Hackathon Experience</p>
      <div className="space-x-4">
        <a
          href="#registration"
          className="bg-white text-blue-600 font-semibold px-6 py-2 rounded shadow inline-block hover:bg-gray-100 transition"
        >
          Register Now
        </a>
        <a
          href="#about"
          className="bg-transparent border border-white px-6 py-2 rounded inline-block hover:bg-white hover:text-blue-600 transition"
        >
          Learn More
        </a>
      </div>
    </section>
  );
}
