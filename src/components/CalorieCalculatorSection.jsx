import React, { useState, useEffect } from "react";
import { Link } from "react-router";
import { LineChart, Line, ResponsiveContainer, Tooltip, CartesianGrid } from 'recharts';
import AuthModal from './AuthModal';

const DEFAULT_FORM = {
  age: 30,
  gender: "female",
  height: 170,
  weight: 100,
  activityLevel: "moderate",
  goal: "maintenance",
};

const calculateCalories = (data) => {
  const age = Number(data.age);
  const height = Number(data.height);
  const weight = Number(data.weight);
  const { gender, activityLevel, goal } = data;

  let bmr =
    gender === "male"
      ? 10 * weight + 6.25 * height - 5 * age + 5
      : 10 * weight + 6.25 * height - 5 * age - 161;

  const activityMultipliers = {
    sedentary: 1.2,
    light: 1.375,
    moderate: 1.55,
    very: 1.725,
    extra: 1.9,
  };

  const maintenance = bmr * activityMultipliers[activityLevel];
  let target = maintenance;

  if (goal === "loss") target -= 500;
  if (goal === "gain") target += 500;
  if (goal === "mild-loss") target -= 300;
  if (goal === "mild-gain") target += 300;

  return {
    maintenance: Math.round(maintenance),
    target: Math.round(target),
  };
};

const getWeightStatus = (weight, height) => {
  const w = Number(weight);
  const h = Number(height);
  const bmi = w / Math.pow(h / 100, 2);
  let status = "";
  let color = "";

  if (bmi < 18.5) {
    status = "Underweight";
    color = "text-blue-500";
  } else if (bmi <= 24.9) {
    status = "Healthy Weight";
    color = "text-green-500";
  } else if (bmi <= 29.9) {
    status = "Overweight";
    color = "text-yellow-500";
  } else {
    status = "Obese";
    color = "text-red-500";
  }

  return { bmi: bmi.toFixed(1), status, color };
};

const FormField = ({ label, id, type = "number", value, onChange, options }) => (
  <div className="mb-4">
    <label
      htmlFor={id}
      className="block text-xs font-semibold tracking-wide text-gray-300 mb-1 uppercase"
    >
      {label}
    </label>
    {options ? (
      <select
        id={id}
        value={value}
        onChange={onChange}
        className="w-full px-4 py-2.5 bg-gray-800 text-white border border-gray-600 rounded-lg focus:border-red-500 focus:ring-1 focus:ring-red-500 text-sm"
      >
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
    ) : (
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        className="w-full px-4 py-2.5 bg-gray-800 text-white border border-gray-600 rounded-lg focus:border-red-500 focus:ring-1 focus:ring-red-500 text-sm"
      />
    )}
  </div>
);

