import React from 'react'
import { Link } from 'react-scroll'
import image from '../assets/square.jpg'

const Home = () => {
  let TxtRotate = function(el, toRotate, period) {
    this.toRotate = toRotate
    this.el = el
    this.loopNum = 0
    this.period = parseInt(period, 10) || 2000
    this.txt = ''
    this.tick()
    this.isDeleting = false
  }
  
  TxtRotate.prototype.tick = function() {
    let i = this.loopNum % this.toRotate.length
    let fullTxt = this.toRotate[i]
  
    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1)
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1)
    }
  
    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>'
  
    let that = this
    let delta = 300 - Math.random() * 100
  
    if (this.isDeleting) { delta /= 2 }
  
    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period
      this.isDeleting = true
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false
      this.loopNum++
      delta = 500
    }
  
    setTimeout(function() {
      that.tick()
    }, delta)
  }
  
  window.onload = function() {
    let elements = document.getElementsByClassName('txt-rotate')
    for (let i=0; i<elements.length; i++) {
      let toRotate = elements[i].getAttribute('data-rotate')
      let period = elements[i].getAttribute('data-period')
      if (toRotate) {
        new TxtRotate(elements[i], JSON.parse(toRotate), period)
      }
    }
    let css = document.createElement("style")
    css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid rgb(165, 162, 162) }"
    document.body.appendChild(css)
  }

  return(
    <div className='home'>
      <h1>Amanda M Johnson</h1>
      <h2>
        <span
          className='txt-rotate'
          data-period="1000"
          data-rotate='["Full Stack Software Engineer", "Full Stack Web Developer", "Software Engineer Intern", "Graphic Designer"]'
        ></span>
      </h2>

      <img className='profile-pic' src={image} alt="that's me!" width='400'/>

      <h4>Hi! I'm Amanda.</h4>

      <p>I've been a barista, dog walker, fitness influencer, graphic designer, and managed a successful physical therapy company. After falling in love with coding, I now create applications for the web and am looking for a new full time role as a Full Stack Software Engineer. I recently started a position as a Software Engineer Intern working with a great team at an early-stage startup.</p>

      <p>I graduated from Flatiron School's Full Stack Web Development program earlier this year and have a Bachelor's degree in Graphic Design from Full Sail University.</p>
      
      <p>You can find me walking my dog around the block, or you can just drop me a line <Link 
        activeClass='active'
        to='contact'
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >here</Link>.</p>
    </div>
  )
}

export default Home