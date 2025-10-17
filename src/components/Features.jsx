import React, { useState } from "react";

const features = [
  {
    title: "Cutting-Edge Equipment",
    description: "Experience premium fitness with state-of-the-art equipment featuring the latest technology...",
    details:
      "Elite Personal Training\nOur certified trainers bring expertise and personalized attention to help you achieve your goals, with customized workouts and ongoing motivation.",
    image:
      "",
  },
  {
    title: "Accessible 24/7",
    description: "Your fitness journey doesn’t stop when the sun sets. Enjoy unlimited access to our...",
    details:
      "Accessible 24/7\nYour fitness journey doesn’t stop when the sun sets. Enjoy unlimited access to our facilities.",
    image:
      "./",
  },
  {
    title: "Elite Personal Training",
    description: "Our certified trainers bring expertise and personalized attention to help you achieve...",
    details:
      "Elite Personal Training\nOur certified trainers bring expertise and personalized attention to help you achieve your goals, with customized workouts and ongoing motivation.",
    image:
      "/images/Elite PersonalTraining.jpg",
  },
  {
    title: "Luxury Amenities",
    description: "Enjoy premium amenities including spa-quality changing rooms, towel service...",
    details:
      "Luxury Amenities\nEnjoy premium amenities including spa-quality changing rooms, towel service, and more.",
    image:
      "/images/Luxury Amenities.jpg",
  },
  {
    title: "Customized Programs",
    description: "Achieve your specific fitness goals with our tailored programs that adapt to your...",
    details:
      "Customized Programs\nAchieve your specific fitness goals with our tailored programs that adapt to your needs.",
    image:
      "/images/Customized Programs.jpg",
  },
  {
    title: "Fitness App Integration",
    description: "Track your progress, book classes, and connect with trainers through our dedicated app...",
    details:
      "Fitness App Integration\nTrack your progress, book classes, and connect with trainers through our dedicated app.",
    image:
      "/images/Fitness App Integration.jpg",
  },
];

function FeaturesSection() {
  const [selected, setSelected] = useState(2);

  return (
    <section className="bg-white py-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 px-6">
        {/* Feature List */}
        <div className="flex-1">
          <div className="flex flex-col gap-4">
            {features.map((feat, idx) => (
              <div
                key={feat.title}
                className={`cursor-pointer p-5 rounded-xl transition-all ${
                  idx === selected
                    ? "bg-white border-l-4 border-red-500 shadow-md"
                    : "bg-gray-100 hover:bg-white"
                }`}
                onClick={() => setSelected(idx)}
              >
                <div className="font-bold text-lg">{feat.title}</div>
                <div className="text-gray-500 text-sm">{feat.description}</div>
              </div>
            ))}
          </div>
        </div>
        {/* Feature Details and Stats */}
        <div className="flex-1 flex flex-col items-center">
          <div className="w-full h-96 rounded-2xl overflow-hidden shadow-lg mb-4 flex items-center justify-center bg-black/10">
            <img
              src={features[selected].image}
              alt={features[selected].title}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="w-full mb-8">
            <div className="text-xl font-bold mb-2">
              {features[selected].title}
            </div>
            <div className="text-gray-600 whitespace-pre-line">{features[selected].details}</div>
          </div>
          {/* Stats here */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full mb-6">
            <div className="bg-white shadow rounded-lg px-6 py-6 text-center">
              <div className="text-3xl font-extrabold text-red-500 mb-1">50+</div>
              <div className="text-gray-700 font-medium text-sm">Fitness Classes</div>
            </div>
            <div className="bg-white shadow rounded-lg px-6 py-6 text-center">
              <div className="text-3xl font-extrabold text-red-500 mb-1">24/7</div>
              <div className="text-gray-700 font-medium text-sm">Access</div>
            </div>
            <div className="bg-white shadow rounded-lg px-6 py-6 text-center">
              <div className="text-3xl font-extrabold text-red-500 mb-1">15+</div>
              <div className="text-gray-700 font-medium text-sm">Expert Trainers</div>
            </div>
            <div className="bg-white shadow rounded-lg px-6 py-6 text-center">
              <div className="text-3xl font-extrabold text-red-500 mb-1">1000+</div>
              <div className="text-gray-700 font-medium text-sm">Happy Members</div>
            </div>
          </div>
          <div className="flex justify-center w-full">
            <button className="mt-2 bg-red-500 hover:bg-red-600 text-white font-semibold px-8 py-4 rounded-full transition">
              Explore Our Membership Options &rarr;
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;