import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <motion.section
  id="about"
  className="scroll-mt-20 py-16 px-4 bg-gray-50 text-center "
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6, delay: 0.4 }}
>
  <h2 className="text-3xl font-bold mb-4">About LICT Inter-College Hackathon</h2>
  <p className="max-w-3xl mx-auto text-gray-700">
    The Inter-College Hackathon, proudly hosted by Lumbini ICT Club in collaboration with the Lumbini ICT Campus, Presented By Professional Education Consultancy, 
    is an exhilarating platform where brilliant young innovators from various institutions unite to build, invent, and bring impactful ideas to life. 
    This exciting event celebrates creativity, collaboration, and cutting-edge technology—offering participants a unique opportunity to turn their visions into reality.
  </p>
</motion.section>

  );
}
