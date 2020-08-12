import React from 'react'
import { Link } from 'react-router-dom'
import image from '../assets/square.jpg'

const Home = () => {
  return(
    <div className='home'>
      <h1>Amanda M Johnson</h1>
      <h2>Full Stack Software Engineer</h2>

      <img className='profile-pic' src={image} alt="that's me!" width='400'/>

      <p>Hi! I'm Amanda.</p>

      <p>I've been a barista, dog walker, fitness influencer, graphic designer, and managed a successful physical therapy company. After falling in love with coding, I now create applications for the web and am looking for a new full time role as a Full Stack Software Engineer.</p>

      <p>I graduated from Flatiron School's Full Stack Web Development program this year and also have a Bachelor's degree in Graphic Design from Full Sail University.</p>
      
      <p>I can be found typing away at my favorite coffee shop, walking my dog around the block, or you can just drop me a line <Link to='/contact'>here</Link>.</p>
    </div>
  )
}

export default Home