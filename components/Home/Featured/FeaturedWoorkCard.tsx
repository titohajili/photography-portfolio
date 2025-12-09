import Image from 'next/image'
import React from 'react'


type Props = {
    data: {
    id: number;
    name: string;
    position: string;
    image: string;
}
}



const FeaturedWoorkCard = ({data}: Props) => {
  return (
    <div className='overflow-hidden'>
      <div>
        <div className='w-full h-[400px] overflow-hidden'>
          <Image src={data.image} alt='image' width={600} height={600} className='w-full h-full object-cover'/>
        </div>
        <div className='flex flex-col p-4'>
            <h1 className='font-medium flex-5xl text-black text-2xl md:text-4xl tracking-wide leading-snug'>{data.name}</h1>
            <p className='text-gray-500 tracking-wide leading-snug'>{data.position}</p>
        </div>
      </div>
    </div>
  )
}

export default FeaturedWoorkCard
