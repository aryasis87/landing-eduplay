'use client';

import { useRef, useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { FaStar } from 'react-icons/fa';

const testimonials = [
  {
    name: 'Ayu Ramadhani',
    comment: 'Aplikasi ini benar-benar mengubah cara belajar anak saya. Sangat menyenangkan dan edukatif!',
  },
  {
    name: 'Dimas Arif',
    comment: 'Pengalaman pengguna yang luar biasa. Interaksi terasa nyata dan sangat menarik!',
  },
  {
    name: 'Sari Pramesti',
    comment: 'Integrasi antara simulasi dan edukasi berjalan dengan sangat mulus. Highly recommended!',
  },
];

export default function SocialProof() {
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
        hidden: { opacity: 0, y: 60 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.8 },
        },
      }}
      className="py-20 px-6 bg-[#e0e0e0]"
    >
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12 text-gray-800">Apa Kata Mereka?</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#f0f0f0] p-6 rounded-3xl border border-gray-300 shadow-inner hover:shadow-md transition text-left"
            >
              <div className="flex items-center mb-4 text-yellow-500">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
              <p className="text-gray-600 mb-4 text-sm">"{item.comment}"</p>
              <p className="text-gray-800 font-semibold text-sm">— {item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
