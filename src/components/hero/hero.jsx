import React from 'react';
import Hero from "../../assets/hero-rasm.png"
import Button from '../buttons/buttons';
function HeroSection() {
  return (
   <div  className=' bg-cover bg-center ' style={{ backgroundImage: `url(${Hero})` }}>
     <section className="bg-white  h-[600px] w-full flex items-centercontainer">
      <div className="container mx-auto flex  font-serif flex-col lg:flex-row items-center">
       
        <div className="text-left lg:w-1/2 mb-8 lg:mb-0  ">
          <p className="text-[36px] text-secondary font-sans ml-[15px]">100% Natural Food</p>
          <h1 className="text-[60px] w-[530px] text-primary font-bold ml-[15px]">
            Choose the best healthier way of life
          </h1>
          <Button color="bg-tertiary text-primary" size="px-8 py-3 ml-[20px]" text="Submit" />
        </div>
        {/* Image content */}
        
      </div>
    </section>
   </div>
  );
}

export default HeroSection;
