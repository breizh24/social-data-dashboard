import React, { Component } from 'react'
import Logo from '../components/Logo'

class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar__container">
        <div className="header__logo">
          <Logo />
        </div>
        <ul>
          <li>Hashtags</li>
          <li>Accounts</li>
          <li>Personalità</li>
          <li>Competitors</li>
        </ul>
      </div>
    )
  }
}

export default Sidebar
