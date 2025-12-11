import React from 'react'
import ServiceCard from './ServiceCard';

const dataService = [
    {
        id:1,
        name: "Portrait photography",
        price: "from $1200",
        image: "/images/portrait.jpg"
    },
    {
        id:2,
        name: "Portrait photography",
        price: "from $1200",
        image: "/images/mom.jpg"
    },
    {
        id:3,
        name: "Maternity photography",
        price: "from $1200",
        image: "/images/maternity.jpg"
    },
    {
        id:4,
        name: "Love stories",
        price: "from $1200",
        image: "/images/loveStory.jpg"
    },
    {
        id:5,
        name: "Commercial photography",
        price: "from $1000",
        image: "/images/commercial.jpg"
    },
    {
        id:6,
        name: "Event photography",
        price: "from $800",
        image: "/images/event.jpg"
    },
];

const Service = () => {
  return (
    <div className='pt-16 pb-16'>
      <div className='w-[73%] mx-auto text-center'>
         {/* Title */}
        <h1 className='text-black text-2xl md:text-4xl font-light tracking-wide leading-snug '>
          - My services -
        </h1>

        {/* Service links */}

        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 mt-16 gap-6 items-center'>
            {
                dataService.map((service)=>{
                    return <div key={service.id}>
                        <ServiceCard service={service} />
                    </div>
                })
            }
        </div>

      </div>
    </div>
  )
}

export default Service
