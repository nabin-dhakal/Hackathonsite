import React from "react";
import { Calendar, Clock } from "lucide-react";
import { motion } from 'framer-motion';
const schedule = [
  { time: "7:00 AM", title: "Breakfast" },
  { time: "10:00 AM", title: "Lunch" },
  { time: "2:00 PM", title: "Snacks" },
  { time: "10:00 AM - 05:00 PM", title: "Mentors visit" },
  {time : "08:00 PM - 08:30 PM", title: "Dinner"},
  
];

export default function DayTwoSchedule() {
  return (
    <motion.section
      id="about"
      className="py-16 px-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay:0.4 }}
    >
    <div className="bg-white shadow-md rounded-xl p-6 max-w-4xl mx-auto mb-10">
      <div className="flex items-center justify-center space-x-3 text-blue-600 mb-4">
        <Calendar className="w-6 h-6" />
        <div>
          <h2 className="text-xl font-semibold">Day 2</h2>
          <p className="text-sm text-gray-600">17th Bhadra, 2082</p>
          <p className="text-sm text-gray-500">Full-Day Hackathon Session</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4 mt-4 ">
        {schedule.map((item, idx) => (
          <div
            key={idx}
            className="bg-gray-50 border border-gray-200 rounded-lg p-4 flex items-start space-x-3"
          >
            <Clock className="text-blue-600 w-5 h-5 mt-1" />
            <div>
              <p className="text-xs font-medium text-blue-600">{item.time}</p>
              <p className="text-sm font-semibold text-gray-800 mt-1">
                {item.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </motion.section>
  );
}
