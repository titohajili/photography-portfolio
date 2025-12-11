import Image from 'next/image'
import React from 'react'

const Packages = () => {
  return (
    <div className='pt-16 pb-16'>
      <div className='mx-auto text-center'>
        <h1 className='text-black text-2xl md:text-4xl font-light tracking-wide leading-snug '>
          - My packages -
        </h1>

        {/* Packages */}

        <div className='grid grid-cols-1 md:grid-cols-3 xl:grid-cols-3 mt-16 gap-6 mx-auto max-w-[1200px]'>
            <div className='relative h-[500px] group overflow-hidden w-full'>
                <Image src={'/images/mom2.jpg'} alt="beginners" fill className="object-cover" />
                {/* dark overlay */}
                <div className='absolute inset-0 bg-black/60'></div>
                {/* text */}
                <div className='absolute inset-0 flex flex-col justify-center text-white space-y-6' >
                    <h1 className='text-white text-2xl md:text-4xl font-medium tracking-wide leading-snug'>For beginners</h1>
                    <p className='text-white text-2xl md:text-5xl font-bold tracking-wide leading-snug'>$249</p>
                    <ul className='space-y-2 text-gray-200 text-md tracking-wide leading-snug text-left p-3'>
                        <li>- Pre-shoot phone consultation</li>
                        <li>- 1.5 hours on location or in studio</li>
                        <li>- Online gallery of your images</li>
                        <li>- 10-15 lightly enhanced images of your choice</li>
                    </ul>
                </div>
            </div>

            <div className='relative h-[500px] group overflow-hidden w-full'>
                <Image src={'/images/dance.jpg'} alt="beginners" fill className="object-cover" />
                {/* dark overlay */}
                <div className='absolute inset-0 bg-black/60'></div>
                {/* text */}
                <div className='absolute inset-0 flex flex-col justify-center text-white space-y-6' >
                    <h1 className='text-white text-2xl md:text-4xl font-medium tracking-wide leading-snug'>Full length shots</h1>
                    <p className='text-white text-2xl md:text-5xl font-bold tracking-wide leading-snug'>$149</p>
                    <ul className='space-y-2 text-gray-200 text-md tracking-wide leading-snug text-left p-3'>
                        <li> 1-hour photo shoot at the studio or on location</li>
                        <li> 1 wardrobe change</li>
                        <li> 4 lightly enhanced images of your choice</li>
                    </ul>
                </div>
            </div>

            <div className='relative h-[500px] group overflow-hidden w-full'>
                <Image src={'/images/modelp.jpg'} alt="beginners" fill className="object-cover" />
                {/* dark overlay */}
                <div className='absolute inset-0 bg-black/60'></div>
                {/* text */}
                <div className='absolute inset-0 flex flex-col justify-center text-white space-y-6' >
                    <h1 className='text-white text-2xl md:text-4xl font-medium tracking-wide leading-snug'>Model portraits</h1>
                    <p className='text-white text-2xl md:text-5xl font-bold tracking-wide leading-snug'>$249</p>
                    <ul className='space-y-2 text-gray-200 text-md tracking-wide leading-snug text-left p-3'>
                        <li>- 2-hour photo shoot at the studio or on location</li>
                        <li>- 1 wardrobe change</li>
                        <li>- 6 lightly enhanced images of your choice</li>
                    </ul>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Packages
