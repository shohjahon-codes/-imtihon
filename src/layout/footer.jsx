import React from "react";
import bg from "../assets/bacgraundfooter.png";
import { SmIcon } from "../assets/icons/sm";
import { LogoIcon } from "../assets/icons/logo";
export const Footer = () => {
  return (
    <footer className="bg-gray-100 py-8 font-serif">
      <div className="container mx-auto px-4">
        {/* Subscribe Section */}
        <div
          className="bg-blue-500 p-6 rounded-lg text-white flex justify-between items-center mb-8 font-serif bg-[#e1dada] h-[300px]  "
          style={{ backgroundImage: `url(${bg})` }}
        >
          <div className="text-[40px] text-light font-bold w-[270px]">
            Subscribe to our Newsletter
          </div>
          <div className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 rounded-l-lg border-none focus:outline-none text-black"
            />
            <button className="bg-green-500 px-4 py-2 rounded-r-lg hover:bg-green-600">
              Subscribe
            </button>
          </div>
        </div>

        <div className="flex justify-between">
         
          <div className="w-1/3 text-right font-serif pr-[14px] border-r-2">
            <h2 className="font-bold  text-primary text-[30px] mb-[15px]">
              Contact Us
            </h2>
            <p className="mb-[15px]">
              Phone:{" "}
              <a href="tel:+123456789" className="text-blue-500">
                +1 234 567 89
              </a>
            </p>
            <p className="mb-[15px]">
              Email:{" "}
              <a href="mailto:needhelp@Organick.com" className="text-blue-500 ">
                needhelp@Organick.com
              </a>
            </p>
            <p>Address: 88 road, borklyn street, USA</p>
          </div>

          {/* Logo and Social Media Section */}
          <div className="w-1/3 text-center ">
           
            <div className="flex items-center justify-center ">
            <LogoIcon />
              <div className="font-bold text-[30px] text-primary">
                Organick
              </div>
              
            </div>
            <p className="text-gray-600">
                Helping you live a healthier, more sustainable life.
              </p>
            <div className=" mt-4 ">
              <img src={<SmIcon />} alt="" />
            </div>
          </div>

         
          <div className="w-1/3 pl-[14px] border-l-2">
            <h2 className="font-bold text-gray-700 mb-4">Utility Pages</h2>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-blue-500">
                  Style Guide
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-500">
                  404 Not Found
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-500">
                  Password Protected
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-500">
                  Licenses
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-500">
                  Changelog
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
