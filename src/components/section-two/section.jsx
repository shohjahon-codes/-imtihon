import React from "react";
import BgImage from "../../assets/bg1.jpg"
import BgImagetwo from "../../assets/bg2.png"

export const SectionTwo = () => {
  return (
    <div>
      <section className="flex container gap-[20px] my-[20px]">
      <div className="w-[600px] h-[350px] bg-cover bg-center rounded-[10px]  text-[40px]  flex flex-col text-left  text-[#fff]  border border-gray-300 p-4" style={{ backgroundImage: `url(${BgImage})` }}>
      <div className="bg-white bg-opacity-70 p-4 rounded-md">
        <h2 className="text-xl mt-[30px]   mb-2">Natural</h2>
        <h1 className=" w-[280px] font-bold text-gray-700 mb-4 font-serif">Get Garden Fresh Fruits</h1>
      </div>
    </div>

    <div className="w-[600px] h-[350px] bg-cover bg-center rounded-[10px]  text-[40px]  flex flex-col text-left     border-gray-300 p-4" style={{ backgroundImage: `url(${BgImagetwo})` }}>
      <div className="bg-white bg-opacity-70 p-4 rounded-md">
        <h2 className="text-xl mt-[30px] text-secondary   mb-2">Offer!!</h2>
        <h1 className=" w-[280px] font-bold text-primary mb-4 font-serif">Get 10% off
        on Vegetables</h1>
      </div>
    </div>
      </section>
    </div>
  );
};
