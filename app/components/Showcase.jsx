'use client';

import { useRef, useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

/* Tiga kartu ini dulu memanggil tiga berkas foto di public/images, padahal folder itu
   kosong sama sekali — jadi ketiganya selalu gagal dimuat.
   Diganti ilustrasi SVG sebaris: tidak menambah unduhan, ikut warna neumorfis,
   dan tetap tajam di layar mana pun. */

function IlustrasiSimulasi() {
  return (
    <svg viewBox="0 0 320 180" className="h-full w-full" role="img" aria-label="Panel simulasi berlapis dengan penunjuk">
      <rect x="34" y="26" width="200" height="118" rx="12" className="fill-surface-raised" />
      <rect x="52" y="42" width="200" height="118" rx="12" className="fill-surface" stroke="#bebebe" strokeWidth="1.5" />
      <rect x="68" y="60" width="86" height="8" rx="4" className="fill-shade" />
      <rect x="68" y="78" width="128" height="8" rx="4" className="fill-shade" opacity="0.6" />
      <rect x="68" y="100" width="58" height="26" rx="8" fill="#6366f1" />
      <circle cx="214" cy="126" r="15" className="fill-surface-raised" stroke="#bebebe" strokeWidth="1.5" />
      <path d="M208 120l14 7-6 2-2 6-6-15z" fill="#3f3f46" />
    </svg>
  );
}

function IlustrasiGame() {
  return (
    <svg viewBox="0 0 320 180" className="h-full w-full" role="img" aria-label="Lencana permainan dengan bintang dan poin">
      <rect x="70" y="44" width="180" height="92" rx="26" className="fill-surface-raised" stroke="#bebebe" strokeWidth="1.5" />
      <circle cx="112" cy="90" r="7" className="fill-shade" />
      <circle cx="132" cy="72" r="7" className="fill-shade" />
      <circle cx="132" cy="108" r="7" className="fill-shade" />
      <circle cx="152" cy="90" r="7" className="fill-shade" />
      <circle cx="206" cy="80" r="11" fill="#6366f1" />
      <circle cx="228" cy="102" r="11" fill="#6366f1" opacity="0.45" />
      <path d="M160 20l5.2 10.6 11.7 1.7-8.5 8.2 2 11.6-10.4-5.5-10.4 5.5 2-11.6-8.5-8.2 11.7-1.7z" fill="#6366f1" />
    </svg>
  );
}

function IlustrasiNyata() {
  return (
    <svg viewBox="0 0 320 180" className="h-full w-full" role="img" aria-label="Ponsel menampilkan lapisan digital di atas pemandangan">
      <path d="M28 138c26-34 44-14 66-38s40-40 62-16 34 44 60 24 40-6 52 6v34H28z" className="fill-shade" opacity="0.5" />
      <rect x="120" y="30" width="80" height="128" rx="14" className="fill-surface-raised" stroke="#bebebe" strokeWidth="1.5" />
      <rect x="132" y="46" width="56" height="86" rx="8" className="fill-surface-sunken" />
      <circle cx="160" cy="74" r="14" fill="#6366f1" opacity="0.75" />
      <rect x="142" y="98" width="36" height="6" rx="3" className="fill-shade" />
      <rect x="142" y="110" width="24" height="6" rx="3" className="fill-shade" opacity="0.6" />
      <circle cx="160" cy="146" r="4" className="fill-shade" />
    </svg>
  );
}

const showcases = [
  {
    title: 'Simulasi Interaktif',
    Ilustrasi: IlustrasiSimulasi,
    desc: 'Rasakan pengalaman belajar melalui interaksi nyata dalam simulasi digital.',
  },
  {
    title: 'Game Edukatif',
    Ilustrasi: IlustrasiGame,
    desc: 'Pelajari hal baru dengan pendekatan menyenangkan dan kompetitif.',
  },
  {
    title: 'Pengalaman Nyata',
    Ilustrasi: IlustrasiNyata,
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
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
      }}
      className="bg-surface px-6 py-20"
    >
      <div className="mx-auto max-w-6xl text-center">
        <h2 className="mb-12 text-3xl font-bold text-zinc-700">Tampilan Aplikasi</h2>

        <div className="grid gap-8 md:grid-cols-3">
          {showcases.map(({ title, desc, Ilustrasi }) => (
            <div key={title} className="neu-raised rounded-3xl p-5">
              <div className="neu-sunken mb-5 aspect-video overflow-hidden rounded-2xl p-3">
                <Ilustrasi />
              </div>
              <h3 className="text-lg font-bold text-zinc-700">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-500">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
