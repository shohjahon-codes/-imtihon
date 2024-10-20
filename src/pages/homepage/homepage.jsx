
import HeroSection from "../../components/hero/hero";
import ProductList from "../../components/products/product";
import { SectionTwo } from "../../components/section-two/section";
import { SectionThree } from "../../components/section-three/section3";
import FoodSection from "../../components/section5/shop";

import React from "react";
import { SectionComment } from "../../components/sectioncom/sectioncom";
import { MyBox } from "../../components/section6/tittle";
import SectionWithDivs from "../../components/section7/cards";

export const Home = () => {
  return (
    <div>
      
      <section>
        <HeroSection />
      </section>
      
      <section>
        <SectionTwo />
      </section>
      <section>
        <SectionThree />
      </section>
      <section>
        <ProductList />
      </section>
      <section>
        <SectionComment/>
      </section>
      <section>
        <FoodSection/>
      </section>
      <section>
        <MyBox/>
      </section>
      <section>
        <SectionWithDivs/>
      </section>
    </div>
  );
};
