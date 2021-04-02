import React from 'react'
import emailjs from 'emailjs-com'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'

const contactSchema = Yup.object().shape({
  name: Yup.string().required('Please enter your name.'),
  email: Yup.string().email('Invalid email address.').required('Please enter your email.'),
  message: Yup.string().required('Please enter your message.')
})

const Contact = () => {

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

  resetForm = () => {
    this.setState({
      name: '',
      email: '',
      message: ''
    })
  }

    return (
      <div className='contact container'>
        <div className='row'>
          <div className='col'>
            <h2>Contact</h2>
          </div>
        </div>
        <form onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="input-group col-8 offset-2 spacer-xs">
              <div className='form-floating'>
                <input 
                  autoComplete='off'
                  className='form-control'
                  type='text' 
                  placeholder='Name'
                  name='name'
                  value={this.state.name}
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <br/>
            <div className="input-group col-8 offset-2 spacer-xs">
              <div className='form-floating'>
                <input 
                  autoComplete='off'
                  className='form-control'
                  type='text' 
                  placeholder='Email'
                  name='email'
                  value={this.state.email} 
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <br/>
            <div className="input-group col-8 offset-2 spacer-xs">
              <div className='form-floating'>
                <textarea 
                  autoComplete='off'
                  className='form-control'
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

export default Contact