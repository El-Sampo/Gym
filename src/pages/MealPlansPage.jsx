import React from "react";
import StickyContactChannel from "../components/StickyContactChannel";

import grilledChickenImg from "../../images/Grilled Chicken Asparagus.jpg";
import salmonSweetPotatoMashImg from "../../images/Salmon Sweet Potato Mash.jpg";
import beefStirFryImg from "../../images/Beef Stir-Fry with Brown Rice.jpg";
import tunaWrapsImg from "../../images/Tuna Salad Lettuce Wraps.jpg";
import turkeyZoodlesImg from "../../images/rkey Meatballs Zucchini Noodles.jpg";
import omeletAvocadoImg from "../../images/Egg White Omelet with Avocado.jpg";
import lentilSoupImg from "../../images/Lentil Soup.jpg";
import chickenQuinoaBowlImg from "../../images/Chicken Quinoa Bowl.jpg";
import shrimpSkewersImg from "../../images/Shrimp Vegetable Skewers.jpg";
import overnightOatsImg from "../../images/Overnight Oats with Berries.jpg";
import tofuScrambleImg from "../../images/Tofu Scramble.jpg";
import blackBeanBurgerImg from "../../images/Black Bean Burgers.jpg";
import vegetarianChiliImg from "../../images/Vegetarian Chili.jpg";
import hummusSandwichImg from "../../images/Hummus Veggie Sandwich.jpg";
import mediterraneanQuinoaSaladImg from "../../images/Mediterranean Quinoa Salad.jpg";
import greekYogurtImg from "../../images/Greek Yogurt with Walnuts Honey.jpg";
import cottagePineappleImg from "../../images/Cottage Cheese Pineapple.jpg";
import hardBoiledEggsAppleImg from "../../images/Hard-Boiled Eggs Apple.jpg";
import edamamePodsImg from "../../images/Edamame Pods.jpg";
import chickenTikkaImg from "../../images/Chicken Tikka Skewers.jpg";
import shepherdPieImg from "../../images/Shepherd's Pie with Cauliflower Topping.jpg";
import breakfastSmoothieImg from "../../images/Breakfast Smoothie.jpg";
import pancakesImg from "../../images/Pancakes.jpg";
import leanBeefGreenBeansImg from "../../images/Grilled Lean Beef Steak Green Beans.jpg";

