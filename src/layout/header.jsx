import React from 'react';
import { LogoIcon } from '../assets/icons/logo';
import { SearchIcon } from '../assets/icons/search';
import { CartIcon } from '../assets/icons/cart';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md py-[40px] ">
      <div className="  flex justify-between items-center container">
        
        <div className="flex items-center space-x-2">
          <LogoIcon/>
          <span className="text-xl font-semibold text-gray-800">Organick</span>
        </div>

        <ul className="hidden md:flex space-x-8 text-gray-600">
          <li><a href="#home" className="hover:text-gray-800">Home</a></li>
          <li><a href="#about" className="hover:text-gray-800">About</a></li>
          <li className="relative group">
            <button className="hover:text-gray-800">Pages</button>
            <ul className="absolute hidden group-hover:block bg-white shadow-lg py-2 mt-1">
              <li><a href="#page1" className="block px-4 py-2 hover:bg-gray-100">Page 1</a></li>
              <li><a href="#page2" className="block px-4 py-2 hover:bg-gray-100">Page 2</a></li>
            </ul>
          </li>
          <li><a href="#shop" className="hover:text-gray-800">Shop</a></li>
          <li><a href="#projects" className="hover:text-gray-800">Projects</a></li>
          <li><a href="#news" className="hover:text-gray-800">News</a></li>
        </ul>

        <div className="flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="bg-gray-100 px-4 py-2 rounded-full text-gray-600 focus:outline-none"
            />
            <button className="absolute right-[1px]   p-[10px] rounded-full bg-[#7EB693] text-gray-600 hover:text-gray-800">
              <SearchIcon/>
            </button>
          </div>

          <div className="relative">
            <a href="#cart" className="text-gray-600 hover:text-gray-800 p-[4px]  border border-black flex items-center rounded-[22px]">
             <p className='bg-[#274C5B] p-[5px] rounded-full'>
             <CartIcon  />
             </p>
              <span className="ml-1">Cart (0)</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
