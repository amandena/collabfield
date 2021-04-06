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

    return (
      <div className='contact container'>
        <div className='row'>
          <div className='col'>
            <h2>Contact</h2>
          </div>
        </div>
        <Formik
          initialValues={{
            name: '',
            email: '',
            message: ''
        }}
          validationSchema={contactSchema}
          onSubmit={async (values, {setStatus, resetForm}) => {
            const response = await emailjs.send('default_service','template_kntisvj', values, 'user_ymh1s3CUbm1cv7wsJDyxc')
            if (response && response.status >= 300) {
              setStatus({message: "Something went wrong. Please try again later."})
            } else {
              setStatus({message: "Profile picture uploaded successfully!"})
              resetForm()
            }
          }}  
        >
          {({ touched, errors, status }) => (
            <Form>
              <div className="row">
                <div className="input-group col-8 offset-2 spacer-xs">
                  <div className='form-floating'>
                    <Field 
                      id='nameFloat'
                      autoComplete='off'
                      className={`form-control input-lg ${touched.name && errors.name ? "is-invalid" : ""}`}
                      type='text' 
                      placeholder='Name'
                      name='name'
                    />
                    <label htmlFor='nameFloat'>Name</label>
                    <ErrorMessage name='name' className='invalid-feedback' component='div'/>
                  </div>
                </div>
                <br/>
                <div className="input-group col-8 offset-2 spacer-xs">
                  <div className='form-floating'>
                    <Field
                      id='emailFloat'
                      autoComplete='off'
                      className={`form-control input-lg ${touched.email && errors.email ? "is-invalid" : ""}`}
                      type='email' 
                      placeholder='Email'
                      name='email'
                    />
                    <label htmlFor='emailFloat'>Email</label>
                    <ErrorMessage name='email' className='invalid-feedback' component='div'/>
                  </div>
                </div>
                <br/>
                <div className="input-group col-8 offset-2 spacer-xs">
                  <div className='form-floating'>
                    <Field 
                      id='messageFloat'
                      autoComplete='off'
                      className={`form-control input-lg ${touched.message && errors.message ? "is-invalid" : ""}`}
                      component='textarea' 
                      placeholder='Message'
                      name='message'
                    />
                    <label htmlFor='messageFloat'>Message</label>
                    <ErrorMessage name='message' className='invalid-feedback' component='div'/>
                  </div>
                </div>
                {status && status.message ? <div className={`col-8 offset-2 text-center alert ${status >= 300 ? "alert-danger" : "alert-success"}`}>{status.message}</div> : null}
                <div className="col-md-12 center spacer-xs">
                  <Field 
                    id='sendMessage'
                    type='submit' 
                    value='SEND MESSAGE' 
                    className="btn btn-primary" 
                  />
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    )
}

export default Contact