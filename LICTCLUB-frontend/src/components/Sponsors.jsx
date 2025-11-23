import React from 'react';
import { motion } from 'framer-motion';


const Titlesponsors = [
  {
    name: 'Professional Education Consultancy',
    Tier: 'Title Sponsor',
    logo: '/professional.png',
    src: 'https://professional.edu.np/',
  },];

const Communitysponsors = [
   {
    name: 'Csit Association of Nepal',
    Tier: 'Community Partner',
    logo: '/CSITAN-logo.png',
    src: 'https://csitan.org.np/',

  },
  {
    name: 'Birendra IT Club',
    Tier: 'Community Partner',
    logo: '/BirendraITClub.jpeg',
    src: 'https://www.facebook.com/birendraitclub',

  },
  {
    name: 'CSIT Association of Nepal - Chitwan',
    Tier: 'Community Partner',
    logo: '/Csitassociation.jpeg',
    src: 'https://www.facebook.com/csitanchitwanofficial/',

  },
  {
    name: 'ICT Club of Kalika',
    Tier: 'Community Partner',
    logo: '/Kalika.png',
    src: 'https://ictkalika.tech/',

  },
   {
    name: 'Code For Change - chitwan',
    Tier: 'Community Partner',
    logo: '/CFC.jpeg',
    src: 'https://codeforchangenepal.com/members/team/chitwan/',
  },
 
  {
    name: 'Rotaract Club of Narayangarh',
    Tier: 'Community Partner',
    logo: '/rotarctngt.jpg',
    src: 'https://rcnarayangarh.org.np/',
  },
];

export default function Sponsors() {
  return (
    <motion.section
      id="sponsors"
      className="scroll-mt-20 py-16 px-4 bg-gray-100"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.4 }}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
        Sponsors & Partners
      </h2>

      <h4 className="text-xl md:text-2xl font-bold text-center mb-12 text-gray-800">
        Title Sponsor
      </h4>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 gap-8  max-w-xl mx-auto px-4">
        {Titlesponsors.map((Tsponsors) => (
          <div
            key={Tsponsors.name}
            className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl border-purple-600 border-3 transition-shadow duration-300 text-center"
          >
          <a href={Tsponsors.src} target='_blank'>
            
            <img
              src={Tsponsors.logo}
              alt={Tsponsors.name}
              className="w-24 h-24 object-contain mx-auto mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-700">{Tsponsors.name}</h3>
            <p className="text-sm text-gray-500">{Tsponsors.Tier}</p>
          </a>
          </div>
        ))}
      </div>


        <h4 className="text-xl md:text-2xl font-bold text-center mb-12 text-gray-800">
        Community Partners
      </h4>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto px-4">
        {Communitysponsors.map((Csponsors) => (
          <div
            key={Csponsors.name}
            className="bg-white p-6 rounded-2xl shadow-lg border-green-600 border-3 hover:shadow-xl transition-shadow duration-300 text-center"
          >
          <a href={Csponsors.src} target='_blank'>
            
            <img
              src={Csponsors.logo}
              alt={Csponsors.name}
              className="w-24 h-24 object-contain mx-auto mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-700">{Csponsors.name}</h3>
            <p className="text-sm text-gray-500">{Csponsors.Tier}</p>
          </a></div>
        ))}
      </div>
    </motion.section>
  );
}
