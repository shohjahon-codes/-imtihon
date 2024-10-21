import React from 'react'
import Imgh
from "../../assets/healthyfood.png"
export const Abouttwo = () => {
  return (
    <section className="py-16 bg-gray-50">
    <div className="container mx-auto px-6">
      <div className="flex flex-col lg:flex-row items-center">
        {/* Text Section */}
        <div className="lg:w-1/2 mb-10 lg:mb-0">
          <h2 className="text-green-600 text-lg font-semibold mb-3">Why Choose us?</h2>
          <h1 className="text-4xl font-bold mb-4">
            We do not buy from the open market & traders.
          </h1>
          <p className="text-gray-600 mb-6">
            Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard the 1500s, when an unknown.
          </p>
          <div className="space-y-4">
            <div className="flex items-center">
              <span className="text-green-500 bg-green-100 rounded-full p-2 mr-4">
                {/* Icon can be added here */}
                ✅
              </span>
              <div>
                <h4 className="font-semibold text-lg">100% Natural Product</h4>
                <p className="text-gray-600">
                  Simply dummy text of the printing and typesetting industry Lorem Ipsum.
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <span className="text-green-500 bg-green-100 rounded-full p-2 mr-4">
                {/* Icon can be added here */}
                ✅
              </span>
              <div>
                <h4 className="font-semibold text-lg">Increases resistance</h4>
                <p className="text-gray-600">
                  Filling, and temptingly healthy, our Biona Organic Granola with Wild Berries is just the thing.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Image Section */}
        <div className="lg:w-1/2">
          <img
            src={Imgh}
            alt="Healthy food"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
  
      {/* Icons Section */}
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="text-green-500 mb-3 text-3xl">
            {/* Icon */}
            🛒
          </div>
          <h4 className="font-semibold text-lg">Return Policy</h4>
          <p className="text-gray-600">
            Simply dummy text of the printintypesetting industry.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="text-green-500 mb-3 text-3xl">
            {/* Icon */}
            🥬
          </div>
          <h4 className="font-semibold text-lg">100% Fresh</h4>
          <p className="text-gray-600">
            Simply dummy text of the printintypesetting industry.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="text-green-500 mb-3 text-3xl">
            {/* Icon */}
            📞
          </div>
          <h4 className="font-semibold text-lg">Support 24/7</h4>
          <p className="text-gray-600">
            Simply dummy text of the printintypesetting industry.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="text-green-500 mb-3 text-3xl">
            {/* Icon */}
            💳
          </div>
          <h4 className="font-semibold text-lg">Secured Payment</h4>
          <p className="text-gray-600">
            Simply dummy text of the printintypesetting industry.
          </p>
        </div>
      </div>
    </div>
  </section>
  
  )
}
export default Abouttwo;
