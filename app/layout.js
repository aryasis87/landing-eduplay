import { Baloo_2, Inter } from "next/font/google";
import { SiteFooter, SiteHeader } from "./components/SiteChrome";
import "./globals.css";

const baloo = Baloo_2({ variable: "--font-baloo", subsets: ["latin"], weight: ["500", "600", "700", "800"] });
const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });

const __jsonld = {"@context":"https://schema.org","@type":"SoftwareApplication","applicationCategory":"EducationalApplication","operatingSystem":"Android, iPadOS, Web","name":"EduPlay","description":"Latihan matematika SD kelas 1–3 lewat permainan sepuluh menit","url":"https://landing-eduplay.vercel.app","inLanguage":"id"};

export const metadata = {
  metadataBase: new URL("https://landing-eduplay.vercel.app"),
  title: { default: "EduPlay — Matematika SD, Sepuluh Menit Sehari", template: "%s — EduPlay" },
  description: "EduPlay: latihan matematika kelas 1–3 SD lewat permainan sepuluh menit yang berhenti sendiri. Tanpa iklan, tanpa chat, bisa tanpa internet. Coba Teman Sepuluh dan Timbangan di peramban.",
  applicationName: "EduPlay",
  keywords: ["aplikasi belajar matematika SD", "game edukasi anak", "latihan berhitung kelas 1", "matematika kelas 2", "aplikasi anak tanpa iklan"],
  authors: [{ name: "EduPlay" }],
  creator: "EduPlay",
  publisher: "EduPlay",
  alternates: { canonical: "https://landing-eduplay.vercel.app" },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://landing-eduplay.vercel.app",
    siteName: "EduPlay",
    title: "EduPlay — Matematika SD, Sepuluh Menit Sehari",
    description: "EduPlay: latihan matematika kelas 1–3 SD lewat permainan sepuluh menit yang berhenti sendiri. Tanpa iklan, tanpa chat, bisa tanpa internet. Coba Teman Sepuluh dan Timbangan di peramban.",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "EduPlay — Matematika SD, Sepuluh Menit Sehari" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "EduPlay — Matematika SD, Sepuluh Menit Sehari",
    description: "EduPlay: latihan matematika kelas 1–3 SD lewat permainan sepuluh menit yang berhenti sendiri. Tanpa iklan, tanpa chat, bisa tanpa internet. Coba Teman Sepuluh dan Timbangan di peramban.",
    images: ["/og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className={`${baloo.variable} ${inter.variable} antialiased`}>
        <a href="#konten" className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-white">Lompat ke konten</a>
        <SiteHeader />
        <div id="konten">{children}</div>
        <SiteFooter />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(__jsonld) }} />
        </body>
    </html>
  );
}
