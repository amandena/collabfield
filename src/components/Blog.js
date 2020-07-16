import React from 'react'

class Blog extends React.Component {
  componentDidMount() {
    window.mediumWidget();
  }
  render() {
    return(
      <div className='blog'>
        <h2>Here Are My Latest Blog Posts:</h2>
        <div id="medium-widget"></div>
      </div>
    )
  }
}

export default Blog