'use client';

import { useRef, useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import Image from 'next/image';

const showcases = [
  {
    title: 'Simulasi Interaktif',
    image: '/images/showcase1.jpg',
    desc: 'Rasakan pengalaman belajar melalui interaksi nyata dalam simulasi digital.',
  },
  {
    title: 'Game Edukatif',
    image: '/images/showcase2.jpg',
    desc: 'Pelajari hal baru dengan pendekatan menyenangkan dan kompetitif.',
  },
  {
    title: 'Pengalaman Nyata',
    image: '/images/showcase3.jpg',
    desc: 'Gabungkan dunia nyata dengan dunia digital dalam satu platform.',
  },
];

export default function Showcase() {
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
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12 text-gray-800">Tampilan Aplikasi</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {showcases.map((item, idx) => (
            <div
              key={idx}
              className="rounded-3xl border border-gray-300 bg-[#f0f0f0] p-4 shadow-inner hover:shadow-md transition"
            >
              <div className="overflow-hidden rounded-xl mb-4 aspect-video">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={600}
                  height={400}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
              <p className="text-gray-600 mt-2 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
