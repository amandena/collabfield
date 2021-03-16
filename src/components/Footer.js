import React from 'react'
import SocialMedia from './SocialMedia'

const Footer = () => {
  return(
    <div className='footer container'>
      <div className='row'>
        <div className='col align-items-center text-center center'>
          <SocialMedia/>
          <p>© 2020 Amanda M Johnson</p>
        </div>
      </div>
    </div>
  )
}

export default Footer