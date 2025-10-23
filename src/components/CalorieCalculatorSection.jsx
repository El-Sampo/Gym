import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import { LineChart, Line, ResponsiveContainer, Tooltip, CartesianGrid } from 'recharts';

const calculateCalories = (data) => {
  const { gender, weight, height, age, activityLevel, goal } = data;
  let bmr;
  if (gender === 'male') { bmr = 10 * weight + 6.25 * height - 5 * age + 5; } 
  else { bmr = 10 * weight + 6.25 * height - 5 * age - 161; }
  
  const activityMultipliers = { sedentary: 1.2, light: 1.375, moderate: 1.55, very: 1.725, extra: 1.9 };
  const maintenance = bmr * activityMultipliers[activityLevel];
  let target = maintenance;
  if (goal === 'loss') target -= 500;
  if (goal === 'gain') target += 500;
  if (goal === 'mild-loss') target -= 300;
  if (goal === 'mild-gain') target += 300;

  return { maintenance: Math.round(maintenance), target: Math.round(target) };
};

const getWeightStatus = (weightKg, heightCm) => {
    const heightM = heightCm / 100;
    const bmi = weightKg / (heightM * heightM);
    let status = '';
    let color = '';

    if (bmi < 18.5) { status = 'Underweight'; color = 'text-blue-500'; } 
    else if (bmi >= 18.5 && bmi <= 24.9) { status = 'Healthy Weight'; color = 'text-green-500'; }
    else if (bmi >= 25 && bmi <= 29.9) { status = 'Overweight'; color = 'text-yellow-500'; }
    else { status = 'Obese'; color = 'text-red-500'; }
    
    return { bmi: bmi.toFixed(1), status, color };
};

const FormField = ({ label, id, type = 'number', value, onChange, options }) => (
    <div className="mb-4">
      <label htmlFor={id} className="block text-sm font-medium text-gray-300 mb-1">
        {label}
      </label>
      {options ? (
        <select 
          id={id} 
          value={value} 
          onChange={onChange} 
          className="w-full px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded-lg focus:border-red-600 focus:ring-1 focus:ring-red-600 appearance-none transition duration-150"
        >
          {options.map(option => (
            <option key={option.value} value={option.value}>{option.label}</option>
          ))}
        </select>
      ) : (
        <input
          type={type}
          id={id}
          value={value} 
          onChange={onChange}
          min={1}
          className="w-full px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded-lg focus:border-red-600 focus:ring-1 focus:ring-red-600 transition duration-150"
          placeholder={`Enter ${label.toLowerCase()}`}
        />
      )}
    </div>
  );

const MacroGoal = ({ title, current, goal, color }) => {
    const percentage = Math.min(100, (current / goal) * 100);
    return (
        <div className="mb-4">
            <div className="flex justify-between text-sm font-medium text-gray-900">
                <span>{title} ({current}g / {goal}g)</span>
                <span>{Math.round(percentage)}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5 mt-1">
                <div 
                    className={`h-2.5 rounded-full`} 
                    style={{ width: `${percentage}%`, backgroundColor: color }}
                ></div>
            </div>
        </div>
    );
};

const weightSnippetData = [
    { name: 'Wk 1', weight: 70 },
    { name: 'Wk 2', weight: 68 },
    { name: 'Wk 3', weight: 69 },
    { name: 'Wk 4', weight: 65 },
];


