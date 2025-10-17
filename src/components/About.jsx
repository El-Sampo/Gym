import React from "react";

function About() {
  return (
    <div id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              About Fitlife
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Founded in 2010, FitLife has grown to become the premier fitness
              destination in the region. Our mission is to help individuals of
              all fitness levels achieve their health and wellness goals in a
              supportive and motivating environment.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              We believe that fitness is not just about physical strength, but
              also about mental well-being and creating a balanced lifestyle.
              That's why we offer a comprehensive approach to fitness that
              addresses all aspects of health.
            </p>
            <div className="grid grid-cols-2 gap-6 mb-6">
  <div>
    <p className="text-3xl font-bold text-red-600">10+</p>
    <p className="text-gray-600">Years of Experience</p>
  </div>
  <div>
    <p className="text-3xl font-bold text-red-600">15+</p>
    <p className="text-gray-600">Expert Trainers</p>
  </div>
  <div>
    <p className="text-3xl font-bold text-red-600">50+</p>
    <p className="text-gray-600">Weekly Classes</p>
  </div>
  <div>
    <p className="text-3xl font-bold text-red-600">5000+</p>
    <p className="text-gray-600">Happy Members</p>
  </div>
</div>

<a
  href="#contact"
  className="inline-flex bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-md font-medium transition duration-300">
  Learn More
</a>

                    </div>
                    <div className="order-1 lg:order-2">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1593476550610-87baa860004a?ixlib=rb-4.0.3&ixid=M3wMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1336&q=80"
                alt=""
                className="w-full rounded-lg shadow-xl h-[500px] object-cover"
              />
                <div className="absolute -bottom-6 -left-6 bg-red-600 text-white p-6 rounded-lg shadow-lg hidden md:block">
                <div className="text-2xl font-bold">Premium Facilities</div>
                <p>15000 sq ft of workout space</p>
                </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default About;
