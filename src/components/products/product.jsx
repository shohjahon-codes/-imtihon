import React from "react";
import { Link } from "react-router-dom";

import data from "../../data/data.js"; 
import Button from "../buttons/buttons.jsx";

const ProductList = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 font-serif container">
      {data.products.slice(0, 8).map((product) => (
        <div
          key={product.id}
          className="border rounded-lg shadow-lg p-4 flex flex-col items-center bg-white transform transition duration-300 hover:scale-105"
        >
          <div className="bg-teal-500 text-white py-1 px-2 rounded-full text-xs mb-2">
            {product.buttontitle}
          </div>

          <img
            src={product.img}
            alt={product.title}
            className="w-32 h-32 object-cover mb-2"
          />
          <Link to={`/product/${product.id}`}>
            <h5 className="text-primary text-[20px] font-bold pb-3">
              {product.title}
            </h5>
          </Link>
          <p className="text-green-500 text-xl font-bold">{product.price2}</p>
          <p className="line-through text-gray-500">{product.price}</p>
          <button
            className={`mt-2 py-2 px-4 w-full ${
              product.inStock
                ? "bg-teal-600 hover:bg-teal-700"
                : "bg-gray-400 cursor-not-allowed"
            } text-white font-semibold rounded-lg`}
            disabled={!product.inStock}
          >
            {product.buttontitle}
          </button>
          <div className="mt-2 text-yellow-500">⭐⭐⭐⭐⭐</div>
        </div>
      ))}
      <Button color="bg-primary text-light" size="px-8 py-3 ml-[20px]" text="Learn More" />
    </div>
  );
};

export default ProductList;
