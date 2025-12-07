'use client'
import Nav from './Nav'
import MobileNav from './MobileNav'
import React, { useState } from 'react'

const ResponsiveNav = () => {
  const [showNav, setShowNav] = useState(false);
  const openNavHandler = () => setShowNav(!showNav);
  const closeNavHandler = () => setShowNav(false);
  return (
    <div>
      <Nav openNav={openNavHandler}/>
      <MobileNav showNav={showNav} closeNav={closeNavHandler}/>
    </div>
  )
}

export default ResponsiveNav
