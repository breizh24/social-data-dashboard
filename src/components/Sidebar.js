import React, { Component } from 'react'
import { NavLink } from "react-router-dom"
import Logo from '../components/Logo'

class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar__container">
        <div className="header__logo">
          <NavLink
            className="LinkSide"
            to="/">
            <Logo />
          </NavLink>
        </div>
        <ul>
          <NavLink
            className="LinkSide"
            activeClassName="active"
            to="/hashtags">
            <li>
              HASHTAGS
            </li>
          </NavLink>
          <NavLink
            className="LinkSide"
            activeClassName="active"
            to="/accounts">
            <li>
              ACCOUNTS
            </li>
          </NavLink>
          <NavLink
            className="LinkSide"
            activeClassName="active"
            to="/personalità">
            <li>
              PERSONALITÀ
            </li>
          </NavLink>
          <NavLink
            className="LinkSide"
            activeClassName="active"
            to="/competitors">
            <li>
              COMPETITORS
            </li>
          </NavLink>
        </ul>
      </div>
    )
  }
}

export default Sidebar
