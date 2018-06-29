import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Logo from './Logo'

class Header extends Component {
  render() {
    return (
      <div className="header__container">
        <div className="header__logo__container">
          <Link to="/">
            <Logo />
          </Link>
        </div>
        <div className="title__container">
          <h1 className="titleMain"> DASHBOARD </h1>
        </div>
      </div>
    )
  }
}

export default Header
