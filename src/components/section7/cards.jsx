import React from 'react';
import bgImage1 from '../../assets/organic1.png';  
import bgImage2 from '../../assets/organic2.png';
import bgImage3 from '../../assets/organic3.png';

const SectionWithDivs = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 container my-[80px]">
      <div
        className="relative bg-cover bg-center h-64 flex justify-center items-center"
        style={{ backgroundImage: `url(${bgImage1})` }}
      >
        <button className="bg-[#fff] text-black px-4 py-2 rounded-lg shadow-lg hover:bg-gray-100">
          Button 1
        </button>
      </div>

      <div
        className="relative bg-cover bg-center h-64 flex justify-center items-center"
        style={{ backgroundImage: `url(${bgImage2})` }}
      >
        <button className="bg-[#fff] text-black px-4 py-2 rounded-lg shadow-lg hover:bg-gray-100">
          Button 2
        </button>
      </div>

      <div
        className="relative bg-cover bg-center h-64 flex justify-center items-center"
        style={{ backgroundImage: `url(${bgImage3})` }}
      >
        <button className="bg-[#fff] text-black px-4 py-2 rounded-lg shadow-lg hover:bg-gray-100">
          Button 3
        </button>
      </div>
    </section>
  );
};

export default SectionWithDivs;
