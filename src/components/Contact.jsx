import React, { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted", formData);
    setIsSubmitted(true);
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  setTimeout(() => {
    setIsSubmitted(false);
  }, 5000);

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
                    className="h-6 w-6 text-red-800"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="m3.855 7.286 1.067-.534a1 1 0 0 0 .542-1.046l-.44-2.858A1 1 0 0 0 4.036 2H3a1 1 0 0 0-1 1v2c0 .709.082 1.4.238 2.062a9.012 9.012 0 0 0 6.7 6.7A9.024 9.024 0 0 0 11 14h2a1 1 0 0 0 1-1v-1.036a1 1 0 0 0-.848-.988l-2.858-.44a1 1 0 0 0-1.046.542l-.534 1.067a7.52 7.52 0 0 1-4.86-4.859Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>

                <div className="ml-4 ">
                  <h4 className="text-lg font-semibold text-gray-800">phone</h4>
                  <p className="text-gray-600 mt-1">
                    +20 1234567890 <br />
                    Mon-Fri 6:00 am - 10:00 pm
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-red-100 p-3 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-red-800"
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
                    123 Main Street, City, Country <br />
                    Healthy city, HC
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-red-100 p-3 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-red-800"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                  >
                    <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                    <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                  </svg>
                </div>

                <div className="ml-4 ">
                  <h4 className="text-lg font-semibold text-gray-800">Email</h4>
                  <p className="text-gray-600 mt-1">info@fitlife.com</p>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                Follow Us
              </h3>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="bg-red-100 p-3 rounded-full text-red-600 hover:bg-red-600 hover:text-white transition duration-300"
                >
                  <svg
                    fill="#d80e0e"
                    className="h-5 w-5"
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    viewBox="-337 273 123.5 256"
                    xml:space="preserve"
                    stroke="#d80e0e"
                  >
                   <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <path d="M-260.9,327.8c0-10.3,9.2-14,19.5-14c10.3,0,21.3,3.2,21.3,3.2l6.6-39.2c0,0-14-4.8-47.4-4.8c-20.5,0-32.4,7.8-41.1,19.3 c-8.2,10.9-8.5,28.4-8.5,39.7v25.7H-337V396h26.5v133h49.6V396h39.3l2.9-38.3h-42.2V327.8z"></path>{" "}
                    </g>
                  </svg>
                </a>
                <a
                  href="#"
                  className="bg-red-100 p-3 rounded-full text-red-600 hover:bg-red-600 hover:text-white transition duration-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />{" "}
                  </svg>
                </a>
                <a
                  href="#"
                  className="bg-red-100 p-3 rounded-full text-red-600 hover:bg-red-600 hover:text-white transition duration-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.252.058 1.771.27 2.187.45a4.383 4.383 0 011.591 1.035 4.383 4.383 0 011.035 1.591c.18.416.392.935.45 2.187.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.058 1.252-.27 1.771-.45 2.187a4.383 4.383 0 01-1.035 1.591 4.383 4.383 0 01-1.591 1.035c-.416.18-.935.392-2.187.45-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.252-.058-1.771-.27-2.187-.45a4.383 4.383 0 01-1.591-1.035 4.383 4.383 0 01-1.035-1.591c-.18-.416-.392-.935-.45-2.187C2.175 15.747 2.163 15.367 2.163 12s.012-3.584.07-4.85c.058-1.252.27-1.771.45-2.187a4.383 4.383 0 011.035-1.591A4.383 4.383 0 015.31 2.613c.416-.18.935-.392 2.187-.45C8.763 2.105 9.143 2.163 12 2.163m0-2.163C8.741 0 8.332.012 7.052.07 5.773.127 4.764.348 3.905.697 3.012 1.061 2.245 1.608 1.608 2.245.971 2.882.424 3.649.06 4.542c-.349.859-.57 1.868-.627 3.147C-.012 8.332 0 8.741 0 12s.012 3.668.07 4.948c.057 1.279.278 2.288.627 3.147.364.893.911 1.66 1.548 2.297.637.637 1.404 1.184 2.297 1.548.859.349 1.868.57 3.147.627 1.28.058 1.689.07 4.948.07s3.668-.012 4.948-.07c1.279-.057 2.288-.278 3.147-.627.893-.364 1.66-.911 2.297-1.548.637-.637 1.184-1.404 1.548-2.297.349-.859.57-1.868.627-3.147.058-1.28.07-1.689.07-4.948s-.012-3.668-.07-4.948c-.057-1.279-.278-2.288-.627-3.147a6.478 6.478 0 00-1.548-2.297A6.478 6.478 0 0020.095.697c-.859-.349-1.868-.57-3.147-.627C15.668.012 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a3.999 3.999 0 110-7.998 3.999 3.999 0 010 7.998zm6.406-11.845a1.44 1.44 0 11-2.881 0 1.44 1.44 0 012.881 0z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-white rounded-xl shadow-sm p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Send Us a Message
              </h3>
            </div>
            {/* Conditional Rendering */}
            {isSubmitted ? (
              <div className="bg-green-50 border border-green-200 text-green-700 p-4 rounded-lg">
                <div className="flex">
                  <svg
                    className="h-5 w-5 text-green-500 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13L4 19 7"
                    />
                  </svg>
                  <span>
                    thank you for your message! we will reach out to you soon
                  </span>
                </div>
              </div>
            ) : (
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      phone number
                    </label>
                    <input
                      type="number"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      your message
                    </label>
                    <textarea
                      type="text"
                      id="message"
                      name="message"
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
                    />
                  </div>
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full bg-red-600 text-white px-6 py-3 rounded-md font-medium hover:bg-red-700 transition duration-300"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
