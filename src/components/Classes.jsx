
import React, { useState } from "react";

function Classes() {

  const classCategories = [
  "All",
  "Cardio",
  "Strength",
  "Flexibility",
  "Mind & Body",
];
const [activeCategory, setActiveCategory] = useState("All");

const classList = [
  {
    name: "HIIT Challenge",
    category: "Cardio",
    image:
      "https://images.unsplash.com/photo-1517130038641-a774d04afb3c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    duration: "45 min",
    instructor: "Alex Johnson",
    time: "Mon, Wed, Fri - 7:00 AM",
  },
  {
    name: "Power Lifting",
    category: "Strength",
    image:
      "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
    duration: "60 min",
    instructor: "Mike Peterson",
    time: "Tue, Thu - 6:00 PM",
  },
  {
    name: "Yoga Flow",
    category: "Flexibility",
    image: "https://images.unsplash.com/photo-1603988363607-e1e4a66962c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    duration: "60 min",
    instructor: "Sarah Chen",
    time: "Mon, Wed, Fri - 6:00 PM",
},
{
    name: "Spin Class",
    category: "Cardio",
    image: "https://images.unsplash.com/photo-1534787238916-9ba6764efd4f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1331&q=80",
    duration: "45 min",
    instructor: "Jessica Miller",
    time: "Tue, Thu, Sat - 8:00 AM",
},
{
  name: "Meditation",
  category: "Mind & Body",
  image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&ixid=M3wxiAjTsDB8MhxwaG90by1wVdlfhx8fGVufD88fhx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  duration: "30 min",
  instructor: "David Kim",
  time: "Mon, Wed, Fri - 7:00 PM",
},

{
  name: "CrossFit",
  category: "Strength",
  image: "https://images.unsplash.com/photo-1598971639058-fab3c3109a00?ixlib=rb-4.0.3&ixid=M3wxiAjTsDB8MhxwaG90by1wVdlfhx8fGVufD88fhx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
  duration: "60 min",
  instructor: "Ryan Martinez",
  time: "Mon, Wed, Fri - 5:30 PM",
},
{
  name: "Pilates",
  category: "Flexibility",
  image: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?ixlib=rb-4.0.3&ixid=M3wxiAjTsDB8MhxwaG90by1wVdlfhx8fGVufD88fhx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  duration: "45 min",
  instructor: "Emma Wilson",
  time: "Tue, Thu - 10:00 AM",
},
{
  name: "Zumba",
  category: "Cardio",
  image: "https://images.unsplash.com/photo-1533681904393-9ab6eee7e408?ixlib=rb-4.0.3&ixid=M3wxiAjTsDB8MhxwaG90by1wVdlfhx8fGVufD88fhx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  duration: "60 min",
  instructor: "Sofia Rodriguez",
  time: "Mon, Wed, Fri - 6:30 PM",
},
];

  const filteredClasses = activeCategory === "All" ? classList : classList.filter((cls) => cls.category === activeCategory);

  return (
    <div id="classes" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Classes
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600 text-lg">
            From high-intensity workouts to mindful movements, we offer a wide
            range of classes for all fitness levels
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {/* I will use Logic */}
           {classCategories.map((category,index) => (
            <button className={`px-6 py-2 rounded-full transition duration-300 ${activeCategory === category ? "bg-red-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`} onClick={()=> setActiveCategory(category)}>
            {category}
          </button>
          ))}

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* will use Logic */}
       {filteredClasses.map((cls,index)=>{
          return <div className="bg-gray-50 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition duration-300">
            <div className="h-56 overflow-hidden">
              <img 
              src={cls.image} 
              alt={cls.name}
              className="w-full h-full object-cover transition duration-500 hover:scale-110"
              />
            </div>
            <div className="p-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-red-600 bg-red-100 px-3 py-1 rounded-full">{cls.category}</span>
                <span className="text-sm  text-gray-600">{cls.duration}</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{cls.name}</h3>
              <p className="text-gray-600 mb-4">{cls.instructor}</p>
              <div className="flex items-center text-gray-500 text-sm">
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 mr-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                  </svg>
                  Time
              </div>
            </div>
          </div>
       }
      
      
      )}
        </div>
        <div className="text-center mt-12">
          <a href="#" className="inline-block border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white px-6 py-3 rounded-md font-medium transition duration-300">
           View Full Schedule  
          </a>
        </div>
      </div>
    </div>
    
  )
}

export default Classes