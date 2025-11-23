// src/components/Header.jsx
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react'; // For hamburger & close icons

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = ['About', 'Themes', 'Prizes','Sponsors', 'Timeline', 'Team',  'FAQ', 'Contact'];

  return (
    <nav className="bg-white shadow sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-evenly items-center">
       
       
       
<a
  href="#"
  rel="noopener noreferrer"
  className="flex items-center h-16 overflow-hidden"
>
  <img
    src="./lictclub.png"
    alt="Lumbini ICT club PNG"
    className="h-full max-h-full w-auto object-contain ml-10"
  />
</a>


<a
  href="https://lict.edu.np/"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center h-16 overflow-hidden" 
>
  <img
    src="./nobglogoLICT.png"
    alt="Lumbini ICT campus Logo"
    className="h-full max-h-full w-auto object-contain ml-10"
  />
</a>






        <ul className="hidden lg:flex space-x-6 text-xl">
          {navItems.map(item => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="hover:border-b-2 hover:border-blue-600 border-transparent border-b-2 transition"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Register Button - always visible */}
        <a
          href="#registration"
          className="hidden lg:inline-block bg-blue-600 text-white text-xl px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Register
        </a>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white shadow px-6 pt-4 pb-6 space-y-4 text-center">
          {navItems.map(item => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setIsOpen(false)}
              className="block text-lg hover:text-blue-600"
            >
              {item}
            </a>
          ))}
          <a
            href="#registration"
            onClick={() => setIsOpen(false)}
            className="block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition text-lg mt-2"
          >
            Register
          </a>
        </div>
      )}
    </nav>
  );
}
