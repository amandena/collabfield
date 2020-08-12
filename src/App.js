import React from 'react'
import './App.css'
import { Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import Skills from './components/Skills'
import Portfolio from './components/Portfolio'
import Blog from './components/Blog'
import Contact from './components/Contact'
import NavBar from './containers/NavBar'
import Footer from './components/Footer'

function App() {
  return(
    <div className='App'>
      <NavBar/>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/skills' component={Skills} />
        <Route exact path='/portfolio' component={Portfolio} />
        <Route exact path='/blog' component={Blog} />
        <Route exact path='/contact' component={Contact} />
      </Switch>
      <Skills />
      <Portfolio />
      <Blog />
      <Contact />
      <Footer/>
    </div>
  )
}

export default App