const newMealPlansData = [
  {
    id: 1,
    title: "Grilled Chicken & Asparagus",
    calories: 420,
    protein: 45,
    carbs: 15,
    fat: 20,
    description:
      "Classic high-protein, low-carb meal perfect for muscle repair and fat loss.",
    prepTime: "25 mins",
    imageUrl: grilledChickenImg,
    ingredients: [
      "170g Chicken Breast",
      "200g Asparagus",
      "1 Tbsp Olive Oil",
      "Lemon",
    ],
    preparation:
      "Season chicken breast with salt, pepper, and garlic powder. Grill over medium-high heat for 6-8 minutes per side until fully cooked. Toss asparagus with olive oil and a pinch of salt. Roast or steam until tender-crisp. Serve the chicken and asparagus together, finishing with a fresh squeeze of lemon juice.",
  },
  {
    id: 2,
    title: "Salmon & Sweet Potato Mash",
    calories: 550,
    protein: 38,
    carbs: 45,
    fat: 25,
    description:
      "Rich in Omega-3 fatty acids, supports brain and heart health.",
    prepTime: "30 mins",
    imageUrl: salmonSweetPotatoMashImg,
    ingredients: [
      "150g Salmon Fillet",
      "200g Sweet Potato",
      "Spinach",
      "Garlic",
    ],
    preparation:
      "Bake salmon fillet at 400°F (200°C) for 12-15 minutes until flaky. Peel and boil sweet potato until soft, then mash lightly with a splash of water and a dash of garlic powder. Quickly steam the spinach. Arrange the salmon, mash, and spinach on a plate.",
  },
  {
    id: 3,
    title: "Beef Stir-Fry with Brown Rice",
    calories: 480,
    protein: 35,
    carbs: 50,
    fat: 15,
    description:
      "Lean red meat for iron and energy, mixed with crisp vegetables.",
    prepTime: "20 mins",
    imageUrl: beefStirFryImg,
    ingredients: [
      "120g Lean Beef slices",
      "Mixed Peppers/Broccoli",
      "Soy Sauce",
      "100g Brown Rice",
    ],
    preparation:
      "Cook brown rice according to package directions. In a hot pan or wok, add a little oil and stir-fry the beef strips quickly until browned. Add the sliced vegetables and cook until tender-crisp. Add a light dressing of low-sodium soy sauce. Serve immediately over the brown rice.",
  },
  {
    id: 4,
    title: "Tuna Salad Lettuce Wraps",
    calories: 350,
    protein: 30,
    carbs: 10,
    fat: 20,
    description:
      "Quick, refreshing, and rich in protein and healthy fats.",
    prepTime: "10 mins",
    imageUrl: tunaWrapsImg,
    ingredients: [
      "Canned Tuna in Water",
      "1 Tbsp Light Mayo/Greek Yogurt",
      "Celery",
      "Large Lettuce Leaves",
    ],
    preparation:
      "Drain the canned tuna completely. In a bowl, mix the tuna with light mayonnaise or Greek yogurt and finely diced celery. Season with pepper. Scoop the mixture into large, fresh lettuce leaves to form wraps. Serve chilled.",
  },
  {
    id: 5,
    title: "Turkey Meatballs & Zucchini Noodles",
    calories: 380,
    protein: 40,
    carbs: 25,
    fat: 15,
    description:
      "Low-fat source of protein, great substitute for classic pasta.",
    prepTime: "35 mins",
    imageUrl: turkeyZoodlesImg,
    ingredients: ["150g Ground Turkey", "Zucchini", "Tomato Sauce", "Herbs"],
    preparation:
      "Mix ground turkey with herbs and form small meatballs. Bake at 375°F (190°C) for 20 minutes. Spiralize zucchini into noodles. Heat a low-sugar tomato sauce gently. Toss the noodles with the sauce just until warm. Top with the turkey meatballs.",
  },
  {
    id: 6,
    title: "Egg White Omelet with Avocado",
    calories: 300,
    protein: 25,
    carbs: 10,
    fat: 18,
    description: "Perfect breakfast or light meal for sustained energy.",
    prepTime: "15 mins",
    imageUrl: omeletAvocadoImg,
    ingredients: [
      "4 Egg Whites",
      "Mixed Vegetables",
      "1/4 Avocado",
      "Whole Wheat Toast",
    ],
    preparation:
      "Whisk egg whites with salt and pepper. Pour into a non-stick pan over medium heat. Add finely chopped mixed vegetables. Cook until set. Fold the omelet and serve immediately with sliced avocado and whole wheat toast.",
  },
  {
    id: 7,
    title: "Lentil Soup (Vegetarian)",
    calories: 320,
    protein: 18,
    carbs: 55,
    fat: 5,
    description:
      "High-fiber, low-fat, and highly filling, excellent for heart health.",
    prepTime: "40 mins",
    imageUrl: lentilSoupImg,
    ingredients: [
      "Lentils",
      "Vegetable Broth",
      "Carrots",
      "Celery",
      "Onions",
      "Spices",
    ],
    preparation:
      "Sauté diced carrots, celery, and onions in a large pot until soft. Add rinsed lentils, vegetable broth, and spices. Bring to a boil, then reduce heat and simmer, covered, for 30-40 minutes until lentils are tender.",
  },
  {
    id: 8,
    title: "Chicken Quinoa Bowl",
    calories: 450,
    protein: 40,
    carbs: 45,
    fat: 12,
    description:
      "A complete meal with healthy grains and lean protein.",
    prepTime: "25 mins",
    imageUrl: chickenQuinoaBowlImg,
    ingredients: [
      "130g Chicken Breast",
      "1 Cup Cooked Quinoa",
      "Black Beans",
      "Corn",
      "Lime",
    ],
    preparation:
      "Grill or bake chicken breast and slice. Cook quinoa as directed. Assemble the bowl by combining quinoa, cooked black beans, corn, and sliced chicken. Dress lightly with olive oil and lime juice.",
  },
  {
    id: 9,
    title: "Shrimp & Vegetable Skewers",
    calories: 390,
    protein: 32,
    carbs: 20,
    fat: 18,
    description:
      "Light and flavorful seafood option, perfect for grilling or baking.",
    prepTime: "25 mins",
    imageUrl: shrimpSkewersImg,
    ingredients: [
      "150g Shrimp",
      "Cherry Tomatoes",
      "Bell Peppers",
      "Onions",
      "Lemon",
    ],
    preparation:
      "Thread shrimp, cherry tomatoes, bell pepper chunks, and onion slices onto skewers. Brush with olive oil and lemon juice. Grill or bake at 400°F (200°C) for 10-12 minutes until shrimp are pink and cooked.",
  },
  {
    id: 10,
    title: "Overnight Oats with Berries",
    calories: 360,
    protein: 15,
    carbs: 50,
    fat: 10,
    description:
      "Easy, fiber-rich breakfast, prepared the night before.",
    prepTime: "5 mins + overnight",
    imageUrl: overnightOatsImg,
    ingredients: [
      "1/2 Cup Rolled Oats",
      "1 Cup Almond Milk",
      "Chia Seeds",
      "Mixed Berries",
    ],
    preparation:
      "In a jar, mix rolled oats, almond milk, and chia seeds. Refrigerate overnight. In the morning, stir well and top with mixed berries before serving.",
  },
  {
    id: 11,
    title: "Tofu Scramble",
    calories: 340,
    protein: 25,
    carbs: 30,
    fat: 15,
    description:
      "Protein-packed vegan alternative to scrambled eggs.",
    prepTime: "15 mins",
    imageUrl: tofuScrambleImg,
    ingredients: [
      "1 Block Firm Tofu",
      "Turmeric",
      "Bell Peppers",
      "Onion",
      "Spinach",
    ],
    preparation:
      "Press tofu to remove excess water, then crumble it. Sauté onions and bell peppers, add tofu and turmeric, and cook until heated. Stir in spinach until wilted.",
  },
  {
    id: 12,
    title: "Black Bean Burgers",
    calories: 480,
    protein: 22,
    carbs: 60,
    fat: 18,
    description:
      "Satisfying vegetarian burger, high in fiber and complex carbs.",
    prepTime: "30 mins",
    imageUrl: blackBeanBurgerImg,
    ingredients: [
      "Black Beans",
      "Breadcrumbs",
      "Spices",
      "Whole Wheat Bun",
      "Tomato",
      "Lettuce",
    ],
    preparation:
      "Partially mash black beans. Mix with breadcrumbs, onions, and spices. Form patties and bake or grill until firm. Serve on a whole wheat bun with tomato and lettuce.",
  },
  {
    id: 13,
    title: "Vegetarian Chili",
    calories: 400,
    protein: 20,
    carbs: 65,
    fat: 8,
    description:
      "Warm, hearty, and full of fiber from beans and vegetables.",
    prepTime: "45 mins",
    imageUrl: vegetarianChiliImg,
    ingredients: [
      "Kidney Beans",
      "Pinto Beans",
      "Diced Tomatoes",
      "Corn",
      "Chili Powder",
    ],
    preparation:
      "Sauté onions and garlic. Add tomatoes, beans, corn, and broth. Season with chili powder and cumin. Simmer for at least 30 minutes.",
  },
  {
    id: 14,
    title: "Hummus & Veggie Sandwich",
    calories: 350,
    protein: 15,
    carbs: 45,
    fat: 12,
    description:
      "A quick, fresh lunch option, rich in fiber and healthy fats.",
    prepTime: "5 mins",
    imageUrl: hummusSandwichImg,
    ingredients: [
      "2 Slices Whole Wheat Bread",
      "Hummus",
      "Cucumber Slices",
      "Shredded Carrots",
    ],
    preparation:
      "Toast bread lightly if desired. Spread hummus, then layer with cucumber, shredded carrots, and spinach. Close the sandwich and serve.",
  },
  {
    id: 15,
    title: "Mediterranean Quinoa Salad",
    calories: 390,
    protein: 14,
    carbs: 50,
    fat: 15,
    description:
      "A vibrant, refreshing salad with a balance of macro-nutrients.",
    prepTime: "20 mins",
    imageUrl: mediterraneanQuinoaSaladImg,
    ingredients: [
      "Cooked Quinoa",
      "Cucumber",
      "Tomatoes",
      "Olives",
      "Feta Cheese (optional)",
      "Olive Oil",
    ],
    preparation:
      "Combine cooled quinoa with chopped cucumber, tomatoes, olives, and feta if using. Dress with olive oil, vinegar, salt, and oregano.",
  },
  {
    id: 16,
    title: "Greek Yogurt with Walnuts & Honey",
    calories: 280,
    protein: 25,
    carbs: 20,
    fat: 12,
    description:
      "Excellent post-workout snack or small breakfast, packed with probiotics and protein.",
    prepTime: "5 mins",
    imageUrl: greekYogurtImg,
    ingredients: [
      "1 Cup Plain Greek Yogurt",
      "1/4 Cup Walnuts",
      "1 Tsp Honey",
    ],
    preparation:
      "Place yogurt in a bowl, top with chopped walnuts and drizzle with honey. Serve chilled.",
  },
  {
    id: 17,
    title: "Cottage Cheese & Pineapple",
    calories: 250,
    protein: 30,
    carbs: 20,
    fat: 5,
    description:
      "Slow-digesting protein, great before bed or as a filling snack.",
    prepTime: "5 mins",
    imageUrl: cottagePineappleImg,
    ingredients: [
      "1 Cup Low-Fat Cottage Cheese",
      "1/2 Cup Diced Pineapple",
    ],
    preparation:
      "Scoop cottage cheese into a bowl and top with diced pineapple. Sprinkle with cinnamon if desired.",
  },
  {
    id: 18,
    title: "Hard-Boiled Eggs & Apple",
    calories: 240,
    protein: 12,
    carbs: 25,
    fat: 10,
    description:
      "Simple, portable, and high in fiber and complete protein.",
    prepTime: "15 mins",
    imageUrl: hardBoiledEggsAppleImg,
    ingredients: ["2 Hard-Boiled Eggs", "1 Medium Apple"],
    preparation:
      "Boil eggs until hard, peel, and serve alongside a washed apple.",
  },
  {
    id: 19,
    title: "Edamame Pods (Steamed)",
    calories: 200,
    protein: 17,
    carbs: 15,
    fat: 8,
    description:
      "Healthy plant-based snack, rich in protein and magnesium.",
    prepTime: "10 mins",
    imageUrl: edamamePodsImg,
    ingredients: ["1 Cup Edamame Pods", "Salt"],
    preparation:
      "Steam or boil edamame pods for 5-7 minutes until tender. Drain and sprinkle lightly with salt.",
  },
  {
    id: 20,
    title: "Chicken Tikka Skewers (Dry)",
    calories: 430,
    protein: 42,
    carbs: 20,
    fat: 20,
    description:
      "Lean marinated chicken (dry preparation), full of flavor.",
    prepTime: "30 mins",
    imageUrl: chickenTikkaImg,
    ingredients: [
      "150g Chicken Cubes",
      "Yogurt Marinade",
      "Spices (Tikka Masala, Garam Masala)",
    ],
    preparation:
      "Marinate chicken cubes in yogurt and spices for at least 30 minutes. Thread onto skewers and grill or bake at 400°F (200°C) until cooked and lightly charred.",
  },
  {
    id: 21,
    title: "Shepherd's Pie with Cauliflower Topping",
    calories: 490,
    protein: 35,
    carbs: 35,
    fat: 25,
    description:
      "A comforting dish with a low-carb mash substitute.",
    prepTime: "50 mins",
    imageUrl: shepherdPieImg,
    ingredients: [
      "Ground Beef or Turkey",
      "Mixed Vegetables",
      "Cauliflower (for topping)",
    ],
    preparation:
      "Brown ground meat with onions and mixed vegetables. Place in an oven dish. Steam and mash cauliflower, then spread on top and bake until golden.",
  },
  {
    id: 22,
    title: "Breakfast Smoothie (Protein)",
    calories: 380,
    protein: 30,
    carbs: 40,
    fat: 10,
    description:
      "Fast, easy way to pack nutrients and protein on the go.",
    prepTime: "5 mins",
    imageUrl: breakfastSmoothieImg,
    ingredients: [
      "1 Scoop Protein Powder",
      "Banana",
      "Spinach",
      "Almond Milk",
    ],
    preparation:
      "Blend protein powder, banana, spinach, and almond milk until smooth. Adjust liquid for desired consistency.",
  },
  {
    id: 23,
    title: "Pancakes (Protein Powder Base)",
    calories: 350,
    protein: 35,
    carbs: 30,
    fat: 10,
    description:
      "A healthy twist on a classic, high in protein.",
    prepTime: "20 mins",
    imageUrl: pancakesImg,
    ingredients: [
      "Protein Powder",
      "Oat Flour",
      "Egg Whites",
      "Baking Powder",
      "Berries",
    ],
    preparation:
      "Mix protein powder, oat flour, egg whites, baking powder, and liquid to form a batter. Cook pancakes on a hot pan and top with berries.",
  },
  {
    id: 24,
    title: "Grilled Lean Beef Steak & Green Beans",
    calories: 460,
    protein: 45,
    carbs: 20,
    fat: 22,
    description:
      "Simple, flavorful meal, high in iron and B vitamins.",
    prepTime: "30 mins",
    imageUrl: leanBeefGreenBeansImg,
    ingredients: [
      "150g Lean Beef Steak",
      "Green Beans",
      "Garlic",
      "Butter or Olive Oil",
    ],
    preparation:
      "Season the lean beef steak and pan-sear for 4-6 minutes per side or to preference. Steam green beans, then sauté briefly with garlic and a little butter or olive oil.",
  },
];

