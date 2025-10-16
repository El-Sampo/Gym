import React from "react";

function Trainers() {
  const trainers = [
    {
      name: "Emma Smith",
      role: "Pilates Trainer",
      image:
        "https://media.istockphoto.com/id/1198930471/photo/group-of-multi-ethnics-people-learning-yoga-class-in-fitness-club-female-caucasian-instructor.webp?a=1&b=1&s=612x612&w=0&k=20&c=AtoSxilpLQ4hSbnLxMeUc4oDj2YNvJTc7kJEHt4njTw=",
      bio: "Passionate Pilates expert helping clients build strength, balance, and flexibility.",
      socialLinks: {
        facebook: "#",
        instagram: "#",
        twitter: "#",
      },
    },
    {
      name: "John Doe",
      role: "Fitness Coach",
      image:
        "https://images.unsplash.com/photo-1534258936925-c58bed479fcb?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=500",
      bio: "Certified fitness coach focused on strength, endurance, and healthy living.",
      socialLinks: {
        facebook: "#",
        instagram: "#",
        twitter: "#",
      },
    },
    {
      name: "Sophia Lee",
      role: "Yoga Instructor",
      image:
        "https://plus.unsplash.com/premium_photo-1661776042506-9154882ba689?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=500",
      bio: "Yoga instructor blending movement and mindfulness for body–mind harmony.",
      socialLinks: {
        facebook: "#",
        instagram: "#",
        twitter: "#",
      },
    },
    {
      name: "Michael Brown",
      role: "Cardio Specialist",
      image:
        "https://plus.unsplash.com/premium_photo-1683121008092-7c4e5c75f2ce?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=500",
      bio: "Cardio specialist dedicated to improving stamina and heart health.",
      socialLinks: {
        facebook: "#",
        instagram: "#",
        twitter: "#",
      },
    },
  ];

  return (
    <div id="trainers" className="py-16 bg-white scroll-mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
          Meet Our Expert Trainers
        </h2>
        <p className="max-w-2xl mx-auto text-gray-600 text-lg text-center mb-12">
          Our certified professionals are here to help you achieve your fitness
          goals
        </p>

        {/* Trainers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trainers.map((trainer, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition duration-300"
            >
              <div className="h-56 overflow-hidden">
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  className="w-full h-full object-cover transition duration-500 hover:scale-110"
                />
              </div>
              <div className="p-5 text-center">
                <h3 className="text-lg font-semibold mb-1 text-gray-800">
                  {trainer.name}
                </h3>
                <div className="text-red-600 font-medium mb-2">
                  {trainer.role}
                </div>
                <p className="text-gray-600 text-sm mb-4">{trainer.bio}</p>

                {/* Social media Icons */}
                <div className="flex justify-center space-x-4">
                  {/* Facebook */}
                  <a
                    href={trainer.socialLinks.facebook}
                    aria-label="Facebook"
                    className="text-gray-400 hover:text-red-600 transition duration-300"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      className="w-5 h-5"
                    >
                      <path d="M22.675 0H1.325C.593 0 0 .593 0 1.326v21.348C0 23.407.593 24 1.325 24h11.482v-9.294H9.847v-3.622h2.96V8.413c0-2.932 1.792-4.533 4.41-4.533 1.254 0 2.33.093 2.643.135v3.06l-1.815.001c-1.425 0-1.7.678-1.7 1.671v2.191h3.398l-.443 3.622h-2.955V24h5.789C23.407 24 24 23.407 24 22.674V1.326C24 .593 23.407 0 22.675 0z" />
                    </svg>
                  </a>

                  {/* Instagram */}
                  <a
                    href={trainer.socialLinks.instagram}
                    aria-label="Instagram"
                    className="text-gray-400 hover:text-red-600 transition duration-300"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      className="w-5 h-5"
                    >
                      <path d="M7.75 2C4.678 2 2 4.678 2 7.75v8.5C2 19.322 4.678 22 7.75 22h8.5c3.072 0 5.75-2.678 5.75-5.75v-8.5C22 4.678 19.322 2 16.25 2h-8.5zm0 1.5h8.5A4.25 4.25 0 0 1 20.5 7.75v8.5a4.25 4.25 0 0 1-4.25 4.25h-8.5A4.25 4.25 0 0 1 3.5 16.25v-8.5A4.25 4.25 0 0 1 7.75 3.5zm8.75 2.25a1 1 0 1 0 0 2 1 1 0 0 0 0-2zM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 1.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7z" />
                    </svg>
                  </a>

                  {/* Twitter */}
                  <a
                    href={trainer.socialLinks.twitter}
                    aria-label="Twitter"
                    className="text-gray-400 hover:text-red-600 transition duration-300"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      className="w-5 h-5"
                    >
                      <path d="M23.954 4.569a10 10 0 0 1-2.825.775 4.958 4.958 0 0 0 2.163-2.723 9.982 9.982 0 0 1-3.127 1.196 4.92 4.92 0 0 0-8.38 4.482 13.978 13.978 0 0 1-10.15-5.15 4.822 4.822 0 0 0-.664 2.475c0 1.708.87 3.216 2.188 4.099a4.935 4.935 0 0 1-2.228-.616v.06a4.932 4.932 0 0 0 3.946 4.827 4.996 4.996 0 0 1-2.224.084 4.937 4.937 0 0 0 4.604 3.417A9.869 9.869 0 0 1 0 19.54a13.936 13.936 0 0 0 7.548 2.212c9.142 0 14.307-7.721 13.995-14.646a9.935 9.935 0 0 0 2.411-2.537z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Book a Training Session Button */}
        <div className="text-center mt-10">
          <a
            href="#contact"
            className="inline-block border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white px-6 py-2 rounded-md font-medium transition duration-300"
          >
            Book a Training Session
          </a>
        </div>
      </div>
    </div>
  );
}

export default Trainers;
