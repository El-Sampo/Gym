
import React from 'react';
import TrackerHero from '../components/TrackerHero'; 
import CalorieCalculatorSection from '../components/CalorieCalculatorSection'; 

const FitnessTracker = () => {
  return (
    
    <div id="fitnesstracker" className="min-h-screen bg-gray-50 pt-[78px]"> 
      <TrackerHero /> 
      <CalorieCalculatorSection />
    </div>
  );
};

export default FitnessTracker;