import React from 'react'

class Blog extends React.Component {
  componentDidMount() {
    window.mediumWidget();
  }
  render() {
    return(
      <div className='blog'>
        <h2>Blog</h2>
        <h3>Don't understand? Let's write about it</h3>

        <div id="medium-widget"></div>
      </div>
    )
  }
}

export default Blog