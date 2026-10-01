# EduPlay — Matematika SD, Sepuluh Menit Sehari

EduPlay: latihan matematika kelas 1–3 SD lewat permainan sepuluh menit yang berhenti sendiri. Tanpa iklan, tanpa chat, bisa tanpa internet. Coba Teman Sepuluh dan Timbangan di peramban.

**Demo live:** https://landing-eduplay.vercel.app

![Tangkapan layar EduPlay](public/og.jpg)

> Template landing page untuk bisnis fiktif. Formulir di dalamnya hanya demo dan tidak mengirim data.

## Konsep

Bahasa rupa **Neumorfis**: seluruh bidang berdiri di atas satu warna dasar, dan kedalaman datang dari sepasang bayangan terang dan gelap.

## Halaman

- `/` — hero, satu ronde Teman Sepuluh yang bisa dimainkan, 12 pulau per kelas, contoh laporan mingguan orang tua, harga, FAQ
- `/main` — dua permainan: Teman Sepuluh (pasangan 10) dan Timbangan (lengan miring beranimasi)
- `/kurikulum` — 12 pulau kelas 1–3 dengan topik, nama permainan, dan contoh soal

## Teknologi

- Next.js 15.5 (App Router) dan React 19
- Tailwind CSS v4
- JavaScript
- Permainan & grafik laporan dibuat dengan React + SVG/CSS (tanpa pustaka animasi)
- Font: Baloo 2, Inter (next/font)
- SEO: metadata per halaman, Open Graph, JSON-LD, sitemap.xml, dan robots.txt

## Menjalankan secara lokal

```bash
npm install
npm run dev
```

Buka http://localhost:3000. Untuk build produksi: `npm run build` lalu `npm start`.

---

Bagian dari koleksi 17 template landing page di [PortalLanding](https://portal-landing-seven.vercel.app). Dibuat oleh [PintuWeb](https://pintuweb.com), jasa pembuatan website.