const CalorieCalculatorSection = () => { 
  const [formData, setFormData] = useState({
    age: 30, gender: 'female', height: 170, weight: 65, 
    activityLevel: 'moderate', goal: 'maintenance',
  });
  const [results, setResults] = useState(null);
  const [bmiStatus, setBmiStatus] = useState(null);
  const [error, setError] = useState(''); 
  
  const [waterIntake, setWaterIntake] = useState(0); 
  const waterGoal = Math.round(formData.weight * 33 / 100) * 100; 
  const finalWaterGoal = Math.max(2000, waterGoal); 

  const handleChange = (e) => {
    const { id, value } = e.target;
    let newValue = value;

    if (id === 'age' || id === 'height' || id === 'weight') {
        if (value.trim() === '') {
            newValue = ''; 
        } else {
            newValue = Number(value);
        }
    }
    
    setError('');
    setFormData(prev => ({ ...prev, [id]: newValue }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const isFormIncomplete = formData.age === '' || formData.height === '' || formData.weight === '' || formData.age === 0 || formData.height === 0 || formData.weight === 0;

    if (isFormIncomplete) {
        setError("Please enter valid Age, Height, and Weight before calculating.");
        setResults(null);
        setBmiStatus(null);
        return; 
    }
    
    setError('');
    const calculated = calculateCalories(formData);
    setResults(calculated);
    
    const status = getWeightStatus(formData.weight, formData.height);
    setBmiStatus(status);
  };
  
  const handleWaterIncrement = () => {
      setWaterIntake(prev => Math.min(finalWaterGoal, prev + 500));
  };
  
  const getWorkoutSuggestion = (goal, activity) => {
      if (goal.includes('loss')) return '4-5 strength sessions + 150 mins cardio per week.';
      if (goal.includes('gain')) return '3-4 heavy strength sessions + sufficient rest.';
      if (activity === 'sedentary') return 'Start with 30 mins brisk walking daily and 2 strength sessions.';
      return 'Maintain your current 3-5 sessions focusing on progressive overload.';
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        <div className="lg:col-span-1 bg-gray-800 p-8 rounded-xl shadow-2xl border-t-4 border-red-600 h-full">
          <h2 className="text-2xl font-bold text-white mb-4 border-b border-gray-700 pb-3">
            Daily Calorie Calculator
          </h2>

          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              
              <FormField label="Age" id="age" value={formData.age} onChange={handleChange} />
              <FormField label="Gender" id="gender" value={formData.gender} onChange={handleChange} options={[{ value: 'female', label: 'Female' }, { value: 'male', label: 'Male' }]} />
              <FormField label="Height (cm)" id="height" value={formData.height} onChange={handleChange} />
              <FormField label="Weight (kg)" id="weight" value={formData.weight} onChange={handleChange} />

              <div className="sm:col-span-2">
                <FormField 
                    label="Activity Level" 
                    id="activityLevel" 
                    value={formData.activityLevel} 
                    onChange={handleChange} 
                    options={[
                        { value: 'moderate', label: 'Moderate (3-5 days/week)' }, 
                        { value: 'light', label: 'Light (1-2 days/week)' }, 
                        { value: 'very', label: 'Very Active (6-7 days/week)' },
                        { value: 'sedentary', label: 'Sedentary (Little or no exercise)' },
                        { value: 'extra', label: 'Extra Active (Intense daily exercise)' },
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
                        { value: 'maintenance', label: 'Maintain Weight' }, 
                        { value: 'loss', label: 'Aggressive Loss (-500 kcal)' }, 
                        { value: 'mild-loss', label: 'Mild Loss (-300 kcal)' },
                        { value: 'gain', label: 'Aggressive Gain (+500 kcal)' },
                        { value: 'mild-gain', label: 'Mild Gain (+300 kcal)' },
                    ]} 
                />
              </div>
            </div>
            
            {error && (
                <div className="mt-4 p-3 bg-red-800 text-white rounded-lg text-center font-medium">
                    {error}
                </div>
            )}
            
            <button
              type="submit"
              className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg transition duration-200 mt-4 text-lg shadow-lg shadow-red-500/50"
            >
              CALCULATE
            </button>
          </form>

          {results && (
            <div className="mt-6 p-4 bg-gray-900 border-l-4 border-red-600 rounded-lg">
              <p className="text-gray-300 text-base mb-1">Target Calories:</p>
              <h3 className="text-3xl font-extrabold text-red-500">{results.target} <span className="text-white">kcal/Day</span></h3>
            </div>
          )}
        </div>
        
        <div className="lg:col-span-1 space-y-4 bg-white p-6 rounded-xl shadow-lg border border-gray-100 h-full">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b border-gray-300 pb-2">
            Daily Nutrition Status (Food & Water)
          </h2>
          
          <MacroGoal title="Protein" current={85} goal={150} color="#EF4444" />
          <MacroGoal title="Carbs" current={180} goal={250} color="#F59E0B" />
          <MacroGoal title="Fats" current={45} goal={60} color="#3B82F6" />

          <div className="pt-4 border-t border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Meal Plans</h3>
              <p className="text-sm text-gray-600 mb-3">Your current plan: **Balanced Maintenance**</p>
              <Link
                  to="/meal-plans" 
                  className="w-full border border-green-500 text-green-700 hover:bg-green-50 font-semibold py-2 rounded-lg transition duration-200 block text-center"
              >
                  View All Plans
              </Link>
          </div>

          <div className="pt-4 border-t border-gray-200">
            <h3 className="text-lg font-bold text-gray-900 mb-2">Water Intake</h3>
            <div className="flex items-center justify-between">
                <span className="text-3xl font-extrabold text-blue-600">{waterIntake / 1000}L</span>
                <button 
                    onClick={handleWaterIncrement}
                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition duration-200"
                >
                    + 500ml
                </button>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3 mt-2">
                <div 
                    className="h-3 rounded-full bg-blue-500" 
                    style={{ width: `${Math.min(100, (waterIntake / finalWaterGoal) * 100)}%` }}
                ></div>
            </div>
            <p className="text-sm text-gray-700 font-semibold mt-1">
                Goal: <span className="text-blue-700">{finalWaterGoal / 1000}L</span> (Based on your weight)
            </p>
          </div>
        </div>

        <div className="lg:col-span-1 space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b border-gray-300 pb-2">
                Progress & Goals (Workouts)
            </h2>
            
            <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-indigo-500">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Your Weight Status</h3>
                {bmiStatus ? (
                    <>
                        <p className="text-sm text-gray-600">BMI: <span className="font-bold">{bmiStatus.bmi}</span></p>
                        <p className={`text-xl font-extrabold ${bmiStatus.color} mt-1`}>
                           {bmiStatus.status}
                        </p>
                    </>
                ) : (
                    <p className="text-md text-gray-500">Press CALCULATE to check your BMI.</p>
                )}
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Weight Trend (Last 4 Weeks)</h3>
                <div className="h-40">
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={weightSnippetData}>
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
                
                <Link 
                    to="/log-weight"
                    className="mt-4 w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-200 block text-center"
                >
                    Log Weight
                </Link>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Workout Plan Suggestion</h3>
                <p className="text-md text-gray-700 font-semibold mb-3">{getWorkoutSuggestion(formData.goal, formData.activityLevel)}</p>
                
                <div className="bg-red-100 p-3 rounded-lg flex justify-between items-center text-sm mb-3">
                    <span className="text-red-700 font-semibold">Last: Full Body Strength</span>
                    <span className="text-red-700 font-semibold">Duration: 60 mins</span>
                </div>
                
                <Link 
                    to="/workouts" 
                    className="w-full border border-gray-400 text-gray-700 hover:bg-gray-100 font-semibold py-2 rounded-lg transition duration-200 block text-center"
                >
                    View / Log Workouts
                </Link>
            </div>
        </div>
      </div>
    </div>
  );
};

export default CalorieCalculatorSection;
