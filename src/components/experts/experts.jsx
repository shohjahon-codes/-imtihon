import React from 'react';
import expert from "../../assets/expert.jpg"
const OrganicExperts = () => {
  return (
    <div className="py-12 px-6 bg-gray-50">
      <h2 className="text-center text-3xl font-serif text-gray-800 mb-4">Team</h2>
      <h3 className="text-center text-4xl font-serif font-bold text-gray-900 mb-6">Our Organic Experts</h3>
      <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
        Simply dummy text of the printing and typesetting industry. Lorem had ceased to be the
        industry's standard dummy text ever since the 1500s.
      </p>
      <div className="flex justify-center gap-8">
        {/* Expert Card 1 */}
        <div className="bg-white rounded-lg shadow-lg p-6 w-72">
          <img
            className="w-full h-60 object-cover rounded-md mb-4"
            src={expert}
            alt="Giovani Bacardo"
          />
          <h4 className="text-xl font-serif font-bold text-gray-900">Giovani Bacardo</h4>
          <p className="text-green-600 font-serif">Farmer</p>
          <div className="flex justify-center space-x-4 mt-4">
            <i className="bx bxl-facebook text-2xl text-gray-600"></i>
            <i className="bx bxl-twitter text-2xl text-gray-600"></i>
            <i className="bx bxl-instagram text-2xl text-gray-600"></i>
          </div>
        </div>
        {/* Expert Card 2 */}
        <div className="bg-white rounded-lg shadow-lg p-6 w-72">
          <img
            className="w-full h-60 object-cover rounded-md mb-4"
            src={expert}
            alt="Marianne Loreno"
          />
          <h4 className="text-xl font-serif font-bold text-gray-900">Marianne Loreno</h4>
          <p className="text-green-600 font-serif">Designer</p>
          <div className="flex justify-center space-x-4 mt-4">
            <i className="bx bxl-facebook text-2xl text-gray-600"></i>
            <i className="bx bxl-twitter text-2xl text-gray-600"></i>
            <i className="bx bxl-instagram text-2xl text-gray-600"></i>
          </div>
        </div>
        {/* Expert Card 3 */}
        <div className="bg-white rounded-lg shadow-lg p-6 w-72">
          <img
            className="w-full h-60 object-cover rounded-md mb-4"
            src={expert}
            alt="Riga Pelore"
          />
          <h4 className="text-xl font-serif font-bold text-gray-900">Riga Pelore</h4>
          <p className="text-green-600 font-serif">Farmer</p>
          <div className="flex justify-center space-x-4 mt-4">
            <i className="bx bxl-facebook text-2xl text-gray-600"></i>
            <i className="bx bxl-twitter text-2xl text-gray-600"></i>
            <i className="bx bxl-instagram text-2xl text-gray-600"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrganicExperts;
