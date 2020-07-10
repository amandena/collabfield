import React from 'react'
import image from '../assets/square.jpg'

const Home = () => {
  return(
    <div className='home'>
      <img src={image} alt="that's me!" width='400'/>
    </div>
  )
}

export default Home