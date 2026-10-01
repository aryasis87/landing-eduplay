import Link from 'next/link';
import { FAQ as DAFTAR, HARGA, KELAS, LAPORAN, PRINSIP, PULAU, rp } from '@/lib/eduplay';
import TemanSepuluh from './TemanSepuluh';

export function Hero() {
  return (
    <section className="confetti-dots px-6 pt-28 pb-20 md:pt-36 md:pb-28">
      <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
        <div>
          <p className="neu-raised inline-flex rounded-full px-4 py-2 text-sm font-semibold text-brand-ink">Untuk kelas 1–3 SD</p>
          <h1 className="mt-6 text-[2.9rem] leading-[1.02] font-extrabold text-ink sm:text-6xl">Matematika SD, sepuluh menit sehari.</h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed">
            EduPlay mengubah latihan berhitung menjadi permainan pendek yang berhenti sendiri setelah sepuluh menit. Tanpa iklan, tanpa chat, dan bisa dimainkan tanpa internet.
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Link href="#main" className="inline-flex justify-center rounded-full bg-brand-ink px-7 py-4 font-semibold text-white hover:bg-ink">Main satu ronde sekarang</Link>
            <Link href="/kurikulum" className="neu-raised inline-flex justify-center rounded-full px-7 py-4 font-semibold text-ink hover:text-brand-ink">Lihat 12 pulau</Link>
          </div>
        </div>
        <div aria-hidden="true" className="neu-raised mx-auto w-full max-w-sm rounded-[2.5rem] p-4">
          <div className="neu-sunken rounded-[2rem] p-5">
            <div className="flex items-center justify-between text-sm font-semibold text-ink">
              <span>Pulau Teman Sepuluh</span>
              <span className="neu-raised rounded-full px-3 py-1">7:42</span>
            </div>
            <p className="mt-6 text-center font-[family-name:var(--font-baloo)] text-lg font-semibold">3 berteman dengan…</p>
            <div className="mt-4 grid grid-cols-3 gap-3">
              {[6, 7, 8].map((n) => (
                <span key={n} className={`grid aspect-square place-items-center rounded-2xl font-[family-name:var(--font-baloo)] text-3xl font-extrabold ${n === 7 ? 'neu-sunken text-brand-ink ring-2 ring-brand-ink' : 'neu-raised text-ink'}`}>{n}</span>
              ))}
            </div>
            <div className="mt-6 flex gap-1.5">
              {Array.from({ length: 10 }, (_, i) => <span key={i} className={`h-2 flex-1 rounded-full ${i < 7 ? 'bg-brand' : 'bg-shade'}`} />)}
            </div>
            <p className="mt-2 text-center text-xs">7 dari 10 soal hari ini</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function MainSatu() {
  return (
    <section id="main" className="scroll-mt-20 px-6 py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
        <div>
          <p className="text-sm font-bold text-brand-ink">Coba sekarang · tanpa unduh</p>
          <h2 className="mt-3 text-[2.4rem] leading-[1.05] font-extrabold text-ink md:text-5xl">Satu ronde Teman Sepuluh</h2>
          <p className="mt-5 max-w-md text-lg leading-relaxed">Pasangkan dua ubin yang jumlahnya sepuluh. Permainan ini dari Pulau Teman Sepuluh, kelas 1 — dasar untuk menjumlah lewat sepuluh di kelas 2.</p>
          <Link href="/main" className="mt-6 inline-block text-sm font-bold text-brand-ink underline underline-offset-4 hover:text-ink">Coba juga permainan Timbangan →</Link>
        </div>
        <TemanSepuluh />
      </div>
    </section>
  );
}

export function PulauTeaser() {
  return (
    <section className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-bold text-brand-ink">Kurikulum</p>
        <h2 className="mt-3 max-w-2xl text-[2.4rem] leading-[1.05] font-extrabold text-ink md:text-5xl">Dua belas pulau, empat untuk tiap kelas</h2>
        <ul className="mt-12 grid gap-8 md:grid-cols-3">
          {KELAS.map((k) => (
            <li key={k.no} className="neu-raised rounded-[2rem] p-7">
              <p className="flex items-baseline justify-between">
                <span className="font-[family-name:var(--font-baloo)] text-3xl font-extrabold text-ink">Kelas {k.no}</span>
                <span className="text-sm font-semibold">{k.fase}</span>
              </p>
              <ul className="mt-5 space-y-3">
                {PULAU.filter((p) => p.kelas === k.no).map((p) => (
                  <li key={p.slug} className="neu-sunken rounded-2xl px-4 py-3">
                    <span className="block font-semibold text-ink">{p.nama}</span>
                    <span className="text-sm">{p.topik}</span>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
        <Link href="/kurikulum" className="neu-raised mt-10 inline-flex rounded-full px-7 py-4 font-semibold text-ink hover:text-brand-ink">Lihat contoh soal tiap pulau</Link>
      </div>
    </section>
  );
}

export function OrangTua() {
  const maks = Math.max(...LAPORAN.menit.map(([, m]) => m), LAPORAN.batas);
  const total = LAPORAN.menit.reduce((s, [, m]) => s + m, 0);
  return (
    <section id="orang-tua" className="scroll-mt-20 px-6 py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
        <div>
          <p className="text-sm font-bold text-brand-ink">Untuk orang tua</p>
          <h2 className="mt-3 text-[2.4rem] leading-[1.05] font-extrabold text-ink md:text-5xl">Anda yang memegang jam pasirnya</h2>
          <ul className="mt-10 space-y-5">
            {PRINSIP.map(([j, d]) => (
              <li key={j} className="neu-raised rounded-3xl p-6">
                <h3 className="text-xl font-bold text-ink">{j}</h3>
                <p className="mt-1 leading-relaxed">{d}</p>
              </li>
            ))}
          </ul>
        </div>
        <figure className="neu-raised self-start rounded-[2rem] p-7 lg:mt-24">
          <figcaption className="flex items-baseline justify-between gap-4">
            <span className="font-[family-name:var(--font-baloo)] text-xl font-bold text-ink">Laporan mingguan</span>
            <span className="text-sm">{LAPORAN.anak} · contoh</span>
          </figcaption>
          <div className="neu-sunken mt-6 rounded-3xl p-5">
            <p className="text-sm">Menit bermain · batas {LAPORAN.batas} menit/hari · total {total} menit</p>
            <ul className="mt-4 flex h-40 items-end gap-3" aria-label="Menit bermain per hari">
              {LAPORAN.menit.map(([h, m]) => (
                <li key={h} className="flex h-full flex-1 flex-col items-center justify-end gap-2">
                  <span className="sr-only">{h}: {m} menit</span>
                  <span aria-hidden="true" className={`w-full rounded-t-xl ${m ? 'bg-brand' : 'bg-shade'}`} style={{ height: `${Math.max(4, (m / maks) * 100)}%` }} />
                  <span aria-hidden="true" className="text-xs font-semibold">{h}</span>
                </li>
              ))}
            </ul>
          </div>
          <ul className="mt-6 space-y-3">
            {LAPORAN.kuasai.map(([n, p]) => (
              <li key={n}>
                <div className="flex justify-between text-sm font-semibold text-ink"><span>{n}</span><span>{p}%</span></div>
                <div className="neu-sunken mt-1.5 h-3 rounded-full"><div className="h-3 rounded-full bg-brand-ink" style={{ width: `${p}%` }} /></div>
              </li>
            ))}
          </ul>
          <p className="mt-6 border-t border-shade pt-5 text-sm leading-relaxed"><strong className="text-ink">Catatan:</strong> {LAPORAN.catatan}</p>
        </figure>
      </div>
    </section>
  );
}

export function Harga() {
  return (
    <section id="harga" className="scroll-mt-20 px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-bold text-brand-ink">Harga</p>
        <h2 className="mt-3 max-w-2xl text-[2.4rem] leading-[1.05] font-extrabold text-ink md:text-5xl">Mulai gratis, berlangganan bila anak suka</h2>
        <ul className="mt-12 grid gap-8 md:grid-cols-3">
          {HARGA.map((h) => (
            <li key={h.nama} className={`flex flex-col rounded-[2rem] p-7 ${h.unggul ? 'neu-sunken ring-2 ring-brand-ink' : 'neu-raised'}`}>
              <h3 className="text-2xl font-extrabold text-ink">{h.nama}</h3>
              <p className="mt-4 font-[family-name:var(--font-baloo)] text-4xl font-extrabold text-ink">{h.harga ? rp(h.harga) : 'Gratis'}</p>
              <p className="text-sm">{h.satuan}{h.catatan ? ` · ${h.catatan}` : ''}</p>
              <ul className="mt-6 mb-8 space-y-2.5">
                {h.isi.map((i) => <li key={i} className="flex gap-2.5"><span aria-hidden="true" className="mt-2 h-2 w-2 shrink-0 rounded-full bg-brand-ink" />{i}</li>)}
              </ul>
              <Link href={h.cta[1]} className={`mt-auto block rounded-full py-3.5 text-center font-semibold ${h.unggul ? 'bg-brand-ink text-white hover:bg-ink' : 'neu-raised text-ink hover:text-brand-ink'}`}>{h.cta[0]}</Link>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-sm">Harga adalah contoh purwarupa desain.</p>
      </div>
    </section>
  );
}

export function FAQ() {
  return (
    <section id="faq" className="scroll-mt-20 px-6 py-20 md:py-28">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-center text-[2.4rem] leading-[1.05] font-extrabold text-ink md:text-5xl">Pertanyaan orang tua</h2>
        <div className="mt-10 space-y-4">
          {DAFTAR.map((f) => (
            <details key={f.t} className="group neu-raised rounded-3xl px-6 open:neu-sunken">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-lg font-bold text-ink [&::-webkit-details-marker]:hidden">
                {f.t}
                <span aria-hidden="true" className="neu-raised grid h-8 w-8 shrink-0 place-items-center rounded-full text-brand-ink transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="pb-6 leading-relaxed">{f.j}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
