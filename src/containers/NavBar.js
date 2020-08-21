import React from 'react'
import { Link, animateScroll as scroll } from 'react-scroll'

const NavBar = () => {
  return(
    <div className='navbar'>
      <Link to='/'>Home</Link>
      <Link to='/skills'>Skills</Link>
      <Link to='/portfolio'>Portfolio</Link>
      <Link to='/blog'>Blog</Link>
      <Link to='/contact'>Contact</Link>
    </div>
  )
}

export default NavBar