'use client';

import { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

export default function Hero() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
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
        hidden: { opacity: 0, y: 40 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.8 },
        },
      }}
      className="relative overflow-hidden bg-[#e0e0e0] py-24 px-6 text-center"
    >
      {/* Animated Shapes */}
      <motion.div
        className="absolute top-[-40px] left-[-40px] w-32 h-32 bg-indigo-300 opacity-40 rounded-full shadow-xl"
        animate={{ y: [0, 20, 0], x: [0, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-[-60px] right-[-60px] w-48 h-48 bg-pink-200 opacity-30 rounded-full shadow-xl"
        animate={{ x: [0, -15, 0], y: [0, 15, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute top-1/3 left-[45%] w-24 h-24 bg-blue-200 opacity-20 rotate-45 shadow-xl rounded-xl"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 5, repeat: Infinity }}
      />

      {/* Hero Content */}
      <div className="relative z-10 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
          Aplikasi Edukasi & Game Imersif
        </h1>
        <p className="text-gray-600 mb-8 text-lg max-w-xl mx-auto">
          Belajar sambil bermain dalam dunia interaktif yang dirancang untuk pengalaman nyata.
        </p>
        <a
          href="#contact"
          className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-full shadow-lg transition"
        >
          Mulai Sekarang
        </a>
      </div>
    </motion.section>
  );
}
