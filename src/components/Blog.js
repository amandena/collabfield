import React from 'react'

class Blog extends React.Component {
  componentDidMount() {
    window.mediumWidget()
  }
  
  render() {
    return(
      <div className='blog container'>
        <div className='row'>
          <div className='col'>
            <h2>Blog</h2>
            <hr/>
          </div>
          <div className='col'>
            <div id="medium-widget"></div>
          </div>
        </div>
      </div>
    )
  }
}

export default Blog