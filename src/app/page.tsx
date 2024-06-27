import About from "@/components/About";
import Demo from "@/components/Demo";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Pricing />
      <Demo />
      <Footer />
    </main>
  );
}
