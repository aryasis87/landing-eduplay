import Link from "next/link";

export const metadata = { title: "Halaman tidak ditemukan" };

export default function NotFound() {
  return (
    <main className="confetti-dots flex min-h-[80vh] items-center px-6 pt-24">
      <div className="neu-raised mx-auto max-w-md rounded-[2rem] p-10 text-center">
        <p className="font-[family-name:var(--font-baloo)] text-6xl font-extrabold text-ink">4 + 0 + 4</p>
        <h1 className="mt-4 text-3xl font-extrabold text-ink">Pulau ini belum ada di peta</h1>
        <p className="mt-3 leading-relaxed">Halaman yang kamu cari tidak ditemukan. Jumlahnya delapan, tapi bukan sepuluh.</p>
        <Link href="/main" className="mt-7 inline-flex rounded-full bg-brand-ink px-6 py-3.5 font-semibold text-white hover:bg-ink">Main Teman Sepuluh saja</Link>
      </div>
    </main>
  );
}
