import React from 'react'

const RegisterPage = () => {
  return (
    <div className="relative h-[115vh] w-full overflow-hidden">

      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/bg-girl.avif')" }}
      >

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70" ></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center h-screen px-4">
        <h1 className="text-white text-4xl md:text-6xl font-extrabold tracking-wide leading-snug max-w-4xl">
          WANT TO HAVE INCREDIBLE LIFE MEMORIES?
        </h1>

        <button
          type="button"
          className="mt-10 bg-white px-10 py-4 text-black font-medium tracking-widest shadow-lg
                     hover:bg-gray-200 hover:scale-105 transition-all duration-300"
        >
          REQUEST A QUOTE
        </button>
      </div>
      </div>
    </div>
  )
}
export default RegisterPage
