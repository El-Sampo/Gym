import React from "react";

function Hero() {
  return (
    <div id="home" className="relative h-screen overflow-hidden md:h-100vh">
      {/*background image */}
      <div className="abslote inset-0 z-0">
        <div
          className="abslote inset-0 bg-gradient-to-br from-black/80 via-black/70
        to-black/40 z-10"
        ></div>

        {/*map method*/}
        <div
          className={`abslote inset-0 w-full h-full bg-cover bg-center transition-opacity duration-2000`}
        ></div>

        
      </div>
    </div>
  );
}

export default Hero;
