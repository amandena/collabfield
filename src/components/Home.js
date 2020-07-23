import React from 'react'
import image from '../assets/square.jpg'

const Home = () => {
  return(
    <div className='home'>
      <h1>Amanda M Johnson</h1>
      <h3>Full Stack Software Engineer</h3>
      
      <img className='profile-pic' src={image} alt="that's me!" width='400'/>
    </div>
  )
}

export default Home