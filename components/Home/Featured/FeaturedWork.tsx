import React from 'react'
import FeaturedWoorkCard from './FeaturedWoorkCard'

const dataWork = [
  {
    id:1,
    name:"Tony, Loretta & Nell",
    position:"Family portrait",
    image:"/images/family.jpg"
  },
  {
    id:2,
    name: "Tom & Jane, Riverside",
    position: "Love story",
    image: "/images/love.jpg"
  },
  {
    id:3,
    name: "Anna Clement",
    position: "Model photography",
    image: "/images/model.jpg"
  },
  {
    id:4,
    name: "Ventura County",
    position: "Nature photography",
    image: "/images/nature.jpg"
  }
]

const FeaturedWork = () => {
  return (
    <div className='pt-16 pb-16'>
      <div className='w-[73%] mx-auto text-center'>
        {/* Title */}
        <h1 className='text-black text-2xl md:text-4xl font-light tracking-wide leading-snug'>
          - Featured works -
        </h1>
          {/* Data Links */}
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 mt-16 gap-6 items-center'>
            {
              dataWork.map((data)=>{
                return <div key={data.id} >
                  <FeaturedWoorkCard data={data}/>
                </div>
              })
            }
        </div>

            {/* button */}

          
        <button className="mt-10 bg-white hover:bg-gray-400 hover:text-gray-200 px-10 py-4 sm:px-6 sm:py-3 text-black font-medium tracking-widest shadow-md border border-gray-200 hover:scale-105  transition cursor-pointer">
          FULL PORTFOLIO
        </button>
        
      </div>
    </div>
  )
}

export default FeaturedWork
