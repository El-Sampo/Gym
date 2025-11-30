import { useEffect, useState } from "react";
import { Routes, Route } from "react-router"; 
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import AboutPage from "./pages/AboutPage";
import ClassesPage from "./pages/ClassesPage";
import PricingPage from "./pages/PricingPage";
import FitnessTracker from "./pages/FitnessTracker";

// NOTE: Also update CalorieCalculatorSection.jsx to accept onAuthSuccess prop:
// const CalorieCalculatorSection = ({ onAuthSuccess }) => { ... }
// Then in handleAuthSuccess:
// const handleAuthSuccess = (userData) => {
//   setIsAuthenticated(true);
//   setUser(userData);
//   setIsAuthModalOpen(false);
//   if (onAuthSuccess) {
//     onAuthSuccess(userData); // Pass it up to App.jsx
//   }
// };
import ContactPage from "./pages/ContactPage";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import AuthModal from "./components/AuthModal";

import WeightLogPage from "./pages/WeightLogPage"; 
import WorkoutsPage from "./pages/WorkoutsPage"; 
import MealPlansPage from "./pages/MealPlansPage"; 
import ExercisesPage from "./pages/ExercisesPage";

function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

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

  // Check if user is already logged in
  useEffect(() => {
    checkAuthStatus();
  }, []);

  // NEW: Function to check auth status (extracted for reusability)
  const checkAuthStatus = () => {
    const token = localStorage.getItem('token');
    const user = localStorage.getItem('user');
    if (token && user) {
      setCurrentUser(JSON.parse(user));
    } else {
      setCurrentUser(null);
    }
  };

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

  const handleAuthSuccess = (user) => {
    setCurrentUser(user);
    console.log('User logged in:', user);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setCurrentUser(null);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        onOpenAuthModal={() => setIsAuthModalOpen(true)}
        currentUser={currentUser}
        onLogout={handleLogout}
      />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/aboutpage" element={<AboutPage />} />
          <Route path="/classespage" element={<ClassesPage />} />
          <Route 
            path="/pricingpage" 
            element={<PricingPage onAuthSuccess={handleAuthSuccess} currentUser={currentUser} />} 
          />
          <Route 
            path="/fitnesstracker" 
            element={<FitnessTracker onAuthSuccess={handleAuthSuccess} currentUser={currentUser} />} 
          />
          <Route path="/contactpage" element={<ContactPage />} />
          
          <Route path="/log-weight" element={<WeightLogPage />} /> 
          <Route path="/workouts" element={<WorkoutsPage />} />
          <Route path="/meal-plans" element={<MealPlansPage />} /> 
          <Route path="/exercises" element={<ExercisesPage />} />
        </Routes>
      </main>
      <Footer />
      <ScrollToTop />
      
      {/* Auth Modal */}
      <AuthModal 
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        onAuthSuccess={handleAuthSuccess}
      />
    </div>
  );
}

export default App;