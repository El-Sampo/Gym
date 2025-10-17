import React from "react";

function Pricing() {
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
    <div id="pricing" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

                <a
                  href="#"
                  className={`w-full block text-center px-6 py-3 rounded-md font-medium transition duration-300 ${plan.btnClass}`}
                >
                  {plan.btnText}
                </a>
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
            href="#contact"
            className="inline-block bg-gray-800 text-white hover:bg-gray-700 px-6 py-3 rounded-md font-medium transition-all duration-300"
          >
            Contact
          </a>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
