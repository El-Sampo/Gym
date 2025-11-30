import React, { useState, useEffect } from "react";
import AuthModal from '../components/AuthModal';

// ADD onAuthSuccess and currentUser props
function Pricing({ onAuthSuccess: parentOnAuthSuccess, currentUser }) {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  
  // Use parent's currentUser to determine authentication status
  const isAuthenticated = !!currentUser;
  const user = currentUser;

  // UPDATED: Pass auth success up to parent App.jsx
  const handleAuthSuccess = (userData) => {
    setIsAuthModalOpen(false);
    
    // Notify parent component (App.jsx) about the auth success
    if (parentOnAuthSuccess) {
      parentOnAuthSuccess(userData);
    }
  };

  const handlePlanClick = (planName) => {
    if (!isAuthenticated) {
      setIsAuthModalOpen(true);
    } else {
      // User is authenticated, proceed with plan selection
      alert(`Great choice! You selected the ${planName} plan. Proceeding to checkout...`);
      // You can redirect to payment page or handle plan selection here
    }
  };

  const plans = [
    {
      name: "Basic",
      price: "$29",
      period: "per month",
      features: [
        "Gym access (6 AM - 10 PM)",
        "Basic fitness equipment",
        "Locker room access",
        "2 group classes per week",
        "Fitness assessment",
      ],
      popular: false,
      btnText: "Choose Basic",
      btnClass:
        "border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white",
    },
    {
      name: "Premium",
      price: "$59",
      period: "per month",
      features: [
        "24/7 gym access",
        "Full equipment access",
        "Unlimited group classes",
        "1 free PT session monthly",
        "Nutrition consultation",
        "Access to sauna & spa",
      ],
      popular: true,
      btnText: "Choose Premium",
      btnClass: "bg-red-600 text-white hover:bg-red-700",
    },
    {
      name: "Elite",
      price: "$99",
      period: "per month",
      features: [
        "24/7 gym access",
        "Full equipment access",
        "Unlimited group classes",
        "4 PT sessions monthly",
        "Monthly body composition",
        "Personal nutrition plan",
        "Access to all amenities",
      ],
      popular: false,
      btnText: "Choose Elite",
      btnClass:
        "border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white",
    },
  ];

  return (
    <>
      <AuthModal 
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        onAuthSuccess={handleAuthSuccess}
      />
      
      <div id="pricing" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Welcome message for authenticated users */}
          {isAuthenticated && user && (
            <div className="mb-8 bg-green-50 border border-green-200 rounded-lg p-4 text-center">
              <p className="text-green-800 font-medium">
                Welcome {user.name}! Choose your perfect membership plan below. 👇
              </p>
            </div>
          )}

          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Membership Plans
            </h2>
            <p className="max-w-2xl mx-auto text-gray-600 text-lg">
              Choose the perfect membership plan that fits your fitness needs and
              budget
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 ${
                  plan.popular ? "border-2 border-red-600 relative" : ""
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-red-600 text-white py-1 px-4 rounded-bl-lg font-medium">
                    Most Popular
                  </div>
                )}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    {plan.name}
                  </h3>
                  <div className="flex items-end mb-6">
                    <span className="text-4xl font-bold text-gray-900">
                      {plan.price}
                    </span>
                    <span className="text-gray-600 ml-2">{plan.period}</span>
                  </div>

                  <ul className="mb-8 space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <svg
                          className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => handlePlanClick(plan.name)}
                    className={`w-full block text-center px-6 py-3 rounded-md font-medium transition duration-300 ${plan.btnClass}`}
                  >
                    {isAuthenticated ? plan.btnText : `Login to ${plan.btnText}`}
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 p-8 bg-white rounded-lg shadow-sm text-center">
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">
              Need Something Special?
            </h3>
            <p className="text-gray-600 mb-6">
              Contact us for custom corporate packages or special membership
              requirements
            </p>
            <a
              href="/contactpage"
              className="inline-block bg-gray-800 text-white hover:bg-gray-700 px-6 py-3 rounded-md font-medium transition-all duration-300"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Pricing;