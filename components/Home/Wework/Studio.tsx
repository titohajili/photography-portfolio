import React from 'react'
import Image from 'next/image'

const Studio = () => {
  return (
    <div className="pt-16 pb-16">
  <div className="text-center">

        <h1 className="text-black text-2xl md:text-4xl font-light tracking-wide leading-snug">
              - How we work -
        </h1>
        <div className="relative h-[550px] w-[80%] mx-auto mt-8 group overflow-hidden">
            <Image src="/images/studio.jpg" alt="beginners" fill className="object-cover" />
            <div className="absolute inset-0 bg-black/60"></div>
        </div>
  </div>
</div>

  )
}

export default Studio
