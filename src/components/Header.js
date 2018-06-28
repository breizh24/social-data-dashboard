import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class Header extends Component {
  render() {
    return (
      <div className="header__container">
        <div className="logoLogin">
          <NavLink to="/login">
            <img className="stretch" src={require(
              '../img/logoLogin.png')}
            />
          </NavLink>
        </div>
      </div>
    )
  }
}

export default Header
