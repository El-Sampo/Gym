import React from "react";


function Footer() {
  const navlinks = [
    { name: "Home", href: "#home", id: "home" },
    { name: "About", href: "#about", id: "about" },
    { name: "Classes", href: "#classes", id: "classes" },
    { name: "Membership", href: "#membership", id: "membership" },
    { name: "Trainers", href: "#trainers", id: "trainers" },
    { name: "Testimonials", href: "#testimonials", id: "testimonials" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h2 className="text-2xl font-bold text-red-500 mb-4">Fitlife</h2>
            <p className="text-gray-400 mb-6">
              Transforming lives through fitness, health, and wellness since
              2010. Join our community today and start on a journey for better
              life.
            </p>
            <div className="flex space-x-3">
              <a
                href=""
                className="text-gray-400  hover:text-white transition duration-300"
              >
                <svg
                  class="w-6 h-6 "
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z" />
                </svg>
              </a>
              <a
                href=""
                className="text-gray-400  hover:text-white transition duration-300"
              >
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 
                  3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z"
                  />
                </svg>
              </a>
              <a
                href=""
                className="text-gray-400  hover:text-white transition duration-300"
              >
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 5.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.343 8.343 0 0 1-2.605.981A4.13 4.13 0 0 0 15.85 4a4.068 4.068 0 0 0-4.1 4.038c0 .31.035.618.105.919A11.705 11.705 0 0 1 3.4 4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 6.1 13.635a4.192 4.192 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 2 18.184 11.732 11.732 0 0 0 8.291 20 11.502 11.502 0 0 0 19.964 8.5c0-.177 0-.349-.012-.523A8.143 8.143 0 0 0 22 5.892Z" />
                </svg>
              </a>
              <a
                href=""
                className="text-gray-400  hover:text-white transition duration-300"
              >
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M21.7 8.037a4.26 4.26 0 0 0-.789-1.964 2.84 2.84 0 0 0-1.984-.839c-2.767-.2-6.926-.2-6.926-.2s-4.157 0-6.928.2a2.836 2.836 0 0 0-1.983.839 4.225 4.225 0 0 0-.79 1.965 30.146 30.146 0 0 0-.2 3.206v1.5a30.12 30.12 0 0 0 .2 3.206c.094.712.364 1.39.784 1.972.604.536 1.38.837 2.187.848 1.583.151 6.731.2 6.731.2s4.161 0 6.928-.2a2.844 2.844 0 0 0 1.985-.84 4.27 4.27 0 0 0 .787-1.965 30.12 30.12 0 0 0 .2-3.206v-1.516a30.672 30.672 0 0 0-.202-3.206Zm-11.692 6.554v-5.62l5.4 2.819-5.4 2.801Z" />
                </svg>
              </a>
            </div>
          </div>
          <div className="">
            <h3 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h3>
            {navlinks.map((navlink) => (
              <ul>
                <li key={navlink.id} className="mb-2">
                  <a
                    href={navlink.href}
                    className="text-gray-400 hover:text-white transition duration-300"
                  >
                    {navlink.name}
                  </a>
                </li>
              </ul>
            ))}
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Working Hours
            </h3>
            <ul>
              <li>Sunday - Friday: 8:00 AM - 12:00 PM</li>
              <li>Saturday: 8:00 AM - 6:00 PM</li>
            </ul>
            <div className="mt-6 ">
              <a
                href="#"
                className="inline-block bg-red-600 hover:bg-red-700
                text-white px-4 py-2 rounded-md text-sm font-semibold transition duration-300"
              >
                Book a Setion
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Newsletter
            </h3>
            <p className="text-gray-400 mb-4">
              subscribe to our newsletter for fitness tips, updates and
              exclusive offers,
            </p>
            <form className="space-y-4">
              <div>
                <input
                  type="email"
                  placeholder="Your email adress"
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 
                    rounded-md text-white focus:ring-red-500 focus:border-red-500  "
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 text-white px-4 py-2 
                rounded-md text-sm transition duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="py-6 border-t border-gray-800 text-center">
          <p className="text-gray-400 text-sm">
           &copy;{new Date().getFullYear()} FitLife Fitness Center. All rights
            reserved
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
