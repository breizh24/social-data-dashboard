import React, { Component } from 'react'
import { Link } from "react-router-dom"

class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar__container">
        <ul>
          <li>
            <Link to="/hashtags">
              HASHTAGS
            </Link>
          </li>
          <li>
            <Link to="/acconuts">
              ACCOUNTS
            </Link>
          </li>
          <li>
            <Link to="/personalità">
              PERSONALITÀ
            </Link>
          </li>
          <li>
            <Link to="/competitors">
              COMPETITORS
            </Link>
          </li>
        </ul>
      </div>
    )
  }
}

export default Sidebar
