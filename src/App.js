import React from 'react'
import './App.css'
import Home from './components/Home'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Blog from './components/Blog'
import Contact from './components/Contact'

function App() {
  return(
    <div className="App">
      <h1>Amanda M Johnson</h1>
      <Home/>
      <About/>
      <Portfolio/>
      <Blog/>
      <Contact/>
    </div>
  )
}

export default App
