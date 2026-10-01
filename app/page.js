import { FAQ, Harga, Hero, MainSatu, OrangTua, PulauTeaser } from "./components/Beranda";

export default function Home() {
  return (
    <main>
      <Hero />
      <MainSatu />
      <PulauTeaser />
      <OrangTua />
      <Harga />
      <FAQ />
    </main>
  );
}
