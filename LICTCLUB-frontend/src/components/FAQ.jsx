// src/components/FAQ.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const questions = [
  { q: 'Who can participate?', a: 'Any team interested in tech & innovation studying in a ICT campus.' },
  { q: 'Where does it take place?', a: 'At Lumbini ICT Campus, Kali-Gandaki Chowk, Gaindakot, Nawalpur.' },
  { q: 'Is there a registration fee?', a: 'Yes, the entry fee is Rs.500 per member.' },
  { q: 'How can I register?', a: 'Use the registration form above or the Register button.' },
  { q: 'Do I need to have team before registering?', a: 'Yes, a team is essential. You can check that on our registration form.' },
  { q: 'How long is the event?', a: "It's going to be held for three days, total of 60 hours." },
  { q: 'Food and Acommodation?', a: "Will be taken care at the event." },
  { q: 'Will the registration fee be refunded if not selected?', a : 'Yes, The amount will be fully refunded if you\'re not selected after filling the registration form.'}
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="scroll-mt-20 py-16 px-4">
      <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
      <div className="max-w-3xl mx-auto">
        {questions.map((qa, idx) => (
          <div key={idx} className="mb-4 border-b border-gray-300">
            <button
              onClick={() => toggle(idx)}
              className="w-full text-left font-semibold py-3 flex justify-between items-center focus:outline-none"
              aria-expanded={openIndex === idx}
              aria-controls={`faq-panel-${idx}`}
            >
              {qa.q}
              <span>{openIndex === idx ? '−' : '+'}</span>
            </button>
            <AnimatePresence>
              {openIndex === idx && (
                <motion.div
                  id={`faq-panel-${idx}`}
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden text-gray-700 pb-4"
                >
                  {qa.a}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}
