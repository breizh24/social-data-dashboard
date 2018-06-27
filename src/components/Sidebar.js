import React, { Component } from 'react'
import Logo from '../components/Logo'

class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar__container">
        <Logo />
        <ul>
          <li>HASHTAGS</li>
          <li>ACCOUNTS</li>
          <li>PERSONALITÀ</li>
          <li>COMPETITORS</li>
        </ul>
      </div>
    )
  }
}

export default Sidebar
