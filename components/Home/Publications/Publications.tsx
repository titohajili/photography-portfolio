import React from 'react'
import Image from 'next/image'

const Publications = () => {
  return (
    <div className='pt-16 pb-16 flex justify-center items-center'>
      <div className='w-[90%] text-center bg-black pt-16 pb-16'>
         <h1 className='text-white text-2xl md:text-4xl font-light tracking-wide leading-snug pb-12'>
          - Publications -
        </h1>
        <div className='grid sm:grid-cols-1 md:grid-cols-3 xl:grid-cols-6 gap-6 mt-4   w-full mb-8 place-items-center '>
            <div className='w-[170PX] h-[170px] group overflow-hidden relative'>
              <Image src={'/images/pub1.jpg'} alt="beginners" fill className="object-cover object-top" />
                <div className='absolute inset-0 bg-black/30'></div>
            </div>
            <div className='w-[170PX] h-[170px] group overflow-hidden relative'>
              <Image src={'/images/pub2.jpg'} alt="beginners" fill className="object-cover object-top" />
                <div className='absolute inset-0 bg-black/40'></div>
            </div>
            <div className='w-[170PX] h-[170px] group overflow-hidden relative'>
              <Image src={'/images/pub3.jpg'} alt="beginners" fill className="object-cover object-top" />
                <div className='absolute inset-0 bg-black/40'></div>
            </div>
            <div className='w-[170PX] h-[170px] group overflow-hidden relative'>
              <Image src={'/images/pub4.jpg'} alt="beginners" fill className="object-cover object-top" />
                <div className='absolute inset-0 bg-black/40'></div>
            </div>
            <div className='w-[170PX] h-[170px] group overflow-hidden relative'>
              <Image src={'/images/pub5.jpg'} alt="beginners" fill className="object-cover object-top" />
                <div className='absolute inset-0 bg-black/40'></div>
            </div>
            <div className='w-[170PX] h-[170px] group overflow-hidden relative'>
              <Image src={'/images/pub6.jpg'} alt="beginners" fill className="object-cover object-top" />
                <div className='absolute inset-0 bg-black/40'></div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Publications
