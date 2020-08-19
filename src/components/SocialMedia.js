import React from 'react'
import github from '../assets/social-media/white-gh.png'
import linkedin from '../assets/social-media/linkedin.png'
import twitter from '../assets/social-media/twitter.png'

const SocialMedia = () => {
  return(
    <div className='social-media'>
      <a href='https://github.com/amandena'><img src={github} alt="github" width='25'/></a>
      <a href='https://www.linkedin.com/in/amandena/'><img src={linkedin} alt="linkedin" width='25'/></a>
      <a href='https://twitter.com/amandenacodes'><img src={twitter} alt="twitter" width='25'/></a>
    </div>
  )
}

export default SocialMedia

// links not going to sites