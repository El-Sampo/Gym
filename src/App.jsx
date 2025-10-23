import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom"; 
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import AboutPage from "./pages/AboutPage";
import ClassesPage from "./pages/ClassesPage";
import PricingPage from "./pages/PricingPage";
import FitnessTracker from "./pages/FitnessTracker";
import ContactPage from "./pages/ContactPage";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

import WeightLogPage from "./pages/WeightLogPage"; 
import WorkoutsPage from "./pages/WorkoutsPage"; 
import MealPlansPage from "./pages/MealPlansPage"; 

function App() {
  const [activeSection, setActiveSection] = useState("home");

  const sections = [
    "#home",
    "#features",
    "#about",
    "#classes",
    "#pricing",
    "#trainers",
    "#testimonials",
    "#contact",
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

      const ScrollPosition = window.scrollY;
      let currentActiveSection = activeSection;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i].substring(1));
        if (section && ScrollPosition >= section.offsetTop - 200) {
          currentActiveSection = sections[i];
          break;
        }
      }
      
      if (currentActiveSection !== activeSection) {
        setActiveSection(currentActiveSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [activeSection, sections]);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/aboutpage" element={<AboutPage />} />
          <Route path="/classespage" element={<ClassesPage />} />
          <Route path="/pricingpage" element={<PricingPage />} />
          <Route path="/fitnesstracker" element={<FitnessTracker />} />
          <Route path="/contactpage" element={<ContactPage />} />
          
          <Route path="/log-weight" element={<WeightLogPage />} /> 
          <Route path="/workouts" element={<WorkoutsPage />} />
          <Route path="/meal-plans" element={<MealPlansPage />} /> 

        </Routes>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;