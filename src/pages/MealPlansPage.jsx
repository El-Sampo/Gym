import React from 'react';

import chickenQuinoaImage from "../../Images/Chicken & Quinoa Bowl.jpg"; 
import salmonPotatoImage from "../../Images/Salmon & Sweet Potato.jpg";
import lentilSoupImage from "../../Images/Vegetarian Lentil Soup.jpg";

const mealPlans = [
    {
        id: 1,
        title: "Chicken & Quinoa Bowl",
        calories: 450,
        protein: 40,
        carbs: 45,
        fat: 12,
        description: "A high-protein, balanced meal perfect for muscle recovery and maintenance.",
        prepTime: "25 mins",
        imageUrl: chickenQuinoaImage,
        preparation: "Grill chicken breast, boil quinoa, and mix with roasted vegetables (broccoli, bell peppers). Dress lightly.",
    },
    {
        id: 2,
        title: "Salmon & Sweet Potato",
        calories: 550,
        protein: 35,
        carbs: 50,
        fat: 25,
        description: "Rich in Omega-3 fatty acids, great for brain and heart health.",
        prepTime: "30 mins",
        imageUrl: salmonPotatoImage,
        preparation: "Bake salmon fillet with salt and pepper. Roast sweet potato cubes and serve with a side of steamed spinach.",
    },
    {
        id: 3,
        title: "Vegetarian Lentil Soup",
        calories: 320,
        protein: 18,
        carbs: 55,
        fat: 5,
        description: "A hearty, low-fat, high-fiber soup that keeps you full.",
        prepTime: "40 mins",
        imageUrl: lentilSoupImage,
        preparation: "Sauté onions and carrots. Add lentils, vegetable broth, and spices. Simmer until lentils are tender.",
    },
];

const MealCard = ({ meal }) => (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-shadow duration-300 hover:shadow-2xl">
        <img src={meal.imageUrl} alt={meal.title} className="w-full h-48 object-cover" />
        <div className="p-5">
            <h3 className="text-xl font-bold text-red-600 mb-2">{meal.title}</h3>
            <p className="text-gray-600 text-sm mb-4">{meal.description}</p>
            
            <div className="flex justify-between text-xs text-gray-500 mb-4 border-b pb-2">
                <span>🕒 {meal.prepTime}</span>
                <span className="font-bold text-gray-800">{meal.calories} kcal</span>
            </div>

            <div className="grid grid-cols-3 gap-2 text-center text-sm font-semibold mb-4">
                <div className="bg-red-50 p-2 rounded-lg text-red-700">P: {meal.protein}g</div>
                <div className="bg-yellow-50 p-2 rounded-lg text-yellow-700">C: {meal.carbs}g</div>
                <div className="bg-blue-50 p-2 rounded-lg text-blue-700">F: {meal.fat}g</div>
            </div>

            <details className="text-gray-700 text-sm">
                <summary className="font-semibold cursor-pointer text-gray-800">Preparation Method (طريقة التحضير)</summary>
                <p className="mt-2 p-2 bg-gray-50 rounded-lg whitespace-pre-wrap">{meal.preparation}</p>
            </details>

            <button className="mt-4 w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 rounded-lg transition duration-200">
                Select Plan
            </button>
        </div>
    </div>
);


const MealPlansPage = () => {
    return (
        <div className="min-h-screen bg-gray-50 pt-32 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto py-12">
                <h1 className="text-4xl font-extrabold text-gray-900 border-b border-red-600 pb-3 mb-2">
                    <span className="text-red-600">Custom</span> Meal Plans
                </h1>
                <p className="text-xl text-gray-700 mb-10">
                    Here you can browse, select, or create custom meal plans tailored to your goals.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {mealPlans.map(meal => (
                        <MealCard key={meal.id} meal={meal} />
                    ))}
                </div>
                
                <div className="mt-16 p-8 bg-white rounded-xl shadow-lg border-t-4 border-green-500 text-center">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Can't find a meal you like?</h3>
                    <p className="text-gray-600 mb-5">Create your own meal plan tailored to your exact caloric and macro needs.</p>
                    <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full transition duration-200 shadow-md shadow-green-500/50">
                        Create New Custom Plan
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MealPlansPage;