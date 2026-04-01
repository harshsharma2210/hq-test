import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import ValueProp from "@/components/ValueProp";
import Capabilities from "@/components/Capabilities";
import WhoItsFor from "@/components/WhoItsFor";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <ValueProp />
        <Capabilities />
        <WhoItsFor />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
