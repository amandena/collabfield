import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return(
    <div className='navbar'>
      <Link to='/'>Home</Link>
      <Link to='#'>About</Link>
      <Link to='#'>Portfolio</Link>
      <Link to='#'>Blog</Link>
      <Link to='#'>Contact</Link>
    </div>
  )
}

export default NavBar