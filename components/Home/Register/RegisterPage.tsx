import React from 'react'

const RegisterPage = () => {
  return (
    <div className="relative min-h-screen w-full">

      {/* Background image */}
      <div className="absolute inset-0 bg-cover bg-center h-[115vh] w-full"style={{ backgroundImage: "url('/images/bg-girl.avif')" }}/>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70 h-[115vh]" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center h-screen px-4">
        <h1 className="text-white text-4xl md:text-6xl font-extrabold tracking-wide leading-snug max-w-4xl">
          WANT TO HAVE INCREDIBLE LIFE MEMORIES?
        </h1>

        <button className="mt-10 bg-white hover:bg-gray-400 hover:text-gray-200 px-10 py-4 sm:px-6 sm:py-3 text-black font-medium tracking-widest shadow-lg hover:scale-105  transition">
          REQUEST A QUOTE
        </button>
      </div>
    </div>
  )
}

export default RegisterPage
