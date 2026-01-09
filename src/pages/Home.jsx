import Header from "../components/Header";
import Hero from "../components/Hero";
import Services from "../components/Services";
import PortfolioSection from "../components/Portfolio";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <PortfolioSection />
      <Testimonials />
      <Contact />
    </>
  );
}
