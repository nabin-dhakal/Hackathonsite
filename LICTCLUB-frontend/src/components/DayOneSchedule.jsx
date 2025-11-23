import React from "react";
import { Calendar, Clock } from "lucide-react";
import { motion } from 'framer-motion';

const schedule = [
  { time: "7:00 AM - 8:30 AM", title: "Participant Registration" },
  { time: "7:00 AM - 8:30 AM", title: "High Tea and Buffer Time" },
  { time: "8:30 AM - 9:30 AM", title: "Opening Ceremony" },
  { time: "9:30 AM - 10:00 AM", title: "Break" },
  { time: "10:00 AM Upward", title: "Hackathon Session" },
  { time:"2:00 PM - 5:00 PM", title: "Mentors visit"},
  { time:"3:00 PM", title: "Snack"},
  { time: "8:00 PM", title : "Dinner"}
];

export default function DayOneSchedule() {
  return (
    <motion.section
      id="about"
      className="py-16 px-4  text-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay:0.4 }}
    >
    <div className="bg-gray-200 shadow-md rounded-xl p-6 max-w-4xl mx-auto mb-10">
      <div className="flex items-center justify-center space-x-3 text-blue-600 mb-4">
        <Calendar className="w-6 h-6" />
        <div className="">
          <h2 className="text-xl font-semibold">Day 1</h2>
          <p className="text-sm text-gray-600">16th Bhadra, 2082</p>
          <p className="text-sm text-gray-500">Opening and Start of Hackathon</p>
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
