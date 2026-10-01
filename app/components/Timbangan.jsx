'use client';

import { useState } from 'react';
import { SOAL_TIMBANGAN as SOAL } from '@/lib/eduplay';

export default function Timbangan() {
  const [i, setI] = useState(0);
  const [x, setX] = useState(null);
  const s = SOAL[i];
  const kiri = s.a + (x ?? 0);
  const imbang = kiri === s.c;
  // Sisi yang lebih berat turun; sudut dibatasi agar piring tetap di bidang gambar.
  const sudut = Math.max(-14, Math.min(14, (s.c - kiri) * 2));

  const pesan = x === null ? `${s.a} + ? harus sama berat dengan ${s.c}.` : imbang ? `Seimbang! ${s.a} + ${x} = ${s.c}` : kiri < s.c ? `${s.a} + ${x} = ${kiri}, masih lebih ringan.` : `${s.a} + ${x} = ${kiri}, terlalu berat.`;

  return (
    <div className="neu-raised rounded-[2rem] p-5 sm:p-8">
      <div className="flex items-center justify-between gap-4">
        <p className="font-[family-name:var(--font-baloo)] text-xl font-bold text-ink">Timbangan</p>
        <p className="neu-sunken rounded-full px-4 py-1.5 text-sm font-semibold text-ink">Soal {i + 1}/{SOAL.length}</p>
      </div>
      <p role="status" className={`mt-4 font-[family-name:var(--font-baloo)] text-lg font-semibold ${x === null ? 'text-ink-2' : imbang ? 'text-pas' : 'text-meleset'}`}>{pesan}</p>

      <svg viewBox="0 0 320 210" className="mt-4 h-auto w-full" aria-hidden="true">
        <path d="M160 70 L140 190 H180 Z" fill="#d4d4d8" />
        <rect x="110" y="188" width="100" height="10" rx="5" fill="#a1a1aa" />
        {/* Lengan diputar dengan CSS transform supaya miringnya beranimasi; piring diputar balik agar tetap tegak. */}
        <g style={{ transform: `rotate(${sudut}deg)`, transformOrigin: '160px 70px', transition: 'transform 0.5s ease' }}>
          <line x1="50" y1="70" x2="270" y2="70" stroke="#52525b" strokeWidth="6" strokeLinecap="round" />
          {[[50, `${s.a} + ${x ?? '?'}`], [270, String(s.c)]].map(([px, t]) => (
            <g key={px} style={{ transform: `rotate(${-sudut}deg)`, transformOrigin: `${px}px 70px`, transition: 'transform 0.5s ease' }}>
              <line x1={px} y1="70" x2={px - 30} y2="120" stroke="#a1a1aa" strokeWidth="2" />
              <line x1={px} y1="70" x2={px + 30} y2="120" stroke="#a1a1aa" strokeWidth="2" />
              <path d={`M${px - 42} 120 H${px + 42} Q${px} 148 ${px - 42} 120 Z`} fill="#e4e4e7" stroke="#a1a1aa" strokeWidth="1.5" />
              <rect x={px - 34} y="92" width="68" height="28" rx="8" fill="#f4f4f5" stroke="#a1a1aa" strokeWidth="1.5" />
              <text x={px} y="112" textAnchor="middle" fontSize="18" fontWeight="800" fill="#27272a" style={{ fontFamily: 'var(--font-baloo)' }}>{t}</text>
            </g>
          ))}
        </g>
        <circle cx="160" cy="70" r="8" fill="#4338ca" />
      </svg>

      <div role="group" aria-label="Pilih bilangan untuk piring kiri" className="mt-4 grid grid-cols-3 gap-3 sm:gap-5">
        {s.pilihan.map((n) => (
          <button key={n} type="button" aria-pressed={x === n} disabled={imbang} onClick={() => setX(n)} className={`rounded-2xl py-4 font-[family-name:var(--font-baloo)] text-3xl font-extrabold ${x === n ? 'neu-sunken text-brand-ink ring-2 ring-brand-ink' : 'neu-raised text-ink hover:text-brand-ink'} disabled:cursor-default`}>
            {n}
          </button>
        ))}
      </div>
      {imbang && (
        <button type="button" onClick={() => { setI((i + 1) % SOAL.length); setX(null); }} className="mt-6 w-full rounded-full bg-brand-ink py-3.5 font-semibold text-white hover:bg-ink">
          {i + 1 < SOAL.length ? 'Soal berikutnya' : 'Ulangi dari soal pertama'}
        </button>
      )}
    </div>
  );
}
