'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'framer-motion';
import { FaQuestionCircle } from 'react-icons/fa';

const faqs = [
  {
    question: 'Apa aplikasi ini cocok untuk anak-anak?',
    answer: 'Ya, kami menyediakan konten edukatif yang aman dan menyenangkan untuk semua usia.',
  },
  {
    question: 'Apakah aplikasi ini bisa offline?',
    answer: 'Beberapa fitur dapat digunakan offline, namun pengalaman penuh memerlukan koneksi internet.',
  },
  {
    question: 'Bagaimana cara memulai?',
    answer: 'Cukup klik tombol "Coba Sekarang" dan ikuti panduan instalasi aplikasi.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) controls.start('visible');
  }, [isInView, controls]);

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.8 },
        },
      }}
      className="py-20 px-6 bg-[#e0e0e0] text-gray-800"
    >
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-center mb-8">
          <FaQuestionCircle className="text-indigo-600 text-4xl mr-2" />
          <h2 className="text-3xl font-bold">Pertanyaan Umum</h2>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-[#f0f0f0] border border-gray-300 rounded-xl p-5 shadow-inner cursor-pointer"
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
            >
              <h3 className="font-semibold text-lg flex justify-between items-center">
                {faq.question}
                <span>{openIndex === idx ? '−' : '+'}</span>
              </h3>
              {openIndex === idx && (
                <p className="mt-2 text-gray-600 transition-all">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
