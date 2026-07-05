'use client';

import { useRef, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'framer-motion';
import { FaBookOpen, FaPuzzlePiece, FaRocket } from 'react-icons/fa';

const features = [
  {
    icon: <FaBookOpen className="text-indigo-600 text-3xl" />,
    title: 'Konten Edukatif',
    desc: 'Materi yang disusun dengan pendekatan interaktif dan menyenangkan.',
  },
  {
    icon: <FaPuzzlePiece className="text-indigo-600 text-3xl" />,
    title: 'Interaktif & Imersif',
    desc: 'Simulasi nyata dan pengalaman pengguna yang terasa alami.',
  },
  {
    icon: <FaRocket className="text-indigo-600 text-3xl" />,
    title: 'Siap Digunakan',
    desc: 'Instalasi cepat dan siap digunakan kapan saja di berbagai platform.',
  },
];

export default function KeyFeatures() {
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
      className="py-20 px-6 bg-[#e0e0e0]"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12 text-gray-800">Fitur Unggulan</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-[#f0f0f0] p-6 rounded-3xl border border-gray-300 shadow-inner hover:shadow-md transition"
            >
              <div className="mb-4 flex justify-center">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{feature.title}</h3>
              <p className="text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
