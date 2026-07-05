import { Baloo_2, Inter } from "next/font/google";
import "./globals.css";

const baloo = Baloo_2({ variable: "--font-baloo", subsets: ["latin"], weight: ["500", "600", "700", "800"] });
const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });

export const metadata = {
  title: "EduPlay — Belajar Sambil Bermain",
  description: "EduPlay: aplikasi edukasi & game imersif. Belajar jadi seru lewat dunia interaktif yang dirancang untuk pengalaman nyata.",
  keywords: "aplikasi edukasi, game edukasi anak, belajar sambil bermain, edtech indonesia",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className={`${baloo.variable} ${inter.variable} bg-white text-gray-800 antialiased`}>
        {children}
      </body>
    </html>
  );
}
