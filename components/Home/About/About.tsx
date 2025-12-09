import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaInstagram } from "react-icons/fa6";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";

const About = () => {
  return (
    <div className='mt-[168px] mb-16 flex items-center justify-center '>
      <div className='w-[80%] max-w-[1400px] mx-auto flex flex-col justify-center items-center min-[1117px]:flex-row'>

        <div className='bg-black w-full sm:w-[500px] md:w-[600px] h-[300px] sm:h-[350px] flex items-center justify-center md:mr-6 mb-6 md:mb-0'>
          <Image src='/images/camera.jpg' alt='photo' width={300} height={300} />
        </div>

        <div className='flex flex-col md:ml-6 sm:m-2'>
          <h1 className='text-black text-2xl md:text-4xl font-light tracking-wide leading-snug max-w-4xl'>- About me -</h1>

          <div className='w-full sm:w-[450px] max-[639px]:w-[350px]'>
            <p className='mb-3 leading-8 text-gray-400'>
              Hi! I'm Tito Hajili, an award-winning photographer with years of experience under my belt.
              Entrust with me any of your special occasions to make them the most memorable.
            </p>

            <p className='pt-2 leading-8 text-gray-400'>
              I am passionate about creating extraordinary stories, gorgeous portraits, professional photo sessions,
              and much more. Feel free to hire me for your significant event!
            </p>
          </div>

          <div className='flex items-center space-x-3 mt-3'>
            <FaInstagram className="text-2xl text-black transition-all duration-300 hover:scale-125 hover:text-pink-500 hover:drop-shadow-[0_0_8px_rgba(255,0,150,0.8)] cursor-pointer"/>
            <FaSquareFacebook className="text-2xl text-black transition-all duration-300 hover:scale-125 hover:text-blue-600 hover:drop-shadow-[0_0_8px_rgba(0,100,255,0.8)] cursor-pointer"/>
            <FaXTwitter className="text-2xl text-black transition-all duration-300 hover:scale-125 hover:text-gray-300 hover:drop-shadow-[0_0_8px_rgba(200,200,200,0.8)] cursor-pointer"/>
          </div>

          <Link href="#">
            <p className='tracking-[0.5em] mt-4 text-gray-500 inline-block hover:border-b-2 hover:border-gray-500'>
              LEARN MORE
            </p>
          </Link>
        </div>

      </div>
    </div>
  )
}

export default About
