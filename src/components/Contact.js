import React from 'react'

class Contact extends React.Component {
  state = {
    name: '',
    email: '',
    message: ''
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return(
      <div className='contact'>
        <h2>Contact</h2>
        <h3>Get in touch</h3>
  
        <form>
          <input 
            type='text' 
            placeholder='Name'
            name='name'
            value={this.state.name}
            onChange={this.handleChange}
          />
  
          <br/>
  
          <input 
            type='text' 
            placeholder='Email'
            name='email'
            value={this.state.email} 
            onChange={this.handleChange}
          />
  
          <br/>
  
          <textarea 
            type='text' 
            placeholder='Message'
            name='message'
            value={this.state.message} 
            onChange={this.handleChange}
          />
  
          <br/>
  
          <input 
            type='submit' 
            value='Send' 
          />
        </form>
      </div>
    )
  }
  
}

export default Contact