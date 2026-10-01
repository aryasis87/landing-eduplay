import Link from 'next/link';
import { KELAS, PULAU, SITE } from '@/lib/eduplay';

export const metadata = {
  title: 'Kurikulum 12 Pulau',
  description: 'Dua belas pulau EduPlay untuk kelas 1–3 SD: topik, nama permainan, dan contoh soal — dari pasangan sepuluh sampai pecahan dan piktogram.',
  alternates: { canonical: `${SITE}/kurikulum` },
};

const BISA_DICOBA = { 'teman-sepuluh': true, timbangan: true };

export default function Kurikulum() {
  return (
    <main className="px-6 pt-32 pb-24">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-bold text-brand-ink">Kurikulum</p>
        <h1 className="mt-3 max-w-3xl text-[2.8rem] leading-[1.02] font-extrabold text-ink md:text-6xl">Dua belas pulau, satu permainan di tiap pulau</h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed">Pulau disusun mengikuti capaian pembelajaran matematika Fase A (kelas 1–2) dan Fase B (kelas 3). Anak membuka pulau berikutnya setelah menjawab benar 8 dari 10 soal tiga hari berturut-turut.</p>

        <nav aria-label="Lompat ke kelas" className="mt-8 flex flex-wrap gap-3">
          {KELAS.map((k) => <a key={k.no} href={`#kelas-${k.no}`} className="neu-raised rounded-full px-5 py-2.5 font-semibold text-ink hover:text-brand-ink">Kelas {k.no}</a>)}
        </nav>

        {KELAS.map((k) => (
          <section key={k.no} id={`kelas-${k.no}`} aria-labelledby={`h-${k.no}`} className="mt-16 scroll-mt-24">
            <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
              <h2 id={`h-${k.no}`} className="text-4xl font-extrabold text-ink">Kelas {k.no}</h2>
              <p className="font-semibold">{k.fase} · {k.ket}</p>
            </div>
            <ol className="mt-8 grid gap-6 md:grid-cols-2">
              {PULAU.filter((p) => p.kelas === k.no).map((p, i) => (
                <li key={p.slug} className="neu-raised flex flex-col rounded-[2rem] p-7">
                  <p className="flex items-center justify-between gap-4">
                    <span className="neu-sunken grid h-11 w-11 place-items-center rounded-full font-[family-name:var(--font-baloo)] text-xl font-extrabold text-brand-ink">{i + 1}</span>
                    <span className="text-sm font-semibold">Permainan: {p.main}</span>
                  </p>
                  <h3 className="mt-5 text-2xl font-extrabold text-ink">{p.nama}</h3>
                  <p className="mt-1 leading-relaxed">{p.topik}</p>
                  <p className="neu-sunken mt-5 rounded-2xl px-5 py-4 font-[family-name:var(--font-baloo)] text-lg font-semibold text-ink">
                    <span className="block text-xs font-bold tracking-wide text-ink-2 uppercase">Contoh soal</span>
                    {p.soal}
                  </p>
                  {BISA_DICOBA[p.slug] && <Link href="/main" className="mt-5 self-start text-sm font-bold text-brand-ink underline underline-offset-4 hover:text-ink">Coba main di peramban →</Link>}
                </li>
              ))}
            </ol>
          </section>
        ))}
      </div>
    </main>
  );
}
