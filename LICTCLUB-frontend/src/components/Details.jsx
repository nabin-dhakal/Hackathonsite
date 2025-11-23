
import React from 'react';
import { FaHeart, FaTrophy } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { FaUserGroup } from "react-icons/fa6";
import { CiClock2 } from "react-icons/ci";
import { IoCodeSharp } from "react-icons/io5";


export default function Details() {
  return (
     <motion.section
      id="details"
      className="py-16 px-4"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.3 }}
    >
<section className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-16 px-6 rounded-xl max-w-6xl mx-auto my-10 transition-all duration-300 ease-in-out hover:from-blue-600 hover:to-purple-700 hover:scale-[1.02] hover:shadow-2xl hover:ring-2 hover:ring-cyan-300">
      <div className="text-center mb-10">

        <FaTrophy className="text-6xl mx-auto mb-4" />
        <i className="fa-solid fa-award"></i>
        <h2 className="text-3xl font-bold mb-2">Event Details</h2>
      </div>
      <div className="grid md:grid-cols-3 gap-6 text-center">
        <div className="bg-blue-400 bg-opacity-30 p-6 rounded-lg flex flex-col items-center">
          <CiClock2 className='text-4xl'/>
          <h3 className="text-lg font-semibold mb-2">48-Hour Hackathon</h3>
          <p>Non-stop coding from Day 1 to Day 3</p>
        </div>
        <div className="bg-blue-400 bg-opacity-30 p-6 rounded-lg flex flex-col items-center">
          <IoCodeSharp className='text-4xl' />
          <h3 className="text-lg font-semibold mb-2">Git Integration</h3>
          <p>All projects must be commited to Git</p>
        </div>
        <div className="bg-blue-400 bg-opacity-30 p-6 rounded-lg flex flex-col items-center">
          <FaUserGroup className='text-4xl'/>
          <h3 className="text-lg font-semibold mb-2">Team Based</h3>
          <p>Team of 3-4 members required</p> 
        </div>
      </div>
    </section>
    </motion.section>
  );
}
