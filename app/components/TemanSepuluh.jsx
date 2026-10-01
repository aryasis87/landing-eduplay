'use client';

import { useState } from 'react';

// Susunan awal tetap (aman untuk hidrasi); "Main lagi" mengacak pasangan baru.
const AWAL = [7, 2, 9, 4, 3, 8, 6, 1];
const ubin = (angka) => angka.map((n, i) => ({ id: i, n, selesai: false }));

function acak() {
  const pasangan = Array.from({ length: 4 }, () => 1 + Math.floor(Math.random() * 9)).flatMap((a) => [a, 10 - a]);
  for (let i = pasangan.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [pasangan[i], pasangan[j]] = [pasangan[j], pasangan[i]];
  }
  return pasangan;
}

export default function TemanSepuluh({ ringkas = false }) {
  const [daftar, setDaftar] = useState(() => ubin(AWAL));
  const [pilih, setPilih] = useState(null);
  const [pesan, setPesan] = useState('Pilih dua ubin yang jumlahnya 10.');
  const [benar, setBenar] = useState(null);

  const ketemu = daftar.filter((u) => u.selesai).length / 2;
  const tamat = ketemu === daftar.length / 2;

  const tekan = (u) => {
    if (u.selesai) return;
    if (pilih === null) { setPilih(u.id); setBenar(null); setPesan(`${u.n} … berteman dengan berapa?`); return; }
    if (pilih === u.id) { setPilih(null); setPesan('Pilih dua ubin yang jumlahnya 10.'); return; }
    const a = daftar[pilih].n;
    const jumlah = a + u.n;
    if (jumlah === 10) {
      const baru = daftar.map((x) => (x.id === u.id || x.id === pilih ? { ...x, selesai: true } : x));
      setDaftar(baru);
      setBenar(true);
      setPesan(baru.every((x) => x.selesai) ? 'Semua pasangan ketemu! Hebat.' : `Pas! ${a} + ${u.n} = 10`);
    } else {
      setBenar(false);
      setPesan(`${a} + ${u.n} = ${jumlah}. Belum 10, coba lagi.`);
    }
    setPilih(null);
  };

  const mainLagi = () => { setDaftar(ubin(acak())); setPilih(null); setBenar(null); setPesan('Pilih dua ubin yang jumlahnya 10.'); };

  return (
    <div className="neu-raised rounded-[2rem] p-5 sm:p-8">
      <div className="flex items-center justify-between gap-4">
        <p className="font-[family-name:var(--font-baloo)] text-xl font-bold text-ink">Teman Sepuluh</p>
        <p className="neu-sunken rounded-full px-4 py-1.5 text-sm font-semibold text-ink">{ketemu}/{daftar.length / 2} pasangan</p>
      </div>
      <p role="status" className={`mt-4 min-h-[3.5rem] font-[family-name:var(--font-baloo)] text-lg font-semibold sm:min-h-0 ${benar === true ? 'text-pas' : benar === false ? 'text-meleset' : 'text-ink-2'}`}>{pesan}</p>
      <div className={`mt-4 grid grid-cols-4 ${ringkas ? 'gap-3' : 'gap-3 sm:gap-5'}`}>
        {daftar.map((u) => (
          <button
            key={u.id}
            type="button"
            onClick={() => tekan(u)}
            disabled={u.selesai}
            aria-pressed={pilih === u.id}
            aria-label={u.selesai ? `Ubin ${u.n}, sudah berpasangan` : `Ubin ${u.n}`}
            className={`aspect-square rounded-2xl font-[family-name:var(--font-baloo)] text-3xl font-extrabold transition-shadow sm:text-4xl ${
              u.selesai ? 'neu-sunken text-ink-2/50' : pilih === u.id ? 'neu-sunken text-brand-ink ring-2 ring-brand-ink' : 'neu-raised text-ink hover:text-brand-ink'
            }`}
          >
            {u.selesai ? '✓' : u.n}
          </button>
        ))}
      </div>
      {tamat && (
        <button type="button" onClick={mainLagi} className="mt-6 w-full rounded-full bg-brand-ink py-3.5 font-semibold text-white hover:bg-ink">Main lagi dengan angka baru</button>
      )}
    </div>
  );
}
