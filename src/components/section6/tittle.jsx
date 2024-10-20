import React from 'react'
import fricendly from "../../assets/fricendly.png"

export const MyBox = () => {
  return (
    <div>
          <section className='relative font-serif font-bold'>
            <div><img className='w-[55%] h-[600px]' src={fricendly} alt="r" /></div>
            <div className='absolute left-[700px] top-[20px] w-[600px] h-[auto] p-[70px] rounded-[40px] bg-[#fff]  rounded-xxl '>
                <p className='font-sans text-secondary text-[30px]'>
                Eco Friendly
                </p>
                <h2 className='font-serif text-[40px] text-primary font-bold'>
                Econis is a Friendly
                Organic Store
                </h2>
                <p className='font-light mb-[10px] '>
                    <span className='text-primary font-semibold '>
                    Start with Our Company First
                    </span><br />
                    Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque laudantium. Sed ut perspiciatis.

                </p>
                <p className='font-light mb-[10px]'>
                    <span className='text-primary font-semibold '>
                    Start with Our Company First
                    </span><br />
                    Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque laudantium. Sed ut perspiciatis.

                </p>
                <p className='font-light  '>
                    <span className='text-primary font-semibold '>
                    Start with Our Company First
                    </span><br />
                    Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque laudantium. Sed ut perspiciatis.

                </p>


            </div>
          </section>
    </div>
  )
}
