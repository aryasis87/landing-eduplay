import Link from 'next/link';
import { SITE } from '@/lib/eduplay';
import TemanSepuluh from '../components/TemanSepuluh';
import Timbangan from '../components/Timbangan';

export const metadata = {
  title: 'Coba Main',
  description: 'Mainkan dua permainan EduPlay langsung di peramban: Teman Sepuluh (pasangan bilangan 10, kelas 1) dan Timbangan (penjumlahan sampai 100, kelas 2).',
  alternates: { canonical: `${SITE}/main` },
};

export default function Main() {
  return (
    <main className="confetti-dots px-6 pt-32 pb-24">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-bold text-brand-ink">Coba main · tanpa unduh, tanpa daftar</p>
        <h1 className="mt-3 max-w-3xl text-[2.8rem] leading-[1.02] font-extrabold text-ink md:text-6xl">Dua permainan, dua pulau</h1>
        <p className="mt-5 max-w-xl text-lg leading-relaxed">Versi peramban ini tidak menyimpan apa pun. Di aplikasi, setiap jawaban masuk ke laporan mingguan orang tua.</p>

        <div className="mt-14 grid gap-10 lg:grid-cols-2">
          <section aria-labelledby="ts">
            <h2 id="ts" className="text-2xl font-extrabold text-ink">Pulau Teman Sepuluh <span className="text-base font-semibold text-ink-2">· kelas 1</span></h2>
            <p className="mt-2 mb-6 leading-relaxed">Ketuk dua ubin yang jumlahnya 10. Ketuk ubin yang sama untuk membatalkan.</p>
            <TemanSepuluh />
          </section>
          <section aria-labelledby="tb">
            <h2 id="tb" className="text-2xl font-extrabold text-ink">Pulau Timbangan <span className="text-base font-semibold text-ink-2">· kelas 2</span></h2>
            <p className="mt-2 mb-6 leading-relaxed">Pilih bilangan untuk piring kiri sampai timbangannya seimbang.</p>
            <Timbangan />
          </section>
        </div>

        <div className="neu-sunken mt-16 flex flex-col items-start justify-between gap-6 rounded-[2rem] p-8 sm:flex-row sm:items-center">
          <p className="max-w-xl text-lg leading-relaxed text-ink">Sepuluh pulau lainnya — dari jam bangun pagi sampai potong martabak — ada di aplikasi.</p>
          <Link href="/kurikulum" className="shrink-0 rounded-full bg-brand-ink px-7 py-4 font-semibold text-white hover:bg-ink">Lihat semua pulau</Link>
        </div>
      </div>
    </main>
  );
}
