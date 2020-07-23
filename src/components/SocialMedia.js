import React from 'react'
import { Link } from 'react-router-dom'
import github from '../assets/social-media/white-gh.png'
import linkedin from '../assets/social-media/linkedin.png'
import twitter from '../assets/social-media/twitter.png'

const SocialMedia = () => {
  return(
    <div className='social-media'>
      <Link to='https://github.com/amandena'><img src={github} alt="github" width='25'/></Link>
      <Link to='https://www.linkedin.com/in/amandena/'><img src={linkedin} alt="linkedin" width='25'/></Link>
      <Link to='https://twitter.com/amandenacodes'><img src={twitter} alt="twitter" width='25'/></Link>
    </div>
  )
}

export default SocialMedia

// links not going to sites