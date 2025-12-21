import React from 'react'
import Link from 'next/link'
import { FaInstagram } from "react-icons/fa6";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className='w-full bg-black/85 '>
      <div className='w-[80%] mx-auto px-6 py-14 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-10'>
        {/* 1th colum */}
        <div className='space-y-6 text-white'>
            <Link href={'#'}>
               <h1 className='text-base text-white md:text-2xl hover:text-gray-400  font-bold cursor-pointer'>TITO HAJILI</h1>
            </Link>
               <p className='mb-3 mt-3'>
                Phone: <a href="tel:+994501234567" className=" hover:underline">+994 50 123 45 67</a>
               </p>
        </div>
        {/* 2th colum */}
        <div>
            <ul className='space-y-4 text-md text-gray-400 transition-all duration-300'>
                <li className='hover:text-white  cursor-pointer'>About</li>
                <li className='hover:text-white  cursor-pointer'>Pricing</li>
                <li className='hover:text-white  cursor-pointer'>Press</li>
                <li className='hover:text-white  cursor-pointer'>Contacts</li>
            </ul>
        </div>
        {/* 3th colum */}
        <div>
            <ul className='space-y-4 text-md text-gray-400 transition-all duration-300'>
                <li className='hover:text-white  cursor-pointer'>Portfolio</li>
                <li className='hover:text-white  cursor-pointer'>Reviews</li>
                <li className='hover:text-white  cursor-pointer'>Blog</li>
            </ul>
        </div>
        {/* 4th colum */}
        <div className='space-y-8'>
            <h1 className='text-gray-400'>Follow Us</h1>
            <div className='flex items-center space-x-4'>
        {/* social icons */}
              <FaInstagram className="text-2xl text-white transition-all duration-300 hover:scale-125 hover:text-pink-500 hover:drop-shadow-[0_0_8px_rgba(255,0,150,0.8)] cursor-pointer"/>
              <FaSquareFacebook className="text-2xl text-white transition-all duration-300 hover:scale-125 hover:text-blue-600 hover:drop-shadow-[0_0_8px_rgba(0,100,255,0.8)] cursor-pointer"/>
              <FaXTwitter className="text-2xl text-white transition-all duration-300 hover:scale-125 hover:text-gray-300 hover:drop-shadow-[0_0_8px_rgba(200,200,200,0.8)] cursor-pointer"/>
            </div>
        </div>
        {/* 5th colum */}
        <div className='text-center'>
          <h1 className='text-gray-400 tracking-wide leading-tight mb-3'>Subscribe to get the latest <br /> news from us</h1>
          <form className='space-y-4 mt-3'>
              <input type="email" placeholder='Email' className="w-full h-12 px-4 outline-none bg-gray-500 text-white" />
              <button type='submit' className='w-full h-12 border-white border-2 text-sm font-semibold tracking-widest leading-tight hover:bg-white hover:text-black transition-all duration-500 cursor-pointer'>SIGIN UP</button>
          </form>
        </div>

      </div>
      {/* copyright */}
      <div className='border-t border-gray-200 py-6 text-center text-xsgit text-gray-400'>
       © 2025 Tito Hajili. All rights reserved.
      </div>
    </div>
  )
}

export default Footer
