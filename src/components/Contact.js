import React from 'react'

const Contact = () => {
  return(
    <div className='contact'>
      <h2>Contact</h2>
      <h3>Get in touch</h3>

      <form>
        <input type='text' placeholder='Name' />

        <br/>

        <input type='text' placeholder='Email' />

        <br/>

        <textarea type='text' placeholder='Message' />

        <br/>

        <input type='submit' value='Send' />
      </form>
    </div>
  )
}

export default Contact