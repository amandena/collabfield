import React from 'react'
import { Link } from 'react-router-dom'

const Portfolio = () => {
  return(
    <div className='portfolio'>
      <h2>Here Are My Solo Projects:</h2>

      <div className='project'>
        <h3>Datescope</h3>
        <Link to='https://github.com/amandena/datescope-frontend'>GitHub FE</Link>
        <Link to='https://github.com/amandena/datescope-backend'>GitHub BE</Link>
      </div>

      <div className='project'>
        <h3>Costume Party</h3>
        <Link to='https://github.com/amandena/costume-party-js-project'>GitHub</Link>
      </div>

      <div className='project'>
        <h3>My Workouts</h3>
        <Link to='https://github.com/amandena/my-workouts-sinatra-project'>GitHub</Link>
      </div>
    </div>
  )
}

export default Portfolio