import React from 'react'
import { Link } from 'react-scroll'

const NavBar = () => {

  const links = [
    {key: 'home', value: 'Home'},
    {key: 'skills', value: 'Skills'},
    {key: 'portfolio', value: 'Portfolio'},
    {key: 'blog', value: 'Blog'},
    {key: 'contact', value: 'Contact'}
  ]

  return (
    <div className='navbar container'>
      {links.map((link, i) => 
        <Link 
          key={i}
          activeClass='active'
          to={link.key}
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          {link.value}
        </Link>
      )}
    </div>
  )
}

export default NavBar