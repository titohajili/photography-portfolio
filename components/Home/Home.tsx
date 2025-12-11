import React from 'react'
import RegisterPage from './Register/RegisterPage'
import About from './About/About'
import FeaturedWork from './Featured/FeaturedWork'
import Service from './Service/Service'
import Pricing from './Pricing/Pricing'
import Packages from './Packages/Packages'

const Home = () => {
  return (
    <div>
      <RegisterPage/>
      <About/>
      <FeaturedWork/>
      <Service/>
      <Pricing/>
      <Packages/>
    </div>
  )
}

export default Home
