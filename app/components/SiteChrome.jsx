import Link from 'next/link';

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 bg-surface/90 shadow-[0_6px_14px_-10px_var(--color-shade)] backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-6 px-6">
        <Link href="/" className="flex items-center gap-2.5 font-[family-name:var(--font-baloo)] text-2xl font-extrabold text-ink">
          <span aria-hidden="true" className="neu-raised grid h-9 w-9 place-items-center rounded-xl text-base text-brand-ink">10</span>
          EduPlay
        </Link>
        <nav aria-label="Navigasi utama" className="hidden items-center gap-8 md:flex">
          {[['/kurikulum', 'Kurikulum'], ['/#orang-tua', 'Untuk orang tua'], ['/#harga', 'Harga']].map(([h, l]) => (
            <Link key={h} href={h} className="text-sm font-semibold text-ink-2 hover:text-ink">{l}</Link>
          ))}
        </nav>
        <Link href="/main" className="rounded-full bg-brand-ink px-5 py-2.5 text-sm font-semibold text-white hover:bg-ink">Coba main</Link>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="px-6 pb-10">
      <div className="neu-sunken mx-auto max-w-6xl rounded-[2rem] px-8 py-12">
        <div className="grid gap-10 md:grid-cols-[minmax(0,1.4fr)_repeat(2,minmax(0,1fr))]">
          <div>
            <p className="font-[family-name:var(--font-baloo)] text-2xl font-extrabold text-ink">EduPlay</p>
            <p className="mt-2 max-w-sm text-sm leading-relaxed">Matematika SD kelas 1–3 lewat permainan sepuluh menit. Tanpa iklan, tanpa chat, berhenti sendiri.</p>
          </div>
          <nav aria-label="Aplikasi">
            <p className="mb-3 text-sm font-bold text-ink">Aplikasi</p>
            <ul className="space-y-2 text-sm">
              <li><Link href="/main" className="hover:text-ink">Coba main di peramban</Link></li>
              <li><Link href="/kurikulum" className="hover:text-ink">12 pulau kurikulum</Link></li>
              <li><Link href="/#harga" className="hover:text-ink">Harga</Link></li>
            </ul>
          </nav>
          <nav aria-label="Orang tua dan guru">
            <p className="mb-3 text-sm font-bold text-ink">Orang tua & guru</p>
            <ul className="space-y-2 text-sm">
              <li><Link href="/#orang-tua" className="hover:text-ink">Laporan & batas waktu</Link></li>
              <li><Link href="/#faq" className="hover:text-ink">Pertanyaan umum</Link></li>
            </ul>
          </nav>
        </div>
        <p className="mt-10 border-t border-shade pt-6 text-xs leading-relaxed">© 2026 EduPlay · Nama, harga, dan isi laporan adalah contoh purwarupa desain.</p>
      </div>
    </footer>
  );
}
