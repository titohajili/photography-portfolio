import React from 'react'

const Nav = () => {
  return (
    <div className='transition-all duration-200 h-[12vh] z-1000 fixed w-full '>
      <div className='flex items-center h-full justify-between w-[85%] mx-auto'>
        <div className='flex items-center sm:space-x-20'>
          {/* logo */}

            <h1 className='text-cl hidden sm:block md:text-2xl text-gray-800 dark:text-gray-400 font-bold  cursor-pointer'>TITO HAJILI</h1>


        </div>
      </div>
    </div>
  )
}

export default Nav