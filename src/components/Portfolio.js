import React from 'react'
import datescope from '../assets/portfolio/datescope.png'
import game from '../assets/portfolio/game.png'
import party from '../assets/portfolio/party.png'
import workouts from '../assets/portfolio/workouts.png'

const Portfolio = () => {
  return(
    <div className='portfolio'>
      <h2>Portfolio</h2>
      <hr/>
      <div className='projects'>
        <div className='project'>
          <div className='datescope-container'>
            <div className='datescope'></div>
          </div>
          

          <br/>
          <h3>Datescope</h3>
          <em>Connect on a deeper level to find your true soulmate with matching based on horoscope compatibility.</em>

          <p> This project was built with a single-page web application by using a React/Redux UI & react-router and accomplished RESTful routing with a Rails API which manages the data persistence. I demonstrated use of asynchronous Redux actions with Redux Thunk to send & receive data from a server, & to respond to & modify state change.</p>

          <br/>

          <a href='https://github.com/amandena/datescope-frontend'>GitHub FE </a>
          <a href='https://github.com/amandena/datescope-backend'>GitHub BE</a>
        </div>

        <div className='project'>
          <img className='game' src={game} alt="amanda's game of life" width='268' />

          <br/>

          <h3>Conway's Game of Life</h3>
          <em>Recreated Conway’s Game of Life for a solo Hackathon submission.</em>

          <p>For ththis project, I developed a single-page game utilizing React, HTML5, & CSS3 which is maintaining and controlling state flow with the React state object.</p>

          <br/>

          <a href='https://github.com/amandena/2020-04-19-Conways-Game-of-Life-4-day-extended/tree/master/amandas-project'>GitHub</a>
        </div>

        <div className='project'>
          <img className='party' src={party} alt='costume party' width='255' />

          <br/>

          <h3>Costume Party</h3>
          <em>A place to collaborate & plan parties with friends & family during the spookiest time of year.</em>

          <p>With the Costume Party, I created a Rails API using REST API functionality with JavaScript & MVC patterns. Users are provided with encrypted Google authentication by utilizing OAuth.</p>

          <br/>

          <a href='https://github.com/amandena/costume-party-js-project'>GitHub</a>
        </div>

        <div className='project'>
          <img src={workouts} alt='my workouts' width='312' />

          <br/>

          <h3>My Workouts</h3>
          <em>Track all of your workouts in this convenient & easy to use app.</em>

          <p>This is one of my earlier projects where I mapped out a Sinatra database schema and logic utilizing ActiveRecord and SQLite3.</p>

          <br/>

          <a href='https://github.com/amandena/my-workouts-sinatra-project'>GitHub</a>
        </div>
      </div>
    </div>
  )
}

export default Portfolio