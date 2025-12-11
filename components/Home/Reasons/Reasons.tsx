import Image from 'next/image'
import React from 'react'

const Reasons = () => {
  return (
    <div className='pt-16 pb-16'>
      <div className='mx-auto text-center'>
        <h1 className='text-black text-2xl md:text-4xl font-light tracking-wide leading-snug '>
          - Why people choose me -
        </h1>

        <div className='grid grid-cols-1 md:grid-cols-3 xl:grid-cols-3 mt-16 gap-6 mx-auto max-w-[1200px]'>
            <div className='flex flex-col items-center w-full overflow-hidden space-y-6'>
                <Image src={'/images/bulb.png'} alt='bulb' width={90} height={90} />
                <h1 className='pb-2 text-2xl md:w-4xl font-bold tracking-widest leading-snug'>Creative approach</h1>
                <p className='text-gray-400 tracking-wide'>With years in professional photography, I apply a creative approach to each work to make it unique and the most memorable.</p>
            </div>

            <div className='flex flex-col items-center w-full overflow-hidden space-y-6'>
                <Image src={'/images/file.png'} alt='bulb' width={90} height={90} />
                <h1 className='pb-2 text-2xl md:w-4xl font-bold tracking-widest leading-snug'>Experience</h1>
                <p className='text-gray-400 tracking-wide'>My experience, talent, creativity, and commitment to quality have helped me to become one of the best in the industry.</p>
            </div>

            <div className='flex flex-col items-center w-full overflow-hidden space-y-6'>
                <Image src={'/images/honest.png'} alt='bulb' width={90} height={90} />
                <h1 className='pb-2 text-2xl md:w-4xl font-bold tracking-widest leading-snug'>I never upsell</h1>
                <p className='text-gray-400 tracking-wide'>You should feel safe in the knowledge that when you book a package, the price you are quoted will be the final price you pay.</p>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Reasons
