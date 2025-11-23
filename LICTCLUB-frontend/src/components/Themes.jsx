import React from 'react'

const Themes = () => {
  return (<><div  id='themes' className='themes-container m-auto  max-w-6xl py-16 px-10 rounded-xl text-2xl  bg-gradient-to-r from-blue-500 to-indigo-600 text-white transition-all duration-300 ease-in-out hover:from-blue-600 hover:to-purple-700 hover:scale-[1.02] hover:shadow-2xl hover:ring-2 hover:ring-cyan-300'>
    <div className='m-auto grid text-3xl text-white font-bold justify-center '>Themes</div>
    <ol  className="grid md:grid-cols-4 gap-6 max-w-7xl list-disc pt-5 font-semibold text-lg mx-auto">

    <li>Sustainable Development Goals (SDGS)</li>
    <li>Health Tech</li>
    <li>Agri-Tech</li>
    <li>E Governance</li>
    <li>Cyber Security</li>
    <li>Social Impact & Inclusion</li>
    <li>Disaster Management & Preparedness</li>
    <li>Finance / Economics</li>
    <li>Enterntainment</li>
    <li>Open innovation</li>
    <li>AI & Machine Learning</li>
    <li>Education Tech</li>
    <li>Climate Tech</li>
    <li>Smart Cities & IoT</li>
    <li>Peace & Justice</li>
    </ol></div>
  </>)
}

export default Themes