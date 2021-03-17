import React from 'react'
import emailjs from 'emailjs-com'

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
    if(this.state.name !== '' && (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(this.state.email)) && this.state.message !== '') {
      emailjs.send('default_service','template_kntisvj', this.state, 'user_ymh1s3CUbm1cv7wsJDyxc')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text)
        this.resetForm()
      }, (err) => {
        console.log('FAILED...', err)
      })
    } else {
      alert('Please fill in all fields and use a valid email address to send a message!')
    }
  }

  resetForm(){
    this.setState({
      name: '',
      email: '',
      message: ''
    })
  }

  render() {
    return(
      <div className='contact container'>
        <div className='row'>
          <div className='col'>
            <h2>Contact</h2>
          </div>
        </div>
        <form onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="col-8 offset-2 spacer-xs">
              <div className='form-floating'>
                <input 
                  type='text' 
                  placeholder='Name'
                  name='name'
                  value={this.state.name}
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <br/>
            <div className="col-8 offset-2 spacer-xs">
              <div className='form-floating'>
                <input 
                  type='text' 
                  placeholder='Email'
                  name='email'
                  value={this.state.email} 
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <br/>
            <div className="col-8 offset-2 spacer-xs">
              <div className='form-floating'>
                <textarea 
                  type='text' 
                  placeholder='Message'
                  name='message'
                  value={this.state.message} 
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <br/>
            <div className="col-md-12 center spacer-xs">
              <input 
                type='submit' 
                value='Send' 
              />
            </div>
          </div>
        </form>
      </div>
    )
  }
  
}

export default Contact