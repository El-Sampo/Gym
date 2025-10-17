import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Classes from "./components/Classes";
import Contact from "./components/Contact";
import About from "./components/About";
import Trainers from "./components/Trainers";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
<<<<<<< Updated upstream
import Pricing from "./components/Pricing";

=======
import HomeLanding from "./components/home";
import FeaturesSection from "./components/Features";
>>>>>>> Stashed changes
function App() {
  const [activeSection, setActiveSection] = useState("home");

  const sections = [
    "home",
    "features",
    "about",
    "classes",
    "pricing",
    "trainers",
    "testimonials",
    "contact",
  ];

  useEffect(() => {
    const handleScroll = () => {
      const reveals = document.querySelectorAll(".reveal");
      for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const revealTop = reveals[i].getBoundingClientRect().top;
        const revealPoint = 150;
        if (revealTop < windowHeight - revealPoint) {
          reveals[i].classList.add("active");
        }
      }
    };

    const ScrollPosition = window.scrollY;

    for (let i = sections.length - 1; i >= 0; i--) {
      const section = document.getElementById(sections[i]);
      if (section && ScrollPosition >= section.offsetTop - 100) {
        setActiveSection(sections[i]);
        break;
      }
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const reveals = document.querySelectorAll(".reveal");
      for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const revealTop = reveals[i].getBoundingClientRect().top;
        const revealPoint = 150;
        if (revealTop < windowHeight - revealPoint) {
          reveals[i].classList.add("active");
        }
      }
    };

    const ScrollPosition = window.scrollY;

    for (let i = sections.length - 1; i >= 0; i--) {
      const section = document.getElementById(sections[i]);
      if (section && ScrollPosition >= section.offsetTop - 200) {
        setActiveSection(sections[i]);
        break;
      }
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [activeSection]);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
      <main>
        <home/>
        <Hero />
<<<<<<< Updated upstream
        <Features />
        <About />
        <Classes />
        <Pricing />
=======
        <Features/>
>>>>>>> Stashed changes
        <Trainers />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
