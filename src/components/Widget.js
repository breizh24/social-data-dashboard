import React, { Component } from 'react'

class Widget extends Component {
  render() {
    return (
      <div
        className="widget__container"
        style={
          this.props.width === 'small' ? { width: '40%' } : { width: '100%' }
        }
      >
        {this.props.children}
      </div>
    )
  }
}

export default Widget
