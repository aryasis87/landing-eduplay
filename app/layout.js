import { Baloo_2, Inter } from "next/font/google";
import "./globals.css";

const baloo = Baloo_2({ variable: "--font-baloo", subsets: ["latin"], weight: ["500", "600", "700", "800"] });
const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });

const __jsonld = {"@context":"https://schema.org","@type":"WebSite","name":"EduPlay","description":"Aplikasi edukasi & game imersif","url":"https://landing-eduplay.vercel.app","inLanguage":"id"};

export const metadata = {
  metadataBase: new URL("https://landing-eduplay.vercel.app"),
  title: "EduPlay — Belajar Sambil Bermain",
  description: "EduPlay: aplikasi edukasi & game imersif. Belajar jadi seru lewat dunia interaktif yang dirancang untuk pengalaman nyata.",
  applicationName: "EduPlay",
  keywords: ["aplikasi edukasi", "game edukasi", "belajar interaktif", "edutainment", "anak"],
  authors: [{ name: "EduPlay" }],
  creator: "EduPlay",
  publisher: "EduPlay",
  alternates: { canonical: "https://landing-eduplay.vercel.app" },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://landing-eduplay.vercel.app",
    siteName: "EduPlay",
    title: "EduPlay — Belajar Sambil Bermain",
    description: "EduPlay: aplikasi edukasi & game imersif. Belajar jadi seru lewat dunia interaktif yang dirancang untuk pengalaman nyata.",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "EduPlay — Belajar Sambil Bermain" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "EduPlay — Belajar Sambil Bermain",
    description: "EduPlay: aplikasi edukasi & game imersif. Belajar jadi seru lewat dunia interaktif yang dirancang untuk pengalaman nyata.",
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
      <body className={`${baloo.variable} ${inter.variable} bg-white text-gray-800 antialiased`}>
        {children}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(__jsonld) }} />
        </body>
    </html>
  );
}
