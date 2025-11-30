
import React from 'react';
import TrackerHero from '../components/TrackerHero'; 
import CalorieCalculatorSection from '../components/CalorieCalculatorSection'; 
import StickyContactChannel from '../components/StickyContactChannel'

const FitnessTracker = ({ onAuthSuccess, currentUser }) => {
  return (
    
    <div id="fitnesstracker" className="min-h-screen bg-gray-50 pt-[78px]"> 
      <TrackerHero /> 
      <CalorieCalculatorSection onAuthSuccess={onAuthSuccess} currentUser={currentUser} />
      <StickyContactChannel/>
    </div>
  );
};

export default FitnessTracker;