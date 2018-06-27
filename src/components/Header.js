import React, { Component } from 'react'
import Logo from '../components/Logo'

class Header extends Component {
  render() {
    return (
      <div className="header__container">
        <div className="header__logo">
          <Logo />
        </div>
      </div>
    )
  }
}

export default Header
