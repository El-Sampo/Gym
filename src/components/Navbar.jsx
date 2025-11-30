import React, { useEffect } from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { User, LogOut } from 'lucide-react';

function Navbar({ activeSection, setActiveSection, onOpenAuthModal, currentUser, onLogout }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navlinks = [
    { name: "Home", href: "/", id: "home" },
    { name: "About", href: "/aboutpage", id: "about" },
    { name: "Classes", href: "/classespage", id: "classes" },
    { name: "Pricing", href: "/pricingpage", id: "pricing" },
    { name: "FitnessTracker", href: "/fitnesstracker", id: "fitnesstracker" },
    { name: "Exercises", href: "/exercises", id: "exercises" },
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
              <span className={`text-gray-900 text-2xl font-extrabold `}>
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
              <NavLink
                to={link.href}
                key={link.id}
                onClick={() => setActiveSection(link.id)}
                className={`px-3 py-2 mx-1 text-sm font-medium transition-all duration-300 relative group
                  ${
                    activeSection === link.id
                      ? "text-red-600"
                      : "text-black hover:text-red-600"
                  }  
                `}
              >
                {link.name}
                <span
                  className={`absolute bottom-0 left-0 w-full h-0.5 bg-red-600 group-hover:w-full transform origin-left scale-x-0 group-hover:scale-x-100 transition-all duration-300 ${
                    activeSection === link.id ? "scale-x-100" : ""
                  }`}
                ></span>
              </NavLink>
            ))}
            
            {/* Join Now Button - Desktop */}
            <NavLink
              to="/contactpage"
              className="ml-3 px-6 py-2 rounded-full font-medium text-sm transition-all duration-300 transform hover:translate-y-[-2px] bg-red-600 text-white hover:bg-red-700 hover:shadow-lg"
            >
              Join Now
            </NavLink>

            {/* Auth Button Section - Desktop */}
            {currentUser ? (
              <div className="flex items-center space-x-3 ml-4">
                <div className="flex items-center space-x-2 bg-gray-100 px-3 py-2 rounded-lg">
                  <User className="w-4 h-4 text-gray-600" />
                  <span className="text-gray-700 font-medium text-sm">
                    {currentUser.name}
                  </span>
                </div>
                <button
                  onClick={onLogout}
                  className="flex items-center space-x-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition duration-300"
                >
                  <LogOut className="w-4 h-4" />
                  <span className="text-sm font-medium">Logout</span>
                </button>
              </div>
            ) : (
              <button
                onClick={onOpenAuthModal}
                className="ml-3 px-6 py-2 rounded-full font-medium text-sm transition-all duration-300 transform hover:translate-y-[-2px] bg-gray-800 text-white hover:bg-gray-900 hover:shadow-lg"
              >
                Login / Sign Up
              </button>
            )}
          </div>

          {/*Mobile menus btn*/}
          <div className="lg:hidden flex items-center">
            <button
              className={`p-2 rounded-full outline-none ring-2 ring-inset ring-red-500 text-gray-800 `}
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
            ? "max-h-[500px] opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="px-3 pt-2 pb-3 space-y-1 bg-white/95 backdrop-blur-md shadow-lg border-gray-100 ">
          {/*map method*/}
          {navlinks.map((link) => (
            <NavLink
              key={link.href}
              to={link.href}
              onClick={toggleMenu}
              className={`block px-4 py-2.5 rounded-lg text-base font-medium 
                          transition-all duration-300 
                          hover:text-red-600
                        `}
            >
              {link.name}
            </NavLink>
          ))}
          
          {/* Join Now Button - Mobile */}
          <div className="pt-2 pb-1">
            <NavLink
              to="/contactpage"
              onClick={toggleMenu}
              className="block w-full px-4 py-2 rounded-full font-medium text-sm text-center transition-all duration-300 bg-red-600 text-white hover:bg-red-700 hover:shadow-lg"
            >
              Join Now
            </NavLink>
          </div>

          {/* Auth Section - Mobile */}
          <div className="pt-2 pb-1 border-t border-gray-200">
            {currentUser ? (
              <div className="space-y-2">
                <div className="flex items-center space-x-2 px-4 py-2 bg-gray-100 rounded-lg">
                  <User className="w-4 h-4 text-gray-600" />
                  <span className="text-gray-700 font-medium text-sm">
                    {currentUser.name}
                  </span>
                </div>
                <button
                  onClick={() => {
                    onLogout();
                    toggleMenu();
                  }}
                  className="w-full flex items-center justify-center space-x-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition duration-300"
                >
                  <LogOut className="w-4 h-4" />
                  <span className="text-sm font-medium">Logout</span>
                </button>
              </div>
            ) : (
              <button
                onClick={() => {
                  onOpenAuthModal();
                  toggleMenu();
                }}
                className="w-full px-4 py-2 rounded-full font-medium text-sm transition-all duration-300 bg-gray-800 text-white hover:bg-gray-900 hover:shadow-lg"
              >
                Login / Sign Up
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;