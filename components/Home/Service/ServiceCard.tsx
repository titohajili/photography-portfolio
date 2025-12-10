import Image from 'next/image';
import React from 'react'

type Props = {
  service: {
    id: number;
    name: string;
    price: string;
    image: string;
}
}

const ServiceCard = ({service}: Props) => {
  return (
    <div className='relative w-full h-[500px] group overflow-hidden'>
      <Image src={service.image} alt={service.name} fill className='object-cover'/>
      {/* dark overlay */}
      <div className='absolute inset-0 bg-black/60 group-hover:bg-black/70 transition-all duration-500'></div>
      {/* text */}
      <div className='absolute inset-0 flex flex-col items-center justify-center text-white space-x-2'>
        <h2 className="text-xl md:text-2xl xl:text-3xl font-medium tracking-widest text-center">
            {service.name}
       </h2>

       <p className="text-md font-medium tracking-widest mt-12">
           {service.price}
        </p>

      </div>
    </div>
  )
}

export default ServiceCard
