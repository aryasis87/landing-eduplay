'use client';

import { useRef, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'framer-motion';
import { FaEnvelopeOpenText } from 'react-icons/fa';

export default function Contact() {
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
      <div className="max-w-3xl mx-auto bg-[#f0f0f0] rounded-3xl border border-gray-300 shadow-inner p-8">
        <div className="flex items-center justify-center mb-6">
          <FaEnvelopeOpenText className="text-indigo-600 text-4xl mr-2" />
          <h2 className="text-3xl font-bold">Hubungi Kami</h2>
        </div>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Nama Anda"
            className="w-full p-4 rounded-xl bg-[#e0e0e0] border border-gray-300 shadow-inner focus:outline-none focus:ring-2 focus:ring-indigo-300"
            required
          />
          <input
            type="email"
            placeholder="Email Anda"
            className="w-full p-4 rounded-xl bg-[#e0e0e0] border border-gray-300 shadow-inner focus:outline-none focus:ring-2 focus:ring-indigo-300"
            required
          />
          <textarea
            placeholder="Pesan"
            rows={4}
            className="w-full p-4 rounded-xl bg-[#e0e0e0] border border-gray-300 shadow-inner focus:outline-none focus:ring-2 focus:ring-indigo-300"
            required
          ></textarea>
          <button
            type="submit"
            className="bg-[#dcdcdc] border border-gray-400 py-3 px-6 rounded-xl font-semibold shadow-[inset_4px_4px_10px_#bebebe,inset_-4px_-4px_10px_#ffffff] hover:shadow-[inset_-2px_-2px_5px_#ffffff,inset_2px_2px_5px_#bebebe] transition"
          >
            Kirim Pesan
          </button>
        </form>
      </div>
    </motion.section>
  );
}
