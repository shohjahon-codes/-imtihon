import React from 'react';
import { EndIcon } from '../../assets/icons/endicon';
// Props orqali rang, text va boshqa qiymatlarni qabul qilamiz
const Button = ({ color, text, size, }) => {
  return (
    <button
      className={`inline-flex items-center justify-center font-medium gap-[10px]  rounded-lg focus:outline-none ${size} ${color}  `}
    >
      {text}<EndIcon/>
      
    </button>
  );
};

export default Button;
