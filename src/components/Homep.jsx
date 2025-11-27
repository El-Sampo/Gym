import React from "react";
import { Link } from "react-router";

function Homep() {
  return (
    <div
      id="home"
      className="relative min-h-screen flex items-center justify-center"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage:
            "url('https://media.istockphoto.com/id/610431768/photo/fitness-club-in-luxury-hotel-interior.jpg?s=1024x1024&w=is&k=20&c=KAgvthApfosmXj4y07XZ7YZuMliVvdGA1DF7hfkDd24=')",
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col lg:flex-row justify-between items-center w-full max-w-6xl px-6 sm:px-8 lg:px-12 py-12 gap-10 lg:gap-0">
        {/* Left Side */}
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6">
            Transform <span className="text-red-500">Your Body</span>
            <br />
            Transform <span className="text-red-500">Your Life</span>
          </h1>
          <p className="text-white text-base sm:text-lg mb-8 md:mb-10 max-w-xl mx-auto lg:mx-0">
            Join FITELITE and experience premium fitness with state-of-the-art
            facilities, expert trainers, and a supportive community committed to
            your success.
          </p>
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 sm:gap-6 mb-8">
            <a href="/classespage">
              {" "}
              <button className="bg-red-500 text-white font-semibold px-6 py-3 rounded-full shadow hover:bg-white hover:text-red-500 transition">
                Explore Classes
              </button>
            </a>
            <a href="/pricingpage">
              {" "}
              <button className="bg-transparent border-2 border-white text-white font-semibold px-6 py-3 rounded-full hover:bg-white hover:text-black transition">
                View Membership
              </button>
            </a>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <div className="flex -space-x-2 mb-2 sm:mb-0">
              <img
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="member"
                className="w-10 h-10 rounded-full border-2 border-white"
              />
              <img
                src="https://randomuser.me/api/portraits/women/44.jpg"
                alt="member"
                className="w-10 h-10 rounded-full border-2 border-white"
              />
              <img
                src="https://randomuser.me/api/portraits/men/76.jpg"
                alt="member"
                className="w-10 h-10 rounded-full border-2 border-white"
              />
              <img
                src="https://randomuser.me/api/portraits/women/65.jpg"
                alt="member"
                className="w-10 h-10 rounded-full border-2 border-white"
              />
            </div>
            <span className="text-white font-medium text-center sm:text-left">
              1,000+ members
              <br />
              <span className="text-sm text-gray-300">
                Join our fitness community
              </span>
            </span>
          </div>
        </div>

        {/* Right Side Card */}
        <div className="flex-1 flex justify-center lg:justify-end">
          <div className="bg-black/70 rounded-3xl p-8 sm:p-10 w-full max-w-sm shadow-lg text-white">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center lg:text-left">
              Why Choose Us
            </h2>
            <ul className="space-y-4 sm:space-y-6">
              <li className="flex items-start gap-3 sm:gap-4">
                <span className="text-red-500 text-xl sm:text-2xl mt-1">●</span>
                <div>
                  <div className="font-semibold">Premium Equipment</div>
                  <div className="text-gray-300 text-sm sm:text-base">
                    Access to the latest fitness technology and high-quality
                    equipment
                  </div>
                </div>
              </li>
              <li className="flex items-start gap-3 sm:gap-4">
                <span className="text-red-500 text-xl sm:text-2xl mt-1">●</span>
                <div>
                  <div className="font-semibold">Expert Trainers</div>
                  <div className="text-gray-300 text-sm sm:text-base">
                    Certified professionals to guide your fitness journey
                  </div>
                </div>
              </li>
              <li className="flex items-start gap-3 sm:gap-4">
                <span className="text-red-500 text-xl sm:text-2xl mt-1">●</span>
                <div>
                  <div className="font-semibold">Flexible Hours</div>
                  <div className="text-gray-300 text-sm sm:text-base">
                    Open 24/7 to fit your busy schedule
                  </div>
                </div>
              </li>
            </ul>
            <div className="mt-6 sm:mt-8 text-center lg:text-left">
              <a
                href="/aboutpage"
                className="text-red-500 font-medium hover:underline"
              >
                Discover all features &rarr;
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homep;
