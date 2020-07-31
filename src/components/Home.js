import React from 'react'
import image from '../assets/square.jpg'

const Home = () => {
  return(
    <div className='home'>
      <h1>Amanda M Johnson</h1>
      <h3>Full Stack Software Engineer</h3>

      <img className='profile-pic' src={image} alt="that's me!" width='400'/>

      <p>Hi! I'm Amanda.</p>

      <p>I've been a barista, dog walker, fitness influencer, graphic designer, and managed a successful physical therapy company. After falling in love with coding, I now create applications for the web and am looking for a new full time role as a Full Stack Software Engineer.</p>
      
      <p>I can be found typing away at my favorite coffee shop, walking my dog around the block, or you can just drop me a line <strong>here</strong>.</p>
    </div>
  )
}

export default Home