import React from 'react';
import Hero from "../../assets/hero-rasm.png"

function HeroSection() {
  return (
    <section style={{ backgroundImage: `url(${Hero})` }} className="bg-white  h-[600px] w-full flex items-center bg-cover bg-center container">
      <div className="container mx-auto flex  flex-col lg:flex-row items-center">
       
        <div className="text-left lg:w-1/2 mb-8 lg:mb-0">
          <p className="text-green-600 italic">100% Natural Food</p>
          <h1 className="text-4xl font-bold mb-4">
            Choose the best healthier way of life
          </h1>
          <button className="bg-yellow-500 text-white py-2 px-6 rounded-full shadow-lg hover:bg-yellow-600">
            Explore Now
          </button>
        </div>
        {/* Image content */}
        
      </div>
    </section>
  );
}

export default HeroSection;
