import React from "react";
import foodImage from "../../assets/bgabouthero.png";
import { LittleIcon } from "../../assets/icons/item";
import Button from "../buttons/buttons";

const CreativeSection = () => {
  return (
    <div className="container">
      <div className="flex justify-between items-center p-8 font-serif bg-white rounded-lg shadow-lg">
        <div className="w-1/2">
          <img
            src={foodImage}
            alt="Creative Food"
            className="w-full h-auto object-contain"
          />
        </div>

        <div className="w-1/2 pl-8">
          <h4 className="text-secondary  font-sans  text-[30px]">About Us</h4>
          <h2 className="w-[400px] text-primary text-[40px]">
            We do Creative Things for Success
          </h2>
          <p className="text-gray-600 mb-4">
            Simply dummy text of the printing and typesetting industry. Lorem
            has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley.
          </p>
          <p className="text-gray-600 mb-6">
            Simply dummy text of the printing and typesetting industry. Lorem
            has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley.
          </p>
          <div className="flex">
            <div className="flex flex-row text-left items-center space-y-4">
              <div className="bg-green-100 p-4 rounded-full">
                <LittleIcon />
              </div>
              <div>
                <h3 className="text-[22px] font-bold text-primary">
                  Organic Foods Only
                </h3>
                <p className="text-[18px] font-light w-[444px]">
                  Simply dummy text of the printing and typesetting industry.
                </p>
              </div>
            </div>
          </div>

          <Button
            color="bg-primary text-gray"
            size="px-8 py-3 ml-[20px]"
            text="explore more"
          />
        </div>
      </div>
    </div>
  );
};

export default CreativeSection;
