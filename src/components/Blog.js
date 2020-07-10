import React from 'react'

class Blog extends React.Component {
  componentDidMount() {
    window.mediumWidget();
  }
  render() {
    return(
      <div className='blog'>
        <h3>Here are my latest Blog posts:</h3>
        <div id="medium-widget"></div>
      </div>
    )
  }
}

export default Blog