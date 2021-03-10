import React from 'react'
import { Link } from 'react-scroll'

const NavBar = () => {
  return(
    <div className='navbar container'>
      <Link 
        activeClass='active'
        to='home'
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >Home</Link>
      <Link 
        activeClass='active'
        to='skills'
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >Skills</Link>
      <Link 
        activeClass='active'
        to='portfolio'
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >Portfolio</Link>
      <Link 
        activeClass='active'
        to='blog'
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >Blog</Link>
      <Link 
        activeClass='active'
        to='contact'
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >Contact</Link>
    </div>
  )
}

export default NavBar