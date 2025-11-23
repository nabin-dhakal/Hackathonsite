import React from "react";
import { Calendar, Clock } from "lucide-react";
import { motion } from 'framer-motion';
import { title } from "framer-motion/client";

const schedule = [
  { time: "7:00 AM", title: "Breakfast" },
  { time: "10:00 AM", title: "Project Submission" },
  { time: "10:00 AM - 11:00 AM", title: "Break" },
  { time: "11:00 AM - 03:00 PM", title: "Project Demonstration" },
  { time : "03:00 PM", title:"Result Announcement"},
];

export default function DayThreeSchedule() {
  return (
    <motion.section
      id="about"
      className="py-16 px-4  text-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay:0.4 }}
    >
    <div className="bg-white shadow-md rounded-xl p-6 max-w-4xl mx-auto mb-10">
      <div className="flex items-center justify-center space-x-3 text-blue-600 mb-4">
        <Calendar className="w-6 h-6" />
        <div>
          <h2 className="text-xl font-semibold">Day 3</h2>
          <p className="text-sm text-gray-600">18th Bhadra, 2082</p>
          <p className="text-sm text-gray-500">Presentation and Closing Ceremony</p>
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
