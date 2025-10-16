import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Contact from "./components/Contact";
import About from "./components/About";

function App() {
  const [activeSection, setActiveSection] = useState("home");
  return (

     <div className="min-h-screen flex flex-col bg-gray-50">
        <Navbar activeSection={activeSection}/>
        <main>
          <Hero/>
          <About/>
        </main>
        <footer>
          <Contact/>
        </footer>
    </div>);
}

export default App;
