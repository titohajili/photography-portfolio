'use client'
import { NavLinks } from '@/constant/NavLink'
import Link from 'next/link'
import { FaInstagram } from "react-icons/fa6";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { RxHamburgerMenu } from "react-icons/rx";
import React, { useEffect, useState } from 'react'




type Props = {
  openNav:()=>void
}



const Nav = ({openNav}: Props) => {

  const [navBg, setNavBg] = useState(false);

  useEffect(()=>{
    const handler = () =>{
      if(window.scrollY >=90) setNavBg(true);
      if(window.scrollY <90) setNavBg(false);
    };

    window.addEventListener('scroll', handler);

    return()=>{
      window.removeEventListener('scroll', handler);
    }
  },[])

  return (
    <div className={`transition-all duration-200 h-[12vh] z-1000 fixed w-full ${navBg ? 'bg-black shadow-md t' : "fixed"}`}>
      <div className='flex items-center h-full justify-between  w-[80%] mx-auto'>
          {/* logo */}
            <Link href={'#'}>
               <h1 className='text-base text-white md:text-2xl hover:text-gray-400  font-bold cursor-pointer'>TITO HAJILI</h1>
            </Link>

        <div className='flex items-center sm:space-x-20'>
            {/* Nav links */}
            <div className='hidden lg:flex items-center space-x-10'>
              {
                NavLinks.map((link)=>{
                  return <Link key={link.id} href={link.url} className='text-base text-white hover:text-gray-400  font-medium transition-all duration-200'>
                    <p>{link.label}</p>
                  </Link>
                })
              }
            </div>
              <div className='flex items-center space-x-4'>
              {/* social icons */}
                 <FaInstagram className="text-2xl text-white transition-all duration-300 hover:scale-125 hover:text-pink-500 hover:drop-shadow-[0_0_8px_rgba(255,0,150,0.8)] cursor-pointer"/>
                 <FaSquareFacebook className="text-2xl text-white transition-all duration-300 hover:scale-125 hover:text-blue-600 hover:drop-shadow-[0_0_8px_rgba(0,100,255,0.8)] cursor-pointer"/>
                 <FaXTwitter className="text-2xl text-white transition-all duration-300 hover:scale-125 hover:text-gray-300 hover:drop-shadow-[0_0_8px_rgba(200,200,200,0.8)] cursor-pointer"/>

                 <RxHamburgerMenu  onClick={openNav} className='w-8 h-8 text-white cursor-pointer  lg:hidden'/>
              </div>


        </div>
      </div>
    </div>
  )
}

export default Nav