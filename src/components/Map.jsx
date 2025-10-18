import React from 'react';

// The main application component
const Map = () => {
  const mapEmbedUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d218359.75268122027!2d29.790072938630342!3d31.224299391503884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f5c49126710fd3%3A0xb4e0cda629ee6bb9!2sAlexandria%2C%20Alexandria%20Governorate!5e0!3m2!1sen!2seg!4v1760823013493!5m2!1sen!2seg%22%20width=%22600%22%20height=%22450%22%20style=%22border:0;%22%20allowfullscreen=%22%22%20loading=%22lazy%22%20referrerpolicy=%22no-referrer-when-downgrade`;

  return (
    <div className="min-h-screen  p-4 sm:p-8 flex items-center justify-center font-sans">
      <div 
        className="w-full max-w-4xl bg-white rounded-xl shadow-2xl border-2 border-red-300 transform transition duration-500 hover:shadow-red-400/50"
      >
        {/* Header Section */}
        <header className="p-6 border-b border-red-100">
          <h1 className="text-3xl font-bold text-red-600 mb-1">
            {location.name} Location
          </h1>
          <p className="text-gray-500 text-sm">{location.address}</p>
        </header>

        {/* Map Container */}
        <div className="p-4 sm:p-6">
          <div className="w-full h-[50vh] min-h-[300px] bg-red-100 border border-red-300 rounded-lg overflow-hidden shadow-inner">
            <iframe
              title="Interactive Map Location"
              src={mapEmbedUrl}
              className="w-full h-full border-0"
              loading="lazy"
              allowFullScreen=""
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* Details and Actions Section */}
        <footer className="p-6 bg-red-50/50 flex flex-col sm:flex-row justify-between items-center rounded-b-xl">
          <button
            onClick={() => window.open("https://www.google.com/maps/place/Alexandria,+Alexandria+Governorate", "_blank")}
            className="w-full sm:w-auto px-6 py-2 bg-red-500 text-white font-semibold rounded-full hover:bg-red-600 transition duration-300 shadow-md hover:shadow-lg shadow-red-300/50"
          >
            Get Directions
          </button>
        </footer>
      </div>
    </div>
  );
};

export default Map;