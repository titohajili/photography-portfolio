import Image from 'next/image'
import React from 'react'
import { FaInstagram, FaSquareFacebook, FaXTwitter, FaYoutube } from "react-icons/fa6";


const Team = () => {
  return (
    <div className='pt-16 pb-16'>
      <div className='mx-auto text-center'>
        <h1 className='text-black text-2xl md:text-4xl font-light tracking-wide leading-snug '>
          - My team -
        </h1>

        <div className='grid grid-cols-1 md:grid-cols-3 xl:grid-cols-3 mt-16 gap-6 mx-auto max-w-[1200px]'>
            <div className='flex flex-col items-center w-full overflow-hidden space-y-6 bg-gray-100 p-5'>
                {/* image */}
                <div className="overflow-hidden rounded-full w-28 h-28 relative">
                  <Image src="/images/profile.jpg" alt="profile" fill className="object-cover"/>
                </div>
                  <h1 className='text-2xl font-medium tracking-widest leading-snug'>Marvin Bell</h1>
                  <p className='text-gray-700 tracking-wide leading-snug'>Assistant</p>
                  <p className='text-gray-500 tracking-wide leading-snug '>Marvin is currently a student but expertly assists me at the studio.</p>

                   <div className='flex items-center space-x-4 mt-10 mb-16'>
                          {/* social icons */}
                     <FaInstagram className="text-2xl text-black transition-all duration-300 hover:scale-125 hover:text-pink-500 hover:drop-shadow-[0_0_8px_rgba(255,0,150,0.8)] cursor-pointer"/>
                     <FaSquareFacebook className="text-2xl text-black transition-all duration-300 hover:scale-125 hover:text-blue-600 hover:drop-shadow-[0_0_8px_rgba(0,100,255,0.8)] cursor-pointer"/>
                   </div>
            </div>

            <div className='flex flex-col items-center w-full overflow-hidden space-y-6 bg-gray-100 p-5'>
                {/* image */}
                <div className="overflow-hidden rounded-full w-28 h-28 relative">
                  <Image src="/images/profile1.jpg" alt="profile" fill className="object-cover"/>
                </div>
                  <h1 className='text-2xl font-medium tracking-widest leading-snug'>Lora Hampton</h1>
                  <p className='text-gray-700 tracking-wide leading-snug'>Hairstylist</p>
                  <p className='text-gray-500 tracking-wide leading-snug '>Lora has more than 6 years of practical experience in hairstyling industry.</p>

                   <div className='flex items-center space-x-4 mt-10 mb-16'>
                          {/* social icons */}
                     <FaInstagram className="text-2xl text-black transition-all duration-300 hover:scale-125 hover:text-pink-500 hover:drop-shadow-[0_0_8px_rgba(255,0,150,0.8)] cursor-pointer"/>
                     <FaSquareFacebook className="text-2xl text-black transition-all duration-300 hover:scale-125 hover:text-blue-600 hover:drop-shadow-[0_0_8px_rgba(0,100,255,0.8)] cursor-pointer"/>
                     <FaXTwitter className="text-2xl text-black transition-all duration-300 hover:scale-125 hover:text-gray-300 hover:drop-shadow-[0_0_8px_rgba(200,200,200,0.8)] cursor-pointer"/>

                   </div>
            </div>

            <div className='flex flex-col items-center w-full overflow-hidden space-y-6 bg-gray-100 p-5'>
                {/* image */}
                <div className="overflow-hidden rounded-full w-28 h-28 relative">
                  <Image src="/images/profile2.jpg" alt="profile" fill className="object-cover"/>
                </div>
                  <h1 className='text-2xl font-medium tracking-widest leading-snug'>Dora Sims</h1>
                  <p className='text-gray-700 tracking-wide leading-snug'>Makeup artist</p>
                  <p className='text-gray-500 tracking-wide leading-snug '>Dora is one of the most renowned makeup artists serving various special events and parties.</p>

                   <div className='flex items-center space-x-4 mt-10 mb-16'>
                          {/* social icons */}
                     <FaInstagram className="text-2xl text-black transition-all duration-300 hover:scale-125 hover:text-pink-500 hover:drop-shadow-[0_0_8px_rgba(255,0,150,0.8)] cursor-pointer"/>
                     <FaSquareFacebook className="text-2xl text-black transition-all duration-300 hover:scale-125 hover:text-blue-600 hover:drop-shadow-[0_0_8px_rgba(0,100,255,0.8)] cursor-pointer"/>
                    <FaXTwitter className="text-2xl text-black transition-all duration-300 hover:scale-125 hover:text-gray-300 hover:drop-shadow-[0_0_8px_rgba(200,200,200,0.8)] cursor-pointer"/>
                    <FaYoutube className="text-2xl text-black transition-all duration-300 hover:scale-125 hover:text-red-600 hover:drop-shadow-[0_0_8px_rgba(255,0,0,0.8)] cursor-pointer"/>
                   </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Team
