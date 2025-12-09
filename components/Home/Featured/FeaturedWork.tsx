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
        <h1 className='text-black text-2xl md:text-4xl font-light tracking-wide leading-snug'>
          - Featured works -
        </h1>

        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 mt-16 gap-6 items-center'>
            {
              dataWork.map((data,i)=>{
                return <div key={data.id}  data-aos="zoom-out" data-aos-delay={`${i * 150}`} data-aos-anchor-placement="top-center">
                  <FeaturedWoorkCard data={data}/>
                </div>
              })
            }
        </div>
        
      </div>
    </div>
  )
}

export default FeaturedWork
