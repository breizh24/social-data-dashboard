import React, { Component } from 'react'
import { Link } from "react-router-dom"
import Logo from '../components/Logo'


class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar__container">
        <div className="header__logo">
          <Logo />
        </div>
        <ul>
          <Link className="linkSide" to="/hashtags">
            <li>
              HASHTAGS
            </li>
          </Link>
          <Link className="linkSide" to="/acconuts">
            <li>
              ACCOUNTS
            </li>
          </Link>
          <Link className="linkSide" to="/personalità">
            <li>
              PERSONALITÀ
            </li>
          </Link>
          <Link className="linkSide" to="/competitors">
            <li>
              COMPETITORS
            </li>
          </Link>
        </ul>
      </div>
    )
  }
}

export default Sidebar
