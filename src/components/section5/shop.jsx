import React from 'react';
import data from '../../data/data.js'; // To'g'ri yo'lni kiriting

const FoodSection = () => {
  return (
    <section className="bg-teal-900 bg-primary font-serif py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h3 className="text-[20px] font-sans text-secondary text-start">Offer</h3>
          <h2 className="text-light text-start text-[40px] font-serif font-bold ">We Offer Organic For You</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 h-[400px] gap-6">
          {data.food.map((item) => (
            <div key={item.id} className="bg-light shadow-lg rounded-lg p-6 text-center">
            <p className='bg-primary text-light w-[96px] my-[20px] '>{item.buttontitle}</p>
              <img 
                src={item.img} 
                alt={item.title} 
                className="w-24 h-24 mx-auto mb-4 object-contain" 
              />
              <div className="mb-2">
                <span className="bg-green-200 text-green-800 py-1 px-3 rounded-full text-xs">{item.buttontitle}</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
              <div className="flex justify-center items-center mt-2">
                <span className="text-gray-500 line-through mr-2">{item.price}</span>
                <span className="text-green-600 font-bold">{item.price2}</span>
              </div>
              <div className="flex justify-center items-center mt-2">
                {/* Rating stars */}
                <span className="text-yellow-500">★★★★★</span>
              </div>
            </div>
          ))}
        </div>

       
      </div>
    </section>
  );
};

export default FoodSection;

