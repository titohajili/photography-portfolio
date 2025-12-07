import { NavLinks } from '@/constant/NavLink';
import Link from 'next/link';
import { CgClose } from 'react-icons/cg';
import React from 'react'

type Props = {
  showNav:boolean,
  closeNav:()=>void
}

const MobileNav = ({closeNav, showNav}: Props) => {

  const navOpen = showNav ? 'translate-x-0' : 'translate-x-full';

  return (
    <div>
      {/* overlay */}
      <div className={`fixed inset-0 transform transition-all right-0 duration-500 z-100002 bg-black opacity-70 w-full h-screen ${navOpen}`}></div>
        {/* navlinks */}
        <div className={`text-white ${navOpen} fixed flex flex-col items-center justify-center h-full transform transition-all duration-500 delay-300 w-full bg-gray-200 space-y-6 z-1000050 right-0`}>
          <Link href={'#'} className='absolute top-5 left-6'>
            <h1 className='text-base md:text-2xl text-black hover:text-gray-700 font-bold cursor-pointer'>TITO HAJILI</h1>
            </Link>
          {
            NavLinks.map((link) => { 
              return (
                <Link key={link.id} href={link.url}>
                  <p className='text-black text-xl sm:text-[30px] pb-1 hover:text-gray-700'>{link.label}</p>
                </Link>
              )
            })
          }
          
             {/* Close button */}
       <CgClose onClick={closeNav} className='absolute text-black top-[0.7rem] right-[1.4rem] sm:w-8 sm:h-8 w-6 h-6 cursor-pointer'/>

     </div>
    </div>
  )
}

export default MobileNav
