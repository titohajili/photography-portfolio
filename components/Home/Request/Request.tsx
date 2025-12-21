import React from 'react'

const Request = () => {
  return (
    <div className='pt-16 pb-10'>
      <div className='w-full h-[120vh] relative'>
        {/* Background */}
        <div className="absolute inset-0 bg-cover bg-center flex flex-col items-center justify-center" style={{ backgroundImage: "url('/images/ggg.png')" }}>
        {/* overlay */}
        <div className='absolute inset-0 bg-black/20'></div>
        {/* content */}
        <div className='relative z-10 flex items-center justify-center min-h-screen'>
            <div className='bg-white w-[500px] px-12 py-14 text-center shadow-lg'>
                <h1 className='mt-14 mb-14 text-black tracking-widest leading-tight text-3xl font-medium'>Hire me to receive <br /> extraordinary creations!</h1>
                <p className='text-sm text-gray-500 tracking-widest leading-tight mb-12'>Fill in the form and I will get in touch with you <br /> as soon as possible.</p>
                {/* form */}
                <form className='flex flex-col gap-6 text-left'>
                  {/* name */}
                  <div>
                    <label className='text-gray-500 text-sm tracking-widest'>Name*</label>
                    <div className='mt-2 bg-gray-200 h-12 flex items-center'>
                      <input type="text"  className='w-full bg-transparent px-4 outline-none'/>
                    </div>
                  </div>
                  {/* number */}
                   <div>
                    <label className='text-gray-500 text-sm tracking-widest'>Phone number*</label>
                    <div className='mt-2 bg-gray-200 h-12 flex items-center'>
                      <input type="tel"  className='w-full bg-transparent px-4 outline-none'/>
                    </div>
                  </div>
                  {/* phone */}
                   <div>
                    <label className='text-gray-500 text-sm tracking-widest'>Email*</label>
                    <div className='mt-2 bg-gray-200 h-12 flex items-center'>
                      <input type="email"  className='w-full bg-transparent px-4 outline-none'/>
                    </div>
                  </div>
                  {/* button */}
                  <button type='submit' className='w-full h-12 border-black border-2 text-sm font-semibold tracking-widest leading-tight hover:bg-black hover:text-white transition-all duration-500 cursor-pointer'>REQUEST A QUOTE</button>
                </form>
            </div>
        </div>
                
        </div>
      </div>
    </div>
  )
}

export default Request
