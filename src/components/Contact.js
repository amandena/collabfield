import React from 'react'

const Contact = () => {
  return(
    <div className='contact'>
      <form>
        <input type='text' placeholder='Name' />
        <input type='text' placeholder='Email' />

        <br/><br/>

        <textarea type='text' placeholder='Message' />

        <br/><br/>

        <input type='submit' value='Send' />
      </form>
    </div>
  )
}

export default Contact