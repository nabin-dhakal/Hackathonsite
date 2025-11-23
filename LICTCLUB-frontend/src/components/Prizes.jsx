// src/components/Prizes.jsx
import React from 'react';
import { motion } from 'framer-motion';

export default function Prizes() {
  return (
    <motion.section
      id="prizes"
      className="scroll-mt-20 py-16 px-4 bg-gray-100"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <div className='justify-center gap-1  flex'>
      <h2 className="text-5xl font-bold text-center mb-8">Prizes</h2>
          <img src='throphy.png' className='h-[50px]'></img></div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-6 shadow rounded text-center transition-all duration-300 ease-in-out 
        hover:from-blue-600 hover:to-purple-700 
          hover:scale-[1.02] hover:shadow-2xl 
          hover:ring-2 hover:ring-cyan-300 text-white">
          <h3 className="text-3xl font-bold mb-2">1st Place</h3>
          <p className="text-2xl">NRs. 30,000</p>
          <ol className="list list-disc text-left px-25">
          <li className="text-xl">Medals</li>
          <li className="text-xl">Certificates</li></ol>
        </div>
        <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-6 shadow transition-all duration-300 ease-in-out 
hover:from-blue-600 hover:to-purple-700 hover:scale-[1.02] hover:shadow-2xl hover:ring-2 hover:ring-cyan-300
 rounded text-center text-white">
          <h3 className="text-3xl font-bold mb-2">2nd Place</h3>
          <p className="text-2xl">NRs. 25,000</p>
          <ol className="list list-disc text-left px-25">
          <li className="text-xl">Medals</li>
          <li className="text-xl">Certificates</li></ol>
        </div>
        <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-6 transition-all duration-300 ease-in-out 
        hover:from-blue-600 hover:to-purple-700 hover:scale-[1.02] hover:shadow-2xl hover:ring-2 hover:ring-cyan-300
          shadow rounded text-center text-white">
          <h3 className="text-3xl font-bold mb-2">Innovative Idea</h3>
          <p className="text-2xl">NRs. 15,000</p>
          <ol className="list list-disc text-left px-25">
          <li className="text-xl">Medals</li>
          <li className="text-xl">Certificates</li></ol>
        </div>
        <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-6 transition-all duration-300 ease-in-out
         hover:from-blue-600 hover:to-purple-700 hover:scale-[1.02] hover:shadow-2xl hover:ring-2 hover:ring-cyan-300
          shadow rounded  text-white sm:col-span-2 md:col-span-1">
          <h3 className="text-3xl text-center font-bold mb-2">
            Best UI<span className="mx-1  text-white">&#47;</span>UX
          </h3>
          <p className="text-2xl text-center">NRs. 5,000</p>
          <ol className="list list-disc text-left px-25">
          <li className="text-xl">Medals</li>
          <li className="text-xl">Certificates</li></ol>
        </div>
      </div>
    </motion.section>
  );
}