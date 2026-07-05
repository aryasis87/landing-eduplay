'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'framer-motion';
import { FaGamepad } from 'react-icons/fa';

export default function CTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const controls = useAnimation();
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      controls.start('visible');
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated, controls]);

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
          transition: { duration: 0.8, ease: 'easeOut' },
        },
      }}
      className="py-20 px-6 bg-[#e0e0e0] flex flex-col items-center"
    >
      <div className="w-full max-w-4xl bg-[#f0f0f0] rounded-3xl border border-gray-300 shadow-inner p-8 md:p-12 relative">
        <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-[#f0f0f0] rounded-full p-4 shadow-[4px_4px_10px_#bebebe,-4px_-4px_10px_#ffffff]">
          <FaGamepad className="text-4xl text-indigo-600 drop-shadow" />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-center mt-12 mb-4 text-gray-800">
          Rasakan Pengalaman Nyata
        </h2>
        <p className="text-center text-gray-600 text-lg md:text-xl max-w-2xl mx-auto mb-8">
          Mulai petualangan seru dan edukatif yang merefleksikan dunia nyata. Cocok untuk gamer, pelajar, dan pengguna aplikasi imersif.
        </p>
        <div className="flex justify-center">
          <a
            href="https://wa.me/6281339908765?text=Halo%2C%20saya%20mau%20pesan%20EduPlay" target="_blank" rel="noopener noreferrer"
            className="bg-[#dcdcdc] border border-gray-400 py-3 px-8 rounded-xl text-lg font-semibold shadow-[inset_4px_4px_10px_#bebebe,inset_-4px_-4px_10px_#ffffff] hover:shadow-[inset_-2px_-2px_5px_#ffffff,inset_2px_2px_5px_#bebebe] transition"
          >
            Coba Sekarang
          </a>
        </div>
      </div>
    </motion.section>
  );
}
