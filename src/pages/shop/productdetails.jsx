import React from "react";
import { useParams } from "react-router-dom";
import data from "../../data/data.js";
import Button from "../../components/buttons/buttons.jsx";
import { Link } from "react-router-dom";
import { HeroTwo } from "../../components/hero2/hero2.jsx";

const ProductDetails = () => {
    const { id } = useParams();
    const product = data.products.find((prod) => prod.id === parseInt(id));
  
   
    const otherProducts = data.products
      .filter((prod) => prod.id !== parseInt(id))   
      .slice(0, 4); // Faqat 4 ta mahsulotni ko'rsatish
  
    if (!product) {
      return <div>Mahsulot topilmadi</div>;
    }
  
    return (
      <div className="container mx-auto font-serif p-4">
        {/* Mahsulotning asosiy tafsilotlari */}
        <HeroTwo/>
        <div className="flex justify-between mt-[100px] items-center">
          <div className="w-[590px] h-[560px] flex items-center shadow-lg border rounded-[30px]">
            <p className="bg-primary text-gray p-[20px] mb-[500px] h-[30px] flex items-center rounded-[30px] m-[10px]">
              {product.buttontitle}
            </p>
            <img
              src={product.img}
              alt={product.title}
              className="h-[400px] mt-4"
            />
          </div>
          <div>
            <h1 className="font-bold text-[36px] text-primary">{product.title}</h1>
            <p className="text-[40px] text-green-500 font-bold mt-2">
              ⭐⭐⭐⭐⭐
            </p>
            <p className="text-xl text-green-500 font-bold mt-2">
              {product.price2}
            </p>
            <p className="line-through text-gray-500 w-[400px]">{product.price}</p>
            <p className="w-[400px]">{product.description}</p>
            <div className="w-[350px] h-[auto] mt-[100px]">
              <span className="text-primary">Quantity: </span>
              <button className="py-[10px] px-[31px] bg-[#fff] border-2 rounded-[10px] border-primary">1</button>
              <Button color="bg-primary text-tertiary" size="px-8 py-3 ml-[20px]" text="Add to cart" />
            </div>
          </div>
        </div>
  
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">O'xshash mahsulotlar</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {otherProducts.map((prod) => (
              <div key={prod.id} className="border rounded-lg shadow-lg p-4 flex flex-col items-center bg-white">
                <img src={prod.img} alt={prod.title} className="w-32 h-32 object-cover mb-2" />
                <Link to={`/product/${prod.id}`}>
                  <h5 className="text-primary text-[20px] font-bold pb-3">{prod.title}</h5>
                </Link>
                <p className="text-green-500 text-xl font-bold">{prod.price2}</p>
                <p className="line-through text-gray-500">{prod.price}</p>
                <button
                  className={`mt-2 py-2 px-4 w-full ${
                    prod.inStock ? "bg-teal-600 hover:bg-teal-700" : "bg-gray-400 cursor-not-allowed"
                  } text-white font-semibold rounded-lg`}
                  disabled={!prod.inStock}
                >
                  {prod.buttontitle}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default ProductDetails;


