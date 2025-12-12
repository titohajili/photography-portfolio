import Image from 'next/image'

const Facts = () => {
  return (
    <div className='pb-16 pt-16 mx-auto text-center w-[90%]'>
      <div className='w-full h-[400px] group overflow-hidden bg-black relative '>
              <Image src={'/images/cc1.png'} alt='image' fill className='object-center'/>
                 <div className='absolute inset-0 bg-black/50'></div>
            <div className='absolute inset-0 flex flex-col items-center justify-center'> 
                <h1 className="text-white text-2xl md:text-4xl font-light tracking-wide leading-snug">
                   - Facts about our work -
                </h1>
                <div className='grid grid-cols-4 md:grid-cols-4 mt-4  gap-3  w-full'>
                    <div className='flex flex-col items-center w-full overflow-hidden space-y-6  text-white p-5'>
                        <h1 className='text-2xl md:text-5xl font-bold tracking-widest'>1.5K</h1>
                        <p className='text-md text-gray-300 tracking-widest'>special events</p>
                        <p className='text-md text-gray-300 tracking-widest'>and parties served</p>
                    </div>

                    <div className='flex flex-col items-center w-full overflow-hidden space-y-6  text-white p-5'>
                        <h1 className='text-2xl md:text-5xl font-bold tracking-widest  '>150+</h1>
                        <p className='text-md text-gray-300 tracking-widest'>only 5-star</p>
                        <p className='text-md text-gray-300 tracking-widest'>reviews</p>
                    </div>

                    <div className='flex flex-col items-center w-full overflow-hidden space-y-6  text-white p-5'>
                        <h1 className='text-2xl md:text-5xl font-bold tracking-widest  '>250+</h1>
                        <p className='text-md text-gray-300 tracking-widest'>publication</p>
                        <p className='text-md text-gray-300 tracking-widest'>features</p>
                    </div>

                    <div className='flex flex-col items-center w-full overflow-hidden space-y-6  text-white p-5'>
                        <h1 className='text-2xl md:text-5xl font-bold tracking-widest  '>4M+</h1>
                        <p className='text-md text-gray-300 tracking-widest'>life moments</p>
                        <p className='text-md text-gray-300 tracking-widest'>captured</p>
                    </div>


                </div>
            </div>

        
      </div>
    </div>
  )
}

export default Facts
