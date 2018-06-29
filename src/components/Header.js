import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class Header extends Component {
  render() {
    return (
      <div className="header__container">
        <h1 className="titleMain"> DASHBOARD </h1>
        <hr className="hr__header" />
      </div>
    )
  }
}

export default Header
