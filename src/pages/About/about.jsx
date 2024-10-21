import React from 'react';
import HeroAbout from '../../components/hero4/HeroAbout';
import CreativeSection from '../../components/creative/creative';
import Abouttwo from '../../components/about2/About2';
import OrganicExperts from '../../components/experts/experts';

export const Aboutpage = () => {
  return (
    <div>
      <HeroAbout />
      <div>
        <CreativeSection/>
      </div>
      <div className='container font-serif'>
        <Abouttwo/>
      </div>
      <div className='container font-serif'>
        <OrganicExperts/>
      </div>
    </div>
  );
};