const CalorieCalculatorSection = ({ onAuthSuccess: parentOnAuthSuccess, currentUser }) => {
  const [formData, setFormData] = useState(DEFAULT_FORM);
  const [results, setResults] = useState(null);
  const [bmiStatus, setBmiStatus] = useState(null);
  const [error, setError] = useState("");
  const [weightEntries, setWeightEntries] = useState([]);
  const [loadingWeights, setLoadingWeights] = useState(false);
  const [showMealPlanWarning, setShowMealPlanWarning] = useState(false);
  const [saving, setSaving] = useState(false);

  // Auth state
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  
  // Use parent's currentUser to determine authentication status
  const isAuthenticated = !!currentUser;
  const user = currentUser;

  // Calculate macro targets when results change
  const macroTargets = results ? {
    protein: Math.round((results.target * 0.3) / 4),
    carbs: Math.round((results.target * 0.45) / 4),
    fats: Math.round((results.target * 0.25) / 9),
  } : null;

  // Calculate water target based on weight
  const waterTarget = Math.max(2000, Number(formData.weight || 0) * 33);

  // Auth success handler - passes to parent (App.jsx)
  const handleAuthSuccess = (userData) => {
    setIsAuthModalOpen(false);
    
    if (parentOnAuthSuccess) {
      parentOnAuthSuccess(userData);
    }
  };

  // Fetch weight entries when user is authenticated
  useEffect(() => {
    if (isAuthenticated) {
      fetchWeightEntries();
      loadUserProfile();
    }
  }, [isAuthenticated]);

  // NEW: Load user profile data from database
  const loadUserProfile = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch('http://localhost:5000/api/auth/profile', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      const data = await response.json();

      if (data.success && data.user) {
        // If user has saved profile data, populate the form
        if (data.user.age) {
          setFormData({
            age: data.user.age || 30,
            gender: data.user.gender || 'female',
            height: data.user.height || 170,
            weight: data.user.weight || 100,
            activityLevel: data.user.activityLevel || 'moderate',
            goal: data.user.goal || 'maintenance',
          });

          // If user has calculated results, show them
          if (data.user.caloriesTarget) {
            setResults({
              target: data.user.caloriesTarget,
              maintenance: data.user.caloriesTarget
            });
            
            if (data.user.height && data.user.weight) {
              setBmiStatus(getWeightStatus(data.user.weight, data.user.height));
            }
          }
        }
      }
    } catch (error) {
      console.error('Error loading profile:', error);
    }
  };

  const fetchWeightEntries = async () => {
    setLoadingWeights(true);
    try {
      const token = localStorage.getItem('token');
      const response = await fetch('http://localhost:5000/api/weight-entries', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      const data = await response.json();

      if (data.success) {
        // Get last 4 entries for the chart
        const last4 = data.entries.slice(0, 4).reverse();
        
        // Format for the chart
        const formatted = last4.map((entry, index) => ({
          name: new Date(entry.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
          weight: entry.weight
        }));
        
        setWeightEntries(formatted);
      }
    } catch (error) {
      console.error('Error fetching weight entries:', error);
    } finally {
      setLoadingWeights(false);
    }
  };

  const handleChange = (e) => {
    const { id, value } = e.target;

    setFormData((prev) => {
      if (id === "age" || id === "height" || id === "weight") {
        if (value === "") return { ...prev, [id]: "" };
        const numeric = Math.max(0, Number(value));
        return { ...prev, [id]: numeric };
      }
      return { ...prev, [id]: value };
    });

    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Check authentication first
    if (!isAuthenticated) {
      setIsAuthModalOpen(true);
      return;
    }
    
    const { age, height, weight } = formData;

    if (!age || !height || !weight) {
      setError("Please enter valid age, height and weight.");
      return;
    }

    const newResults = calculateCalories(formData);
    setResults(newResults);
    setBmiStatus(getWeightStatus(weight, height));

    // Calculate macro targets
    const macros = {
      protein: Math.round((newResults.target * 0.3) / 4),
      carbs: Math.round((newResults.target * 0.45) / 4),
      fats: Math.round((newResults.target * 0.25) / 9),
    };

    const waterGoal = Math.max(2000, Number(weight) * 33);

    // SAVE TO DATABASE
    setSaving(true);
    try {
      const token = localStorage.getItem('token');
      const response = await fetch('http://localhost:5000/api/user/profile', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          age: formData.age,
          gender: formData.gender,
          height: formData.height,
          weight: formData.weight,
          activityLevel: formData.activityLevel,
          goal: formData.goal,
          caloriesTarget: newResults.target,
          waterTarget: waterGoal,
          proteinTarget: macros.protein,
          carbsTarget: macros.carbs,
          fatsTarget: macros.fats
        })
      });

      const data = await response.json();
      
      if (data.success) {
        console.log('✅ Profile saved successfully to database!');
      } else {
        console.error('❌ Failed to save profile:', data.message);
      }
    } catch (error) {
      console.error('Error saving profile:', error);
      setError('Failed to save profile. Please try again.');
    } finally {
      setSaving(false);
    }
  };

  const handleLogWeightClick = (e) => {
    if (!isAuthenticated) {
      e.preventDefault();
      setIsAuthModalOpen(true);
    }
  };

  const handleMealPlanClick = (e) => {
    if (!isAuthenticated) {
      e.preventDefault();
      setShowMealPlanWarning(true);
      setIsAuthModalOpen(true);
      // Hide warning after 5 seconds
      setTimeout(() => setShowMealPlanWarning(false), 5000);
    }
  };

  const waterProgress = 100; // Full bar for visual purposes

  return (
    <>
      {/* Auth Modal */}
      <AuthModal 
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        onAuthSuccess={handleAuthSuccess}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        {/* Welcome message for authenticated users */}
        {isAuthenticated && user && (
          <div className="mb-6 bg-green-50 border border-green-200 rounded-lg p-4">
            <p className="text-green-800 font-medium text-center">
              Welcome back, {user.name}! 👋 Track your fitness journey below.
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* LEFT: Calorie calculator */}
          <div className="bg-slate-900 p-8 rounded-2xl shadow-2xl border-t-4 border-red-600">
            <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-6 text-center md:text-left">
              Daily Calorie Calculator
            </h2>

            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <FormField
                  label="Age"
                  id="age"
                  value={formData.age}
                  onChange={handleChange}
                />
                <FormField
                  label="Gender"
                  id="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  options={[
                    { value: "female", label: "Female" },
                    { value: "male", label: "Male" },
                  ]}
                />

                <FormField
                  label="Height (cm)"
                  id="height"
                  value={formData.height}
                  onChange={handleChange}
                />
                <FormField
                  label="Weight (kg)"
                  id="weight"
                  value={formData.weight}
                  onChange={handleChange}
                />

                <div className="sm:col-span-2">
                  <FormField
                    label="Activity Level"
                    id="activityLevel"
                    value={formData.activityLevel}
                    onChange={handleChange}
                    options={[
                      { value: "moderate", label: "Moderate (3-5 days/week)" },
                      { value: "light", label: "Light (1-2 days/week)" },
                      { value: "very", label: "Very Active (6-7 days/week)" },
                      { value: "sedentary", label: "Sedentary" },
                      { value: "extra", label: "Extra Active" },
                    ]}
                  />
                </div>

                <div className="sm:col-span-2">
                  <FormField
                    label="Your Goal"
                    id="goal"
                    value={formData.goal}
                    onChange={handleChange}
                    options={[
                      { value: "maintenance", label: "Maintain Weight" },
                      { value: "loss", label: "Aggressive Loss (-500 kcal)" },
                      { value: "mild-loss", label: "Mild Loss (-300 kcal)" },
                      { value: "gain", label: "Aggressive Gain (+500 kcal)" },
                      { value: "mild-gain", label: "Mild Gain (+300 kcal)" },
                    ]}
                  />
                </div>
              </div>

              {error && (
                <p className="mt-3 text-sm text-center text-red-400 bg-red-900/40 px-3 py-2 rounded-lg">
                  {error}
                </p>
              )}

              <button
                type="submit"
                disabled={saving}
                className="w-full mt-5 bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded-lg text-lg tracking-wide shadow-lg shadow-red-500/40 transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {saving ? 'SAVING...' : (isAuthenticated ? 'CALCULATE & SAVE' : 'LOGIN TO CALCULATE')}
              </button>
            </form>

            {results && (
              <div className="mt-6 p-4 bg-slate-950 rounded-xl border border-slate-700 shadow-inner">
                <p className="text-sm text-slate-300 mb-1">Target Calories:</p>
                <h3 className="text-3xl md:text-4xl font-extrabold text-red-500">
                  {results.target}{" "}
                  <span className="text-white text-2xl font-semibold">
                    kcal/Day
                  </span>
                </h3>
                <p className="text-xs text-green-400 mt-2">✓ Saved to your profile</p>
              </div>
            )}
          </div>

          {/* MIDDLE: nutrition & water */}
          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 space-y-4">
            <h2 className="text-2xl font-bold text-gray-900 border-b pb-2">
              Daily Nutrition Status (Food & Water)
            </h2>

            {/* Daily Macro Goals - Shows after calculation */}
            {macroTargets ? (
              <div className="bg-gradient-to-r from-red-50 to-orange-50 p-4 rounded-lg border border-red-200">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Your Daily Macro Goals</h3>
                <p className="text-xs text-gray-600 mb-3">Based on your {results.target} kcal target</p>
                
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-sm font-medium text-gray-900 mb-1">
                      <span>Protein</span>
                      <span className="text-red-600 font-bold">{macroTargets.protein}g</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div
                        className="h-2.5 rounded-full bg-red-500"
                        style={{ width: '100%' }}
                      ></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-sm font-medium text-gray-900 mb-1">
                      <span>Carbs</span>
                      <span className="text-yellow-600 font-bold">{macroTargets.carbs}g</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div
                        className="h-2.5 rounded-full bg-yellow-500"
                        style={{ width: '100%' }}
                      ></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-sm font-medium text-gray-900 mb-1">
                      <span>Fats</span>
                      <span className="text-blue-600 font-bold">{macroTargets.fats}g</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div
                        className="h-2.5 rounded-full bg-blue-500"
                        style={{ width: '100%' }}
                      ></div>
                    </div>
                  </div>
                </div>

                <p className="text-xs text-gray-500 mt-3 text-center italic">
                  Aim to meet these goals daily for optimal results
                </p>
              </div>
            ) : (
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <p className="text-gray-600 text-sm text-center">
                  Press <span className="font-bold text-red-600">CALCULATE</span> to see your personalized macro goals
                </p>
              </div>
            )}

            <div className="pt-4 border-t border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-1">Meal Plans</h3>
              <p className="text-sm text-gray-600 mb-3">
                Browse structured meal options with calories and full recipes.
              </p>
              {isAuthenticated ? (
                <Link
                  to="/meal-plans"
                  className="inline-block w-full text-center border border-green-500 text-green-700 font-semibold py-2 rounded-lg hover:bg-green-50 transition duration-200"
                >
                  View All Meal Plans
                </Link>
              ) : (
                <>
                  <button
                    onClick={handleMealPlanClick}
                    className="w-full text-center border border-green-500 text-green-700 font-semibold py-2 rounded-lg hover:bg-green-50 transition duration-200"
                  >
                    View All Meal Plans
                  </button>
                  {showMealPlanWarning && (
                    <div className="mt-2 p-2 bg-red-50 border border-red-300 rounded-lg animate-pulse">
                      <p className="text-red-600 text-sm font-semibold text-center">
                        ⚠️ Please login to access meal plans
                      </p>
                    </div>
                  )}
                </>
              )}
            </div>

            <div className="pt-4 border-t border-gray-200">
              <h3 className="text-lg font-bold text-gray-900">Water Intake</h3>

              <div className="flex items-baseline justify-between mt-2">
                <span className="text-3xl font-extrabold text-blue-600">
                  {(waterTarget / 1000).toFixed(1)}L
                </span>
              </div>

              <div className="w-full bg-gray-200 rounded-full h-3 mt-2">
                <div
                  className="h-3 rounded-full bg-blue-500 transition-all duration-500"
                  style={{ width: `${waterProgress}%` }}
                ></div>
              </div>

              <p className="text-sm text-gray-700 mt-1">
                Goal:{" "}
                <span className="font-bold">
                  {(waterTarget / 1000).toFixed(1)}L
                </span>{" "}
                (Based on your weight)
              </p>
            </div>
          </div>

          {/* RIGHT: weight status + Log Weight */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 border-b pb-2">
              Progress & Goals
            </h2>

            <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-indigo-500">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Your Weight Status
              </h3>

              {bmiStatus ? (
                <>
                  <p className="text-sm text-gray-600">BMI: {bmiStatus.bmi}</p>
                  <p className={`text-xl font-extrabold ${bmiStatus.color}`}>
                    {bmiStatus.status}
                  </p>
                </>
              ) : (
                <p className="text-gray-600">
                  Enter your data to calculate BMI.
                </p>
              )}
            </div>

            {/* Weight Trend Chart */}
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Weight Trend (Last 4 Weeks)</h3>
              
              {loadingWeights ? (
                <div className="h-40 flex items-center justify-center">
                  <p className="text-gray-500">Loading weight data...</p>
                </div>
              ) : weightEntries.length > 0 ? (
                <div className="h-40">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={weightEntries}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" vertical={false} />
                      <Tooltip 
                        contentStyle={{ backgroundColor: '#fff', border: '1px solid #ccc', borderRadius: '5px' }}
                        formatter={(value) => [`${value} kg`, 'Weight']}
                      />
                      <Line 
                        type="monotone" 
                        dataKey="weight" 
                        stroke="#EF4444" 
                        strokeWidth={3} 
                        dot={{ fill: '#EF4444', r: 4 }} 
                        activeDot={{ r: 8 }} 
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              ) : (
                <div className="h-40 flex items-center justify-center">
                  <p className="text-gray-500">No weight entries yet. Start logging your weight!</p>
                </div>
              )}
              
              {isAuthenticated ? (
                <Link 
                  to="/log-weight"
                  className="mt-4 w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-200 block text-center"
                >
                  Log Weight
                </Link>
              ) : (
                <button
                  onClick={handleLogWeightClick}
                  className="mt-4 w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-200"
                >
                  Login to Log Weight
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CalorieCalculatorSection;