// src/components/Timeline.jsx
import React from 'react';
import { motion } from 'framer-motion';

export default function Timeline() {
  return (
    <motion.section
      id="timeline"
      className=" scroll-mt-20 py-16 px-4 "
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.3 }}
    >
      <h2 className="text-3xl font-bold text-center mb-8">Event Timeline</h2>
      <div className="flex justify-center max-w-4xl mx-auto content-center">
        <div className="bg-white p-6 shadow rounded flex flex-col transition-all duration-300 ease-in-out 
        hover:from-blue-600 hover:to-purple-700 hover:scale-[1.02] hover:shadow-2xl hover:ring-2 hover:ring-cyan-300">
          <h3 className="text-xl font-semibold mb-2 text-center">Lumbini ICT Campus, Nawalpur</h3>
          <p>Registration: 7AM <span className='font-bold'>|</span> Starts: 8:30AM </p>
        </div></div>
    </motion.section>
  );
}
