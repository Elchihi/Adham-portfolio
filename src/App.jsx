import Header from "./components/Header/Header.jsx";
import { Hero, Hero2 } from "./components/Hero/Hero.jsx";
import Services from "./components/Services/Services.jsx";
import Portfolio from "./components/Portfolio/Portfolio.jsx";
import Contact from "./components/Contact/Contact.jsx";
import { Footer } from "./components/Footer/Footer.jsx";

export default function App() {
  return (
    <div className="bg-[#0d0d0d] text-white min-h-screen">
      <Header />
      <main>
        <Hero />
        <Hero2 />
        <Services />
        <Portfolio />
        {/* <Testimonials /> */}

        <Contact />
      </main>
      <Footer />
    </div>
  );
}
