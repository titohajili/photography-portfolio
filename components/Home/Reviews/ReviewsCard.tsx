import React from 'react'
import Image from 'next/image'
type Props = {
    image:string;
    username:string;
    userRole:string;
    title:string;
}

const ReviewsCard = ({image,username,userRole,title}: Props) => {
  return (
    <div className='w-full lg:w-[60%] mx-auto'>
      <div className='w-32 h-33 rounded-full overflow-hidden mx-auto '>
         <Image src={image} alt="image" width={128} height={128} className='object-cover w-full h-full'/>
      </div>

        <h1 className='mt-4 mb-4 text-2xl text-center font-bold tracking-widest leading-snug'>{username}</h1>
        <p className='mt-2 mb-4 text-gray-800 tracking-wide'>{userRole}</p>
        <p className='text-gray-600'>{title}</p>
      
    </div>
  )
}

export default ReviewsCard
