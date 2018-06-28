import React, { Component } from 'react'

class Widget extends Component {
  render() {
    return (
      <div className="widget__container" style={{ width: this.props.width }}>
        {this.props.children}
      </div>
    )
  }
}

export default Widget
