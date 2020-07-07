import React from 'react'
import { Link } from 'react-router-dom'

const SocialMedia = () => {
  return(
    <div className='social-media'>
      <Link to='https://github.com/amandena'>GitHub</Link>
      <Link to='https://www.linkedin.com/in/amandena/'>LinkedIn</Link>
      <Link to='#'>Twitter</Link>
    </div>
  )
}

export default SocialMedia

// links not going to sites