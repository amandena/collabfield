import './App.css'
import './css/blog.css'
import './css/contact.css'
import './css/home.css'
import './css/navbar-footer.css'
import './css/portfolio.css'
import './css/skills.css'
import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import Skills from './components/Skills'
import Portfolio from './components/Portfolio'
import Blog from './components/Blog'
import Contact from './components/Contact'
import NavBar from './containers/NavBar'
import Footer from './components/Footer'
import Redirect404 from './components/Redirect404'

function App() {
  return(
    <div className='App'>
      <NavBar/>
      <Home />
      <Skills />
      <Portfolio />
      <Blog />
      <Contact />
      <Footer/>
      <Switch>
        <Route path="*" component={Redirect404} />
      </Switch>
    </div>
  )
}

export default App
