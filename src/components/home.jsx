import React from "react";

export default function HomeLanding() {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-black">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage:
            "url('https://media.istockphoto.com/id/610431768/photo/fitness-club-in-luxury-hotel-interior.jpg?s=1024x1024&w=is&k=20&c=KAgvthApfosmXj4y07XZ7YZuMliVvdGA1DF7hfkDd24=')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-70" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-row justify-between items-center w-full max-w-6xl px-12 py-12">
        {/* Left Side */}
        <div className="flex-1">
          <h1 className="text-white text-6xl font-extrabold mb-6">
            Transform <span className="text-red-500">Your Body</span>
            <br />
            Transform <span className="text-pink-400">Your Life</span>
          </h1>
          <p className="text-white text-lg mb-10 max-w-xl">
            Join FITELITE and experience premium fitness with state-of-the-art facilities, expert trainers, and a supportive community committed to your success.
          </p>
          <div className="flex gap-6 mb-8">
            <button className="bg-red-500 text-white font-semibold px-6 py-3 rounded-full shadow hover:bg-white hover:text-red-500 transition">
              Explore Classes
            </button>
            <button className="bg-transparent border-2 border-white text-white font-semibold px-6 py-3 rounded-full hover:bg-white hover:text-black transition">
              View Membership
            </button>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex -space-x-2">
              <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="member" className="w-10 h-10 rounded-full border-2 border-white" />
              <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="member" className="w-10 h-10 rounded-full border-2 border-white" />
              <img src="https://randomuser.me/api/portraits/men/76.jpg" alt="member" className="w-10 h-10 rounded-full border-2 border-white" />
              <img src="https://randomuser.me/api/portraits/women/65.jpg" alt="member" className="w-10 h-10 rounded-full border-2 border-white" />
            </div>
            <span className="text-white font-medium">
              1,000+ members<br />
              <span className="text-sm text-gray-300">Join our fitness community</span>
            </span>
          </div>
        </div>

        {/* Right Side Card */}
        <div className="flex-1 flex justify-end">
          <div className="bg-black bg-opacity-70 rounded-3xl p-10 w-96 shadow-lg text-white">
            <h2 className="text-2xl font-bold mb-6">Why Choose Us</h2>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <span className="text-red-500 text-2xl mt-1">●</span>
                <div>
                  <div className="font-semibold">Premium Equipment</div>
                  <div className="text-gray-300 text-sm">Access to the latest fitness technology and high-quality equipment</div>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-red-500 text-2xl mt-1">●</span>
                <div>
                  <div className="font-semibold">Expert Trainers</div>
                  <div className="text-gray-300 text-sm">Certified professionals to guide your fitness journey</div>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-red-500 text-2xl mt-1">●</span>
                <div>
                  <div className="font-semibold">Flexible Hours</div>
                  <div className="text-gray-300 text-sm">Open 24/7 to fit your busy schedule</div>
                </div>
              </li>
            </ul>
            <div className="mt-8">
              <a href="#" className="text-red-500 font-medium hover:underline">
                Discover all features &rarr;
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 text-white flex flex-col items-center opacity-80">
        <span>Scroll to discover</span>
        <span className="animate-bounce text-2xl mt-2">↓</span>
      </div>
    </div>
  );
}