const MealCard = ({ meal }) => (
  <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-shadow duration-300 hover:shadow-2xl flex flex-col h-full">
    <img
      src={meal.imageUrl}
      alt={meal.title}
      className="w-full h-48 object-cover"
    />
    <div className="p-5 flex flex-col flex-grow">
      <h3 className="text-xl font-bold text-red-600 mb-2">{meal.title}</h3>
      <p className="text-gray-600 text-sm mb-4 flex-grow">
        {meal.description}
      </p>

      <div className="flex justify-between text-xs text-gray-500 mb-4 border-b pb-2">
        <span>🕒 {meal.prepTime}</span>
        <span className="font-bold text-gray-800">{meal.calories} kcal</span>
      </div>

      <div className="grid grid-cols-3 gap-2 text-center text-sm font-semibold mb-4">
        <div className="bg-red-50 p-2 rounded-lg text-red-700">
          P: {meal.protein}g
        </div>
        <div className="bg-yellow-50 p-2 rounded-lg text-yellow-700">
          C: {meal.carbs}g
        </div>
        <div className="bg-blue-50 p-2 rounded-lg text-blue-700">
          F: {meal.fat}g
        </div>
      </div>

      <div className="bg-gray-100 p-3 rounded-lg mt-auto">
        <h4 className="font-semibold text-sm text-gray-800 mb-2">
          Key Ingredients:
        </h4>
        <ul className="list-disc list-inside text-xs text-gray-600 space-y-1">
          {meal.ingredients.map((ing, i) => (
            <li key={i}>{ing}</li>
          ))}
        </ul>
      </div>

      <details className="text-gray-700 text-sm mt-3">
        <summary className="font-semibold cursor-pointer text-gray-800">
          Preparation Method
        </summary>
        <p className="mt-2 p-2 bg-gray-50 rounded-lg whitespace-pre-wrap text-xs">
          {meal.preparation}
        </p>
      </details>
    </div>
  </div>
);

const MealPlansPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto py-12">
        <h1 className="text-4xl font-extrabold text-gray-900 border-b border-red-600 pb-3 mb-2">
          <span className="text-red-600">Explore</span> 24 Healthy Meal Plans
        </h1>
        <p className="text-xl text-gray-700 mb-10">
          Browse and compare 24 detailed meal options tailored to different
          fitness goals.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {newMealPlansData.map((meal) => (
            <MealCard key={meal.id} meal={meal} />
          ))}
        </div>

        <div className="mt-16 p-8 bg-white rounded-xl shadow-lg border-t-4 border-green-500 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">
            Want a Custom Plan?
          </h3>
          <p className="text-gray-600 mb-5">
            Create your own meal plan tailored to your exact caloric and macro
            needs.
          </p>
          <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full transition duration-200 shadow-md shadow-green-500/50">
            Create New Custom Plan
          </button>
        </div>
      </div>
      <StickyContactChannel />
    </div>
  );
};

export default MealPlansPage;
