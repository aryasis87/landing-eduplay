import Hero from "./components/Hero";
import KeyFeatures from "./components/KeyFeatures";
import SocialProof from "./components/SocialProof";
import Showcase from "./components/Showcase";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="bg-[#e0e0e0] w-full overflow-x-hidden">
      <Hero />
      <KeyFeatures />
      <SocialProof />
      <Showcase />
      <FAQ />
      <CTA />
      <Contact />
      <Footer />
    </main>
  );
}