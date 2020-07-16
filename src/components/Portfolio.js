import React from 'react'
import { Link } from 'react-router-dom'

const Portfolio = () => {
  return(
    <div className='portfolio'>
      <h2>Here Are My Solo Projects:</h2>

      <Link to='#'>Datescope</Link>
      <Link to='#'>Costume Party</Link>
      <Link to='#'>My Workouts</Link>
    </div>
  )
}

export default Portfolio