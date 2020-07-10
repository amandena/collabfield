import React from 'react'

class Blog extends React.Component {
  componentDidMount() {
    window.mediumWidget();
  }
  render() {
    return(
      <div className='blog'>
        <div id="medium-widget"></div>
      </div>
    )
  }
}

export default Blog