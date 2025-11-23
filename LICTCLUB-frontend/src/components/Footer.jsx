import { FaFacebookF, FaInstagram } from "react-icons/fa";
import {
  MdEmail,
  MdPhone,
  MdLocationOn,
  MdEvent,
} from "react-icons/md";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="bg-gradient-to-r from-yellow-600 to-blue-600 text-white py-10 px-6 md:px-20"
    >
      <div className="max-w-9xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Left Section */}
        <div>
          <h2 className="text-xl font-bold">LICT Hackathon</h2>
          <p className="mt-2 text-sm">
            The ultimate 48-hour hackathon experience bringing together the
            brightest minds in technology across Nepal. Code, create, compete,
            and conquer!
          </p>
          <div className="mt-4 space-y-2 text-sm">
            <div className="flex items-center gap-2">
              <MdEvent className="text-lg" />
              <span>Starting Bhadra 16, 2082</span>
            </div>
            <div className="flex items-center gap-2">
              <MdLocationOn className="text-lg" />
              <span>Lumbini ICT Campus, Nawalpur</span>
            </div>
            <div className="flex items-center gap-2">
              <MdEmail className="text-lg" />
              <a href="mailto:clublict@lict.edu.np" className="hover:underline">
                clublict@lict.edu.np
              </a>
            </div>
          </div>
          <p className="text-sm mt-4">
            Organized by: Lumbini ICT Campus & Lumbini ICT Club
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <ul className="text-sm space-y-2">
            <li><a href="#about" className="hover:underline">About</a></li>
            <li><a href="#timeline" className="hover:underline">Timeline</a></li>
            <li><a href="#prizes" className="hover:underline">Prizes</a></li>
            <li><a href="#team" className="hover:underline">Team</a></li>
            <li><a href="#sponsors" className="hover:underline">Sponsors</a></li>
            <li><a href="#contact" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">Connect With Us</h3>
          <div className="flex items-center gap-2 text-sm">
            <MdPhone className="text-lg" />
            <span>9843136661</span>
          </div>
          <div className="flex items-center gap-2 mt-2 text-sm">
            <MdEmail className="text-lg" />
            <a href="mailto:clublict@lict.edu.np" className="hover:underline">
              clublict@lict.edu.np
            </a>
          </div>
          <div className="flex gap-4 mt-4 text-xl">
            <a
              href="https://www.facebook.com/LumbiniICTClub/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF className="hover:text-white cursor-pointer" />
            </a>
            <a
              href="https://www.instagram.com/lumbiniictclub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="hover:text-white cursor-pointer" />
            </a>
          </div>
        </div>

        <div className="w-full h-full">
          <iframe
            title="Lumbini ICT Campus Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.385157574521!2d84.40377637432178!3d27.70539197618373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3994fb6fdfd935ed%3A0x29e6424f203a7aec!2sLUMBINI%20ICT%20CAMPUS!5e0!3m2!1sen!2snp!4v1754578691727!5m2!1sen!2snp"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </footer>
  );
}
