import React from 'react'
import { Link } from 'react-router-dom'
import datescope from '../assets/portfolio/datescope.png'
import game from '../assets/portfolio/game.png'
import party from '../assets/portfolio/party.png'
import workouts from '../assets/portfolio/workouts.png'

const Portfolio = () => {
  return(
    <div className='portfolio'>
      <h2>Projects</h2>
      <h3>Code, debug, pet dog. Repeat</h3>
      <div className='projects'>
        <div className='project'>
          <img src={datescope} alt='datescope' width='380'/>

          <br/>

          <Link to='https://github.com/amandena/datescope-frontend'>GitHub FE </Link>
          <Link to='https://github.com/amandena/datescope-backend'>GitHub BE</Link>
        </div>

        <div className='project'>
          <img className='game' src={game} alt="amanda's game of life" width='368' />

          <br/>

          <Link to='https://github.com/amandena/2020-04-19-Conways-Game-of-Life-4-day-extended/tree/master/amandas-project'>GitHub</Link>
        </div>

        <div className='project'>
          <img className='party' src={party} alt='costume party' width='350' />

          <br/>

          <Link to='https://github.com/amandena/costume-party-js-project'>GitHub</Link>
        </div>

        <div className='project'>
          <img src={workouts} alt='my workouts' width='424' />

          <br/>

          <Link to='https://github.com/amandena/my-workouts-sinatra-project'>GitHub</Link>
        </div>
      </div>
    </div>
  )
}

export default Portfolio