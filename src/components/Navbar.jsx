import React from "react";
import { useState } from "react";

function Navbar({ activeSection }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navlinks = [
    { name: "Home", href: "#home", id: "home" },
    { name: "Features", href: "#features", id: "features" },
    { name: "About", href: "#about", id: "about" },
    { name: "Classes", href: "#classes", id: "classes" },
    { name: "Pricing", href: "#pricing", id: "pricing" },
    { name: "Trainers", href: "#trainers", id: "trainers" },
    { name: "Testimonials", href: "#testimonials", id: "testimonials" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];
  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span
                className={`text-2xl font-extrabold ${
                  scrolled ? "text-gray-900" : "text-white"
                }`}
              >
                FIT<span className="text-red-600">ELITE</span>
              </span>
              <div
                className={`ml-2 w-2 rounded-full animate-pulse ${
                  scrolled ? "bg-red-600" : "bg-white"
                }`}
              ></div>
            </div>
          </div>

          {/*Desktop menus*/}
          <div className="hidden lg:flex items-center space-x-1">
            {/*map method*/}
            {navlinks.map((link) => (
              <a
                href={link.href}
                key={link.id}
                className={`px-3 py-2 mx-1 text-sm font-medium transition-all duration-300 relative group `}
              >
                {link.name}
                <span
                  className={`absolute bottom-0 left-0 w-full h-0.5 bg-red-600 group-hover:w-full transform origin-left scale-x-0 group-hover:scale-x-100 transition-all duration-300`}
                ></span>
              </a>
            ))}

            <a
              href="#join"
              className={`ml-3 px-6 py-2 rounded-full font-medium text-sm transition-all duration-300 transform hover:translate-y-[-2px] ${
                scrolled
                  ? "bg-red-600 text-white hover:bg-red-700 hover-shadow-lg"
                  : "bg-white text-red-700 hover:bg-gray-100 hover-shadow-lg"
              }`}
            >
              Join Now
            </a>
          </div>

          {/*Mobile menus btn*/}
          <div className="lg:hidden flex items-center">
            <button
              className={`p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-500 ${
                scrolled ? "text-gray-800" : "text-white"
              }`}
              onClick={toggleMenu}
            >
              <span className="sr-only">
                {isOpen ? "Close menu" : "Open menu"}
              </span>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                {/*conditional rendering */}

                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/*Mobile menu*/}
      <div
        className={`lg:hidden transition-all duration-300 ease-in-out ${
          isOpen
            ? "max-h-[420px] opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="px-3 pt-2 pb-3 space-y-1 bg-white/95 backdrop-blur-md shadow-lg border-gray-100 ">
          {/*map method*/}
          {navlinks.map((link) => (
            <a
              href={link.href}
              className={`block px-4 pt-2.5 rounded-lg text-base font-medium transition-all duration-300 `}
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2 pb-1 ">
            <a
              href="#join"
              className={`ml-3 px-6 py-2 rounded-full font-medium text-sm transition-all duration-300 transform hover:translate-y-[-2px] ${
                scrolled
                  ? "bg-red-600 text-white hover:bg-red-700 hover-shadow-lg"
                  : "bg-white text-red-700 hover:bg-gray-100 hover-shadow-lg"
              }`}
            >
              Join Now
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
