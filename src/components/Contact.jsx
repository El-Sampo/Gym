import React from "react";

function Contact() {
  return (
    <div id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            Contact Us
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600 text-lg">
            Have a question? Reach out to us.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-gray-50 rounded-xl shadow-md p-8 h-full">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Get in Touch
            </h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-red-100 p-3 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-gray-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.995 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />{" "}
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>

                <div className="ml-4 ">
                  <h4 className="text-lg font-semibold text-gray-800">
                    Address
                  </h4>
                  <p className="text-gray-600 mt-1">
                    123 Main Street, City, Country
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
