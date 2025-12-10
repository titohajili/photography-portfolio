import React from 'react'
import RegisterPage from './Register/RegisterPage'
import About from './About/About'
import FeaturedWork from './Featured/FeaturedWork'
import Service from './Service/Service'

const Home = () => {
  return (
    <div>
      <RegisterPage/>
      <About/>
      <FeaturedWork/>
      <Service/>
    </div>
  )
}

export default Home
