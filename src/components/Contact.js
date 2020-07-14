import React from 'react'

const Contact = () => {
  return(
    <div className='contact'>
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