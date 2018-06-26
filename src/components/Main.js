import React, { Component } from 'react'

class Main extends Component {
  render() {
    return <div className="main__container">{this.props.children}</div>
  }
}

export default Main
