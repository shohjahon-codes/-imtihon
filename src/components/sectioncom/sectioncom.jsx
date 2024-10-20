import React from "react";
import bgImage from "../../assets/customerbg.png"
import girlPhoto from "../../assets/Photogirl.jpg"

export const SectionComment = () => {
  return (
    <div className="bg-cover my-[100px]  " style={{ backgroundImage: `url(${bgImage})` }} 
    >
      <section
        className="relative bg-cover bg-center py-16 font-serif container"
        style={{ backgroundImage: 'url("/path/to/your/background-image.jpg")' }}
      >
        <div className="container mx-auto text-center">
          <h3 className="text-secondary font-sans text-[36px]">Testimonial</h3>
          <h2 className="text-primary text-[40px] font-bold">What Our Customer Saying?</h2>
          <div className="bg-white  p-6 inline-block">
            <img
              src={girlPhoto}
              alt="Customer"
              className="mx-auto rounded-full mb-4"
            />
            <p className=" w-[610px] text-gray-600 mb-2">
              Simply dummy text of the printing and typesetting industry. Lorem
              Ipsum simply dummy text of the printing and typesetting industry.
            </p>
            <h4 className="text-xl font-semibold">Sara Taylor</h4>
            <span className="text-gray-500">Customer</span>
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-4 gap-8">
            <div className="flex flex-col justify-center rounded-full bg-gray w-[210px] h-[210px] border-[4px] text-[26px] text-primary border-secondary ">
              <h3 className="text-2xl font-bold text-green-600">100%</h3>
              <p className="text-gray-500">Organic</p>
            </div>
            <div className="flex flex-col justify-center rounded-full bg-gray w-[210px] h-[210px] border-[4px] text-[26px] text-primary border-secondary ">
              <h3 className="text-2xl font-bold text-green-600">285</h3>
              <p className="text-gray-500">Active Product</p>
            </div>
            <div className="flex flex-col justify-center rounded-full bg-gray w-[210px] h-[210px] border-[4px] text-[26px] text-primary border-secondary ">
              <h3 className="text-2xl font-bold text-green-600">350+</h3>
              <p className="text-gray-500">Organic Orchards</p>
            </div>
            <div className="flex flex-col justify-center rounded-full bg-gray w-[210px] h-[210px] border-[4px] text-[26px] text-primary border-secondary ">
              <h3 className="text-2xl font-bold text-green-600">25+</h3>
              <p className="text-gray-500">Years of Farming</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
