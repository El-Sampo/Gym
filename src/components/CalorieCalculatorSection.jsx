import React, { useState, useEffect } from "react";
import { Link } from "react-router";

const API_URL = "http://localhost:5000/api/user";

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

const MacroGoal = ({ title, current, goal, color }) => {
  const percentage = Math.min(100, (current / goal) * 100);
  return (
    <div className="mb-4">
      <div className="flex justify-between text-sm font-medium text-gray-900">
        <span>
          {title} ({current}g / {goal}g)
        </span>
        <span>{Math.round(percentage)}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 mt-1">
        <div
          className="h-2.5 rounded-full"
          style={{ width: `${percentage}%`, backgroundColor: color }}
        ></div>
      </div>
    </div>
  );
};

const CalorieCalculatorSection = () => {
  const [formData, setFormData] = useState(DEFAULT_FORM);
  const [results, setResults] = useState(null);
  const [bmiStatus, setBmiStatus] = useState(null);

  const [waterTarget, setWaterTarget] = useState(2000);

  const [macroTargets, setMacroTargets] = useState(null);
  const [macroCurrent, setMacroCurrent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadUser = async () => {
      try {
        const res = await fetch(API_URL);
        const data = await res.json();

        if (data) {
          const loadedForm = {
            age: data.age ?? DEFAULT_FORM.age,
            gender: data.gender ?? DEFAULT_FORM.gender,
            height: data.height ?? DEFAULT_FORM.height,
            weight: data.weight ?? DEFAULT_FORM.weight,
            activityLevel: data.activityLevel ?? DEFAULT_FORM.activityLevel,
            goal: data.goal ?? DEFAULT_FORM.goal,
          };
          setFormData(loadedForm);

          const baseResults =
            data.caloriesTarget && data.caloriesTarget > 0
              ? { maintenance: 0, target: data.caloriesTarget }
              : calculateCalories(loadedForm);
          setResults(baseResults);

          setBmiStatus(getWeightStatus(loadedForm.weight, loadedForm.height));

          const targetWater =
            data.waterTarget ?? Math.max(2000, loadedForm.weight * 33);
          setWaterTarget(targetWater);

          const macros =
            data.proteinTarget && data.carbsTarget && data.fatsTarget
              ? {
                  protein: data.proteinTarget,
                  carbs: data.carbsTarget,
                  fats: data.fatsTarget,
                }
              : null;
          setMacroTargets(macros);
          if (macros) {
            setMacroCurrent({
              protein: Math.round(macros.protein * 0.57),
              carbs: Math.round(macros.carbs * 0.72),
              fats: Math.round(macros.fats * 0.75),
            });
          }
        } else {
          const baseResults = calculateCalories(DEFAULT_FORM);
          setResults(baseResults);
          setBmiStatus(getWeightStatus(DEFAULT_FORM.weight, DEFAULT_FORM.height));
          setWaterTarget(Math.max(2000, DEFAULT_FORM.weight * 33));
        }
      } catch {
        const baseResults = calculateCalories(DEFAULT_FORM);
        setResults(baseResults);
        setBmiStatus(getWeightStatus(DEFAULT_FORM.weight, DEFAULT_FORM.height));
        setWaterTarget(Math.max(2000, DEFAULT_FORM.weight * 33));
      } finally {
        setLoading(false);
      }
    };

    loadUser();
  }, []);

  useEffect(() => {
    if (!results) return;

    const newWaterTarget = Math.max(2000, Number(formData.weight || 0) * 33);
    setWaterTarget(newWaterTarget);

    const newMacroTargets = {
      protein: Math.round((results.target * 0.3) / 4),
      carbs: Math.round((results.target * 0.45) / 4),
      fats: Math.round((results.target * 0.25) / 9),
    };
    setMacroTargets(newMacroTargets);

    setMacroCurrent({
      protein: Math.round(newMacroTargets.protein * 0.57),
      carbs: Math.round(newMacroTargets.carbs * 0.72),
      fats: Math.round(newMacroTargets.fats * 0.75),
    });
  }, [results, formData.weight]);

  useEffect(() => {
    if (loading || !results || !macroTargets) return;

    const saveUser = async () => {
      try {
        const body = {
          age: Number(formData.age),
          gender: formData.gender,
          height: Number(formData.height),
          weight: Number(formData.weight),
          activityLevel: formData.activityLevel,
          goal: formData.goal,
          caloriesTarget: results.target,
          waterTarget,
          waterIntake: waterTarget, // we treat goal as consumed for the dashboard
          proteinTarget: macroTargets.protein,
          carbsTarget: macroTargets.carbs,
          fatsTarget: macroTargets.fats,
        };

        await fetch(API_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        });
      } catch {
        // ignore errors silently for now
      }
    };

    saveUser();
  }, [formData, results, waterTarget, macroTargets, loading]);

  const handleChange = (e) => {
    const { id, value } = e.target;

    setFormData((prev) => {
      if (id === "age" || id === "height" || id === "weight") {
        // allow empty string while typing
        if (value === "") return { ...prev, [id]: "" };
        const numeric = Math.max(0, Number(value));
        return { ...prev, [id]: numeric };
      }
      return { ...prev, [id]: value };
    });

    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { age, height, weight } = formData;

    if (!age || !height || !weight) {
      setError("Please enter valid age, height and weight.");
      return;
    }

    const newResults = calculateCalories(formData);
    setResults(newResults);
    setBmiStatus(getWeightStatus(weight, height));
  };

  const waterProgress = 100; // bar is full because it represents the daily goal

  if (loading || !results) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <p className="text-center text-gray-600 text-lg">Loading tracker...</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* LEFT: Calorie calculator – old layout with slight polish */}
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
              className="w-full mt-5 bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded-lg text-lg tracking-wide shadow-lg shadow-red-500/40 transition"
            >
              CALCULATE
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
            </div>
          )}
        </div>

        {/* MIDDLE: nutrition & water – stays as your new design */}
        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 space-y-4">
          <h2 className="text-2xl font-bold text-gray-900 border-b pb-2">
            Daily Nutrition Status (Food & Water)
          </h2>

          {macroTargets && macroCurrent && (
            <>
              <MacroGoal
                title="Protein"
                current={macroCurrent.protein}
                goal={macroTargets.protein}
                color="#EF4444"
              />
              <MacroGoal
                title="Carbs"
                current={macroCurrent.carbs}
                goal={macroTargets.carbs}
                color="#F59E0B"
              />
              <MacroGoal
                title="Fats"
                current={macroCurrent.fats}
                goal={macroTargets.fats}
                color="#3B82F6"
              />
            </>
          )}

          <div className="pt-4 border-t border-gray-200">
            <h3 className="text-lg font-bold text-gray-900 mb-1">Meal Plans</h3>
            <p className="text-sm text-gray-600 mb-3">
              Browse structured meal options with calories and full recipes.
            </p>
            <Link
              to="/meal-plans"
              className="inline-block w-full text-center border border-green-500 text-green-700 font-semibold py-2 rounded-lg hover:bg-green-50"
            >
              View All Meal Plans
            </Link>
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

        {/* RIGHT: weight status + workout suggestion */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-900 border-b pb-2">
            Progress & Goals (Workouts)
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

          <div className="bg-white p-6 rounded-xl shadow-lg border">
            <h3 className="text-lg font-bold text-gray-900">
              Workout Plan Suggestion
            </h3>
            <p className="text-gray-600 mt-2">
              Maintain 3-5 strength sessions per week with progressive overload.
            </p>

            <div className="bg-red-100 p-3 rounded-lg flex justify-between text-sm text-red-700 mt-3">
              <span>Last: Full Body Strength</span>
              <span>Duration: 60 mins</span>
            </div>

            <Link
              to="/workouts"
              className="mt-4 w-full block text-center border border-gray-400 py-2 rounded-lg hover:bg-gray-100"
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
