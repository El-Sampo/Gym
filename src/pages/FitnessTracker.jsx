import React from "react";
import CalorieCalculatorSection from "../components/CalorieCalculatorSection";
import TrackerHero from "../components/TrackerHero";
import StickyContactChannel from "../components/StickyContactChannel";

const FitnessTrackerPage = () => {
  return (
    <div className="min-h-screen pt-12 bg-gray-50 font-inter">
      <StickyContactChannel />
      <TrackerHero />
      <main className="container mx-auto p-4 md:p-8">
        <CalorieCalculatorSection />
      </main>
    </div>
  );
};

export default FitnessTrackerPage;
