import React from 'react'
import aboutbg from "../../assets/aboutbg.png"

function  HeroAbout (){
  return (
  <div className='container'>
    
    <div
      className='bg-cover bg-center w-full h-[400px]' // bg-cover rasmni kesmay to'liq qiladi va h-400px balandlik beradi
      style={{ backgroundImage: `url(${aboutbg})`, backgroundRepeat: 'no-repeat' }} // rasm takrorlanmasligi uchun
    >
      <div className="flex items-center justify-center h-full"> {/* Matnni markazga joylashtirish */}
        <h1 className='text-center font-serif  text-primary text-[40px] font-bold'>
          About Us
        </h1>
      </div>
    </div>
  </div>

  )
};
export default HeroAbout;
