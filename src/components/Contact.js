import React from 'react'
import axios from 'axios'

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

  handleSubmit = e => {
    e.preventDefault()
    const name = document.getElementById('name').value
    const email = document.getElementById('email').value
    const message = document.getElementById('message').value
    axios({
        method: "POST", 
        url:"http://localhost:3002/send", 
        data: {
            name: name,   
            email: email,  
            messsage: message
        }
    }).then((response) => {
        if(response.data.msg === 'success'){
            alert("Message Sent.") 
            this.resetForm()
        } else if(response.data.msg === 'fail'){
            alert("Message failed to send.")
        }
    })
  }

  render() {
    return(
      <div className='contact'>
        <h2>Contact</h2>
        <h3>Get in touch</h3>
  
        <form onSubmit={this.handleSubmit}>
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