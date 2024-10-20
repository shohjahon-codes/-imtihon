import React from "react";
import shop3 from "../../assets/shops4.svg";
import { LittleIcon } from "../../assets/icons/item";
import { ItemTwo } from "../../assets/icons/item2"
import Button from "../buttons/buttons";

export const SectionThree = () => {
  return (
    <div className="w-[100%] h-[800px] bg-light">
      <section className="flex font-serif container items-center">
        <div>
          <img src={shop3} alt="" />
        </div>
        <div>
          <section className="bg-gray-50 py-10">
            <div className="max-w-4xl mx-auto px-6">
              <div className="text-left mb-8">
                <h2 className="text-[36px] font-sans  text-secondary font-semibold">
                  About Us
                </h2>
                <h1 className="text-[50px] font-bold text-primary text-gray-800 mb-4">
                  We Believe in Working Accredited Farmers
                </h1>
                <p className="text-gray-600 w-[490px]">
                  Simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's standard dummy text ever
                  since the 1500s.
                </p>
              </div>

              <div className="flex-col">
                <div className="flex flex-row text-left items-center space-y-4">
                  <div className="bg-green-100 p-4 rounded-full">
                    <LittleIcon />
                  </div>
                  <div>
                    <h3 className="text-[22px] font-bold text-primary">
                      Organic Foods Only
                    </h3>
                    <p className="text-[18px] font-light w-[444px]">
                      Simply dummy text of the printing and typesetting
                      industry.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex-col">
                <div className="flex flex-row text-left items-center space-y-4">
                  <div className="bg-green-100 p-4 rounded-full">
                    <ItemTwo />
                  </div>
                  <div>
                    <h3 className="text-[22px] font-bold text-primary">
                      Quality Standards
                    </h3>
                    <p className="text-[18px] font-light w-[444px]">
                      Simply dummy text of the printing and typesetting
                      industry. Lorem Ipsum
                    </p>
                  </div>
                </div>
              </div>
              <Button color="bg-primary text-light" size="px-8 py-3 ml-[20px]" text="Submit" />
            </div>
          </section>
        </div>
      </section>
    </div>
  );
};
