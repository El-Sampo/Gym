import React, { useState, useCallback } from "react";

const testimonials = [
  {
    quote:
      "FitLife completely transformed my fitness journey. The trainers are knowledgeable, and the community is so supportive!",
    author: "Jane Doe",
    role: "Member since 2019",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dXNlcnN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500",
  },
  {
    quote:
      "I have tried many gyms, but FitLife stands out with its premium equipment and variety of quick, effective classes worth every penny.",
    author: "Alex Smith",
    role: "Lifetime Member",
    image:
      "https://plus.unsplash.com/premium_photo-1688350808212-4e6908a03925?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dXNlcnN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500",
  },
  {
    quote:
      "The personal training at FitLife helped me achieve results I never thought possible. I'm stronger and healthier now!",
    author: "Chloe Evans",
    role: "Model since 2022",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dXNlcnN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500",
  },
  {
    quote:
      "The trainers are professional, the gym's access and variety of quick, effective classes make FitLife perfect for my schedule.",
    author: "Mike Johnson",
    role: "Active Member",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHVzZXJzfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500",
  },
];

const App = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const prevTestimonial = useCallback(() => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  }, []);

  const nextTestimonial = useCallback(() => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  }, []);

  const currentTestimonial = testimonials[activeIndex];

  return (
    <div id="testimonials" className="testimonials py-16 bg-gray-50 font-['Inter'] min-h-screen flex items-center justify-center">
      <div className="w-full max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What our verified members say
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600 text-lg">
            Read testimonials from thousands of satisfied members.
          </p>
        </div>

        {/* Testimonial Card */}
        <div className="flex flex-col md:flex-row shadow-lg rounded-xl overflow-hidden">
          {/* Left: Image */}
          <div className="w-full md:w-1/3 flex-shrink-0 p-6 flex items-center justify-center bg-white">
            <img
              src={currentTestimonial.image}
              alt={`Profile of ${currentTestimonial.author}`}
              className="w-24 h-24 rounded-full object-cover"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src =
                  "https://placehold.co/96x96/9CA3AF/ffffff?text=User";
              }}
            />
          </div>

          {/* Right: Quote */}
          <div className="w-full md:w-2/3 flex-grow bg-red-50 p-6 text-center md:text-left relative">
            {/* Quote Icon */}
            <div className="flex justify-center md:justify-start mb-3">
              <svg
                className="w-8 h-8 text-red-200"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M10.5 4.5V11C10.5 13.7614 8.26142 16 5.5 16C2.73858 16 0.5 13.7614 0.5 11V4.5C0.5 3.67157 1.17157 3 2 3H8.5C9.32843 3 10 3.67157 10 4.5V11H10.5ZM20.5 4.5V11C20.5 13.7614 18.2614 16 15.5 16C12.7386 16 10.5 13.7614 10.5 11V4.5C10.5 3.67157 11.1716 3 12 3H18.5C19.3284 3 20 3.67157 20 4.5V11H20.5Z" />
              </svg>
            </div>

            <blockquote className="text-base md:text-lg text-gray-700 italic mb-4">
              {currentTestimonial.quote}
            </blockquote>

            <div>
              <p className="text-sm font-semibold text-gray-900">
                {currentTestimonial.author}
              </p>
              <p className="text-xs text-red-600">{currentTestimonial.role}</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-center mt-6 space-x-2 items-center">
          <button
            onClick={prevTestimonial}
            aria-label="Previous testimonial"
            className="w-8 h-8 p-1 rounded-full bg-white shadow hover:shadow-md transition duration-300 text-gray-600 hover:text-red-500"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              aria-label={`Go to testimonial ${index + 1}`}
              className={`w-3 h-3 rounded-full transition duration-300 ${
                index === activeIndex
                  ? "bg-red-500 shadow-md"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}

          <button
            onClick={nextTestimonial}
            aria-label="Next testimonial"
            className="w-8 h-8 p-1 rounded-full bg-white shadow hover:shadow-md transition duration-300 text-gray-600 hover:text-red-500"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
