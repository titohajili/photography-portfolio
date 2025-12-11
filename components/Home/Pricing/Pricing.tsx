import React from 'react'

const Pricing = () => {
  return (
    <div className='pt-16 pb-16'>
      <div className='w-[90%] mx-auto text-center'>

        <h1 className='text-black text-2xl md:text-4xl font-light tracking-wide mb-20'>
          - Pricing -
        </h1>

       
        <div className='flex justify-center items-center h-[600px]'>

          {/* Left card */}
          <div className='bg-gray-50 w-[360px] h-[470px] py-14 px-6 '>
            <h2 className='text-2xl font-semibold mb-10 tracking-wide leading-snug'>Hourly rate</h2>

            <ul className='space-y-7 text-gray-400 text-md tracking-wide leading-snug'>
              <li >Portrait <b className='text-gray-500'>$170</b></li>
              <li>Travel <b className='text-gray-500'>$130</b></li>
              <li>Architecture <b className='text-gray-500'>$120</b></li>
              <li>Commercial <b className='text-gray-500'>$150</b></li>
              <li>Event <b className='text-gray-500'>$100</b></li>
            </ul>
          </div>

          {/* Center card  */}
          <div className='bg-black/90 text-white w-[440px] h-[500px] py-20 px-8 '>
            <h2 className='text-2xl text-gray-200 font-semibold mb-10 tracking-wide'>Half day</h2>

            <ul className='space-y-7 text-md text-gray-400'>
              <li>Portrait <b className='text-white'>$800</b></li>
              <li>Travel <b className='text-white'>$550</b></li>
              <li>Architecture <b className='text-white'>$400</b></li>
              <li>Commercial <b className='text-white'>$700</b></li>
              <li>Event <b className='text-white'>$550</b></li>
              <li>Custom project <b className='text-white'>$1550</b></li>
            </ul>
          </div>

          {/* Right card */}
          <div className='bg-gray-50 w-[360px] h-[470px] py-14 px-6 '>
            <h2 className='text-2xl font-semibold mb-10 tracking-wide leading-snug'>Full day</h2>

            <ul className='space-y-7 text-gray-400 text-md tracking-wide leading-snug'>
              <li>Portrait <b className='text-gray-500'>$1500</b></li>
              <li>Travel <b className='text-gray-500'>$1100</b></li>
              <li>Architecture <b className='text-gray-500'>$750</b></li>
              <li>Commercial <b className='text-gray-500'>$1300</b></li>
              <li>Event <b className='text-gray-500'>$800</b></li>
            </ul>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Pricing
