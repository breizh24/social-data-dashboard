import React, { Component } from 'react'

class Widget extends Component {
  render() {
    return (
      <div
        className="widget__graphs"
        style={{ width: this.props.width, flexBasis: this.props.flexBasis }}
      >
        {this.props.children}
      </div>
    )
  }
}

export default Widget
